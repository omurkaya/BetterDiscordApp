export default {
    en: {
        Panels: {
            plugins: "Plugins",
            themes: "Themes",
            customcss: "Custom CSS"
        },
        Collections: {
            settings: {
                name: "Settings",
                general: {
                    name: "General",
                    emotes: {
                        name: "Emote System",
                        note: "Enables BD's emote system"
                    },
                    publicServers: {
                        name: "Public Servers",
                        note: "Display public servers button"
                    },
                    voiceDisconnect: {
                        name: "Voice Disconnect",
                        note: "Disconnect from voice server when closing Discord"
                    },
                    twentyFourHour: {
                        name: "24-Hour Timestamps",
                        note: "Hides channels when in minimal mode"
                    },
                    classNormalizer: {
                        name: "Normalize Classes",
                        note: "Adds stable classes to elements to help themes. (e.g. adds .da-channels to .channels-Ie2l6A)"
                    },
                    showToasts: {
                        name: "Show Toasts",
                        note: "Shows a small notification for important information"
                    }
                },
                appearance: {
                    name: "Appearance",
                    voiceMode: {
                        name: "Voice Mode",
                        note: "Hides everything that isn't voice chat"
                    },
                    minimalMode: {
                        name: "Minimal Mode",
                        note: "Hide elements and reduce the size of elements"
                    },
                    hideChannels: {
                        name: "Hide Channels",
                        note: "Hides channels when in minimal mode"
                    },
                    darkMode: {
                        name: "Dark Mode",
                        note: "Make certain elements dark by default"
                    },
                    coloredText: {
                        name: "Colored Text",
                        note: "Make text colour the same as role color"
                    }
                },
                addons: {
                    name: "Addon Manager",
                    addonErrors: {
                        name: "Show Addon Errors",
                        note: "Shows a modal with plugin/theme errors"
                    },
                    autoScroll: {
                        name: "Scroll To Settings",
                        note: "Auto-scrolls to a plugin's settings when the button is clicked (only if out of view)"
                    },
                    autoReload: {
                        name: "Automatic Loading",
                        note: "Automatically loads, reloads, and unloads plugins and themes"
                    },
                },
                customcss: {
                    name: "Custom CSS",
                    customcss: {
                        name: "Custom CSS",
                        note: "Enables the Custom CSS tab"
                    },
                    liveUpdate: {
                        name: "Live Update",
                        note: "Updates the css as you type"
                    },
                    startDetached: {
                        name: "Start Detached",
                        note: "Clicking the Custom CSS tab opens the editor in a separate window",
                    },
                    nativeOpen: {
                        name: "Open in Native Editor",
                        note: "Clicking the Custom CSS tab opens your custom css in your native editor"
                    }
                },
                developer: {
                    name: "Developer Settings",
                    developerMode: {
                        name: "Developer Mode",
                        note: "Allows activating debugger when pressing F8"
                    },
                    copySelector: {
                        name: "Copy Selector",
                        note: "Adds a \"Copy Selector\" option to context menus when developer mode is active"
                    }
                },
                window: {
                    name: "Window Preferences",
                    transparency: {
                        name: "Enable Transparency",
                        note: "Enables the main window to be see-through (requires restart)"
                    },
                    frame: {
                        name: "Window Frame",
                        note: "Adds the native os window frame to the main window"
                    }
                }
            },
            emotes: {
                name: "Emotes",
                general: {
                    name: "General",
                    download: {
                        name: "Download Emotes",
                        note: "Download emotes once a week to stay up to date"
                    },
                    emoteMenu: {
                        name: "Emote Menu",
                        note: "Show Twitch/Favourite emotes in emote menu"
                    },
                    hideEmojiMenu: {
                        name: "Hide Emoji Menu",
                        note: "Hides Discord's emoji menu when using emote menu"
                    },
                    autoCaps: {
                        name: "Emote Autocapitalization",
                        note: "Autocapitalize emote commands"
                    },
                    showNames: {
                        name: "Show Names",
                        note: "Show emote names on hover"
                    },
                    modifiers: {
                        name: "Show Emote Modifiers",
                        note: "Enable emote mods (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"
                    },
                    animateOnHover: {
                        name: "Animate On Hover",
                        note: "Only animate the emote modifiers on hover"
                    }
                },
                categories: {
                    name: "Categories",
                    twitch: {
                        name: "Twitch",
                        note: "Show Twitch global & subscriber emotes"
                    },
                    ffz: {
                        name: "FrankerFaceZ",
                        note: "Show emotes from FFZ"
                    },
                    bttv: {
                        name: "BetterTTV",
                        note: "Show emotes from BTTV"
                    }
                }
            }
        },
        Emotes: {
            downloading: "Downloading emotes in the background do not reload.",
            downloaded: "All emotes successfully downloaded.",
            clearEmotes: "Clear Emote Data",
            favoriteAction: "Favorite!"
        },
        CustomCSS: {
            confirmationText: "You have unsaved changes to your Custom CSS. Closing this window will lose all those changes.",
            update: "Update",
            save: "Save",
            openNative: "Open in System Editor",
            openDetached: "Detach Window",
            settings: "Editor Settings",
            editorTitle: "Custom CSS Editor"
        },
        PublicServers: {
            button: "public",
            join: "Join",
            joining: "Joining",
            joined: "Joined",
            loading: "Loading",
            loadMore: "Load More",
            notConnected: "Not connected to DiscordServers.com!",
            search: "Search",
            connect: "Connect",
            reconnect: "Reconnect",
            categories: "Categories",
            connection: "Connected as: {{username}}#{{discriminator}}",
            results: "Showing {{start}}-{{end}} of {{total}} results in {{category}}",
            query: "for {{query}}"
        },
        Modals: {
            confirmClose: "Are You Sure?",
            okay: "Okay",
            cancel: "Cancel",
            name: "Name",
            message: "Message",
            error: "Error",
            addonErrors: "Addon Errors"
        }
    },
    es: {
        Collections: {
            settings: {
                name: "Ajustes",
                addons: {
                    addonErrors: {
                        name: "Mostrar Errores de Addons"
                    }
                }
            }
        }
    }
};