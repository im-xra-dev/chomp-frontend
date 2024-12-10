# CHOMP Frontend design documentation
This document is a work in progress and is open to collaboration. It contains the requirements
 for the project and any other information relevant to the implementation of the system.
 
Documentation should be broken out into individual files where relevant to make it easier to navigate.

## Design rules
> #### 1 2 3 rule
> Multi-phase flows should be limited to 3 pages. This is intended to keep the user engaged and 
> also allows us to spot bloated flows and break them down into more manageable sections
>
> An example could be adding a new recipe. The user wont want to go through several pages of 
> forms every time. They simply wont use the service. The first stage can, for example, collect all
> the information relevant to the recipe such as its Name, Cook Time, Brief Description etc.
> Phase 2 would then focus on the Ingredients and Allergy/Diet information, and the final page
> allows them to upload the photo preview and attach the recipes instructions.

## Page layout
- All pages contain the website-header at the top

- All pages contain a notification bar

- All pages contain a main content window that is either full or mid sized (see below)

- All pages contain a navigation side-bar on the left to allow the user to easily navigate between their home
feed, subsection feeds and meal plans

- Some pages contain an info side-bar on the right to provide additional info

## Route handling / page layout
[Read about the page layout here](https://github.com/im-xra-dev/chomp-frontend/tree/main/route-handling.md)