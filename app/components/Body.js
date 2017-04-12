var React = require("react");

var Body = React.createClass({
  render: function() {
    return (

        <div className="container">    
            
            <div id="inputcontainer">
                        <form>
                            <label>Enter City 1</label>
                            <select type="text" id="city-input" name="city-input">
                                <option value=""> </option>
                                <option value=" Abilene, TX"> Abilene, TX</option>
                                <option value=" Akron, OH "> Akron, OH </option>
                                <option value=" Albany, GA "> Albany, GA </option>
                                <option value=" Albany, NY "> Albany, NY </option>
                                <option value=" Albany, OR "> Albany, OR </option>
                                <option value=" Albuquerque, NM "> Albuquerque, NM </option>
                                <option value=" Alexandria, LA "> Alexandria, LA </option>
                                <option value=" Alexandria, VA "> Alexandria, VA </option>
                                <option value=" Allentown, PA "> Allentown, PA </option>
                                <option value=" Altoona, PA "> Altoona, PA </option>
                                <option value=" Amarillo, TX "> Amarillo, TX </option>
                                <option value=" Ames, IA "> Ames, IA </option>
                                <option value=" Anacortes, WA "> Anacortes, WA </option>
                                <option value=" Anaheim, CA "> Anaheim, CA </option>
                                <option value=" Anchorage, AK "> Anchorage, AK </option>
                                <option value=" Anderson, IN "> Anderson, IN </option>
                                <option value=" Anderson, SC "> Anderson, SC </option>
                                <option value=" Ann Arbor, MI "> Ann Arbor, MI </option>
                                <option value=" Anniston, AL "> Anniston, AL </option>
                                <option value=" Appleton, WI "> Appleton, WI </option>
                                <option value=" Arcade, CA "> Arcade, CA </option>
                                <option value=" Arden, CA "> Arden, CA </option>
                                <option value=" Arlington, TX "> Arlington, TX </option>
                                <option value=" Arlington, VA "> Arlington, VA </option>
                                <option value=" Arroyo Grande, CA "> Arroyo Grande, CA </option>
                                <option value=" Asheville, NC "> Asheville, NC </option>
                                <option value=" Ashland, KY "> Ashland, KY </option>
                                <option value=" Athens, GA "> Athens, GA </option>
                                <option value=" Atlanta, GA "> Atlanta, GA </option>
                                <option value=" Atlantic City, NJ "> Atlantic City, NJ </option>
                                <option value=" Auburn, AL "> Auburn, AL </option>
                                <option value=" Auburn, ME "> Auburn, ME </option>
                                <option value=" Augusta, GA "> Augusta, GA </option>
                                <option value=" Augusta, SC "> Augusta, SC </option>
                                <option value=" Aurora, CO "> Aurora, CO </option>
                                <option value=" Austin, TX "> Austin, TX </option>
                                <option value=" Bakersfield, CA "> Bakersfield, CA </option>
                                <option value=" Baltimore, MD "> Baltimore, MD </option>
                                <option value=" Bangor, ME "> Bangor, ME </option>
                                <option value=" Barnstable Town, MA "> Barnstable Town, MA </option>
                                <option value=" Baton Rouge, LA "> Baton Rouge, LA </option>
                                <option value=" Battle Creek, MI "> Battle Creek, MI </option>
                                <option value=" Bay City, MI "> Bay City, MI </option>
                                <option value=" Beaufort, SC "> Beaufort, SC </option>
                                <option value=" Beaumont, TX "> Beaumont, TX </option>
                                <option value=" Beckley, WV "> Beckley, WV </option>
                                <option value=" Bellevue, WA "> Bellevue, WA </option>
                                <option value=" Bellingham, WA "> Bellingham, WA </option>
                                <option value=" Beloit, WI "> Beloit, WI </option>
                                <option value=" Bend, OR "> Bend, OR </option>
                                <option value=" Benton Harbor, MI "> Benton Harbor, MI </option>
                                <option value=" Berwick, PA "> Berwick, PA </option>
                                <option value=" Bethlehem, PA "> Bethlehem, PA </option>
                                <option value=" Billings, MT "> Billings, MT </option>
                                <option value=" Biloxi, MS "> Biloxi, MS </option>
                                <option value=" Binghamton, NY "> Binghamton, NY </option>
                                <option value=" Birmingham, AL "> Birmingham, AL </option>
                                <option value=" Bismarck, ND "> Bismarck, ND </option>
                                <option value=" Blacksburg, VA "> Blacksburg, VA </option>
                                <option value=" Bloomington, IL "> Bloomington, IL </option>
                                <option value=" Bloomington, IN "> Bloomington, IN </option>
                                <option value=" Bloomington, MN "> Bloomington, MN </option>
                                <option value=" Bloomsburg, PA "> Bloomsburg, PA </option>
                                <option value=" Bluffton, SC "> Bluffton, SC </option>
                                <option value=" Boardman, OH "> Boardman, OH </option>
                                <option value=" Boise City, ID "> Boise City, ID </option>
                                <option value=" Bossier City, LA "> Bossier City, LA </option>
                                <option value=" Boston, MA "> Boston, MA </option>
                                <option value=" Boulder, CO "> Boulder, CO </option>
                                <option value=" Bowling Green, KY "> Bowling Green, KY </option>
                                <option value=" Bradenton, FL "> Bradenton, FL </option>
                                <option value=" Bremerton, WA "> Bremerton, WA </option>
                                <option value=" Brent, FL "> Brent, FL </option>
                                <option value=" Bridgeport, CT "> Bridgeport, CT </option>
                                <option value=" Bridgeton, NJ "> Bridgeton, NJ </option>
                                <option value=" Bristol, VA "> Bristol, VA </option>
                                <option value=" Brownsville, TX "> Brownsville, TX </option>
                                <option value=" Brunswick, GA "> Brunswick, GA </option>
                                <option value=" Bryan, TX "> Bryan, TX </option>
                                <option value=" Buffalo, NY "> Buffalo, NY </option>
                                <option value=" Burlington, NC "> Burlington, NC </option>
                                <option value=" Burlington, VT "> Burlington, VT </option>
                                <option value=" California, MD "> California, MD </option>
                                <option value=" Cambridge, MA "> Cambridge, MA </option>
                                <option value=" Camden, NJ "> Camden, NJ </option>
                                <option value=" Canton, OH "> Canton, OH </option>
                                <option value=" Cape Coral, FL "> Cape Coral, FL </option>
                                <option value=" Cape Girardeau, IL "> Cape Girardeau, IL </option>
                                <option value=" Cape Girardeau, MO "> Cape Girardeau, MO </option>
                                <option value=" Carbondale, IL "> Carbondale, IL </option>
                                <option value=" Carlisle, PA "> Carlisle, PA </option>
                                <option value=" Carlsbad, CA "> Carlsbad, CA </option>
                                <option value=" Carmel, IN "> Carmel, IN </option>
                                <option value=" Carson City, NV "> Carson City, NV </option>
                                <option value=" Casper, WY "> Casper, WY </option>
                                <option value=" Cedar Falls, IA "> Cedar Falls, IA </option>
                                <option value=" Cedar Rapids, IA "> Cedar Rapids, IA </option>
                                <option value=" Chambersburg, PA "> Chambersburg, PA </option>
                                <option value=" Champaign, IL "> Champaign, IL </option>
                                <option value=" Chapel Hill, NC "> Chapel Hill, NC </option>
                                <option value=" Charleston, SC "> Charleston, SC </option>
                                <option value=" Charleston, WV "> Charleston, WV </option>
                                <option value=" Charlotte, NC "> Charlotte, NC </option>
                                <option value=" Charlottesville, VA "> Charlottesville, VA </option>
                                <option value=" Chattanooga, GA "> Chattanooga, GA </option>
                                <option value=" Chattanooga, TN "> Chattanooga, TN </option>
                                <option value=" Cheektowaga, NY "> Cheektowaga, NY </option>
                                <option value=" Cheyenne, WY "> Cheyenne, WY </option>
                                <option value=" Chicago, IL "> Chicago, IL </option>
                                <option value=" Chico, CA "> Chico, CA </option>
                                <option value=" Christiansburg, VA "> Christiansburg, VA </option>
                                <option value=" Cincinnati, IN "> Cincinnati, IN </option>
                                <option value=" Cincinnati, KY "> Cincinnati, KY </option>
                                <option value=" Cincinnati, OH "> Cincinnati, OH </option>
                                <option value=" Clarksville, KY "> Clarksville, KY </option>
                                <option value=" Clarksville, TN "> Clarksville, TN </option>
                                <option value=" Clearfield, UT "> Clearfield, UT </option>
                                <option value=" Clearwater, FL "> Clearwater, FL </option>
                                <option value=" Cleveland, OH "> Cleveland, OH </option>
                                <option value=" Cleveland, TN "> Cleveland, TN </option>
                                <option value=" Coeur d'Alene, ID "> Coeur d'Alene, ID </option>
                                <option value=" College Station, TX "> College Station, TX </option>
                                <option value=" Colorado Springs, CO "> Colorado Springs, CO </option>
                                <option value=" Columbia, MD "> Columbia, MD </option>
                                <option value=" Columbia, MO "> Columbia, MO </option>
                                <option value=" Columbia, SC "> Columbia, SC </option>
                                <option value=" Columbus, AL "> Columbus, AL </option>
                                <option value=" Columbus, GA "> Columbus, GA </option>
                                <option value=" Columbus, IN "> Columbus, IN </option>
                                <option value=" Columbus, OH "> Columbus, OH </option>
                                <option value=" Concord, NC "> Concord, NC </option>
                                <option value=" Conway, AR "> Conway, AR </option>
                                <option value=" Conway, SC "> Conway, SC </option>
                                <option value=" Corcoran, CA "> Corcoran, CA </option>
                                <option value=" Corpus Christi, TX "> Corpus Christi, TX </option>
                                <option value=" Corvallis, OR "> Corvallis, OR </option>
                                <option value=" Council Bluffs, IA "> Council Bluffs, IA </option>
                                <option value=" Crestview, FL "> Crestview, FL </option>
                                <option value=" Cumberland, MD "> Cumberland, MD </option>
                                <option value=" Cumberland, WV "> Cumberland, WV </option>
                                <option value=" Dallas, TX "> Dallas, TX </option>
                                <option value=" Dalton, GA "> Dalton, GA </option>
                                <option value=" Danville, IL "> Danville, IL </option>
                                <option value=" Daphne, AL "> Daphne, AL </option>
                                <option value=" Davenport, IA "> Davenport, IA </option>
                                <option value=" Davidson, TN "> Davidson, TN </option>
                                <option value=" Dayton, OH "> Dayton, OH </option>
                                <option value=" Daytona Beach, FL "> Daytona Beach, FL </option>
                                <option value=" Dearborn, MI "> Dearborn, MI </option>
                                <option value=" Decatur, AL "> Decatur, AL </option>
                                <option value=" Decatur, IL "> Decatur, IL </option>
                                <option value=" Deltona, FL "> Deltona, FL </option>
                                <option value=" Denison, TX "> Denison, TX </option>
                                <option value=" Denver, CO "> Denver, CO </option>
                                <option value=" Des Moines, IA "> Des Moines, IA </option>
                                <option value=" Destin, FL "> Destin, FL </option>
                                <option value=" Detroit, MI "> Detroit, MI </option>
                                <option value=" Dothan, AL "> Dothan, AL </option>
                                <option value=" Douglas, AZ "> Douglas, AZ </option>
                                <option value=" Dover, DE "> Dover, DE </option>
                                <option value=" Dubuque, IA "> Dubuque, IA </option>
                                <option value=" Duluth, MN "> Duluth, MN </option>
                                <option value=" Durham, NC "> Durham, NC </option>
                                <option value=" East Hartford, CT "> East Hartford, CT </option>
                                <option value=" East Lansing, MI "> East Lansing, MI </option>
                                <option value=" East Stroudsburg, PA "> East Stroudsburg, PA </option>
                                <option value=" Easton, PA "> Easton, PA </option>
                                <option value=" Eau Claire, WI "> Eau Claire, WI </option>
                                <option value=" Edinburg, TX "> Edinburg, TX </option>
                                <option value=" El Centro, CA "> El Centro, CA </option>
                                <option value=" El Paso, TX "> El Paso, TX </option>
                                <option value=" Elgin, IL "> Elgin, IL </option>
                                <option value=" Elizabethtown, KY "> Elizabethtown, KY </option>
                                <option value=" Elkhart, IN "> Elkhart, IN </option>
                                <option value=" Elmira, NY "> Elmira, NY </option>
                                <option value=" Elyria, OH "> Elyria, OH </option>
                                <option value=" Erie, PA "> Erie, PA </option>
                                <option value=" Eugene, OR "> Eugene, OR </option>
                                <option value=" Evansville, IN "> Evansville, IN </option>
                                <option value=" Evansville, KY "> Evansville, KY </option>
                                <option value=" Fairbanks, AK "> Fairbanks, AK </option>
                                <option value=" Fairfield, CA "> Fairfield, CA </option>
                                <option value=" Fairhope, AL "> Fairhope, AL </option>
                                <option value=" Fargo, ND "> Fargo, ND </option>
                                <option value=" Farmington, NM "> Farmington, NM </option>
                                <option value=" Fayette, KY "> Fayette, KY </option>
                                <option value=" Fayetteville, AR "> Fayetteville, AR </option>
                                <option value=" Fayetteville, NC "> Fayetteville, NC </option>
                                <option value=" Ferry Pass, FL "> Ferry Pass, FL </option>
                                <option value=" Flagstaff, AZ "> Flagstaff, AZ </option>
                                <option value=" Flint, MI "> Flint, MI </option>
                                <option value=" Florence, AL "> Florence, AL </option>
                                <option value=" Florence, SC "> Florence, SC </option>
                                <option value=" Foley, AL "> Foley, AL </option>
                                <option value=" Fond du Lac, WI "> Fond du Lac, WI </option>
                                <option value=" Fort Collins, CO "> Fort Collins, CO </option>
                                <option value=" Fort Drum, NY "> Fort Drum, NY </option>
                                <option value=" Fort Knox, KY "> Fort Knox, KY </option>
                                <option value=" Fort Lauderdale, FL "> Fort Lauderdale, FL </option>
                                <option value=" Fort Myers, FL "> Fort Myers, FL </option>
                                <option value=" Fort Smith, AR "> Fort Smith, AR </option>
                                <option value=" Fort Smith, OK "> Fort Smith, OK </option>
                                <option value=" Fort Walton Beach, FL "> Fort Walton Beach, FL </option>
                                <option value=" Fort Wayne, IN "> Fort Wayne, IN </option>
                                <option value=" Fort Worth, TX "> Fort Worth, TX </option>
                                <option value=" Franklin, TN "> Franklin, TN </option>
                                <option value=" Fresno, CA "> Fresno, CA </option>
                                <option value=" Gadsden, AL "> Gadsden, AL </option>
                                <option value=" Gainesville, FL "> Gainesville, FL </option>
                                <option value=" Gainesville, GA "> Gainesville, GA </option>
                                <option value=" Gastonia, NC "> Gastonia, NC </option>
                                <option value=" Gastonia, SC "> Gastonia, SC </option>
                                <option value=" Gettysburg, PA "> Gettysburg, PA </option>
                                <option value=" Glens Falls, NY "> Glens Falls, NY </option>
                                <option value=" Goldsboro, NC "> Goldsboro, NC </option>
                                <option value=" Goshen, IN "> Goshen, IN </option>
                                <option value=" Grand Forks, MN "> Grand Forks, MN </option>
                                <option value=" Grand Forks, ND "> Grand Forks, ND </option>
                                <option value=" Grand Island, NE "> Grand Island, NE </option>
                                <option value=" Grand Junction, CO "> Grand Junction, CO </option>
                                <option value=" Grand Rapids, MI "> Grand Rapids, MI </option>
                                <option value=" Grants Pass, OR "> Grants Pass, OR </option>
                                <option value=" Great Falls, MT "> Great Falls, MT </option>
                                <option value=" Greeley, CO "> Greeley, CO </option>
                                <option value=" Green Bay, WI "> Green Bay, WI </option>
                                <option value=" Greensboro, NC "> Greensboro, NC </option>
                                <option value=" Greenville, NC "> Greenville, NC </option>
                                <option value=" Greenville, SC "> Greenville, SC </option>
                                <option value=" Gulfport, MS "> Gulfport, MS </option>
                                <option value=" Hagerstown, MD "> Hagerstown, MD </option>
                                <option value=" Hammond, LA "> Hammond, LA </option>
                                <option value=" Hammonton, NJ "> Hammonton, NJ </option>
                                <option value=" Hanford, CA "> Hanford, CA </option>
                                <option value=" Hanover, PA "> Hanover, PA </option>
                                <option value=" Harlingen, TX "> Harlingen, TX </option>
                                <option value=" Harrisburg, PA "> Harrisburg, PA </option>
                                <option value=" Harrisonburg, VA "> Harrisonburg, VA </option>
                                <option value=" Hartford, CT "> Hartford, CT </option>
                                <option value=" Hattiesburg, MS "> Hattiesburg, MS </option>
                                <option value=" Hayward, CA "> Hayward, CA </option>
                                <option value=" Hazleton, PA "> Hazleton, PA </option>
                                <option value=" Henderson, NV "> Henderson, NV </option>
                                <option value=" Hickory, NC "> Hickory, NC </option>
                                <option value=" High Point, NC "> High Point, NC </option>
                                <option value=" Hillsboro, OR "> Hillsboro, OR </option>
                                <option value=" Hilton Head Island, SC "> Hilton Head Island, SC </option>
                                <option value=" Hinesville, GA "> Hinesville, GA </option>
                                <option value=" Homosassa Springs, FL "> Homosassa Springs, FL </option>
                                <option value=" Honolulu, HI "> Honolulu, HI </option>
                                <option value=" Hoover, AL "> Hoover, AL </option>
                                <option value=" Hot Springs, AR "> Hot Springs, AR </option>
                                <option value=" Houma, LA "> Houma, LA </option>
                                <option value=" Houston, TX "> Houston, TX </option>
                                <option value=" Huntington, WV "> Huntington, WV </option>
                                <option value=" Huntsville, AL "> Huntsville, AL </option>
                                <option value=" Idaho Falls, ID "> Idaho Falls, ID </option>
                                <option value=" Immokalee, FL "> Immokalee, FL </option>
                                <option value=" Indianapolis, IN "> Indianapolis, IN </option>
                                <option value=" Iowa City, IA "> Iowa City, IA </option>
                                <option value=" Ironton, OH "> Ironton, OH </option>
                                <option value=" Ithaca, NY "> Ithaca, NY </option>
                                <option value=" Jackson, MI "> Jackson, MI </option>
                                <option value=" Jackson, MS "> Jackson, MS </option>
                                <option value=" Jackson, TN "> Jackson, TN </option>
                                <option value=" Jacksonville, AL "> Jacksonville, AL </option>
                                <option value=" Jacksonville, FL "> Jacksonville, FL </option>
                                <option value=" Jacksonville, NC "> Jacksonville, NC </option>
                                <option value=" Janesville, WI "> Janesville, WI </option>
                                <option value=" Jefferson City, MO "> Jefferson City, MO </option>
                                <option value=" Jersey City, NJ "> Jersey City, NJ </option>
                                <option value=" Johnson City, TN "> Johnson City, TN </option>
                                <option value=" Johnstown, PA "> Johnstown, PA </option>
                                <option value=" Jonesboro, AR "> Jonesboro, AR </option>
                                <option value=" Joplin, MO "> Joplin, MO </option>
                                <option value=" Kahului, HI "> Kahului, HI </option>
                                <option value=" Kalamazoo, MI "> Kalamazoo, MI </option>
                                <option value=" Kankakee, IL "> Kankakee, IL </option>
                                <option value=" Kansas City, KS "> Kansas City, KS </option>
                                <option value=" Kansas City, MO "> Kansas City, MO </option>
                                <option value=" Kennewick, WA "> Kennewick, WA </option>
                                <option value=" Killeen, TX "> Killeen, TX </option>
                                <option value=" Kingman, AZ "> Kingman, AZ </option>
                                <option value=" Kingsport-Bristol, TN "> Kingsport-Bristol, TN </option>
                                <option value=" Kingston, NY "> Kingston, NY </option>
                                <option value=" Kissimmee, FL "> Kissimmee, FL </option>
                                <option value=" Knoxville, TN "> Knoxville, TN </option>
                                <option value=" Kokomo, IN "> Kokomo, IN </option>
                                <option value=" La Crosse, WI "> La Crosse, WI </option>
                                <option value=" La Porte, IN "> La Porte, IN </option>
                                <option value=" Lafayette, IN "> Lafayette, IN </option>
                                <option value=" Lafayette, LA "> Lafayette, LA </option>
                                <option value=" Lahaina, HI "> Lahaina, HI </option>
                                <option value=" Lake Charles, LA "> Lake Charles, LA </option>
                                <option value=" Lake Havasu City, AZ "> Lake Havasu City, AZ </option>
                                <option value=" Lakeland, FL "> Lakeland, FL </option>
                                <option value=" Lakewood, CO "> Lakewood, CO </option>
                                <option value=" Lancaster, PA "> Lancaster, PA </option>
                                <option value=" Lansing, MI "> Lansing, MI </option>
                                <option value=" Laredo, TX "> Laredo, TX </option>
                                <option value=" Las Cruces, NM "> Las Cruces, NM </option>
                                <option value=" Las Vegas, NV "> Las Vegas, NV </option>
                                <option value=" Lawrence, KS "> Lawrence, KS </option>
                                <option value=" Lawton, OK "> Lawton, OK </option>
                                <option value=" Lebanon, PA "> Lebanon, PA </option>
                                <option value=" Lenoir, NC "> Lenoir, NC </option>
                                <option value=" Lewiston, ID "> Lewiston, ID </option>
                                <option value=" Lewiston, ME "> Lewiston, ME </option>
                                <option value=" Lexington Park, MD "> Lexington Park, MD </option>
                                <option value=" Lexington, KY "> Lexington, KY </option>
                                <option value=" Lima, OH "> Lima, OH </option>
                                <option value=" Lincoln, NE "> Lincoln, NE </option>
                                <option value=" Little Rock, AR "> Little Rock, AR </option>
                                <option value=" Lodi, CA "> Lodi, CA </option>
                                <option value=" Logan, UT "> Logan, UT </option>
                                <option value=" Long Beach, CA "> Long Beach, CA </option>
                                <option value=" Longview, TX "> Longview, TX </option>
                                <option value=" Longview, WA "> Longview, WA </option>
                                <option value=" Los Angeles, CA "> Los Angeles, CA </option>
                                <option value=" Louisville, KY "> Louisville, KY </option>
                                <option value=" Lubbock, TX "> Lubbock, TX </option>
                                <option value=" Lynchburg, VA "> Lynchburg, VA </option>
                                <option value=" Macon, GA "> Macon, GA </option>
                                <option value=" Madera, CA "> Madera, CA </option>
                                <option value=" Madison, WI "> Madison, WI </option>
                                <option value=" Manchester, NH "> Manchester, NH </option>
                                <option value=" Manhattan, KS "> Manhattan, KS </option>
                                <option value=" Mankato, MN "> Mankato, MN </option>
                                <option value=" Mansfield, OH "> Mansfield, OH </option>
                                <option value=" Marco Island, FL "> Marco Island, FL </option>
                                <option value=" Marion, IL "> Marion, IL </option>
                                <option value=" Martinsburg, WV "> Martinsburg, WV </option>
                                <option value=" Massillon, OH "> Massillon, OH </option>
                                <option value=" Mauldin, SC "> Mauldin, SC </option>
                                <option value=" McAllen, TX "> McAllen, TX </option>
                                <option value=" Medford, OR "> Medford, OR </option>
                                <option value=" Melbourne, FL "> Melbourne, FL </option>
                                <option value=" Memphis, TN "> Memphis, TN </option>
                                <option value=" Merced, CA "> Merced, CA </option>
                                <option value=" Mesa, AZ "> Mesa, AZ </option>
                                <option value=" Metairie, LA "> Metairie, LA </option>
                                <option value=" Miami, FL "> Miami, FL </option>
                                <option value=" Michigan City, IN "> Michigan City, IN </option>
                                <option value=" Midland, MI "> Midland, MI </option>
                                <option value=" Midland, TX "> Midland, TX </option>
                                <option value=" Milford, CT "> Milford, CT </option>
                                <option value=" Milwaukee, WI "> Milwaukee, WI </option>
                                <option value=" Minneapolis, MN "> Minneapolis, MN </option>
                                <option value=" Mishawaka, IN "> Mishawaka, IN </option>
                                <option value=" Mission, TX "> Mission, TX </option>
                                <option value=" Missoula, MT "> Missoula, MT </option>
                                <option value=" Mobile, AL "> Mobile, AL </option>
                                <option value=" Modesto, CA "> Modesto, CA </option>
                                <option value=" Moline, IL "> Moline, IL </option>
                                <option value=" Monroe, LA "> Monroe, LA </option>
                                <option value=" Monroe, MI "> Monroe, MI </option>
                                <option value=" Montgomery, AL "> Montgomery, AL </option>
                                <option value=" Moorhead, MN "> Moorhead, MN </option>
                                <option value=" Morganton, NC "> Morganton, NC </option>
                                <option value=" Morgantown, WV "> Morgantown, WV </option>
                                <option value=" Morristown, TN "> Morristown, TN </option>
                                <option value=" Mount Vernon, WA "> Mount Vernon, WA </option>
                                <option value=" Muncie, IN "> Muncie, IN </option>
                                <option value=" Murfreesboro, TN "> Murfreesboro, TN </option>
                                <option value=" Muscle Shoals, AL "> Muscle Shoals, AL </option>
                                <option value=" Muskegon, MI "> Muskegon, MI </option>
                                <option value=" Myrtle Beach, SC "> Myrtle Beach, SC </option>
                                <option value=" Napa, CA "> Napa, CA </option>
                                <option value=" Naperville, IL "> Naperville, IL </option>
                                <option value=" Naples, FL "> Naples, FL </option>
                                <option value=" Nashua, NH "> Nashua, NH </option>
                                <option value=" Nashville, TN "> Nashville, TN </option>
                                <option value=" Neenah, WI "> Neenah, WI </option>
                                <option value=" New Bern, NC "> New Bern, NC </option>
                                <option value=" New Braunfels, TX "> New Braunfels, TX </option>
                                <option value=" New Haven, CT "> New Haven, CT </option>
                                <option value=" New London, CT "> New London, CT </option>
                                <option value=" New Orleans, LA "> New Orleans, LA </option>
                                <option value=" New York, NY "> New York, NY </option>
                                <option value=" Newark, NJ "> Newark, NJ </option>
                                <option value=" Newport News, VA "> Newport News, VA </option>
                                <option value=" Newton, MA "> Newton, MA </option>
                                <option value=" Newton, NH "> Newton, NH </option>
                                <option value=" Niagara Falls, NY "> Niagara Falls, NY </option>
                                <option value=" Niles, MI "> Niles, MI </option>
                                <option value=" Norfolk, VA "> Norfolk, VA </option>
                                <option value=" North Charleston, SC "> North Charleston, SC </option>
                                <option value=" North Little Rock, AR "> North Little Rock, AR </option>
                                <option value=" North Mankato, MN "> North Mankato, MN </option>
                                <option value=" North Myrtle Beach, SC "> North Myrtle Beach, SC </option>
                                <option value=" North Port, FL "> North Port, FL </option>
                                <option value=" Norwalk, CT "> Norwalk, CT </option>
                                <option value=" Norwich, CT "> Norwich, CT </option>
                                <option value=" Oakland, CA "> Oakland, CA </option>
                                <option value=" Ocala, FL "> Ocala, FL </option>
                                <option value=" Ocean City, NJ "> Ocean City, NJ </option>
                                <option value=" Odessa, TX "> Odessa, TX </option>
                                <option value=" Ogden, UT "> Ogden, UT </option>
                                <option value=" Oklahoma City, OK "> Oklahoma City, OK </option>
                                <option value=" Olympia, WA "> Olympia, WA </option>
                                <option value=" Omaha, NE "> Omaha, NE </option>
                                <option value=" Onalaska, WI "> Onalaska, WI </option>
                                <option value=" Ontario, CA "> Ontario, CA </option>
                                <option value=" Opelika, AL "> Opelika, AL </option>
                                <option value=" Orem, UT "> Orem, UT </option>
                                <option value=" Orlando, FL "> Orlando, FL </option>
                                <option value=" Ormond Beach, FL "> Ormond Beach, FL </option>
                                <option value=" Oshkosh, WI ,"> Oshkosh, WI ,</option>
                                <option value=" Owensboro, KY "> Owensboro, KY </option>
                                <option value=" Oxford, AL "> Oxford, AL </option>
                                <option value=" Oxnard, CA "> Oxnard, CA </option>
                                <option value=" Palm Bay, FL "> Palm Bay, FL </option>
                                <option value=" Panama City, FL "> Panama City, FL </option>
                                <option value=" Paradise, NV "> Paradise, NV </option>
                                <option value=" Parkersburg, WV "> Parkersburg, WV </option>
                                <option value=" Pascagoula, MS "> Pascagoula, MS </option>
                                <option value=" Paso Robles, CA "> Paso Robles, CA </option>
                                <option value=" Pensacola, FL "> Pensacola, FL </option>
                                <option value=" Peoria, IL "> Peoria, IL </option>
                                <option value=" Philadelphia, PA "> Philadelphia, PA </option>
                                <option value=" Phoenix, AZ "> Phoenix, AZ </option>
                                <option value=" Pine Bluff, AR "> Pine Bluff, AR </option>
                                <option value=" Pittsburgh, PA "> Pittsburgh, PA </option>
                                <option value=" Pittsfield, MA "> Pittsfield, MA </option>
                                <option value=" Pocatello, ID "> Pocatello, ID </option>
                                <option value=" Port Arthur, TX "> Port Arthur, TX </option>
                                <option value=" Port St. Lucie, FL "> Port St. Lucie, FL </option>
                                <option value=" Portage, MI "> Portage, MI </option>
                                <option value=" Porterville, CA "> Porterville, CA </option>
                                <option value=" Portland, ME "> Portland, ME </option>
                                <option value=" Portland, OR "> Portland, OR </option>
                                <option value=" Prescott, AZ "> Prescott, AZ </option>
                                <option value=" Providence, RI "> Providence, RI </option>
                                <option value=" Provo, UT "> Provo, UT </option>
                                <option value=" Pueblo, CO "> Pueblo, CO </option>
                                <option value=" Punta Gorda, FL "> Punta Gorda, FL </option>
                                <option value=" Racine, WI "> Racine, WI </option>
                                <option value=" Radford, VA "> Radford, VA </option>
                                <option value=" Raleigh, NC "> Raleigh, NC </option>
                                <option value=" Rapid City, SD "> Rapid City, SD </option>
                                <option value=" Reading, PA "> Reading, PA </option>
                                <option value=" Redding, CA "> Redding, CA </option>
                                <option value=" Redmond, OR "> Redmond, OR </option>
                                <option value=" Reno, NV "> Reno, NV </option>
                                <option value=" Richland, WA "> Richland, WA </option>
                                <option value=" Richmond, VA "> Richmond, VA </option>
                                <option value=" Riverside, CA "> Riverside, CA </option>
                                <option value=" Roanoke, VA "> Roanoke, VA </option>
                                <option value=" Rochester, MN "> Rochester, MN </option>
                                <option value=" Rochester, NY "> Rochester, NY </option>
                                <option value=" Rock Island, IL "> Rock Island, IL </option>
                                <option value=" Rockford, IL "> Rockford, IL </option>
                                <option value=" Rocky Mount, NC "> Rocky Mount, NC </option>
                                <option value=" Rogers, AR "> Rogers, AR </option>
                                <option value=" Rome, GA "> Rome, GA </option>
                                <option value=" Rome, NY "> Rome, NY </option>
                                <option value=" Roseville, CA "> Roseville, CA </option>
                                <option value=" Roswell, GA "> Roswell, GA </option>
                                <option value=" Round Rock, TX "> Round Rock, TX </option>
                                <option value=" Sacramento, CA "> Sacramento, CA </option>
                                <option value=" Saginaw, MI "> Saginaw, MI </option>
                                <option value=" Salem, OR "> Salem, OR </option>
                                <option value=" Salinas, CA "> Salinas, CA </option>
                                <option value=" Salisbury, MD "> Salisbury, MD </option>
                                <option value=" Salt Lake City, UT "> Salt Lake City, UT </option>
                                <option value=" San Angelo, TX "> San Angelo, TX </option>
                                <option value=" San Antonio, TX "> San Antonio, TX </option>
                                <option value=" San Bernardino, CA "> San Bernardino, CA </option>
                                <option value=" San Diego, CA "> San Diego, CA </option>
                                <option value=" San Francisco, CA "> San Francisco, CA </option>
                                <option value=" San Jose, CA "> San Jose, CA </option>
                                <option value=" San Luis Obispo, CA "> San Luis Obispo, CA </option>
                                <option value=" Sandy Springs, GA "> Sandy Springs, GA </option>
                                <option value=" Sanford, FL "> Sanford, FL </option>
                                <option value=" Santa Barbara, CA "> Santa Barbara, CA </option>
                                <option value=" Santa Clara, CA "> Santa Clara, CA </option>
                                <option value=" Santa Cruz, CA "> Santa Cruz, CA </option>
                                <option value=" Santa Fe, NM "> Santa Fe, NM </option>
                                <option value=" Santa Maria, CA "> Santa Maria, CA </option>
                                <option value=" Santa Rosa, CA "> Santa Rosa, CA </option>
                                <option value=" Sarasota, FL "> Sarasota, FL </option>
                                <option value=" Savannah, GA "> Savannah, GA </option>
                                <option value=" Schenectady, NY "> Schenectady, NY </option>
                                <option value=" Scottsdale, AZ "> Scottsdale, AZ </option>
                                <option value=" Scranton, PA "> Scranton, PA </option>
                                <option value=" Seattle, WA "> Seattle, WA </option>
                                <option value=" Sebastian, FL "> Sebastian, FL </option>
                                <option value=" Sebring, FL "> Sebring, FL </option>
                                <option value=" Sheboygan, WI "> Sheboygan, WI </option>
                                <option value=" Sherman, TX "> Sherman, TX </option>
                                <option value=" Shreveport, LA "> Shreveport, LA </option>
                                <option value=" Sierra Vista, AZ "> Sierra Vista, AZ </option>
                                <option value=" Silverdale, WA "> Silverdale, WA </option>
                                <option value=" Sioux City, IA "> Sioux City, IA </option>
                                <option value=" Sioux Falls, SD "> Sioux Falls, SD </option>
                                <option value=" South Bend, IN "> South Bend, IN </option>
                                <option value=" South Burlington, VT "> South Burlington, VT </option>
                                <option value=" South Portland, ME "> South Portland, ME </option>
                                <option value=" Spartanburg, SC "> Spartanburg, SC </option>
                                <option value=" Spokane Valley, WA "> Spokane Valley, WA </option>
                                <option value=" Spokane, WA "> Spokane, WA </option>
                                <option value=" Springdale, MO "> Springdale, MO </option>
                                <option value=" Springfield, IL "> Springfield, IL </option>
                                <option value=" Springfield, MA "> Springfield, MA </option>
                                <option value=" Springfield, MO "> Springfield, MO </option>
                                <option value=" Springfield, OH "> Springfield, OH </option>
                                <option value=" St. Cloud, MN "> St. Cloud, MN </option>
                                <option value=" St. George, UT "> St. George, UT </option>
                                <option value=" St. Joseph, MO "> St. Joseph, MO </option>
                                <option value=" St. Louis, MO "> St. Louis, MO </option>
                                <option value=" St. Paul, MN "> St. Paul, MN </option>
                                <option value=" St. Petersburg, FL "> St. Petersburg, FL </option>
                                <option value=" Stamford, CT "> Stamford, CT </option>
                                <option value=" State College, PA "> State College, PA </option>
                                <option value=" Staunton, VA "> Staunton, VA </option>
                                <option value=" Steubenville, OH "> Steubenville, OH </option>
                                <option value=" Stockton, CA "> Stockton, CA </option>
                                <option value=" Sugar Land, TX "> Sugar Land, TX </option>
                                <option value=" Sumter, SC "> Sumter, SC </option>
                                <option value=" Sunnyvale, CA "> Sunnyvale, CA </option>
                                <option value=" Syracuse, NY "> Syracuse, NY </option>
                                <option value=" Tacoma, WA "> Tacoma, WA </option>
                                <option value=" Tallahassee, FL "> Tallahassee, FL </option>
                                <option value=" Tampa, FL "> Tampa, FL </option>
                                <option value=" Temple, TX "> Temple, TX </option>
                                <option value=" Terre Haute, IN "> Terre Haute, IN </option>
                                <option value=" Texarkana, AR "> Texarkana, AR </option>
                                <option value=" Texarkana, TX "> Texarkana, TX </option>
                                <option value=" The Villages, FL "> The Villages, FL </option>
                                <option value=" The Woodlands, TX "> The Woodlands, TX </option>
                                <option value=" Thibodaux, LA "> Thibodaux, LA </option>
                                <option value=" Thousand Oaks, CA "> Thousand Oaks, CA </option>
                                <option value=" Titusville, FL "> Titusville, FL </option>
                                <option value=" Toledo, OH "> Toledo, OH </option>
                                <option value=" Topeka, KS "> Topeka, KS </option>
                                <option value=" Towson, MD "> Towson, MD </option>
                                <option value=" Trenton, NJ "> Trenton, NJ </option>
                                <option value=" Troy, NY "> Troy, NY </option>
                                <option value=" Tucson, AZ "> Tucson, AZ </option>
                                <option value=" Tulsa, OK "> Tulsa, OK </option>
                                <option value=" Tumwater, WA "> Tumwater, WA </option>
                                <option value=" Tuscaloosa, AL "> Tuscaloosa, AL </option>
                                <option value=" Tyler, TX "> Tyler, TX </option>
                                <option value=" Urbana, IL "> Urbana, IL </option>
                                <option value=" Utica, NY "> Utica, NY </option>
                                <option value=" Valdosta, GA "> Valdosta, GA </option>
                                <option value=" Vallejo, CA "> Vallejo, CA </option>
                                <option value=" Vancouver, WA "> Vancouver, WA </option>
                                <option value=" Ventura, CA "> Ventura, CA </option>
                                <option value=" Vero Beach, FL "> Vero Beach, FL </option>
                                <option value=" Victoria, TX "> Victoria, TX </option>
                                <option value=" Vienna, WV "> Vienna, WV </option>
                                <option value=" Vineland, NJ "> Vineland, NJ </option>
                                <option value=" Virginia Beach, VA "> Virginia Beach, VA </option>
                                <option value=" Visalia CA "> Visalia CA </option>
                                <option value=" Waco, TX "> Waco, TX </option>
                                <option value=" Wailuku, HI "> Wailuku, HI </option>
                                <option value=" Walla Walla, WA "> Walla Walla, WA </option>
                                <option value=" Warner Robins, GA "> Warner Robins, GA </option>
                                <option value=" Warren, MI "> Warren, MI </option>
                                <option value=" Warren, OH "> Warren, OH </option>
                                <option value=" Warwick, MA "> Warwick, MA </option>
                                <option value=" Washington, DC "> Washington, DC </option>
                                <option value=" Waterloo, IA "> Waterloo, IA </option>
                                <option value=" Watertown, NY "> Watertown, NY </option>
                                <option value=" Watsonville, CA "> Watsonville, CA </option>
                                <option value=" Waukesha, WI "> Waukesha, WI </option>
                                <option value=" Wausau, WI "> Wausau, WI </option>
                                <option value=" Waynesboro, PA "> Waynesboro, PA </option>
                                <option value=" Waynesboro, VA "> Waynesboro, VA </option>
                                <option value=" Weirton, WV "> Weirton, WV </option>
                                <option value=" Wenatchee, WA "> Wenatchee, WA </option>
                                <option value=" West Allis, WI "> West Allis, WI </option>
                                <option value=" West Des Moines, IA "> West Des Moines, IA </option>
                                <option value=" West Hartford, CT "> West Hartford, CT </option>
                                <option value=" West Lafayette, IN "> West Lafayette, IN </option>
                                <option value=" West Palm Beach, FL "> West Palm Beach, FL </option>
                                <option value=" Wheeling, WV "> Wheeling, WV </option>
                                <option value=" Wichita Falls, TX "> Wichita Falls, TX </option>
                                <option value=" Wichita, KS "> Wichita, KS </option>
                                <option value=" Wilkes-Barre, PA "> Wilkes-Barre, PA </option>
                                <option value=" Williamsport, PA "> Williamsport, PA </option>
                                <option value=" Wilmington, DE "> Wilmington, DE </option>
                                <option value=" Wilmington, NC "> Wilmington, NC </option>
                                <option value=" Winchester, VA "> Winchester, VA </option>
                                <option value=" Winston-Salem, NC "> Winston-Salem, NC </option>
                                <option value=" Winter Haven, FL "> Winter Haven, FL </option>
                                <option value=" Worcester, MA "> Worcester, MA </option>
                                <option value=" Wyoming, MI "> Wyoming, MI </option>
                                <option value=" Yakima, WA "> Yakima, WA </option>
                                <option value=" York, PA "> York, PA </option>
                                <option value=" Youngstown, OH "> Youngstown, OH </option>
                                <option value=" Yuba City, CA "> Yuba City, CA </option>
                                <option value=" Yuma, AZ "> Yuma, AZ </option>
                            </select>

                            <label>Enter City 2</label>
                            <select type="text" id="city-input2" name="city-input2">
                                <option value=""> </option>
                                <option value=" Abilene, TX"> Abilene, TX</option>
                                <option value=" Akron, OH "> Akron, OH </option>
                                <option value=" Albany, GA "> Albany, GA </option>
                                <option value=" Albany, NY "> Albany, NY </option>
                                <option value=" Albany, OR "> Albany, OR </option>
                                <option value=" Albuquerque, NM "> Albuquerque, NM </option>
                                <option value=" Alexandria, LA "> Alexandria, LA </option>
                                <option value=" Alexandria, VA "> Alexandria, VA </option>
                                <option value=" Allentown, PA "> Allentown, PA </option>
                                <option value=" Altoona, PA "> Altoona, PA </option>
                                <option value=" Amarillo, TX "> Amarillo, TX </option>
                                <option value=" Ames, IA "> Ames, IA </option>
                                <option value=" Anacortes, WA "> Anacortes, WA </option>
                                <option value=" Anaheim, CA "> Anaheim, CA </option>
                                <option value=" Anchorage, AK "> Anchorage, AK </option>
                                <option value=" Anderson, IN "> Anderson, IN </option>
                                <option value=" Anderson, SC "> Anderson, SC </option>
                                <option value=" Ann Arbor, MI "> Ann Arbor, MI </option>
                                <option value=" Anniston, AL "> Anniston, AL </option>
                                <option value=" Appleton, WI "> Appleton, WI </option>
                                <option value=" Arcade, CA "> Arcade, CA </option>
                                <option value=" Arden, CA "> Arden, CA </option>
                                <option value=" Arlington, TX "> Arlington, TX </option>
                                <option value=" Arlington, VA "> Arlington, VA </option>
                                <option value=" Arroyo Grande, CA "> Arroyo Grande, CA </option>
                                <option value=" Asheville, NC "> Asheville, NC </option>
                                <option value=" Ashland, KY "> Ashland, KY </option>
                                <option value=" Athens, GA "> Athens, GA </option>
                                <option value=" Atlanta, GA "> Atlanta, GA </option>
                                <option value=" Atlantic City, NJ "> Atlantic City, NJ </option>
                                <option value=" Auburn, AL "> Auburn, AL </option>
                                <option value=" Auburn, ME "> Auburn, ME </option>
                                <option value=" Augusta, GA "> Augusta, GA </option>
                                <option value=" Augusta, SC "> Augusta, SC </option>
                                <option value=" Aurora, CO "> Aurora, CO </option>
                                <option value=" Austin, TX "> Austin, TX </option>
                                <option value=" Bakersfield, CA "> Bakersfield, CA </option>
                                <option value=" Baltimore, MD "> Baltimore, MD </option>
                                <option value=" Bangor, ME "> Bangor, ME </option>
                                <option value=" Barnstable Town, MA "> Barnstable Town, MA </option>
                                <option value=" Baton Rouge, LA "> Baton Rouge, LA </option>
                                <option value=" Battle Creek, MI "> Battle Creek, MI </option>
                                <option value=" Bay City, MI "> Bay City, MI </option>
                                <option value=" Beaufort, SC "> Beaufort, SC </option>
                                <option value=" Beaumont, TX "> Beaumont, TX </option>
                                <option value=" Beckley, WV "> Beckley, WV </option>
                                <option value=" Bellevue, WA "> Bellevue, WA </option>
                                <option value=" Bellingham, WA "> Bellingham, WA </option>
                                <option value=" Beloit, WI "> Beloit, WI </option>
                                <option value=" Bend, OR "> Bend, OR </option>
                                <option value=" Benton Harbor, MI "> Benton Harbor, MI </option>
                                <option value=" Berwick, PA "> Berwick, PA </option>
                                <option value=" Bethlehem, PA "> Bethlehem, PA </option>
                                <option value=" Billings, MT "> Billings, MT </option>
                                <option value=" Biloxi, MS "> Biloxi, MS </option>
                                <option value=" Binghamton, NY "> Binghamton, NY </option>
                                <option value=" Birmingham, AL "> Birmingham, AL </option>
                                <option value=" Bismarck, ND "> Bismarck, ND </option>
                                <option value=" Blacksburg, VA "> Blacksburg, VA </option>
                                <option value=" Bloomington, IL "> Bloomington, IL </option>
                                <option value=" Bloomington, IN "> Bloomington, IN </option>
                                <option value=" Bloomington, MN "> Bloomington, MN </option>
                                <option value=" Bloomsburg, PA "> Bloomsburg, PA </option>
                                <option value=" Bluffton, SC "> Bluffton, SC </option>
                                <option value=" Boardman, OH "> Boardman, OH </option>
                                <option value=" Boise City, ID "> Boise City, ID </option>
                                <option value=" Bossier City, LA "> Bossier City, LA </option>
                                <option value=" Boston, MA "> Boston, MA </option>
                                <option value=" Boulder, CO "> Boulder, CO </option>
                                <option value=" Bowling Green, KY "> Bowling Green, KY </option>
                                <option value=" Bradenton, FL "> Bradenton, FL </option>
                                <option value=" Bremerton, WA "> Bremerton, WA </option>
                                <option value=" Brent, FL "> Brent, FL </option>
                                <option value=" Bridgeport, CT "> Bridgeport, CT </option>
                                <option value=" Bridgeton, NJ "> Bridgeton, NJ </option>
                                <option value=" Bristol, VA "> Bristol, VA </option>
                                <option value=" Brownsville, TX "> Brownsville, TX </option>
                                <option value=" Brunswick, GA "> Brunswick, GA </option>
                                <option value=" Bryan, TX "> Bryan, TX </option>
                                <option value=" Buffalo, NY "> Buffalo, NY </option>
                                <option value=" Burlington, NC "> Burlington, NC </option>
                                <option value=" Burlington, VT "> Burlington, VT </option>
                                <option value=" California, MD "> California, MD </option>
                                <option value=" Cambridge, MA "> Cambridge, MA </option>
                                <option value=" Camden, NJ "> Camden, NJ </option>
                                <option value=" Canton, OH "> Canton, OH </option>
                                <option value=" Cape Coral, FL "> Cape Coral, FL </option>
                                <option value=" Cape Girardeau, IL "> Cape Girardeau, IL </option>
                                <option value=" Cape Girardeau, MO "> Cape Girardeau, MO </option>
                                <option value=" Carbondale, IL "> Carbondale, IL </option>
                                <option value=" Carlisle, PA "> Carlisle, PA </option>
                                <option value=" Carlsbad, CA "> Carlsbad, CA </option>
                                <option value=" Carmel, IN "> Carmel, IN </option>
                                <option value=" Carson City, NV "> Carson City, NV </option>
                                <option value=" Casper, WY "> Casper, WY </option>
                                <option value=" Cedar Falls, IA "> Cedar Falls, IA </option>
                                <option value=" Cedar Rapids, IA "> Cedar Rapids, IA </option>
                                <option value=" Chambersburg, PA "> Chambersburg, PA </option>
                                <option value=" Champaign, IL "> Champaign, IL </option>
                                <option value=" Chapel Hill, NC "> Chapel Hill, NC </option>
                                <option value=" Charleston, SC "> Charleston, SC </option>
                                <option value=" Charleston, WV "> Charleston, WV </option>
                                <option value=" Charlotte, NC "> Charlotte, NC </option>
                                <option value=" Charlottesville, VA "> Charlottesville, VA </option>
                                <option value=" Chattanooga, GA "> Chattanooga, GA </option>
                                <option value=" Chattanooga, TN "> Chattanooga, TN </option>
                                <option value=" Cheektowaga, NY "> Cheektowaga, NY </option>
                                <option value=" Cheyenne, WY "> Cheyenne, WY </option>
                                <option value=" Chicago, IL "> Chicago, IL </option>
                                <option value=" Chico, CA "> Chico, CA </option>
                                <option value=" Christiansburg, VA "> Christiansburg, VA </option>
                                <option value=" Cincinnati, IN "> Cincinnati, IN </option>
                                <option value=" Cincinnati, KY "> Cincinnati, KY </option>
                                <option value=" Cincinnati, OH "> Cincinnati, OH </option>
                                <option value=" Clarksville, KY "> Clarksville, KY </option>
                                <option value=" Clarksville, TN "> Clarksville, TN </option>
                                <option value=" Clearfield, UT "> Clearfield, UT </option>
                                <option value=" Clearwater, FL "> Clearwater, FL </option>
                                <option value=" Cleveland, OH "> Cleveland, OH </option>
                                <option value=" Cleveland, TN "> Cleveland, TN </option>
                                <option value=" Coeur d'Alene, ID "> Coeur d'Alene, ID </option>
                                <option value=" College Station, TX "> College Station, TX </option>
                                <option value=" Colorado Springs, CO "> Colorado Springs, CO </option>
                                <option value=" Columbia, MD "> Columbia, MD </option>
                                <option value=" Columbia, MO "> Columbia, MO </option>
                                <option value=" Columbia, SC "> Columbia, SC </option>
                                <option value=" Columbus, AL "> Columbus, AL </option>
                                <option value=" Columbus, GA "> Columbus, GA </option>
                                <option value=" Columbus, IN "> Columbus, IN </option>
                                <option value=" Columbus, OH "> Columbus, OH </option>
                                <option value=" Concord, NC "> Concord, NC </option>
                                <option value=" Conway, AR "> Conway, AR </option>
                                <option value=" Conway, SC "> Conway, SC </option>
                                <option value=" Corcoran, CA "> Corcoran, CA </option>
                                <option value=" Corpus Christi, TX "> Corpus Christi, TX </option>
                                <option value=" Corvallis, OR "> Corvallis, OR </option>
                                <option value=" Council Bluffs, IA "> Council Bluffs, IA </option>
                                <option value=" Crestview, FL "> Crestview, FL </option>
                                <option value=" Cumberland, MD "> Cumberland, MD </option>
                                <option value=" Cumberland, WV "> Cumberland, WV </option>
                                <option value=" Dallas, TX "> Dallas, TX </option>
                                <option value=" Dalton, GA "> Dalton, GA </option>
                                <option value=" Danville, IL "> Danville, IL </option>
                                <option value=" Daphne, AL "> Daphne, AL </option>
                                <option value=" Davenport, IA "> Davenport, IA </option>
                                <option value=" Davidson, TN "> Davidson, TN </option>
                                <option value=" Dayton, OH "> Dayton, OH </option>
                                <option value=" Daytona Beach, FL "> Daytona Beach, FL </option>
                                <option value=" Dearborn, MI "> Dearborn, MI </option>
                                <option value=" Decatur, AL "> Decatur, AL </option>
                                <option value=" Decatur, IL "> Decatur, IL </option>
                                <option value=" Deltona, FL "> Deltona, FL </option>
                                <option value=" Denison, TX "> Denison, TX </option>
                                <option value=" Denver, CO "> Denver, CO </option>
                                <option value=" Des Moines, IA "> Des Moines, IA </option>
                                <option value=" Destin, FL "> Destin, FL </option>
                                <option value=" Detroit, MI "> Detroit, MI </option>
                                <option value=" Dothan, AL "> Dothan, AL </option>
                                <option value=" Douglas, AZ "> Douglas, AZ </option>
                                <option value=" Dover, DE "> Dover, DE </option>
                                <option value=" Dubuque, IA "> Dubuque, IA </option>
                                <option value=" Duluth, MN "> Duluth, MN </option>
                                <option value=" Durham, NC "> Durham, NC </option>
                                <option value=" East Hartford, CT "> East Hartford, CT </option>
                                <option value=" East Lansing, MI "> East Lansing, MI </option>
                                <option value=" East Stroudsburg, PA "> East Stroudsburg, PA </option>
                                <option value=" Easton, PA "> Easton, PA </option>
                                <option value=" Eau Claire, WI "> Eau Claire, WI </option>
                                <option value=" Edinburg, TX "> Edinburg, TX </option>
                                <option value=" El Centro, CA "> El Centro, CA </option>
                                <option value=" El Paso, TX "> El Paso, TX </option>
                                <option value=" Elgin, IL "> Elgin, IL </option>
                                <option value=" Elizabethtown, KY "> Elizabethtown, KY </option>
                                <option value=" Elkhart, IN "> Elkhart, IN </option>
                                <option value=" Elmira, NY "> Elmira, NY </option>
                                <option value=" Elyria, OH "> Elyria, OH </option>
                                <option value=" Erie, PA "> Erie, PA </option>
                                <option value=" Eugene, OR "> Eugene, OR </option>
                                <option value=" Evansville, IN "> Evansville, IN </option>
                                <option value=" Evansville, KY "> Evansville, KY </option>
                                <option value=" Fairbanks, AK "> Fairbanks, AK </option>
                                <option value=" Fairfield, CA "> Fairfield, CA </option>
                                <option value=" Fairhope, AL "> Fairhope, AL </option>
                                <option value=" Fargo, ND "> Fargo, ND </option>
                                <option value=" Farmington, NM "> Farmington, NM </option>
                                <option value=" Fayette, KY "> Fayette, KY </option>
                                <option value=" Fayetteville, AR "> Fayetteville, AR </option>
                                <option value=" Fayetteville, NC "> Fayetteville, NC </option>
                                <option value=" Ferry Pass, FL "> Ferry Pass, FL </option>
                                <option value=" Flagstaff, AZ "> Flagstaff, AZ </option>
                                <option value=" Flint, MI "> Flint, MI </option>
                                <option value=" Florence, AL "> Florence, AL </option>
                                <option value=" Florence, SC "> Florence, SC </option>
                                <option value=" Foley, AL "> Foley, AL </option>
                                <option value=" Fond du Lac, WI "> Fond du Lac, WI </option>
                                <option value=" Fort Collins, CO "> Fort Collins, CO </option>
                                <option value=" Fort Drum, NY "> Fort Drum, NY </option>
                                <option value=" Fort Knox, KY "> Fort Knox, KY </option>
                                <option value=" Fort Lauderdale, FL "> Fort Lauderdale, FL </option>
                                <option value=" Fort Myers, FL "> Fort Myers, FL </option>
                                <option value=" Fort Smith, AR "> Fort Smith, AR </option>
                                <option value=" Fort Smith, OK "> Fort Smith, OK </option>
                                <option value=" Fort Walton Beach, FL "> Fort Walton Beach, FL </option>
                                <option value=" Fort Wayne, IN "> Fort Wayne, IN </option>
                                <option value=" Fort Worth, TX "> Fort Worth, TX </option>
                                <option value=" Franklin, TN "> Franklin, TN </option>
                                <option value=" Fresno, CA "> Fresno, CA </option>
                                <option value=" Gadsden, AL "> Gadsden, AL </option>
                                <option value=" Gainesville, FL "> Gainesville, FL </option>
                                <option value=" Gainesville, GA "> Gainesville, GA </option>
                                <option value=" Gastonia, NC "> Gastonia, NC </option>
                                <option value=" Gastonia, SC "> Gastonia, SC </option>
                                <option value=" Gettysburg, PA "> Gettysburg, PA </option>
                                <option value=" Glens Falls, NY "> Glens Falls, NY </option>
                                <option value=" Goldsboro, NC "> Goldsboro, NC </option>
                                <option value=" Goshen, IN "> Goshen, IN </option>
                                <option value=" Grand Forks, MN "> Grand Forks, MN </option>
                                <option value=" Grand Forks, ND "> Grand Forks, ND </option>
                                <option value=" Grand Island, NE "> Grand Island, NE </option>
                                <option value=" Grand Junction, CO "> Grand Junction, CO </option>
                                <option value=" Grand Rapids, MI "> Grand Rapids, MI </option>
                                <option value=" Grants Pass, OR "> Grants Pass, OR </option>
                                <option value=" Great Falls, MT "> Great Falls, MT </option>
                                <option value=" Greeley, CO "> Greeley, CO </option>
                                <option value=" Green Bay, WI "> Green Bay, WI </option>
                                <option value=" Greensboro, NC "> Greensboro, NC </option>
                                <option value=" Greenville, NC "> Greenville, NC </option>
                                <option value=" Greenville, SC "> Greenville, SC </option>
                                <option value=" Gulfport, MS "> Gulfport, MS </option>
                                <option value=" Hagerstown, MD "> Hagerstown, MD </option>
                                <option value=" Hammond, LA "> Hammond, LA </option>
                                <option value=" Hammonton, NJ "> Hammonton, NJ </option>
                                <option value=" Hanford, CA "> Hanford, CA </option>
                                <option value=" Hanover, PA "> Hanover, PA </option>
                                <option value=" Harlingen, TX "> Harlingen, TX </option>
                                <option value=" Harrisburg, PA "> Harrisburg, PA </option>
                                <option value=" Harrisonburg, VA "> Harrisonburg, VA </option>
                                <option value=" Hartford, CT "> Hartford, CT </option>
                                <option value=" Hattiesburg, MS "> Hattiesburg, MS </option>
                                <option value=" Hayward, CA "> Hayward, CA </option>
                                <option value=" Hazleton, PA "> Hazleton, PA </option>
                                <option value=" Henderson, NV "> Henderson, NV </option>
                                <option value=" Hickory, NC "> Hickory, NC </option>
                                <option value=" High Point, NC "> High Point, NC </option>
                                <option value=" Hillsboro, OR "> Hillsboro, OR </option>
                                <option value=" Hilton Head Island, SC "> Hilton Head Island, SC </option>
                                <option value=" Hinesville, GA "> Hinesville, GA </option>
                                <option value=" Homosassa Springs, FL "> Homosassa Springs, FL </option>
                                <option value=" Honolulu, HI "> Honolulu, HI </option>
                                <option value=" Hoover, AL "> Hoover, AL </option>
                                <option value=" Hot Springs, AR "> Hot Springs, AR </option>
                                <option value=" Houma, LA "> Houma, LA </option>
                                <option value=" Houston, TX "> Houston, TX </option>
                                <option value=" Huntington, WV "> Huntington, WV </option>
                                <option value=" Huntsville, AL "> Huntsville, AL </option>
                                <option value=" Idaho Falls, ID "> Idaho Falls, ID </option>
                                <option value=" Immokalee, FL "> Immokalee, FL </option>
                                <option value=" Indianapolis, IN "> Indianapolis, IN </option>
                                <option value=" Iowa City, IA "> Iowa City, IA </option>
                                <option value=" Ironton, OH "> Ironton, OH </option>
                                <option value=" Ithaca, NY "> Ithaca, NY </option>
                                <option value=" Jackson, MI "> Jackson, MI </option>
                                <option value=" Jackson, MS "> Jackson, MS </option>
                                <option value=" Jackson, TN "> Jackson, TN </option>
                                <option value=" Jacksonville, AL "> Jacksonville, AL </option>
                                <option value=" Jacksonville, FL "> Jacksonville, FL </option>
                                <option value=" Jacksonville, NC "> Jacksonville, NC </option>
                                <option value=" Janesville, WI "> Janesville, WI </option>
                                <option value=" Jefferson City, MO "> Jefferson City, MO </option>
                                <option value=" Jersey City, NJ "> Jersey City, NJ </option>
                                <option value=" Johnson City, TN "> Johnson City, TN </option>
                                <option value=" Johnstown, PA "> Johnstown, PA </option>
                                <option value=" Jonesboro, AR "> Jonesboro, AR </option>
                                <option value=" Joplin, MO "> Joplin, MO </option>
                                <option value=" Kahului, HI "> Kahului, HI </option>
                                <option value=" Kalamazoo, MI "> Kalamazoo, MI </option>
                                <option value=" Kankakee, IL "> Kankakee, IL </option>
                                <option value=" Kansas City, KS "> Kansas City, KS </option>
                                <option value=" Kansas City, MO "> Kansas City, MO </option>
                                <option value=" Kennewick, WA "> Kennewick, WA </option>
                                <option value=" Killeen, TX "> Killeen, TX </option>
                                <option value=" Kingman, AZ "> Kingman, AZ </option>
                                <option value=" Kingsport-Bristol, TN "> Kingsport-Bristol, TN </option>
                                <option value=" Kingston, NY "> Kingston, NY </option>
                                <option value=" Kissimmee, FL "> Kissimmee, FL </option>
                                <option value=" Knoxville, TN "> Knoxville, TN </option>
                                <option value=" Kokomo, IN "> Kokomo, IN </option>
                                <option value=" La Crosse, WI "> La Crosse, WI </option>
                                <option value=" La Porte, IN "> La Porte, IN </option>
                                <option value=" Lafayette, IN "> Lafayette, IN </option>
                                <option value=" Lafayette, LA "> Lafayette, LA </option>
                                <option value=" Lahaina, HI "> Lahaina, HI </option>
                                <option value=" Lake Charles, LA "> Lake Charles, LA </option>
                                <option value=" Lake Havasu City, AZ "> Lake Havasu City, AZ </option>
                                <option value=" Lakeland, FL "> Lakeland, FL </option>
                                <option value=" Lakewood, CO "> Lakewood, CO </option>
                                <option value=" Lancaster, PA "> Lancaster, PA </option>
                                <option value=" Lansing, MI "> Lansing, MI </option>
                                <option value=" Laredo, TX "> Laredo, TX </option>
                                <option value=" Las Cruces, NM "> Las Cruces, NM </option>
                                <option value=" Las Vegas, NV "> Las Vegas, NV </option>
                                <option value=" Lawrence, KS "> Lawrence, KS </option>
                                <option value=" Lawton, OK "> Lawton, OK </option>
                                <option value=" Lebanon, PA "> Lebanon, PA </option>
                                <option value=" Lenoir, NC "> Lenoir, NC </option>
                                <option value=" Lewiston, ID "> Lewiston, ID </option>
                                <option value=" Lewiston, ME "> Lewiston, ME </option>
                                <option value=" Lexington Park, MD "> Lexington Park, MD </option>
                                <option value=" Lexington, KY "> Lexington, KY </option>
                                <option value=" Lima, OH "> Lima, OH </option>
                                <option value=" Lincoln, NE "> Lincoln, NE </option>
                                <option value=" Little Rock, AR "> Little Rock, AR </option>
                                <option value=" Lodi, CA "> Lodi, CA </option>
                                <option value=" Logan, UT "> Logan, UT </option>
                                <option value=" Long Beach, CA "> Long Beach, CA </option>
                                <option value=" Longview, TX "> Longview, TX </option>
                                <option value=" Longview, WA "> Longview, WA </option>
                                <option value=" Los Angeles, CA "> Los Angeles, CA </option>
                                <option value=" Louisville, KY "> Louisville, KY </option>
                                <option value=" Lubbock, TX "> Lubbock, TX </option>
                                <option value=" Lynchburg, VA "> Lynchburg, VA </option>
                                <option value=" Macon, GA "> Macon, GA </option>
                                <option value=" Madera, CA "> Madera, CA </option>
                                <option value=" Madison, WI "> Madison, WI </option>
                                <option value=" Manchester, NH "> Manchester, NH </option>
                                <option value=" Manhattan, KS "> Manhattan, KS </option>
                                <option value=" Mankato, MN "> Mankato, MN </option>
                                <option value=" Mansfield, OH "> Mansfield, OH </option>
                                <option value=" Marco Island, FL "> Marco Island, FL </option>
                                <option value=" Marion, IL "> Marion, IL </option>
                                <option value=" Martinsburg, WV "> Martinsburg, WV </option>
                                <option value=" Massillon, OH "> Massillon, OH </option>
                                <option value=" Mauldin, SC "> Mauldin, SC </option>
                                <option value=" McAllen, TX "> McAllen, TX </option>
                                <option value=" Medford, OR "> Medford, OR </option>
                                <option value=" Melbourne, FL "> Melbourne, FL </option>
                                <option value=" Memphis, TN "> Memphis, TN </option>
                                <option value=" Merced, CA "> Merced, CA </option>
                                <option value=" Mesa, AZ "> Mesa, AZ </option>
                                <option value=" Metairie, LA "> Metairie, LA </option>
                                <option value=" Miami, FL "> Miami, FL </option>
                                <option value=" Michigan City, IN "> Michigan City, IN </option>
                                <option value=" Midland, MI "> Midland, MI </option>
                                <option value=" Midland, TX "> Midland, TX </option>
                                <option value=" Milford, CT "> Milford, CT </option>
                                <option value=" Milwaukee, WI "> Milwaukee, WI </option>
                                <option value=" Minneapolis, MN "> Minneapolis, MN </option>
                                <option value=" Mishawaka, IN "> Mishawaka, IN </option>
                                <option value=" Mission, TX "> Mission, TX </option>
                                <option value=" Missoula, MT "> Missoula, MT </option>
                                <option value=" Mobile, AL "> Mobile, AL </option>
                                <option value=" Modesto, CA "> Modesto, CA </option>
                                <option value=" Moline, IL "> Moline, IL </option>
                                <option value=" Monroe, LA "> Monroe, LA </option>
                                <option value=" Monroe, MI "> Monroe, MI </option>
                                <option value=" Montgomery, AL "> Montgomery, AL </option>
                                <option value=" Moorhead, MN "> Moorhead, MN </option>
                                <option value=" Morganton, NC "> Morganton, NC </option>
                                <option value=" Morgantown, WV "> Morgantown, WV </option>
                                <option value=" Morristown, TN "> Morristown, TN </option>
                                <option value=" Mount Vernon, WA "> Mount Vernon, WA </option>
                                <option value=" Muncie, IN "> Muncie, IN </option>
                                <option value=" Murfreesboro, TN "> Murfreesboro, TN </option>
                                <option value=" Muscle Shoals, AL "> Muscle Shoals, AL </option>
                                <option value=" Muskegon, MI "> Muskegon, MI </option>
                                <option value=" Myrtle Beach, SC "> Myrtle Beach, SC </option>
                                <option value=" Napa, CA "> Napa, CA </option>
                                <option value=" Naperville, IL "> Naperville, IL </option>
                                <option value=" Naples, FL "> Naples, FL </option>
                                <option value=" Nashua, NH "> Nashua, NH </option>
                                <option value=" Nashville, TN "> Nashville, TN </option>
                                <option value=" Neenah, WI "> Neenah, WI </option>
                                <option value=" New Bern, NC "> New Bern, NC </option>
                                <option value=" New Braunfels, TX "> New Braunfels, TX </option>
                                <option value=" New Haven, CT "> New Haven, CT </option>
                                <option value=" New London, CT "> New London, CT </option>
                                <option value=" New Orleans, LA "> New Orleans, LA </option>
                                <option value=" New York, NY "> New York, NY </option>
                                <option value=" Newark, NJ "> Newark, NJ </option>
                                <option value=" Newport News, VA "> Newport News, VA </option>
                                <option value=" Newton, MA "> Newton, MA </option>
                                <option value=" Newton, NH "> Newton, NH </option>
                                <option value=" Niagara Falls, NY "> Niagara Falls, NY </option>
                                <option value=" Niles, MI "> Niles, MI </option>
                                <option value=" Norfolk, VA "> Norfolk, VA </option>
                                <option value=" North Charleston, SC "> North Charleston, SC </option>
                                <option value=" North Little Rock, AR "> North Little Rock, AR </option>
                                <option value=" North Mankato, MN "> North Mankato, MN </option>
                                <option value=" North Myrtle Beach, SC "> North Myrtle Beach, SC </option>
                                <option value=" North Port, FL "> North Port, FL </option>
                                <option value=" Norwalk, CT "> Norwalk, CT </option>
                                <option value=" Norwich, CT "> Norwich, CT </option>
                                <option value=" Oakland, CA "> Oakland, CA </option>
                                <option value=" Ocala, FL "> Ocala, FL </option>
                                <option value=" Ocean City, NJ "> Ocean City, NJ </option>
                                <option value=" Odessa, TX "> Odessa, TX </option>
                                <option value=" Ogden, UT "> Ogden, UT </option>
                                <option value=" Oklahoma City, OK "> Oklahoma City, OK </option>
                                <option value=" Olympia, WA "> Olympia, WA </option>
                                <option value=" Omaha, NE "> Omaha, NE </option>
                                <option value=" Onalaska, WI "> Onalaska, WI </option>
                                <option value=" Ontario, CA "> Ontario, CA </option>
                                <option value=" Opelika, AL "> Opelika, AL </option>
                                <option value=" Orem, UT "> Orem, UT </option>
                                <option value=" Orlando, FL "> Orlando, FL </option>
                                <option value=" Ormond Beach, FL "> Ormond Beach, FL </option>
                                <option value=" Oshkosh, WI ,"> Oshkosh, WI ,</option>
                                <option value=" Owensboro, KY "> Owensboro, KY </option>
                                <option value=" Oxford, AL "> Oxford, AL </option>
                                <option value=" Oxnard, CA "> Oxnard, CA </option>
                                <option value=" Palm Bay, FL "> Palm Bay, FL </option>
                                <option value=" Panama City, FL "> Panama City, FL </option>
                                <option value=" Paradise, NV "> Paradise, NV </option>
                                <option value=" Parkersburg, WV "> Parkersburg, WV </option>
                                <option value=" Pascagoula, MS "> Pascagoula, MS </option>
                                <option value=" Paso Robles, CA "> Paso Robles, CA </option>
                                <option value=" Pensacola, FL "> Pensacola, FL </option>
                                <option value=" Peoria, IL "> Peoria, IL </option>
                                <option value=" Philadelphia, PA "> Philadelphia, PA </option>
                                <option value=" Phoenix, AZ "> Phoenix, AZ </option>
                                <option value=" Pine Bluff, AR "> Pine Bluff, AR </option>
                                <option value=" Pittsburgh, PA "> Pittsburgh, PA </option>
                                <option value=" Pittsfield, MA "> Pittsfield, MA </option>
                                <option value=" Pocatello, ID "> Pocatello, ID </option>
                                <option value=" Port Arthur, TX "> Port Arthur, TX </option>
                                <option value=" Port St. Lucie, FL "> Port St. Lucie, FL </option>
                                <option value=" Portage, MI "> Portage, MI </option>
                                <option value=" Porterville, CA "> Porterville, CA </option>
                                <option value=" Portland, ME "> Portland, ME </option>
                                <option value=" Portland, OR "> Portland, OR </option>
                                <option value=" Prescott, AZ "> Prescott, AZ </option>
                                <option value=" Providence, RI "> Providence, RI </option>
                                <option value=" Provo, UT "> Provo, UT </option>
                                <option value=" Pueblo, CO "> Pueblo, CO </option>
                                <option value=" Punta Gorda, FL "> Punta Gorda, FL </option>
                                <option value=" Racine, WI "> Racine, WI </option>
                                <option value=" Radford, VA "> Radford, VA </option>
                                <option value=" Raleigh, NC "> Raleigh, NC </option>
                                <option value=" Rapid City, SD "> Rapid City, SD </option>
                                <option value=" Reading, PA "> Reading, PA </option>
                                <option value=" Redding, CA "> Redding, CA </option>
                                <option value=" Redmond, OR "> Redmond, OR </option>
                                <option value=" Reno, NV "> Reno, NV </option>
                                <option value=" Richland, WA "> Richland, WA </option>
                                <option value=" Richmond, VA "> Richmond, VA </option>
                                <option value=" Riverside, CA "> Riverside, CA </option>
                                <option value=" Roanoke, VA "> Roanoke, VA </option>
                                <option value=" Rochester, MN "> Rochester, MN </option>
                                <option value=" Rochester, NY "> Rochester, NY </option>
                                <option value=" Rock Island, IL "> Rock Island, IL </option>
                                <option value=" Rockford, IL "> Rockford, IL </option>
                                <option value=" Rocky Mount, NC "> Rocky Mount, NC </option>
                                <option value=" Rogers, AR "> Rogers, AR </option>
                                <option value=" Rome, GA "> Rome, GA </option>
                                <option value=" Rome, NY "> Rome, NY </option>
                                <option value=" Roseville, CA "> Roseville, CA </option>
                                <option value=" Roswell, GA "> Roswell, GA </option>
                                <option value=" Round Rock, TX "> Round Rock, TX </option>
                                <option value=" Sacramento, CA "> Sacramento, CA </option>
                                <option value=" Saginaw, MI "> Saginaw, MI </option>
                                <option value=" Salem, OR "> Salem, OR </option>
                                <option value=" Salinas, CA "> Salinas, CA </option>
                                <option value=" Salisbury, MD "> Salisbury, MD </option>
                                <option value=" Salt Lake City, UT "> Salt Lake City, UT </option>
                                <option value=" San Angelo, TX "> San Angelo, TX </option>
                                <option value=" San Antonio, TX "> San Antonio, TX </option>
                                <option value=" San Bernardino, CA "> San Bernardino, CA </option>
                                <option value=" San Diego, CA "> San Diego, CA </option>
                                <option value=" San Francisco, CA "> San Francisco, CA </option>
                                <option value=" San Jose, CA "> San Jose, CA </option>
                                <option value=" San Luis Obispo, CA "> San Luis Obispo, CA </option>
                                <option value=" Sandy Springs, GA "> Sandy Springs, GA </option>
                                <option value=" Sanford, FL "> Sanford, FL </option>
                                <option value=" Santa Barbara, CA "> Santa Barbara, CA </option>
                                <option value=" Santa Clara, CA "> Santa Clara, CA </option>
                                <option value=" Santa Cruz, CA "> Santa Cruz, CA </option>
                                <option value=" Santa Fe, NM "> Santa Fe, NM </option>
                                <option value=" Santa Maria, CA "> Santa Maria, CA </option>
                                <option value=" Santa Rosa, CA "> Santa Rosa, CA </option>
                                <option value=" Sarasota, FL "> Sarasota, FL </option>
                                <option value=" Savannah, GA "> Savannah, GA </option>
                                <option value=" Schenectady, NY "> Schenectady, NY </option>
                                <option value=" Scottsdale, AZ "> Scottsdale, AZ </option>
                                <option value=" Scranton, PA "> Scranton, PA </option>
                                <option value=" Seattle, WA "> Seattle, WA </option>
                                <option value=" Sebastian, FL "> Sebastian, FL </option>
                                <option value=" Sebring, FL "> Sebring, FL </option>
                                <option value=" Sheboygan, WI "> Sheboygan, WI </option>
                                <option value=" Sherman, TX "> Sherman, TX </option>
                                <option value=" Shreveport, LA "> Shreveport, LA </option>
                                <option value=" Sierra Vista, AZ "> Sierra Vista, AZ </option>
                                <option value=" Silverdale, WA "> Silverdale, WA </option>
                                <option value=" Sioux City, IA "> Sioux City, IA </option>
                                <option value=" Sioux Falls, SD "> Sioux Falls, SD </option>
                                <option value=" South Bend, IN "> South Bend, IN </option>
                                <option value=" South Burlington, VT "> South Burlington, VT </option>
                                <option value=" South Portland, ME "> South Portland, ME </option>
                                <option value=" Spartanburg, SC "> Spartanburg, SC </option>
                                <option value=" Spokane Valley, WA "> Spokane Valley, WA </option>
                                <option value=" Spokane, WA "> Spokane, WA </option>
                                <option value=" Springdale, MO "> Springdale, MO </option>
                                <option value=" Springfield, IL "> Springfield, IL </option>
                                <option value=" Springfield, MA "> Springfield, MA </option>
                                <option value=" Springfield, MO "> Springfield, MO </option>
                                <option value=" Springfield, OH "> Springfield, OH </option>
                                <option value=" St. Cloud, MN "> St. Cloud, MN </option>
                                <option value=" St. George, UT "> St. George, UT </option>
                                <option value=" St. Joseph, MO "> St. Joseph, MO </option>
                                <option value=" St. Louis, MO "> St. Louis, MO </option>
                                <option value=" St. Paul, MN "> St. Paul, MN </option>
                                <option value=" St. Petersburg, FL "> St. Petersburg, FL </option>
                                <option value=" Stamford, CT "> Stamford, CT </option>
                                <option value=" State College, PA "> State College, PA </option>
                                <option value=" Staunton, VA "> Staunton, VA </option>
                                <option value=" Steubenville, OH "> Steubenville, OH </option>
                                <option value=" Stockton, CA "> Stockton, CA </option>
                                <option value=" Sugar Land, TX "> Sugar Land, TX </option>
                                <option value=" Sumter, SC "> Sumter, SC </option>
                                <option value=" Sunnyvale, CA "> Sunnyvale, CA </option>
                                <option value=" Syracuse, NY "> Syracuse, NY </option>
                                <option value=" Tacoma, WA "> Tacoma, WA </option>
                                <option value=" Tallahassee, FL "> Tallahassee, FL </option>
                                <option value=" Tampa, FL "> Tampa, FL </option>
                                <option value=" Temple, TX "> Temple, TX </option>
                                <option value=" Terre Haute, IN "> Terre Haute, IN </option>
                                <option value=" Texarkana, AR "> Texarkana, AR </option>
                                <option value=" Texarkana, TX "> Texarkana, TX </option>
                                <option value=" The Villages, FL "> The Villages, FL </option>
                                <option value=" The Woodlands, TX "> The Woodlands, TX </option>
                                <option value=" Thibodaux, LA "> Thibodaux, LA </option>
                                <option value=" Thousand Oaks, CA "> Thousand Oaks, CA </option>
                                <option value=" Titusville, FL "> Titusville, FL </option>
                                <option value=" Toledo, OH "> Toledo, OH </option>
                                <option value=" Topeka, KS "> Topeka, KS </option>
                                <option value=" Towson, MD "> Towson, MD </option>
                                <option value=" Trenton, NJ "> Trenton, NJ </option>
                                <option value=" Troy, NY "> Troy, NY </option>
                                <option value=" Tucson, AZ "> Tucson, AZ </option>
                                <option value=" Tulsa, OK "> Tulsa, OK </option>
                                <option value=" Tumwater, WA "> Tumwater, WA </option>
                                <option value=" Tuscaloosa, AL "> Tuscaloosa, AL </option>
                                <option value=" Tyler, TX "> Tyler, TX </option>
                                <option value=" Urbana, IL "> Urbana, IL </option>
                                <option value=" Utica, NY "> Utica, NY </option>
                                <option value=" Valdosta, GA "> Valdosta, GA </option>
                                <option value=" Vallejo, CA "> Vallejo, CA </option>
                                <option value=" Vancouver, WA "> Vancouver, WA </option>
                                <option value=" Ventura, CA "> Ventura, CA </option>
                                <option value=" Vero Beach, FL "> Vero Beach, FL </option>
                                <option value=" Victoria, TX "> Victoria, TX </option>
                                <option value=" Vienna, WV "> Vienna, WV </option>
                                <option value=" Vineland, NJ "> Vineland, NJ </option>
                                <option value=" Virginia Beach, VA "> Virginia Beach, VA </option>
                                <option value=" Visalia CA "> Visalia CA </option>
                                <option value=" Waco, TX "> Waco, TX </option>
                                <option value=" Wailuku, HI "> Wailuku, HI </option>
                                <option value=" Walla Walla, WA "> Walla Walla, WA </option>
                                <option value=" Warner Robins, GA "> Warner Robins, GA </option>
                                <option value=" Warren, MI "> Warren, MI </option>
                                <option value=" Warren, OH "> Warren, OH </option>
                                <option value=" Warwick, MA "> Warwick, MA </option>
                                <option value=" Washington, DC "> Washington, DC </option>
                                <option value=" Waterloo, IA "> Waterloo, IA </option>
                                <option value=" Watertown, NY "> Watertown, NY </option>
                                <option value=" Watsonville, CA "> Watsonville, CA </option>
                                <option value=" Waukesha, WI "> Waukesha, WI </option>
                                <option value=" Wausau, WI "> Wausau, WI </option>
                                <option value=" Waynesboro, PA "> Waynesboro, PA </option>
                                <option value=" Waynesboro, VA "> Waynesboro, VA </option>
                                <option value=" Weirton, WV "> Weirton, WV </option>
                                <option value=" Wenatchee, WA "> Wenatchee, WA </option>
                                <option value=" West Allis, WI "> West Allis, WI </option>
                                <option value=" West Des Moines, IA "> West Des Moines, IA </option>
                                <option value=" West Hartford, CT "> West Hartford, CT </option>
                                <option value=" West Lafayette, IN "> West Lafayette, IN </option>
                                <option value=" West Palm Beach, FL "> West Palm Beach, FL </option>
                                <option value=" Wheeling, WV "> Wheeling, WV </option>
                                <option value=" Wichita Falls, TX "> Wichita Falls, TX </option>
                                <option value=" Wichita, KS "> Wichita, KS </option>
                                <option value=" Wilkes-Barre, PA "> Wilkes-Barre, PA </option>
                                <option value=" Williamsport, PA "> Williamsport, PA </option>
                                <option value=" Wilmington, DE "> Wilmington, DE </option>
                                <option value=" Wilmington, NC "> Wilmington, NC </option>
                                <option value=" Winchester, VA "> Winchester, VA </option>
                                <option value=" Winston-Salem, NC "> Winston-Salem, NC </option>
                                <option value=" Winter Haven, FL "> Winter Haven, FL </option>
                                <option value=" Worcester, MA "> Worcester, MA </option>
                                <option value=" Wyoming, MI "> Wyoming, MI </option>
                                <option value=" Yakima, WA "> Yakima, WA </option>
                                <option value=" York, PA "> York, PA </option>
                                <option value=" Youngstown, OH "> Youngstown, OH </option>
                                <option value=" Yuba City, CA "> Yuba City, CA </option>
                                <option value=" Yuma, AZ "> Yuma, AZ </option>
                            </select>

                            <button id="firstbutton"> Submit </button>
                            <button id="clearbutton"> Clear </button>
                        </form>
            </div>
                    
            <section className="second-w3ls">
                <div className="container-fluid">
                    <div className="col-lg-12 col-md-12 tab-w3layouts">
                        <section className="tabs">
                            <input id="tab-1" type="radio" name="radio-set" className="tab-selector-1" defaultChecked="true" />
                            <label htmlFor="tab-1" className="tab-label-1">Compare</label>
                            <input id="tab-2" type="radio" name="radio-set" className="tab-selector-2" />
                            <label htmlFor="tab-2" className="tab-label-2">Career</label>
                            <input id="tab-3" type="radio" name="radio-set" className="tab-selector-3" />
                            <label htmlFor="tab-3" className="tab-label-3">Residence</label>
                            <input id="tab-4" type="radio" name="radio-set" className="tab-selector-4" />
                            <label htmlFor="tab-4" className="tab-label-4">Preferences</label>
                            <div className="clear-shadow"></div>
                            <div className="content">
                                <div className="content-1">
                                    
                                    <h3>Compare Cities</h3>
                                    <button id="salaries" type="submit"> Salaries </button>
                                    <button id="general" type="submit"> Overall Ratings </button>
                                    <button id="rent" type="submit"> Average Prices </button>
                                    <button id="air" type="submit"> Pollution </button>
                                    <button id="crime" type="submit"> Crime </button>
                                    <button id="weather" type="submit"> Weather </button>
                                    <button id="traffic" type="submit"> Traffic </button>
                                    <br />
                                    <br />
                                    <p id="city-div"></p>
                                    <p id="city-div2"></p>
                                </div>
                                
                                <div className="content-2">
                                    
                                        <li>
                                            <h3 id="findJobs">Find Jobs</h3>
                                            <form>
                                                <h5 className="jobSearchFormTitles">With these words:</h5>
                                                <br />
                                                <input type="text" id="jobTitle" name="jobTitle" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative'}} />
                                                <input type="text" id="jobTitle2" name="jobTitle2" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative'}} />
                                                <br />
                                                <h5 className="jobSearchFormTitles">Of this job type:</h5>
                                                <br />
                                                <select type="text" id="jobType" name="jobType" name="jobListing" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative',
                                            height: '26px'}}>
                                                    <option value="all">All job types</option>
                                                    <option value="parttime">Part-time</option>
                                                    <option value="fulltime">Full-time</option>
                                                    <option value="internship">Internship</option>
                                                    <option value="contract">Contract</option>
                                                    <option value="temporary">Temporary</option>
                                                    <option value="commission">Commission</option>
                                                </select>
                                                <select type="text" id="jobType2" name="jobType2" name="jobListing" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative',
                                            height: '26px'}}>
                                                    <option value="all">All job types</option>
                                                    <option value="parttime">Part-time</option>
                                                    <option value="fulltime">Full-time</option>
                                                    <option value="internship">Internship</option>
                                                    <option value="contract">Contract</option>
                                                    <option value="temporary">Temporary</option>
                                                    <option value="commission">Commission</option>
                                                </select>
                                                <h5 className="jobSearchFormTitles">From these job sites:</h5>
                                                <br />
                                                <select type="text" id="jobSite" name="jobSite" name="jobListing" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative',
                                            height: '26px'}}>
                                                    <option value="">All web sites</option>
                                                    <option value="jobsite">Job boards only</option>
                                                    <option value="employer">Employer web sites only</option>
                                                </select>
                                                <select type="text" id="jobSite2" name="jobSite2" name="jobListing" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative',
                                            height: '26px'}}>
                                                    <option value="">All web sites</option>
                                                    <option value="jobsite">Job boards only</option>
                                                    <option value="employer">Employer web sites only</option>
                                                </select>
                                                <h5 className="jobSearchFormTitles">That pay this amount: (e.g. $50,000 or $40K-$90K)</h5>
                                                <br />
                                                <input type="text" id="jobSalary" name="jobSalary" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative'}} />
                                                <input type="text" id="jobSalary2" name="jobSalary2" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative'}} />
                                                <h5 className="jobSearchFormTitles">Within this distance of the city:</h5>
                                                <br />
                                                <select type="text" id="jobDistance" name="jobDistance" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative',
                                            width: '173px',
                                            height: '26px'}}>
                                                    <option value="0">only within the city</option>
                                                    <option value="5">within 5 miles</option>
                                                    <option value="10">within 10 miles</option>
                                                    <option value="15">within 15 miles</option>
                                                    <option value="25">within 25 miles</option>
                                                    <option value="50">within 50 miles</option>
                                                    <option value="100">within 100 miles</option>
                                                </select>
                                                <select type="text" id="jobDistance2" name="jobDistance2" style={{color: 'black',
                                            backgroundColor: 'white',
                                            zIndex: '1001',
                                            opacity: '1',
                                            position: 'relative',
                                            width: '173px',
                                            height: '26px'}}>
                                                    <option value="0">only within the city</option>
                                                    <option value="5">within 5 miles</option>
                                                    <option value="10">within 10 miles</option>
                                                    <option value="15">within 15 miles</option>
                                                    <option value="25">within 25 miles</option>
                                                    <option value="50">within 50 miles</option>
                                                    <option value="100">within 100 miles</option>
                                                </select>
                                                <button type="submit" value="submit" id="submit">Submit</button>
                                                <div id="search-results" style={{    
                                            position: 'relative',
                                            maxWidth: '47%',
                                            width: '380px',
                                            maxHeight: '50%',
                                            height: '100px',
                                            margin: '30px 20px 0px 0px',
                                            padding: '0px 0px 0px 0px',
                                            display: 'inline-block',
                                            zIndex: '1001',
                                            /*backgroundColor: #e7e7e7,*/
                                            opacity: 1}}></div>
                                                <div id="search-results2" style={{    
                                            position: 'relative',
                                            maxWidth: '43%',
                                            width: '380px',
                                            maxHeight: '50%',
                                            height: '100px',
                                            margin: '30px 0px 0px 0px',
                                            padding: '0px 0px 0px 0px',
                                            display: 'inline-block',
                                            zIndex: '1001',
                                            /*backgroundColor: #e7e7e7,*/
                                            opacity: 1}}></div>
                                            </form>
                                        </li>  
                                </div>

                                <div className="content-3">
                                    <h3>Real Estate Stuff</h3>
                                </div>
                                <div className="content-4">
                                    <h3>How important are the following city qualities to you?</h3>
                                    <h4 id="suggestedCity">Best Match: </h4>
                                    <p>Public Transportation
                                        <li>
                                            <select id="question1">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Mild Weather
                                        <li>
                                            <select id="question2">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Sports
                                        <li>
                                            <select id="question3">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Live Music
                                        <li>
                                            <select id="question4">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Outdoor Acitvity and Parks
                                        <li>
                                            <select id="question5">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Public Schools
                                        <li>
                                            <select id="question6">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Fitness and Health
                                        <li>
                                            <select id="question7">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Safety or Lack of Crime
                                        <li>
                                            <select id="question8">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Nightlife and Bars
                                        <li>
                                            <select id="question9">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                    <p>Low Population Density
                                        <li>
                                            <select id="question10">
                                                <option value="1">1 (Very Important)</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10 (Very Unimportant)</option>
                                            </select>
                                        </li>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>

    );
  }
});

// Export the component back htmlFor use in other files
module.exports = Body;
