from dataclasses import dataclass
from dataclasses_json import dataclass_json
from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep
from typing import List
import json

programs = []

@dataclass_json
@dataclass
class Specialization:
    code: str
    name: str

@dataclass_json
@dataclass
class Subject:
    code: str
    name: str
    href: str
    specializations: List[Specialization]

@dataclass_json
@dataclass
class Program:
    code: str
    name: str
    href: str
    subjects: List[Subject]

def main():
    try:
        tableXPath = "//table[@id='mainTable']//tbody//tr"
        driver=webdriver.Firefox()
        sleep(4)
        driver.get("https://courses.students.ubc.ca/cs/courseschedule?pname=spec&tname=spec")
        sleep(2)
        for row in driver.find_elements(By.XPATH, tableXPath):
            cols = row.find_elements(By.XPATH, "./*")
            programs.append(Program(cols[0].text, cols[1].text, cols[0].find_element(By.XPATH, "./a").get_attribute('href'), []))

        
        for program in programs:
            driver.get(program.href)
            sleep(1)
            for subject_row in driver.find_elements(By.XPATH, tableXPath):
                cols = subject_row.find_elements(By.XPATH, "./*")
                subject = Subject(cols[0].text, cols[1].text, cols[0].find_element(By.XPATH, "./a").get_attribute('href'), [])
                program.subjects.append(subject)

            for subject in program.subjects:
                driver.get(subject.href)
                sleep(1)
                try:  
                    for spec_row in driver.find_elements(By.XPATH, tableXPath):
                        spec_cols = spec_row.find_elements(By.XPATH, "./*")
                        subject.specializations.append(Specialization(spec_cols[0].text, spec_cols[1].text))
                finally:
                    pass               
            with open('output/' + program.code + '.json', 'w', encoding='utf-8') as f:
                json.dump(program.to_dict(), f, ensure_ascii=False, indent=4)
        
    finally:
        driver.close()
        driver.quit()
        



if __name__ == "__main__":
    main()
