import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: navigator.language.slice(0,2),
    fallbackLocale: 'en',
    messages: {
        en: {
            login: {
                first: 'First, <a href="https://messenger.klinkerapps.com/overview/signup.html" target="_blank">sign up</a> for an account from the <b>Text from any device</b> option in the navigation drawer of the phone app.',
                error: 'Email or Password incorrect',
                email: 'Email Address',
                password: 'Password',
                forgotpassword: 'Forgot your password?',
                iphone: 'Have an <i>iPhone</i>?',
                login: 'Log in',
            },
            sidebar: {
                conversations: 'Conversations',
                privateconversations: 'Private Conversations',
                archive: 'Archive',
                folders: 'Folders',
                scheduled: 'Scheduled Messages',
                blacklist: 'Blacklist'
            },
            api: {
                disconnected: 'You\'ve been disconnected. We\'re trying to reconnect you...',
                back: 'And we\'re back !'
            },
            conversations: {
                pinned: 'Pinned',
                today: 'Today',
                yesterday: 'Yesterday',
                thisweek: 'This Week',
                thismonth: 'This Month',
                older: 'Older',
                noconv: 'No Conversations'
            },
            passcode: {
                enter: 'Enter Passcode',
                passcode: 'Passcode'
            },
            dialog: {
                continue: 'Continue',
                cancel: 'Cancel',
                save: 'Save',
                close: 'Close',
                create: 'Create',
                delete: 'Delete'
            },
            sendbar: {
                type: 'Type message...'
            },
            thread: {
                settings: {
                    updatecolors: 'Update Theme Colors',
                    pin: 'Pin Conversation',
                    mute: 'Mute Conversation',
                    private: 'Private Conversation'
                }
            },
            menus: {
                account: 'My Account',
                settings: 'Settings',
                help: 'Help and Feedback',
                logout: 'Logout',
                convinfo: 'Conversation Information',
                blacklist: 'Blacklist Contact',
                delete: 'Delete Conversation',
                archive: 'Archive Conversation',
                unarchive: 'Unarchive Conversation',
                convsettings: 'Conversation Settings'
            },
            compose: {
                norecipient: 'No Recipient',
                type: 'Type contact...',
                cantfind: 'Can\'t find your contact?',
                alreadyadded: '{name} has already been added'
            },
            blacklist: {
                none: 'No Blacklisted Numbers',
                phone: 'Phone Number',
                create: 'Create Blacklist'
            },
            settings: {
                theme: 'Theme Settings',
                refresh: 'Refresh settings from phone',
                explanatory_intro: 'These settings are pulled from the app, when you click this preference. You can also change them manually, from this page.',
                base: 'Base Theme',
                daynight: 'Day / Night',
                light: 'Light',
                dark: 'Dark',
                black: 'Black',
                primary: 'Primary Color',
                darkprimary: 'Primary Color Dark',
                accent: 'Accent Color',
                applyeverywhere: 'Apply Colors to all Conversations',
                applyprimary: 'Apply Primary Color to App Bar',
                webspecific: 'Web Specific Settings',
                shownotifs: 'Show Notifications',
                entersend: 'Use Enter to Send Messages',
                yes: 'Yes',
                no: 'No'
            },
            experiments: {
                disclaimer: 'Disclaimer',
                explanatory_intro: 'These preferences come with no support and no guarentee that they will continue to exist. As an open source app, they will be useful to test new features and provide developers with the means of implementing their own tweaks into the app. Use with caution and do not rely on them, unless you are maintaining them. They are meant to be experiments.',
                larger_app_bar: 'Display Larger App Bar',
            }
        },
        fr: {
            login: {
                first: 'D\'abord, <a href="https://messenger.klinkerapps.com/overview/signup.html" target="_blank">enregistrez-vous</a> avec le bouton <b>SMS depuis d\'autres appareils</b> dans le menu de navigation de l\'application mobile.',
                error: 'Email ou Mot de passe incorrect',
                email: 'Adresse email',
                password: 'Mot de passe',
                forgotpassword: 'Mot de passe oubli?? ?',
                iphone: 'Vous avez un <i>iPhone</i>?',
                login: 'Connexion',
            },
            sidebar: {
                conversations: 'Conversations',
                privateconversations: 'Conversations priv??es',
                archive: 'Conversations archiv??es',
                folders: 'Dossiers',
                scheduled: 'Messages programm??s',
                blacklist: 'Liste noire'
            },
            api: {
                disconnected: 'Vous avez ??t?? d??connect??. Nous tentons de vous reconnecter...',
                back: 'Connexion ??tablie !'
            },
            conversations: {
                pinned: '??pingl??s',
                today: 'Aujourd\'hui',
                yesterday: 'Hier',
                thisweek: 'Cette semaine',
                thismonth: 'Ce mois ci',
                older: 'Anciens',
                noconv: 'Aucune conversation'
            },
            passcode: {
                enter: 'Entrez le code secret',
                passcode: 'Code secret'
            },
            dialog: {
                continue: 'Continuer',
                cancel: 'Abandonner',
                save: 'Sauvegarder',
                close: 'Fermer',
                create: 'Cr??er',
                delete: 'Supprimer'
            },
            sendbar: {
                type: 'Composez votre message'
            },
            thread: {
                settings: {
                    updatecolors: 'Changer les couleurs',
                    pin: '??pingler la conversation',
                    mute: 'Rendre muet',
                    private: 'Conversation priv??e'
                }
            },
            menus: {
                account: 'Mon compte',
                settings: 'Param??tres',
                help: 'Aide et retours',
                logout: 'D??connexion',
                convinfo: 'Informations',
                blacklist: 'Bloquer',
                delete: 'Supprimer',
                archive: 'Archiver',
                unarchive: 'D??sarchiver',
                convsettings: 'Param??tres'
            },
            compose: {
                norecipient: 'Pas de destinataire',
                type: 'Entrez le nom d\'un contact',
                cantfind: 'Contact introuvable ?',
                alreadyadded: '{name} est d??j?? destinataire'
            },
            blacklist: {
                none: 'Liste noire vide',
                phone: 'Num??ro de t??l??phone',
                create: 'Ajouter un blocage'
            },
            settings: {
                theme: 'Param??tre d\'apparence',
                refresh: 'R??cup??rer les param??tres du t??l??phone',
                explanatory_intro: 'Ces param??tres sont r??cup??r??s depuis l\'application, lorsque vous cliquez dessus. Vous pouvez aussi les changer manuellement depuis cette page.',
                base: 'Th??me de base',
                daynight: 'Jour / Nuit',
                light: 'Clair',
                dark: 'Sombre',
                black: 'Noir',
                primary: 'Couleur primaire',
                darkprimary: 'Couleur primaire fonc??e',
                accent: 'Couleur secondaire',
                applyeverywhere: 'Appliquer ces couleurs pour toutes les conversations',
                applyprimary: 'Appliquer la couleur primaire ?? la barre de navigation',
                webspecific: 'Param??tres sp??cifiques au web',
                shownotifs: 'Afficher les notifications',
                entersend: 'La touche entr??e envoie le message',
                yes: 'Oui',
                no: 'Non'
            }
        }
    }});
