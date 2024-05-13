<?php

const FAKE_DB = [
    'jmartinbolet@gmail.com' => '63982e54a7aeb0d89910475ba6dbd3ca6dd4e5a1',
    'admin@admin.com' => '90b9aa7e25f80cf4f64e990b78a9fc5ebd6cecad'
];

const FAKE_USER_TABLE = [
    'jmartinbolet@gmail.com' => [
        'username' => 'josepmbolet',
        'name' => 'Josep',
        'lastname' => 'Martin',
        'age' => 33,
        'birthday' => '26/09/1990',
    ],
    'admin@admin.com' => [
        'username' => 'administrator',
        'name' => 'Admin',
        'lastname' => '',
        'age' => 33,
        'birthday' => '26/09/1990',
    ]
];

const USER_FRIENDS = [
    'jmartinbolet@gmail.com' => [
        [
            'name' => 'Pepito',
            'lastname' => 'Grillo',
            'image' => 'https://picsum.photos/50/50'
        ],
        [
            'name' => 'Pinotxo',
            'lastname' => 'Nas Llarg',
            'image' => 'https://picsum.photos/50/50'
        ],
        [
            'name' => 'Geppeto',
            'lastname' => 'Constructor',
            'image' => 'https://picsum.photos/50/50'
        ],
        [
            'name' => 'Pepito',
            'lastname' => 'Pérez',
            'image' => 'https://picsum.photos/50/50'
        ],
        [
            'name' => 'Pepet',
            'lastname' => 'Marieta',
            'image' => 'https://picsum.photos/50/50'
        ]
    ],
    'admin@admin.com' => [
        [
            'name' => 'Juan',
            'lastname' => 'García',
            'image' => 'https://picsum.photos/50/50'
        ],
        [
            'name' => 'Roger',
            'lastname' => 'Vidal',
            'image' => 'https://picsum.photos/50/50'
        ],
        [
            'name' => 'Josep',
            'lastname' => 'Martín',
            'image' => 'https://picsum.photos/50/50'
        ],
        [
            'name' => 'Juan',
            'lastname' => 'Pérez',
            'image' => 'https://picsum.photos/50/50'
        ],
        [
            'name' => 'Pep',
            'lastname' => 'Guardiola',
            'image' => 'https://picsum.photos/50/50'
        ]
    ]
];