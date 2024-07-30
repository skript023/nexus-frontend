import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

import '@mdi/font/css/materialdesignicons.css';

export default createVuetify({
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: '#1E88E5',
                    secondary: '#FFC107',
                    accent: '#8BC34A',
                    error: '#f44336',
                },
                variables: {
                    'background-image': 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f76c5038-3583-4e8e-a919-79e2f50c3e81/datoe98-ba45d569-ea7f-49bf-bc3e-f8c4f8532884.jpg/v1/fill/w_1204,h_664,q_70,strp/seulbi_lee_cybernetic_closers_online_wallpaper_by_admvrzarts_datoe98-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mjc1OCIsInBhdGgiOiJcL2ZcL2Y3NmM1MDM4LTM1ODMtNGU4ZS1hOTE5LTc5ZTJmNTBjM2U4MVwvZGF0b2U5OC1iYTQ1ZDU2OS1lYTdmLTQ5YmYtYmMzZS1mOGM0Zjg1MzI4ODQuanBnIiwid2lkdGgiOiI8PTUwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.fGmbFnJq8smllSgRXyYgSMyd6hkpXsP9beEDVzB3Lo0")'
                }
            },
        },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
});
