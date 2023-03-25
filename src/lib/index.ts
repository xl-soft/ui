// IMPORTS

    //* STORES
    import * as MainStore from "./stores" // Store that contains global variables 

    //* STRUCTURE
    import Main from "./layout/Main.svelte" // Main wrapper for UI kit. Contains colors, fonts, and basic UI features like 100vh fix
    import Flex from "./layout/Flex.svelte" // Default, fully-customizable flex box for any component. Supports overflow and overflow with horizontal scroll feature

    //* MEDIA
    import Image from "./media/Image.svelte" // Image content
    import Icon from "./media/Icon.svelte" // Icon content with included modified Streamline HQ Core Line Icons

    //* INPUTS
    import Button from "./inputs/Button.svelte" // Button
    import Switch from "./inputs/Switch.svelte" // Switch
    import Input from "./inputs/Input.svelte" // Input


// EXPORTS
    
    export {
        //* STORES
        MainStore,

        //* STRUCTURE
        Main, Flex,

        //* MEDIA
        Image, Icon,

        //* INPUTS
        Button, Switch, Input
    }