---
title: 'Fortwars Dev Blog #1'
description: 'A break down of Fortwars development so far'
date: 'Oct 29 2024'
edited: 'Nov 1 2024'
---

<Header title="Goals" />
When I started the projects, I had a few libraries I wanted to make use of.

```cs
//Define the event
public record OnGameEnd() : IGameEvent;

//Disptach the event
Scene.Dispatch( new OnGameEnd() );
```

<Header title="Game Loop" />

Most of the game loop is handled through a simple switch state

```cs
switch ( State )
{
	case GameState.BuildMode:
		//After build time is over, switch to fight mode
		if ( StateSwitch > BuildTime )
				{
					Scene.Dispatch( new OnFightMode() );
					State = GameState.FightMode;
				}
				break;

	case GameState.FightMode:
		//Constantly check for the winning team
		CheckForWinningTeam();

		//If we don't have one by the end, start overtime
		if ( GetWinningTeam() == Team.None && StateSwitch > FightTime )
		{
			Scene.Dispatch( new OnGameOvertimeBuild() );
			State = GameState.OvertimeBuild;
		}
		break;
}
```
By handling the game state through game events, it allows a lot of the game to be managed by GameObjects throughout the scene. Although, you will want to parts of the game loop on the game manager too. So there is a partial class that handels things such as chainging the timer.

<Header title="Weapons" />

The weapon system in Fortwars is very simple and easy to expand.

Items are defined in a GameResource which is a file you are able to store data in. This is simply just a way to store metadata about the weapon.

All items are cloned into the scene and are enabled and disabled when you switch weapons. They are stored in a list that can be shifted around when needed.

Components that will be on a weapon stored within the Inventory, can derive from the Item class which has a set of virtual methods which helps manage deployment events.

<Img src="../fortwarsblog1/weapondataimg.png" />

<Header title="Classes" />

In Fortwars, players can select between a list of classes to play. Each class has a unique weapon and has different set buffs and debuffs. 

Classes are managed through a GameResource class. In the selection UI for the class system, all of the GameResources are listed from the file system. To add a new class, you simply create a new file, hook up which weapon you want the player to use, set debuffs and buffs.

<Img src="../fortwarsblog1/classgameresource.png" />

<Header title="Map Addons" />

I added a system to help create UCG content for Fortwars in the form of maps. To made a map, you create an addon project, set the target game to Fortwars, press play. All systems will already be loaded for you, so you can easily test your game. Mappers are even allowed to add their own logic systems using s&box's visual scripting language. When you public your map, it will automatically be listed in the main menu for players to play.

<Video src="../fortwarsblog1/ugc.mov" />

<Header title="Conclusion" />
I had a great time working on Fortwars so far. We are planing on refactoring alot of the UI, making the weapons feel great and adding more polish. Stay tuned for more updates!

<Spotify src="track/0VaeksJaXy5R1nvcTMh3Xk" />