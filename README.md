# UBC System Analysis
A repository to scrape and analyze public UBC data for use in an INFO 200 research assignment. 

# Components
- ssc_scraper.py: Uses Selenium to navigate between pages of the ssc and collect data from the tables. It stores the data in JSON files, which can be much more easily analyzed and visualized later on.
- radial_network_creator.R: Takes the outputs from ssc_scraper and creates radial network diagrams from the networkD3 package. Examples in `radial_network_creator/example_output`
- More to come: Currently planning more visualizations and components to the project as a whole
