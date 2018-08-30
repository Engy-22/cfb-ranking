
DROP TABLE IF EXISTS `teams`;
CREATE TABLE IF NOT EXISTS `teams` (
	`id`	integer,
	`name`	text,
	`mascot`	text,
	`espn_id`	INTEGER UNIQUE,
	PRIMARY KEY(`id`)
);
INSERT INTO `teams` VALUES (1,'Air Force','Falcons',2005);
INSERT INTO `teams` VALUES (2,'Akron','Zips',2006);
INSERT INTO `teams` VALUES (3,'Alabama','Crimson Tide',333);
INSERT INTO `teams` VALUES (4,'UAB','Blazers',5);
INSERT INTO `teams` VALUES (5,'Appalachian State','Mountaineers',2026);
INSERT INTO `teams` VALUES (6,'Arizona','Wildcats',12);
INSERT INTO `teams` VALUES (7,'Arizona State','Sun Devils',9);
INSERT INTO `teams` VALUES (8,'Arkansas','Razorbacks',8);
INSERT INTO `teams` VALUES (9,'Arkansas State','Red Wolves',2032);
INSERT INTO `teams` VALUES (10,'Army','Black Knights',349);
INSERT INTO `teams` VALUES (11,'Auburn','Tigers',2);
INSERT INTO `teams` VALUES (12,'Ball State','Cardinals',2050);
INSERT INTO `teams` VALUES (13,'Baylor','Bears',239);
INSERT INTO `teams` VALUES (14,'Boise State','Broncos',68);
INSERT INTO `teams` VALUES (15,'Boston College','Eagles',103);
INSERT INTO `teams` VALUES (16,'Bowling Green','Falcons',189);
INSERT INTO `teams` VALUES (17,'Buffalo','Bulls',2084);
INSERT INTO `teams` VALUES (18,'BYU','Cougars',252);
INSERT INTO `teams` VALUES (19,'California','Golden Bears',25);
INSERT INTO `teams` VALUES (20,'Fresno State','Bulldogs',278);
INSERT INTO `teams` VALUES (21,'UCLA','Bruins',26);
INSERT INTO `teams` VALUES (22,'UCF','Knights',2116);
INSERT INTO `teams` VALUES (23,'Central Michigan','Chippewas',2117);
INSERT INTO `teams` VALUES (24,'Charlotte','49ers',2429);
INSERT INTO `teams` VALUES (25,'Cincinnati','Bearcats',2132);
INSERT INTO `teams` VALUES (26,'Clemson','Tigers',228);
INSERT INTO `teams` VALUES (27,'Coastal Carolina','Chanticleers',324);
INSERT INTO `teams` VALUES (28,'Colorado','Buffaloes',38);
INSERT INTO `teams` VALUES (29,'Colorado State','Rams',36);
INSERT INTO `teams` VALUES (30,'Connecticut','Huskies',41);
INSERT INTO `teams` VALUES (31,'Duke','Blue Devils',150);
INSERT INTO `teams` VALUES (32,'Eastern Michigan','Eagles',2199);
INSERT INTO `teams` VALUES (33,'East Carolina','Pirates',151);
INSERT INTO `teams` VALUES (34,'FIU','Panthers',2229);
INSERT INTO `teams` VALUES (35,'Florida','Gators',57);
INSERT INTO `teams` VALUES (36,'Florida Atlantic','Owls',2226);
INSERT INTO `teams` VALUES (37,'Florida State','Seminoles',52);
INSERT INTO `teams` VALUES (38,'Georgia','Bulldogs',61);
INSERT INTO `teams` VALUES (39,'Georgia Southern','Eagles',290);
INSERT INTO `teams` VALUES (40,'Georgia State','Panthers',2247);
INSERT INTO `teams` VALUES (41,'Georgia Tech','Yellow Jackets',59);
INSERT INTO `teams` VALUES (42,'Hawai''i','Rainbow Warriors',62);
INSERT INTO `teams` VALUES (43,'Houston','Cougars',248);
INSERT INTO `teams` VALUES (44,'Idaho','Vandals',70);
INSERT INTO `teams` VALUES (45,'Illinois','Fighting Illini',356);
INSERT INTO `teams` VALUES (46,'Indiana','Hoosiers',84);
INSERT INTO `teams` VALUES (47,'Iowa','Hawkeyes',2294);
INSERT INTO `teams` VALUES (48,'Iowa State','Cyclones',66);
INSERT INTO `teams` VALUES (49,'Kansas','Jayhawks',2305);
INSERT INTO `teams` VALUES (50,'Kansas State','Wildcats',2306);
INSERT INTO `teams` VALUES (51,'Kent State','Golden Flashes',2309);
INSERT INTO `teams` VALUES (52,'Kentucky','Wildcats',96);
INSERT INTO `teams` VALUES (53,'LSU','Tigers',99);
INSERT INTO `teams` VALUES (54,'Louisiana Tech','Bulldogs',2348);
INSERT INTO `teams` VALUES (55,'Louisiana-Lafayette','Ragin'' Cajuns',309);
INSERT INTO `teams` VALUES (56,'Louisiana-Monroe','Warhawks',2433);
INSERT INTO `teams` VALUES (57,'Louisville','Cardinals',97);
INSERT INTO `teams` VALUES (58,'Marshall','Thundering Herd',276);
INSERT INTO `teams` VALUES (59,'Maryland','Terrapins',120);
INSERT INTO `teams` VALUES (60,'Massachusetts','Minutemen',113);
INSERT INTO `teams` VALUES (61,'Memphis','Tigers',235);
INSERT INTO `teams` VALUES (62,'Miami','Hurricanes',2390);
INSERT INTO `teams` VALUES (63,'Miami (OH)','RedHawks',193);
INSERT INTO `teams` VALUES (64,'Michigan','Wolverines',130);
INSERT INTO `teams` VALUES (65,'Michigan State','Spartans',127);
INSERT INTO `teams` VALUES (66,'Middle Tennessee','Blue Raiders',2393);
INSERT INTO `teams` VALUES (67,'Minnesota','Golden Gophers',135);
INSERT INTO `teams` VALUES (68,'Ole Miss','Rebels',145);
INSERT INTO `teams` VALUES (69,'Mississippi State','Bulldogs',344);
INSERT INTO `teams` VALUES (70,'Missouri','Tigers',142);
INSERT INTO `teams` VALUES (71,'Navy','Midshipmen',2426);
INSERT INTO `teams` VALUES (72,'Nebraska','Cornhuskers',158);
INSERT INTO `teams` VALUES (73,'Nevada','Wolf Pack',2440);
INSERT INTO `teams` VALUES (74,'UNLV','Rebels',2439);
INSERT INTO `teams` VALUES (75,'New Mexico','Lobos',167);
INSERT INTO `teams` VALUES (76,'New Mexico State','Aggies',166);
INSERT INTO `teams` VALUES (77,'North Carolina','Tar Heels',153);
INSERT INTO `teams` VALUES (78,'NC State','Wolfpack',152);
INSERT INTO `teams` VALUES (79,'North Texas','Mean Green',249);
INSERT INTO `teams` VALUES (80,'Northern Illinois','Huskies',2459);
INSERT INTO `teams` VALUES (81,'Northwestern','Wildcats',77);
INSERT INTO `teams` VALUES (82,'Notre Dame','Fighting Irish',87);
INSERT INTO `teams` VALUES (83,'Ohio','Bobcats',195);
INSERT INTO `teams` VALUES (84,'Ohio State','Buckeyes',194);
INSERT INTO `teams` VALUES (85,'Oklahoma','Sooners',201);
INSERT INTO `teams` VALUES (86,'Oklahoma State','Cowboys',197);
INSERT INTO `teams` VALUES (87,'Old Dominion','Monarchs',295);
INSERT INTO `teams` VALUES (88,'Oregon','Ducks',2483);
INSERT INTO `teams` VALUES (89,'Oregon State','Beavers',204);
INSERT INTO `teams` VALUES (90,'Penn State','Nittany Lions',213);
INSERT INTO `teams` VALUES (91,'Pittsburgh','Panthers',221);
INSERT INTO `teams` VALUES (92,'Purdue','Boilermakers',2509);
INSERT INTO `teams` VALUES (93,'Rice','Owls',242);
INSERT INTO `teams` VALUES (94,'Rutgers','Scarlet Knights',164);
INSERT INTO `teams` VALUES (95,'San Diego State','Aztecs',21);
INSERT INTO `teams` VALUES (96,'San Jose State','Spartans',23);
INSERT INTO `teams` VALUES (97,'South Alabama','Jaguars',6);
INSERT INTO `teams` VALUES (98,'South Carolina','Gamecocks',2579);
INSERT INTO `teams` VALUES (99,'South Florida','Bulls',58);
INSERT INTO `teams` VALUES (100,'USC','Trojans',30);
INSERT INTO `teams` VALUES (101,'SMU','Mustangs',2567);
INSERT INTO `teams` VALUES (102,'Southern Miss','Golden Eagles',2572);
INSERT INTO `teams` VALUES (103,'Stanford','Cardinal',24);
INSERT INTO `teams` VALUES (104,'Syracuse','Orange',183);
INSERT INTO `teams` VALUES (105,'TCU','Horned Frogs',2628);
INSERT INTO `teams` VALUES (106,'Temple','Owls',218);
INSERT INTO `teams` VALUES (107,'Tennessee','Volunteers',2633);
INSERT INTO `teams` VALUES (108,'Texas','Longhorns',251);
INSERT INTO `teams` VALUES (109,'Texas A&M','Aggies',245);
INSERT INTO `teams` VALUES (110,'Texas State','Bobcats',326);
INSERT INTO `teams` VALUES (111,'Texas Tech','Red Raiders',2641);
INSERT INTO `teams` VALUES (112,'UTEP','Miners',2638);
INSERT INTO `teams` VALUES (113,'UTSA','Roadrunners',2636);
INSERT INTO `teams` VALUES (114,'Toledo','Rockets',2649);
INSERT INTO `teams` VALUES (115,'Troy','Trojans',2653);
INSERT INTO `teams` VALUES (116,'Tulane','Green Wave',2655);
INSERT INTO `teams` VALUES (117,'Tulsa','Golden Hurricane',202);
INSERT INTO `teams` VALUES (118,'Utah','Utes',254);
INSERT INTO `teams` VALUES (119,'Utah State','Aggies',328);
INSERT INTO `teams` VALUES (120,'Vanderbilt','Commodores',238);
INSERT INTO `teams` VALUES (121,'Virginia','Cavaliers',258);
INSERT INTO `teams` VALUES (122,'Virginia Tech','Hokies',259);
INSERT INTO `teams` VALUES (123,'Wake Forest','Demon Deacons',154);
INSERT INTO `teams` VALUES (124,'Washington','Huskies',264);
INSERT INTO `teams` VALUES (125,'Washington State','Cougars',265);
INSERT INTO `teams` VALUES (126,'West Virginia','Mountaineers',277);
INSERT INTO `teams` VALUES (127,'Western Kentucky','Hilltoppers',98);
INSERT INTO `teams` VALUES (128,'Western Michigan','Broncos',2711);
INSERT INTO `teams` VALUES (129,'Wisconsin','Badgers',275);
INSERT INTO `teams` VALUES (130,'Wyoming','Cowboys',2751);
DROP TABLE IF EXISTS `scores`;
CREATE TABLE IF NOT EXISTS `scores` (
	`id`	INTEGER,
	`home_team`	INTEGER,
	`home_score`	INTEGER,
	`away_team`	INTEGER,
	`away_score`	INTEGER,
	`neutral_site`	INTEGER,
	`season`	INTEGER,
	`week`	INTEGER,
	`date_played`	TEXT,
	PRIMARY KEY(`id`)
);
DROP TABLE IF EXISTS `ratings`;
CREATE TABLE IF NOT EXISTS `ratings` (
	`id`	INTEGER,
	`season`	INTEGER,
	`week`	INTEGER,
	`team_id`	INTEGER,
	`rating`	NUMERIC,
	`json`	TEXT,
	PRIMARY KEY(`id`)
);
DROP INDEX IF EXISTS `teams_espn_id`;
CREATE INDEX IF NOT EXISTS `teams_espn_id` ON `teams` (
	`espn_id`
);
DROP INDEX IF EXISTS `scores_home_team`;
CREATE INDEX IF NOT EXISTS `scores_home_team` ON `scores` (
	`home_team`
);
DROP INDEX IF EXISTS `scores_away_team`;
CREATE INDEX IF NOT EXISTS `scores_away_team` ON `scores` (
	`away_team`
);
DROP INDEX IF EXISTS `ratings_week`;
CREATE INDEX IF NOT EXISTS `ratings_week` ON `ratings` (
	`week`
);
DROP INDEX IF EXISTS `ratings_team_id`;
CREATE INDEX IF NOT EXISTS `ratings_team_id` ON `ratings` (
	`team_id`
);
DROP INDEX IF EXISTS `ratings_season`;
CREATE INDEX IF NOT EXISTS `ratings_season` ON `ratings` (
	`season`
);
DROP INDEX IF EXISTS `ratings_rating`;
CREATE INDEX IF NOT EXISTS `ratings_rating` ON `ratings` (
	`rating`
);
