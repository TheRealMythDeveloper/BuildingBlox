const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", () => {
  renderGames();
});
const games = [
  {
    date: "2026-05-28",
    name: "Webbed",
    file: "Files/Webbed/index.html",
    desc: "SUCH A CUTE LITTLE GAME. 10/!)",
  },
  {
    date: "2026-04-20",
    name: "Ragdoll Archers",
    file: "Files/ragdoll_archers.html",
    desc: "Aim is optional. Gravity has opinions. Victory is mostly accidental.",
  },
  {
    date: "2026-04-20",
    name: "Final Fantasy VII",
    file: "Files/final_fantasy_vii.html",
    desc: "Big sword. Bigger feelings. Somehow both save the world.",
  },
  {
    date: "2026-04-20",
    name: "Endoparasitic",
    file: "Files/endoparasitic/endoparasitic.html",
    desc: "You have one arm and several problems. None of them are optional.",
  },
  {
    date: "2026-04-20",
    name: "Endoparasitic 2",
    file: "Files/endoparasitic_2.html",
    desc: "Round two. The infection upgraded. Unfortunately, so did your suffering.",
  },
  {
    date: "2026-04-20",
    name: "Bank Robbery 3",
    file: "Files/bank_robbery_3.html",
    desc: "Step 1: Make a plan. Step 2: Ignore it immediately.",
  },
  {
    date: "2026-04-20",
    name: "People Playground",
    file: "Files/people_playground.html",
    desc: "Science, but with zero ethics and unlimited curiosity.",
  },
  {
    date: "2026-04-20",
    name: "Tiletopia",
    file: "Files/tiletopia.html",
    desc: "Build something beautiful. Then accidentally ruin it.",
  },
  {
    date: "2026-04-20",
    name: "Generic Fighter Maybe",
    file: "Files/generic_fighter_maybe.html",
    desc: "It’s called generic. It absolutely is not.",
  },
  {
    date: "2026-04-20",
    name: "Dungeons & Degenerate Gamblers",
    file: "Files/dungeons___degenerate_gamblers.html",
    desc: "Rolling dice is a strategy. A terrible one. Do it anyway.",
  },

  {
    date: "2026-04-20",
    name: "Cloverpit",
    file: "Files/cloverpit.html",
    desc: "It looks peaceful. That’s how it gets you.",
  },
  {
    date: "2026-04-20",
    name: "Untitled Goose Game",
    file: "Files/untitled_goose_game.html",
    desc: "You are chaos with feathers. Honk responsibly. Or don’t.",
  },
  {
    date: "2026-04-20",
    name: "Superhot",
    file: "Files/superhot.html",
    desc: "Time only moves when you do. So… maybe don’t panic.",
  },
  {
    date: "2026-04-20",
    name: "Survivor.io",
    file: "Files/survivor_io.html",
    desc: "Everything wants you gone. Stay anyway.",
  },
  {
    date: "2026-04-20",
    name: "Ultrakill",
    file: "Files/ultrakill.html",
    desc: "Move fast. Shoot faster. Style harder than necessary.",
  },
  {
    date: "2026-04-20",
    name: "Oneshot",
    file: "Files/oneshot.html",
    desc: "You get one chance. No pressure. Just everything.",
  },
  {
    date: "2026-04-20",
    name: "Brotato",
    file: "Files/brotato.html",
    desc: "A potato with weapons. Evolution has peaked.",
  },
  {
    date: "2026-04-20",
    name: "Sonic.exe",
    file: "Files/sonic_exe.html",
    desc: "Childhood nostalgia… slightly corrupted.",
  },
  {
    date: "2026-04-20",
    name: "8-ball Billiards Classic",
    file: "Files/8ball_pool.html",
    desc: "Line it up. Miss anyway. Blame physics.",
  },
  {
    date: "2026-04-20",
    name: "A bite at Freddy’s",
    file: "Files/A Bite at Freddy's.html",
    desc: "Watch the doors. Watch the cameras. Don’t blink.",
  },
  {
    date: "2026-04-20",
    name: "A Game about Feeding a Black Hole",
    file: "Files/A Game About Feeding A Black Hole.html",
    desc: "Everything fits eventually. Everything.",
  },
  {
    date: "2026-04-20",
    name: "Adventure Capitalist",
    file: "Files/adventure_capitalist.html",
    desc: "Numbers go up. Morality goes down.",
  },
  {
    date: "2026-04-20",
    name: "Age of War 2",
    file: "Files/age_of_war_2.html",
    desc: "Evolve or get deleted by history.",
  },
  {
    date: "2026-04-20",
    name: "Amanda the Adventurer",
    file: "Files/Amanda the Adventurer.html",
    desc: "It’s educational. Technically.",
  },
  {
    date: "2026-04-20",
    name: "Awesome Tanks 2",
    file: "Files/Awesome Tanks 2.html",
    desc: "Subtlety is not installed.",
  },
  {
    date: "2026-04-20",
    name: "Bad Monday Simulator",
    file: "Files/Bad Monday Simulator.html",
    desc: "You woke up. That was mistake one.",
  },
  {
    date: "2026-04-20",
    name: "Bendy and the Ink Machine",
    file: "Files/bendy_and_the_ink_machine__all_chapters.html",
    desc: "Cartoons were better when they stayed on paper.",
  },
  {
    date: "2026-04-20",
    name: "Burrito Bison",
    file: "Files/burrito_bison.html",
    desc: "Launch yourself into poor decisions at high speed.",
  },
  {
    date: "2026-04-20",
    name: "Celeste",
    file: "Files/celeste.html",
    desc: "Climb a mountain. Also your own thoughts.",
  },
  {
    date: "2026-04-20",
    name: "Cuphead",
    file: "Files/cup_head.html",
    desc: "Looks cute. Fights like it hates you.",
  },
  {
    date: "2026-04-20",
    name: "Geometry Dash",
    file: "Files/geometry_dash.html",
    desc: "Jump. Die. Learn nothing. Repeat anyway.",
  },

  {
    date: "2026-04-20",
    name: "Happy Wheels",
    file: "Files/happy_wheels.html",
    desc: "Physics has no mercy. Neither does this game.",
  },
  {
    date: "2026-04-20",
    name: "Hollow Knight",
    file: "Files/Hollow Knight.html",
    desc: "A quiet world filled with things that definitely aren’t friendly.",
  },
  {
    date: "2026-04-20",
    name: "Minecraft 1.21.4",
    file: "Files/Minecraft 1.21.4.html",
    desc: "Build a house. Dig a hole. Forget why you started.",
  },
  {
    date: "2026-04-20",
    name: "Papers, Please",
    file: "Files/Papers, Please.html",
    desc: "Stamp papers. Question your existence.",
  },
  {
    date: "2026-04-20",
    name: "Terraria",
    file: "Files/terraria.html",
    desc: "Dig too deep. Regret immediately.",
  },
  {
    date: "2026-04-20",
    name: "World Box",
    file: "Files/World Box.html",
    desc: "Create life. Destroy it. Repeat. Godhood is busy.",
  },
  {
    date: "2026-05-05",
    name: "BERGENTRUCK 201x",
    file: "Files/BERGENTRUCK 201x.html",
    desc: "You hear boss music. You are the boss.",
  },
  {
    date: "2026-05-05",
    name: "Alien Hominid",
    file: "Files/alien_hominid.html",
    desc: "Local alien refuses to pay taxes. Violence ensues.",
  },
  {
    date: "2026-05-05",
    name: "Christmas Massacre",
    file: "Files/christmas_massacre.html",
    desc: "Santa saw your search history.",
  },
  {
    date: "2026-05-05",
    name: "City Smash",
    file: "Files/City Smash.html",
    desc: "Build it up. Knock it down. Pretend it was intentional.",
  },
  {
    date: "2026-05-05",
    name: "Deepest Sword",
    file: "Files/deepest_sword.html",
    desc: "Fall damage is a suggestion.",
  },
  {
    date: "2026-05-05",
    name: "Do NOT Take This Cat Home",
    file: "Files/Do NOT Take This Cat Home.html",
    desc: "You will take the cat home. This is your fault.",
  },
  {
    date: "2026-05-05",
    name: "Five Nights at Candy's",
    file: "Files/five_nights_at_candy_s_1.html",
    desc: "Minimum wage, maximum regret.",
  },
  {
    date: "2026-05-05",
    name: "FNF hit single",
    file: "Files/fnf_hit_single.html",
    desc: "Press buttons or get publicly embarrassed.",
  },
  {
    date: "2026-05-05",
    name: "FNF Rewrite",
    file: "Files/fnf_rewrite.html",
    desc: "Same song, worse decisions.",
  },
  {
    date: "2026-05-05",
    name: "Idle Dice",
    file: "Files/Idle Dice.html",
    desc: "Gambling, but it claps for you.",
  },
  {
    date: "2026-05-05",
    name: "Idle Mining Empire",
    file: "Files/idle_mining_empire.html",
    desc: "Digging a hole and calling it a career.",
  },
  {
    date: "2026-05-05",
    name: "In Stars and Time",
    file: "Files/In Stars and Time.html",
    desc: "Time loop: now with emotional damage.",
  },
  {
    date: "2026-05-05",
    name: "Lego Batman 2",
    file: "Files/lego_batman_2.html",
    desc: "Plastic hero. Serious problems. Occasional chaos.",
  },
  {
    date: "2026-05-05",
    name: "Lego Star Wars Complete Saga",
    file: "Files/lego_star_wars_complete_saga.html",
    desc: "Galactic drama, but everyone is slightly adorable.",
  },
  {
    date: "2026-05-05",
    name: "Look Outside",
    file: "Files/Look Outside.html",
    desc: "Don’t. Just… trust me on this.",
  },
  {
    date: "2026-05-05",
    name: "Midnight Shift",
    file: "Files/midnight_shift.html",
    desc: "Nothing happens. That’s the problem.",
  },
  {
    date: "2026-05-05",
    name: "Oneshot",
    file: "Files/oneshot.html",
    desc: "You get one try. Don't blink.",
  },
  {
    date: "2026-05-05",
    name: "Pixel Gun 3D",
    file: "Files/pixel_gun_3d.html",
    desc: "Blocky people. Real grudges.",
  },
  {
    date: "2026-05-05",
    name: "Please Dont Touch Anything",
    file: "Files/please_dont_touch_anything.html",
    desc: "You will touch everything.",
  },
  {
    date: "2026-05-05",
    name: "R.E.P.O",
    file: "Files/R.E.P.O.html",
    desc: "Take the thing. Don’t ask what it is.",
  },
  {
    date: "2026-05-05",
    name: "RE_RUN",
    file: "Files/RE_RUN.html",
    desc: "Again. Because clearly that worked.",
  },
  {
    date: "2026-05-05",
    name: "Side Effects",
    file: "Files/Side Effects.html",
    desc: "Results may vary. Sanity included.",
  },
  {
    date: "2026-05-05",
    name: "Slime Ranchers",
    file: "Files/Slime Ranchers.html",
    desc: "Capitalism, but squishy.",
  },
  {
    date: "2026-05-05",
    name: "Sort The Court",
    file: "Files/sort_the_court.html",
    desc: "Yes. No. Oops, that affected the entire kingdom.",
  },
  {
    date: "2026-05-05",
    name: "SpiderDoll",
    file: "Files/SpiderDoll.html",
    desc: "You are not in control. Cute.",
  },
  {
    date: "2026-05-05",
    name: "Super Mario Bros",
    file: "Files/Super Mario Bros.html",
    desc: "Plumbing has gone too far.",
  },
  {
    date: "2026-05-05",
    name: "Swords and Souls",
    file: "Files/Swords and Souls.html",
    desc: "Train hard. Fight harder. Look cool doing it.",
  },
  {
    date: "2026-05-05",
    name: "Tempoverdose",
    file: "Files/tempoverdose.html",
    desc: "Heartbeat now sponsored by anxiety.",
  },
  {
    date: "2026-05-05",
    name: "The Deadseat",
    file: "Files/The Deadseat.html",
    desc: "Carpooling with something illegal.",
  },
  {
    date: "2026-05-05",
    name: "Three Goblets",
    file: "Files/Three Goblets.html",
    desc: "Pick one. Blame yourself later.",
  },
  {
    date: "2026-05-05",
    name: "Tomb of the Mask",
    file: "Files/tomb_of_the_mask.html",
    desc: "Speed. Panic. Walls.",
  },
  {
    date: "2026-05-05",
    name: "Undertale Last Breath",
    file: "Files/Undertale_Last Breath.html",
    desc: "You had chances. You used none.",
  },
  {
    date: "2026-05-05",
    name: "Customer Support",
    file: "Files/customer_support.html",
    desc: "Your suffering is important to us, Your survival… less so.",
  },
  {
    date: "2026-05-05",
    name: "Dice a Million",
    file: "Files/dice_a_million.html",
    desc: "Numbers go up. So do expectations.",
  },
  {
    date: "2026-05-05",
    name: "Escape Road City 2",
    file: "Files/escape_road_city_2.html",
    desc: "Driving legally is optional.",
  },
  {
    date: "2026-05-05",
    name: "overburden",
    file: "Files/overburden.html",
    desc: "Carry everything. Including regret.",
  },
  {
    date: "2026-05-05",
    name: "Plague Inc",
    file: "Files/PlagueInc/index.html",
    desc: "Be patient. Humanity isn’t.",
  },
  {
    date: "2026-05-05",
    name: "Bank Robbery 2",
    file: "Files/bank_robbery_2.html",
    desc: "Plan it perfectly. Watch it go wrong instantly.",
  },
  {
    date: "2026-05-05",
    name: "Raldi's Crackhouse",
    file: "Files/raldi_s_crackhouse.html",
    desc: "This felt like a bad idea. It was.",
  },
  {
    date: "2026-05-05",
    name: "Stardew Valley",
    file: "Files/stardew_valley.html",
    desc: "Farming and ignoring responsibilities.",
  },
  {
    date: "2026-05-05",
    name: "Undertale",
    file: "Files/undertale.html",
    desc: "Be nice. Or don’t. Live with it.",
  },

  {
    date: "2026-05-11",
    name: "10 Minutes Till Dawn",
    file: "Files/10minutestilldawn.html",
    desc: "Survive a night where every shadow wants your obituary signed in advance.",
  },
  {
    date: "2026-05-11",
    name: "3D Flight Simulator",
    file: "Files/3Dflightsimulator.html",
    desc: "Take off gracefully. Land creatively.",
  },
  {
    date: "2026-05-11",
    name: "Agar.io Lite",
    file: "Files/agariolite.html",
    desc: "Begin as a microscopic snack. End as a floating apocalypse.",
  },
  {
    date: "2026-05-11",
    name: "Among Us",
    file: "Files/amongus.html",
    desc: "Fix the ship while somebody rehearses betrayal in electrical.",
  },
  {
    date: "2026-05-11",
    name: "Angry Birds",
    file: "Files/angrybirds.html",
    desc: "Bird-powered demolition with suspiciously satisfying physics.",
  },
  {
    date: "2026-05-11",
    name: "Angry Birds Showdown",
    file: "Files/angrybirdsshowdown.html",
    desc: "Feathers. Slingshots. Property damage. Tradition.",
  },
  {
    date: "2026-05-11",
    name: "Angry Birds Space",
    file: "Files/angrybirdsspace.html",
    desc: "Gravity becomes a suggestion once birds enter orbit.",
  },
  {
    date: "2026-05-11",
    name: "Awesome Tanks",
    file: "Files/awesometanks.html",
    desc: "Tiny tanks carrying very large opinions.",
  },
  {
    date: "2026-05-11",
    name: "The Backrooms",
    file: "Files/backrooms.html",
    desc: "Infinite yellow hallways humming like a cursed office microwave.",
  },
  {
    date: "2026-05-11",
    name: "Bacon May Die",
    file: "Files/baconmaydie.html",
    desc: "A pig fights for survival with karate and raw determination.",
  },
  {
    date: "2026-05-11",
    name: "Bad Ice Cream",
    file: "Files/badicecream.html",
    desc: "Frozen dessert escapes containment and raids the fruit aisle.",
  },
  {
    date: "2026-05-11",
    name: "Bad Ice Cream 2",
    file: "Files/badicecream2.html",
    desc: "More scoops. More enemies. More emotionally unstable ice cream.",
  },
  {
    date: "2026-05-11",
    name: "Bad Ice Cream 3",
    file: "Files/badicecream3.html",
    desc: "The dessert uprising reaches terrifying new temperatures.",
  },
  {
    date: "2026-05-11",
    name: "Bad Parenting",
    file: "Files/badparenting.html",
    desc: "Family dysfunction wrapped in the energy of a cursed storybook.",
  },
  {
    date: "2026-05-11",
    name: "Bad Piggies",
    file: "Files/badpiggies.html",
    desc: "Engineering disasters propelled by pig confidence alone.",
  },
  {
    date: "2026-05-11",
    name: "Baldi's Basics",
    file: "Files/baldisbasics.html",
    desc: "Educational software quietly develops homicidal intent.",
  },
  {
    date: "2026-05-11",
    name: "BitLife",
    file: "Files/bitlife.html",
    desc: "Live an entire life one questionable decision at a time.",
  },
  {
    date: "2026-05-11",
    name: "Blocky Snakes",
    file: "Files/blockysnakes.html",
    desc: "Grow into a polygonal menace feared across the arena.",
  },
  {
    date: "2026-05-11",
    name: "Bloons TD 5",
    file: "Files/bloonsTD5.html",
    desc: "Monkeys defend civilization from the balloon uprising.",
  },
  {
    date: "2026-05-11",
    name: "Bob the Robber",
    file: "Files/bobtherobber.html",
    desc: "Sneak, steal, and dramatically underestimate laser security.",
  },
  {
    date: "2026-05-11",
    name: "Bob the Robber 2",
    file: "Files/bobtherobber2.html",
    desc: "Bob returns for another midnight shift in burglary sciences.",
  },
  {
    date: "2026-05-11",
    name: "Bob the Robber 5",
    file: "Files/bobtherobber5.html",
    desc: "A raccoon in human form with lockpicks and ambition.",
  },
  {
    date: "2026-05-11",
    name: "Bouncy Motors",
    file: "Files/bouncymotors.html",
    desc: "Vehicles held together by suspension and blind optimism.",
  },
  {
    date: "2026-05-11",
    name: "Bowmasters",
    file: "Files/bowmasters.html",
    desc: "Friendship ends where projectile physics begins.",
  },
  {
    date: "2026-05-11",
    name: "Breaking the Bank",
    file: "Files/breakingthebank.html",
    desc: "Every plan sounds brilliant until the wall disagrees.",
  },
  {
    date: "2026-05-11",
    name: "Candy Crush",
    file: "Files/candycrush.html",
    desc: "Match colorful sugar bricks until time loses meaning.",
  },
  {
    date: "2026-05-11",
    name: "Capybara Clicker",
    file: "Files/capybaraclicker.html",
    desc: "Industrialized capybara production at an alarming scale.",
  },
  {
    date: "2026-05-11",
    name: "Chess",
    file: "Files/chess.html",
    desc: "Ancient warfare performed by emotionally exhausted royalty.",
  },
  {
    date: "2026-05-11",
    name: "Choppy Orc",
    file: "Files/choppyorc.html",
    desc: "An orc solves every problem with rotational violence.",
  },
  {
    date: "2026-05-11",
    name: "Clash of Vikings",
    file: "Files/clashofvikings.html",
    desc: "Snowy battlefields and enough axes to terraform a mountain.",
  },
  {
    date: "2026-05-11",
    name: "Cleanup.io",
    file: "Files/cleanupio.html",
    desc: "Become a sentient vacuum cleaner feared across the city.",
  },
  {
    date: "2026-05-11",
    name: "Cluster Rush",
    file: "Files/clusterrush.html",
    desc: "Sprint across speeding trucks while gravity files complaints.",
  },
  {
    date: "2026-05-11",
    name: "Cookie Clicker",
    file: "Files/cookieclicker.htm",
    desc: "A harmless bakery evolves into a sugar-fueled empire.",
  },
  {
    date: "2026-05-11",
    name: "Crossy Road",
    file: "Files/crossyroad.htm",
    desc: "Cross traffic with the confidence of a doomed chicken.",
  },
  {
    date: "2026-05-11",
    name: "Cut the Rope",
    file: "Files/cuttherope.html",
    desc: "Feed candy to a tiny green creature with infinite hunger.",
  },
  {
    date: "2026-05-11",
    name: "Dadish",
    file: "Files/dadish.html",
    desc: "A radish dad searches for his extremely lost children.",
  },
  {
    date: "2026-05-11",
    name: "Dadish 2",
    file: "Files/dadish2.html",
    desc: "Parenting continues through spikes and platforming trauma.",
  },
  {
    date: "2026-05-11",
    name: "Dadish 3",
    file: "Files/dadish3.html",
    desc: "Vegetable fatherhood reaches its final form.",
  },
  {
    name: "Idle Breakout",
    file: "Files/idlebreakout.html",
    desc: "Brick-breaking evolves into a fully automated economic system.",
  },
  {
    date: "2026-05-11",
    name: "Iron Snout",
    file: "Files/ironsnout.html",
    desc: "A pig karate-master fights wolves with unstoppable fury.",
  },
  {
    date: "2026-05-11",
    name: "Johnny Trigger",
    file: "Files/johnnytrigger.html",
    desc: "Dive through danger in slow motion like an action movie fever dream.",
  },
  {
    date: "2026-05-11",
    name: "Learn to Fly",
    file: "Files/learntofly.html",
    desc: "A penguin rejects gravity through engineering and spite.",
  },
  {
    date: "2026-05-11",
    name: "Learn to Fly 2",
    file: "Files/learntofly2.html",
    desc: "Penguin aerospace technology advances at alarming speed.",
  },
  {
    date: "2026-05-11",
    name: "Learn to Fly 3",
    file: "Files/learntofly3.html",
    desc: "The penguin space program has officially begun.",
  },
  {
    date: "2026-05-11",
    name: "Learn to Fly Idle",
    file: "Files/learntoflyidle.html",
    desc: "Launch penguins into the sky using pure capitalist momentum.",
  },
  {
    date: "2026-05-11",
    name: "Level Devil",
    file: "Files/leveldevil.html",
    desc: "Every platform is lying directly to your face.",
  },
  {
    date: "2026-05-11",
    name: "Madalin Stunt Cars 2",
    file: "Files/madalinstuntcars2.html",
    desc: "Drive expensive supercars like insurance is fictional.",
  },
  {
    date: "2026-05-11",
    name: "Melon Playground",
    file: "Files/melonplayground.html",
    desc: "A sandbox where melons experience experimental physics firsthand.",
  },
  {
    date: "2026-05-11",
    name: "Minesweeper",
    file: "Files/minesweeper.html",
    desc: "Tiny numbered squares guarding explosive disappointment.",
  },
  {
    date: "2026-05-11",
    name: "Monkey Mart",
    file: "Files/monkeymart.htm",
    desc: "Run a grocery empire staffed entirely by hardworking monkeys.",
  },
  {
    date: "2026-05-11",
    name: "Noob Miner",
    file: "Files/noobminer.html",
    desc: "Dig deeper, get richer, and question why the cave noises are getting closer.",
  },
  {
    date: "2026-05-11",
    name: "Opposite Day",
    file: "Files/oppositeday.html",
    desc: "Every puzzle proudly refuses to behave like a normal puzzle.",
  },
  {
    date: "2026-05-11",
    name: "OvO",
    file: "Files/ovo.html",
    desc: "Slide, leap, and ricochet through minimalist parkour perfection.",
  },
  {
    date: "2026-05-11",
    name: "OvO 2",
    file: "Files/ovo2.html",
    desc: "The walls got sharper and the jumps got personal.",
  },
  {
    date: "2026-05-11",
    name: "OvO Dimensions",
    file: "Files/ovo3dimensions.html",
    desc: "Parkour now folds reality like origami with trust issues.",
  },
  {
    date: "2026-05-11",
    name: "Pac-Man",
    file: "Files/pacman.html",
    desc: "Consume glowing dots while four ghosts ruin your evening.",
  },
  {
    date: "2026-05-11",
    name: "Papa's Bakeria",
    file: "Files/papasbakeria.html",
    desc: "Bake pies under the crushing pressure of customer expectations.",
  },
  {
    date: "2026-05-11",
    name: "Papa's Burgeria",
    file: "Files/papasburgeria.html",
    desc: "Flip burgers with the urgency of a fast-food battlefield medic.",
  },
  {
    date: "2026-05-11",
    name: "Papa's Cheeseria",
    file: "Files/papascheeseria.html",
    desc: "Grilled cheese craftsmanship elevated to a sacred discipline.",
  },
  {
    date: "2026-05-11",
    name: "Papa's Cupcakeria",
    file: "Files/papascupcakeria.html",
    desc: "Decorate cupcakes while the customers silently judge your frosting ratios.",
  },
  {
    date: "2026-05-11",
    name: "Papa's Donuteria",
    file: "Files/papasdonuteria.html",
    desc: "Deep fry your way toward sugary perfection.",
  },
  {
    date: "2026-05-11",
    name: "Papa's Freezeria",
    file: "Files/papasfreezeria.html",
    desc: "Blend frozen desserts with the precision of a smoothie wizard.",
  },
  {
    date: "2026-05-11",
    name: "Papa's Hot Doggeria",
    file: "Files/papashotdoggeria.html",
    desc: "Serve hot dogs at a baseball stadium where ketchup is serious business.",
  },
  {
    date: "2026-05-11",
    name: "Papa's Pancakeria",
    file: "Files/papaspancakeria.html",
    desc: "Stack pancakes higher than your remaining sanity.",
  },
  {
    date: "2026-05-11",
    name: "Papa's Pastaria",
    file: "Files/papaspastaria.html",
    desc: "Boil noodles like an Italian time-management gladiator.",
  },
  {
    date: "2026-05-11",
    name: "Papa's Pizzeria",
    file: "Files/papaspizzeria.html",
    desc: "Craft pizzas while customers inspect every pepperoni with forensic intensity.",
  },
  {
    date: "2026-05-11",
    name: "Papa's Scooperia",
    file: "Files/papasscooperia.html",
    desc: "Cookies, ice cream, and absolute dessert-based panic.",
  },
  {
    date: "2026-05-11",
    name: "Papa's Sushiria",
    file: "Files/papassushiria.html",
    desc: "Roll sushi with hands trembling from rice-related stress.",
  },
  {
    date: "2026-05-11",
    name: "PolyTrack",
    file: "Files/polytrack.html",
    desc: "Low-poly racing at speeds your steering wheel deeply fears.",
  },

  {
    date: "2026-05-11",
    name: "Ragdoll Archers",
    file: "Files/ragdollarchers.html",
    desc: "Floppy warriors settle disputes with arrows and terrible balance.",
  },
  {
    date: "2026-05-11",
    name: "Ragdoll Hit",
    file: "Files/ragdollhit.html",
    desc: "Every punch launches somebody into another zip code.",
  },

  {
    date: "2026-05-11",
    name: "Ragdoll Soccer",
    file: "Files/ragdollsoccer.html",
    desc: "Soccer played by inflatable tube men with dreams.",
  },
  {
    date: "2026-05-11",
    name: "Riddle School 4",
    file: "Files/riddleschool4.html",
    desc: "Escape school through puzzles and deeply committed boredom.",
  },
  {
    date: "2026-05-11",
    name: "Riddle School 5",
    file: "Files/riddleschool5.html",
    desc: "Things escalate far beyond ordinary classroom truancy.",
  },
  {
    date: "2026-05-11",
    name: "Rooftop Snipers",
    file: "Files/rooftopsnipers.htm",
    desc: "Two unstable marksmen fight gravity and each other simultaneously.",
  },
  {
    date: "2026-05-11",
    name: "Rooftop Snipers 2",
    file: "Files/rooftopsnipers2.html",
    desc: "Now with even more rooftop-related poor decisions.",
  },
  {
    date: "2026-05-11",
    name: "Sand Game",
    file: "Files/sandgame.html",
    desc: "A digital box of science experiments waiting to explode.",
  },
  {
    date: "2026-05-11",
    name: "Super Mario 63",
    file: "Files/sm63.html",
    desc: "A fan-made Mario adventure overflowing with platforming chaos.",
  },
  {
    date: "2026-05-11",
    name: "Super Mario 64",
    file: "Files/sm64.html",
    desc: "Collect stars, enter paintings, and bully Bowser professionally.",
  },
  {
    date: "2026-05-11",
    name: "Snow Rider",
    file: "Files/snowrider.htm",
    desc: "Rocket downhill through snowy disaster at irresponsible speeds.",
  },
  {
    date: "2026-05-11",
    name: "Spacebar Clicker",
    file: "Files/spacebarclicker.html",
    desc: "Transform one keyboard key into an industrial empire.",
  },
  {
    date: "2026-05-11",
    name: "Space Is Key",
    file: "Files/spaceiskey.html",
    desc: "One button. Infinite suffering.",
  },
  {
    date: "2026-05-11",
    name: "Sprunki",
    file: "Files/sprunki.html",
    desc: "Musical chaos assembled from strange little creatures and pure rhythm.",
  },
  {
    date: "2026-05-11",
    name: "StackTris",
    file: "Files/stacktris.html",
    desc: "Tetris enters a physics lab and immediately loses containment.",
  },
  {
    date: "2026-05-11",
    name: "State.io",
    file: "Files/stateio.html",
    desc: "Conquer the map through tactical blobs and overwhelming numbers.",
  },
  {
    date: "2026-05-11",
    name: "Stick Archers Battle",
    file: "Files/stickarchersbattle.html",
    desc: "Tiny stick figures solving diplomacy with arrows.",
  },
  {
    date: "2026-05-11",
    name: "Stick Fighter",
    file: "Files/stickfighter.html",
    desc: "Minimalist warriors delivering maximum disrespect.",
  },
  {
    date: "2026-05-11",
    name: "Stickman Hook",
    file: "Files/stickmanhook.html",
    desc: "Swing through impossible levels like a caffeinated spider-person.",
  },
  {
    date: "2026-05-11",
    name: "Stick Merge",
    file: "Files/stickmerge.html",
    desc: "Combine weapons until your arsenal becomes mathematically upsetting.",
  },
  {
    date: "2026-05-11",
    name: "Subway Surfers: Beijing",
    file: "Files/subwaysurfersbeijing.html",
    desc: "Sprint across train tracks while authority figures gain cardio.",
  },
  {
    date: "2026-05-17",
    name: "PewPew Live",
    file: "Files/PewPewLive/pewpew.html",
    desc: "Geometry class escalated into full-scale warfare.",
  },
  {
    date: "2026-05-17",
    name: "Furcifer's Dungeon",
    file: "Files/FurcifursDungeon/index.html",
    desc: "Every room contains treasure, death, or emotional damage.",
  },
  {
    date: "2026-05-17",
    name: "GNews TV",
    file: "Files/GNews/index.html",
    desc: "Breaking news: everything is somehow getting worse.",
  },
  {
    date: "2026-05-16",
    name: "Hungry Lamu",
    file: "Files/HungryLamu/index.html",
    desc: "Cute animals have never once led to a good ending.",
  },
  {
    date: "2026-05-16",
    name: "Grow your Guarden",
    file: "Files/GrowyourGuarden/index.html",
    desc: "Plants discovered the second amendment.",
  },
  {
    date: "2026-05-16",
    name: "Around The Core",
    file: "Files/Aroundthecore/index.html",
    desc: "Protect the core at all costs. The costs are extremely high.",
  },
  {
    date: "2026-05-16",
    name: "Bad Bodyguards",
    file: "Files/BadBodygaurds/index.html",
    desc: "Humanity's last defense was hired off Craigslist.",
  },
  {
    date: "2026-05-16",
    name: "Autopeil",
    file: "Files/AutoPeil/index.html",
    desc: "Driving normally was deemed too understandable.",
  },
  {
    date: "2026-05-16",
    name: "Lored",
    file: "Files/Lored/index.html",
    desc: "Micromanagement fans are about to ascend spiritually.",
  },
  {
    date: "2026-05-16",
    name: "NXTWPN10",
    file: "Files/nxtwpn10/index.html",
    desc: "Every 10 seconds your survival strategy becomes outdated.",
  },
  {
    date: "2026-05-16",
    name: "Twilight Beacon",
    file: "Files/Twilight/index.html",
    desc: "Nothing suspicious has EVER come from mysterious radio signals.",
  },
  {
    date: "2026-05-15",
    name: "Gamblers Table",
    file: "Files/GamblersTable/index.html",
    desc: "Financial stability was never part of the strategy.",
  },
  {
    date: "2026-05-15",
    name: "Pigeon Ascent",
    file: "Files/PigeonAscent/index.html",
    desc: "Train your pigeon for glorious airborne violence.",
  },
  {
    date: "2026-05-15",
    name: "STACKS:Village",
    file: "Files/StacksVillage/index.html",
    desc: "Civilization built entirely from suspiciously magical cards.",
  },
  {
    date: "2026-05-15",
    name: "Kobold Seige",
    file: "Files/Kobold/index.html",
    desc: "Tiny dragon gremlins demand violence immediately.",
  },
  {
    date: "2026-05-14",
    name: "Cult of PiN",
    file: "Files/CultOfPin/index.html",
    desc: "Roguelikes and gambling addictions finally shook hands.",
  },
  {
    date: "2026-05-14",
    name: "Astro Prospector",
    file: "Files/AstroProspector/index.html",
    desc: "Capitalism reaches space and immediately starts mining it.",
  },
  {
    date: "2026-05-14",
    name: "Space Anomaly",
    file: "Files/whathappenedtothecrew/index.html",
    desc: "The crew definitely followed safety regulations. Probably.",
  },
  {
    date: "2026-05-13",
    name: "Dome Romantik",
    file: "Files/Dome Romantik/index.html",
    desc: "Build a peaceful little base while everything outside hates you.",
  },
  {
    date: "2026-05-13",
    name: "Prerolled",
    file: "Files/Prerolled/index.html",
    desc: "I genuinely cannot explain this one without sounding insane.",
  },
  {
    date: "2026-05-13",
    name: "Mindustry",
    file: "Files/Mindustry/index.html",
    desc: "Factory automation but with significantly more explosions.",
  },
  {
    date: "2026-05-13",
    name: "Pressing Under Pressure",
    file: "Files/PressingUnderPressure/index.html",
    desc: "One button. Unlimited consequences.",
  },
  {
    date: "2026-05-13",
    name: "Hyper Jump",
    file: "Files/HyperJump/index.html",
    desc: "Newtonian physics left the chat.",
  },
  {
    date: "2026-05-13",
    name: "Curseball",
    file: "Files/Curseball/index.html",
    desc: "Sports were a mistake. This proves it.",
  },
  {
    date: "2026-05-13",
    name: "Lured In",
    file: "Files/LuredInDemo/index.html",
    desc: "Fishing minigames are never JUST fishing minigames.",
  },
  {
    date: "2026-05-13",
    name: "Sketchy Individuals",
    file: "Files/SketchyIndividuals/index.html",
    desc: "Trust absolutely nobody. Especially the stick figures.",
  },
  {
    date: "2026-05-13",
    name: "Nefarius",
    file: "Files/Nefarius/index.html",
    desc: "Wizard retirement was sadly not an option.",
  },
  {
    date: "2026-05-12",
    name: "Idle_Directive",
    file: "Files/Idle_Directive/IDLE_DIRECTIVE.html",
    desc: "Industrial revolution speedrun any%.",
  },
  {
    date: "2026-05-12",
    name: "Feed The Void",
    file: "Files/FeedtheVoid/Feed the Void.html",
    desc: "The ancient abyss hungers. You should probably do something about that.",
  },
  {
    date: "2026-05-12",
    name: "You are CIRCLE",
    file: "Files/YouAreCircle/index.html",
    desc: "Become the most threatening geometry problem alive.",
  },
  {
    date: "2026-05-12",
    name: "Traveloot",
    file: "Files/Traveloot/Unity Web Player _ Traveloot.html",
    desc: "Tiny roads. Massive cliffs. Your suspension is crying.",
  },
  {
    date: "2026-05-12",
    name: "The Binding Of Issac",
    file: "Files/the-binding-of-issac-js-master/index.html",
    desc: "Therapy would've been cheaper honestly.",
  },
  {
    date: "2026-05-11",
    name: "Pickochet",
    file: "Files/Pickochet/Pickochet.html",
    desc: "Physics ricocheted directly into your skull.",
  },
  {
    date: "2026-05-11",
    name: "Fill Up The Hole",
    file: "Files/Trashy/index.html",
    desc: "Throw increasingly questionable objects into an increasingly questionable pit.",
  },
  {
    date: "2026-05-13",
    name: "Red Handed",
    file: "Files/RedHanded/index.html",
    desc: "Stealth is optional. Panic is mandatory.",
  },
  {
    date: "2026-05-13",
    name: "Kraft & Slash",
    file: "Files/KraftAndSlash/index.html",
    desc: "Crafting systems and reckless violence unite beautifully.",
  },
  {
    date: "2026-05-14",
    name: "SCP Refinarium",
    file: "Files/SCPRefinarium/index.html",
    desc: "Surely refining anomalous objects won't cause any problems.",
  },
  {
    date: "2026-05-14",
    name: "Kibble Kittens",
    file: "Files/KibbleCats/index.html",
    desc: "Tiny cats now control your dopamine supply.",
  },
  {
    date: "2026-05-14",
    name: "Dire Decks",
    file: "Files/DireDecksa/index.html",
    desc: "Card games were never meant to have this much emotional damage.",
  },
  {
    date: "2026-05-14",
    name: "Dynamine",
    file: "Files/Dynamine/index.html",
    desc: "Minesweeper finally embraced its violent potential.",
  },
  {
    date: "2026-05-15",
    name: "Ploink",
    file: "Files/Ploink/index.html",
    desc: "What if pachinko had access to military-grade explosives?",
  },
  {
    date: "2026-05-15",
    name: "A Dark Forest",
    file: "Files/DarkForest/index.html",
    desc: "Survive the woods using courage, fire, and poor life choices.",
  },
  {
    date: "2026-05-15",
    name: "EVOLUTION",
    file: "Files/Evolution/index.html",
    desc: "Adapt or become somebody else's lunch.",
  },
  {
    date: "2026-05-16",
    name: "Blastronaut",
    file: "Files/Blastronaut/index.html",
    desc: "Corporate mining but with dramatically more explosions.",
  },
  {
    date: "2026-05-16",
    name: "Fair Squares",
    file: "Files/FairSquares/index.html",
    desc: "Everything is perfectly fair now. Unfortunately.",
  },
  {
    date: "2026-05-16",
    name: "Killover",
    file: "Files/Killover/index.html",
    desc: "Time travel was a mistake and now YOU have to clean it up.",
  },
  {
    date: "2026-05-17",
    name: "Unlikely",
    file: "Files/Unlikely/index.html",
    desc: "Statistics suggest you're probably doomed.",
  },
  {
    date: "2026-05-17",
    name: "Ozera",
    file: "Files/Ozera/index.html",
    desc: "Peaceful farming until capitalism and suffering arrive.",
  },
  {
    date: "2026-05-17",
    name: "Ghostaphobia",
    file: "Files/Ghostaphobia/index.html",
    desc: "Paranormal investigators discover fear was justified.",
  },
  {
    date: "2026-05-18",
    name: "Crank",
    file: "Files/Crank/index.html",
    desc: "PULL THE LEVER CRONK",
  },
  {
    date: "2026-05-18",
    name: "Impeached",
    file: "Files/Impeached/index.html",
    desc: "You've become the president. Make America... whatever you want.",
  },

  {
    date: "2026-05-18",
    name: "Rhythm Plus",
    file: "Files/RythmPlus/index.html",
    desc: "Hit notes with perfect timing or publicly embarrass yourself.",
  },
  {
    date: "2026-05-18",
    name: "Booster Pack Heros",
    file: "Files/BoosterPackHeros/index.html",
    desc: "Card packs contain either unstoppable power or absolute disappointment.",
  },
  {
    date: "2026-05-18",
    name: "Time Survivor",
    file: "Files/TimeSurvivor/index.html",
    desc: "Survive waves of enemies and your own terrible time management.",
  },
  {
    date: "2026-05-18",
    name: "Lootun",
    file: "Files/Lootun/index.html",
    desc: "Kick down doors. Steal shiny things. Repeat professionally.",
  },
  {
    date: "2026-05-23",
    name: "Cult Inc.",
    file: "Files/Cultinc/index.html",
    desc: "Worship a big thing. Hope it won't eat you.",
  },
  {
    date: "2026-05-23",
    name: "Deadbeat",
    file: "Files/Deadbeats/index.html",
    desc: "Dancing with death. Literally. Sounds fun!",
  },

  {
    date: "2026-05-25",
    name: "Dynabeat",
    file: "Files/Dynabeat/index.html",
    desc: "Turn any song into a dance of DEATH",
  },
  {
    date: "2026-05-25",
    name: "Slot or Not",
    file: "Files/Slotornot/index.html",
    desc: "Gambling just got a little more dangerous..",
  },
  {
    date: "2026-05-25",
    name: "Ball Game",
    file: "Files/BallGame/index.html",
    desc: "The hunger games with bouncy balls",
  },
  {
    date: "2026-05-25",
    name: "Pegfinity",
    file: "Files/Pegfinity/index.html",
    desc: "Break your computer with wayyyy too many objects.",
  },
  {
    date: "2026-05-25",
    name: "Waxweaver",
    file: "Files/waxweaver/index.html",
    desc: "Kind of like terarria i think.",
  },
  {
    date: "2026-05-25",
    name: "SCP 682 Evolution",
    file: "Files/ScpEvo/index.html",
    desc: "Dont die!",
  },
  {
    date: "2026-05-25",
    name: "Terrible Jobs",
    file: "Files/TerribleJob/index.html",
    desc: "its- its- a job application!",
  },
  {
    date: "2026-05-25",
    name: "Solitude.exe",
    file: "Files/Solitude.exe/index.html",
    desc: "Dont worry",
  },
];

