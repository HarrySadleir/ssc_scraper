require(data.tree)
require(jsonlite)
require(igraph)
require(networkD3)

all = fromJSON("./input/all_bachelors.json", simplifyDataFrame = FALSE)
x = as.Node(all, mode = "explicit", check = "no-warn")

useRtreeList <- ToListExplicit(x, unname = TRUE)
radialNetwork(useRtreeList)

