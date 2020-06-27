
In this assessment, you'll create a screen that shows a list of collections, and per collection a list
of assets.

Use case 1: show a list of collections
On the left of the screen, show a list of collections, with for each collection:
1. a thumbnail of the master asset
2. the name of the collection

Use case 2: show a list of assets
When a collection is selected, show the list of it’s assets on the right of the screen. For each
asset display:
1. the image of the asset
2. the name of the asset
3. the id of the asset

Use case 3: make master
Each collection has 1 master asset, which is displayed as a thumbnail on the collection. It should
be possible to change the master asset of a collection.
For each asset, add:
1. a "Make master" button
2. an icon to indicate which asset is the current master asset
If you click on the "Make master" button next to an asset, this asset will become the new master
asset:
1. the thumbnail of the collection should be updated
2. the new master asset should get the indicator
3. the button should disappear for the asset that is currently master

Use case 4: sort assets (nice to have)
Assets should be sorted by name by default, but a drop down allows the user to toggle between
“Sort by id” and “Sort by name”.
Optionally create a custom hook for the sorting functionality.

Use case 5: recursive tags (nice to have)
Each collection has a hierarchical list of tags of unlimited depth.
Add a simple list of tags to each collection, e.g: "Cartoon > Simpsons family > 2014"