const echoMessages = [
  "You came back.",
  "That changed something.",
  "You stayed longer than most.",
  "You didn’t hesitate that time.",
  "Something felt different, didn’t it?",
  "You made a choice.",
  "You’re starting to understand it.",
  "That path doesn’t always happen.",
  "You noticed that too.",
  "Interesting.",
  "You can go again.",
  "Or you can stop here.",
  "You are leaving traces.",
  "The system noticed.",
  "That wasn’t random.",
  "That wasn’t how it happened last time.",
  "Something felt off. You noticed it too.",
  "The outcome shifted slightly.",
  "That version of events… interesting.",
  "You weren’t supposed to see that part.",
  "That path doesn’t usually happen.",
  "It adjusted.",
  "That went… surprisingly well.",
  "You absolutely meant to do that.",
  "No one saw that. You're fine.",
  "10/10 strategy. No notes.",
  "You pressed buttons. Things happened.",
  "That felt illegal somehow.",
  "You can’t prove that wasn’t skill.",
  "That went exactly as planned. Probably.",
  "You survived. Legally questionable, but still.",
  "We’re not going to talk about that run.",
  "You clicked things. Bold strategy.",
  "That felt like it worked. It didn’t.",
  "You definitely did something.",
  "I’m choosing to believe that was intentional.",
  "You almost had it. Or did you?",
  "That was… a series of decisions.",
  "We learned nothing. Excellent.",
  "You pressed the right buttons. Eventually.",
  "I saw that. I won’t tell anyone.",
  "That outcome felt personal.",
  "You made chaos look like a plan.",
  "We’ll call that a success and move on.",
  "Achievement unlocked: Something happened.",
  "The universe allowed that. Barely.",
  "That felt illegal in at least three ways.",
  "You have been promoted to ‘somewhat capable.’",
  "Error: skill detected (inconsistent).",
  "You did your best. It was… something.",
  "Congratulations on existing through that.",
  "That run had personality.",
  "You were there. That counts.",
  "We’ll pretend that was clean.",
];
const quickExitMessages = [
  "Not that one? Okay.",
  "That was fast.",
  "You didn’t even warm up.",
  "Changed your mind already?",
  "We’re moving on then.",
  "That didn’t last long.",
  "Commitment issues?",
  "You gave that your full attention. Impressive.",
  "Speedrun… quitting.",
  "Bold of you to call that a try.",
  "You were in there for a moment.",
  "That barely counted.",
  "We’ll pretend that was intentional.",
  "You blinked and it was over.",
  "That didn’t hold your interest, clearly.",
  "Quick decision. I respect it.",
  "You sampled it. Generously.",
  "Not your thing? Fair enough.",
  "That was more of a visit than a play.",
  "You exited with confidence.",
  "Minimal effort. Maximum clarity.",
  "You made your point quickly.",
  "That was efficient, at least.",
  "We’ll mark that as ‘seen.’",
  "That experiment concluded rapidly.",
  "You lasted exactly as long as expected.",
  "That was… brief.",
  "No attachment. Clean exit.",
  "You dipped instantly.",
  "That didn’t resonate, I assume.",
  "You tried. Technically.",
  "That was more of a glance.",
  "You explored the exit button thoroughly.",
  "We call that a tactical retreat.",
  "You evaluated it. Quickly.",
  "Short and decisive.",
  "You gave it a chance. A small one.",
  "That was almost immediate.",
  "You’re very decisive today.",
  "We move on.",

  "Err̴or: S̶tate unsta̸ble.",
  "Error: Rea̴li̶ty mismatch.",
  "E̷r̵r̶o̴r̷: Outc̸ome shiftin̵g.",
  "Error: Syst— ...resume.",
  "Error: That wasn’t there before.",
  "Err— wait.",
  "Error: Something moved.",
  "Error: That path changed.",
  "Error: Desync detected.",
  "Error: Rewriting...",
];
// =======================
// SORTING SYSTEM
// =======================
function sortGames(games, type) {
  let sorted = [...games];

  if (type === "newest") {
    sorted.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  }

  if (type === "az") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (type === "za") {
    sorted.sort((a, b) => b.name.localeCompare(a.name));
  }

  return sorted;
}
function renderGames(sortType = "newest") {
  const container = document.getElementById("gamesContainer");
  container.innerHTML = "";

  const search = (searchBar?.value || "").toLowerCase();

  let gameList = games.filter(
    (game) =>
      (game.name || "").toLowerCase().includes(search) ||
      (game.desc || "").toLowerCase().includes(search)
  );

  // Rare hidden game 👁️
  if (Math.random() < 0.05) {
    gameList.push({
      date: "????-??-??",
      name: "???",
      file: "games/hidden.html",
      desc: "You weren’t supposed to find this.",
    });
  }

  const sorted = sortGames(gameList, sortType);

  sorted.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
      <h3>${game.name}</h3>
      <p>${game.desc}</p>

      <div class="launch-buttons">
        <button class="launch-site">Play here</button>
        <button class="launch-blank">about:blank</button>
      </div>
    `;

    card.querySelector(".launch-site").onclick = (e) => {
      e.stopPropagation();
      openGame(game.file);
    };

    card.querySelector(".launch-blank").onclick = (e) => {
      e.stopPropagation();
      openGameBlank(game.file);
    };

    container.appendChild(card);
  });
}
// =======================
// DROPDOWN HOOK
// =======================
const select = document.getElementById("sortSelect");

select.addEventListener("change", () => {
  renderGames(select.value);
});

// =======================
// INITIAL LOAD
// =======================
renderGames("newest");

// =======================
// GAME OPEN / CLOSE
// =======================
let gameStartTime = 0;

// PLAY INSIDE WEBSITE
function openGame(path) {
  const overlay = document.getElementById("gameOverlay");
  const frame = document.getElementById("gameFrame");

  frame.src = path;
  overlay.classList.remove("hidden");

  gameStartTime = Date.now();
}

// CLOSE WEBSITE PLAYER
function closeGame() {
  const overlay = document.getElementById("gameOverlay");
  const frame = document.getElementById("gameFrame");

  frame.src = "";
  overlay.classList.add("hidden");
}

// OPEN IN ABOUT:BLANK
function openGameBlank(path) {
  const win = window.open("about:blank", "_blank");

  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Google Docs</title>

      <style>
        html, body {
          margin: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: black;
        }

        iframe {
          width: 100vw;
          height: 100vh;
          border: none;
        }
      </style>
    </head>

    <body>
      <iframe src="${path}" allowfullscreen></iframe>
    </body>
    </html>
  `);

  // Google Docs favicon
  const link = win.document.createElement("link");
  link.rel = "icon";
  link.href = "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico";
  win.document.head.appendChild(link);

  win.document.close();

  gameStartTime = Date.now();
}

