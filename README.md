# Signalements
Test technique réalisé par Marwane SEKKAT le 22/03/2023



Versions utilisées dans ce projet :
	Angular CLI: 14.1.3
	Node: 16.16.0
	Angular: 14.3.0
	Angular material : 14.2.7

Pourquoi un reactive form : 
	La logique métier et la déclaration des controls sont isolées de la vue. 
	La vue est seul responsable de l'apparence du formulaire. Cela augmente l'évolutivité, la lisibilité et la maintenabilité.
	On peut accéder et mettre à jour n'importe quel contrôle dans le form facilement


Architecture du projet
	Dans le dossier app, on trouve 3 types de sous dossiers :
		Models : contient les interfaces/classes qu’on va utiliser dans le code (pour typer par exemple)
		Services : contient les services que les 2 components utiliseront pour se partager les données.
		Les dossiers des components.

