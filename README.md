# vivid-demo
A demo repository to play around with Vivid! Mess around with a copy of our landing page to see how Vivid works! Learn more about Vivid at www.vivid.lol. If you want to test out an alpha version of Vivid on your own project, check out [docs.vivid.lol](docs.vivid.lol)!

# Functionality

Vivid lets you quickly find, edit, and iterate on components in your browser.

## Inspecting elements

You can hold down <kbd>Option</kbd> (Windows:<kbd>Alt</kbd>) while hovering over elements to replicate inspect functionality. 

## Selecting Components

You can click on any elements by <kbd>Option</kbd> clicking (Windows:<kbd>Alt</kbd>) clicking on any element. You can move between components and reach hidden components with the arrow keys: "inward" to a child component with <kbd>↑</kbd>, "outward" to a parent component with <kbd>↓</kbd>, and between adjacent sibling components with <kbd>←</kbd> and <kbd>→</kbd>.

## Executing Commands

Any time you select a component, the code pane will pop up. Any edits you make to the code pane will be reflected in your browser and in your code. If you want to edit styling even faster, you can pull up the command palette with <kbd>Command</kbd><kbd>K</kbd> (Windows:<kbd>Ctrl</kbd><kbd>K</kbd>). Typing a class in the command palette will add that Tailwind class to the selected component. If the class you are trying to add conflicts with an existing class, Vivid will replace the old class with your new input. If you type out a class that the component already has, Vivid will remove that class.

## Known Issues

1. The app does (infrequently) crash. If you just refresh your browser, it will almost always go away. All your changes get autosaved to your code, so you don't have to worry about losing your edits.
2. Library components show up a bit funky in the Vivid code pane. Working on it!
3. If you add a non-existent class from the command palette, Vivid won't check to make sure it's a valid Tailwind class before adding it.
4. If you're editing in both Vivid and your IDE, you must save your changes in your IDE before going back to Vivid. Otherwise, the files created from your IDE and Vivid will diverge and you'll have to handle conflicts.