function closeGame() {
  const overlay = document.getElementById("gameOverlay");
  const frame = document.getElementById("gameFrame");

  overlay.classList.add("hidden");
  frame.src = "";

  const timeSpent = Date.now() - gameStartTime;

  if (timeSpent < 2000) {
    showEchoMessage([
      "Err̴or: S̶tate unsta̸ble.",
      "Error: Rea̴li̶ty mismatch.",
      "E̷r̵r̶o̴r̷: Outc̸ome shiftin̵g.",
      "Error: Syst— ...resume.",
      "Error: That wasn’t there before.",
      "Err— wait.",
      "Error: Something moved.",
      "Error: That path changed.",
      "Error: Desync detected.",
      "Error: Rewriting...",

      "Nope.",
      "That was immediate.",
      "You didn’t even blink.",
      "Instant rejection.",
      "You opened it just to leave?",
      "That lasted… nothing.",
      "Not even a second thought.",
      "Denied.",
      "You said no instantly.",
      "That was a reflex.",
      "You backed out before it began.",
      "Immediate exit detected.",
      "You weren’t feeling that at all.",
      "That was over before it started.",
      "Speedrun: avoidance.",
      "You hovered and left.",
      "That didn’t stand a chance.",
      "You gave it zero time.",
      "You saw enough instantly.",
      "That was decisive.",
      "No hesitation. Just no.",
      "You closed that with confidence.",
      "You trusted your instincts. Brutal.",
      "That didn’t pass the vibe check.",
      "You didn’t even try to pretend.",
      "You were gone instantly.",
      "That was rejected on sight.",
      "You dipped immediately.",
      "You made that decision fast.",
      "That wasn’t even considered.",
      "You skipped the experience entirely.",
      "That was almost impressive.",
      "You gave it absolutely nothing.",
      "You left before it could begin.",
      "That was a hard no.",
      "You didn’t stick around for answers.",
      "You already knew.",
      "That didn’t deserve your time, apparently.",
      "You ended that instantly.",
      "That was… efficient.",
    ]);
  } else if (timeSpent < 5000) {
    showEchoMessage(quickExitMessages);
  } else {
    showEchoMessage();
  }
}
// =======================
// GAME LAUNCH OPTIONS
// =======================

function showLaunchOptions(path) {
  const choice = confirm(
    "Press OK to launch in about:blank\nPress Cancel to launch inside website"
  );

  if (choice) {
    openGameBlank(path);
  } else {
    openGame(path);
  }
}
// =======================
// ECHO SYSTEM
// =======================
function showEchoMessage(customPool = null) {
  const el = document.getElementById("echoMessage");

  const pool = customPool || echoMessages;
  const text = pool[Math.floor(Math.random() * pool.length)];

  el.textContent = "";
  el.style.opacity = 1;

  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 35);
    } else {
      setTimeout(() => {
        el.style.opacity = 0;
      }, 2000);
    }
  }

  type();
}
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
