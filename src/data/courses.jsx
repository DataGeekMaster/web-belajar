// src/data/courses.jsx
import { BookOpenText, BarChart3, Terminal, BarChart2, Calculator, Dices, Code, BookOpen, Cpu, Database, Activity, Layers, Dice2 } from 'lucide-react';

export const COURSES_DATA = [
    {
        id: "python_protocol",
        title: "PYTHON",
        description: "Kuasai bahasa python. Bangun backend, skrip, dan model AI.",
        isProgramming: true,
        color: "blue",
        icon: <Terminal size={24} />,
        codeConfig: {
            language: "Python",
            defaultCode: "print('Halo World dari Python')",
            placeholder: "Masukkan Kode Python..."
        },
        modules: [
            {
                id: "mod_getting_started",
                title: "Getting Started",
                lessons: [
                    {
                        id: "py_what_is_python",
                        title: "What is Python",
                        description: "Kenalan dengan Python, si superhero coding"
                    },
                    {
                        id: "py_installing_python",
                        title: "Installing Python",
                        description: "Gampang install Python, mulai petualangan codingmu"
                    },
                    {
                        id: "py_python_interpreter",
                        title: "Python Interpreter",
                        description: "Kenalan sama juru bahasa Python"
                    },
                    {
                        id: "py_code_editors",
                        title: "Code Editors",
                        description: "Pilih editor favoritmu untuk nulis kode"
                    },
                    {
                        id: "py_your_first_python_program",
                        title: "Your First Python Program",
                        description: "Tulis program pertamamu, rasakan keseruan"
                    },
                    {
                        id: "py_python_extension",
                        title: "Python Extension",
                        description: "Ekstensi ini bikin coding makin lancar"
                    },
                    {
                        id: "py_linting_python_code",
                        title: "Linting Python Code",
                        description: "Linting: si pembersih kode jadi rapi"
                    },
                    {
                        id: "py_running_python_code",
                        title: "Running Python Code",
                        description: "Jalankan kode, lihat hasilnya langsung"
                    },
                    {
                        id: "py_formatting_python_code",
                        title: "Formatting Python Code",
                        description: "Bikin kademu rapi biar makin kece"
                    },
                    {
                        id: "py_how_python_code_is_executed",
                        title: "How Python Code is Executed",
                        description: "Mau tahu cara Python mikir?"
                    },
                    {
                        id: "py_quiz",
                        title: "Quiz",
                        description: "Tes sejauh mana kamu paham"
                    },
                    {
                        id: "py_python_implementations",
                        title: "Python Implementations",
                        description: "Python pun banyak versi lho"
                    }
                ]
            },
            {
                id: "mod_primitive_types",
                title: "Primitive Types",
                lessons: [
                    {
                        id: "py_variables",
                        title: "Variables",
                        description: "Variabel: tempat nyimpan data"
                    },
                    {
                        id: "py_variable_names",
                        title: "Variable Names",
                        description: "Nama variabel, pilih yang kece tapi jelas"
                    },
                    {
                        id: "py_strings",
                        title: "Strings",
                        description: "String: kalimat ajaib di Python"
                    },
                    {
                        id: "py_escape_sequences",
                        title: "Escape Sequences",
                        description: "Escape karakter biar spesial"
                    },
                    {
                        id: "py_formatted_strings",
                        title: "Formatted Strings",
                        description: "String keren dengan format canggih"
                    },
                    {
                        id: "py_string_methods",
                        title: "String Methods",
                        description: "Method string, olah teks jadi gampang"
                    },
                    {
                        id: "py_numbers",
                        title: "Numbers",
                        description: "Mainan angka bareng Python"
                    },
                    {
                        id: "py_working_with_numbers",
                        title: "Working with Numbers",
                        description: "Operasi angka serba bisa"
                    },
                    {
                        id: "py_type_conversion",
                        title: "Type Conversion",
                        description: "Ganti tipe data sekelebat mata"
                    }
                ]
            },
            {
                id: "mod_control_flow",
                title: "Control Flow",
                lessons: [
                    {
                        id: "py_comparison_operators",
                        title: "Comparison Operators",
                        description: "Bandingin nilai, hasil boolean"
                    },
                    {
                        id: "py_conditional_statements",
                        title: "Conditional Statements",
                        description: "If-else: putusan kode"
                    },
                    {
                        id: "py_ternary_operator",
                        title: "Ternary Operator",
                        description: "If-else satu baris, simple!"
                    },
                    {
                        id: "py_logical_operators",
                        title: "Logical Operators",
                        description: "Logika AND OR NOT"
                    },
                    {
                        id: "py_short_circuit_evaluation",
                        title: "Short-circuit Evaluation",
                        description: "Evaluasi pintar hemat waktu"
                    },
                    {
                        id: "py_chaining_comparison_operators",
                        title: "Chaining Comparison Operators",
                        description: "Rantai operator, jadi lebih ringkas"
                    },
                    {
                        id: "py_for_loops",
                        title: "For Loops",
                        description: "Perulangan for, set item selesai"
                    },
                    {
                        id: "py_for_else",
                        title: "For..Else",
                        description: "For punya teman baru: else"
                    },
                    {
                        id: "py_nested_loops",
                        title: "Nested Loops",
                        description: "Loop di dalam loop"
                    },
                    {
                        id: "py_iterables",
                        title: "Iterables",
                        description: "Objek yang bisa diputar"
                    },
                    {
                        id: "py_while_loops",
                        title: "While Loops",
                        description: "Loop selama kondisi cocok"
                    },
                    {
                        id: "py_infinite_loops",
                        title: "Infinite Loops",
                        description: "Loop tanpa batas, hati-hati!"
                    },
                    {
                        id: "py_exercise",
                        title: "Exercise",
                        description: "Latihan coding biar makin jago"
                    }
                ]
            },
            {
                id: "mod_functions",
                title: "Functions",
                lessons: [
                    {
                        id: "py_defining_functions",
                        title: "Defining Functions",
                        description: "Buat fungsi sendiri, keren!"
                    },
                    {
                        id: "py_arguments",
                        title: "Arguments",
                        description: "Kirim data ke fungsi"
                    },
                    {
                        id: "py_types_of_functions",
                        title: "Types of Functions",
                        description: "Fungsi macam-macam, pilih sesuka"
                    },
                    {
                        id: "py_keyword_arguments",
                        title: "Keyword Arguments",
                        description: "Parameter pake nama biar jelas"
                    },
                    {
                        id: "py_default_arguments",
                        title: "Default Arguments",
                        description: "Kasih nilai default biar gak ribet"
                    },
                    {
                        id: "py_xargs",
                        title: "xargs",
                        description: "Tangkap argumen sebanyak-banyaknya"
                    },
                    {
                        id: "py_xxargs",
                        title: "xxargs",
                        description: "Tangkap argumen dalam bentuk dict"
                    },
                    {
                        id: "py_scope",
                        title: "Scope",
                        description: "Jangkauan variabel"
                    },
                    {
                        id: "py_debugging",
                        title: "Debugging",
                        description: "Debug, cari kutu kode"
                    },
                    {
                        id: "py_vscode_coding_tricks_windows",
                        title: "VSCode Coding Tricks - Windows",
                        description: "Tips coding di Windows"
                    },
                    {
                        id: "py_vscode_coding_tricks_mac",
                        title: "VSCode Coding Tricks - Mac",
                        description: "Tips coding di Mac"
                    },
                    {
                        id: "py_exercise",
                        title: "Exercise",
                        description: "Latihan coding biar makin jago"
                    },
                    {
                        id: "py_solution",
                        title: "Solution",
                        description: "Solusi, cek jawabanmu"
                    }
                ]
            },
            {
                id: "mod_data_structures",
                title: "Data Structures",
                lessons: [
                    {
                        id: "py_lists",
                        title: "Lists",
                        description: "List: tumpukan data"
                    },
                    {
                        id: "py_accessing_items",
                        title: "Accessing Items",
                        description: "Ambil item dari list"
                    },
                    {
                        id: "py_list_unpacking",
                        title: "List Unpacking",
                        description: "Bongkar isi list sekaligus"
                    },
                    {
                        id: "py_looping_over_lists",
                        title: "Looping over Lists",
                        description: "Puter isi list satu-satu"
                    },
                    {
                        id: "py_adding_or_removing_items",
                        title: "Adding or Removing Items",
                        description: "Tambah/hapus item gampang"
                    },
                    {
                        id: "py_finding_items",
                        title: "Finding Items",
                        description: "Cari barang di list"
                    },
                    {
                        id: "py_sorting_lists",
                        title: "Sorting Lists",
                        description: "Urutin list dengan gampang"
                    },
                    {
                        id: "py_lambda_functions",
                        title: "Lambda Functions",
                        description: "Fungsi mini sebaris"
                    },
                    {
                        id: "py_map_function",
                        title: "Map Function",
                        description: "Map: transformasi list"
                    },
                    {
                        id: "py_filter_function",
                        title: "Filter Function",
                        description: "Filter: saring list sesuai kriteria"
                    },
                    {
                        id: "py_list_comprehensions",
                        title: "List Comprehensions",
                        description: "ListComp, bikin list cepat"
                    },
                    {
                        id: "py_zip_function",
                        title: "Zip Function",
                        description: "Zip: gabung list jadi pasangan"
                    },
                    {
                        id: "py_stacks",
                        title: "Stacks",
                        description: "Tumpukan ala Python"
                    },
                    {
                        id: "py_queues",
                        title: "Queues",
                        description: "Antrian dengan list"
                    },
                    {
                        id: "py_tuples",
                        title: "Tuples",
                        description: "Tuple: list yang gak bisa diubah"
                    },
                    {
                        id: "py_swapping_variables",
                        title: "Swapping Variables",
                        description: "Tuker nilai variabel sekejap"
                    },
                    {
                        id: "py_arrays",
                        title: "Arrays",
                        description: "Array untuk data berderet"
                    },
                    {
                        id: "py_sets",
                        title: "Sets",
                        description: "Set: koleksi unik"
                    },
                    {
                        id: "py_dictionaries",
                        title: "Dictionaries",
                        description: "Dict: kamus data"
                    },
                    {
                        id: "py_dictionary_comprehensions",
                        title: "Dictionary Comprehensions",
                        description: "DictComp bikin dict secepat kilat"
                    },
                    {
                        id: "py_generator_expressions",
                        title: "Generator Expressions",
                        description: "Generator hemat memori"
                    },
                    {
                        id: "py_unpacking_operator",
                        title: "Unpacking Operator",
                        description: "Bongkar paket data"
                    },
                    {
                        id: "py_exercise",
                        title: "Exercise",
                        description: "Latihan coding biar makin jago"
                    }
                ]
            },
            {
                id: "mod_exceptions",
                title: "Exceptions",
                lessons: [
                    {
                        id: "py_exceptions",
                        title: "Exceptions",
                        description: "Eksepsi: tangani error"
                    },
                    {
                        id: "py_handling_exceptions",
                        title: "Handling Exceptions",
                        description: "Tangkap error biar tetap jalan"
                    },
                    {
                        id: "py_handling_different_exceptions",
                        title: "Handling Different Exceptions",
                        description: "Tangkap macam error"
                    },
                    {
                        id: "py_cleaning_up",
                        title: "Cleaning Up",
                        description: "Bersihkan setelah eksepsi"
                    },
                    {
                        id: "py_the_with_statement",
                        title: "The With Statement",
                        description: "With: otomatis tutup file"
                    },
                    {
                        id: "py_raising_exceptions",
                        title: "Raising Exceptions",
                        description: "Lempar error sendiri"
                    },
                    {
                        id: "py_cost_of_raising_exceptions",
                        title: "Cost of Raising Exceptions",
                        description: "Hati-hati, error bikin lambat"
                    }
                ]
            },
            {
                id: "mod_classes",
                title: "Classes",
                lessons: [
                    {
                        id: "py_classes",
                        title: "Classes",
                        description: "OOP mulai dari sini"
                    },
                    {
                        id: "py_creating_classes",
                        title: "Creating Classes",
                        description: "Buat class sendiri"
                    },
                    {
                        id: "py_constructors",
                        title: "Constructors",
                        description: "Constructor: pembangun objek"
                    },
                    {
                        id: "py_class_vs_instance_attributes",
                        title: "Class vs Instance Attributes",
                        description: "Atribut class vs instance"
                    },
                    {
                        id: "py_class_vs_instance_methods",
                        title: "Class vs Instance Methods",
                        description: "Method class vs instance"
                    },
                    {
                        id: "py_magic_methods",
                        title: "Magic Methods",
                        description: "Method ajaib di class"
                    },
                    {
                        id: "py_comparing_objects",
                        title: "Comparing Objects",
                        description: "Bandingin objek"
                    },
                    {
                        id: "py_performing_arithmetic_operations",
                        title: "Performing Arithmetic Operations",
                        description: "Operasi matematika objek"
                    },
                    {
                        id: "py_making_custom_containers",
                        title: "Making Custom Containers",
                        description: "Buat wadah sendiri"
                    },
                    {
                        id: "py_private_members",
                        title: "Private Members",
                        description: "Private: variabel tersembunyi"
                    },
                    {
                        id: "py_properties",
                        title: "Properties",
                        description: "Property bikin getter setter elegan"
                    },
                    {
                        id: "py_inheritance",
                        title: "Inheritance",
                        description: "Wariskan sifat class"
                    },
                    {
                        id: "py_the_object_class",
                        title: "The Object Class",
                        description: "Semua objek anaknya object"
                    },
                    {
                        id: "py_method_overriding",
                        title: "Method Overriding",
                        description: "Timpa method parent"
                    },
                    {
                        id: "py_multi_level_inheritance",
                        title: "Multi-level Inheritance",
                        description: "Turunan beberapa tingkat"
                    },
                    {
                        id: "py_multiple_inheritance",
                        title: "Multiple Inheritance",
                        description: "Warisan dari banyak parent"
                    },
                    {
                        id: "py_a_good_example_of_inheritance",
                        title: "A Good Example of Inheritance",
                        description: "Contoh inheritance yang bener"
                    },
                    {
                        id: "py_abstract_base_classes",
                        title: "Abstract Base Classes",
                        description: "ABC bikin kerangka aman"
                    },
                    {
                        id: "py_polymorphism",
                        title: "Polymorphism",
                        description: "Bentuk objek serba bisa"
                    },
                    {
                        id: "py_duck_typing",
                        title: "Duck Typing",
                        description: "Kalau jalan dan berkicau = bebek"
                    },
                    {
                        id: "py_extending_built_in_types",
                        title: "Extending Built-in Types",
                        description: "Bikin list versi sendiri"
                    },
                    {
                        id: "py_data_classes",
                        title: "Data Classes",
                        description: "Class buat nyimpen data"
                    }
                ]
            },
            {
                id: "mod_modules",
                title: "Modules",
                lessons: [
                    {
                        id: "py_creating_modules",
                        title: "Creating Modules",
                        description: "Bikin module sendiri"
                    },
                    {
                        id: "py_compiled_python_files",
                        title: "Compiled Python Files",
                        description: "File __pycache__"
                    },
                    {
                        id: "py_module_search_path",
                        title: "Module Search Path",
                        description: "Cari module dimana?"
                    },
                    {
                        id: "py_packages",
                        title: "Packages",
                        description: "Paket module"
                    },
                    {
                        id: "py_sub_packages",
                        title: "Sub-packages",
                        description: "Subpaket dalam package"
                    },
                    {
                        id: "py_intra_package_references",
                        title: "Intra-package References",
                        description: "Rujuk sesama anggota paket"
                    },
                    {
                        id: "py_the_dir_function",
                        title: "The dir Function",
                        description: "Lihat isi module"
                    },
                    {
                        id: "py_executing_modules_as_scripts",
                        title: "Executing Modules as Scripts",
                        description: "Jalankan module langsung"
                    }
                ]
            },
            {
                id: "mod_python_standard_library",
                title: "Python Standard Library",
                lessons: [
                    {
                        id: "py_python_standard_library",
                        title: "Python Standard Library",
                        description: "Perpustakaan bawaan super lengkap"
                    },
                    {
                        id: "py_working_with_paths",
                        title: "Working With Paths",
                        description: "Kelola path file"
                    },
                    {
                        id: "py_working_with_directories",
                        title: "Working with Directories",
                        description: "Kelola folder"
                    },
                    {
                        id: "py_working_with_files",
                        title: "Working with Files",
                        description: "Baca tulis file"
                    },
                    {
                        id: "py_working_with_zip_files",
                        title: "Working with Zip Files",
                        description: "Kelola file zip"
                    },
                    {
                        id: "py_working_with_csv_files",
                        title: "Working with CSV Files",
                        description: "Import export CSV"
                    },
                    {
                        id: "py_working_with_json_files",
                        title: "Working with JSON Files",
                        description: "Mainan data JSON"
                    },
                    {
                        id: "py_working_with_a_sqlite_database",
                        title: "Working with a SQLite Database",
                        description: "Query database SQLite"
                    },
                    {
                        id: "py_working_with_timestamps",
                        title: "Working with Timestamps",
                        description: "Kelola cap waktu"
                    },
                    {
                        id: "py_working_with_datetimes",
                        title: "Working with DateTimes",
                        description: "Kelola tanggal waktu"
                    },
                    {
                        id: "py_working_with_time_deltas",
                        title: "Working with Time Deltas",
                        description: "Hitung selisih waktu"
                    },
                    {
                        id: "py_generating_random_values",
                        title: "Generating Random Values",
                        description: "Acak nilai untuk simulasi"
                    },
                    {
                        id: "py_opening_the_browser",
                        title: "Opening the Browser",
                        description: "Buka browser dari kode"
                    },
                    {
                        id: "py_sending_emails",
                        title: "Sending Emails",
                        description: "Kirim email otomatis"
                    },
                    {
                        id: "py_templates",
                        title: "Templates",
                        description: "Template bikin surat cepat"
                    },
                    {
                        id: "py_command_line_arguments",
                        title: "Command-line Arguments",
                        description: "Ambil argumen dari terminal"
                    },
                    {
                        id: "py_running_external_programs",
                        title: "Running External Programs",
                        description: "Jalankan program lain"
                    }
                ]
            },
            {
                id: "mod_python_package_index",
                title: "Python Package Index",
                lessons: [
                    {
                        id: "py_pypi",
                        title: "Pypi",
                        description: "Gudang package Python"
                    },
                    {
                        id: "py_pip",
                        title: "Pip",
                        description: "Manager package Python"
                    },
                    {
                        id: "py_virtual_environments",
                        title: "Virtual Environments",
                        description: "Lingkungan virtual sendiri"
                    },
                    {
                        id: "py_pipenv",
                        title: "Pipenv",
                        description: "Pipenv: virtualenv + pip"
                    },
                    {
                        id: "py_virtual_environments_in_vscode",
                        title: "Virtual Environments in VSCode",
                        description: "Venv di VSCode"
                    },
                    {
                        id: "py_pipfile",
                        title: "Pipfile",
                        description: "File dependensi Pipenv"
                    },
                    {
                        id: "py_managing_dependencies",
                        title: "Managing Dependencies",
                        description: "Kelola package project"
                    },
                    {
                        id: "py_publishing_packages",
                        title: "Publishing Packages",
                        description: "Upload package ke PyPI"
                    },
                    {
                        id: "py_docstrings",
                        title: "Docstrings",
                        description: "Dokumentasi di kode"
                    },
                    {
                        id: "py_pydoc",
                        title: "Pydoc",
                        description: "Dokumentasi otomatis"
                    }
                ]
            },
            {
                id: "mod_popular_python_packages",
                title: "Popular Python Packages",
                lessons: [
                    {
                        id: "py_introduction",
                        title: "Introduction",
                        description: "Pengantar dunia API"
                    },
                    {
                        id: "py_what_are_apis",
                        title: "What are APIs",
                        description: "Kenalan dengan antarmuka program"
                    },
                    {
                        id: "py_yelp_api",
                        title: "Yelp API",
                        description: "Ambil data resto lewat Yelp"
                    },
                    {
                        id: "py_searching_for_businesses",
                        title: "Searching for Businesses",
                        description: "Cari info bisnis"
                    },
                    {
                        id: "py_hiding_api_keys",
                        title: "Hiding API Keys",
                        description: "Sembunyiin kunci API"
                    },
                    {
                        id: "py_sending_text_messages",
                        title: "Sending Text Messages",
                        description: "Kirim SMS lewat kode"
                    },
                    {
                        id: "py_web_scraping",
                        title: "Web Scraping",
                        description: "Ambil data dari web"
                    },
                    {
                        id: "py_browser_automation",
                        title: "Browser Automation",
                        description: "Otomasi browser pake Selenium"
                    },
                    {
                        id: "py_working_with_pdfs",
                        title: "Working with PDFs",
                        description: "Kelola file PDF"
                    },
                    {
                        id: "py_working_with_excel_spreadsheets",
                        title: "Working with Excel Spreadsheets",
                        description: "Baca tulis Excel"
                    },
                    {
                        id: "py_command_query_separation_principle",
                        title: "Command Query Separation Principle",
                        description: "C-Q separation rapihin kode"
                    },
                    {
                        id: "py_numpy",
                        title: "NumPy",
                        description: "NumPy: super power hitung"
                    }
                ]
            },
            {
                id: "mod_building_web_applications_with_django",
                title: "Building Web Applications with Django",
                lessons: [
                    {
                        id: "py_introduction",
                        title: "Introduction",
                        description: "Pengantar dunia API"
                    },
                    {
                        id: "py_your_first_django_project",
                        title: "Your First Django Project",
                        description: "Proyek Django pertama"
                    },
                    {
                        id: "py_your_first_app",
                        title: "Your First App",
                        description: "App Django pertama"
                    },
                    {
                        id: "py_views",
                        title: "Views",
                        description: "View: kontrol tampilan"
                    },
                    {
                        id: "py_models",
                        title: "Models",
                        description: "Model: struktur data"
                    },
                    {
                        id: "py_migrations",
                        title: "Migrations",
                        description: "Migrasi database"
                    },
                    {
                        id: "py_changing_the_models",
                        title: "Changing the Models",
                        description: "Ubah model sesuai kebutuhan"
                    },
                    {
                        id: "py_admin",
                        title: "Admin",
                        description: "Panel admin Django"
                    },
                    {
                        id: "py_customizing_the_admin",
                        title: "Customizing the Admin",
                        description: "Bikin admin makin cantik"
                    },
                    {
                        id: "py_database_abstraction_api",
                        title: "Database Abstraction API",
                        description: "Query DB gak pake SQL"
                    },
                    {
                        id: "py_templates",
                        title: "Templates",
                        description: "Template bikin surat cepat"
                    },
                    {
                        id: "py_adding_bootstrap",
                        title: "Adding Bootstrap",
                        description: "Hias web pake Bootstrap"
                    },
                    {
                        id: "py_customizing_the_layout",
                        title: "Customizing the Layout",
                        description: "Sunting tampilan jadi unik"
                    },
                    {
                        id: "py_sharing_a_template_across_multiple_apps",
                        title: "Sharing a Template Across Multiple Apps",
                        description: "Template satu untuk banyak app"
                    },
                    {
                        id: "py_url_parameters",
                        title: "Url Parameters",
                        description: "Tangkap parameter di URL"
                    },
                    {
                        id: "py_getting_a_single_object",
                        title: "Getting a Single Object",
                        description: "Ambil satu data spesifik"
                    },
                    {
                        id: "py_raising_404_errors",
                        title: "Raising 404 Errors",
                        description: "Tampilkan 404 kalau kosong"
                    },
                    {
                        id: "py_referencing_urls",
                        title: "Referencing Urls",
                        description: "Panggil URL pake nama"
                    },
                    {
                        id: "py_creating_apis",
                        title: "Creating APIs",
                        description: "Bikin API sendiri"
                    },
                    {
                        id: "py_adding_the_homepage",
                        title: "Adding the Homepage",
                        description: "Buat halaman utama"
                    },
                    {
                        id: "py_getting_ready_to_deploy",
                        title: "Getting Ready to Deploy",
                        description: "Persiapan deploy"
                    },
                    {
                        id: "py_deployment",
                        title: "Deployment",
                        description: "Deploy app ke dunia"
                    }
                ]
            },
            {
                id: "mod_machine_learning_with_python",
                title: "Machine Learning with Python",
                lessons: [
                    {
                        id: "py_what_is_machine_learning",
                        title: "What is Machine Learning",
                        description: "Kenalan ML"
                    },
                    {
                        id: "py_machine_learning_in_action",
                        title: "Machine Learning in Action",
                        description: "Lihat ML beraksi"
                    },
                    {
                        id: "py_libraries_and_tools",
                        title: "Libraries and Tools",
                        description: "Peralatan ML di Python"
                    },
                    {
                        id: "py_importing_a_data_set",
                        title: "Importing a Data Set",
                        description: "Impor dataset untuk latihan"
                    },
                    {
                        id: "py_jupyter_shortcuts",
                        title: "Jupyter Shortcuts",
                        description: "Pintasan Jupyter biar cepat"
                    },
                    {
                        id: "py_a_real_machine_learning_problem",
                        title: "A Real Machine Learning Problem",
                        description: "Kasus nyata ML"
                    },
                    {
                        id: "py_preparing_the_data",
                        title: "Preparing the Data",
                        description: "Bersih-bersih data"
                    },
                    {
                        id: "py_learning_and_predicting",
                        title: "Learning and Predicting",
                        description: "Latih model dan tebak"
                    },
                    {
                        id: "py_calculating_the_accuracy",
                        title: "Calculating the Accuracy",
                        description: "Hitung akurasi model"
                    },
                    {
                        id: "py_persisting_models",
                        title: "Persisting Models",
                        description: "Simpan model biar gak hilang"
                    },
                    {
                        id: "py_visualizing_a_decision_tree",
                        title: "Visualizing a Decision Tree",
                        description: "Lihat pohon keputusan"
                    }
                ]
            }
        ]
    },
    {
        id: "statistika_mastery",
        title: "STATISTIKA",
        description: "Dari nol sampai jago analisis data & machine learning.",
        isProgramming: true,
        color: "pink",
        icon: <BarChart3 size={24} />,
        codeConfig: {
            language: "R",
            defaultCode: "data <- c(10, 20, 30, 40)\nmean(data)",
            placeholder: "Ketik rumus statistik di sini menggunakan bahasa R..."
        },
        modules: [
            {
                id: "mod_stat_fondasi_matematika",
                title: "Fondasi Matematika",
                lessons: [
                    {
                        id: "les_stat_operasi_bilangan_dasar",
                        title: "Operasi bilangan dasar",
                        description: "Jago ngitung dari nol: tambah, kurang, kali, bagi!"
                    },
                    {
                        id: "les_stat_pecahan_dan_desimal",
                        title: "Pecahan dan desimal",
                        description: "Belajar bikin pecahan jadi teman, bukan musuh!"
                    },
                    {
                        id: "les_stat_persentase_dan_rasio",
                        title: "Persentase dan rasio",
                        description: "Hitung diskon, bagi kue, dan ngegas persentase!"
                    },
                    {
                        id: "les_stat_pangkat_dan_akar",
                        title: "Pangkat dan akar",
                        description: "Eksponen & akar: kunci rahasia angka berkelipatan."
                    },
                    {
                        id: "les_stat_aljabar_dasar",
                        title: "Aljabar dasar",
                        description: "X ketemu angka: teka-teki simpel ala aljabar."
                    },
                    {
                        id: "les_stat_fungsi_dan_notasi_fungsi",
                        title: "Fungsi dan notasi fungsi",
                        description: "Masukkan x, keluar y: mesin otomatis matematika."
                    },
                    {
                        id: "les_stat_notasi_sigma",
                        title: "Notasi sigma (∑)",
                        description: "Sigma: cara cepat nambahin deret tanpa pusing."
                    },
                    {
                        id: "les_stat_konsep_limit_intuisi",
                        title: "Konsep limit (intuisi)",
                        description: "Konsep limit (intuisi)"
                    }
                ]
            },
            {
                id: "mod_stat_konsep_statistika",
                title: "Konsep Statistika",
                lessons: [
                    {
                        id: "les_stat_pengertian_statistika",
                        title: "Pengertian statistika",
                        description: "Statistika: seni bikin data berbicara jelas."
                    },
                    {
                        id: "les_stat_statistik_deskriptif_vs_inferensial",
                        title: "Statistik deskriptif vs inferensial",
                        description: "Deskrip ringkas, inferens tebak populasi."
                    },
                    {
                        id: "les_stat_populasi_dan_sampel",
                        title: "Populasi dan sampel",
                        description: "Populasi semua, sampel sebagian: jago sampling!"
                    },
                    {
                        id: "les_stat_parameter_dan_statistik",
                        title: "Parameter dan statistik",
                        description: "Parameter milik bumi, statistik dari sampel."
                    }
                ]
            },
            {
                id: "mod_stat_konsep_data",
                title: "Konsep Data",
                lessons: [
                    {
                        id: "les_stat_data_kualitatif_dan_kuantitatif",
                        title: "Data kualitatif dan kuantitatif",
                        description: "Kualitatif kata, kuantitatif angka: beda tipis."
                    }
                ]
            },
            {
                id: "mod_stat_skala_pengukuran",
                title: "Skala Pengukuran",
                lessons: [
                    {
                        id: "les_stat_skala_nominal",
                        title: "Skala nominal",
                        description: "Kategori tanpa urut: warna, merek, favorit."
                    },
                    {
                        id: "les_stat_skala_ordinal",
                        title: "Skala ordinal",
                        description: "Urutan tapi gap gak pasti: juara 1-2-3."
                    },
                    {
                        id: "les_stat_skala_interval",
                        title: "Skala interval",
                        description: "Selisih tetap, nol semu: suhu Celsius contoh."
                    },
                    {
                        id: "les_stat_skala_rasio",
                        title: "Skala rasio",
                        description: "Ada nol mutlak: tinggi, berat, pendapatan."
                    }
                ]
            },
            {
                id: "mod_stat_struktur_data",
                title: "Struktur Data",
                lessons: [
                    {
                        id: "les_stat_data_cross_section",
                        title: "Data cross-section",
                        description: "Snapshot waktu: data orang banyak sekejap."
                    },
                    {
                        id: "les_stat_data_time_series",
                        title: "Data time series",
                        description: "Data ngebut waktu: tren naik-turun."
                    }
                ]
            },
            {
                id: "mod_stat_sumber_data",
                title: "Sumber Data",
                lessons: [
                    {
                        id: "les_stat_data_primer",
                        title: "Data primer",
                        description: "Ngumpulin sendiri: kuesioner, observasi langsung."
                    },
                    {
                        id: "les_stat_data_sekunder",
                        title: "Data sekunder",
                        description: "Pakai data jadi: laporan, open data."
                    }
                ]
            },
            {
                id: "mod_stat_statistik_deskriptif",
                title: "Statistik Deskriptif",
                lessons: [
                    {
                        id: "les_stat_tabel_distribusi_frekuensi",
                        title: "Tabel distribusi frekuensi",
                        description: "Tabel bikin data berbaris rapi."
                    },
                    {
                        id: "les_stat_frekuensi_relatif",
                        title: "Frekuensi relatif",
                        description: "Hitung persen tiap kelas: cepet bandingin."
                    },
                    {
                        id: "les_stat_frekuensi_kumulatif",
                        title: "Frekuensi kumulatif",
                        description: "Tambah terus: berapa di batas atas."
                    }
                ]
            },
            {
                id: "mod_stat_ukuran_pemusatan",
                title: "Ukuran Pemusatan",
                lessons: [
                    {
                        id: "les_stat_mean_aritmatika",
                        title: "Mean aritmatika",
                        description: "Rata-rata kuno tapi tetap paling populer."
                    },
                    {
                        id: "les_stat_mean_tertimbang",
                        title: "Mean tertimbang",
                        description: "Bobot beda, rata-rata disesuaikan."
                    },
                    {
                        id: "les_stat_median",
                        title: "Median",
                        description: "Tepi tengah: tahanan outlier."
                    },
                    {
                        id: "les_stat_modus",
                        title: "Modus",
                        description: "Si paling sering muncul: juara frekuensi."
                    }
                ]
            },
            {
                id: "mod_stat_ukuran_penyebaran",
                title: "Ukuran Penyebaran",
                lessons: [
                    {
                        id: "les_stat_range",
                        title: "Range",
                        description: "Jarak terjauh: maks minus min."
                    },
                    {
                        id: "les_stat_interquartile_range_iqr",
                        title: "Interquartile range (IQR)",
                        description: "IQR: kotak aman data tengah."
                    },
                    {
                        id: "les_stat_varians",
                        title: "Varians",
                        description: "Sebaran kuadrat: makin besar makin rame."
                    },
                    {
                        id: "les_stat_standar_deviasi",
                        title: "Standar deviasi",
                        description: "Simpangan lazim: satuan sama kayak data."
                    }
                ]
            },
            {
                id: "mod_stat_bentuk_distribusi",
                title: "Bentuk Distribusi",
                lessons: [
                    {
                        id: "les_stat_skewness",
                        title: "Skewness",
                        description: "Miring kanan/kiri: ekor condong mana?"
                    },
                    {
                        id: "les_stat_kurtosis",
                        title: "Kurtosis",
                        description: "Buncak tajam atau landai: ekstrem gak?"
                    }
                ]
            },
            {
                id: "mod_stat_visualisasi_data",
                title: "Visualisasi Data",
                lessons: [
                    {
                        id: "les_stat_diagram_batang",
                        title: "Diagram batang",
                        description: "Batang tegak: perbandingan kelas visual."
                    },
                    {
                        id: "les_stat_diagram_lingkaran",
                        title: "Diagram lingkaran",
                        description: "Pie slice: proporsi jadi sudut."
                    },
                    {
                        id: "les_stat_histogram",
                        title: "Histogram",
                        description: "Batangan rapat: frekuensi bentuk distribusi."
                    },
                    {
                        id: "les_stat_poligon_frekuensi",
                        title: "Poligon frekuensi",
                        description: "Sambung titik tengah: kurva frekuensi."
                    },
                    {
                        id: "les_stat_boxplot",
                        title: "Boxplot",
                        description: "Box & kumis: lima ringkasan sekaligus."
                    },
                    {
                        id: "les_stat_scatter_plot",
                        title: "Scatter plot",
                        description: "Titik sebar: korelasi langsung kelihatan."
                    }
                ]
            },
            {
                id: "mod_stat_teori_probabilitas",
                title: "Teori Probabilitas",
                lessons: [
                    {
                        id: "les_stat_fungsi_distribusi_kumulatif_cdf",
                        title: "Fungsi distribusi kumulatif (CDF)",
                        description: "CDF: peluang kumulatif naik monoton."
                    },
                    {
                        id: "les_stat_nilai_harapan",
                        title: "Nilai harapan",
                        description: "Rata-rata teoritis: bobot peluang."
                    },
                    {
                        id: "les_stat_varians_dan_simpangan_baku_variabel_acak",
                        title: "Varians dan simpangan baku variabel acak",
                        description: "Sebaran teoretis: takar ketidakpastian."
                    },
                    {
                        id: "les_stat_distribusi_normal_baku_z",
                        title: "Distribusi normal baku (Z)",
                        description: "Z-score: standarkan nilai apapun."
                    },
                    {
                        id: "les_stat_teorema_limit_pusat_clt",
                        title: "Teorema limit pusat (CLT)",
                        description: "CLT: rata-rata sampel menuju normal."
                    }
                ]
            },
            {
                id: "mod_stat_distribusi_peluang",
                title: "Distribusi Peluang",
                lessons: [
                    {
                        id: "les_stat_ruang_sampel",
                        title: "Ruang sampel",
                        description: "Kumpulan semua kemungkinan: dadu 1-6."
                    },
                    {
                        id: "les_stat_kejadian_event",
                        title: "Kejadian (event)",
                        description: "Subset ruang sampel: mata dadu genap."
                    },
                    {
                        id: "les_stat_distribusi_bernoulli",
                        title: "Distribusi Bernoulli",
                        description: "Trial dua keluaran: gagal/sukses."
                    },
                    {
                        id: "les_stat_distribusi_binomial",
                        title: "Distribusi Binomial",
                        description: "Binomial: hitung sukses n kali percobaan."
                    },
                    {
                        id: "les_stat_distribusi_poisson",
                        title: "Distribusi Poisson",
                        description: "Poisson: hitung kejadian langka interval."
                    },
                    {
                        id: "les_stat_distribusi_normal",
                        title: "Distribusi Normal",
                        description: "Lonceng simetri: andalan statistik."
                    },
                    {
                        id: "les_stat_distribusi_eksponensial",
                        title: "Distribusi Eksponensial",
                        description: "Eksponensial: waktu tunggu antarkejadian."
                    }
                ]
            },
            {
                id: "mod_stat_inferensi_statistik",
                title: "Inferensi Statistik",
                lessons: [
                    {
                        id: "les_stat_teknik_sampling_random",
                        title: "Teknik sampling random",
                        description: "Acak bebas: undian kocokan."
                    },
                    {
                        id: "les_stat_central_limit_theorem",
                        title: "Central Limit Theorem",
                        description: "CLT: normal ajaib rata-rata sampel."
                    },
                    {
                        id: "les_stat_estimasi_titik",
                        title: "Estimasi titik",
                        description: "Tebak satu angka: nilai duga tunggal."
                    },
                    {
                        id: "les_stat_confidence_interval_mean",
                        title: "Confidence interval mean",
                        description: "Sisir nilai: rata-rata populasi di dalam?"
                    },
                    {
                        id: "les_stat_confidence_interval_proporsi",
                        title: "Confidence interval proporsi",
                        description: "Interval proporsi: rentang persen yakin."
                    }
                ]
            },
            {
                id: "mod_stat_inferensi_statistik_lanjut",
                title: "Inferensi Statistik Lanjut",
                lessons: [
                    {
                        id: "les_stat_distribusi_sampling_mean",
                        title: "Distribusi sampling mean",
                        description: "Sebaran rata-rata: normal bila n besar."
                    },
                    {
                        id: "les_stat_distribusi_sampling_proporsi",
                        title: "Distribusi sampling proporsi",
                        description: "Distribusi proporsi: binomial hampir normal."
                    },
                    {
                        id: "les_stat_statistik_uji_dan_daerah_kritis",
                        title: "Statistik uji dan daerah kritis",
                        description: "Statistik lawan batas: tolak atau terima."
                    },
                    {
                        id: "les_stat_uji_satu_arah_dan_dua_arah",
                        title: "Uji satu arah dan dua arah",
                        description: "Satu sisi vs dua sisi: arah hipotesis."
                    },
                    {
                        id: "les_stat_power_of_test",
                        title: "Power of test",
                        description: "Power: kemampuan tangkap Ho salah."
                    },
                    {
                        id: "les_stat_effect_size",
                        title: "Effect size",
                        description: "Effect size: besar pengaruh praktis."
                    },
                    {
                        id: "les_stat_confidence_interval_berbasis_t",
                        title: "Confidence interval berbasis t",
                        description: "Interval t: n kecil tetap akurat."
                    },
                    {
                        id: "les_stat_confidence_interval_berbasis_z",
                        title: "Confidence interval berbasis z",
                        description: "Interval z: n besar pakai normal."
                    }
                ]
            },
            {
                id: "mod_stat_uji_parametrik",
                title: "Uji Parametrik",
                lessons: [
                    {
                        id: "les_stat_uji_t_dua_sampel_independen",
                        title: "Uji T dua sampel independen",
                        description: "T-independen: banding rata-rata dua kelompok."
                    },
                    {
                        id: "les_stat_uji_t_berpasangan",
                        title: "Uji T berpasangan",
                        description: "T-berpasangan: sebelum vs sesudah."
                    }
                ]
            },
            {
                id: "mod_stat_analisis_varians_anova",
                title: "Analisis Varians (ANOVA)",
                lessons: [
                    {
                        id: "les_stat_konsep_dasar_anova",
                        title: "Konsep dasar ANOVA",
                        description: "ANOVA: beda rata-rata >2 kelompok."
                    },
                    {
                        id: "les_stat_asumsi_anova",
                        title: "Asumsi ANOVA",
                        description: "Normal, homogen, independen: tiga komando."
                    },
                    {
                        id: "les_stat_one_way_anova_fixed_effect",
                        title: "One-Way ANOVA fixed effect",
                        description: "One-way: satu faktor, efek tetap."
                    },
                    {
                        id: "les_stat_two_way_anova_without_interaction",
                        title: "Two-Way ANOVA without interaction",
                        description: "Two-way tanpa interaksi: dua faktor lurus."
                    },
                    {
                        id: "les_stat_two_way_anova_with_interaction",
                        title: "Two-Way ANOVA with interaction",
                        description: "Two-way interaksi: efek ganda saling kait."
                    },
                    {
                        id: "les_stat_repeated_measures_anova",
                        title: "Repeated Measures ANOVA",
                        description: "Repeated: subjek diukur berulang."
                    },
                    {
                        id: "les_stat_mixed_anova",
                        title: "Mixed ANOVA",
                        description: "Mixed: within-between combo."
                    },
                    {
                        id: "les_stat_post_hoc_test_tukey_bonferroni",
                        title: "Post-hoc test (Tukey, Bonferroni)",
                        description: "Post-hoc: beda pasangan setelah ANOVA."
                    },
                    {
                        id: "les_stat_effect_size_anova_eta_squared",
                        title: "Effect size ANOVA (Eta squared)",
                        description: "Eta squared: seberapa besar efaktor."
                    }
                ]
            },
            {
                id: "mod_stat_asumsi_statistik",
                title: "Asumsi Statistik",
                lessons: [
                    {
                        id: "les_stat_asumsi_normalitas",
                        title: "Asumsi normalitas",
                        description: "Data menyerupai lonceng: normal atau gak?"
                    },
                    {
                        id: "les_stat_uji_shapiro_wilk",
                        title: "Uji Shapiro-Wilk",
                        description: "Shapiro: normalitas sampel kecil."
                    },
                    {
                        id: "les_stat_uji_kolmogorov_smirnov",
                        title: "Uji Kolmogorov-Smirnov",
                        description: "KS: cocok distribusi teoritis."
                    },
                    {
                        id: "les_stat_asumsi_homogenitas_varians",
                        title: "Asumsi homogenitas varians",
                        description: "Varians sama: cek sebaran kelompok."
                    },
                    {
                        id: "les_stat_uji_levene",
                        title: "Uji Levene",
                        description: "Levene: homogenitas varians aman."
                    },
                    {
                        id: "les_stat_asumsi_independensi",
                        title: "Asumsi independensi",
                        description: "Pengukuran bebas: tidak saling pengaruh."
                    }
                ]
            },
            {
                id: "mod_stat_statistik_nonparametrik",
                title: "Statistik Nonparametrik",
                lessons: [
                    {
                        id: "les_stat_uji_mann_whitney_u",
                        title: "Uji Mann-Whitney U",
                        description: "Mann-Whitney: nonparametrik banding median."
                    },
                    {
                        id: "les_stat_uji_wilcoxon_signed_rank",
                        title: "Uji Wilcoxon Signed Rank",
                        description: "Wilcoxon: pasangan tak normal."
                    },
                    {
                        id: "les_stat_uji_kruskal_wallis",
                        title: "Uji Kruskal-Wallis",
                        description: "Kruskal-Wallis: median >2 kelompok."
                    },
                    {
                        id: "les_stat_uji_friedman",
                        title: "Uji Friedman",
                        description: "Friedman: sampel berulang nonparametrik."
                    }
                ]
            },
            {
                id: "mod_stat_korelasi",
                title: "Korelasi",
                lessons: [
                    {
                        id: "les_stat_korelasi_pearson",
                        title: "Korelasi Pearson",
                        description: "Pearson: hubungan linear dua variabel."
                    },
                    {
                        id: "les_stat_korelasi_spearman",
                        title: "Korelasi Spearman",
                        description: "Spearman: monotonik, bebas distribusi."
                    }
                ]
            },
            {
                id: "mod_stat_analisis_regresi",
                title: "Analisis Regresi",
                lessons: [
                    {
                        id: "les_stat_konsep_dasar_regresi",
                        title: "Konsep dasar regresi",
                        description: "Regresi: prediksi berbasis hubungan."
                    },
                    {
                        id: "les_stat_tujuan_dan_asumsi_regresi",
                        title: "Tujuan dan asumsi regresi",
                        description: "Prediksi sah bila asumsi terpenuhi."
                    },
                    {
                        id: "les_stat_model_regresi_linear_sederhana",
                        title: "Model regresi linear sederhana",
                        description: "Regresi sederhana: satu X, satu Y."
                    },
                    {
                        id: "les_stat_estimasi_parameter_ols",
                        title: "Estimasi parameter (OLS)",
                        description: "OLS: kecilkan jumlah error kuadrat."
                    },
                    {
                        id: "les_stat_interpretasi_intercept_dan_slope",
                        title: "Interpretasi intercept dan slope",
                        description: "Intercept awal, slope kemiringan garis."
                    },
                    {
                        id: "les_stat_koefisien_determinasi_r",
                        title: "Koefisien determinasi (R²)",
                        description: "R²: seberapa besar X jelaskan Y."
                    },
                    {
                        id: "les_stat_uji_signifikansi_koefisien_regresi",
                        title: "Uji signifikansi koefisien regresi",
                        description: "t-hitung: koefisien signifikan?"
                    },
                    {
                        id: "les_stat_uji_f_pada_regresi",
                        title: "Uji F pada regresi",
                        description: "F model: model fit atau flop?"
                    },
                    {
                        id: "les_stat_model_regresi_linear_berganda",
                        title: "Model regresi linear berganda",
                        description: "Berganda: banyak X, satu Y."
                    },
                    {
                        id: "les_stat_interpretasi_koefisien_berganda",
                        title: "Interpretasi koefisien berganda",
                        description: "Tiap X kontrol lain: efaktor bersih."
                    },
                    {
                        id: "les_stat_seleksi_variabel_forward_backward_stepwise",
                        title: "Seleksi variabel (forward, backward, stepwise)",
                        description: "Masuk/keluar: pilih prediktor otomatis."
                    },
                    {
                        id: "les_stat_uji_multikolinearitas_vif_tolerance",
                        title: "Uji multikolinearitas (VIF, Tolerance)",
                        description: "VIF tinggi: X saling klop."
                    },
                    {
                        id: "les_stat_uji_heteroskedastisitas_glejser_breusch_pagan",
                        title: "Uji heteroskedastisitas (Glejser, Breusch-Pagan)",
                        description: "Hetero: var error tak konstan."
                    },
                    {
                        id: "les_stat_uji_autokorelasi_durbin_watson",
                        title: "Uji autokorelasi (Durbin-Watson)",
                        description: "DW: error naik-ikuti waktu?"
                    },
                    {
                        id: "les_stat_deteksi_outlier_dan_leverage",
                        title: "Deteksi outlier dan leverage",
                        description: "Outlier: data nyelonong bikin condong."
                    },
                    {
                        id: "les_stat_transformasi_data_regresi",
                        title: "Transformasi data regresi",
                        description: "Transform: normalkan, stabilkan var."
                    },
                    {
                        id: "les_stat_prediksi_dan_interval_prediksi",
                        title: "Prediksi dan interval prediksi",
                        description: "Prediksi Y: tunggal atau rentang."
                    }
                ]
            },
            {
                id: "mod_stat_analisis_data_kategorik",
                title: "Analisis Data Kategorik",
                lessons: [
                    {
                        id: "les_stat_uji_chi_square_goodness_of_fit",
                        title: "Uji Chi-Square (Goodness of Fit)",
                        description: "Chi-Square: data cocok teori?"
                    },
                    {
                        id: "les_stat_uji_chi_square_independensi",
                        title: "Uji Chi-Square (Independensi)",
                        description: "Chi-Square: dua variabel lepas?"
                    },
                    {
                        id: "les_stat_odds_ratio_relative_risk",
                        title: "Odds Ratio & Relative Risk",
                        description: "OR & RR: ukur risiko banding."
                    },
                    {
                        id: "les_stat_regresi_logistik_biner",
                        title: "Regresi Logistik Biner",
                        description: "Logistik biner: ya-tidak diprediksi."
                    },
                    {
                        id: "les_stat_regresi_logistik_multinomial",
                        title: "Regresi Logistik Multinomial",
                        description: "Multinomial: pilih >2 kategori."
                    },
                    {
                        id: "les_stat_regresi_logistik_ordinal",
                        title: "Regresi Logistik Ordinal",
                        description: "Ordinal: kategori berurutan."
                    },
                    {
                        id: "les_stat_uji_mcnemar",
                        title: "Uji McNemar",
                        description: "McNemar: pasangan before-after kategori."
                    }
                ]
            },
            {
                id: "mod_stat_statistika_multivariat",
                title: "Statistika Multivariat",
                lessons: [
                    {
                        id: "les_stat_pengantar_analisis_multivariat",
                        title: "Pengantar analisis multivariat",
                        description: "Multivariat: banyak variabel sekaligus."
                    },
                    {
                        id: "les_stat_analisis_korelasi_kanonik",
                        title: "Analisis korelasi kanonik",
                        description: "Kanonik: hubungan ganda X-Y."
                    },
                    {
                        id: "les_stat_principal_component_analysis_pca",
                        title: "Principal Component Analysis (PCA)",
                        description: "PCA: ringkas dimensi tetap info."
                    },
                    {
                        id: "les_stat_analisis_faktor_eksploratori",
                        title: "Analisis faktor eksploratori",
                        description: "Faktor: latent di balik indikator."
                    },
                    {
                        id: "les_stat_cluster_analysis",
                        title: "Cluster analysis",
                        description: "Cluster: kelompokkan mirip-mirip."
                    },
                    {
                        id: "les_stat_discriminant_analysis",
                        title: "Discriminant analysis",
                        description: "Diskriminan: klasifikasi beda kelas."
                    },
                    {
                        id: "les_stat_manova",
                        title: "MANOVA",
                        description: "MANOVA: banyak Y satu kali."
                    }
                ]
            },
            {
                id: "mod_stat_metodologi_penelitian_statistik",
                title: "Metodologi Penelitian Statistik",
                lessons: [
                    {
                        id: "les_stat_variabel_penelitian",
                        title: "Variabel penelitian",
                        description: "Variabel: apa diukur/dikontrol."
                    },
                    {
                        id: "les_stat_hipotesis_penelitian",
                        title: "Hipotesis penelitian",
                        description: "Hipotesis: dugaan bisa diuji."
                    },
                    {
                        id: "les_stat_desain_eksperimen",
                        title: "Desain eksperimen",
                        description: "Eksperimen: kontrol, variasi, ukur."
                    },
                    {
                        id: "les_stat_randomized_control_trial_rct",
                        title: "Randomized Control Trial (RCT)",
                        description: "RCT: emas penelitian kausal."
                    },
                    {
                        id: "les_stat_desain_faktorial",
                        title: "Desain faktorial",
                        description: "Faktorial: kombinasi level dicoba."
                    },
                    {
                        id: "les_stat_validitas_dan_reliabilitas",
                        title: "Validitas dan reliabilitas",
                        description: "Valid tepat, reliabel konsisten."
                    },
                    {
                        id: "les_stat_penentuan_ukuran_sampel",
                        title: "Penentuan ukuran sampel",
                        description: "Ukuran sampel: cukup kuat deteksi."
                    }
                ]
            },
            {
                id: "mod_stat_analisis_runtun_waktu",
                title: "Analisis Runtun Waktu",
                lessons: [
                    {
                        id: "les_stat_konsep_stasioneritas",
                        title: "Konsep Stasioneritas",
                        description: "Stasioner: rata-var tetap waktu."
                    },
                    {
                        id: "les_stat_plot_acf_dan_pacf",
                        title: "Plot ACF dan PACF",
                        description: "ACF/PACF: baca pola seri waktu."
                    },
                    {
                        id: "les_stat_white_noise_process",
                        title: "White Noise Process",
                        description: "White noise: acak murni tanpa memori."
                    },
                    {
                        id: "les_stat_model_ar_auto_regressive",
                        title: "Model AR (Auto Regressive)",
                        description: "AR: nilai sekarang dari yang lalu."
                    },
                    {
                        id: "les_stat_model_ma_moving_average",
                        title: "Model MA (Moving Average)",
                        description: "MA: error lalu dipakai sekarang."
                    },
                    {
                        id: "les_stat_model_arima_box_jenkins",
                        title: "Model ARIMA (Box-Jenkins)",
                        description: "ARIMA: AR+I+MA lengkap."
                    },
                    {
                        id: "les_stat_model_sarima_seasonal",
                        title: "Model SARIMA (Seasonal)",
                        description: "SARIMA: musiman di-serap."
                    },
                    {
                        id: "les_stat_uji_akar_unit_augmented_dickey_fuller",
                        title: "Uji Akar Unit (Augmented Dickey-Fuller)",
                        description: "ADF: stasioner atau berakar?"
                    },
                    {
                        id: "les_stat_forecasting_evaluasi_model_mape_mse",
                        title: "Forecasting & Evaluasi Model (MAPE, MSE)",
                        description: "MAPE/MSE: tepat ramal mana?"
                    }
                ]
            },
            {
                id: "mod_stat_statistika_bayesian",
                title: "Statistika Bayesian",
                lessons: [
                    {
                        id: "les_stat_teorema_bayes_lanjutan",
                        title: "Teorema Bayes (Lanjutan)",
                        description: "Bayes: update keyakinan data baru."
                    },
                    {
                        id: "les_stat_prior_likelihood_posterior",
                        title: "Prior, Likelihood, Posterior",
                        description: "Prior pendapat, likelihood bukti, posterior akur."
                    },
                    {
                        id: "les_stat_conjugate_prior",
                        title: "Conjugate Prior",
                        description: "Conjugate: prior-posterior keluarga."
                    },
                    {
                        id: "les_stat_markov_chain_monte_carlo_mcmc",
                        title: "Markov Chain Monte Carlo (MCMC)",
                        description: "MCMC: sampling posterior kompleks."
                    },
                    {
                        id: "les_stat_estimasi_parameter_bayesian",
                        title: "Estimasi Parameter Bayesian",
                        description: "Estimasi Bayesian: keyakinan jadi angka."
                    }
                ]
            },
            {
                id: "mod_stat_pengendalian_kualitas",
                title: "Pengendalian Kualitas",
                lessons: [
                    {
                        id: "les_stat_diagram_pareto_fishbone",
                        title: "Diagram Pareto & Fishbone",
                        description: "Pareto 80-20, Fishbone jejak akar."
                    },
                    {
                        id: "les_stat_peta_kendali_variabel_x_bar_r_chart",
                        title: "Peta Kendali Variabel (X-bar, R chart)",
                        description: "X-bar/R: kendali rata & variasi."
                    },
                    {
                        id: "les_stat_peta_kendali_atribut_p_chart_c_chart",
                        title: "Peta Kendali Atribut (p-chart, c-chart)",
                        description: "p/c-chart: proporsi & jumlah cacat."
                    },
                    {
                        id: "les_stat_analisis_kapabilitas_proses_cp_cpk",
                        title: "Analisis Kapabilitas Proses (Cp, Cpk)",
                        description: "Cp/Cpk: proses mampu spesifikasi?"
                    },
                    {
                        id: "les_stat_six_sigma_basics",
                        title: "Six Sigma Basics",
                        description: "Six Sigma: cacat <3.4 per juta."
                    }
                ]
            }
        ]
    },
    {
        id: "matkul_metstat",
        title: "METODE STATISTIKA",
        description: "Dari nol sampai jago analisis data & machine learning.",
        isProgramming: false,
        color: "red",
        icon: <Dice2 size={24} />,
        codeConfig: {
            language: "R",
            defaultCode: "print('Halo, mari belajar Statistik!')",
            placeholder: "Ketik rumus statistik di sini..."
        },
        modules: [
            {
                id: "mod_metstat_konsep_dasar_statistika",
                title: "Konsep Dasar Statistika",
                lessons: [
                    {
                        id: "les_metstat_statistik_deskripsi",
                        title: "Statistik Deskripsi",
                        description: "Kita mulai dari cara merapikan data mentah agar enak dilihat dan dipahami."
                    },
                    {
                        id: "les_metstat_statistik_inferensia",
                        title: "Statistik Inferensia",
                        description: "Setelah data rapi, saatnya belajar menarik kesimpulan besar dari sampel kecil."
                    },
                    {
                        id: "les_metstat_populasi",
                        title: "Populasi",
                        description: "Memahami objek besar yang ingin kita teliti secara keseluruhan."
                    },
                    {
                        id: "les_metstat_sampel",
                        title: "Sampel",
                        description: "Karena populasi terlalu besar, kita ambil sebagian kecilnya saja untuk diuji."
                    },
                    {
                        id: "les_metstat_parameter",
                        title: "Parameter",
                        description: "Istilah untuk angka-angka 'sebenarnya' yang ada di dalam populasi."
                    },
                    {
                        id: "les_metstat_statistik_ukuran_sampel",
                        title: "Statistik (Ukuran Sampel)",
                        description: "Kalau parameter milik populasi, maka 'statistik' adalah angka milik sampel."
                    }
                ]
            },
            {
                id: "mod_metstat_ukuran_pemusatan_data",
                title: "Ukuran Pemusatan Data",
                lessons: [
                    {
                        id: "les_metstat_rata_rata_mean",
                        title: "Rata-rata (Mean)",
                        description: "Teknik paling dasar untuk mencari satu angka yang mewakili seluruh data."
                    },
                    {
                        id: "les_metstat_median",
                        title: "Median",
                        description: "Kalau ada data pencilan yang ekstrem, nilai tengah ini lebih adil daripada Mean."
                    },
                    {
                        id: "les_metstat_modus",
                        title: "Modus",
                        description: "Mencari data yang paling eksis atau paling sering muncul."
                    }
                ]
            },
            {
                id: "mod_metstat_penyajian_data_tabel",
                title: "Penyajian Data (Tabel)",
                lessons: [
                    {
                        id: "les_metstat_tabel_baris_kolom",
                        title: "Tabel Baris Kolom",
                        description: "Cara klasik menyusun data agar rapi dan mudah dibaca sekilas."
                    },
                    {
                        id: "les_metstat_tabel_kontingensi",
                        title: "Tabel Kontingensi",
                        description: "Melihat hubungan dua variabel berbeda dalam satu tabel silang."
                    },
                    {
                        id: "les_metstat_distribusi_frekuensi_relatif",
                        title: "Distribusi Frekuensi Relatif",
                        description: "Mengubah angka jumlah menjadi persentase agar proporsinya terlihat."
                    },
                    {
                        id: "les_metstat_distribusi_frekuensi_kumulatif",
                        title: "Distribusi Frekuensi Kumulatif",
                        description: "Menghitung total data secara bertahap dari kelas ke kelas."
                    },
                    {
                        id: "les_metstat_distribusi_frekuensi_terbuka",
                        title: "Distribusi Frekuensi Terbuka",
                        description: "Bagaimana menangani data yang ujungnya 'lebih dari' atau 'kurang dari'."
                    }
                ]
            },
            {
                id: "mod_metstat_penyajian_data_diagram",
                title: "Penyajian Data (Diagram)",
                lessons: [
                    {
                        id: "les_metstat_histogram",
                        title: "Histogram",
                        description: "Visualisasi wajib anak data untuk melihat bentuk sebaran data kontinu."
                    },
                    {
                        id: "les_metstat_diagram_garis",
                        title: "Diagram Garis",
                        description: "Paling cocok buat melihat tren perubahan data dari waktu ke waktu."
                    },
                    {
                        id: "les_metstat_diagram_lingkaran",
                        title: "Diagram Lingkaran",
                        description: "Melihat porsi atau pangsa pasar dalam bentuk potongan kue."
                    },
                    {
                        id: "les_metstat_diagram_lambang",
                        title: "Diagram Lambang",
                        description: "Penyajian data unik menggunakan ikon atau simbol visual."
                    },
                    {
                        id: "les_metstat_diagram_peta",
                        title: "Diagram Peta",
                        description: "Memetakan data statistik langsung ke lokasi geografis wilayah."
                    },
                    {
                        id: "les_metstat_diagram_pencar",
                        title: "Diagram Pencar",
                        description: "Mendeteksi apakah dua variabel punya hubungan mesra atau tidak."
                    },
                    {
                        id: "les_metstat_diagram_dahan_daun_stem_and_leaf",
                        title: "Diagram Dahan Daun",
                        description: "Teknik jadul tapi ampuh untuk melihat detail nilai data sekaligus sebarannya."
                    },
                    {
                        id: "les_metstat_diagram_kotak_garis",
                        title: "Diagram Kotak Garis",
                        description: "Sering disebut Boxplot, jagonya mendeteksi outlier dalam data."
                    }
                ]
            },
            {
                id: "mod_metstat_ukuran_letak_data",
                title: "Ukuran Letak Data",
                lessons: [
                    {
                        id: "les_metstat_kuartil",
                        title: "Kuartil",
                        description: "Membagi data urut menjadi 4 bagian sama besar."
                    },
                    {
                        id: "les_metstat_desil",
                        title: "Desil",
                        description: "Membagi data menjadi 10 bagian untuk analisis yang lebih rinci."
                    },
                    {
                        id: "les_metstat_persentil",
                        title: "Persentil",
                        description: "Membagi data jadi 100 bagian, sering dipakai buat ranking nilai ujian."
                    }
                ]
            },
            {
                id: "mod_metstat_ukuran_penyebaran_data",
                title: "Ukuran Penyebaran Data",
                lessons: [
                    {
                        id: "les_metstat_range_rentang",
                        title: "Range (Rentang)",
                        description: "Mengukur jarak antara data terbesar dan terkecil secara simpel."
                    },
                    {
                        id: "les_metstat_simpangan_kuartil",
                        title: "Simpangan Kuartil",
                        description: "Fokus melihat penyebaran di area tengah data, mengabaikan ekstrem."
                    },
                    {
                        id: "les_metstat_simpangan_rata_rata",
                        title: "Simpangan Rata-rata",
                        description: "Rata-rata jarak setiap data terhadap titik pusatnya."
                    },
                    {
                        id: "les_metstat_standar_deviasi_simpangan_baku",
                        title: "Standar Deviasi",
                        description: "Indikator paling populer untuk menilai seberapa stabil datamu."
                    },
                    {
                        id: "les_metstat_variansi_ragam",
                        title: "Variansi (Ragam)",
                        description: "Kuadrat dari standar deviasi, penting untuk perhitungan statistik lanjut."
                    },
                    {
                        id: "les_metstat_koefisien_keragaman",
                        title: "Koefisien Keragaman",
                        description: "Membandingkan variasi dua data yang punya satuan berbeda."
                    }
                ]
            },
            {
                id: "mod_metstat_karakteristik_distribusi",
                title: "Karakteristik Distribusi",
                lessons: [
                    {
                        id: "les_metstat_box_plot",
                        title: "Box Plot",
                        description: "Visualisasi ringkas 5 angka penting dalam satu gambar."
                    },
                    {
                        id: "les_metstat_skewness_kemiringan",
                        title: "Skewness",
                        description: "Melihat apakah kurva datamu condong ke kiri atau ke kanan."
                    },
                    {
                        id: "les_metstat_kurtosis_keruncingan",
                        title: "Kurtosis",
                        description: "Mengukur apakah puncak datamu tajam (runcing) atau landai."
                    }
                ]
            },
            {
                id: "mod_metstat_dasar_dasar_peubah_acak",
                title: "Dasar-Dasar Peubah Acak",
                lessons: [
                    {
                        id: "les_metstat_pengertian_peubah_acak",
                        title: "Pengertian Peubah Acak",
                        description: "Jembatan matematika untuk mengubah kejadian acak menjadi angka."
                    }
                ]
            },
            {
                id: "mod_metstat_jenis_peubah_acak",
                title: "Jenis Peubah Acak",
                lessons: [
                    {
                        id: "les_metstat_distribusi_peluang_diskret",
                        title: "Distribusi Peluang Diskret",
                        description: "Untuk data yang bisa dihitung jari, seperti jumlah anak atau dadu."
                    },
                    {
                        id: "les_metstat_distribusi_peluang_kontinu",
                        title: "Distribusi Peluang Kontinu",
                        description: "Untuk data ukur yang bersambung, seperti tinggi badan atau waktu."
                    },
                    {
                        id: "les_metstat_distribusi_peluang_bersama",
                        title: "Distribusi Peluang Bersama",
                        description: "Apa jadinya kalau dua kejadian acak terjadi berbarengan?"
                    }
                ]
            },
            {
                id: "mod_metstat_ekspektasi_matematik",
                title: "Ekspektasi Matematik",
                lessons: [
                    {
                        id: "les_metstat_nilai_tengah_peubah_acak",
                        title: "Nilai Tengah Peubah Acak",
                        description: "Menghitung harapan rata-rata dalam jangka panjang."
                    },
                    {
                        id: "les_metstat_ragam_suatu_peubah_acak",
                        title: "Ragam Suatu Peubah Acak",
                        description: "Mengukur seberapa jauh hasil acak meleset dari harapan."
                    }
                ]
            },
            {
                id: "mod_metstat_sifat_ekspektasi",
                title: "Sifat Ekspektasi",
                lessons: [
                    {
                        id: "les_metstat_sifat_sifat_nilai_tengah",
                        title: "Sifat-sifat Nilai Tengah",
                        description: "Hukum matematika yang mempermudah perhitungan nilai harapan."
                    },
                    {
                        id: "les_metstat_sifat_sifat_ragam",
                        title: "Sifat-sifat Ragam",
                        description: "Aturan main dalam mengutak-atik variansi variabel acak."
                    }
                ]
            },
            {
                id: "mod_metstat_distribusi_peluang_khusus",
                title: "Distribusi Peluang Khusus",
                lessons: [
                    {
                        id: "les_metstat_distribusi_seragam",
                        title: "Distribusi Seragam",
                        description: "Kondisi di mana semua kejadian punya peluang yang sama persis."
                    },
                    {
                        id: "les_metstat_distribusi_bernoulli",
                        title: "Distribusi Bernoulli",
                        description: "Eksperimen 'sekali coba' dengan hasil Sukses atau Gagal saja."
                    },
                    {
                        id: "les_metstat_distribusi_binomial",
                        title: "Distribusi Binomial",
                        description: "Pengembangan Bernoulli: Menghitung sukses dalam 'n' kali percobaan."
                    },
                    {
                        id: "les_metstat_distribusi_multinomial",
                        title: "Distribusi Multinomial",
                        description: "Kalau hasilnya lebih dari dua opsi, kita pakai rumus ini."
                    },
                    {
                        id: "les_metstat_distribusi_hipergeometrik",
                        title: "Distribusi Hipergeometrik",
                        description: "Peluang pengambilan sampel tanpa pengembalian barang."
                    },
                    {
                        id: "les_metstat_sebaran_binomial_negatif",
                        title: "Sebaran Binomial Negatif",
                        description: "Berapa kali harus mencoba sampai sukses ke-k kali tercapai?"
                    },
                    {
                        id: "les_metstat_distribusi_geometrik",
                        title: "Distribusi Geometrik",
                        description: "Menghitung percobaan pertama kali sukses terjadi."
                    },
                    {
                        id: "les_metstat_distribusi_poisson",
                        title: "Distribusi Poisson",
                        description: "Menghitung kejadian langka dalam selang waktu tertentu."
                    }
                ]
            },
            {
                id: "mod_metstat_distribusi_normal",
                title: "Distribusi Normal",
                lessons: [
                    {
                        id: "les_metstat_kurva_distribusi_normal",
                        title: "Kurva Distribusi Normal",
                        description: "Mengenal 'Kurva Lonceng', primadona dalam dunia statistik."
                    },
                    {
                        id: "les_metstat_luas_daerah_di_bawah_kurva_normal",
                        title: "Luas Daerah Kurva Normal",
                        description: "Cara membaca tabel Z untuk menghitung probabilitas."
                    },
                    {
                        id: "les_metstat_penerapan_distribusi_normal",
                        title: "Penerapan Distribusi Normal",
                        description: "Studi kasus nyata menggunakan asumsi data normal."
                    },
                    {
                        id: "les_metstat_hampiran_normal_terhadap_sebaran_binomial",
                        title: "Hampiran Normal ke Binomial",
                        description: "Trik pakai kurva normal untuk data diskret yang jumlahnya besar."
                    }
                ]
            },
            {
                id: "mod_metstat_distribusi_sampling",
                title: "Distribusi Sampling",
                lessons: [
                    {
                        id: "les_metstat_definisi_distribusi_sampling",
                        title: "Definisi Distribusi Sampling",
                        description: "Apa jadinya kalau kita ambil banyak sampel dan merata-ratakannya?"
                    },
                    {
                        id: "les_metstat_distribusi_sampling_nilai_tengah",
                        title: "Sampling Nilai Tengah",
                        description: "Teori dasar yang menjamin rata-rata sampel itu bisa dipercaya."
                    },
                    {
                        id: "les_metstat_distribusi_t",
                        title: "Distribusi t",
                        description: "Alternatif kurva normal saat sampelmu jumlahnya sedikit."
                    },
                    {
                        id: "les_metstat_distribusi_sampling_bagi_beda_dua_nilai_tengah",
                        title: "Beda Dua Nilai Tengah",
                        description: "Membandingkan dua kelompok data lewat sampelnya."
                    },
                    {
                        id: "les_metstat_distribusi_proporsi",
                        title: "Distribusi Proporsi",
                        description: "Analisis peluang untuk data persentase atau proporsi."
                    },
                    {
                        id: "les_metstat_distribusi_beda_proporsi",
                        title: "Distribusi Beda Proporsi",
                        description: "Apakah proporsi kelompok A beda signifikan dengan kelompok B?"
                    },
                    {
                        id: "les_metstat_distribusi_simpangan_baku",
                        title: "Distribusi Simpangan Baku",
                        description: "Melihat pola penyebaran dari variasi sampel itu sendiri."
                    }
                ]
            },
            {
                id: "mod_metstat_teori_estimasi_pendugaan",
                title: "Teori Estimasi (Pendugaan)",
                lessons: [
                    {
                        id: "les_metstat_inferensia_statistika",
                        title: "Inferensia Statistika",
                        description: "Seni menebak fakta populasi bermodal data sampel terbatas."
                    },
                    {
                        id: "les_metstat_metode_pendugaan_klasik",
                        title: "Metode Pendugaan Klasik",
                        description: "Teknik estimasi titik dan selang kepercayaan yang umum dipakai."
                    }
                ]
            },
            {
                id: "mod_metstat_estimasi_satu_sampel",
                title: "Estimasi Satu Sampel",
                lessons: [
                    {
                        id: "les_metstat_pendugaan_nilai_tengah",
                        title: "Pendugaan Nilai Tengah",
                        description: "Menebak rata-rata populasi dengan rentang keyakinan tertentu."
                    },
                    {
                        id: "les_metstat_pendugaan_proporsi",
                        title: "Pendugaan Proporsi",
                        description: "Menebak persentase populasi (misal: elektabilitas) dari survei."
                    }
                ]
            },
            {
                id: "mod_metstat_estimasi_dua_sampel",
                title: "Estimasi Dua Sampel",
                lessons: [
                    {
                        id: "les_metstat_pendugaan_beda_dua_nilai_tengah_populasi",
                        title: "Beda Dua Rata-rata",
                        description: "Mengestimasi selisih nilai antara dua kelompok berbeda."
                    },
                    {
                        id: "les_metstat_pendugaan_selisih_dua_proporsi",
                        title: "Selisih Dua Proporsi",
                        description: "Mengukur jarak persentase antara dua populasi."
                    }
                ]
            },
            {
                id: "mod_metstat_estimasi_varians",
                title: "Estimasi Varians",
                lessons: [
                    {
                        id: "les_metstat_pendugaan_ragam",
                        title: "Pendugaan Ragam",
                        description: "Menaksir seberapa bervariasi data populasi sebenarnya."
                    },
                    {
                        id: "les_metstat_pendugaan_rasio_dua_ragam",
                        title: "Rasio Dua Ragam",
                        description: "Membandingkan konsistensi data antara dua kelompok."
                    }
                ]
            },
            {
                id: "mod_metstat_konsep_uji_hipotesis",
                title: "Konsep Uji Hipotesis",
                lessons: [
                    {
                        id: "les_metstat_hipotesis_statistik",
                        title: "Hipotesis Statistik",
                        description: "Membuat dugaan sementara yang bisa diuji kebenarannya."
                    },
                    {
                        id: "les_metstat_pengujian_hipotesis_statistik",
                        title: "Prosedur Pengujian",
                        description: "Langkah-langkah resmi untuk menerima atau menolak dugaanmu."
                    }
                ]
            },
            {
                id: "mod_metstat_jenis_pengujian_hipotesis",
                title: "Jenis Pengujian Hipotesis",
                lessons: [
                    {
                        id: "les_metstat_uji_satu_arah",
                        title: "Uji Satu Arah",
                        description: "Menguji apakah nilai 'lebih besar' atau 'lebih kecil' dari target."
                    },
                    {
                        id: "les_metstat_uji_dua_arah",
                        title: "Uji Dua Arah",
                        description: "Menguji apakah nilai sekadar 'berbeda' (tidak sama) dari target."
                    }
                ]
            },
            {
                id: "mod_metstat_aplikasi_uji_hipotesis",
                title: "Aplikasi Uji Hipotesis",
                lessons: [
                    {
                        id: "les_metstat_uji_mengenai_nilai_tengah",
                        title: "Uji Rata-rata",
                        description: "Pembuktian apakah rata-rata data sesuai klaim atau tidak."
                    },
                    {
                        id: "les_metstat_pengujian_mengenai_ragam",
                        title: "Uji Ragam",
                        description: "Membuktikan konsistensi atau variasi suatu data."
                    },
                    {
                        id: "les_metstat_uji_mengenai_proporsi",
                        title: "Uji Proporsi",
                        description: "Memverifikasi klaim persentase (misal: klaim pasar)."
                    },
                    {
                        id: "les_metstat_pengujian_selisih_antara_dua_proporsi",
                        title: "Uji Selisih Proporsi",
                        description: "Memastikan apakah perbedaan dua persentase itu nyata atau kebetulan."
                    }
                ]
            },
            {
                id: "mod_metstat_analisis_hubungan_variabel",
                title: "Analisis Hubungan Variabel",
                lessons: [
                    {
                        id: "les_metstat_pengantar_regresi_linier_sederhana",
                        title: "Pengantar Regresi",
                        description: "Belajar meramal masa depan menggunakan pola data masa lalu."
                    },
                    {
                        id: "les_metstat_model_regresi_linier_sederhana",
                        title: "Model Regresi Linier",
                        description: "Membangun rumus matematika Y = a + bX dari datamu."
                    },
                    {
                        id: "les_metstat_metode_kuadrat_terkecil_least_square",
                        title: "Metode Least Square",
                        description: "Teknik mencari garis prediksi yang paling akurat (error terkecil)."
                    },
                    {
                        id: "les_metstat_model_hasil_estimasi",
                        title: "Model Hasil Estimasi",
                        description: "Membaca dan mengartikan persamaan regresi yang sudah jadi."
                    },
                    {
                        id: "les_metstat_sifat_sifat_penaksir_kuadrat_terkecil",
                        title: "Sifat Penaksir",
                        description: "Syarat-syarat agar model prediksimu valid (BLUE)."
                    },
                    {
                        id: "les_metstat_inferensi_terhadap_koefisien_regresi",
                        title: "Inferensi Koefisien",
                        description: "Menguji apakah variabel X benar-benar berpengaruh terhadap Y."
                    },
                    {
                        id: "les_metstat_prediksi_dengan_model_regresi",
                        title: "Prediksi",
                        description: "Saatnya menggunakan rumusmu untuk meramal nilai data baru."
                    },
                    {
                        id: "les_metstat_pemilihan_model_regresi",
                        title: "Pemilihan Model",
                        description: "Memilih model terbaik jika ada banyak calon variabel."
                    },
                    {
                        id: "les_metstat_pendekatan_analisis_varians_anova",
                        title: "Pendekatan ANOVA",
                        description: "Menggunakan analisis varians untuk menguji kelayakan model regresi."
                    },
                    {
                        id: "les_metstat_uji_linearitas_regresi",
                        title: "Uji Linearitas",
                        description: "Memastikan hubungan data memang lurus (linear), bukan melengkung."
                    },
                    {
                        id: "les_metstat_analisis_korelasi",
                        title: "Analisis Korelasi",
                        description: "Mengukur seberapa erat hubungan mesra antara dua variabel."
                    }
                ]
            }
        ]
    },
    {
        id: "matkul_kalkulus1",
        title: "Kalkulus I",
        description: "Kursus lengkap Kalkulus I dari dasar hingga mahir.",
        isProgramming: false,
        color: "yellow",
        icon: <Calculator size={24} />,
        codeConfig: {
            language: "R",
            defaultCode: "print('Halo, mari belajar Statistik!')",
            placeholder: "Ketik rumus statistik di sini..."
        },
        modules: [
            {
                id: "mod_kalkulus1_pengantar_dasar_sistem_bilangan",
                title: "Pengantar & Dasar Sistem Bilangan",
                lessons: [
                    {
                        id: "les_kalkulus1_sejarah_penemuan_bilangan",
                        title: "Sejarah Penemuan Bilangan",
                        description: "Dari berhitung jari hingga konsep abstrak, mari telusuri asal-usul bahasa alam semesta ini."
                    },
                    {
                        id: "les_kalkulus1_operasi_lapangan",
                        title: "Operasi Lapangan",
                        description: "Bukan sekadar tambah-kurang, kita bedah struktur 'lapangan' yang mengatur aljabar modern."
                    },
                    {
                        id: "les_kalkulus1_sifat_lapangan",
                        title: "Sifat Lapangan",
                        description: "Komutatif, Asosiatif, Distributif. Terdengar klise? Tunggu sampai kamu lihat peran vitalnya."
                    },
                    {
                        id: "les_kalkulus1_selang_garis_bilangan",
                        title: "Selang Garis Bilangan",
                        description: "Saatnya memetakan angka ke dalam visual garis agar rentang nilai lebih mudah dibayangkan."
                    },
                    {
                        id: "les_kalkulus1_sifat_urutan",
                        title: "Sifat Urutan",
                        description: "Siapa lebih besar? Siapa lebih kecil? Logika ketaksamaan dimulai dari sini."
                    },
                    {
                        id: "les_kalkulus1_akar_persamaan",
                        title: "Akar Persamaan",
                        description: "Mencari nilai 'x' yang misterius, kunci utama dalam memecahkan teka-teki aljabar."
                    },
                    {
                        id: "les_kalkulus1_nilai_mutlak",
                        title: "Nilai Mutlak",
                        description: "Jarak itu selalu positif. Konsep sederhana yang vital untuk mengukur error dan selisih."
                    },
                    {
                        id: "les_kalkulus1_himpunan_penyelesaian",
                        title: "Himpunan Penyelesaian",
                        description: "Merangkum semua jawaban yang mungkin ke dalam satu wadah himpunan yang rapi."
                    }
                ]
            },
            {
                id: "mod_kalkulus1_fungsi_real_visualisasi",
                title: "Fungsi Real & Visualisasi",
                lessons: [
                    {
                        id: "les_kalkulus1_konsep_fungsi",
                        title: "Konsep Fungsi",
                        description: "Ibarat mesin: Masukkan bahan (input), proses, lalu keluar produk (output). Inilah inti Kalkulus."
                    },
                    {
                        id: "les_kalkulus1_grafik_fungsi",
                        title: "Grafik Fungsi",
                        description: "Satu gambar bernilai seribu angka. Kita terjemahkan rumus rumit menjadi kurva visual."
                    },
                    {
                        id: "les_kalkulus1_domain_fungsi",
                        title: "Domain Fungsi",
                        description: "Menentukan daerah asal: Mana nilai yang boleh masuk, mana yang dilarang keras?"
                    },
                    {
                        id: "les_kalkulus1_range_fungsi",
                        title: "Range Fungsi",
                        description: "Jika Domain adalah start, maka Range adalah garis finish. Seberapa jauh fungsi bisa menjelajah?"
                    },
                    {
                        id: "les_kalkulus1_operasi_fungsi",
                        title: "Operasi Fungsi",
                        description: "Fungsi juga bisa ditambah, dikali, bahkan dikomposisikan untuk membentuk monster baru."
                    },
                    {
                        id: "les_kalkulus1_fungsi_polinom",
                        title: "Fungsi Polinom",
                        description: "Keluarga fungsi paling bersahabat, dari garis lurus linear hingga lengkungan parabola."
                    },
                    {
                        id: "les_kalkulus1_kurva_fungsi",
                        title: "Kurva Fungsi",
                        description: "Menganalisis lekukan dan perilaku grafik secara lebih mendetail."
                    },
                    {
                        id: "les_kalkulus1_transformasi_kurva_fungsi",
                        title: "Transformasi Kurva",
                        description: "Geser, cerminkan, atau perbesar grafik tanpa harus menghitung ulang dari nol."
                    },
                    {
                        id: "les_kalkulus1_fungsi_transenden",
                        title: "Fungsi Transenden",
                        description: "Mengenal 'spesies' fungsi non-aljabar: Trigonometri, Logaritma, dan Eksponensial."
                    },
                    {
                        id: "les_kalkulus1_kurva_fungsi_transenden",
                        title: "Kurva Transenden",
                        description: "Melihat indahnya gelombang sin/cos dan curamnya grafik eksponensial secara visual."
                    },
                    {
                        id: "les_kalkulus1_kombinasi_fungsi",
                        title: "Kombinasi Fungsi",
                        description: "Apa jadinya jika Polinom kawin silang dengan Trigonometri? Mari kita racik."
                    },
                    {
                        id: "les_kalkulus1_bentuk_aljabar_kombinasi_fungsi",
                        title: "Bentuk Aljabar Kombinasi",
                        description: "Mengurai kembali struktur matematika dari fungsi-fungsi yang sudah digabungkan."
                    },
                    {
                        id: "les_kalkulus1_grafik_kombinasi_fungsi",
                        title: "Grafik Kombinasi",
                        description: "Visualisasi akhir dari fungsi kompleks. Saatnya melihat perilaku unik yang muncul."
                    }
                ]
            },
            {
                id: "mod_kalkulus1_limit_kekontinuan_fungsi",
                title: "Limit & Kekontinuan Fungsi",
                lessons: [
                    {
                        id: "les_kalkulus1_interpretasi_limit",
                        title: "Interpretasi Limit",
                        description: "Konsep 'mendekati tapi tak menyentuh'. Pintu gerbang menuju dunia Kalkulus."
                    },
                    {
                        id: "les_kalkulus1_limit_kiri",
                        title: "Limit Kiri",
                        description: "Mendekati target dari arah negatif. Apakah jalannya mulus atau terputus?"
                    },
                    {
                        id: "les_kalkulus1_limit_kanan",
                        title: "Limit Kanan",
                        description: "Sekarang dari sisi positif. Limit baru ada jika kiri dan kanan sepakat bertemu."
                    },
                    {
                        id: "les_kalkulus1_limit_di_tak_hingga",
                        title: "Limit di Tak Hingga",
                        description: "Apa yang terjadi pada fungsi jika kita berjalan sangat jauh ke ujung sumbu X?"
                    },
                    {
                        id: "les_kalkulus1_limit_tak_hingga",
                        title: "Limit Tak Hingga",
                        description: "Saat nilai fungsi meledak ke atas tanpa batas. Hati-hati, ada tembok vertikal!"
                    },
                    {
                        id: "les_kalkulus1_asimptot_fungsi",
                        title: "Asimptot Fungsi",
                        description: "Garis batas gaib yang terus didekati grafik tapi haram untuk disentuh."
                    },
                    {
                        id: "les_kalkulus1_kontinuitas_fungsi_pada_sebuah_titik",
                        title: "Kontinuitas di Titik",
                        description: "Syarat mutlak agar kurva tidak bolong atau patah di tengah jalan."
                    },
                    {
                        id: "les_kalkulus1_kontinuitas_fungsi_di_sebuah_selang",
                        title: "Kontinuitas Interval",
                        description: "Memastikan fungsi berjalan mulus tanpa hambatan sepanjang rentang tertentu."
                    }
                ]
            },
            {
                id: "mod_kalkulus1_dasar_aturan_turunan",
                title: "Dasar & Aturan Turunan",
                lessons: [
                    {
                        id: "les_kalkulus1_interpretasi_turunan_kemiringan_garis_singgung",
                        title: "Interpretasi Turunan",
                        description: "Seberapa curam tanjakannya? Turunan adalah alat pengukur kemiringan instan."
                    },
                    {
                        id: "les_kalkulus1_rumus_dasar_turunan",
                        title: "Rumus Dasar Turunan",
                        description: "Lupakan limit panjang. Gunakan jalan pintas (rumus sakti) untuk menurunkan fungsi."
                    },
                    {
                        id: "les_kalkulus1_turunan_fungsi_komposisi",
                        title: "Aturan Rantai (Chain Rule)",
                        description: "Teknik 'mengupas bawang' untuk menurunkan fungsi di dalam fungsi."
                    },
                    {
                        id: "les_kalkulus1_turunan_orde_tinggi",
                        title: "Turunan Orde Tinggi",
                        description: "Menurunkan hasil turunan. Percepatan adalah turunan dari kecepatan, ingat?"
                    },
                    {
                        id: "les_kalkulus1_turunan_fungsi_eksplisit",
                        title: "Turunan Eksplisit",
                        description: "Cara standar menurunkan y = f(x) yang sudah biasa kita lihat."
                    },
                    {
                        id: "les_kalkulus1_turunan_fungsi_implisit",
                        title: "Turunan Implisit",
                        description: "Saat 'y' bercampur baur dengan 'x', kita butuh trik khusus untuk menurunkannya."
                    }
                ]
            },
            {
                id: "mod_kalkulus1_aplikasi_turunan_fungsi",
                title: "Aplikasi Turunan Fungsi",
                lessons: [
                    {
                        id: "les_kalkulus1_masalah_nilai_ekstrim",
                        title: "Masalah Nilai Ekstrim",
                        description: "Mencari puncak tertinggi (Maksimum) dan lembah terdalam (Minimum). Holy Grail-nya optimasi."
                    },
                    {
                        id: "les_kalkulus1_kemonotonan_fungsi",
                        title: "Kemonotonan Fungsi",
                        description: "Kapan grafik naik? Kapan turun? Turunan pertama punya jawabannya."
                    },
                    {
                        id: "les_kalkulus1_kecekungan_fungsi",
                        title: "Kecekungan Fungsi",
                        description: "Cekung ke atas atau ke bawah? Turunan kedua yang menjadi detektifnya."
                    },
                    {
                        id: "les_kalkulus1_uji_turunan_i",
                        title: "Uji Turunan I",
                        description: "Memastikan apakah titik kritis itu puncak gunung atau dasar jurang."
                    },
                    {
                        id: "les_kalkulus1_uji_turunan_ii",
                        title: "Uji Turunan II",
                        description: "Cara alternatif (dan seringkali lebih cepat) untuk menguji jenis titik ekstrem."
                    },
                    {
                        id: "les_kalkulus1_teorema_nilai_rata_rata",
                        title: "Teorema Nilai Rata-rata",
                        description: "Jaminan bahwa rata-rata kecepatan pasti pernah tersentuh setidaknya sekali."
                    },
                    {
                        id: "les_kalkulus1_menggambar_grafik_fungsi",
                        title: "Menggambar Grafik",
                        description: "Bukan sekadar sketsa, kita gambar anatomi grafik akurat bermodal kalkulus."
                    },
                    {
                        id: "les_kalkulus1_ekspresi_fungsi_dalam_deret_taylor",
                        title: "Deret Taylor",
                        description: "Mengubah fungsi rumit menjadi deretan polinom tak hingga yang bisa dihitung."
                    },
                    {
                        id: "les_kalkulus1_deret_maclaurin",
                        title: "Deret Maclaurin",
                        description: "Versi spesial dari Taylor yang berpusat di nol. Sangat berguna di Fisika."
                    },
                    {
                        id: "les_kalkulus1_aplikasi_turunan_berbagai_bidang",
                        title: "Aplikasi Nyata",
                        description: "Dari Laju Reaksi kimia hingga Marginal Cost ekonomi, turunan ada di mana-mana."
                    }
                ]
            },
            {
                id: "mod_kalkulus1_dasar_integral_teknik_pengintegralan",
                title: "Dasar Integral & Teknik",
                lessons: [
                    {
                        id: "les_kalkulus1_integral_tentu_sebagai_jumlahan_riemann",
                        title: "Jumlahan Riemann",
                        description: "Menghitung luas area lengkung dengan memotongnya jadi persegi panjang tipis."
                    },
                    {
                        id: "les_kalkulus1_sifat_sifat_integral",
                        title: "Sifat-sifat Integral",
                        description: "Aturan main yang bikin hidup lebih mudah saat mengutak-atik integral."
                    },
                    {
                        id: "les_kalkulus1_teorema_dasar_integral",
                        title: "Teorema Dasar Kalkulus",
                        description: "Momen 'Aha!' yang menyatukan Turunan dan Integral sebagai dua sisi mata uang."
                    },
                    {
                        id: "les_kalkulus1_integral_tak_tentu",
                        title: "Integral Tak Tentu",
                        description: "Mencari 'Anti-turunan'. Siapakah fungsi asal sebelum dia diturunkan?"
                    },
                    {
                        id: "les_kalkulus1_metode_pengintegralan",
                        title: "Metode Substitusi",
                        description: "Trik 'memisalkan u' untuk menyederhanakan integral yang ruwet."
                    },
                    {
                        id: "les_kalkulus1_teknik_pengintegralan_fungsi_rasional",
                        title: "Integral Fungsi Rasional",
                        description: "Memecah pecahan kompleks menjadi bagian-bagian kecil yang mudah diintegralkan."
                    }
                ]
            },
            {
                id: "mod_kalkulus1_aplikasi_integral",
                title: "Aplikasi Integral",
                lessons: [
                    {
                        id: "les_kalkulus1_luas_daerah_di_bawah_kurva_di_atas_sumbu_x",
                        title: "Luas Area Standar",
                        description: "Menghitung luas tanah di bawah kurva tapi masih di atas tanah (sumbu X)."
                    },
                    {
                        id: "les_kalkulus1_luas_daerah_di_bawah_kurva_di_bawah_sumbu_x",
                        title: "Luas Area Bawah",
                        description: "Bagaimana jika areanya 'tenggelam' di bawah sumbu X? Hati-hati tanda minus!"
                    },
                    {
                        id: "les_kalkulus1_luas_di_antara_dua_kurva",
                        title: "Luas Antara Dua Kurva",
                        description: "Menghitung area yang terjepit di tengah-tengah dua grafik berbeda."
                    },
                    {
                        id: "les_kalkulus1_nilai_rata_rata_integral",
                        title: "Nilai Rata-rata Fungsi",
                        description: "Cara mencari tinggi rata-rata dari sebuah gelombang yang naik turun."
                    },
                    {
                        id: "les_kalkulus1_panjang_kurva",
                        title: "Panjang Kurva",
                        description: "Jika tali grafik direntangkan lurus, seberapa panjangkah dia sebenarnya?"
                    },
                    {
                        id: "les_kalkulus1_momen",
                        title: "Momen & Pusat Massa",
                        description: "Fisika bertemu Matematika. Menghitung titik keseimbangan suatu benda."
                    },
                    {
                        id: "les_kalkulus1_titik_massa_plat_tipis",
                        title: "Titik Berat Plat",
                        description: "Menentukan di mana kamu harus menaruh jari agar plat tipis ini seimbang sempurna."
                    }
                ]
            }
        ]
    },
    {
        id: "ipas_kelas4",
        title: "IPAS Kelas 4",
        description: "Pelajari konsep dasar IPA dan Matematika yang menyenangkan untuk siswa kelas 4 SD.",
        isProgramming: false,
        color: "purple",
        icon: <BookOpenText size={24} />,
        codeConfig: {
            language: "",
            defaultCode: "",
            placeholder: ""
        },
        modules: [
            {
                id: "mod_ipas4_bab1",
                title: "Bab 1: Energi & Perubahannya",
                lessons: [
                    {
                        id: "les_ipas4_b1_1",
                        title: "Apa Itu Energi?",
                        description: "Kenalan dulu sama 'bensin'-nya kehidupan. Emang energi bisa dilihat? Atau cuma bisa dirasa?"
                    },
                    {
                        id: "les_ipas4_b1_2",
                        title: "Sulap Energi (Transformasi)",
                        "description": "Energi gak bisa musnah, tapi bisa berubah wujud! Kayak dari listrik jadi gerak di kipas angin."
                    },
                    {
                        id: "les_ipas4_b1_3",
                        title: "Energi Potensial vs Kinetik",
                        description: "Bedanya energi yang 'disimpan' (potensial) sama energi yang lagi 'beraksi' (kinetik/gerak)."
                    },
                    {
                        id: "les_ipas4_b1_4",
                        title: "Dapur Tumbuhan: Fotosintesis",
                        description: "Gimana cara tumbuhan masak makanan sendiri pakai sinar matahari? Spoiler: Ada klorofilnya!"
                    },
                    {
                        id: "les_ipas4_b1_5",
                        title: "Energi di Sekitarmu",
                        description: "Cek barang-barang di rumah, energi apa aja yang berubah di sana? TV, Rice Cooker, dll."
                    }
                ]
            },
            {
                id: "mod_ipas4_bab2",
                title: "Bab 2: Gaya & Gerak",
                lessons: [
                    {
                        id: "les_ipas4_b2_1",
                        title: "Gaya: Dorong atau Tarik?",
                        description: "Konsep dasar gaya. Bukan gaya foto ya, tapi interaksi benda wkwkwk."
                    },
                    {
                        id: "les_ipas4_b2_2",
                        title: "Gaya Otot & Gaya Gesek",
                        description: "Kenapa lantai licin bikin kepleset? Itu karena gaya geseknya minim, kawan!"
                    },
                    {
                        id: "les_ipas4_b2_3",
                        title: "Benda Diam Jadi Gerak",
                        description: "Gimana gaya bisa mengubah benda yang mager jadi lari kencang."
                    },
                    {
                        id: "les_ipas4_b2_4",
                        title: "Mengubah Bentuk Benda",
                        description: "Main plastisin atau remuk kaleng, bukti kalau gaya bisa ubah bentuk."
                    },
                    {
                        id: "les_ipas4_b2_5",
                        title: "Magnet: Si Penempel Ajaib",
                        description: "Kenalan sama Kutub Utara dan Selatan magnet. Kenapa mereka bisa tolak-menolak?"
                    },
                    {
                        id: "les_ipas4_b2_6",
                        title: "Benda Magnetis & Non-Magnetis",
                        description: "Gak semua logam mau ditempel magnet lho. Siapa aja yang jual mahal?"
                    }
                ]
            },
            {
                id: "mod_ipas4_bab3",
                title: "Bab 3: Daerah Tempat Tinggalku",
                lessons: [
                    {
                        id: "les_ipas4_b3_1",
                        title: "Peta: Petunjuk Jalan Kuno",
                        description: "Cara baca peta biar gak nyasar kayak Dora. Belajar arah mata angin dan skala."
                    },
                    {
                        id: "les_ipas4_b3_2",
                        title: "Sejarah Daerahku",
                        description: "Setiap daerah punya cerita asal-usul. Gimana cara taunya? Tanya sesepuh atau lihat peninggalan."
                    },
                    {
                        id: "les_ipas4_b3_3",
                        title: "Bentang Alam: Gunung & Laut",
                        description: "Bedanya dataran tinggi, dataran rendah, dan pesisir pantai. Kamu tinggal di mana?"
                    },
                    {
                        id: "les_ipas4_b3_4",
                        title: "Kekayaan Alam Sekitar",
                        description: "Potensi alam apa yang ada di daerahmu? Tambang, pertanian, atau wisata?"
                    }
                ]
            },
            {
                id: "mod_ipas4_bab4",
                title: "Bab 4: Perubahan Iklim",
                lessons: [
                    {
                        id: "les_ipas4_b4_1",
                        title: "Cuaca vs Iklim",
                        description: "Hari ini hujan, besok panas. Itu cuaca. Kalau Iklim itu jangka panjangnya."
                    },
                    {
                        id: "les_ipas4_b4_2",
                        title: "Efek Rumah Kaca",
                        description: "Bumi makin panas kayak di oven. Kenapa bisa gitu? Apa selimut buminya ketebalan?"
                    },
                    {
                        id: "les_ipas4_b4_3",
                        title: "Si Jahat Gas Karbon",
                        description: "Asap kendaraan dan pabrik bikin bumi demam. Yuk cari tau sumbernya."
                    },
                    {
                        id: "les_ipas4_b4_4",
                        title: "Aksi Kecil Selamatkan Bumi",
                        description: "Hal simpel yang bisa kamu lakuin buat dinginin bumi lagi."
                    }
                ]
            },
            {
                id: "mod_ipas4_bab5",
                title: "Bab 5: Kekhasan Daerahku",
                lessons: [
                    {
                        id: "les_ipas4_b5_1",
                        title: "Harta Karun Hayati",
                        description: "Hewan dan tumbuhan unik yang cuma ada di daerah tertentu (Endemik)."
                    },
                    {
                        id: "les_ipas4_b5_2",
                        title: "Sumber Daya Unggulan",
                        description: "Daerahmu terkenal penghasil apa? Kopi? Batik? Atau Ukiran?"
                    },
                    {
                        id: "les_ipas4_b5_3",
                        title: "Produk Daerahku Mendunia",
                        description: "Gimana produk lokal bisa sampai dijual ke luar negeri."
                    }
                ]
            },
            {
                id: "mod_ipas4_bab6",
                title: "Bab 6: Peranku di Sekolah & Masyarakat",
                lessons: [
                    {
                        id: "les_ipas4_b6_1",
                        title: "Hak vs Kewajiban",
                        description: "Jangan nuntut hak melulu kalau kewajiban belum kelar wkwkwk. Pahami bedanya!"
                    },
                    {
                        id: "les_ipas4_b6_2",
                        title: "Peraturan: Dibuat Bukan Utk Dilanggar",
                        description: "Kenapa sih harus ada aturan di sekolah dan rumah? Biar gak chaos, kawan."
                    },
                    {
                        id: "les_ipas4_b6_3",
                        title: "Manusia Makhluk Sosial",
                        description: "Kita gak bisa hidup sendirian. Pentingnya gotong royong dan tegur sapa."
                    }
                ]
            },
            {
                id: "mod_ipas4_bab7",
                title: "Bab 7: Budaya & Kearifan Lokal",
                lessons: [
                    {
                        id: "les_ipas4_b7_1",
                        title: "Apa itu Kearifan Lokal?",
                        description: "Ilmu tititen atau kebiasaan turun temurun nenek moyang yang ternyata canggih."
                    },
                    {
                        id: "les_ipas4_b7_2",
                        title: "Ragam Budaya: Bhinneka Tunggal Ika",
                        description: "Beda baju adat, beda bahasa, tapi tetap satu geng. Indahnya perbedaan!"
                    },
                    {
                        id: "les_ipas4_b7_3",
                        title: "Sikap Toleransi",
                        description: "Cara menghargai teman yang beda suku atau agama. Jangan rasis ya!"
                    }
                ]
            },
            {
                id: "mod_ipas4_bab8",
                title: "Bab 8: Menyelamatkan Lingkungan",
                lessons: [
                    {
                        id: "les_ipas4_b8_1",
                        title: "Lingkungan yang Terancam",
                        description: "Sampah plastik di mana-mana. Hewan laut nangis. Ayo sadar lingkungan!"
                    },
                    {
                        id: "les_ipas4_b8_2",
                        title: "Jejak Karbonmu Berapa?",
                        description: "Cara ngurangin jejak karbon: Hemat listrik, kurangi naik motor, tanam pohon."
                    },
                    {
                        id: "les_ipas4_b8_3",
                        title: "Melestarikan Budaya Daerah",
                        description: "Biar budaya gak punah dimakan jaman, kita sebagai generasi muda harus ngapain?"
                    }
                ]
            }
        ]
    },
    {
        id: "kalkulus2",
        title: "Kalkulus II",
        description: "Menggali fungsi dua peubah atau lebih: definisi, domain, range, dan grafiknya untuk memahami perilaku permukaan 3D.",
        isProgramming: false,
        color: "blue",
        icon: <Calculator size={24} />,
        codeConfig: {
            language: "Markdown",
            defaultCode: "",
            placeholder: "Tulis rumus atau catatan di sini..."
        },
        modules: [
            {
                id: "mod_kalkulus2_01",
                title: "Fungsi Dua Peubah atau Lebih",
                lessons: [
                    {
                        id: "les_kalkulus2_01_01",
                        title: "Definisi fungsi dua peubah",
                        description: "Kenalan yuk sama fungsi dua variabel, gokil abis!"
                    },
                    {
                        id: "les_kalkulus2_01_02",
                        title: "Definisi fungsi lebih dari dua peubah",
                        description: "Naik level, fungsi multivariable siap nge-boom!"
                    },
                    {
                        id: "les_kalkulus2_01_03",
                        title: "Domain fungsi dua peubah",
                        description: "Zona nyaman si fungsi, jangan sampai nyasar!"
                    },
                    {
                        id: "les_kalkulus2_01_04",
                        title: "Range fungsi dua peubah",
                        description: "Kemana aja dia bisa nge-trip, ini dia jangkauannya!"
                    },
                    {
                        id: "les_kalkulus2_01_05",
                        title: "Grafik fungsi dua peubah",
                        description: "Gambarnya 3D, kaya roller-coaster di kertas!"
                    },
                    {
                        id: "les_kalkulus2_01_06",
                        title: "Grafik fungsi tiga peubah",
                        description: "Masuk dimensi empat, imajinasi meledak!"
                    }
                ]
            },
            {
                id: "mod_kalkulus2_02",
                title: "Limit dan Kekontinuan",
                lessons: [
                    {
                        id: "les_kalkulus2_02_01",
                        title: "Limit fungsi dua peubah",
                        description: "Ketika x & y tak terhingga dekat, drama seru dimulai!"
                    },
                    {
                        id: "les_kalkulus2_02_02",
                        title: "Limit fungsi tiga peubah",
                        description: "Tambah satu variabel, tambah seru!"
                    },
                    {
                        id: "les_kalkulus2_02_03",
                        title: "Kekontinuan fungsi dua peubah",
                        description: "Tidak robek, tidak putus—lancar jaya!"
                    },
                    {
                        id: "les_kalkulus2_02_04",
                        title: "Kekontinuan fungsi tiga peubah",
                        description: "Lanjutan dari lancar, sekarang di dimensi tinggi!"
                    }
                ]
            },
            {
                id: "mod_kalkulus2_03",
                title: "Turunan Parsial dan Turunan Berarah",
                lessons: [
                    {
                        id: "les_kalkulus2_03_01",
                        title: "Turunan Parsial",
                        description: "Deret terhadap x doang, y diem dulu!"
                    },
                    {
                        id: "les_kalkulus2_03_02",
                        title: "Turunan Berarah",
                        description: "Turunan pake kompas, arah bebas pilih jurusan!"
                    },
                    {
                        id: "les_kalkulus2_03_03",
                        title: "Aturan Rantai",
                        description: "Rantainya panjang, tapi hasilnya mantap!"
                    },
                    {
                        id: "les_kalkulus2_03_04",
                        title: "Turunan Fungsi Implisit",
                        description: "Sembunyi-sembunyi tapi tetap ke-tau-runan!"
                    },
                    {
                        id: "les_kalkulus2_03_05",
                        title: "Turunan Total",
                        description: "Semua variabel digoyang serentak—totalitas!"
                    }
                ]
            },
            {
                id: "mod_kalkulus2_04",
                title: "Aplikasi Turunan Parsial",
                lessons: [
                    {
                        id: "les_kalkulus2_04_01",
                        title: "Aplikasi turunan partial fungsi",
                        description: "Hitung curah hujan, tebak cuaca, keren kan?"
                    },
                    {
                        id: "les_kalkulus2_04_02",
                        title: "Deret Taylor untuk fungsi dua peubah",
                        description: "Polinomial super panjang, aproksimasi sampai ngiler!"
                    },
                    {
                        id: "les_kalkulus2_04_03",
                        title: "Deret Taylor untuk fungsi lebih dari dua peubah",
                        description: "Tambah variabel, tambah panjang, makin mewah!"
                    },
                    {
                        id: "les_kalkulus2_04_04",
                        title: "Masalah Maksimum Minimum tanpa kendala",
                        description: "Bebasss, cari puncak & lembah tanpa tembok!"
                    },
                    {
                        id: "les_kalkulus2_04_05",
                        title: "Masalah Maksimum Minimum dengan kendala",
                        description: "Ada tembok? Tetap tembus pake Lagrange!"
                    }
                ]
            },
            {
                id: "mod_kalkulus2_05",
                title: "Integral Rangkap",
                lessons: [
                    {
                        id: "les_kalkulus2_05_01",
                        title: "Integral Rangkap Dua",
                        description: "Integrasi dobel, hasilnya double happiness!"
                    },
                    {
                        id: "les_kalkulus2_05_02",
                        title: "Mengubah urutan integral rangkap dua",
                        description: "Santai ganti posisi, hasilnya tetap kencang!"
                    },
                    {
                        id: "les_kalkulus2_05_03",
                        title: "Transformasi koordinat kartesian ke koordinat polar",
                        description: "Pindah ke polar, soal lingkaran jadi santai!"
                    },
                    {
                        id: "les_kalkulus2_05_04",
                        title: "Integral Rangkap Tiga",
                        description: "Triple combo, volume ruang kegulung habis!"
                    },
                    {
                        id: "les_kalkulus2_05_05",
                        title: "Transformasi koordinat kartesian ke koordinat tabung",
                        description: "Mode silinder, bidang muter kayak piringan!"
                    },
                    {
                        id: "les_kalkulus2_05_06",
                        title: "Transformasi koordinat kartesian ke koordinat bola",
                        description: "Bentuk bola? Pake koordinat bola, mantul!"
                    },
                    {
                        id: "les_kalkulus2_05_07",
                        title: "Aplikasi integral rangkap",
                        description: "Hitung massa, charge, apapun—serba bisa!"
                    }
                ]
            },
            {
                id: "mod_kalkulus2_06",
                title: "Matriks dan Sistem Persamaan Linier",
                lessons: [
                    {
                        id: "les_kalkulus2_06_01",
                        title: "Matriks",
                        description: "Tabel penuh angka, tapi punya superpower!"
                    },
                    {
                        id: "les_kalkulus2_06_02",
                        title: "Operasi Dasar Matriks",
                        description: "Tambah kali transpose, seru kayak Rubik!"
                    },
                    {
                        id: "les_kalkulus2_06_03",
                        title: "Determinan Matriks",
                        description: "Angka sakti yang bilang bisa-balik atau ngga!"
                    },
                    {
                        id: "les_kalkulus2_06_04",
                        title: "Invers Matriks",
                        description: "Balikan matrix, kayak balikan jaket!"
                    },
                    {
                        id: "les_kalkulus2_06_05",
                        title: "Sistem Persamaan Linier",
                        description: "Banyak persamaan, satu solusi—timework!"
                    }
                ]
            },
            {
                id: "mod_kalkulus2_07",
                title: "Persamaan Diferensial",
                lessons: [
                    {
                        id: "les_kalkulus2_07_01",
                        title: "Persamaan Diferensial orde 1 derajat 1",
                        description: "Turunan pertama, masuk pintu gerbang differential!"
                    },
                    {
                        id: "les_kalkulus2_07_02",
                        title: "Persamaan Diferensial dapat dipisah",
                        description: "Pisah ruas, langsung santai diintegralkan!"
                    },
                    {
                        id: "les_kalkulus2_07_03",
                        title: "Persamaan Diferensial homogen",
                        description: "Serba seimbang, eksponen siap nongol!"
                    },
                    {
                        id: "les_kalkulus2_07_04",
                        title: "Persamaan Diferensial Eksak",
                        description: "Tepat gulanya, anti main-main!"
                    },
                    {
                        id: "les_kalkulus2_07_05",
                        title: "Persamaan Diferensial Non Eksak",
                        description: "Ngga pas? Tambah faktor integrasi, jadi pas!"
                    },
                    {
                        id: "les_kalkulus2_07_06",
                        title: "Persamaan Diferensial Linier",
                        description: "Bentuk linier, pake faktor integrating—klik!"
                    }
                ]
            }
        ]
    },
    {
        id: "logika_matematika",
        title: "Logika Matematika",
        description: "Pelajari dasar-dasar logika: pernyataan, nilai kebenaran, tabel kebenaran, hingga hukum-hukum ekuivalensi logika.",
        isProgramming: false,
        color: "indigo",
        icon: <Dices size={24} />,
        codeConfig: {
            language: "Markdown",
            defaultCode: "# Tugas Logika Matematika",
            placeholder: "Tulis jawaban logika di sini..."
        },
        modules: [
            {
                id: "mod_logika_matematika_01",
                title: "Pernyataan dan Nilai Kebenaran",
                lessons: [
                    {
                        id: "les_logika_matematika_01_01",
                        title: "Pernyataan",
                        description: "Kalimat bener atau salah, gokil tapi punya nyali!"
                    },
                    {
                        id: "les_logika_matematika_01_02",
                        title: "Pernyataan Sederhana",
                        description: "Satu kalimat, satu makna, mantap tanpa basa-basi!"
                    },
                    {
                        id: "les_logika_matematika_01_03",
                        title: "Pernyataan Majemuk",
                        description: "Gabungan pernyataan, kayak geng logika!"
                    },
                    {
                        id: "les_logika_matematika_01_04",
                        title: "Tabel Nilai Kebenaran",
                        description: "Tabel cekcok logika, kuy cek kebenaranmu!"
                    }
                ]
            },
            {
                id: "mod_logika_matematika_02",
                title: "Ekuivalensi Logika",
                lessons: [
                    {
                        id: "les_logika_matematika_02_01",
                        title: "Hukum-hukum Logika",
                        description: "Aturan main logika, jangan sampai ketauan ngibul!"
                    },
                    {
                        id: "les_logika_matematika_02_02",
                        title: "Tautologi",
                        description: "Selalu bener 100%, auto jago debat!"
                    },
                    {
                        id: "les_logika_matematika_02_03",
                        title: "Kontradiksi",
                        description: "Selalu salah terus, bikin auto gigit jari!"
                    },
                    {
                        id: "les_logika_matematika_02_04",
                        title: "Konvers",
                        description: "Balik arah pernyataan, cek dulu jangan asal!"
                    },
                    {
                        id: "les_logika_matematika_02_05",
                        title: "Invers",
                        description: "Negasi kedua-duanya, gokil tapi seru!"
                    },
                    {
                        id: "les_logika_matematika_02_06",
                        title: "Kontraposisi",
                        description: "Balik-negasi mantap, jitu buat nyerang argumen!"
                    }
                ]
            },
            {
                id: "mod_logika_matematika_03",
                title: "Argumen dan Inferensi",
                lessons: [
                    {
                        id: "les_logika_matematika_03_01",
                        title: "Argumen Valid",
                        description: "Argumen si juara, gaada yang bisa nolak!"
                    },
                    {
                        id: "les_logika_matematika_03_02",
                        title: "Argumen Invalid",
                        description: "Argumen cupu, sering bikin ngelus dada!"
                    },
                    {
                        id: "les_logika_matematika_03_03",
                        title: "Metode Inferensi",
                        description: "Cepat tarik kesimpulan, mantap kayak detektif!"
                    }
                ]
            },
            {
                id: "mod_logika_matematika_04",
                title: "Pernyataan Berkuantor",
                lessons: [
                    {
                        id: "les_logika_matematika_04_01",
                        title: "Kuantor Umum",
                        description: "Semua item kena, mantap menyeluruh!"
                    },
                    {
                        id: "les_logika_matematika_04_02",
                        title: "Kuantor Eksistensial",
                        description: "Setidaknya satu ada, tenang masih ada harapan!"
                    },
                    {
                        id: "les_logika_matematika_04_03",
                        title: "Negasi Pernyataan Berkuantor",
                        description: "Balikkan kuantor, bikin auto kuy!"
                    }
                ]
            },
            {
                id: "mod_logika_matematika_05",
                title: "Penerapan Kuantor Matematika",
                lessons: [
                    {
                        id: "les_logika_matematika_05_01",
                        title: "Konsep Logika pada Fungsi",
                        description: "Fungsi logis, bikin graf makin keren!"
                    },
                    {
                        id: "les_logika_matematika_05_02",
                        title: "Konsep Logika pada Limit Fungsi",
                        description: "Limit plus logika, auto ngeh batas tak terhingga!"
                    }
                ]
            },
            {
                id: "mod_logika_matematika_06",
                title: "Metode Pembuktian",
                lessons: [
                    {
                        id: "les_logika_matematika_06_01",
                        title: "Jenis-jenis Metode Pembuktian",
                        description: "Pilih senjata bukti, sesuai lawan biar mantap!"
                    },
                    {
                        id: "les_logika_matematika_06_02",
                        title: "Penerapan Metode Pembuktian",
                        description: "Praktik langsung, bikin dosen terdiam!"
                    }
                ]
            },
            {
                id: "mod_logika_matematika_07",
                title: "Induksi Matematika",
                lessons: [
                    {
                        id: "les_logika_matematika_07_01",
                        title: "Induksi Matematika",
                        description: "Pijak basis, naikkan langkah, auto ngebut!"
                    }
                ]
            },
            {
                id: "mod_logika_matematika_08",
                title: "Dasar Aljabar Boolean",
                lessons: [
                    {
                        id: "les_logika_matematika_08_01",
                        title: "Pengertian Aljabar Boolean",
                        description: "Gerbang digital mantap, 1-0 tetap jalan!"
                    },
                    {
                        id: "les_logika_matematika_08_02",
                        title: "Contoh Aljabar Boolean",
                        description: "Lampu plus switch, gokil tapi nyala!"
                    },
                    {
                        id: "les_logika_matematika_08_03",
                        title: "Sifat-sifat Aljabar Boolean",
                        description: "Sifatnya kaku, tujuannya fleksibel, mantap!"
                    }
                ]
            },
            {
                id: "mod_logika_matematika_09",
                title: "Bentuk Kanonik",
                lessons: [
                    {
                        id: "les_logika_matematika_09_01",
                        title: "Konversi Bentuk Fungsi",
                        description: "Ubah bentuk, bikin rangkaian makin ringkas!"
                    },
                    {
                        id: "les_logika_matematika_09_02",
                        title: "Bentuk Kanonik SOP",
                        description: "Jumlahkan produk, jalan pintar chip!"
                    },
                    {
                        id: "les_logika_matematika_09_03",
                        title: "Bentuk Kanonik POS",
                        description: "Kalikan penjumlahan, tetap keren!"
                    },
                    {
                        id: "les_logika_matematika_09_04",
                        title: "Konversi Antar Bentuk Kanonik",
                        description: "SOP-POS bolak-balik, kuy transformasi!"
                    }
                ]
            },
            {
                id: "mod_logika_matematika_10",
                title: "Penyederhanaan Sirkuit",
                lessons: [
                    {
                        id: "les_logika_matematika_10_01",
                        title: "Penerapan Aljabar Boolean",
                        description: "Desain rangkaian, hemat kabel makin ciamik!"
                    },
                    {
                        id: "les_logika_matematika_10_02",
                        title: "Penyederhanaan Sirkuit",
                        description: "Rapikan kabel, hemat biaya plus gokil!"
                    }
                ]
            },
            {
                id: "mod_logika_matematika_11",
                title: "Logika dan Himpunan",
                lessons: [
                    {
                        id: "les_logika_matematika_11_01",
                        title: "Operator Logika",
                        description: "AND-OR-NOT, trio keren dunia coding!"
                    },
                    {
                        id: "les_logika_matematika_11_02",
                        title: "Operasi Himpunan",
                        description: "Iris-gabung komplemen, seru kayak nge-set!"
                    },
                    {
                        id: "les_logika_matematika_11_03",
                        title: "Keterkaitan Operator Logika dan Himpunan",
                        description: "Gerbang plus himpunan, double combo mantap!"
                    }
                ]
            },
            {
                id: "mod_logika_matematika_12",
                title: "Karakteristik Himpunan",
                lessons: [
                    {
                        id: "les_logika_matematika_12_01",
                        title: "Pengertian Himpunan dengan Logika",
                        description: "Logika bikin set jelas, gaada yang ketinggalan!"
                    },
                    {
                        id: "les_logika_matematika_12_02",
                        title: "Karakteristik Himpunan",
                        description: "Unik anggota, gokil tapi tertata!"
                    }
                ]
            },
            {
                id: "mod_logika_matematika_13",
                title: "Pembuktian Sifat Himpunan",
                lessons: [
                    {
                        id: "les_logika_matematika_13_01",
                        title: "Logika dan Sifat-sifat Himpunan",
                        description: "Sifat himpunan plus logika, auto terang!"
                    },
                    {
                        id: "les_logika_matematika_13_02",
                        title: "Pembuktian Sifat Himpunan",
                        description: "Buktikan sifat, bikin dosen angkat topi!"
                    }
                ]
            }
        ]
    },
    {
        id: "pengantar_data_sains",
        title: "Pengantar Data Sains",
        description: "Mengenalkan konsep statistik, big data, serta pustaka Python (NumPy & Pandas) sebagai fondasi untuk menjadi data scientist.",
        isProgramming: true,
        color: "blue",
        icon: <BarChart2 size={24} />,
        codeConfig: {
            language: "Python",
            defaultCode: "import pandas as pd\nimport numpy as np\n\nprint('Selamat datang di Data Sains!')",
            placeholder: "Tulis kode Python-mu di sini..."
        },
        modules: [
            {
                id: "mod_pengantar_data_sains_01",
                title: "Konsep Dasar & Tools",
                lessons: [
                    {
                        id: "les_pengantar_data_sains_01_01",
                        title: "Konsep Statistik dalam perspektif Data Sains",
                        description: "Statistik bukan bikin mumet, tapi bikin data ngomong jelas, gokil!"
                    },
                    {
                        id: "les_pengantar_data_sains_01_02",
                        title: "Pengenalan Big Data",
                        description: "Big Data itu gede banget, kuy selami samudra informasi digital!"
                    },
                    {
                        id: "les_pengantar_data_sains_01_03",
                        title: "Pustaka Python untuk Data Scientist",
                        description: "Python punya gudang pustaka mantap, tinggal pilih senjatanya!"
                    },
                    {
                        id: "les_pengantar_data_sains_01_04",
                        title: "NumPy",
                        description: "NumPy: kalkulator super-cepat yang bikin array jadi teman karib."
                    },
                    {
                        id: "les_pengantar_data_sains_01_05",
                        title: "Pandas",
                        description: "Pandas bikin data frame jadi lucu diusap, analisisnya cepet!"
                    },
                    {
                        id: "les_pengantar_data_sains_01_06",
                        title: "Matplotlib",
                        description: "Matplotlib: coretan plot sederhana yang bisa jadi karya seni data."
                    },
                    {
                        id: "les_pengantar_data_sains_01_07",
                        title: "Perintah Penting Python",
                        description: "Kuy hafalin shortcut Python, ngetik dikit hasilnya banyak!"
                    }
                ]
            },
            {
                id: "mod_pengantar_data_sains_02",
                title: "Tipe dan Format Data",
                lessons: [
                    {
                        id: "les_pengantar_data_sains_02_01",
                        title: "Pengertian Data Terstruktur",
                        description: "Data terstruktur rapi kayak lemari baju, gampang dicari!"
                    },
                    {
                        id: "les_pengantar_data_sains_02_02",
                        title: "Pengertian Data Tidak Terstruktur",
                        description: "Data ga terstruktur itu kamar kost, berantakan tapi penuh kejutan."
                    },
                    {
                        id: "les_pengantar_data_sains_02_03",
                        title: "Sumber Data",
                        description: "Sumber data itu lautan info, tinggal mancing yang sesuai kebutuhan."
                    },
                    {
                        id: "les_pengantar_data_sains_02_04",
                        title: "Jenis Data",
                        description: "Kenali jenis data, biar ga salah kostum saat pesta analisis."
                    },
                    {
                        id: "les_pengantar_data_sains_02_05",
                        title: "Skala Data",
                        description: "Skala data: beda tingkatan, beda cara mainnya, seru!"
                    },
                    {
                        id: "les_pengantar_data_sains_02_06",
                        title: "Tipe Data",
                        description: "Tipe data kayak rasa es krim, pilih pas biar codingnya enak."
                    },
                    {
                        id: "les_pengantar_data_sains_02_07",
                        title: "Format Data",
                        description: "Format data: ubah mode, ubah penampilan, tapi isi tetap oke."
                    }
                ]
            },
            {
                id: "mod_pengantar_data_sains_03",
                title: "Statistik Deskriptif",
                lessons: [
                    {
                        id: "les_pengantar_data_sains_03_01",
                        title: "Data Preparation",
                        description: "Data preparation olah bumbu dulu, baru masak analisis jadi sedap."
                    },
                    {
                        id: "les_pengantar_data_sains_03_02",
                        title: "Exploratory Data Analysis (EDA)",
                        description: "EDA petualangan mata-mata, cari tau rahasia si data."
                    },
                    {
                        id: "les_pengantar_data_sains_03_03",
                        title: "Estimation Sampel Mean",
                        description: "Tebak rata-rata sampel, modal matematika plus keberanian!"
                    },
                    {
                        id: "les_pengantar_data_sains_03_04",
                        title: "Variance",
                        description: "Variance bikin tau seberapa jauh data kabur dari rombongan."
                    },
                    {
                        id: "les_pengantar_data_sains_03_05",
                        title: "Covariance",
                        description: "Covariance deteksi gengsi dua variabel, sejalan atau saling cuek."
                    },
                    {
                        id: "les_pengantar_data_sains_03_06",
                        title: "Correlation",
                        description: "Correlation: kencangkan atau putus hubungan antar data, mantap!"
                    }
                ]
            },
            {
                id: "mod_pengantar_data_sains_04",
                title: "Visualisasi Data",
                lessons: [
                    {
                        id: "les_pengantar_data_sains_04_01",
                        title: "Teknik Visualisasi",
                        description: "Pilih teknik visualisasi yang pas, biar data bisa pamer diri."
                    },
                    {
                        id: "les_pengantar_data_sains_04_02",
                        title: "Pewarnaan dalam Visualisasi",
                        description: "Pewarnaan: kasih make-up buat grafik, makin cantik di mata."
                    },
                    {
                        id: "les_pengantar_data_sains_04_03",
                        title: "Presentasi Hasil Visualisasi",
                        description: "Presentasi grafik, storytelling tanpa bikin audience ngantuk."
                    }
                ]
            },
            {
                id: "mod_pengantar_data_sains_05",
                title: "Statistik Inferensial",
                lessons: [
                    {
                        id: "les_pengantar_data_sains_05_01",
                        title: "Measuring the Variability in Estimates",
                        description: "Ukur variabilitas estimasi, biar keyakinan makin greng."
                    },
                    {
                        id: "les_pengantar_data_sains_05_02",
                        title: "Point Estimates",
                        description: "Point estimates: tebak tepat sasaran, dapet skor mantap."
                    },
                    {
                        id: "les_pengantar_data_sains_05_03",
                        title: "Confidence Interval",
                        description: "Confidence interval kasih jendela keyakinan, ga usah tegang."
                    },
                    {
                        id: "les_pengantar_data_sains_05_04",
                        title: "Hypothesis Testing",
                        description: "Uji hipotesis, banting pendapat pake data biar menang!"
                    }
                ]
            },
            {
                id: "mod_pengantar_data_sains_06",
                title: "Model dan Algoritma",
                lessons: [
                    {
                        id: "les_pengantar_data_sains_06_01",
                        title: "Supervised Learning",
                        description: "Supervised learning: belajar dengan guru, arahnya jelas sampai juara."
                    },
                    {
                        id: "les_pengantar_data_sains_06_02",
                        title: "Regression Analysis",
                        description: "Regression: ramalkan masa depan modal garis, serasa dukun modern."
                    },
                    {
                        id: "les_pengantar_data_sains_06_03",
                        title: "Unsupervised Learning",
                        description: "Unsupervised learning: petualangan tanpa peta, klaster pun muncul sendiri."
                    }
                ]
            },
            {
                id: "mod_pengantar_data_sains_07",
                title: "Analisis dan Interpretasi",
                lessons: [
                    {
                        id: "les_pengantar_data_sains_07_01",
                        title: "Pendalaman Algoritma Data Sains",
                        description: "Deep dive algoritma, jadi ninja yang menguasai banyak jurus."
                    },
                    {
                        id: "les_pengantar_data_sains_07_02",
                        title: "Pemilihan Data untuk Project",
                        description: "Pilih data project kayak pilih pasangan, cocoknya bikin bahagia."
                    },
                    {
                        id: "les_pengantar_data_sains_07_03",
                        title: "Interpretasi Temuan Data",
                        description: "Interpretasi temuan, ubah angka jadi cerita yang bikin klepek-klepek."
                    },
                    {
                        id: "les_pengantar_data_sains_07_04",
                        title: "Presentasi Hasil Analisis Data",
                        description: "Presentasi hasil, kasih ending berkesan biar client klepet!"
                    }
                ]
            }
        ]
    },
    {
        id: "algoritma_pemrograman",
        title: "Algoritma & Pemrograman",
        description: "Mengenal dasar-dasar algoritma, karakteristik, perancangan, serta paradigma pemrograman prosedural dan fungsional untuk memecahkan masalah secara terstruktur.",
        isProgramming: true,
        color: "blue",
        icon: <Code size={24} />,
        codeConfig: {
            language: "Python",
            defaultCode: "# Contoh algoritma sederhana: Rock-Paper-Scissors\nimport random\n\npilihan = ['batu', 'kertas', 'gunting']\nkomputer = random.choice(pilihan)\nprint(\"Komputer memilih:\", komputer)",
            placeholder: "Tulis algoritma Python-mu di sini..."
        },
        modules: [
            {
                id: "mod_algoritma_pemrograman_01",
                title: "Konsep Algoritma & Paradigma",
                lessons: [
                    {
                        id: "les_algoritma_pemrograman_01_01",
                        title: "Definisi Algoritma",
                        description: "Kenalan sama otak komputer, gokil!"
                    },
                    {
                        id: "les_algoritma_pemrograman_01_02",
                        title: "Karakteristik Algoritma",
                        description: "Ciri-ciri algoritma biar nggak ngawur, mantap!"
                    },
                    {
                        id: "les_algoritma_pemrograman_01_03",
                        title: "Perancangan Algoritma",
                        description: "Rancang langkah cantik ala hacker, kuy!"
                    },
                    {
                        id: "les_algoritma_pemrograman_01_04",
                        title: "Paradigma Pemrograman Prosedural",
                        description: "Jalanin kode step-by-step, gaya oldschool!"
                    },
                    {
                        id: "les_algoritma_pemrograman_01_05",
                        title: "Paradigma Pemrograman Fungsional",
                        description: "Kode kayak matematika, ringkas dan mewah!"
                    },
                    {
                        id: "les_algoritma_pemrograman_01_06",
                        title: "Paradigma Pemrograman Berorientasi Objek",
                        description: "Semua jadi objek, dunia maya pun hidup!"
                    },
                    {
                        id: "les_algoritma_pemrograman_01_07",
                        title: "Paradigma Pemrograman Deklaratif",
                        description: "Cerita ke komputer, dia yang mikir, asik!"
                    },
                    {
                        id: "les_algoritma_pemrograman_01_08",
                        title: "Representasi Algoritma Flowchart",
                        description: "Gambarkan alur, pake panah panjang, keren!"
                    },
                    {
                        id: "les_algoritma_pemrograman_01_09",
                        title: "Representasi Algoritma Pseudocode",
                        description: "Tulis algoritma ala manusia sebelum R!"
                    },
                    {
                        id: "les_algoritma_pemrograman_01_10",
                        title: "Representasi Algoritma Tabel Keputusan",
                        description: "Tabel pintar tolak kegalauan logika!"
                    },
                    {
                        id: "les_algoritma_pemrograman_01_11",
                        title: "Identifikasi Kesalahan Logika Flowchart",
                        description: "Cari bug di alur, detektif kode!"
                    },
                    {
                        id: "les_algoritma_pemrograman_01_12",
                        title: "Analisis Kesalahan Logika Flowchart",
                        description: "Mengupas error sampai ke akar, mantul!"
                    }
                ]
            },
            {
                id: "mod_algoritma_pemrograman_02",
                title: "Struktur Data & Manajemen Data R",
                lessons: [
                    {
                        id: "les_algoritma_pemrograman_02_01",
                        title: "Struktur Data Vektor di R",
                        description: "Vektor: array super simpel, juara satu!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_02",
                        title: "Struktur Data Matriks di R",
                        description: "Matriks: tabel cinta berdimensi dua!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_03",
                        title: "Struktur Data List di R",
                        description: "List: kardus isi apapun, serba bisa!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_04",
                        title: "Struktur Data Data Frame di R",
                        description: "Data frame: Excel-nya R, gampang!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_05",
                        title: "Akses Data Vektor",
                        description: "Colong data vektor ala ninja, kilat!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_06",
                        title: "Akses Data Matriks",
                        description: "Grebek sel matriks pakai indeks, jago!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_07",
                        title: "Akses Data List",
                        description: "Bongkar isi list tanpa rusak barang!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_08",
                        title: "Akses Data Frame",
                        description: "Data frame dicolong pake $, mantap!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_09",
                        title: "Manipulasi Data Vektor",
                        description: "Vektor diubah ala sulap, nge-gas!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_10",
                        title: "Manipulasi Data Matriks",
                        description: "Matriks dipotong-poten, jadi origami!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_11",
                        title: "Manipulasi Data List",
                        description: "List dikepalin jadi lebih rapi, asik!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_12",
                        title: "Manipulasi Data Frame",
                        description: "Data frame dipelintir jadi info baru, gokil!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_13",
                        title: "Transformasi Data Vektor",
                        description: "Vektor dimetamorfosis jadi lebih sakti!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_14",
                        title: "Transformasi Data Matriks",
                        description: "Matriks bertransformasi ala robot, dahsyat!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_15",
                        title: "Transformasi Data List",
                        description: "List berubah wujud jadi lebih greget!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_16",
                        title: "Transformasi Data Frame",
                        description: "Data frame berubah total, makeover!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_17",
                        title: "Filtering Data",
                        description: "Saring data sampai tersisa emas, kuy!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_18",
                        title: "Sorting Data",
                        description: "Data diurutin biar rapi kayak rak buku!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_19",
                        title: "Agregasi Data",
                        description: "Rame-rame data bikin statistik, kompak!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_20",
                        title: "Merging Data Frame",
                        description: "Nge-date dua data frame, jadi satu!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_21",
                        title: "Membaca Data Format CSV",
                        description: "CSV disedot masuk R, kilat abis!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_22",
                        title: "Menyimpan Data Format CSV",
                        description: "Hasil kerjaan disimpan jadi CSV, gampang!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_23",
                        title: "Membaca Data Format Excel",
                        description: "Excel masuk R tanpa ribet, mantul!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_24",
                        title: "Menyimpan Data Format Excel",
                        description: "R ngeluarin Excel, klik save selesai!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_25",
                        title: "Membaca Data Format RData",
                        description: "RData dibuka, memori kembali hidup!"
                    },
                    {
                        id: "les_algoritma_pemrograman_02_26",
                        title: "Menyimpan Data Format RData",
                        description: "Workspace disimpan jadi RData, praktis!"
                    }
                ]
            },
            {
                id: "mod_algoritma_pemrograman_03",
                title: "Penyeleksian Kondisi & Perulangan",
                lessons: [
                    {
                        id: "les_algoritma_pemrograman_03_01",
                        title: "Struktur Kontrol If-Else",
                        description: "Kalau-maka, jalan pintar algoritma!"
                    },
                    {
                        id: "les_algoritma_pemrograman_03_02",
                        title: "Struktur Kontrol Nested If",
                        description: "If di dalam if, bikin cekcok!"
                    },
                    {
                        id: "les_algoritma_pemrograman_03_03",
                        title: "Struktur Kontrol Switch-Case",
                        description: "Switch-case: pilihan ganda kilat!"
                    },
                    {
                        id: "les_algoritma_pemrograman_03_04",
                        title: "Struktur Perulangan For",
                        description: "For muter terus, turbin kode!"
                    },
                    {
                        id: "les_algoritma_pemrograman_03_05",
                        title: "Struktur Perulangan While",
                        description: "While muter selama kondisi Oke, nggemez!"
                    },
                    {
                        id: "les_algoritma_pemrograman_03_06",
                        title: "Struktur Perulangan Repeat",
                        description: "Repeat muter tanpa ampun, berani?"
                    },
                    {
                        id: "les_algoritma_pemrograman_03_07",
                        title: "Kombinasi Kondisi dan Perulangan",
                        description: "Nesting: loop plus if, level dewa!"
                    },
                    {
                        id: "les_algoritma_pemrograman_03_08",
                        title: "Optimasi Struktur Kontrol",
                        description: "Rampingin loop, kencengin performa!"
                    }
                ]
            },
            {
                id: "mod_algoritma_pemrograman_04",
                title: "Pengolahan Array",
                lessons: [
                    {
                        id: "les_algoritma_pemrograman_04_01",
                        title: "Definisi Array",
                        description: "Array: kandang data sebaris, simpel!"
                    },
                    {
                        id: "les_algoritma_pemrograman_04_02",
                        title: "Tipe Data Array",
                        description: "Array bisa int, float, string, serba ada!"
                    },
                    {
                        id: "les_algoritma_pemrograman_04_03",
                        title: "Alokasi Memori Array",
                        description: "Tentukan ukuran kandang data, hemat RAM!"
                    },
                    {
                        id: "les_algoritma_pemrograman_04_04",
                        title: "Deklarasi Array",
                        description: "Ikrar dulu sebelum pake array, displin!"
                    },
                    {
                        id: "les_algoritma_pemrograman_04_05",
                        title: "Inisialisasi Array",
                        description: "Isi array biar nggak kosong melenggang!"
                    },
                    {
                        id: "les_algoritma_pemrograman_04_06",
                        title: "Akses Elemen Array",
                        description: "Colek elemen via indeks, tepat sasaran!"
                    },
                    {
                        id: "les_algoritma_pemrograman_04_07",
                        title: "Iterasi Array",
                        description: "Tangkap semua elemen pakai loop, asik!"
                    },
                    {
                        id: "les_algoritma_pemrograman_04_08",
                        title: "Pencarian Elemen Array",
                        description: "Cari harta karun di array, detektif!"
                    },
                    {
                        id: "les_algoritma_pemrograman_04_09",
                        title: "Sorting Array",
                        description: "Urutin array biar rapi kayak Spotify!"
                    },
                    {
                        id: "les_algoritma_pemrograman_04_10",
                        title: "Filtering Array",
                        description: "Saring array, buang sampahnya, kuy!"
                    },
                    {
                        id: "les_algoritma_pemrograman_04_11",
                        title: "Algoritma Pencarian dengan Array",
                        description: "Binary vs linear, siapa cepat dia dapat!"
                    },
                    {
                        id: "les_algoritma_pemrograman_04_12",
                        title: "Algoritma Pengurutan dengan Array",
                        description: "Quick-Merge-Bubble, pacuan kencang!"
                    }
                ]
            },
            {
                id: "mod_algoritma_pemrograman_05",
                title: "Fungsi Prosedur & Rekursi",
                lessons: [
                    {
                        id: "les_algoritma_pemrograman_05_01",
                        title: "Definisi Fungsi",
                        description: "Fungsi: mesin mini siap pakai, praktis!"
                    },
                    {
                        id: "les_algoritma_pemrograman_05_02",
                        title: "Definisi Prosedur",
                        description: "Prosedur: aksi tanpa balasan, tegas!"
                    },
                    {
                        id: "les_algoritma_pemrograman_05_03",
                        title: "Perbedaan Fungsi dan Prosedur",
                        description: "Balikan vs tindakan, pilih sendiri!"
                    },
                    {
                        id: "les_algoritma_pemrograman_05_04",
                        title: "Parameter Fungsi",
                        description: "Kirim bahan ke fungsi, masak cepat!"
                    },
                    {
                        id: "les_algoritma_pemrograman_05_05",
                        title: "Nilai Kembalian Fungsi",
                        description: "Ambil hasil fungsi, jangan lupa!"
                    },
                    {
                        id: "les_algoritma_pemrograman_05_06",
                        title: "Konsep Rekursi",
                        description: "Rekursi: memanggil diri sendiri, unik!"
                    },
                    {
                        id: "les_algoritma_pemrograman_05_07",
                        title: "Penerapan Rekursi",
                        description: "Faktorial & Fibonacci pakai rekursi, mantap!"
                    },
                    {
                        id: "les_algoritma_pemrograman_05_08",
                        title: "Perbandingan Rekursi dan Iterasi",
                        description: "Rekursi elegan, iterasi hemat, pilih!"
                    },
                    {
                        id: "les_algoritma_pemrograman_05_09",
                        title: "Evaluasi Efisiensi Rekursi",
                        description: "Cek stack, hindari ledakan, waspada!"
                    }
                ]
            },
            {
                id: "mod_algoritma_pemrograman_06",
                title: "Penanganan Error & Debugging",
                lessons: [
                    {
                        id: "les_algoritma_pemrograman_06_01",
                        title: "Syntax Error",
                        description: "Salah ketik, komputer ngambek, cek!"
                    },
                    {
                        id: "les_algoritma_pemrograman_06_02",
                        title: "Runtime Error",
                        description: "Crash saat jalan, siaga try-catch!"
                    },
                    {
                        id: "les_algoritma_pemrograman_06_03",
                        title: "Logical Error",
                        description: "Hasil salah tanpa pesan, pusing!"
                    },
                    {
                        id: "les_algoritma_pemrograman_06_04",
                        title: "Teknik Debugging",
                        description: "Trace, print, breakpoint, serbu bug!"
                    },
                    {
                        id: "les_algoritma_pemrograman_06_05",
                        title: "Identifikasi Error",
                        description: "Baca pesan error, klik lampu merah!"
                    },
                    {
                        id: "les_algoritma_pemrograman_06_06",
                        title: "Mekanisme Try-Catch",
                        description: "Try-catch: jaring kesalahan, aman!"
                    },
                    {
                        id: "les_algoritma_pemrograman_06_07",
                        title: "Exception Handling",
                        description: "Tangkap exception, beri jalan keluar!"
                    },
                    {
                        id: "les_algoritma_pemrograman_06_08",
                        title: "Penyusunan Pesan Error Informatif",
                        description: "Error yang ramah bikin ngoding asik!"
                    }
                ]
            }
        ]
    },
    {
        id: "aljabar_linear",
        title: "Aljabar Linear",
        description: "Memahami sistem persamaan linier, eliminasi Gauss & Gauss-Jordan, serta operasi dan sifat matriks sebagai fondasi komputasi numerik.",
        isProgramming: false,
        color: "purple",
        icon: <Calculator size={24} />,
        codeConfig: {
            language: "Markdown",
            defaultCode: "",
            placeholder: "Gunakan notasi LaTeX untuk vektor dan matriks"
        },
        modules: [
            {
                id: "mod_aljabar_linear_01",
                title: "Sistem Persamaan Linier",
                lessons: [
                    {
                        id: "les_aljabar_linear_01_01",
                        title: "Sistem Persamaan Linier",
                        description: "Bikin persamaan banyak jadi satu solusi, gokil!"
                    },
                    {
                        id: "les_aljabar_linear_01_02",
                        title: "Eliminasi Gauss",
                        description: "Hapus baris, dapet eselon, kelar!"
                    },
                    {
                        id: "les_aljabar_linear_01_03",
                        title: "Eliminasi Gauss-Jordan",
                        description: "Lanjutin sampai matriks jadi ID, mantap!"
                    }
                ]
            },
            {
                id: "mod_aljabar_linear_02",
                title: "Matriks dan Operasinya",
                lessons: [
                    {
                        id: "les_aljabar_linear_02_01",
                        title: "Operasi Matriks",
                        description: "Tambah kali matriks kayak nge-game, seru!"
                    },
                    {
                        id: "les_aljabar_linear_02_02",
                        title: "Sifat Matriks",
                        description: "Kompaknya matriks: komutatif, asosiatif, aditif!"
                    },
                    {
                        id: "les_aljabar_linear_02_03",
                        title: "Invers Matriks",
                        description: "Balikin matriks biar bisa ngebagi, kuy!"
                    }
                ]
            },
            {
                id: "mod_aljabar_linear_03",
                title: "Determinan",
                lessons: [
                    {
                        id: "les_aljabar_linear_03_01",
                        title: "Konsep Determinan",
                        description: "Angka sakti tentuin ada nggaknya solusi, wajib!"
                    },
                    {
                        id: "les_aljabar_linear_03_02",
                        title: "Perhitungan Determinan",
                        description: "Kali kurang segitiga, dapet nilai ajaib!"
                    },
                    {
                        id: "les_aljabar_linear_03_03",
                        title: "Sifat-sifat Determinan",
                        description: "Trik swap, scale, tetap nilai mutlak, asik!"
                    },
                    {
                        id: "les_aljabar_linear_03_04",
                        title: "Teorema Determinan dan Pembuktiannya",
                        description: "Bukti teorema bikin otak makin keren!"
                    }
                ]
            },
            {
                id: "mod_aljabar_linear_04",
                title: "Ruang Vektor dan Subruang",
                lessons: [
                    {
                        id: "les_aljabar_linear_04_01",
                        title: "Ruang Vektor",
                        description: "Kumpulin vektor bebas nongkrong, luas!"
                    },
                    {
                        id: "les_aljabar_linear_04_02",
                        title: "Subruang",
                        description: "Ruang mini di dalam ruang besar, cozy!"
                    },
                    {
                        id: "les_aljabar_linear_04_03",
                        title: "Independensi Linier",
                        description: "Vektor gak bisa dijeblosin satu sama lain, keren!"
                    },
                    {
                        id: "les_aljabar_linear_04_04",
                        title: "Basis",
                        description: "Vektor andalan bikin semua terbentuk, sip!"
                    },
                    {
                        id: "les_aljabar_linear_04_05",
                        title: "Dimensi",
                        description: "Hitung jumlah anggota basis, cepet!"
                    }
                ]
            },
            {
                id: "mod_aljabar_linear_05",
                title: "Transformasi Linier",
                lessons: [
                    {
                        id: "les_aljabar_linear_05_01",
                        title: "Transformasi Linier",
                        description: "Muter-muterin vektor tetap garis, magis!"
                    },
                    {
                        id: "les_aljabar_linear_05_02",
                        title: "Kernel Transformasi",
                        description: "Vektor yang lenyap pasca transform, mistis!"
                    },
                    {
                        id: "les_aljabar_linear_05_03",
                        title: "Image Transformasi",
                        description: "Hasil jepretan transform, keluaran kece!"
                    }
                ]
            },
            {
                id: "mod_aljabar_linear_06",
                title: "Eigenvalue dan Eigenvektor",
                lessons: [
                    {
                        id: "les_aljabar_linear_06_01",
                        title: "Nilai Eigen (Eigenvalue)",
                        description: "Nilai saksi vektor tetap arah, mantul!"
                    },
                    {
                        id: "les_aljabar_linear_06_02",
                        title: "Vektor Eigen (Eigenvektor)",
                        description: "Arah kece yang gak goyah ketika dimutar!"
                    },
                    {
                        id: "les_aljabar_linear_06_03",
                        title: "Diagonalisasi Matriks",
                        description: "Bikin matriks jadi serba diagonal, simple!"
                    },
                    {
                        id: "les_aljabar_linear_06_04",
                        title: "Ruang Null Matriks",
                        description: "Kamp vektor yang diem-dirumah saja, aman!"
                    }
                ]
            },
            {
                id: "mod_aljabar_linear_07",
                title: "Ortogonalitas",
                lessons: [
                    {
                        id: "les_aljabar_linear_07_01",
                        title: "Ortogonalisasi Gram-Schmidt",
                        description: "Bikin vektor saling tegak, rapih!"
                    },
                    {
                        id: "les_aljabar_linear_07_02",
                        title: "Ruang Ortogonal",
                        description: "Vektor yang saling 90° ketemuan, asik!"
                    }
                ]
            },
            {
                id: "mod_aljabar_linear_08",
                title: "Aplikasi Aljabar Linier dalam Statistika",
                lessons: [
                    {
                        id: "les_aljabar_linear_08_01",
                        title: "Regresi Linier Berbasis Matriks",
                        description: "Ramal data pakai matriks, jitu!"
                    },
                    {
                        id: "les_aljabar_linear_08_02",
                        title: "Analisis Komponen Utama (PCA)",
                        description: "Redupin dimensi tapi info tetap on, wah!"
                    },
                    {
                        id: "les_aljabar_linear_08_03",
                        title: "Analisis Multivariat Berbasis Matriks",
                        description: "Data banyak ditjinjing matriks, maknyus!"
                    }
                ]
            }
        ]
    },
    {
        id: "analisis_data_kategorik",
        title: "Analisis Data Kategorik",
        description: "Pelajari konsep dasar hingga teknik konstruksi penelitian untuk data kategorik, termasuk skala, sumber, dan metode pengambilan data.",
        isProgramming: false,
        color: "purple",
        icon: <BarChart2 size={24} />,
        codeConfig: {
            language: "Python",
            defaultCode: "import pandas as pd\nprint('Analisis Data Kategorik')",
            placeholder: "# Tulis kode analisis data kategorik Anda di sini"
        },
        modules: [
            {
                id: "mod_analisis_data_kategorik_01",
                title: "Konsep Dasar dan Pengambilan Data",
                lessons: [
                    {
                        id: "les_analisis_data_kategorik_01_01",
                        title: "Konsep Dasar Data Kategorik",
                        description: "Kupas tuntas materi Konsep Dasar Data Kategorik bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_01_02",
                        title: "Skala Data Kategorik",
                        description: "Kupas tuntas materi Skala Data Kategorik bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_01_03",
                        title: "Sumber Data Kategorik",
                        description: "Kupas tuntas materi Sumber Data Kategorik bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_01_04",
                        title: "Teknik Konstruksi Penelitian Kategorik",
                        description: "Kupas tuntas materi Teknik Konstruksi Penelitian Kategorik bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_01_05",
                        title: "Metode Pengambilan Data Kategorik",
                        description: "Kupas tuntas materi Metode Pengambilan Data Kategorik bareng ahlinya. Gas belajar!"
                    }
                ]
            },
            {
                id: "mod_analisis_data_kategorik_02",
                title: "Tabel Kontingensi",
                lessons: [
                    {
                        id: "les_analisis_data_kategorik_02_01",
                        title: "Tabel Kontingensi",
                        description: "Kupas tuntas materi Tabel Kontingensi bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_02_02",
                        title: "Penyusunan Tabel Kontingensi",
                        description: "Kupas tuntas materi Penyusunan Tabel Kontingensi bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_02_03",
                        title: "Interpretasi Tabel Kontingensi",
                        description: "Kupas tuntas materi Interpretasi Tabel Kontingensi bareng ahlinya. Gas belajar!"
                    }
                ]
            },
            {
                id: "mod_analisis_data_kategorik_03",
                title: "Statistika Inferensi dan Uji Kontingensi",
                lessons: [
                    {
                        id: "les_analisis_data_kategorik_03_01",
                        title: "Distribusi Probabilitas Data Kategorik",
                        description: "Kupas tuntas materi Distribusi Probabilitas Data Kategorik bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_03_02",
                        title: "Statistika Inferensi Data Kategorik",
                        description: "Kupas tuntas materi Statistika Inferensi Data Kategorik bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_03_03",
                        title: "Estimasi Maximum Likelihood (MLE)",
                        description: "Kupas tuntas materi Estimasi Maximum Likelihood (MLE) bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_03_04",
                        title: "Uji Wald",
                        description: "Kupas tuntas materi Uji Wald bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_03_05",
                        title: "Uji Likelihood Ratio",
                        description: "Kupas tuntas materi Uji Likelihood Ratio bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_03_06",
                        title: "Solusi Uji Kontingensi",
                        description: "Kupas tuntas materi Solusi Uji Kontingensi bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_03_07",
                        title: "Uji Independensi",
                        description: "Kupas tuntas materi Uji Independensi bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_03_08",
                        title: "Resiko Relatif (Relative Risk)",
                        description: "Kupas tuntas materi Resiko Relatif (Relative Risk) bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_03_09",
                        title: "Odds Ratio",
                        description: "Kupas tuntas materi Odds Ratio bareng ahlinya. Gas belajar!"
                    }
                ]
            },
            {
                id: "mod_analisis_data_kategorik_04",
                title: "Model Regresi Logistik",
                lessons: [
                    {
                        id: "les_analisis_data_kategorik_04_01",
                        title: "Regresi Logistik Biner",
                        description: "Kupas tuntas materi Regresi Logistik Biner bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_04_02",
                        title: "Regresi Logistik Ordinal",
                        description: "Kupas tuntas materi Regresi Logistik Ordinal bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_04_03",
                        title: "Estimasi Parameter Regresi Logistik",
                        description: "Kupas tuntas materi Estimasi Parameter Regresi Logistik bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_04_04",
                        title: "Pengujian Model Regresi Logistik",
                        description: "Kupas tuntas materi Pengujian Model Regresi Logistik bareng ahlinya. Gas belajar!"
                    }
                ]
            },
            {
                id: "mod_analisis_data_kategorik_05",
                title: "Regresi dengan Prediktor Kategorik",
                lessons: [
                    {
                        id: "les_analisis_data_kategorik_05_01",
                        title: "Regresi Peubah Dummy",
                        description: "Kupas tuntas materi Regresi Peubah Dummy bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_05_02",
                        title: "Konstruksi Variabel Dummy dari Prediktor Kategorik",
                        description: "Kupas tuntas materi Konstruksi Variabel Dummy dari Prediktor Kategorik bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_05_03",
                        title: "Pemodelan Variabel Dummy dalam Regresi",
                        description: "Kupas tuntas materi Pemodelan Variabel Dummy dalam Regresi bareng ahlinya. Gas belajar!"
                    }
                ]
            },
            {
                id: "mod_analisis_data_kategorik_06",
                title: "Konstruksi Data Kualitatif",
                lessons: [
                    {
                        id: "les_analisis_data_kategorik_06_01",
                        title: "Teknik Penelitian Kualitatif Lapangan",
                        description: "Kupas tuntas materi Teknik Penelitian Kualitatif Lapangan bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_06_02",
                        title: "Konstruksi Data Kategorik dari Data Kualitatif",
                        description: "Kupas tuntas materi Konstruksi Data Kategorik dari Data Kualitatif bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_06_03",
                        title: "Pengembangan Instrumen Penelitian",
                        description: "Kupas tuntas materi Pengembangan Instrumen Penelitian bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_06_04",
                        title: "Transformasi Data",
                        description: "Kupas tuntas materi Transformasi Data bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_06_05",
                        title: "Uji Validitas Data",
                        description: "Kupas tuntas materi Uji Validitas Data bareng ahlinya. Gas belajar!"
                    }
                ]
            },
            {
                id: "mod_analisis_data_kategorik_07",
                title: "Komputasi dan Praktikum Data Kategorik",
                lessons: [
                    {
                        id: "les_analisis_data_kategorik_07_01",
                        title: "Analisis Data Kategorik dengan Software R",
                        description: "Kupas tuntas materi Analisis Data Kategorik dengan Software R bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_07_02",
                        title: "Analisis Data Kategorik dengan Software SPSS",
                        description: "Kupas tuntas materi Analisis Data Kategorik dengan Software SPSS bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_07_03",
                        title: "Interpretasi Output Software Statistika",
                        description: "Kupas tuntas materi Interpretasi Output Software Statistika bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_07_04",
                        title: "Penyusunan Laporan Hasil Analisis Statistika",
                        description: "Kupas tuntas materi Penyusunan Laporan Hasil Analisis Statistika bareng ahlinya. Gas belajar!"
                    }
                ]
            },
            {
                id: "mod_analisis_data_kategorik_08",
                title: "Implementasi dan Publikasi Ilmiah",
                lessons: [
                    {
                        id: "les_analisis_data_kategorik_08_01",
                        title: "Analisis Kasus Riil Data Kategorik",
                        description: "Kupas tuntas materi Analisis Kasus Riil Data Kategorik bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_08_02",
                        title: "Penyusunan Portofolio Analisis Data",
                        description: "Kupas tuntas materi Penyusunan Portofolio Analisis Data bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_analisis_data_kategorik_08_03",
                        title: "Penulisan Draf Artikel Jurnal Data Kategorik",
                        description: "Kupas tuntas materi Penulisan Draf Artikel Jurnal Data Kategorik bareng ahlinya. Gas belajar!"
                    }
                ]
            }
        ]
    },
    {
        id: "analisis-perancangan-survey",
        title: "Analisis & Perancangan Survei",
        description: "Pelajari cara merancang survei yang valid mulai dari merumuskan masalah, menyusun hipotesis, hingga konsep statistika survei.",
        isProgramming: false,
        color: "indigo",
        icon: <BarChart2 size={24} />,
        codeConfig: {
            language: "Markdown",
            defaultCode: "# Rancang survei Anda di sini",
            placeholder: "Tulis kerangka survei ..."
        },
        modules: [
            {
                id: "mod_analisis-perancangan-survey_01",
                title: "Konsep Dasar Survei",
                lessons: [
                    {
                        id: "les_analisis-perancangan-survey_01_01",
                        title: "Pengantar Analisis dan Perancangan Survei",
                        description: "Kuy, kenalan dulu sama survei yang gokil!"
                    },
                    {
                        id: "les_analisis-perancangan-survey_01_02",
                        title: "Konsep Dasar Statistika dalam Survei",
                        description: "Statistik bikin survei makin mantap, gak ngawur!"
                    }
                ]
            },
            {
                id: "mod_analisis-perancangan-survey_02",
                title: "Perumusan Masalah dan Tujuan",
                lessons: [
                    {
                        id: "les_analisis-perancangan-survey_02_01",
                        title: "Rumusan Masalah Survei",
                        description: "Tulis masalah yang jitu biar survei mu kece!"
                    },
                    {
                        id: "les_analisis-perancangan-survey_02_02",
                        title: "Penyusunan Hipotesis Penelitian",
                        description: "Hipotesis bikin tebakan mu keren kayak detektif."
                    },
                    {
                        id: "les_analisis-perancangan-survey_02_03",
                        title: "Penentuan Tujuan Survei",
                        description: "Tujuan jelas, arah survei gak nyasar."
                    },
                    {
                        id: "les_analisis-perancangan-survey_02_04",
                        title: "Etika dalam Penelitian Survei",
                        description: "Etika juara, data bersih tanpa hoax."
                    }
                ]
            },
            {
                id: "mod_analisis-perancangan-survey_03",
                title: "Desain Instrumen Survei",
                lessons: [
                    {
                        id: "les_analisis-perancangan-survey_03_01",
                        title: "Desain Kuesioner",
                        description: "Kuesioner kece, responden betah isi."
                    },
                    {
                        id: "les_analisis-perancangan-survey_03_02",
                        title: "Survei Pendahuluan (Pilot Survey)",
                        description: "Pilot survey, uji coba seru sebelum heboh."
                    }
                ]
            },
            {
                id: "mod_analisis-perancangan-survey_04",
                title: "Validitas dan Reliabilitas",
                lessons: [
                    {
                        id: "les_analisis-perancangan-survey_04_01",
                        title: "Uji Validitas Instrumen",
                        description: "Validitas on, alat ukurmu anti fail."
                    },
                    {
                        id: "les_analisis-perancangan-survey_04_02",
                        title: "Uji Reliabilitas Instrumen",
                        description: "Reliabel = data tetap nendang diulang kali."
                    },
                    {
                        id: "les_analisis-perancangan-survey_04_03",
                        title: "Evaluasi dan Revisi Instrumen",
                        description: "Evaluasi dan revisi, upgrade alat survei mu!"
                    }
                ]
            },
            {
                id: "mod_analisis-perancangan-survey_05",
                title: "Teknik Sampling",
                lessons: [
                    {
                        id: "les_analisis-perancangan-survey_05_01",
                        title: "Teknik Penarikan Sampel Berpeluang (Probability Sampling)",
                        description: "Probability sampling, asiknya acak tapi teori!"
                    },
                    {
                        id: "les_analisis-perancangan-survey_05_02",
                        title: "Teknik Penarikan Sampel Tidak Berpeluang (Non-Probability Sampling)",
                        description: "Non-probability, kreatif cari sampelnya!"
                    },
                    {
                        id: "les_analisis-perancangan-survey_05_03",
                        title: "Kesalahan Pengambilan Sampel (Sampling Error)",
                        description: "Sampling error, si jahil yang wajib diawasin."
                    }
                ]
            },
            {
                id: "mod_analisis-perancangan-survey_06",
                title: "Organisasi dan Administrasi Lapangan",
                lessons: [
                    {
                        id: "les_analisis-perancangan-survey_06_01",
                        title: "Teknik Wawancara",
                        description: "Wawancara triknya, biar responden klepek-klepek."
                    },
                    {
                        id: "les_analisis-perancangan-survey_06_02",
                        title: "Prosedur Pemilihan Responden",
                        description: "Pilih responden pinter, data mu anti ngambang."
                    }
                ]
            },
            {
                id: "mod_analisis-perancangan-survey_07",
                title: "Manajemen Data Survei",
                lessons: [
                    {
                        id: "les_analisis-perancangan-survey_07_01",
                        title: "Entri Data Hasil Survei",
                        description: "Entri data cepet, hasil survei langsung oke."
                    }
                ]
            },
            {
                id: "mod_analisis-perancangan-survey_08",
                title: "Analisis Data Survei",
                lessons: [
                    {
                        id: "les_analisis-perancangan-survey_08_01",
                        title: "Pengolahan Data Statistika",
                        description: "Olah data mantep, bikin statistikmu ciamik."
                    },
                    {
                        id: "les_analisis-perancangan-survey_08_02",
                        title: "Metode Analisis Data Statistika",
                        description: "Metode analisis kece, temuan mu anti mainstream."
                    }
                ]
            },
            {
                id: "mod_analisis-perancangan-survey_09",
                title: "Praktik Lapangan",
                lessons: [
                    {
                        id: "les_analisis-perancangan-survey_09_01",
                        title: "Simulasi Survei Lapangan Komprehensif",
                        description: "Simulasi lapangan seru, survei praktik langsung jago!"
                    }
                ]
            },
            {
                id: "mod_analisis-perancangan-survey_10",
                title: "Pelaporan dan Publikasi",
                lessons: [
                    {
                        id: "les_analisis-perancangan-survey_10_01",
                        title: "Penyusunan Laporan Hasil Survei",
                        description: "Laporan rapi, hasil survei mu kelas dunia."
                    },
                    {
                        id: "les_analisis-perancangan-survey_10_02",
                        title: "Presentasi Hasil Survei",
                        description: "Presentasi keren, audience langsung terpana."
                    },
                    {
                        id: "les_analisis-perancangan-survey_10_03",
                        title: "Penyusunan Artikel Publikasi Ilmiah",
                        description: "Tulis artikel publikasi, jadi cendekia gokil!"
                    }
                ]
            }
        ]
    },
    {
        id: "analisis-perubahan-ganda",
        title: "Analisis Peubah Ganda",
        description: "Belajar mengelola, memvisualisasikan dan menganalisis data berdimensi tinggi dengan statistik multivariat—mulai dari geometri sampel, matriks kovariansi, hingga generalized variance.",
        isProgramming: false,
        color: "purple",
        icon: <BarChart2 size={24} />,
        codeConfig: {
            language: "Python",
            defaultCode: "import pandas as pd\nimport numpy as np",
            placeholder: "Tulis kode analisis data multivariat di sini..."
        },
        modules: [
            {
                id: "mod_analisis-perubahan-ganda_01",
                title: "Konsep Dasar dan Pengelolaan Data",
                lessons: [
                    {
                        id: "les_analisis-perubahan-ganda_01_01",
                        title: "Pengantar Analisis Peubah Ganda",
                        description: "Kenalan sama data multivariat, gokil banget!"
                    },
                    {
                        id: "les_analisis-perubahan-ganda_01_02",
                        title: "Teknik Pengelolaan Data Peubah Ganda",
                        description: "Rapikan data multipihak, anti ngawur."
                    }
                ]
            },
            {
                id: "mod_analisis-perubahan-ganda_02",
                title: "Geometri Sampel dan Random Sampling",
                lessons: [
                    {
                        id: "les_analisis-perubahan-ganda_02_01",
                        title: "Geometri Sampel Peubah Ganda",
                        description: "Gambar data di dimensi tinggi, mantap!"
                    },
                    {
                        id: "les_analisis-perubahan-ganda_02_02",
                        title: "Matriks Variansi Kovariansi",
                        description: "Rumus ukur keruwetan variabel, seru!"
                    },
                    {
                        id: "les_analisis-perubahan-ganda_02_03",
                        title: "Variansi Diperumum (Generalized Variance)",
                        description: "Volume data sekaligus, kece!"
                    }
                ]
            },
            {
                id: "mod_analisis-perubahan-ganda_03",
                title: "Distribusi Normal Multivariat dan Inferensi",
                lessons: [
                    {
                        id: "les_analisis-perubahan-ganda_03_01",
                        title: "Bentuk Distribusi Normal Multivariat",
                        description: "Lonceng superdimensi, kuy!"
                    },
                    {
                        id: "les_analisis-perubahan-ganda_03_02",
                        title: "Estimasi Parameter dengan Maximum Likelihood Estimation (MLE)",
                        description: "Tebak parameter paling ngacir."
                    },
                    {
                        id: "les_analisis-perubahan-ganda_03_03",
                        title: "Pengujian Kenormalan Multivariat",
                        description: "Tes normal nggak pake dosa."
                    },
                    {
                        id: "les_analisis-perubahan-ganda_03_04",
                        title: "Deteksi Outlier Data Multivariat",
                        description: "Cari si nakal di tengah kawanan."
                    },
                    {
                        id: "les_analisis-perubahan-ganda_03_05",
                        title: "Uji Rataan dengan Varians Diketahui",
                        description: "Bandingin rataan, varians jelas."
                    },
                    {
                        id: "les_analisis-perubahan-ganda_03_06",
                        title: "Uji Rataan dengan Varians Tidak Diketahui",
                        description: "Rataan beda, varians misteri."
                    },
                    {
                        id: "les_analisis-perubahan-ganda_03_07",
                        title: "Uji Likelihood Ratio",
                        description: "Bandingkan likelihood, mantul!"
                    }
                ]
            },
            {
                id: "mod_analisis-perubahan-ganda_04",
                title: "Regresi Multivariat dan Korelasi Kanonik",
                lessons: [
                    {
                        id: "les_analisis-perubahan-ganda_04_01",
                        title: "Model Klasik Multivariat",
                        description: "Model jadul tapi kece."
                    },
                    {
                        id: "les_analisis-perubahan-ganda_04_02",
                        title: "Model Regresi Linear Multivariat",
                        description: "Prediksi banyak respon sekaligus."
                    },
                    {
                        id: "les_analisis-perubahan-ganda_04_03",
                        title: "Estimasi Parameter Regresi Multivariat",
                        description: "Tebak koefisien multipihak, asik!"
                    },
                    {
                        id: "les_analisis-perubahan-ganda_04_04",
                        title: "Analisis Korelasi Kanonik",
                        description: "Korelasi super pasangan serasi."
                    }
                ]
            },
            {
                id: "mod_analisis-perubahan-ganda_05",
                title: "Analisis Komponen Utama dan Faktor",
                lessons: [
                    {
                        id: "les_analisis-perubahan-ganda_05_01",
                        title: "Principal Component Analysis (PCA)",
                        description: "Ringkas data tanpa ngeluh."
                    },
                    {
                        id: "les_analisis-perubahan-ganda_05_02",
                        title: "Analisis Faktor",
                        description: "Ngulik faktor laten di balik data."
                    }
                ]
            },
            {
                id: "mod_analisis-perubahan-ganda_06",
                title: "Analisis Diskriminan dan Clustering",
                lessons: [
                    {
                        id: "les_analisis-perubahan-ganda_06_01",
                        title: "Pendekatan Aljabar Multivariat",
                        description: "Matrix power, keren abis!"
                    },
                    {
                        id: "les_analisis-perubahan-ganda_06_02",
                        title: "Analisis Diskriminan",
                        description: "Bedain kelas, mantap jiwa."
                    },
                    {
                        id: "les_analisis-perubahan-ganda_06_03",
                        title: "Analisis Cluster (Clustering)",
                        description: "Kumpulin si mirip-mirip, gaul!"
                    }
                ]
            },
            {
                id: "mod_analisis-perubahan-ganda_07",
                title: "Praktikum Software Statistika",
                lessons: [
                    {
                        id: "les_analisis-perubahan-ganda_07_01",
                        title: "Analisis Data Multivariat Menggunakan Software R",
                        description: "Coding R, hasilnya juara."
                    },
                    {
                        id: "les_analisis-perubahan-ganda_07_02",
                        title: "Analisis Data Multivariat Menggunakan Software SPSS",
                        description: "Klik SPSS, analisis cepet kelar."
                    }
                ]
            },
            {
                id: "mod_analisis-perubahan-ganda_08",
                title: "Implementasi Proyek Akhir",
                lessons: [
                    {
                        id: "les_analisis-perubahan-ganda_08_01",
                        title: "Analisis Data Riil Peubah Ganda",
                        description: "Data asli, insightnya dasyat."
                    },
                    {
                        id: "les_analisis-perubahan-ganda_08_02",
                        title: "Interpretasi Hasil Analisis Multivariat",
                        description: "Ceritakan temuan, bikin melek."
                    },
                    {
                        id: "les_analisis-perubahan-ganda_08_03",
                        title: "Penyusunan Laporan Analisis Multivariat",
                        description: "Tulis laporan, pamer ilmu!"
                    }
                ]
            }
        ]
    },
    {
        id: "analisis_runtun_waktu",
        title: "Analisis Runtun Waktu",
        description: "Pelajari cara mengenali pola data berurutan, membedakannya dari data cross-section/longitudinal, serta meramalkan tren masa depan dengan teknik runtun-waktu.",
        isProgramming: false,
        color: "teal",
        icon: <BarChart2 size={24} />,
        codeConfig: {
            language: "Python",
            defaultCode: "import pandas as pd\nimport matplotlib.pyplot as plt\n\n# Contoh data runtun waktu\nseries = pd.Series([120,135,147,162,178])\nseries.plot(title='Data Runtun Waktu')\nplt.show()",
            placeholder: "# Tulis kode Python untuk analisis runtun waktu"
        },
        modules: [
            {
                id: "mod_analisis_runtun_waktu_01",
                title: "Istilah Dasar Analisis Runtun Waktu",
                lessons: [
                    {
                        id: "les_analisis_runtun_waktu_01_01",
                        title: "Definisi data runtun waktu",
                        description: "Kenalan sama data chronology, gokil!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_01_02",
                        title: "Perbedaan data runtun waktu dengan data cross section",
                        description: "Time vs slice, beda tipis, mantap!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_01_03",
                        title: "Perbedaan data runtun waktu dengan data longitudinal",
                        description: "Long vs long, tapi beda fokus, seru!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_01_04",
                        title: "Definisi peramalan",
                        description: "Nebak masa depan pake data, apakah jitu?"
                    },
                    {
                        id: "les_analisis_runtun_waktu_01_05",
                        title: "Kegunaan peramalan",
                        description: "Mencegah shock, bikin bisnis tetep on track!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_01_06",
                        title: "Metode peramalan",
                        description: "Pilih jurus sesuai mood datamu, kuy!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_01_07",
                        title: "Proses peramalan",
                        description: "Step by step sampai angka muncul, gaskeun!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_01_08",
                        title: "Komponen runtun waktu",
                        description: "Trend, musim, random, ketiganya party!"
                    }
                ]
            },
            {
                id: "mod_analisis_runtun_waktu_02",
                title: "Konsep Dasar Analisis Runtun Waktu",
                lessons: [
                    {
                        id: "les_analisis_runtun_waktu_02_01",
                        title: "Proses Stokastik",
                        description: "Random walk tapi punya pattern, daebak!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_02_02",
                        title: "Proses Stasioner",
                        description: "Data yang kalem, gak naik-turun liar!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_02_03",
                        title: "Fungsi autokovariansi",
                        description: "Ukur cinta data sama dirinya sendiri, sweet!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_02_04",
                        title: "Fungsi autokorelasi",
                        description: "PACAR: koefisien autorelasi, auto klepet!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_02_05",
                        title: "Fungsi autokorelasi parsial",
                        description: "PACF: korupsi lag, tersisa murni!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_02_06",
                        title: "Proses white noise",
                        description: "Gangguan imut, ibarat garam forecast!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_02_07",
                        title: "Differencing",
                        description: "Bedain terus sampai datanya diam, mantul!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_02_08",
                        title: "Prinsip parsimony",
                        description: "Model simpel tapi deadly akurat, less is more!"
                    }
                ]
            },
            {
                id: "mod_analisis_runtun_waktu_03",
                title: "Model Deterministik",
                lessons: [
                    {
                        id: "les_analisis_runtun_waktu_03_01",
                        title: "Single Moving Average",
                        description: "Rata-rata sliding, bikin data jadi lembut!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_03_02",
                        title: "Double Moving Average",
                        description: "Smooth dua kali, tamparan kedua lebih halus!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_03_03",
                        title: "Single Exponential Smoothing",
                        description: "Weight ke masa lalu, alpha jadi juragan!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_03_04",
                        title: "Double Exponential Smoothing",
                        description: "Trend + level, ekstra creamy!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_03_05",
                        title: "Metode Winter untuk musiman aditif",
                        description: "Tambahin musim, matematika bintang lima!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_03_06",
                        title: "Metode Winter untuk musiman multiplikatif",
                        description: "Kali musim, bikin seasonal effect nendang!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_03_07",
                        title: "Regresi trend",
                        description: "Garis lurus ngejar kemiringan waktu, kencaaang!"
                    }
                ]
            },
            {
                id: "mod_analisis_runtun_waktu_04",
                title: "Model Runtun Waktu Stasioner",
                lessons: [
                    {
                        id: "les_analisis_runtun_waktu_04_01",
                        title: "Model Autoregressive (AR)",
                        description: "Data sekarang = data lalu + remix, mantap!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_04_02",
                        title: "Model Moving Average (MA)",
                        description: "Error lalu jd sahabat baru, unyu!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_04_03",
                        title: "Model Autoregressive Moving Average (ARMA)",
                        description: "AR + MA, bos hybrid ramah lingkungan!"
                    }
                ]
            },
            {
                id: "mod_analisis_runtun_waktu_05",
                title: "Model Runtun Waktu Nonstasioner",
                lessons: [
                    {
                        id: "les_analisis_runtun_waktu_05_01",
                        title: "Nonstasioner dalam mean",
                        description: "Mean-nya ngacir, kudu dikejar!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_05_02",
                        title: "Model Autoregressive Integrated (ARI)",
                        description: "AR setelah differencing, level up!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_05_03",
                        title: "Model Integrated Moving Average (IMA)",
                        description: "MA pasca differencing, tetap elegan!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_05_04",
                        title: "Model Autoregressive Integrated Moving Average (ARIMA)",
                        description: "Tiga kombo sakti, panggilan superhero!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_05_05",
                        title: "Nonstasioner dalam variansi",
                        description: "Variansi naik-turun naik, kaya roket!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_05_06",
                        title: "Nonstasioner dalam autokovariansi",
                        description: "Autokov pun ikut joget, semrawut!"
                    }
                ]
            },
            {
                id: "mod_analisis_runtun_waktu_06",
                title: "Estimasi Parameter Model",
                lessons: [
                    {
                        id: "les_analisis_runtun_waktu_06_01",
                        title: "Estimasi parameter metode momen",
                        description: "Samakan momen, matematika jadi gampang!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_06_02",
                        title: "Estimasi parameter metode kuadrat terkecil",
                        description: "Minim error kuadrat, dapet jodoh sempurna!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_06_03",
                        title: "Estimasi parameter metode maksimum likelihood estimator",
                        description: "Likelihood tinggi, probabilita juara!"
                    }
                ]
            },
            {
                id: "mod_analisis_runtun_waktu_07",
                title: "Diagnostic Checking dan Pemilihan Model",
                lessons: [
                    {
                        id: "les_analisis_runtun_waktu_07_01",
                        title: "Uji signifikansi parameter",
                        description: "Tes apakah koef benar-benar penting, seleksi!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_07_02",
                        title: "Uji Kesesuaian Model",
                        description: "Cocokkan model sama realita, gas!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_07_03",
                        title: "Overfitting model",
                        description: "Model kelewat pinter, tapi cupu dilapangan!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_07_04",
                        title: "Pemilihan Model Terbaik",
                        description: "Pilih pacar model, AIC BIC jadi cupid!"
                    }
                ]
            },
            {
                id: "mod_analisis_runtun_waktu_08",
                title: "Peramalan (Forecasting)",
                lessons: [
                    {
                        id: "les_analisis_runtun_waktu_08_01",
                        title: "Pendugaan minimum mean square error",
                        description: "MMSE bikin galat minimal, adem ayem!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_08_02",
                        title: "Komputasi peramalan",
                        description: "Klik software, angka masa depan muncul, drr!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_08_03",
                        title: "Peramalan ARIMA",
                        description: "Forecast pakai ARIMA, mantap jiwa!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_08_04",
                        title: "Updating forecast",
                        description: "Update prediksi tiap data baru, stay fresh!"
                    }
                ]
            },
            {
                id: "mod_analisis_runtun_waktu_09",
                title: "Model Stokastik Musiman",
                lessons: [
                    {
                        id: "les_analisis_runtun_waktu_09_01",
                        title: "Model ARIMA(P D Q)s Musiman non-multiplikatif stasioner",
                        description: "Musiman simple, seasonal ARMA, kuy!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_09_02",
                        title: "Model ARIMA(P D Q)s Musiman non-multiplikatif Non-stasioner",
                        description: "Seasonal differencing dulu, baru ARIMA!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_09_03",
                        title: "Model ARIMA(p d q)(P D Q)s Musiman Multiplikatif stasioner",
                        description: "Seasonal x nonseasonal, perkalian gokil!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_09_04",
                        title: "Model ARIMA(p d q)(P D Q)s Musiman non-stasioner dalam rata-rata non musiman",
                        description: "Mean global ngacir, seasonal steady!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_09_05",
                        title: "Model ARIMA(p d q)(P D Q)s Musiman Non stasioner dalam rata-rata musiman",
                        description: "Mean seasonal galau, nonseasonal kalem!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_09_06",
                        title: "Model ARIMA(p d q)(P D Q)s Musiman non-stasioner dalam rata-rata non-musiman dan rata-rata musiman",
                        description: "Double ngacir, full differencing party!"
                    }
                ]
            },
            {
                id: "mod_analisis_runtun_waktu_10",
                title: "Praktikum Analisis Runtun Waktu",
                lessons: [
                    {
                        id: "les_analisis_runtun_waktu_10_01",
                        title: "Penerapan metode ARIMA Box-Jenkins menggunakan software statistik",
                        description: "Klik-klik Box-Jenkins, hasil langsung juara!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_10_02",
                        title: "Interpretasi output software statistik",
                        description: "Baca angka jadi story, asik!"
                    },
                    {
                        id: "les_analisis_runtun_waktu_10_03",
                        title: "Penyusunan laporan hasil analisis runtun waktu",
                        description: "Tulis tembok data jadi cerita compact, selesai!"
                    }
                ]
            }
        ]
    },
    {
        id: "analisis_regresi",
        title: "Analisis Regresi",
        description: "Belajar membangun model statistik untuk menjelaskan hubungan antar variabel, mulai dari scatter-plot hingga regresi linier sederhana.",
        isProgramming: false,
        color: "indigo",
        icon: <BarChart2 size={24} />,
        codeConfig: {
            language: "Python",
            defaultCode: "import pandas as pd, seaborn as sns, matplotlib.pyplot as plt\nfrom sklearn.linear_model import LinearRegression\n\n# Contoh: prediksi nilai ujian berdasarkan jam belajar\nX = [[1],[2],[3],[4],[5]]\ny = [60,70,80,85,95]\nmodel = LinearRegression().fit(X, y)\nprint('Prediksi untuk 6 jam:', model.predict([[6]])[0])",
            placeholder: "Tulis kode Python untuk fitting model regresi Anda di sini …"
        },
        modules: [
            {
                id: "mod_analisis_regresi_01",
                title: "Konsep Dasar Regresi dan Korelasi",
                lessons: [
                    {
                        id: "les_analisis_regresi_01_01",
                        title: "Konsep Hubungan Antar Variabel",
                        description: "Kuy ngerti dulu 'kencan' antar variabel sebelum nge-date bareng regresi!"
                    },
                    {
                        id: "les_analisis_regresi_01_02",
                        title: "Garis Lurus dan Scatter Plot",
                        description: "Scatter plot bikin data jadi 'bintang tamu' di peta hubungan yang gokil."
                    },
                    {
                        id: "les_analisis_regresi_01_03",
                        title: "Fitting Garis Lurus (Regresi Linier)",
                        description: "Geser-geser garis sampai nyentuh titik-titik data, mantap nempel!"
                    },
                    {
                        id: "les_analisis_regresi_01_04",
                        title: "Konsep Korelasi",
                        description: "Korelasi: seberapa mesra si X dan Y, cek kekompakan mereka disini!"
                    }
                ]
            },
            {
                id: "mod_analisis_regresi_02",
                title: "Analisis Regresi Linier Sederhana",
                lessons: [
                    {
                        id: "les_analisis_regresi_02_01",
                        title: "Model Regresi Linier Sederhana",
                        description: "Rumus kecil tapi sakti, ramal Y cuma pakai satu X aja."
                    },
                    {
                        id: "les_analisis_regresi_02_02",
                        title: "Asumsi Regresi Linier Sederhana",
                        description: "Sebelum pamer model, pastikan asumsi 'lulus tes kesehatan' dulu."
                    },
                    {
                        id: "les_analisis_regresi_02_03",
                        title: "Garis Regresi",
                        description: "Garis ajaib yang bikin data jadi story line paling seru."
                    },
                    {
                        id: "les_analisis_regresi_02_04",
                        title: "Pendugaan Parameter Metode Kuadrat Terkecil (MKT)",
                        description: "MKT: cari jarak terpendek biar galat kedinginan di pojok."
                    },
                    {
                        id: "les_analisis_regresi_02_05",
                        title: "Hipotesis Regresi Linier Sederhana",
                        description: "Uji nyali: garis beneran berguna atau cuma 'pasang body'?"
                    },
                    {
                        id: "les_analisis_regresi_02_06",
                        title: "Tabel ANAVA Regresi Linier Sederhana",
                        description: "Tabel ANAVA: bikin regresi ikut festival kolom yang rapi."
                    }
                ]
            },
            {
                id: "mod_analisis_regresi_03",
                title: "Inferensi Regresi Linier Sederhana",
                lessons: [
                    {
                        id: "les_analisis_regresi_03_01",
                        title: "Koefisien Determinasi",
                        description: "R² kasih tahu seberapa kece model ini ngejelasin variasi data."
                    },
                    {
                        id: "les_analisis_regresi_03_02",
                        title: "Persamaan Penduga Regresi",
                        description: "Tulis rumus, jadi senjata buat nge-predict Y di masa depan."
                    },
                    {
                        id: "les_analisis_regresi_03_03",
                        title: "Prediksi Nilai Penduga Y",
                        description: "Ramalan Y ala regresi: lebih asik dari meramal cinta!"
                    },
                    {
                        id: "les_analisis_regresi_03_04",
                        title: "Variansi Bagi Penduga Parameter",
                        description: "Tahu seberapa 'gemuk' galat di setiap koefisien, biar PD."
                    },
                    {
                        id: "les_analisis_regresi_03_05",
                        title: "Selang Kepercayaan Parameter Regresi",
                        description: "Tebak-tebakan seru: di mana letak parameter sesungguhnya?"
                    },
                    {
                        id: "les_analisis_regresi_03_06",
                        title: "Selang Kepercayaan Penduga Y",
                        description: "Prediksi Y pakai 'zona nyaman' biar gak salah sangka."
                    }
                ]
            },
            {
                id: "mod_analisis_regresi_04",
                title: "Pendekatan Matriks dalam Regresi",
                lessons: [
                    {
                        id: "les_analisis_regresi_04_01",
                        title: "Model Regresi Sederhana Pendekatan Matriks",
                        description: "Level up: model sederhana pakai matriks, makin gaya!"
                    },
                    {
                        id: "les_analisis_regresi_04_02",
                        title: "Pendugaan Parameter Pendekatan Matriks",
                        description: "Matriks datang, bikin nyari koefisien jadi operasi kilat."
                    },
                    {
                        id: "les_analisis_regresi_04_03",
                        title: "Struktur ANAVA Pendekatan Matriks",
                        description: "Tampilan ANAVA versi matriks: keren, ringkas, anti-mainstream."
                    },
                    {
                        id: "les_analisis_regresi_04_04",
                        title: "Matriks Kovarians Pendekatan Matriks",
                        description: "Kovarians matriks: pelajari 'kompaknya' galat satu paket."
                    },
                    {
                        id: "les_analisis_regresi_04_05",
                        title: "Variansi Penduga Y Pendekatan Matriks",
                        description: "Hitung galat Y pakai matriks, cepat dan gak pake nangis."
                    }
                ]
            },
            {
                id: "mod_analisis_regresi_05",
                title: "Analisis Regresi Linier Berganda",
                lessons: [
                    {
                        id: "les_analisis_regresi_05_01",
                        title: "Model Regresi Linier Berganda Pendekatan Matriks",
                        description: "Ajakin banyak X sekaligus, padahal tetep rapi pakai matriks."
                    },
                    {
                        id: "les_analisis_regresi_05_02",
                        title: "Pendugaan Parameter Regresi Berganda",
                        description: "Koefisien multi-X dikeroyok bareng, semua ketangkap."
                    },
                    {
                        id: "les_analisis_regresi_05_03",
                        title: "Struktur ANAVA Regresi Berganda",
                        description: "ANAVA rame-rame: X semua pada tampil di baris kolom."
                    },
                    {
                        id: "les_analisis_regresi_05_04",
                        title: "Matriks Varians Kovarians Regresi Berganda",
                        description: "Varians-kovarians multi-X: intip siapa yang 'cemburu' berat."
                    },
                    {
                        id: "les_analisis_regresi_05_05",
                        title: "Variansi Penduga Y Regresi Berganda",
                        description: "Ramalan Y tetep 'stabil' walau X-nya banyak banget."
                    }
                ]
            },
            {
                id: "mod_analisis_regresi_06",
                title: "Pengujian Hipotesis Lanjut",
                lessons: [
                    {
                        id: "les_analisis_regresi_06_01",
                        title: "Struktur Hipotesis Regresi Linier Berganda",
                        description: "Susun hipotesis ala regu lengkap, semua parameter ikut ngebut."
                    },
                    {
                        id: "les_analisis_regresi_06_02",
                        title: "Uji Sekuensial (Sequential Sum of Squares)",
                        description: "Tambahin X satu-satu, lihat siapa yang paling nambah 'kaya' model."
                    },
                    {
                        id: "les_analisis_regresi_06_03",
                        title: "Uji Parsial (Partial Test)",
                        description: "Tes satu X: berguna banget atau cuma 'ngikut' aja?"
                    },
                    {
                        id: "les_analisis_regresi_06_04",
                        title: "Uji Kesamaan Beberapa Regresi Linier Sederhana",
                        description: "Banding-bandingin garis: sama persis atau cuma 'kembar tipu'?"
                    },
                    {
                        id: "les_analisis_regresi_06_05",
                        title: "Uji Hipotesis Linier Umum",
                        description: "Uji super-flex: hipotesis custom pun tetap terkendali."
                    }
                ]
            },
            {
                id: "mod_analisis_regresi_07",
                title: "Pemilihan Model Regresi Terbaik",
                lessons: [
                    {
                        id: "les_analisis_regresi_07_01",
                        title: "Metode Langkah Maju (Forward Selection)",
                        description: "Forward: masukin X paling oke duluan, gak usah rame-rame."
                    },
                    {
                        id: "les_analisis_regresi_07_02",
                        title: "Metode Langkah Mundur (Backward Elimination)",
                        description: "Backward: buang yang jaim, tinggal X keren-keren aja."
                    },
                    {
                        id: "les_analisis_regresi_07_03",
                        title: "Metode Stepwise Regression",
                        description: "Stepwise: maju-mundur ala goyang dua arah, cari tim X terkuat."
                    }
                ]
            },
            {
                id: "mod_analisis_regresi_08",
                title: "Diagnostik Model dan Asumsi Klasik",
                lessons: [
                    {
                        id: "les_analisis_regresi_08_01",
                        title: "Pemeriksaan Asumsi Kenormalan",
                        description: "Cek dulu galat 'normal' gak, biar model gak 'sakit'."
                    },
                    {
                        id: "les_analisis_regresi_08_02",
                        title: "Pemeriksaan Asumsi Homoskedastisitas",
                        description: "Varians tetep, gak naik-turun; kalau gak, model bisa 'pusing'."
                    },
                    {
                        id: "les_analisis_regresi_08_03",
                        title: "Pemeriksaan Asumsi Kebebasan Galat",
                        description: "Galat harus jomblo: bebas dan gak clingy sama tetangganya."
                    },
                    {
                        id: "les_analisis_regresi_08_04",
                        title: "Deteksi Pencilan (Outlier)",
                        description: "Outlier: titik nakal yang suka bikin model 'kaget' setengah mati."
                    },
                    {
                        id: "les_analisis_regresi_08_05",
                        title: "Deteksi Multikolinieritas",
                        description: "Multikolinieritas: X pada rebutan peran, siapa paling dominan?"
                    }
                ]
            },
            {
                id: "mod_analisis_regresi_09",
                title: "Implementasi dan Pelaporan",
                lessons: [
                    {
                        id: "les_analisis_regresi_09_01",
                        title: "Penggunaan Software Statistika",
                        description: "Main software biar regresi jalan sendiri, lu cuma klik-klik!"
                    },
                    {
                        id: "les_analisis_regresi_09_02",
                        title: "Interpretasi Output Analisis Regresi",
                        description: "Baca output penuh gaya, jangan sampai salah dapet cerita."
                    },
                    {
                        id: "les_analisis_regresi_09_03",
                        title: "Penyusunan Laporan Analisis Regresi",
                        description: "Tulis laporan mantap, biar hasil regresi bisa pamer di dinding."
                    }
                ]
            }
        ]
    },
    {
        id: "ekonometrika",
        title: "Ekonometrika",
        description: "Mempelajari cara menguji teori ekonomi secara kuantitatif, memahami asumsi-asumsi model Ordinary Least Square (OLS), serta mengidentifikasi dan menangani pelanggaran asumsi klasik agar estimasi regresi tetap valid.",
        isProgramming: false,
        color: "indigo",
        icon: <Activity size={24} />,
        codeConfig: {
            language: "R",
            defaultCode: "# Model OLS sederhana\nmodel <- lm(Y ~ X1 + X2, data = mydata)\nsummary(model)",
            placeholder: "Tulis kode R untuk regresi, uji asumsi, atau koreksi OLS di sini ..."
        },
        modules: [
            {
                id: "mod_ekonometrika_01",
                title: "Pendahuluan dan Pengantar Ekonometrika",
                lessons: [
                    {
                        id: "les_ekonometrika_01_01",
                        title: "Konsep Dasar Ekonometrika",
                        description: "Ngulik ekonomi pakai data, gokil!"
                    },
                    {
                        id: "les_ekonometrika_01_02",
                        title: "Analisa Kuantitatif Fenomena Perekonomian",
                        description: "Biarin angka bercerita soal ekonomi, mantap!"
                    },
                    {
                        id: "les_ekonometrika_01_03",
                        title: "Teori Ekonomi dan Pembuktian Statistik",
                        description: "Buktikan teori ekonomi pakai statistik, kuy!"
                    }
                ]
            },
            {
                id: "mod_ekonometrika_02",
                title: "Pelanggaran Asumsi Model Klasik",
                lessons: [
                    {
                        id: "les_ekonometrika_02_01",
                        title: "Asumsi Klasik Model Ordinary Least Square",
                        description: "Syarat OLS harus ceklis, nggak boleh bolos!"
                    },
                    {
                        id: "les_ekonometrika_02_02",
                        title: "Identifikasi Pelanggaran Asumsi Klasik",
                        description: "Cari tanda asumsi klasik kena tilang!"
                    },
                    {
                        id: "les_ekonometrika_02_03",
                        title: "Jenis-Jenis Asumsi Klasik",
                        description: "Kenalan sama gang OLS: multikol, hetero, auto!"
                    }
                ]
            },
            {
                id: "mod_ekonometrika_03",
                title: "Variabel Status dan Klasik",
                lessons: [
                    {
                        id: "les_ekonometrika_03_01",
                        title: "Konsep Variabel Status",
                        description: "Variabel ini punya status spesial, siap-siap!"
                    },
                    {
                        id: "les_ekonometrika_03_02",
                        title: "Konsep Variabel Klasik",
                        description: "Var-klasik pendukung OLS, wajib nongkrong bareng!"
                    },
                    {
                        id: "les_ekonometrika_03_03",
                        title: "Langkah Penanganan Pelanggaran Asumsi Klasik",
                        description: "Asumsi kena masalah? Healing-nya di sini!"
                    }
                ]
            },
            {
                id: "mod_ekonometrika_04",
                title: "Model Regresi Pada Variabel Boneka",
                lessons: [
                    {
                        id: "les_ekonometrika_04_01",
                        title: "Konsep Variabel Boneka (Dummy Variable)",
                        description: "Boneka 0-1 bikin regresi makin greget!"
                    },
                    {
                        id: "les_ekonometrika_04_02",
                        title: "Analisis Regresi Peubah Dummy",
                        description: "Mainkan boneka di regresi, hasilnya nendang!"
                    },
                    {
                        id: "les_ekonometrika_04_03",
                        title: "Deteksi Model Regresi Variabel Boneka",
                        description: "Tebak-tebakan: mana boneka, mana manusia?"
                    }
                ]
            },
            {
                id: "mod_ekonometrika_05",
                title: "Persamaan Simultan",
                lessons: [
                    {
                        id: "les_ekonometrika_05_01",
                        title: "Konsep Persamaan Simultan",
                        description: "Ekonomi saling bergantung, satu tim satu mimpi!"
                    },
                    {
                        id: "les_ekonometrika_05_02",
                        title: "Analisis Data Ekonomi Melalui Persamaan Simultan",
                        description: "Ekonomi timbul-tenggelam bareng-bareng!"
                    }
                ]
            },
            {
                id: "mod_ekonometrika_06",
                title: "Pendugaan Parameter Persamaan Simultan",
                lessons: [
                    {
                        id: "les_ekonometrika_06_01",
                        title: "Pendugaan Parameter Persamaan Simultan",
                        description: "Tebak parameter serentak, greget abis!"
                    },
                    {
                        id: "les_ekonometrika_06_02",
                        title: "Teknik Estimasi Parameter",
                        description: "Trik jitu dapet nilai parameter, anti gagal!"
                    }
                ]
            },
            {
                id: "mod_ekonometrika_07",
                title: "Pengukuran Dalam Bidang Ekonomi",
                lessons: [
                    {
                        id: "les_ekonometrika_07_01",
                        title: "Metode Pengukuran Dalam Bidang Ekonomi",
                        description: "Ukur ekonomi pakai penggaris modern!"
                    },
                    {
                        id: "les_ekonometrika_07_02",
                        title: "Aplikasi Pengukuran Ekonomi",
                        description: "Ukur, hitung, lalu ekspresikan maknanya!"
                    }
                ]
            },
            {
                id: "mod_ekonometrika_08",
                title: "Hubungan Antar Variabel Ekonomi",
                lessons: [
                    {
                        id: "les_ekonometrika_08_01",
                        title: "Analisis Hubungan Antar Variabel Ekonomi",
                        description: "Saling ketergantungan variabel, drama ekonomi!"
                    },
                    {
                        id: "les_ekonometrika_08_02",
                        title: "Analisa Dinamis Ekonomi",
                        description: "Ekonomi bergerak, kita kejar pakai model!"
                    },
                    {
                        id: "les_ekonometrika_08_03",
                        title: "Model Error Correction Model (ECM)",
                        description: "Koreksi kesalahan jalan cepat, langsung nikung!"
                    },
                    {
                        id: "les_ekonometrika_08_04",
                        title: "Model Partial Adjustment Model (PAM)",
                        description: "Penyesuaian pelan tapi pasti, santuy!"
                    }
                ]
            },
            {
                id: "mod_ekonometrika_09",
                title: "Kandungan Empirik Variabel Ekonomi",
                lessons: [
                    {
                        id: "les_ekonometrika_09_01",
                        title: "Penentuan Kandungan Empirik Variabel Ekonomi",
                        description: "Bongkar isi variabel, temukan fakta riil!"
                    },
                    {
                        id: "les_ekonometrika_09_02",
                        title: "Analisis Empiris Data Ekonomi",
                        description: "Data ekonomi dijejerin, cerita punya gigi!"
                    }
                ]
            }
        ]
    },
    {
        id: "kapita-selekta-statistika",
        title: "Kapita Selekta Statistika",
        description: "Mata kuliah ini mengajarkan cara merancang penelitian statistika, menelusuri jurnal internasional & nasional, merekapitulasi studi literatur, serta menganalisis artikel ilmiah terkini sebagai dasar menyusun riset berkualitas.",
        isProgramming: false,
        color: "purple",
        icon: <BookOpen size={24} />,
        codeConfig: {
            language: "Markdown",
            defaultCode: "# Tinjauan Pustaka\n- Jurnal internasional\n- Jurnal nasional terakreditasi",
            placeholder: "Tambahkan kutipan artikel di sini"
        },
        modules: [
            {
                id: "mod_kapita-selekta-statistika_01",
                title: "Konsep Dasar Penelitian",
                lessons: [
                    {
                        id: "les_kapita-selekta-statistika_01_01",
                        title: "Ruang lingkup riset statistika",
                        description: "Kelilingi dunia data, temukan petanya!"
                    }
                ]
            },
            {
                id: "mod_kapita-selekta-statistika_02",
                title: "Studi Literatur & Referensi",
                lessons: [
                    {
                        id: "les_kapita-selekta-statistika_02_01",
                        title: "Teknik penelusuran jurnal internasional bereputasi",
                        description: "Google Scholar level dewa, kuy!"
                    },
                    {
                        id: "les_kapita-selekta-statistika_02_02",
                        title: "Teknik penelusuran jurnal nasional terakreditasi",
                        description: "Sinta garansi, mantap nih!"
                    },
                    {
                        id: "les_kapita-selekta-statistika_02_03",
                        title: "Strategi rekapitulasi hasil studi literatur",
                        description: "Literature review gak bikin mumet lagi."
                    },
                    {
                        id: "les_kapita-selekta-statistika_02_04",
                        title: "Analisis artikel ilmiah terkini (5 tahun terakhir)",
                        description: "Tren riset masa kini, gokil!"
                    }
                ]
            },
            {
                id: "mod_kapita-selekta-statistika_03",
                title: "Perumusan Masalah Penelitian",
                lessons: [
                    {
                        id: "les_kapita-selekta-statistika_03_01",
                        title: "Identifikasi topik penelitian statistika",
                        description: "Topik keren anti mainstream, gas!"
                    },
                    {
                        id: "les_kapita-selekta-statistika_03_02",
                        title: "Teknik perumusan masalah penelitian",
                        description: "Masalah tajam, solusi gemilang."
                    },
                    {
                        id: "les_kapita-selekta-statistika_03_03",
                        title: "Penyusunan tujuan penelitian",
                        description: "Tujuan jelas, arah pasti."
                    },
                    {
                        id: "les_kapita-selekta-statistika_03_04",
                        title: "Penentuan batasan masalah penelitian",
                        description: "Batasi fokus, tingkatkan impact."
                    },
                    {
                        id: "les_kapita-selekta-statistika_03_05",
                        title: "Identifikasi manfaat penelitian (teoritis dan praktis)",
                        description: "Manfaat dobel, nilai double!"
                    }
                ]
            },
            {
                id: "mod_kapita-selekta-statistika_04",
                title: "Penulisan Proposal Tugas Akhir",
                lessons: [
                    {
                        id: "les_kapita-selekta-statistika_04_01",
                        title: "Penulisan Bab I Pendahuluan",
                        description: "Hook pembaca dari baris pertama."
                    },
                    {
                        id: "les_kapita-selekta-statistika_04_02",
                        title: "Penulisan Bab II Tinjauan Pustaka",
                        description: "Peta ilmu, jalan cerita riset."
                    },
                    {
                        id: "les_kapita-selekta-statistika_04_03",
                        title: "Penyusunan kerangka teori penelitian",
                        description: "Rangkai teori jadi jaring kekar."
                    },
                    {
                        id: "les_kapita-selekta-statistika_04_04",
                        title: "Penulisan Bab III Metode Penelitian",
                        description: "Metode ciamik, data mantap."
                    },
                    {
                        id: "les_kapita-selekta-statistika_04_05",
                        title: "Integrasi draf proposal lengkap",
                        description: "Satukan puzzle proposal, klop!"
                    }
                ]
            },
            {
                id: "mod_kapita-selekta-statistika_05",
                title: "Metodologi Penelitian Statistika",
                lessons: [
                    {
                        id: "les_kapita-selekta-statistika_05_01",
                        title: "Perancangan metode pengambilan data",
                        description: "Sampling pahit manis, kuy!"
                    },
                    {
                        id: "les_kapita-selekta-statistika_05_02",
                        title: "Penentuan teknik analisis data statistik",
                        description: "Uji hipotesis, bukti kuat."
                    }
                ]
            },
            {
                id: "mod_kapita-selekta-statistika_06",
                title: "Teknik Penulisan Ilmiah",
                lessons: [
                    {
                        id: "les_kapita-selekta-statistika_06_01",
                        title: "Penerapan template standar tugas akhir departemen",
                        description: "Template cantik, sidang lancar."
                    },
                    {
                        id: "les_kapita-selekta-statistika_06_02",
                        title: "Teknik sitasi dan rujukan ilmiah",
                        description: "Sitasi APA, plagiarism zero."
                    },
                    {
                        id: "les_kapita-selekta-statistika_06_03",
                        title: "Penyusunan daftar pustaka standar",
                        description: "Referensi rapih, kredibilitas naik."
                    }
                ]
            },
            {
                id: "mod_kapita-selekta-statistika_07",
                title: "Komunikasi Ilmiah & Presentasi",
                lessons: [
                    {
                        id: "les_kapita-selekta-statistika_07_01",
                        title: "Prinsip desain slide presentasi efektif",
                        description: "Slide minimalis, audiens terpukau."
                    },
                    {
                        id: "les_kapita-selekta-statistika_07_02",
                        title: "Penyusunan materi presentasi proposal",
                        description: "Cerita data, emosi melejit."
                    },
                    {
                        id: "les_kapita-selekta-statistika_07_03",
                        title: "Teknik visualisasi data untuk presentasi",
                        description: "Plot cantik, insight mantap."
                    },
                    {
                        id: "les_kapita-selekta-statistika_07_04",
                        title: "Teknik presentasi forum ilmiah",
                        description: "PD di panggung, sidang santai."
                    },
                    {
                        id: "les_kapita-selekta-statistika_07_05",
                        title: "Argumentasi dan mempertahankan gagasan riset",
                        description: "Debuk soal, jawab piawai."
                    }
                ]
            },
            {
                id: "mod_kapita-selekta-statistika_08",
                title: "Pasca-Presentasi & Finalisasi",
                lessons: [
                    {
                        id: "les_kapita-selekta-statistika_08_01",
                        title: "Teknik revisi naskah akademik",
                        description: "Revisi kilat, dosen senyum."
                    },
                    {
                        id: "les_kapita-selekta-statistika_08_02",
                        title: "Finalisasi dokumen proposal penelitian",
                        description: "Proposal kece, sidang pun selesai."
                    }
                ]
            }
        ]
    },
    {
        id: "komputasi_statistika",
        title: "Komputasi Statistika",
        description: "Mata kuliah ini memperkenalkan penggunaan R dan RStudio untuk analisis statistika, mulai dari pengenalan dasar R, penggunaan paket-paket esensial, hingga aplikasi praktis pada statistika deskriptif dan inferensi.",
        isProgramming: true,
        color: "teal",
        icon: <Terminal size={24} />,
        codeConfig: {
            language: "R",
            defaultCode: "# Contoh ringkas\nx <- c(1,2,3,4,5)\nmean(x)",
            placeholder: "Tulis kode R Anda di sini..."
        },
        modules: [
            {
                id: "mod_komputasi_statistika_01",
                title: "Komputasi Statistika Berbasis R",
                lessons: [
                    {
                        id: "les_komputasi_statistika_01_01",
                        title: "Pengantar R dan RStudio",
                        description: "Kenalan sama si keren R, gak pakai ribet—langsung buka RStudio, kuy!"
                    },
                    {
                        id: "les_komputasi_statistika_01_02",
                        title: "Paket-paket dalam R",
                        description: "Buka pintu ajaib: install paket, tambah super-power ke R-mu, mantap!"
                    },
                    {
                        id: "les_komputasi_statistika_01_03",
                        title: "Analisis Statistika dengan R dan RStudio",
                        description: "Statistik pake R? Asik, auto ngerti data lo dalam sekejap!"
                    },
                    {
                        id: "les_komputasi_statistika_01_04",
                        title: "Aplikasi Paket R pada Statistika Deskriptif",
                        description: "Deskriptif jadi gokil: ringkasan data kilat cuma pakai perintah singkat!"
                    },
                    {
                        id: "les_komputasi_statistika_01_05",
                        title: "Aplikasi Paket R pada Statistika Inferensi",
                        description: "Tes hipotesis? Tenang, R bikin inferensi jadi santai & cepat!"
                    },
                    {
                        id: "les_komputasi_statistika_01_06",
                        title: "Analisis Data Eksplanatori",
                        description: "Eksplorasi data sampe inti, ketemu pola tersembunyi—seru abis!"
                    },
                    {
                        id: "les_komputasi_statistika_01_07",
                        title: "Ukuran Pemusatan Data",
                        description: "Mean, median, modus—tiga sekawan pencerah pusat data!"
                    },
                    {
                        id: "les_komputasi_statistika_01_08",
                        title: "Ukuran Penyimpangan Data",
                        description: "Variansi & simpangan baku, jadi detektor sebaran data-mu!"
                    },
                    {
                        id: "les_komputasi_statistika_01_09",
                        title: "Pemrograman Grafik dalam R",
                        description: "Plot cantik? ggplot2 aja, bikin visualisasimu Instagram-able!"
                    }
                ]
            },
            {
                id: "mod_komputasi_statistika_02",
                title: "Komputasi Statistika Berbasis Minitab",
                lessons: [
                    {
                        id: "les_komputasi_statistika_02_01",
                        title: "Statistika Deskriptif dengan Minitab",
                        description: "Klik-klik deskriptif selesai, Minitab bikin otakmu enteng!"
                    },
                    {
                        id: "les_komputasi_statistika_02_02",
                        title: "Statistika Lima Serangkai dengan Minitab",
                        description: "Boxplot, histogram, stem-leaf—lima geng serba bisa di Minitab!"
                    },
                    {
                        id: "les_komputasi_statistika_02_03",
                        title: "Penyajian Data dengan Minitab",
                        description: "Tabel & grafik kelas dunia, bikin presentasi lo keliatan pro!"
                    },
                    {
                        id: "les_komputasi_statistika_02_04",
                        title: "Pencetakan Output dengan Minitab",
                        description: "Report rapi otomatis cetak, tinggal kopi paste ke word—gampang!"
                    },
                    {
                        id: "les_komputasi_statistika_02_05",
                        title: "Statistika Inferensi dengan Minitab",
                        description: "Uji-t, ANOVA? Minitab jawab, tinggal klik hasilnya keluar!"
                    },
                    {
                        id: "les_komputasi_statistika_02_06",
                        title: "Uji Perbandingan Rataan dengan Minitab",
                        description: "Bandingin rataan gampang, Minitab kasih bintang signifikannya!"
                    },
                    {
                        id: "les_komputasi_statistika_02_07",
                        title: "Analisis Regresi dengan Minitab",
                        description: "Prediksi tren masa depan, regresi di Minitab mantap tanpa koding!"
                    },
                    {
                        id: "les_komputasi_statistika_02_08",
                        title: "Analisis Korelasi dengan Minitab",
                        description: "Cari jodoh variabel paling cocok, korelasi di Minitab temukan!"
                    },
                    {
                        id: "les_komputasi_statistika_02_09",
                        title: "Studi Kasus Statistika dengan Minitab",
                        description: "Seru! Selesaikan kasus nyata bareng Minitab, langsung praktik!"
                    }
                ]
            },
            {
                id: "mod_komputasi_statistika_03",
                title: "Komputasi Statistika Berbasis SAS Base",
                lessons: [
                    {
                        id: "les_komputasi_statistika_03_01",
                        title: "Pengantar SAS",
                        description: "SAS si legenda data, mulai petualangan analytics skala industri!"
                    },
                    {
                        id: "les_komputasi_statistika_03_02",
                        title: "Tipe dan Struktur Data SAS",
                        description: "Kenali format SAS, data lo bakal rapi kayak perpus digital!"
                    },
                    {
                        id: "les_komputasi_statistika_03_03",
                        title: "Tipe Gugus Data SAS",
                        description: "Dataset besar? SAS punya gugus super-cepat kelola jutaan baris!"
                    },
                    {
                        id: "les_komputasi_statistika_03_04",
                        title: "Struktur Program SAS",
                        description: "Susun kode SAS gaya blok, run; langsung jalan—gokil!"
                    },
                    {
                        id: "les_komputasi_statistika_03_05",
                        title: "Penyimpanan Gugus Data SAS",
                        description: "Simpan hasil analisis aman, SAS bikin library lo tertata!"
                    }
                ]
            },
            {
                id: "mod_komputasi_statistika_04",
                title: "Komputasi Statistika Berbasis SAS IML",
                lessons: [
                    {
                        id: "les_komputasi_statistika_04_01",
                        title: "Pengantar SAS IML",
                        description: "Matrix language SAS, bikin kalkulus statistik jadi one-liner!"
                    },
                    {
                        id: "les_komputasi_statistika_04_02",
                        title: "Perintah dalam SAS IML",
                        description: "Tulis operasi matriks simpel, hasilnya kilat bikin ngiler!"
                    },
                    {
                        id: "les_komputasi_statistika_04_03",
                        title: "Aplikasi SAS IML",
                        description: "Simulasi & optimasi keren, IML jadi senjata rahasia data scientist!"
                    }
                ]
            },
            {
                id: "mod_komputasi_statistika_05",
                title: "Komputasi Statistika Berbasis SPSS",
                lessons: [
                    {
                        id: "les_komputasi_statistika_05_01",
                        title: "Statistika Deskriptif dengan SPSS",
                        description: "Klik analyze > descriptives, SPSS kasih snapshot data kilat!"
                    },
                    {
                        id: "les_komputasi_statistika_05_02",
                        title: "Statistika Lima Serangkai dengan SPSS",
                        description: "Explore menu serba bisa, lima grafik sekaligus auto muncul!"
                    },
                    {
                        id: "les_komputasi_statistika_05_03",
                        title: "Penyajian Data dengan SPSS",
                        description: "Drag-drop variabel, SPSS bikin tabel pivot cantik tanpa ribet!"
                    },
                    {
                        id: "les_komputasi_statistika_05_04",
                        title: "Pencetakan Output dengan SPSS",
                        description: "Export ke Word/PDF, hasil SPSS siap pajang ke dosen!"
                    },
                    {
                        id: "les_komputasi_statistika_05_05",
                        title: "Statistika Inferensi dengan SPSS",
                        description: "Uji normalitas, homogenitas, semua otomatis—tinggal baca sig!"
                    },
                    {
                        id: "les_komputasi_statistika_05_06",
                        title: "Uji Perbandingan Rataan dengan SPSS",
                        description: "Post-hoc Bonferroni? SPSS kasih tanda bintang langsung jelas!"
                    },
                    {
                        id: "les_komputasi_statistika_05_07",
                        title: "Analisis Regresi dengan SPSS",
                        description: "Masukin variabel, SPSS kasih koefisien & R²—prediksi lo siap!"
                    },
                    {
                        id: "les_komputasi_statistika_05_08",
                        title: "Analisis Korelasi dengan SPSS",
                        description: "Korelasi pearson cuma beep, SPSS kasih heatmap warna-warni!"
                    }
                ]
            }
        ]
    },
    {
        id: "metode_numerik",
        title: "Metode Numerik",
        description: "Mempelajari teknik komputasi untuk menyelesaikan persamaan matematika yang sulit atau tidak mungkin diselesaikan secara analitik, termasuk metode iteratif untuk persamaan tak linear seperti metode bagi dua dan regula-falsi.",
        isProgramming: true,
        color: "blue",
        icon: <Calculator size={24} />,
        codeConfig: {
            language: "Python",
            defaultCode: "import numpy as np\n\n# Contoh metode bagi dua\ndef bisection(f, a, b, tol=1e-5):\n    while (b-a)/2 > tol:\n        c = (a+b)/2\n        if f(c) == 0: return c\n        if f(a)*f(c) < 0: b = c\n        else: a = c\n    return (a+b)/2\n\n# Contoh penggunaan\nf = lambda x: x**3 - 2*x - 5\nroot = bisection(f, 2, 3)\nprint(f\"Akar: {root:.5f}\")",
            placeholder: "# Tuliskan fungsi dan panggil metode numerik di sini"
        },
        modules: [
            {
                id: "mod_metode_numerik_01",
                title: "Pengantar Metode Numerik",
                lessons: [
                    {
                        id: "les_metode_numerik_01_01",
                        title: "Pendahuluan Metode Numerik",
                        description: "Kuy kenalan sama si matematika curang—gokil deh!"
                    },
                    {
                        id: "les_metode_numerik_01_02",
                        title: "Tahap-tahap Penyelesaian Metode Numerik",
                        description: "Cek proses seru bikin soal ribuan jadi mantap."
                    }
                ]
            },
            {
                id: "mod_metode_numerik_02",
                title: "Persamaan Tak Linear",
                lessons: [
                    {
                        id: "les_metode_numerik_02_01",
                        title: "Konsep Penyelesaian Persamaan Tak Linear",
                        description: "Obok-obok akar nggak kelihatan—seru!"
                    },
                    {
                        id: "les_metode_numerik_02_02",
                        title: "Metode Bagi Dua (Bisection Method)",
                        description: "Potong dua terus sampai akar ketangkap, mantap!"
                    },
                    {
                        id: "les_metode_numerik_02_03",
                        title: "Metode Posisi Palsu (Regula-Falsi)",
                        description: "Tipu-tipu posisi biar akar cepat keburu."
                    },
                    {
                        id: "les_metode_numerik_02_04",
                        title: "Metode Lelaran Titik-Tetap (Fixed-Point Iteration)",
                        description: "Muter-muter sampe titak ketemu, gokil!"
                    },
                    {
                        id: "les_metode_numerik_02_05",
                        title: "Metode Newton Raphson",
                        description: "Turunan turbo pacu akar nyantol cepat."
                    },
                    {
                        id: "les_metode_numerik_02_06",
                        title: "Metode Secant (Modifikasi Newton-Raphson)",
                        description: "Skip turunan tapi tetap nyerobot akar, asik!"
                    },
                    {
                        id: "les_metode_numerik_02_07",
                        title: "Metode Perkalian Bersarang (Horner)",
                        description: "Sarangin kali, polinom jadi cepat dihajar."
                    },
                    {
                        id: "les_metode_numerik_02_08",
                        title: "Lokalisasi Akar Polinom",
                        description: "Tebak dulu nih akar nongkrong di mana."
                    }
                ]
            },
            {
                id: "mod_metode_numerik_03",
                title: "Sistem Persamaan Linear",
                lessons: [
                    {
                        id: "les_metode_numerik_03_01",
                        title: "Konsep Matriks dan Sistem Persamaan Linear",
                        description: "Tabel ajaib atur variabel jadi rapi, gokil!"
                    },
                    {
                        id: "les_metode_numerik_03_02",
                        title: "Sistem Persamaan Linear (SPL)",
                        description: "Rame-rame nyari solusi, rame-rame pusing mantap."
                    },
                    {
                        id: "les_metode_numerik_03_03",
                        title: "Metode Eliminasi Gauss",
                        description: "Sekali dorot, baris hilang, solusi terang."
                    },
                    {
                        id: "les_metode_numerik_03_04",
                        title: "Metode Eliminasi Gauss-Jordan",
                        description: "Gauss lanjut olimpiade sampai identitas, asik!"
                    },
                    {
                        id: "les_metode_numerik_03_05",
                        title: "Metode Matriks Balikan (Matrix Inversion)",
                        description: "Balikin matriks, SPL selesai instan."
                    },
                    {
                        id: "les_metode_numerik_03_06",
                        title: "Metode Dekomposisi LU",
                        description: "Bongkar matriks jadi L-U, kerja bareng cepat."
                    },
                    {
                        id: "les_metode_numerik_03_07",
                        title: "Perhitungan Determinan Matriks",
                        description: "Nilai ajaib penentu solusi ada atau ilang."
                    },
                    {
                        id: "les_metode_numerik_03_08",
                        title: "Perhitungan Invers Matriks",
                        description: "Balikkan si matriks—kalau bisa, nyelametin SPL."
                    },
                    {
                        id: "les_metode_numerik_03_09",
                        title: "Metode Jacobi",
                        description: "Tebak-tebakan beruntun sampai konvergen, gokil!"
                    },
                    {
                        id: "les_metode_numerik_03_10",
                        title: "Metode Gauss-Seidel",
                        description: "Update secepat kilat, makin cepat konvergen."
                    }
                ]
            },
            {
                id: "mod_metode_numerik_04",
                title: "Interpolasi dan Pencocokan Kurva",
                lessons: [
                    {
                        id: "les_metode_numerik_04_01",
                        title: "Konsep Metode Interpolasi",
                        description: "Sambung-sambung titik bikin kurva halus mantap."
                    },
                    {
                        id: "les_metode_numerik_04_02",
                        title: "Polinom Interpolasi Taylor",
                        description: "Deret takhingga cipta polinom di sekitar titik, asik!"
                    },
                    {
                        id: "les_metode_numerik_04_03",
                        title: "Polinom Interpolasi Lagrange",
                        description: "Campur titik pakai bobot, polinom langsung jadi."
                    },
                    {
                        id: "les_metode_numerik_04_04",
                        title: "Polinom Interpolasi Newton",
                        description: "Tambah selisih terpecah, polinom naik level."
                    },
                    {
                        id: "les_metode_numerik_04_05",
                        title: "Polinom Interpolasi Newton-Gregory",
                        description: "Bedanya teratur, bikin tabel maju-mundur gokil."
                    },
                    {
                        id: "les_metode_numerik_04_06",
                        title: "Galat Interpolasi Polinom",
                        description: "Tahu selisih tebak vs aslinya—kadang kocak."
                    }
                ]
            },
            {
                id: "mod_metode_numerik_05",
                title: "Turunan Numerik",
                lessons: [
                    {
                        id: "les_metode_numerik_05_01",
                        title: "Konsep Turunan Numerik",
                        description: "Grak-grak fungsi pakai data diskrit, seru!"
                    },
                    {
                        id: "les_metode_numerik_05_02",
                        title: "Hampiran Selisih Maju",
                        description: "Langkah ke depan, nilai turunan tergokil."
                    },
                    {
                        id: "les_metode_numerik_05_03",
                        title: "Hampiran Selisih Mundur",
                        description: "Langkah ke belakang, turunan tetap kece."
                    },
                    {
                        id: "les_metode_numerik_05_04",
                        title: "Hampiran Selisih Pusat",
                        description: "Kiri kanan kolab, hasil turunan paling oke."
                    },
                    {
                        id: "les_metode_numerik_05_05",
                        title: "Penurunan dengan Bantuan Deret Taylor",
                        description: "Ekspansi dulu, baru deret turunan—mantap!"
                    },
                    {
                        id: "les_metode_numerik_05_06",
                        title: "Penurunan dengan Hampiran Polinom Interpolasi",
                        description: "Pake kurva palsu, turunannya nyelip."
                    },
                    {
                        id: "les_metode_numerik_05_07",
                        title: "Penentuan Orde Galat Turunan",
                        description: "Tebak besar galat, biar tau seberapa kocak."
                    }
                ]
            },
            {
                id: "mod_metode_numerik_06",
                title: "Integral Numerik",
                lessons: [
                    {
                        id: "les_metode_numerik_06_01",
                        title: "Konsep Integral Numerik",
                        description: "Jumlahin bawah kurva tanpa pakai integral asli, gokil."
                    },
                    {
                        id: "les_metode_numerik_06_02",
                        title: "Metode Pias Kaidah Segiempat",
                        description: "Bagi kotak, jumlahkan luasnya—gampang."
                    },
                    {
                        id: "les_metode_numerik_06_03",
                        title: "Metode Pias Kaidah Trapesium",
                        description: "Jebakan trapesium tangkap luas area, asik!"
                    },
                    {
                        id: "les_metode_numerik_06_04",
                        title: "Metode Pias Kaidah Titik Tengah",
                        description: "Ambil tengah-tengah, luasnya tiba-tiba pas."
                    },
                    {
                        id: "les_metode_numerik_06_05",
                        title: "Metode Newton-Cotes Kaidah Trapesium",
                        description: "Trapesium versi rapih, galatnya kece."
                    },
                    {
                        id: "les_metode_numerik_06_06",
                        title: "Metode Newton-Cotes Kaidah Simpson 1/3",
                        description: "Parabolakan kurva, hasilnya makin mantap."
                    },
                    {
                        id: "les_metode_numerik_06_07",
                        title: "Metode Newton-Cotes Kaidah Simpson 3/8",
                        description: "Simpson triple, bikin galau makin imut."
                    },
                    {
                        id: "les_metode_numerik_06_08",
                        title: "Metode Romberg",
                        description: "Ekstrapolasi trapesium jadi superpresisi, gokil!"
                    },
                    {
                        id: "les_metode_numerik_06_09",
                        title: "Metode Kuadratur Gauss",
                        description: "Pilih titik ajaib, integral langsung nge-blend."
                    }
                ]
            },
            {
                id: "mod_metode_numerik_07",
                title: "Implementasi Komputasi Numerik",
                lessons: [
                    {
                        id: "les_metode_numerik_07_01",
                        title: "Pemrograman Komputer untuk Turunan Numerik",
                        description: "Coding derit-derit, turunan otomatis seru!"
                    },
                    {
                        id: "les_metode_numerik_07_02",
                        title: "Pemrograman Komputer untuk Integral Numerik",
                        description: "Run kode, hitung luas—hasilnya mantap!"
                    }
                ]
            }
        ]
    },
    {
        id: "metodologi_penelitian",
        title: "Metodologi Penelitian",
        description: "Pelajari seluk-beluk proses ilmiah: dari merumuskan masalah, merancang hipotesis, memilih jenis pendekatan, hingga menyusun tahapan penelitian secara sistematis.",
        isProgramming: false,
        color: "indigo",
        icon: <BookOpen size={24} />,
        codeConfig: {
            language: "Markdown",
            defaultCode: "# Judul Penelitian\n## Latar Belakang",
            placeholder: "Tulis ringkasan proposal di sini..."
        },
        modules: [
            {
                id: "mod_metodologi_penelitian_01",
                title: "Konsep Dasar Penelitian",
                lessons: [
                    {
                        id: "les_metodologi_penelitian_01_01",
                        title: "Pengertian Metodologi Penelitian",
                        description: "Kenalan dulu sama si ‘racik’ ilmu bikin penelitian gokil!"
                    },
                    {
                        id: "les_metodologi_penelitian_01_02",
                        title: "Jenis-jenis Penelitian",
                        description: "Eksplorasi jenis penelitian, dari deskriptif sampai eksperimen, mantap!"
                    },
                    {
                        id: "les_metodologi_penelitian_01_03",
                        title: "Tahapan Penelitian",
                        description: "Step-by-step naik tangga ilmiah, anti nyasar kuy!"
                    }
                ]
            },
            {
                id: "mod_metodologi_penelitian_02",
                title: "Perancangan Penelitian",
                lessons: [
                    {
                        id: "les_metodologi_penelitian_02_01",
                        title: "Penyusunan Hipotesis Penelitian",
                        description: "Tebak-tebakan serius yang bikin jurnal makin greng!"
                    },
                    {
                        id: "les_metodologi_penelitian_02_02",
                        title: "Perumusan Masalah Penelitian",
                        description: "Rumusin masalah biar fokus, jangan bikin pusing!"
                    },
                    {
                        id: "les_metodologi_penelitian_02_03",
                        title: "Penetapan Tujuan Penelitian",
                        description: "Tentuin tujuan biar eksplorasimu nggalak!"
                    },
                    {
                        id: "les_metodologi_penelitian_02_04",
                        title: "Penulisan Metodologi Penelitian",
                        description: "Tulis metode kece, biar dosenmu klepek-klepek!"
                    }
                ]
            },
            {
                id: "mod_metodologi_penelitian_03",
                title: "Pelaksanaan dan Analisis Data",
                lessons: [
                    {
                        id: "les_metodologi_penelitian_03_01",
                        title: "Pengolahan Data Hasil Penelitian",
                        description: "Olah data biar rapi, hasilnya juara!"
                    },
                    {
                        id: "les_metodologi_penelitian_03_02",
                        title: "Analisis Data Hasil Penelitian",
                        description: "Analisis data sampai kelihatan ceritanya, seru abis!"
                    },
                    {
                        id: "les_metodologi_penelitian_03_03",
                        title: "Penyusunan Simpulan Hasil Penelitian",
                        description: "Tarik benang merah, bikin kesimpulan anti ngasal!"
                    },
                    {
                        id: "les_metodologi_penelitian_03_04",
                        title: "Penyusunan Rekomendasi Penelitian",
                        description: "Kasih saran mantap, biar penelitianmu bermanfaat!"
                    }
                ]
            },
            {
                id: "mod_metodologi_penelitian_04",
                title: "Penulisan Karya Ilmiah",
                lessons: [
                    {
                        id: "les_metodologi_penelitian_04_01",
                        title: "Penelusuran Referensi Artikel Ilmiah",
                        description: "Cari ref galak, biar nggak ketularan plagiat!"
                    },
                    {
                        id: "les_metodologi_penelitian_04_02",
                        title: "Penyusunan Draft Artikel Ilmiah",
                        description: "Tulis draft kece, calon jurnal nasional deh!"
                    },
                    {
                        id: "les_metodologi_penelitian_04_03",
                        title: "Teknik Presentasi Ilmiah",
                        description: "Presentasi gokil, panggung ILMU kamu!"
                    }
                ]
            },
            {
                id: "mod_metodologi_penelitian_05",
                title: "Publikasi Ilmiah",
                lessons: [
                    {
                        id: "les_metodologi_penelitian_05_01",
                        title: "Submit Artikel Jurnal Nasional",
                        description: "Kirim ke jurnal nasional, sabar menanti review!"
                    },
                    {
                        id: "les_metodologi_penelitian_05_02",
                        title: "Submit Artikel Jurnal Internasional",
                        description: "Tembak jurnal internasional, go-international mantul!"
                    }
                ]
            }
        ]
    },
    {
        id: "modern_prediksi_dan_machine_learning",
        title: "Modern Prediksi & Machine Learning",
        description: "Belajar membangun model prediktif modern: dari konsep dasar ML, pra‐processing data, hingga menerapkan regresi linier & ridge untuk memecahkan masalah dunia nyata.",
        isProgramming: true,
        color: "blue",
        icon: <Cpu size={24} />,
        codeConfig: {
            language: "Python",
            defaultCode: "import pandas as pd, numpy as np\nfrom sklearn.linear_model import LinearRegression\n\n# Contoh regresi sederhana\nX = np.array([[1],[2],[3]])\ny = [2,4,6]\nmodel = LinearRegression().fit(X, y)\nprint(model.predict([[4]]))",
            placeholder: "# Tulis kode Python untuk eksperimen prediksi Anda..."
        },
        modules: [
            {
                id: "mod_modern_prediksi_dan_machine_learning_01",
                title: "Konsep Dasar Machine Learning",
                lessons: [
                    {
                        id: "les_modern_prediksi_dan_machine_learning_01_01",
                        title: "Pengantar Machine Learning",
                        description: "Kenalan sama ML, teman baru buat bikin data jadi emas!"
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_01_02",
                        title: "Posisi Machine Learning dalam Statistika",
                        description: "Statistik + ML = dream team bikin prediksi gokil!"
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_01_03",
                        title: "Review Materi Pra-Processing Data",
                        description: "Bersih-bersih data kotor biar siap nge-party!"
                    }
                ]
            },
            {
                id: "mod_modern_prediksi_dan_machine_learning_02",
                title: "Model Regresi Machine Learning",
                lessons: [
                    {
                        id: "les_modern_prediksi_dan_machine_learning_02_01",
                        title: "Regresi Linier",
                        description: "Garis lurus nge-track tren data, simpel tapi oke!"
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_02_02",
                        title: "Regresi Ridge",
                        description: "Tambah sedikit penalti biar model nggak overconfidence."
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_02_03",
                        title: "Regresi Lasso",
                        description: "Lasso seleksi fitur, yang penting doang yang masuk!"
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_02_04",
                        title: "Evaluasi Model Regresi",
                        description: "Tes kepintaran model, biar tau siapa yang paling jago."
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_02_05",
                        title: "Praktikum Regresi dalam Machine Learning",
                        description: "Gas coding regresi, teori jadi kenyataan mantap!"
                    }
                ]
            },
            {
                id: "mod_modern_prediksi_dan_machine_learning_03",
                title: "Model Klasifikasi Dasar",
                lessons: [
                    {
                        id: "les_modern_prediksi_dan_machine_learning_03_01",
                        title: "Konsep Dasar Klasifikasi",
                        description: "Labelin data kayak sortir cewek & cowok di kafe."
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_03_02",
                        title: "Algoritma Logistic Regression",
                        description: "Logistik bikin data pilih A atau B, gampang banget!"
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_03_03",
                        title: "Algoritma Decision Tree",
                        description: "Pohon keputusan, cabangin pilihan sampai ketemu jawaban."
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_03_04",
                        title: "Algoritma K-Nearest Neighbors",
                        description: "Ketemuan sama tetangga buat nebak siapa dirimu."
                    }
                ]
            },
            {
                id: "mod_modern_prediksi_dan_machine_learning_04",
                title: "Clustering dan Reduksi Dimensi",
                lessons: [
                    {
                        id: "les_modern_prediksi_dan_machine_learning_04_01",
                        title: "Konsep Clustering",
                        description: "Clustering, kumpulin teman-teman sesama hobi!"
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_04_02",
                        title: "Algoritma K-Means",
                        description: "K-Means bikin grup otomatis, kuy selfie rame-rame!"
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_04_03",
                        title: "Hierarchical Clustering",
                        description: "Naik-turun pohon klaster, makin ke atas makin dekat."
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_04_04",
                        title: "Algoritma DBSCAN",
                        description: "DBSCAN nemu anomali, nggak usah takut outlier!"
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_04_05",
                        title: "Metode Reduksi Dimensi",
                        description: "PDPCA bikin data kurus, hemat memori sehat bugar."
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_04_06",
                        title: "Evaluasi Clustering",
                        description: "Cek kecocokan klaster, siapa paling kompak?"
                    }
                ]
            },
            {
                id: "mod_modern_prediksi_dan_machine_learning_05",
                title: "Model Ensemble dan SVM",
                lessons: [
                    {
                        id: "les_modern_prediksi_dan_machine_learning_05_01",
                        title: "Algoritma Random Forest",
                        description: "Random Forest, bayar banyak pohon buat voting cerdas."
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_05_02",
                        title: "Algoritma Gradient Boosting",
                        description: "Boosting naikkan performa, satu-satu ditraining joss!"
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_05_03",
                        title: "Algoritma Support Vector Machine",
                        description: "SVM bikin batas tegas, nggak boleh nyerobot!"
                    }
                ]
            },
            {
                id: "mod_modern_prediksi_dan_machine_learning_06",
                title: "Jaringan Syaraf Tiruan",
                lessons: [
                    {
                        id: "les_modern_prediksi_dan_machine_learning_06_01",
                        title: "Konsep Dasar Jaringan Syaraf Tiruan",
                        description: "Otak tiruan mulai belajar, kayak bayi tapi cepat!"
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_06_02",
                        title: "Membangun Neural Network Dasar",
                        description: "Susun neuron jadi tim, siap nge-brain data."
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_06_03",
                        title: "Melatih Neural Network Dasar",
                        description: "Training NN, suruh diet backprop sampai kurus error."
                    }
                ]
            },
            {
                id: "mod_modern_prediksi_dan_machine_learning_07",
                title: "Proyek End-to-End Machine Learning",
                lessons: [
                    {
                        id: "les_modern_prediksi_dan_machine_learning_07_01",
                        title: "Penerapan Metode Machine Learning Pada Data",
                        description: "Real-world data? ML siap bantu kamu nge-hack!"
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_07_02",
                        title: "Format Penulisan Artikel Ilmiah Machine Learning",
                        description: "Tulis paper asik, doi jurnal bakal swipe right!"
                    },
                    {
                        id: "les_modern_prediksi_dan_machine_learning_07_03",
                        title: "Presentasi Proyek Machine Learning",
                        description: "Pitch projek ML, audience auto tepuk tangan gede!"
                    }
                ]
            }
        ]
    },
    {
        id: "statistika_nonparametrik",
        title: "Statistika Nonparametrik",
        description: "Mempelajari metode statistika bebas distribusi untuk menguji hipotesis ketika asumsi parametrik tidak terpenuhi, meliputi uji binomial, Mann-Whitney, Kruskal-Wallis, dan koefisien korelasi peringkat.",
        isProgramming: false,
        color: "green",
        icon: <BarChart2 size={24} />,
        codeConfig: {
            language: "Python",
            defaultCode: "import scipy.stats as stats\nimport numpy as np",
            placeholder: "# Gunakan scipy.stats untuk uji nonparametrik"
        },
        modules: [
            {
                id: "mod_statistika_nonparametrik_01",
                title: "Pendahuluan dan Dasar Statistika Nonparametrik",
                lessons: [
                    {
                        id: "les_statistika_nonparametrik_01_01",
                        title: "Konsep dasar statistika nonparametrik",
                        description: "Statistik tanpa asumsi ribet, cocok buat data gak normal, mantap!"
                    },
                    {
                        id: "les_statistika_nonparametrik_01_02",
                        title: "Perbedaan metode statistika parametrik dan nonparametrik",
                        description: "Parametrik vs nonparametrik, beda cara pandang data, yuk paham!"
                    },
                    {
                        id: "les_statistika_nonparametrik_01_03",
                        title: "Keunggulan metode statistika nonparametrik",
                        description: "Bebas asumsi, kuat di data kecil, simpel tapi gokil!"
                    },
                    {
                        id: "les_statistika_nonparametrik_01_04",
                        title: "Keterbatasan metode statistika nonparametrik",
                        description: "Kadang kurang kuasa, efisiensi turun di sampel besar, tetap kuy!"
                    },
                    {
                        id: "les_statistika_nonparametrik_01_05",
                        title: "Konsep dasar pengujian hipotesis",
                        description: "Tes dugaan statistik, bukti vs curiga, seru abis!"
                    },
                    {
                        id: "les_statistika_nonparametrik_01_06",
                        title: "Konsep dasar statistika berbasis urutan dan peringkat",
                        description: "Data diurutin, nilai absen tetap bisa jadi raja, asik!"
                    }
                ]
            },
            {
                id: "mod_statistika_nonparametrik_02",
                title: "Pengujian Hipotesis Deskriptif 1 Sampel",
                lessons: [
                    {
                        id: "les_statistika_nonparametrik_02_01",
                        title: "Konsep uji hipotesis deskriptif satu sampel",
                        description: "Tes rata-rata median satu kelompok, tebak-tebakan seru!"
                    },
                    {
                        id: "les_statistika_nonparametrik_02_02",
                        title: "Uji Binomial (Binomial Test)",
                        description: "Lempar koin virtual, ngitung peluang sukses, gampang dan greget!"
                    },
                    {
                        id: "les_statistika_nonparametrik_02_03",
                        title: "Uji Runtun (Run Test)",
                        description: "Deteksi keacakan data, runtunan naik-turun, bikin mikir!"
                    },
                    {
                        id: "les_statistika_nonparametrik_02_04",
                        title: "Prosedur pelaksanaan Uji Binomial",
                        description: "Langkah demi langkah binomial, klik-klik selesai, praktis!"
                    },
                    {
                        id: "les_statistika_nonparametrik_02_05",
                        title: "Prosedur pelaksanaan Uji Runtun",
                        description: "Run test ala kadarnya, urutin lalu hitung, selesai!"
                    }
                ]
            },
            {
                id: "mod_statistika_nonparametrik_03",
                title: "Pengujian Hipotesis Komparatif 2 Sampel",
                lessons: [
                    {
                        id: "les_statistika_nonparametrik_03_01",
                        title: "Konsep pengujian hipotesis komparatif dua sampel",
                        description: "Banding-bandingin dua kelompok, siapa menang, seru!"
                    },
                    {
                        id: "les_statistika_nonparametrik_03_02",
                        title: "Uji Mc Nemar (Mc Nemar Test)",
                        description: "Data berpasangan pre-post, cocok buat survei sebelum sesudah!"
                    },
                    {
                        id: "les_statistika_nonparametrik_03_03",
                        title: "Uji Tanda (Sign Test)",
                        description: "Cuma tanda plus-minus, simpel tajam, mantap jiwa!"
                    },
                    {
                        id: "les_statistika_nonparametrik_03_04",
                        title: "Uji Peringkat Bertanda Wilcoxon (Wilcoxon Signed Rank Test)",
                        description: "Wilcoxon level up, pakai ranking plus-minus, gokil!"
                    },
                    {
                        id: "les_statistika_nonparametrik_03_05",
                        title: "Uji Chi Kuadrat Dua Sampel",
                        description: "Tabel kontingensi dua kelompok, cocok buat kategori, asik!"
                    },
                    {
                        id: "les_statistika_nonparametrik_03_06",
                        title: "Uji Probabilitas Pasti Fisher (Fisher Exact Probability Test)",
                        description: "Fisher presisi total, sel kecil pun takluk, jos!"
                    },
                    {
                        id: "les_statistika_nonparametrik_03_07",
                        title: "Uji Median (Median Test)",
                        description: "Tes median antar kelompok, cepat nentuin beda pusat, kuy!"
                    },
                    {
                        id: "les_statistika_nonparametrik_03_08",
                        title: "Uji Mann-Whitney U (Mann-Whitney U Test)",
                        description: "Bandung bondowoso data independen, ranking ajaib, greget!"
                    },
                    {
                        id: "les_statistika_nonparametrik_03_09",
                        title: "Penentuan uji statistik berpasangan",
                        description: "Pilih uji pasangan data, pre-post jadi satu, mantap!"
                    },
                    {
                        id: "les_statistika_nonparametrik_03_10",
                        title: "Penentuan uji statistik independen",
                        description: "Pilih uji beda kelompok, gak nyambung tapi sah, yuk!"
                    }
                ]
            },
            {
                id: "mod_statistika_nonparametrik_04",
                title: "Pengujian Hipotesis Komparatif k Sampel",
                lessons: [
                    {
                        id: "les_statistika_nonparametrik_04_01",
                        title: "Konsep pengujian hipotesis komparatif k sampel",
                        description: "Bandingin banyak kelompok sekaligus, rame tasyur!"
                    },
                    {
                        id: "les_statistika_nonparametrik_04_02",
                        title: "Uji Cochran (Cochran Test)",
                        description: "Cochran untuk data biner berulang, pas banget!"
                    },
                    {
                        id: "les_statistika_nonparametrik_04_03",
                        title: "Uji Friedman (Friedman Test)",
                        description: "Friedman blok acak, ranking dalam blok, gokil!"
                    },
                    {
                        id: "les_statistika_nonparametrik_04_04",
                        title: "Uji Chi Kuadrat k Sampel",
                        description: "Chi-kuadrat multikelompok, cocok kategori, seru!"
                    },
                    {
                        id: "les_statistika_nonparametrik_04_05",
                        title: "Uji Perluasan Median (Median Extension Test)",
                        description: "Median versi k sampel, cepat bedain pusat, kuy!"
                    },
                    {
                        id: "les_statistika_nonparametrik_04_06",
                        title: "Uji Kruskal-Wallis (Kruskal-Wallis Test)",
                        description: "Kruskal ANOVA nonparametrik, ranking semua, greget!"
                    }
                ]
            },
            {
                id: "mod_statistika_nonparametrik_05",
                title: "Pengujian Hipotesis Kesesuaian Distribusi dan Asosiatif",
                lessons: [
                    {
                        id: "les_statistika_nonparametrik_05_01",
                        title: "Konsep pengujian hipotesis kesesuaian distribusi (Goodness of Fit)",
                        description: "Data cocok distribusi? Tes kesesuaian, mantap!"
                    },
                    {
                        id: "les_statistika_nonparametrik_05_02",
                        title: "Uji Chi Kuadrat untuk frekuensi harapan",
                        description: "Chi-kuadrat cocok frekuensi, tabel harapan vs real, asik!"
                    },
                    {
                        id: "les_statistika_nonparametrik_05_03",
                        title: "Uji Kolmogorov Smirnov",
                        description: "K-S cek distribusi kontinu, grafik s-curve, gokil!"
                    },
                    {
                        id: "les_statistika_nonparametrik_05_04",
                        title: "Uji Anderson Darling",
                        description: "Anderson penjahit distribusi, sensitif di ekor, jos!"
                    },
                    {
                        id: "les_statistika_nonparametrik_05_05",
                        title: "Konsep pengujian hipotesis asosiatif (Hubungan)",
                        description: "Ada hubungan atau nggak? Tes asosiatif, seru!"
                    },
                    {
                        id: "les_statistika_nonparametrik_05_06",
                        title: "Koefisien Kontingensi (Contingency Coefficient)",
                        description: "Ukuran keeratan kategorik, tabel kontingensi, kuy!"
                    },
                    {
                        id: "les_statistika_nonparametrik_05_07",
                        title: "Korelasi Spearman Rank",
                        description: "Spearman ranking, hubungan tanpa normal, mantap!"
                    },
                    {
                        id: "les_statistika_nonparametrik_05_08",
                        title: "Korelasi Kendall Tau",
                        description: "Kendall pasangan cocok, tanda disordernya, greget!"
                    }
                ]
            },
            {
                id: "mod_statistika_nonparametrik_06",
                title: "Aplikasi Software Statistik",
                lessons: [
                    {
                        id: "les_statistika_nonparametrik_06_01",
                        title: "Implementasi uji nonparametrik dengan Software R",
                        description: "R bikin nonparametrik jadi koding, cepat dan gratis!"
                    },
                    {
                        id: "les_statistika_nonparametrik_06_02",
                        title: "Implementasi uji nonparametrik dengan Software SPSS",
                        description: "Klik-klik SPSS, hasil nonparametrik keluar, praktis!"
                    },
                    {
                        id: "les_statistika_nonparametrik_06_03",
                        title: "Implementasi uji nonparametrik dengan Software Python",
                        description: "Python + scipy, uji nonparametrik auto jalan, gokil!"
                    },
                    {
                        id: "les_statistika_nonparametrik_06_04",
                        title: "Interpretasi output perangkat lunak statistik",
                        description: "Baca output tanpa pusing, p-value jadi raja, yuk!"
                    },
                    {
                        id: "les_statistika_nonparametrik_06_05",
                        title: "Penulisan laporan hasil analisis statistik",
                        description: "Tulis laporan keren, metode temuan jelas, mantap!"
                    },
                    {
                        id: "les_statistika_nonparametrik_06_06",
                        title: "Visualisasi data statistik nonparametrik",
                        description: "Plot boxplot violin, data nonparametrik tetap kece!"
                    }
                ]
            }
        ]
    },
    {
        id: "pemodelan_statistika",
        title: "Pemodelan Statistika",
        description: "Mempelajari konsep dan jenis-jenis pemodelan statistika, termasuk model linier mixed effect dan aplikasinya dalam analisis data.",
        isProgramming: false,
        color: "blue",
        icon: <BarChart2 size={24} />,
        codeConfig: {
            language: "Python",
            defaultCode: "import pandas as pd\nimport statsmodels.formula.api as smf\n\n# Contoh model linier mixed effect\nmodel = smf.mixedlm('y ~ x', data=df, groups=df['grup'])\nresult = model.fit()\nprint(result.summary())",
            placeholder: "Tulis kode Python untuk membangun model statistika..."
        },
        modules: [
            {
                id: "mod_pemodelan_statistika_01",
                title: "Konsep Pemodelan Statistika",
                lessons: [
                    {
                        id: "les_pemodelan_statistika_01_01",
                        title: "Pengertian Pemodelan Statistika",
                        description: "Kenalan sama model statistik, gokil!"
                    },
                    {
                        id: "les_pemodelan_statistika_01_02",
                        title: "Jenis Pemodelan Statistika",
                        description: "Eksplorasi ragam model, seru banget!"
                    },
                    {
                        id: "les_pemodelan_statistika_01_03",
                        title: "Perkembangan Pemodelan Statistika",
                        description: "Jejak langkah model dari jadul-ke-now."
                    }
                ]
            },
            {
                id: "mod_pemodelan_statistika_02",
                title: "Model Linier Mix Effect",
                lessons: [
                    {
                        id: "les_pemodelan_statistika_02_01",
                        title: "Konsep Model Linier Mix Effect",
                        description: "Campur aduk fixed-random, mantap!"
                    },
                    {
                        id: "les_pemodelan_statistika_02_02",
                        title: "Aplikasi Model Linier Mix Effect",
                        description: "Praktikkan mixed model, langsung kuy!"
                    },
                    {
                        id: "les_pemodelan_statistika_02_03",
                        title: "Analisis Studi Kasus Data Riil",
                        description: "Data asli diutak-atik, seru!"
                    },
                    {
                        id: "les_pemodelan_statistika_02_04",
                        title: "Interpretasi Data Model Statistika",
                        description: "Baca hasil model tanpa pusing."
                    },
                    {
                        id: "les_pemodelan_statistika_02_05",
                        title: "Penyelesaian Masalah Statistik Data Benua Maritim",
                        description: "Taklukkan data kelautan, greget!"
                    },
                    {
                        id: "les_pemodelan_statistika_02_06",
                        title: "Penyusunan Draf Laporan Ilmiah Pemodelan",
                        description: "Tulis laporan kece, cus!"
                    }
                ]
            },
            {
                id: "mod_pemodelan_statistika_03",
                title: "Generalized Linear Model",
                lessons: [
                    {
                        id: "les_pemodelan_statistika_03_01",
                        title: "Konsep Generalized Linear Model",
                        description: "GLM: perluas horizon linier, wah!"
                    },
                    {
                        id: "les_pemodelan_statistika_03_02",
                        title: "Aplikasi Generalized Linear Model",
                        description: "GLM langsung jalan, gass!"
                    },
                    {
                        id: "les_pemodelan_statistika_03_03",
                        title: "Analisis Regresi Non-Linear",
                        description: "Lengkungkan data, asyik!"
                    }
                ]
            },
            {
                id: "mod_pemodelan_statistika_04",
                title: "Simulasi Statistika",
                lessons: [
                    {
                        id: "les_pemodelan_statistika_04_01",
                        title: "Teknik Simulasi Pemodelan Statistika",
                        description: "Pura-pura dunia data, seru!"
                    },
                    {
                        id: "les_pemodelan_statistika_04_02",
                        title: "Pembuatan Model Simulasi",
                        description: "Rakit simulasi sendiri, mantul!"
                    },
                    {
                        id: "les_pemodelan_statistika_04_03",
                        title: "Analisis Kasus Simulasi Statistika",
                        description: "Uji kasus fiktif, greget!"
                    },
                    {
                        id: "les_pemodelan_statistika_04_04",
                        title: "Interpretasi Hasil Simulasi",
                        description: "Bongkar makna angka simulasi."
                    },
                    {
                        id: "les_pemodelan_statistika_04_05",
                        title: "Penyusunan Draf Artikel Simulasi",
                        description: "Tulis artikel simulasi kece, yuk!"
                    },
                    {
                        id: "les_pemodelan_statistika_04_06",
                        title: "Penyusunan Laporan Analisis Simulasi",
                        description: "Laporan simulasi rapi, selesai!"
                    }
                ]
            }
        ]
    },
    {
        id: "pengantar-analisis-real",
        title: "Pengantar Analisis Real",
        description: "Mengenal dasar-dasar analisis real: himpunan, keberhinggaan, dan struktur bilangan real sebagai fondasi kalkulus lanjut.",
        isProgramming: false,
        color: "indigo",
        icon: <Calculator size={24} />,
        codeConfig: {
            language: "Markdown",
            defaultCode: "# Catatan Analisis Real",
            placeholder: "Tulis definisi, teorema, atau bukti di sini..."
        },
        modules: [
            {
                id: "mod_pengantar-analisis-real_01",
                title: "Pengantar Himpunan",
                lessons: [
                    {
                        id: "les_pengantar-analisis-real_01_01",
                        title: "Pengantar Himpunan",
                        description: "Kuy mengenal keluarga logika: himpunan!"
                    },
                    {
                        id: "les_pengantar-analisis-real_01_02",
                        title: "Himpunan Hingga",
                        description: "Hitung jari-jari, gak sampai nglipat!"
                    },
                    {
                        id: "les_pengantar-analisis-real_01_03",
                        title: "Himpunan Tak Hingga",
                        description: "Gokil, banyaknya bikin pusing!"
                    },
                    {
                        id: "les_pengantar-analisis-real_01_04",
                        title: "Himpunan Terhitung",
                        description: "Bisa di-nomorin, meski tak terbatas!"
                    },
                    {
                        id: "les_pengantar-analisis-real_01_05",
                        title: "Himpunan Tak Terhitung",
                        description: "Terlalu padat buat di-itung, mantap!"
                    },
                    {
                        id: "les_pengantar-analisis-real_01_06",
                        title: "Induksi Matematika",
                        description: "Domino matematika yang bikin nagih!"
                    }
                ]
            },
            {
                id: "mod_pengantar-analisis-real_02",
                title: "Sistem Bilangan Real",
                lessons: [
                    {
                        id: "les_pengantar-analisis-real_02_01",
                        title: "Sistem Bilangan Real",
                        description: "Lintasan nyata dari nol sampai tak hingga!"
                    },
                    {
                        id: "les_pengantar-analisis-real_02_02",
                        title: "Sifat Lapangan Bilangan Real",
                        description: "Aturan main seru aljabar R!"
                    },
                    {
                        id: "les_pengantar-analisis-real_02_03",
                        title: "Sifat Urutan Bilangan Real",
                        description: "Tata tertib bilangan biar gak salah urut!"
                    },
                    {
                        id: "les_pengantar-analisis-real_02_04",
                        title: "Nilai Mutlak",
                        description: "Jarak ke nol, negatif pun jadi positif!"
                    },
                    {
                        id: "les_pengantar-analisis-real_02_05",
                        title: "Ruas Garis Bilangan Real",
                        description: "Potongan garis penuh surprise!"
                    },
                    {
                        id: "les_pengantar-analisis-real_02_06",
                        title: "Sifat Kelengkapan Bilangan Real",
                        description: "Real R penuh, gak bolong-bolong!"
                    },
                    {
                        id: "les_pengantar-analisis-real_02_07",
                        title: "Kepadatan Bilangan Real",
                        description: "Di mana-mana pasti ada tetangga baru!"
                    },
                    {
                        id: "les_pengantar-analisis-real_02_08",
                        title: "Konsep Suprimum",
                        description: "Batas atas paling ngetop!"
                    },
                    {
                        id: "les_pengantar-analisis-real_02_09",
                        title: "Konsep Infimum",
                        description: "Batas bawah paling greget!"
                    },
                    {
                        id: "les_pengantar-analisis-real_02_10",
                        title: "Aplikasi Suprimum dan Infimum",
                        description: "Ekstrem trick saat limit!"
                    }
                ]
            },
            {
                id: "mod_pengantar-analisis-real_03",
                title: "Topologi",
                lessons: [
                    {
                        id: "les_pengantar-analisis-real_03_01",
                        title: "Topologi Bilangan Real",
                        description: "Ngulik bentuk terbuka dan tertutup!"
                    },
                    {
                        id: "les_pengantar-analisis-real_03_02",
                        title: "Himpunan Buka",
                        description: "Kumpul tanpa pagar, bebas!"
                    },
                    {
                        id: "les_pengantar-analisis-real_03_03",
                        title: "Himpunan Tutup",
                        description: "Kumpul di dalam pagar, aman!"
                    },
                    {
                        id: "les_pengantar-analisis-real_03_04",
                        title: "Himpunan Kompak",
                        description: "Padat tapi efisien, gokil!"
                    },
                    {
                        id: "les_pengantar-analisis-real_03_05",
                        title: "Ruang Metrik",
                        description: "Hitung jarak ala matematikawan!"
                    },
                    {
                        id: "les_pengantar-analisis-real_03_06",
                        title: "Konsep Persekitaran Epsilon",
                        description: "Bola kecil sekeliling titik, mantap!"
                    },
                    {
                        id: "les_pengantar-analisis-real_03_07",
                        title: "Titik Interior",
                        description: "Di dalam, jauh dari pinggir!"
                    },
                    {
                        id: "les_pengantar-analisis-real_03_08",
                        title: "Titik Limit",
                        description: "Tetangga super dekat, berjejer!"
                    }
                ]
            },
            {
                id: "mod_pengantar-analisis-real_04",
                title: "Barisan dan Deret",
                lessons: [
                    {
                        id: "les_pengantar-analisis-real_04_01",
                        title: "Barisan Bilangan Real",
                        description: "Deret loncatan tak berujung!"
                    },
                    {
                        id: "les_pengantar-analisis-real_04_02",
                        title: "Limit Barisan",
                        description: "Tujuannya ada di ujung horizon!"
                    },
                    {
                        id: "les_pengantar-analisis-real_04_03",
                        title: "Kekonvergenan Barisan",
                        description: "Menuju satu titik, mantul!"
                    },
                    {
                        id: "les_pengantar-analisis-real_04_04",
                        title: "Kedivergenan Barisan",
                        description: "Ngegas kemana-mana, gak karuan!"
                    },
                    {
                        id: "les_pengantar-analisis-real_04_05",
                        title: "Teorema Konvergensi Monoton",
                        description: "Naik terus pasti ada puncaknya!"
                    },
                    {
                        id: "les_pengantar-analisis-real_04_06",
                        title: "Teorema Bolzano-Weierstrass",
                        description: "Titik kumpul selalu ada, greget!"
                    },
                    {
                        id: "les_pengantar-analisis-real_04_07",
                        title: "Teorema Cauchy",
                        description: "Tanganku rapat, barisanku konvergen!"
                    },
                    {
                        id: "les_pengantar-analisis-real_04_08",
                        title: "Kriteria Barisan Cauchy",
                        description: "Cek oke, konvergen pasti!"
                    }
                ]
            },
            {
                id: "mod_pengantar-analisis-real_05",
                title: "Limit Fungsi",
                lessons: [
                    {
                        id: "les_pengantar-analisis-real_05_01",
                        title: "Limit Fungsi Real",
                        description: "Perilaku fungsi saat x mendekati!"
                    },
                    {
                        id: "les_pengantar-analisis-real_05_02",
                        title: "Definisi Limit Epsilon-Delta",
                        description: "Jarak titik dekat, nilai dekat!"
                    },
                    {
                        id: "les_pengantar-analisis-real_05_03",
                        title: "Sifat Dasar Limit",
                        description: "Rumus jitu anti ribet limit!"
                    },
                    {
                        id: "les_pengantar-analisis-real_05_04",
                        title: "Teorema Limit",
                        description: "Jurus sakti aljabar limit!"
                    },
                    {
                        id: "les_pengantar-analisis-real_05_05",
                        title: "Perluasan Konsep Limit",
                        description: "Limit di ujung tak hingga!"
                    },
                    {
                        id: "les_pengantar-analisis-real_05_06",
                        title: "Limit Tak Hingga",
                        description: "Ngegas menuju langit matematika!"
                    }
                ]
            },
            {
                id: "mod_pengantar-analisis-real_06",
                title: "Kekontinuan Fungsi",
                lessons: [
                    {
                        id: "les_pengantar-analisis-real_06_01",
                        title: "Kekontinuan Fungsi Real",
                        description: "Gak lompat, gak bolong, mulus!"
                    },
                    {
                        id: "les_pengantar-analisis-real_06_02",
                        title: "Kekontinuan Pada Titik",
                        description: "Tajam di satu spot, mantap!"
                    },
                    {
                        id: "les_pengantar-analisis-real_06_03",
                        title: "Kekontinuan Pada Selang",
                        description: "Mulus dari ujung ke ujung!"
                    },
                    {
                        id: "les_pengantar-analisis-real_06_04",
                        title: "Kekontinuan Seragam",
                        description: "Mulus seragam di seluruh domain!"
                    },
                    {
                        id: "les_pengantar-analisis-real_06_05",
                        title: "Teorema Lipschitz",
                        description: "Kontinu plus terkontrol, gokil!"
                    },
                    {
                        id: "les_pengantar-analisis-real_06_06",
                        title: "Teorema Nilai Tengah Bolzano",
                        description: "Nol di tengah, pasti lewat!"
                    },
                    {
                        id: "les_pengantar-analisis-real_06_07",
                        title: "Teorema Maksimum-Minimum",
                        description: "Ada puncak & lembah pasti!"
                    }
                ]
            }
        ]
    },
    {
        id: "pengendalian_kualitas_statistika",
        title: "Pengendalian Kualitas Statistika",
        description: "Pembelajaran lengkap tentang pendekatan statistika untuk memastikan produk dan proses tetap sesuai standar mutu, mulai dari definisi mutu, komponen pengendalian, distribusi data, hingga penaksiran parameter mean.",
        isProgramming: false,
        color: "indigo",
        icon: <BarChart2 size={24} />,
        codeConfig: {
            language: "Markdown",
            defaultCode: "# Catatan pengendalian kualitas",
            placeholder: "Tulis hipotesis atau ringkasan analisis di sini..."
        },
        modules: [
            {
                id: "mod_pengendalian_kualitas_statistika_01",
                title: "Pengantar Pengendalian Kualitas Statistika",
                lessons: [
                    {
                        id: "les_pengendalian_kualitas_statistika_01_01",
                        title: "Definisi Mutu Statistika",
                        description: "Mutu versi angka, bukan cuma feeling!"
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_01_02",
                        title: "Komponen Mutu Statistika",
                        description: "Pecahin faktor mutu jadi puzzle data."
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_01_03",
                        title: "Konsep Dasar Pengendalian Kualitas",
                        description: "Anti gagal produk, kuy sikat dasarnya!"
                    }
                ]
            },
            {
                id: "mod_pengendalian_kualitas_statistika_02",
                title: "Konsep Statistika dalam Pengendalian Kualitas",
                lessons: [
                    {
                        id: "les_pengendalian_kualitas_statistika_02_01",
                        title: "Pola Distribusi Data",
                        description: "Bentuk-bentuk data yang bisa bikin klepek-klepek."
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_02_02",
                        title: "Penaksiran Parameter Mean",
                        description: "Tebak rata-rata ala detektif data, mantap!"
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_02_03",
                        title: "Penaksiran Parameter Variansi",
                        description: "Cari tahu sebaran data, jangan kaget kalau gokil."
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_02_04",
                        title: "Selang Kepercayaan (Confidence Interval)",
                        description: "Tebakan pake jendela, seru tapi penuh percaya!"
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_02_05",
                        title: "Distribusi Statistik untuk Pengendalian Kualitas",
                        description: "Distribusi pahlawan tanpa capek, siaga mutu!"
                    }
                ]
            },
            {
                id: "mod_pengendalian_kualitas_statistika_03",
                title: "Peta Kendali Variabel",
                lessons: [
                    {
                        id: "les_pengendalian_kualitas_statistika_03_01",
                        title: "Peta Kendali Variabel untuk Mean",
                        description: "Peta harta karun nge-track rata-rata produk."
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_03_02",
                        title: "Analisis Peta Kendali Variabel Mean",
                        description: "Ngulik grafik, bikin tren jadi ketahuan triknya."
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_03_03",
                        title: "Average Run Length (ARL) untuk Peta Kendali Mean",
                        description: "Hitung lari grafik sebelum alarm berbunyi, kuy!"
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_03_04",
                        title: "Penentuan Performa Peta Kendali Mean",
                        description: "Skor performa grafik, biar nggak cuma bikin heboh."
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_03_05",
                        title: "Peta Kendali Variabel untuk Variansi",
                        description: "Tangkap gelisah variansi lewat garis kendali."
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_03_06",
                        title: "Aplikasi Peta Kendali Variansi pada Bidang Tertentu",
                        description: "Pakai grafik variance di industri favoritmu, gokil!"
                    }
                ]
            },
            {
                id: "mod_pengendalian_kualitas_statistika_04",
                title: "Peta Kendali Atribut",
                lessons: [
                    {
                        id: "les_pengendalian_kualitas_statistika_04_01",
                        title: "Peta Kendali Atribut",
                        description: "Ngitung cacat barang, mainan atribut seru!"
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_04_02",
                        title: "Penerapan Peta Kendali Atribut pada Data Riil",
                        description: "Cus praktik langsung, ngitung reject-nya beneran!"
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_04_03",
                        title: "Average Run Length (ARL) untuk Peta Kendali Atribut",
                        description: "Prediksi lari alarm cacat, makin jago monitoring."
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_04_04",
                        title: "Penentuan Performa Peta Kendali Atribut",
                        description: "Nilai oke grafik atribut, buat pamer ke tim!"
                    }
                ]
            },
            {
                id: "mod_pengendalian_kualitas_statistika_05",
                title: "Studi Kasus dan Aplikasi",
                lessons: [
                    {
                        id: "les_pengendalian_kualitas_statistika_05_01",
                        title: "Identifikasi Kasus Masalah Pengendalian Kualitas",
                        description: "Detective mutu, cari tersangka kegagalan produksi."
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_05_02",
                        title: "Pemilihan Peta Kendali yang Tepat untuk Kasus Riil",
                        description: "Pilih senjata grafik, pasang target masalah!"
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_05_03",
                        title: "Interpretasi Hasil Analisis Peta Kendali",
                        description: "Baca grafik kayak baca tangan, tahu masa depan proses."
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_05_04",
                        title: "Eksplorasi Jurnal Pengendalian Kualitas",
                        description: "Ngulik ris orang, cari insight buat skripsi kece!"
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_05_05",
                        title: "Penerapan Metode Pengendalian Kualitas pada Data Penelitian",
                        description: "Trik kendali kualitas bikin data penelitianmu ciamik."
                    },
                    {
                        id: "les_pengendalian_kualitas_statistika_05_06",
                        title: "Penyusunan Laporan Hasil Proyek Pengendalian Kualitas",
                        description: "Tulis laporan kece, pamer hasil mutu tanpa ngasal."
                    }
                ]
            }
        ]
    },
    {
        id: "perancangan_percobaan",
        title: "Perancangan Percobaan",
        description: "Pelajari prinsip dasar merancang percobaan ilmiah: dari pengertian, tujuan, hingga konsep ulangan dan replikasi agar data yang dihasilkan valid dan dapat dianalisis secara statistik.",
        isProgramming: false,
        color: "green",
        icon: <BarChart2 size={24} />,
        codeConfig: {
            language: "Markdown",
            defaultCode: "# Rancangan Percobaan\n- Variabel bebas\n- Variabel terikat\n- Kelompok perlakuan",
            placeholder: "Tulis hipotesis & rancanganmu di sini"
        },
        modules: [
            {
                id: "mod_perancangan_percobaan_01",
                title: "Prinsip Dasar Perancangan Percobaan",
                lessons: [
                    {
                        id: "les_perancangan_percobaan_01_01",
                        title: "Statistik Deskriptif",
                        description: "Bikin data jelas cuma dengan lima jari. Mantap!"
                    },
                    {
                        id: "les_perancangan_percobaan_01_02",
                        title: "Statistik Inferensi",
                        description: "Nebak populasi dari sedikit sampel, gokil!"
                    },
                    {
                        id: "les_perancangan_percobaan_01_03",
                        title: "Pengertian Perancangan Percobaan",
                        description: "Rancang eksperimen biar gak ngawur, kuy!"
                    },
                    {
                        id: "les_perancangan_percobaan_01_04",
                        title: "Tujuan Percobaan",
                        description: "Tujuan jelas hasil makin oke, gas!"
                    },
                    {
                        id: "les_perancangan_percobaan_01_05",
                        title: "Prinsip Dasar Percobaan (Ulangan/Replication)",
                        description: "Ulangi biar hasil gak cuma hoki."
                    },
                    {
                        id: "les_perancangan_percobaan_01_06",
                        title: "Prinsip Dasar Percobaan (Pengacakan/Randomization)",
                        description: "Acak dulu biar gak ngasal, gokil!"
                    },
                    {
                        id: "les_perancangan_percobaan_01_07",
                        title: "Prinsip Dasar Percobaan (Pengendalian Lingkungan/Local Control)",
                        description: "Kontrol lingkungan biar gak kaget."
                    },
                    {
                        id: "les_perancangan_percobaan_01_08",
                        title: "Unit Percobaan",
                        description: "Satuan terkecil yang bikin data hidup."
                    },
                    {
                        id: "les_perancangan_percobaan_01_09",
                        title: "Perlakuan (Treatment)",
                        description: "Bikin objek penelitian kaget, seru!"
                    },
                    {
                        id: "les_perancangan_percobaan_01_10",
                        title: "Galat Percobaan",
                        description: "Error kecil bikin ilmu jadi besar."
                    },
                    {
                        id: "les_perancangan_percobaan_01_11",
                        title: "Klasifikasi Perancangan Percobaan",
                        description: "Pilih rancangan biar gak nyasar."
                    }
                ]
            },
            {
                id: "mod_perancangan_percobaan_02",
                title: "Rancangan Acak Lengkap (RAL)",
                lessons: [
                    {
                        id: "les_perancangan_percobaan_02_01",
                        title: "Latar Belakang Penggunaan Rancangan Acak Lengkap (RAL)",
                        description: "RAL andalan saat kelompok satu warna."
                    },
                    {
                        id: "les_perancangan_percobaan_02_02",
                        title: "Teknik Pengacakan pada Rancangan Acak Lengkap (RAL)",
                        description: "Acak semua biar gak curang, kuy!"
                    },
                    {
                        id: "les_perancangan_percobaan_02_03",
                        title: "Bagan Percobaan Rancangan Acak Lengkap (RAL)",
                        description: "Denah RAL bikin analisis makin cepat."
                    },
                    {
                        id: "les_perancangan_percobaan_02_04",
                        title: "Asumsi pada Rancangan Acak Lengkap (RAL)",
                        description: "Asumsi terpenuhi hasil mantap betul."
                    },
                    {
                        id: "les_perancangan_percobaan_02_05",
                        title: "Model Linear Rancangan Acak Lengkap (RAL)",
                        description: "Model linear RAL bikin data jadi cantik."
                    },
                    {
                        id: "les_perancangan_percobaan_02_06",
                        title: "Tabel Analisis Ragam (ANOVA) pada Rancangan Acak Lengkap (RAL)",
                        description: "Tabel ANOVA RAL bikin beda nyata."
                    },
                    {
                        id: "les_perancangan_percobaan_02_07",
                        title: "Kesimpulan Statistik pada Rancangan Acak Lengkap (RAL)",
                        description: "Kesimpulan mantap bikin paper laku."
                    },
                    {
                        id: "les_perancangan_percobaan_02_08",
                        title: "Analisis Data Hilang pada Rancangan Acak Lengkap (RAL)",
                        description: "Data ilang? Taklukin dengan rumus!"
                    }
                ]
            },
            {
                id: "mod_perancangan_percobaan_03",
                title: "Uji Perbandingan Nilai Tengah",
                lessons: [
                    {
                        id: "les_perancangan_percobaan_03_01",
                        title: "Uji Beda Nyata Terkecil (BNT/LSD)",
                        description: "BNT temukan beda paling kecil, gokil!"
                    },
                    {
                        id: "les_perancangan_percobaan_03_02",
                        title: "Uji Beda Nyata Jujur (Tukey/HSD)",
                        description: "Tukey jujur beda kelompok gak boong."
                    },
                    {
                        id: "les_perancangan_percobaan_03_03",
                        title: "Uji Berganda Duncan (DMRT)",
                        description: "DMRT bikin ranking perlakuan seru."
                    },
                    {
                        id: "les_perancangan_percobaan_03_04",
                        title: "Uji Kontras Orthogonal",
                        description: "Kontras ortogonal bikin komparasi elegan."
                    },
                    {
                        id: "les_perancangan_percobaan_03_05",
                        title: "Uji Scheffe",
                        description: "Scheffe kuat walau kelompok gak seimbang."
                    },
                    {
                        id: "les_perancangan_percobaan_03_06",
                        title: "Uji Student-Newman-Keuls (SNK)",
                        description: "SNK urut beda kelompok makin rapi."
                    }
                ]
            },
            {
                id: "mod_perancangan_percobaan_04",
                title: "Rancangan Acak Kelompok (RAK)",
                lessons: [
                    {
                        id: "les_perancangan_percobaan_04_01",
                        title: "Latar Belakang Penggunaan Rancangan Acak Kelompok (RAK/RAKL)",
                        description: "RAK pas banget kalau lingkungan gak rata."
                    },
                    {
                        id: "les_perancangan_percobaan_04_02",
                        title: "Teknik Pengacakan pada Rancangan Acak Kelompok (RAK)",
                        description: "Acak dalam kelompok, beda blok makin joss."
                    },
                    {
                        id: "les_perancangan_percobaan_04_03",
                        title: "Bagan Percobaan Rancangan Acak Kelompok (RAK)",
                        description: "Denah RAK blok rapi percobaan makin mantul."
                    },
                    {
                        id: "les_perancangan_percobaan_04_04",
                        title: "Asumsi pada Rancangan Acak Kelompok (RAK)",
                        description: "Asumsi RAK terjaga hasil makin syahdu."
                    },
                    {
                        id: "les_perancangan_percobaan_04_05",
                        title: "Model Linear Rancangan Acak Kelompok (RAK)",
                        description: "Model RAK sederhana tapi powerfull, kuy!"
                    },
                    {
                        id: "les_perancangan_percobaan_04_06",
                        title: "Tabel Analisis Ragam (ANOVA) pada Rancangan Acak Kelompok (RAK)",
                        description: "ANOVA RAK pisah blok makin jernih."
                    },
                    {
                        id: "les_perancangan_percobaan_04_07",
                        title: "Analisis Data Hilang pada Rancangan Acak Kelompok (RAK)",
                        description: "Data ilang di blok? Kita tangani!"
                    }
                ]
            },
            {
                id: "mod_perancangan_percobaan_05",
                title: "Rancangan Bujur Sangkar Latin (RBSL)",
                lessons: [
                    {
                        id: "les_perancangan_percobaan_05_01",
                        title: "Latar Belakang Penggunaan Rancangan Bujur Sangkar Latin (RBSL)",
                        description: "RBSL andalan dua gangguan sekaligus."
                    },
                    {
                        id: "les_perancangan_percobaan_05_02",
                        title: "Teknik Pengacakan pada Rancangan Bujur Sangkar Latin (RBSL)",
                        description: "Acak baris-kolom bikin RBSL jadi raja."
                    },
                    {
                        id: "les_perancangan_percobaan_05_03",
                        title: "Bagan Percobaan Rancangan Bujur Sangkar Latin (RBSL)",
                        description: "Denah kotak ajaib RBSL bikin elegan."
                    },
                    {
                        id: "les_perancangan_percobaan_05_04",
                        title: "Asumsi pada Rancangan Bujur Sangkar Latin (RBSL)",
                        description: "Asumsi RBSL terkontrol serasa sihir."
                    },
                    {
                        id: "les_perancangan_percobaan_05_05",
                        title: "Model Linear Rancangan Bujur Sangkar Latin (RBSL)",
                        description: "Model RBSL ringkas tapi tangguh."
                    },
                    {
                        id: "les_perancangan_percobaan_05_06",
                        title: "Tabel Analisis Ragam (ANOVA) pada Rancangan Bujur Sangkar Latin (RBSL)",
                        description: "ANOVA RBSL beda baris-kolom jelas."
                    },
                    {
                        id: "les_perancangan_percobaan_05_07",
                        title: "Analisis Data Hilang pada Rancangan Bujur Sangkar Latin (RBSL)",
                        description: "Data ilang di kotak? RBSL tetap jalan."
                    }
                ]
            },
            {
                id: "mod_perancangan_percobaan_06",
                title: "Praktikum dan Komputasi",
                lessons: [
                    {
                        id: "les_perancangan_percobaan_06_01",
                        title: "Aplikasi Software Statistika untuk Rancangan Satu Faktor",
                        description: "Klik-klik software analisis selesai, gokil!"
                    },
                    {
                        id: "les_perancangan_percobaan_06_02",
                        title: "Analisis Data dan Interpretasi Output Software (Satu Faktor)",
                        description: "Output software dibaca asik langsung paham."
                    },
                    {
                        id: "les_perancangan_percobaan_06_03",
                        title: "Penyusunan Laporan Eksperimen Satu Faktor",
                        description: "Laporan rapi satu faktor bikin dosen senyum."
                    }
                ]
            },
            {
                id: "mod_perancangan_percobaan_07",
                title: "Rancangan Faktorial",
                lessons: [
                    {
                        id: "les_perancangan_percobaan_07_01",
                        title: "Rancangan Percobaan Dua Faktor dalam RAL (Faktorial RAL)",
                        description: "Dua faktor RAL interaksi seru abis!"
                    },
                    {
                        id: "les_perancangan_percobaan_07_02",
                        title: "Rancangan Percobaan Dua Faktor dalam RAK (Faktorial RAKL)",
                        description: "Faktorial RAKL blok interaksi makin greget."
                    },
                    {
                        id: "les_perancangan_percobaan_07_03",
                        title: "Rancangan Petak Terbagi (Split-Plot Design)",
                        description: "Split-plot pas faktor ukuran beda jauh."
                    },
                    {
                        id: "les_perancangan_percobaan_07_04",
                        title: "Rancangan Kelompok Terbagi (Split-Block Design/Strip-Plot)",
                        description: "Strip-plot dua arah eksperimen makin cepat."
                    },
                    {
                        id: "les_perancangan_percobaan_07_05",
                        title: "Percobaan dengan Pengamatan Berulang (Repeated Measures)",
                        description: "Ukur berulang tren waktu jadi kentara."
                    }
                ]
            },
            {
                id: "mod_perancangan_percobaan_08",
                title: "Pengujian Asumsi",
                lessons: [
                    {
                        id: "les_perancangan_percobaan_08_01",
                        title: "Pengujian Asumsi Normalitas Galat",
                        description: "Normalitas galat dicek data makin valid."
                    },
                    {
                        id: "les_perancangan_percobaan_08_02",
                        title: "Pengujian Asumsi Homogenitas Ragam",
                        description: "Homogenitas ragam oke ANOVA terpercaya."
                    },
                    {
                        id: "les_perancangan_percobaan_08_03",
                        title: "Pengujian Asumsi Aditivitas Model",
                        description: "Aditivitas model terpenuhi hasil gak bias."
                    },
                    {
                        id: "les_perancangan_percobaan_08_04",
                        title: "Pengujian Asumsi Kebebasan Galat",
                        description: "Galat bebas bikin kesimpulan makin nyaman."
                    },
                    {
                        id: "les_perancangan_percobaan_08_05",
                        title: "Identifikasi Penyebab Pelanggaran Asumsi",
                        description: "Cari akar masalah asumsi makin jelas."
                    },
                    {
                        id: "les_perancangan_percobaan_08_06",
                        title: "Teknik Mengatasi Pelanggaran Asumsi (Transformasi Data)",
                        description: "Transform data asumsi kembali ke trek."
                    }
                ]
            },
            {
                id: "mod_perancangan_percobaan_09",
                title: "Praktikum dan Komputasi Lanjut",
                lessons: [
                    {
                        id: "les_perancangan_percobaan_09_01",
                        title: "Aplikasi Software Statistika untuk Rancangan Dua Faktor",
                        description: "Software dua faktor klik langsung komplit."
                    },
                    {
                        id: "les_perancangan_percobaan_09_02",
                        title: "Analisis Data dan Interpretasi Output Software (Dua Faktor)",
                        description: "Output dua faktor dibaca seru langsung paham."
                    },
                    {
                        id: "les_perancangan_percobaan_09_03",
                        title: "Penyusunan Laporan Eksperimen Dua Faktor",
                        description: "Laporan dua faktor keren bikin kagum."
                    }
                ]
            }
        ]
    },
    {
        id: "proses_skotastik",
        title: "Proses Stokastik",
        description: "Mempelajari fenomena acak melalui ruang sampel, peluang, kejadian bebas & bersyarat, serta variabel acak untuk memodelkan ketidakpastian secara matematis.",
        isProgramming: false,
        color: "purple",
        icon: <Dices size={24} />,
        codeConfig: {
            language: "Markdown",
            defaultCode: "",
            placeholder: "Tulis rumus atau catatan teori di sini…"
        },
        modules: [
            {
                id: "mod_proses_skotastik_01",
                title: "Pengantar Peluang dan Variabel Acak",
                lessons: [
                    {
                        id: "les_proses_skotastik_01_01",
                        title: "Pengantar Peluang",
                        description: "Kupas tuntas materi Pengantar Peluang bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_01_02",
                        title: "Ruang Sampel dan Kejadian",
                        description: "Kupas tuntas materi Ruang Sampel dan Kejadian bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_01_03",
                        title: "Peluang Terdefinisi pada Kejadian",
                        description: "Kupas tuntas materi Peluang Terdefinisi pada Kejadian bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_01_04",
                        title: "Peluang Bersyarat",
                        description: "Kupas tuntas materi Peluang Bersyarat bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_01_05",
                        title: "Kejadian Saling Bebas",
                        description: "Kupas tuntas materi Kejadian Saling Bebas bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_01_06",
                        title: "Formula Bayes",
                        description: "Kupas tuntas materi Formula Bayes bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_01_07",
                        title: "Variabel Acak Diskrit Bernoulli",
                        description: "Kupas tuntas materi Variabel Acak Diskrit Bernoulli bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_01_08",
                        title: "Variabel Acak Diskrit Binomial",
                        description: "Kupas tuntas materi Variabel Acak Diskrit Binomial bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_01_09",
                        title: "Variabel Acak Diskrit Geometrik",
                        description: "Kupas tuntas materi Variabel Acak Diskrit Geometrik bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_01_10",
                        title: "Variabel Acak Diskrit Poisson",
                        description: "Kupas tuntas materi Variabel Acak Diskrit Poisson bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_01_11",
                        title: "Variabel Acak Kontinu Uniform",
                        description: "Kupas tuntas materi Variabel Acak Kontinu Uniform bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_01_12",
                        title: "Variabel Acak Kontinu Eksponensial",
                        description: "Kupas tuntas materi Variabel Acak Kontinu Eksponensial bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_01_13",
                        title: "Variabel Acak Kontinu Gamma",
                        description: "Kupas tuntas materi Variabel Acak Kontinu Gamma bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_01_14",
                        title: "Variabel Acak Kontinu Normal",
                        description: "Kupas tuntas materi Variabel Acak Kontinu Normal bareng ahlinya. Gas belajar!"
                    }
                ]
            },
            {
                id: "mod_proses_skotastik_02",
                title: "Ekspektasi Variabel Acak",
                lessons: [
                    {
                        id: "les_proses_skotastik_02_01",
                        title: "Ekspektasi Variabel Acak Kasus Diskrit",
                        description: "Kupas tuntas materi Ekspektasi Variabel Acak Kasus Diskrit bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_02_02",
                        title: "Ekspektasi Variabel Acak Kasus Kontinu",
                        description: "Kupas tuntas materi Ekspektasi Variabel Acak Kasus Kontinu bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_02_03",
                        title: "Ekspektasi Fungsi Variabel Acak",
                        description: "Kupas tuntas materi Ekspektasi Fungsi Variabel Acak bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_02_04",
                        title: "Distribusi Bersama Variabel Acak",
                        description: "Kupas tuntas materi Distribusi Bersama Variabel Acak bareng ahlinya. Gas belajar!"
                    }
                ]
            },
            {
                id: "mod_proses_skotastik_03",
                title: "Peluang dan Ekspektasi Bersyarat",
                lessons: [
                    {
                        id: "les_proses_skotastik_03_01",
                        title: "Peluang Bersyarat Kasus Diskrit",
                        description: "Kupas tuntas materi Peluang Bersyarat Kasus Diskrit bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_03_02",
                        title: "Peluang Bersyarat Kasus Kontinu",
                        description: "Kupas tuntas materi Peluang Bersyarat Kasus Kontinu bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_03_03",
                        title: "Ekspektasi Bersyarat Kasus Diskrit",
                        description: "Kupas tuntas materi Ekspektasi Bersyarat Kasus Diskrit bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_03_04",
                        title: "Ekspektasi Bersyarat Kasus Kontinu",
                        description: "Kupas tuntas materi Ekspektasi Bersyarat Kasus Kontinu bareng ahlinya. Gas belajar!"
                    }
                ]
            },
            {
                id: "mod_proses_skotastik_04",
                title: "Dasar Proses Poisson",
                lessons: [
                    {
                        id: "les_proses_skotastik_04_01",
                        title: "Proses Menghitung (Counting Process)",
                        description: "Kupas tuntas materi Proses Menghitung (Counting Process) bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_04_02",
                        title: "Definisi Proses Poisson",
                        description: "Kupas tuntas materi Definisi Proses Poisson bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_04_03",
                        title: "Distribusi Antar Kedatangan",
                        description: "Kupas tuntas materi Distribusi Antar Kedatangan bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_04_04",
                        title: "Distribusi Waktu Tunggu",
                        description: "Kupas tuntas materi Distribusi Waktu Tunggu bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_04_05",
                        title: "Sifat-sifat Proses Poisson",
                        description: "Kupas tuntas materi Sifat-sifat Proses Poisson bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_04_06",
                        title: "Distribusi Bersyarat Waktu Kedatangan",
                        description: "Kupas tuntas materi Distribusi Bersyarat Waktu Kedatangan bareng ahlinya. Gas belajar!"
                    }
                ]
            },
            {
                id: "mod_proses_skotastik_05",
                title: "Distribusi Eksponensial",
                lessons: [
                    {
                        id: "les_proses_skotastik_05_01",
                        title: "Definisi Distribusi Eksponensial",
                        description: "Kupas tuntas materi Definisi Distribusi Eksponensial bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_05_02",
                        title: "Sifat Distribusi Eksponensial",
                        description: "Kupas tuntas materi Sifat Distribusi Eksponensial bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_05_03",
                        title: "Konvolusi Variabel Acak Eksponensial",
                        description: "Kupas tuntas materi Konvolusi Variabel Acak Eksponensial bareng ahlinya. Gas belajar!"
                    }
                ]
            },
            {
                id: "mod_proses_skotastik_06",
                title: "Proses Poisson Lanjut",
                lessons: [
                    {
                        id: "les_proses_skotastik_06_01",
                        title: "Proses Poisson Non Homogen",
                        description: "Kupas tuntas materi Proses Poisson Non Homogen bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_06_02",
                        title: "Compound Poisson Process",
                        description: "Kupas tuntas materi Compound Poisson Process bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_06_03",
                        title: "Conditional Poisson Process",
                        description: "Kupas tuntas materi Conditional Poisson Process bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_06_04",
                        title: "Mixed Poisson Process",
                        description: "Kupas tuntas materi Mixed Poisson Process bareng ahlinya. Gas belajar!"
                    }
                ]
            },
            {
                id: "mod_proses_skotastik_07",
                title: "Rantai Markov Diskrit",
                lessons: [
                    {
                        id: "les_proses_skotastik_07_01",
                        title: "Definisi Rantai Markov",
                        description: "Kupas tuntas materi Definisi Rantai Markov bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_07_02",
                        title: "Persamaan Chapman-Kolmogorov",
                        description: "Kupas tuntas materi Persamaan Chapman-Kolmogorov bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_07_03",
                        title: "Klasifikasi State",
                        description: "Kupas tuntas materi Klasifikasi State bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_07_04",
                        title: "Limiting Probabilities",
                        description: "Kupas tuntas materi Limiting Probabilities bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_07_05",
                        title: "Proses Percabangan",
                        description: "Kupas tuntas materi Proses Percabangan bareng ahlinya. Gas belajar!"
                    }
                ]
            },
            {
                id: "mod_proses_skotastik_08",
                title: "Rantai Markov Kontinyu",
                lessons: [
                    {
                        id: "les_proses_skotastik_08_01",
                        title: "Rantai Markov Waktu Kontinyu",
                        description: "Kupas tuntas materi Rantai Markov Waktu Kontinyu bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_08_02",
                        title: "Sifat Markov untuk Proses Waktu Kontinyu",
                        description: "Kupas tuntas materi Sifat Markov untuk Proses Waktu Kontinyu bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_08_03",
                        title: "Fungsi Peluang Transisi",
                        description: "Kupas tuntas materi Fungsi Peluang Transisi bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_08_04",
                        title: "Pure Birth Process (Proses Kelahiran Murni)",
                        description: "Kupas tuntas materi Pure Birth Process (Proses Kelahiran Murni) bareng ahlinya. Gas belajar!"
                    },
                    {
                        id: "les_proses_skotastik_08_05",
                        title: "Pure Death Process (Proses Kematian Murni)",
                        description: "Kupas tuntas materi Pure Death Process (Proses Kematian Murni) bareng ahlinya. Gas belajar!"
                    }
                ]
            },
            {
                id: "mod_proses_skotastik_09",
                title: "Evaluasi Akhir",
                lessons: [
                    {
                        id: "les_proses_skotastik_09_01",
                        title: "Presentasi Project Akhir",
                        description: "Kupas tuntas materi Presentasi Project Akhir bareng ahlinya. Gas belajar!"
                    }
                ]
            }
        ]
    },
    {
        id: "riset_pasar",
        title: "Riset Pasar",
        description: "Pelajari cara mengumpulkan, menganalisis, dan menafsirkan data pasar untuk mengambil keputusan strategis dalam pengembangan produk, penetapan harga, promosi, dan distribusi.",
        isProgramming: false,
        color: "yellow",
        icon: <BarChart2 size={24} />,
        codeConfig: {
            language: "Markdown",
            defaultCode: "# Langkah Riset Pasar\n1. Tentukan tujuan\n2. Kumpulkan data\n3. Analisis temuan\n4. Ambil keputusan",
            placeholder: "Tulis ringkasan hasil survei atau analisis SWOT di sini..."
        },
        modules: [
            {
                id: "mod_riset_pasar_01",
                title: "Dasar Riset Pemasaran",
                lessons: [
                    {
                        id: "les_riset_pasar_01_01",
                        title: "Pengantar Riset Pemasaran",
                        description: "Kenalan sama jurus detektif pasar, gokil pokoknya!"
                    },
                    {
                        id: "les_riset_pasar_01_02",
                        title: "Jenis-jenis Riset Pemasaran",
                        description: "Eksplorasi alat riset dari A-Z, pilih senjatamu!"
                    }
                ]
            },
            {
                id: "mod_riset_pasar_02",
                title: "Strategi Pemasaran dan Digital",
                lessons: [
                    {
                        id: "les_riset_pasar_02_01",
                        title: "Segmentasi Pasar",
                        description: "Pecah-belah pasar biar nggak bikin bingung, mantap!"
                    },
                    {
                        id: "les_riset_pasar_02_02",
                        title: "Digital Marketing Sederhana",
                        description: "Promosi online ala kadarnya tapi tetep ngetop, kuy!"
                    },
                    {
                        id: "les_riset_pasar_02_03",
                        title: "Strategi Promosi Produk",
                        description: "Bikin iklan ceplas-ceplos sampai viral, seru abis!"
                    },
                    {
                        id: "les_riset_pasar_02_04",
                        title: "Strategi Penjualan Produk",
                        description: "Jualan sampai stok licin, jurus ampuh ini!"
                    }
                ]
            },
            {
                id: "mod_riset_pasar_03",
                title: "Portofolio Riset Pemasaran",
                lessons: [
                    {
                        id: "les_riset_pasar_03_01",
                        title: "Kajian Riset Pemasaran Berbagai Bidang",
                        description: "Bongkar rahasia bisnis dari sektor apapun, asik!"
                    },
                    {
                        id: "les_riset_pasar_03_02",
                        title: "Kerangka Portofolio Riset Pemasaran",
                        description: "Rakit porto riset kece badai, pamer skill!"
                    },
                    {
                        id: "les_riset_pasar_03_03",
                        title: "Riset Pemasaran Bidang Pendidikan",
                        description: "Cari celah bisnis di dunia pendidikan, gokil!"
                    },
                    {
                        id: "les_riset_pasar_03_04",
                        title: "Riset Pemasaran Bidang Kesehatan",
                        description: "Suntik pasar kesehatan penuh profit, wajib coba!"
                    },
                    {
                        id: "les_riset_pasar_03_05",
                        title: "Riset Pemasaran Bidang Telekomunikasi",
                        description: "Sinyal untung makin kuat, triknya di sini!"
                    },
                    {
                        id: "les_riset_pasar_03_06",
                        title: "Riset Pemasaran Bidang Transportasi Umum",
                        description: "Naik angkot tapi ide bisnisnya limousin, seru!"
                    },
                    {
                        id: "les_riset_pasar_03_07",
                        title: "Riset Pemasaran Bidang Asuransi",
                        description: "Jago jualin rasa aman, komisi melimpah!"
                    },
                    {
                        id: "les_riset_pasar_03_08",
                        title: "Riset Pemasaran Bidang Perbankan",
                        description: "Kalkulasi untung dari tabungan sampai kredit, mantap!"
                    },
                    {
                        id: "les_riset_pasar_03_09",
                        title: "Riset Pemasaran Bidang Industri",
                        description: "Mesin riset bikin pabrik ngacir, juara!"
                    }
                ]
            },
            {
                id: "mod_riset_pasar_04",
                title: "Metode Analisis Data Statistika",
                lessons: [
                    {
                        id: "les_riset_pasar_04_01",
                        title: "Pengantar Analisis Data Statistika",
                        description: "Statistik tak lagi membosankan, asik dipeluk!"
                    },
                    {
                        id: "les_riset_pasar_04_02",
                        title: "Analisis Profil (Profile Analysis)",
                        description: "Bongkar perilaku konsumen sampai detail, gokil!"
                    },
                    {
                        id: "les_riset_pasar_04_03",
                        title: "Analisis Klaster (Cluster Analysis)",
                        description: "Kumpulin konsumen serupa jadi kelompok, praktis!"
                    },
                    {
                        id: "les_riset_pasar_04_04",
                        title: "Analisis Korespondensi (Correspondence Analysis)",
                        description: "Visual bikin data jadi peta harta, kece!"
                    },
                    {
                        id: "les_riset_pasar_04_05",
                        title: "Analisis Biplot",
                        description: "Plot dua dimensi, insight langsung muncul, cepat!"
                    }
                ]
            },
            {
                id: "mod_riset_pasar_05",
                title: "Aplikasi Riset Pemasaran",
                lessons: [
                    {
                        id: "les_riset_pasar_05_01",
                        title: "Simulasi Riset Pemasaran Komprehensif",
                        description: "Main peran jadi marketer pro, seru tapi nyata!"
                    },
                    {
                        id: "les_riset_pasar_05_02",
                        title: "Pengembangan Produk Berbasis Riset",
                        description: "Lahirin produk paling laris, berkat data!"
                    }
                ]
            }
        ]
    },
    {
        id: "sql_manajemen_data",
        title: "SQL & Manajemen Data",
        description: "Pelajari cara merancang, membangun, dan mengelola basis data dengan SQL—mulai dari konsep dasar sistem basis data, model data, hingga perancangan ERD dan implementasi di MySQL.",
        isProgramming: true,
        color: "blue",
        icon: <Database size={24} />,
        codeConfig: {
            language: "SQL",
            defaultCode: "SELECT * FROM users;",
            placeholder: "-- Tulis query SQL Anda di sini"
        },
        modules: [
            {
                id: "mod_sql_manajemen_data_01",
                title: "Konsep Dasar & Struktur MySQL",
                lessons: [
                    {
                        id: "les_sql_manajemen_data_01_01",
                        title: "Konsep Dasar Sistem Basis Data",
                        description: "Kenalan sama otaknya data, gokil pokoknya!"
                    },
                    {
                        id: "les_sql_manajemen_data_01_02",
                        title: "Jenis-jenis Model Data",
                        description: "Model datanya macem-macem, pilih yang paling kece!"
                    },
                    {
                        id: "les_sql_manajemen_data_01_03",
                        title: "Pengenalan MySQL",
                        description: "MySQL si kece, bikin query makin ngebut!"
                    },
                    {
                        id: "les_sql_manajemen_data_01_04",
                        title: "Struktur Dasar MySQL",
                        description: "Bongkar rahasia kerangka MySQL, mantap jiwa!"
                    }
                ]
            },
            {
                id: "mod_sql_manajemen_data_02",
                title: "Perancangan Basis Data (ERD)",
                lessons: [
                    {
                        id: "les_sql_manajemen_data_02_01",
                        title: "Model Data Entity Relationship Diagram (ERD)",
                        description: "Gambar hubungan data, hasilnya lucu-lucu!"
                    },
                    {
                        id: "les_sql_manajemen_data_02_02",
                        title: "Komponen Entity Relationship Diagram",
                        description: "Rakit puzzle ERD, serasa main Minecraft!"
                    },
                    {
                        id: "les_sql_manajemen_data_02_03",
                        title: "Jenis Atribut Basis Data",
                        description: "Atributnya macem-macem, pilih yang cocok!"
                    },
                    {
                        id: "les_sql_manajemen_data_02_04",
                        title: "Kardinalitas Relasi",
                        description: "Hitung kencan antar tabel, gak pakai galau!"
                    },
                    {
                        id: "les_sql_manajemen_data_02_05",
                        title: "Transformasi Model ER ke Model Relasi",
                        description: "Rubah ERD jadi tabel, kayak sulap!"
                    }
                ]
            },
            {
                id: "mod_sql_manajemen_data_03",
                title: "Normalisasi Basis Data",
                lessons: [
                    {
                        id: "les_sql_manajemen_data_03_01",
                        title: "Proses Normalisasi Data",
                        description: "Beresin data berantakan, auto rapi!"
                    },
                    {
                        id: "les_sql_manajemen_data_03_02",
                        title: "Normalisasi First Normal Form (1NF)",
                        description: "Level 1 normalisasi, bikin data kece!"
                    },
                    {
                        id: "les_sql_manajemen_data_03_03",
                        title: "Normalisasi Second Normal Form (2NF)",
                        description: "Naik level dua, data makin mewah!"
                    },
                    {
                        id: "les_sql_manajemen_data_03_04",
                        title: "Normalisasi Third Normal Form (3NF)",
                        description: "Level tiga, data super ramping!"
                    },
                    {
                        id: "les_sql_manajemen_data_03_05",
                        title: "Penyusunan Struktur Basis Data Efisien",
                        description: "Rakit struktur anti lelet, gaskeun!"
                    }
                ]
            },
            {
                id: "mod_sql_manajemen_data_04",
                title: "Aljabar Relasional",
                lessons: [
                    {
                        id: "les_sql_manajemen_data_04_01",
                        title: "Operasi Aljabar pada Query",
                        description: "Matematika bikin query makin sakti!"
                    },
                    {
                        id: "les_sql_manajemen_data_04_02",
                        title: "Penyusunan Query Formal",
                        description: "Tulis query rapi, hasilnya elegan!"
                    }
                ]
            },
            {
                id: "mod_sql_manajemen_data_05",
                title: "Implementasi SQL & DML",
                lessons: [
                    {
                        id: "les_sql_manajemen_data_05_01",
                        title: "Pengenalan Structured Query Language (SQL)",
                        description: "Kenalan sama bahasa keren SQL!"
                    },
                    {
                        id: "les_sql_manajemen_data_05_02",
                        title: "Pendefinisian Data dalam SQL",
                        description: "Tentuin data di SQL, gampang banget!"
                    },
                    {
                        id: "les_sql_manajemen_data_05_03",
                        title: "Tipe-tipe Data SQL",
                        description: "Pilih tipe data, jangan salah kostum!"
                    },
                    {
                        id: "les_sql_manajemen_data_05_04",
                        title: "Definisi Query dalam SQL",
                        description: "Tulis query, hasilnya mantul!"
                    },
                    {
                        id: "les_sql_manajemen_data_05_05",
                        title: "Konsep Tabel sebagai Set",
                        description: "Tabel itu himpunan, matematikanya seksi!"
                    },
                    {
                        id: "les_sql_manajemen_data_05_06",
                        title: "Nested Queries (Sub-query)",
                        description: "Query di dalam query, inception beneran!"
                    },
                    {
                        id: "les_sql_manajemen_data_05_07",
                        title: "Set Comparations (Perbandingan Himpunan)",
                        description: "Bandingin himpunan, cari jodohnya!"
                    },
                    {
                        id: "les_sql_manajemen_data_05_08",
                        title: "Perintah Dasar Data Manipulation Language (DML)",
                        description: "Pake DML, mainin data seenaknya!"
                    },
                    {
                        id: "les_sql_manajemen_data_05_09",
                        title: "Pemanfaatan DML dalam Masalah",
                        description: "Solusiin soal pake DML, kece badai!"
                    },
                    {
                        id: "les_sql_manajemen_data_05_10",
                        title: "Pengelolaan Struktur dan Data Tabel",
                        description: "Kelola tabel, hidup jadi tertib!"
                    }
                ]
            },
            {
                id: "mod_sql_manajemen_data_06",
                title: "Analisis & Pengembangan Sistem",
                lessons: [
                    {
                        id: "les_sql_manajemen_data_06_01",
                        title: "Analisis Kebutuhan Basis Data",
                        description: "Riset dulu, bikin database anti fail!"
                    },
                    {
                        id: "les_sql_manajemen_data_06_02",
                        title: "Tujuan Pengembangan Sistem Database",
                        description: "Goal-nya jelas, database anti lemot!"
                    },
                    {
                        id: "les_sql_manajemen_data_06_03",
                        title: "Proses Pengembangan Basis Data",
                        description: "Step by step, hasilnya juara!"
                    },
                    {
                        id: "les_sql_manajemen_data_06_04",
                        title: "Langkah-langkah Pengembangan Basis Data",
                        description: "Ikuti alurnya, sampai garis finish!"
                    }
                ]
            },
            {
                id: "mod_sql_manajemen_data_07",
                title: "Implementasi Proyek Basis Data",
                lessons: [
                    {
                        id: "les_sql_manajemen_data_07_01",
                        title: "Implementasi Rancangan Basis Data",
                        description: "Wujudkan desain, siap-siap ngegas!"
                    },
                    {
                        id: "les_sql_manajemen_data_07_02",
                        title: "Penggunaan Perangkat Lunak Pengelola Basis Data",
                        description: "Tools kece, kerjaan makin cepet!"
                    },
                    {
                        id: "les_sql_manajemen_data_07_03",
                        title: "Teknik Query SQL Lanjut",
                        description: "Level up query, jadi juragan data!"
                    },
                    {
                        id: "les_sql_manajemen_data_07_04",
                        title: "Pembuatan Aplikasi Database",
                        description: "Bangun aplikasi, eksis di hati user!"
                    }
                ]
            }
        ]
    },
    {
        id: "statmat",
        title: "Statistika Matematika",
        description: "Pendalaman konsep distribusi terurut, fungsi peubah acak, peluang bersama & marginal, serta analisis sampel acak untuk membangun fondasi teori statistika yang kokoh.",
        isProgramming: false,
        color: "purple",
        icon: <BarChart2 size={24} />,
        codeConfig: {
            language: "Markdown",
            defaultCode: "# Catatan Teori",
            placeholder: "Tulis rumus atau catatan di sini..."
        },
        modules: [
            {
                id: "mod_statmat_01",
                title: "Distribusi Statistika Terurut",
                lessons: [
                    {
                        id: "les_statmat_01_01",
                        title: "Konsep Distribusi Statistika Terurut",
                        description: "Data diurutin, baru deh kita lihat trik distribusinya—gokil!"
                    },
                    {
                        id: "les_statmat_01_02",
                        title: "Analisis Sampel Acak",
                        description: "Sampel dipetik, pola statistiknya kece bikin ngacir!"
                    },
                    {
                        id: "les_statmat_01_03",
                        title: "Distribusi Fungsi Peubah Acak",
                        description: "Transformasi variabel acak, hasilnya bikin mikir 'mantap!'"
                    },
                    {
                        id: "les_statmat_01_04",
                        title: "Fungsi Peluang Bersama Statistik Terurut",
                        description: "Joint-nya statistik terurut, padu padan keren abis!"
                    },
                    {
                        id: "les_statmat_01_05",
                        title: "Fungsi Peluang Marginal Statistik Terurut",
                        description: "Ambil satu, coret lainnya—marginalnya tetap jos!"
                    },
                    {
                        id: "les_statmat_01_06",
                        title: "Penaksir Kuantil Sebaran Data",
                        description: "Tebak kuantil tepat, data kita jadi raja!"
                    }
                ]
            },
            {
                id: "mod_statmat_02",
                title: "Distribusi Mean dan Variansi Sampel",
                lessons: [
                    {
                        id: "les_statmat_02_01",
                        title: "Distribusi Mean Sampel",
                        description: "Rata-rata sampel berkumpul, distribusinya kuy!"
                    },
                    {
                        id: "les_statmat_02_02",
                        title: "Distribusi Variansi Sampel",
                        description: "Variansi naik-turun, sampel tetap on fire!"
                    }
                ]
            },
            {
                id: "mod_statmat_03",
                title: "Teori Kekonvergenan dan Limit Pusat",
                lessons: [
                    {
                        id: "les_statmat_03_01",
                        title: "Teori Kekonvergenan Peluang",
                        description: "Peluang makin mirip, limitnya bikin nagih!"
                    },
                    {
                        id: "les_statmat_03_02",
                        title: "Kekonvergenan Peubah Acak Melalui Peluang Kejadian",
                        description: "Event makin kecil, variabelnya mantap numpuk!"
                    },
                    {
                        id: "les_statmat_03_03",
                        title: "Kekonvergenan Peubah Acak Melalui Fungsi Distribusi",
                        description: "Distribusi makin nempel, variabelnya konvergen cakep!"
                    },
                    {
                        id: "les_statmat_03_04",
                        title: "Teori Limit Pusat",
                        description: "Sampel banyak, semua menuju lonceng—klok!"
                    },
                    {
                        id: "les_statmat_03_05",
                        title: "Nilai Hampiran Peluang pada Fungsi Peubah Acak",
                        description: "Hampiri peluang, variabel acak jadi dekat!"
                    }
                ]
            },
            {
                id: "mod_statmat_04",
                title: "Penaksiran Titik dan Selang Kepercayaan",
                lessons: [
                    {
                        id: "les_statmat_04_01",
                        title: "Teknik Penaksiran Parameter Distribusi Probabilitas",
                        description: "Tebak parameter, probabilitas makin pas!"
                    },
                    {
                        id: "les_statmat_04_02",
                        title: "Penaksiran Titik Parameter",
                        description: "Satu nilai jago, tebakan titiknya top!"
                    },
                    {
                        id: "les_statmat_04_03",
                        title: "Perhitungan Selang Kepercayaan Parameter Populasi",
                        description: "Tebak sambil jaga jarak, keyakinanmu oke!"
                    },
                    {
                        id: "les_statmat_04_04",
                        title: "Interpretasi Selang Kepercayaan",
                        description: "Artikan selang, PD-mu naik level!"
                    }
                ]
            },
            {
                id: "mod_statmat_05",
                title: "Batas Bawah Rao-Cramer dan Efisiensi",
                lessons: [
                    {
                        id: "les_statmat_05_01",
                        title: "Ketaksamaan Rao-Cramer",
                        description: "Batas bawah variansi, penaksir makin greng!"
                    },
                    {
                        id: "les_statmat_05_02",
                        title: "Batas Bawah Variansi Penaksir",
                        description: "Variansi minimal, kualitas tebakan maksimal!"
                    },
                    {
                        id: "les_statmat_05_03",
                        title: "Efisiensi Penaksir Parameter",
                        description: "Efisiensi mantul, parameter cepat tertangkap!"
                    },
                    {
                        id: "les_statmat_05_04",
                        title: "Penaksir Tak Bias",
                        description: "Tebak tanpa bengkok, mantap lurus tancap gas!"
                    },
                    {
                        id: "les_statmat_05_05",
                        title: "Penaksir Bias",
                        description: "Tebak miring, tapi kadang bikin ngakak!"
                    }
                ]
            },
            {
                id: "mod_statmat_06",
                title: "Kecukupan Statistik",
                lessons: [
                    {
                        id: "les_statmat_06_01",
                        title: "Konsep Sufficient Statistics (Statistik Cukup)",
                        description: "Info cukup, tak perlu nambah—hemat data!"
                    },
                    {
                        id: "les_statmat_06_02",
                        title: "Aplikasi Sufficient Statistics dalam Estimasi",
                        description: "Info cukup dipakai, estimasi makin cepet!"
                    },
                    {
                        id: "les_statmat_06_03",
                        title: "Metode Maximum Likelihood Estimator (MLE)",
                        description: "Likelihood maksimal, parameter kecantol!"
                    },
                    {
                        id: "les_statmat_06_04",
                        title: "Keunggulan Sufficient Statistics dalam Estimasi",
                        description: "Cukup = keren, estimasi makin ringkas!"
                    }
                ]
            },
            {
                id: "mod_statmat_07",
                title: "Teori Pengujian Hipotesis",
                lessons: [
                    {
                        id: "les_statmat_07_01",
                        title: "Teori Pengujian Hipotesis",
                        description: "Uji hipotesis, nentuin benar-salah seru!"
                    },
                    {
                        id: "les_statmat_07_02",
                        title: "Perhitungan Nilai Uji Statistik",
                        description: "Hitung nilai uji, mantap gas gas gas!"
                    },
                    {
                        id: "les_statmat_07_03",
                        title: "Penentuan Daerah Kritis",
                        description: "Tentukan wilayah kritis, putusan bikin deg-degan!"
                    },
                    {
                        id: "les_statmat_07_04",
                        title: "Jenis-jenis Uji Hipotesis",
                        description: "Uji satu, dua, atau kanan-kiri—serba seru!"
                    },
                    {
                        id: "les_statmat_07_05",
                        title: "Distribusi Peluang dalam Uji Statistik",
                        description: "Distribusi jadi juri, nilai uji makin greget!"
                    },
                    {
                        id: "les_statmat_07_06",
                        title: "Pengambilan Keputusan Berbasis Uji Statistik",
                        description: "Statistik bicara, keputusanmu anti-gagal!"
                    }
                ]
            }
        ]
    },
    {
        id: "teknik-demografi-statistika",
        title: "Teknik Demografi Statistika",
        description: "Mempelajari cara mengukur dan menganalisis dinamika penduduk: konsep dasar demografi, struktur populasi, serta teknik statistik untuk mortalitas, fertilitas dan mobilitas.",
        isProgramming: false,
        color: "indigo",
        icon: <BarChart2 size={24} />,
        codeConfig: {
            language: "Markdown",
            defaultCode: "# Analisis Mortalitas\n- Crude Death Rate\n- Age-specific Death Rate",
            placeholder: "Tuliskan rumus atau interpretasi statistik..."
        },
        modules: [
            {
                id: "mod_teknik-demografi-statistika_01",
                title: "Konsep Demografi dan Populasi",
                lessons: [
                    {
                        id: "les_teknik-demografi-statistika_01_01",
                        title: "Konsep Demografi",
                        description: "Ngulik rahasia kependudukan, gokil abis!"
                    },
                    {
                        id: "les_teknik-demografi-statistika_01_02",
                        title: "Konsep Populasi",
                        description: "Hitung manusia, bukan domba—mantap!"
                    },
                    {
                        id: "les_teknik-demografi-statistika_01_03",
                        title: "Statistik Demografi",
                        description: "Data ngetop bikin analisismu kelas dunia."
                    },
                    {
                        id: "les_teknik-demografi-statistika_01_04",
                        title: "Struktur Demografi",
                        description: "Peta umur-kelamin yang bikin mikir, seru!"
                    }
                ]
            },
            {
                id: "mod_teknik-demografi-statistika_02",
                title: "Konsep dan Ukuran Statistik Mortalitas",
                lessons: [
                    {
                        id: "les_teknik-demografi-statistika_02_01",
                        title: "Definisi Mortalitas",
                        description: "Kenali si Kematian, biar nggak kaget."
                    },
                    {
                        id: "les_teknik-demografi-statistika_02_02",
                        title: "Sumber Data Mortalitas",
                        description: "Cari data kematian? Kuy ke Dukcapil!"
                    },
                    {
                        id: "les_teknik-demografi-statistika_02_03",
                        title: "Ukuran Data Mortalitas",
                        description: "Rumus sederhana bikin mati jadi data."
                    }
                ]
            },
            {
                id: "mod_teknik-demografi-statistika_03",
                title: "Tabel Kematian",
                lessons: [
                    {
                        id: "les_teknik-demografi-statistika_03_01",
                        title: "Tabel Kematian Lengkap (Complete Life Table)",
                        description: "Tabel panjang ini bikin umur terasa."
                    },
                    {
                        id: "les_teknik-demografi-statistika_03_02",
                        title: "Tabel Kematian Diringkas (Abridged Life Table)",
                        description: "Versi ringkas tabel mati, tetap greget."
                    },
                    {
                        id: "les_teknik-demografi-statistika_03_03",
                        title: "Interpretasi Tabel Kematian",
                        description: "Baca tabel mati, jadi cenayang usia."
                    }
                ]
            },
            {
                id: "mod_teknik-demografi-statistika_04",
                title: "Analisis Fertilitas",
                lessons: [
                    {
                        id: "les_teknik-demografi-statistika_04_01",
                        title: "Konsep Dasar Fertilitas",
                        description: "Ngobrolin baby-boom, seru bareng!"
                    },
                    {
                        id: "les_teknik-demografi-statistika_04_02",
                        title: "Ukuran Data Fertilitas",
                        description: "Hitung bayi, bukan telur—mantul!"
                    },
                    {
                        id: "les_teknik-demografi-statistika_04_03",
                        title: "Teknik Pengukuran Statistik Fertilitas",
                        description: "Rumus ASFR bikin TFR kece!"
                    },
                    {
                        id: "les_teknik-demografi-statistika_04_04",
                        title: "Analisis Fertilitas",
                        description: "Gali pola kehamilan, temukan jawabnya."
                    }
                ]
            },
            {
                id: "mod_teknik-demografi-statistika_05",
                title: "Pemodelan dan Forecasting Data Demografi",
                lessons: [
                    {
                        id: "les_teknik-demografi-statistika_05_01",
                        title: "Perkembangan Pemodelan Data Demografi",
                        description: "Model kependudukan masa depan, futuristik!"
                    },
                    {
                        id: "les_teknik-demografi-statistika_05_02",
                        title: "Forecasting Data Demografi",
                        description: "Ramal jumlah penduduk, kayak cenayang."
                    }
                ]
            },
            {
                id: "mod_teknik-demografi-statistika_06",
                title: "Instrumen Survey dan Simulasi Data",
                lessons: [
                    {
                        id: "les_teknik-demografi-statistika_06_01",
                        title: "Pembuatan Instrumen Survey Kependudukan",
                        description: "Rancang kuesioner anti-bosen, kuy bikin!"
                    },
                    {
                        id: "les_teknik-demografi-statistika_06_02",
                        title: "Simulasi Data Demografi",
                        description: "Main-main data, tapi ilmiah—gokil!"
                    }
                ]
            },
            {
                id: "mod_teknik-demografi-statistika_07",
                title: "Uji Statistika Data Demografi",
                lessons: [
                    {
                        id: "les_teknik-demografi-statistika_07_01",
                        title: "Uji Statistik Deskriptif Demografi",
                        description: "Rata-rata, modus—pamer data kece."
                    },
                    {
                        id: "les_teknik-demografi-statistika_07_02",
                        title: "Visualisasi Grafik Data Demografi",
                        description: "Plot cantik, bikin dosen klepek-klepek."
                    },
                    {
                        id: "les_teknik-demografi-statistika_07_03",
                        title: "Uji Korelasi Data Demografi",
                        description: "Cari jodoh antar variabel, seru!"
                    },
                    {
                        id: "les_teknik-demografi-statistika_07_04",
                        title: "Uji Regresi Data Demografi",
                        description: "Prediksi penduduk, kayak Nostradamus."
                    },
                    {
                        id: "les_teknik-demografi-statistika_07_05",
                        title: "Uji Chi-Square Data Demografi",
                        description: "Tes cocok, data lu padan nggak?"
                    },
                    {
                        id: "les_teknik-demografi-statistika_07_06",
                        title: "Uji Nonparametrik Data Demografi",
                        description: "Data nggemes? Uji tanpa asumsi—santuy."
                    },
                    {
                        id: "les_teknik-demografi-statistika_07_07",
                        title: "Penggunaan Software Analisis Demografi",
                        description: "Klik-klik software, hasilnya wow!"
                    }
                ]
            },
            {
                id: "mod_teknik-demografi-statistika_08",
                title: "Praktikum Survei Demografi",
                lessons: [
                    {
                        id: "les_teknik-demografi-statistika_08_01",
                        title: "Teknik Pengambilan Data Demografi Lapangan",
                        description: "Keliling desa, ngobrol asik—dapat data."
                    },
                    {
                        id: "les_teknik-demografi-statistika_08_02",
                        title: "Analisis Data Demografi Riil",
                        description: "Data asli, insight nyata—mantap jiwa."
                    },
                    {
                        id: "les_teknik-demografi-statistika_08_03",
                        title: "Penyusunan Laporan Survei Kependudukan",
                        description: "Tulis laporan kece, dosen langsung juara."
                    }
                ]
            }
        ]
    },
    {
        id: "teori_peluang",
        title: "Teori Peluang",
        description: "Pelajari dasar-dasar probabilitas mulai dari kejadian acak, fungsi peluang, peluang bersyarat hingga kebebasan stokastik.",
        isProgramming: false,
        color: "yellow",
        icon: <Dices size={24} />,
        codeConfig: {
            language: "Markdown",
            defaultCode: "# Catatan Teori Peluang",
            placeholder: "Tulis rumus & catatan"
        },
        modules: [
            {
                id: "mod_teori_peluang_01",
                title: "Konsep Dasar Peluang",
                lessons: [
                    {
                        id: "les_teori_peluang_01_01",
                        title: "Kejadian Acak",
                        description: "Acara dadakan di alam semesta, gokil tapi punya pola!"
                    },
                    {
                        id: "les_teori_peluang_01_02",
                        title: "Peluang Kejadian",
                        description: "Hitung keberuntungan, kuy main tebak dadu!"
                    },
                    {
                        id: "les_teori_peluang_01_03",
                        title: "Fungsi Peluang",
                        description: "Rumus ajaib bikin peluang keliatan keren."
                    },
                    {
                        id: "les_teori_peluang_01_04",
                        title: "Peluang Bersyarat",
                        description: "Cinta yang cuma nyala kalau syarat dipenuhi."
                    },
                    {
                        id: "les_teori_peluang_01_05",
                        title: "Kebebasan Stokastik",
                        description: "Bebas tapi tetap punya aturan mainnya."
                    }
                ]
            },
            {
                id: "mod_teori_peluang_02",
                title: "Peubah Acak dan Transformasi",
                lessons: [
                    {
                        id: "les_teori_peluang_02_01",
                        title: "Peubah Acak Diskrit",
                        description: "Kado kejutan cuma di angka bulat."
                    },
                    {
                        id: "les_teori_peluang_02_02",
                        title: "Peubah Acak Kontinu",
                        description: "Angka ngalir kayak playlist lo-fi mantap."
                    },
                    {
                        id: "les_teori_peluang_02_03",
                        title: "Fungsi Kepadatan Peluang",
                        description: "Grafik yang bikin lo tau mana puncak kejadian."
                    },
                    {
                        id: "les_teori_peluang_02_04",
                        title: "Fungsi Peluang Kumulatif",
                        description: "Numpukin kejadian dari nol sampai now."
                    },
                    {
                        id: "les_teori_peluang_02_05",
                        title: "Transformasi Peubah Acak",
                        description: "Ubah acak jadi baru, kayak filter IG."
                    }
                ]
            },
            {
                id: "mod_teori_peluang_03",
                title: "Ekspektasi Matematika",
                lessons: [
                    {
                        id: "les_teori_peluang_03_01",
                        title: "Ekspektasi Peubah Acak",
                        description: "Tebak rata-rata hadiah dari mesin uang."
                    },
                    {
                        id: "les_teori_peluang_03_02",
                        title: "Mean Peubah Acak",
                        description: "Titik imbang antara mimpi dan kenyataan."
                    },
                    {
                        id: "les_teori_peluang_03_03",
                        title: "Variansi Peubah Acak",
                        description: "Ukur seberapa jauh data kalian nyebar."
                    },
                    {
                        id: "les_teori_peluang_03_04",
                        title: "Ketaksamaan Chebyshev",
                        description: "Jaminan bahwa outlier gak bakal ngacak."
                    }
                ]
            },
            {
                id: "mod_teori_peluang_04",
                title: "Distribusi Multivariat",
                lessons: [
                    {
                        id: "les_teori_peluang_04_01",
                        title: "Fungsi Kepadatan Peluang Bersama",
                        description: "Duo grafis berduet bikin insight mantap."
                    },
                    {
                        id: "les_teori_peluang_04_02",
                        title: "Fungsi Kepadatan Peluang Marginal",
                        description: "Satu di antara mereka yang akhirnya solo."
                    },
                    {
                        id: "les_teori_peluang_04_03",
                        title: "Nilai Ekspektasi Bivariat",
                        description: "Harapan double, hadiah double, seru!"
                    },
                    {
                        id: "les_teori_peluang_04_04",
                        title: "Transformasi Peubah Acak Bivariat",
                        description: "Duet acak di-remix jadi hits baru."
                    },
                    {
                        id: "les_teori_peluang_04_05",
                        title: "Fungsi Distribusi Bersyarat",
                        description: "Distribusi yang cuma keluar kalau dipanggil."
                    },
                    {
                        id: "les_teori_peluang_04_06",
                        title: "Koefisien Korelasi",
                        description: "Ukat seberapa mesra dua data berdansa."
                    },
                    {
                        id: "les_teori_peluang_04_07",
                        title: "Kebebasan Peubah Acak Bivariat",
                        description: "Pasangan bebas tapi tetap on track."
                    }
                ]
            },
            {
                id: "mod_teori_peluang_05",
                title: "Distribusi Peluang Diskrit Khusus",
                lessons: [
                    {
                        id: "les_teori_peluang_05_01",
                        title: "Distribusi Bernoulli",
                        description: "Koin mantul, menang atau kalah, seru!"
                    },
                    {
                        id: "les_teori_peluang_05_02",
                        title: "Distribusi Binomial",
                        description: "Ulangan Bernoulli yang bikin candu."
                    },
                    {
                        id: "les_teori_peluang_05_03",
                        title: "Hubungan Bernoulli dan Binomial",
                        description: "Simpel-simpel jadi kompleks, kuy naik level."
                    },
                    {
                        id: "les_teori_peluang_05_04",
                        title: "Distribusi Geometrik",
                        description: "Berapa kali coba dapetin 'sukses' pertama?"
                    },
                    {
                        id: "les_teori_peluang_05_05",
                        title: "Distribusi Multinomial",
                        description: "Bernoulli yang bisa jalanin banyak pilihan."
                    },
                    {
                        id: "les_teori_peluang_05_06",
                        title: "Distribusi Poisson",
                        description: "Hitung kejadian langka dalam rentang waktu."
                    },
                    {
                        id: "les_teori_peluang_05_07",
                        title: "Mean Distribusi Diskrit",
                        description: "Rata-rata khusus yang cuma di angka bulat."
                    },
                    {
                        id: "les_teori_peluang_05_08",
                        title: "Variansi Distribusi Diskrit",
                        description: "Sebaran spesial untuk data non-kontinu."
                    }
                ]
            },
            {
                id: "mod_teori_peluang_06",
                title: "Distribusi Peluang Kontinu Khusus",
                lessons: [
                    {
                        id: "les_teori_peluang_06_01",
                        title: "Distribusi Gamma",
                        description: "Kurva serba guna, dari antrian sampai hujan."
                    },
                    {
                        id: "les_teori_peluang_06_02",
                        title: "Distribusi Chi-Square",
                        description: "Tes cocok-melengkung yang keren."
                    },
                    {
                        id: "les_teori_peluang_06_03",
                        title: "Distribusi Beta",
                        description: "Kurva fleksibel antara nol dan satu."
                    },
                    {
                        id: "les_teori_peluang_06_04",
                        title: "Distribusi Normal",
                        description: "Lonceng emas statistik, wajib dikuasai."
                    },
                    {
                        id: "les_teori_peluang_06_05",
                        title: "Distribusi t-Student",
                        description: "Normal versi slim buat data kecil."
                    },
                    {
                        id: "les_teori_peluang_06_06",
                        title: "Distribusi F",
                        description: "Bandel buat ANOVA, bikin paper makin wah."
                    },
                    {
                        id: "les_teori_peluang_06_07",
                        title: "Distribusi Normal Bivariat",
                        description: "Lonceng dua dimensi, gemerlap!"
                    },
                    {
                        id: "les_teori_peluang_06_08",
                        title: "Mean Distribusi Kontinu",
                        description: "Titik seimbang di kurva mulus."
                    },
                    {
                        id: "les_teori_peluang_06_09",
                        title: "Variansi Distribusi Kontinu",
                        description: "Ukur lebar lebar gelombang data."
                    }
                ]
            },
            {
                id: "mod_teori_peluang_07",
                title: "Sifat Penduga dan Kekonvergenan",
                lessons: [
                    {
                        id: "les_teori_peluang_07_01",
                        title: "Ketakbiasan Penduga Parameter",
                        description: "Penduga yang on average tepat sasaran."
                    },
                    {
                        id: "les_teori_peluang_07_02",
                        title: "Kekonsistenan Penduga Parameter",
                        description: "Semakin banyak data, dia makin sticky ke nilai."
                    },
                    {
                        id: "les_teori_peluang_07_03",
                        title: "Ekspektasi Fungsi",
                        description: "Harapan hasil fungsi, lebih dari sekadar rata-rata."
                    },
                    {
                        id: "les_teori_peluang_07_04",
                        title: "Kekonvergenan Dalam Peluang",
                        description: "Peluang makin gede menuju satu titik."
                    },
                    {
                        id: "les_teori_peluang_07_05",
                        title: "Kekonvergenan Dalam Distribusi",
                        description: "Bentuk distribusi makin mirip saat n gede."
                    }
                ]
            },
            {
                id: "mod_teori_peluang_08",
                title: "Limit Distribusi dan MGF",
                lessons: [
                    {
                        id: "les_teori_peluang_08_01",
                        title: "Fungsi Pembangkit Momen",
                        description: "Rumus sakti bikin momen hidup datang."
                    },
                    {
                        id: "les_teori_peluang_08_02",
                        title: "Teorema Limit Pusat",
                        description: "Rahasia kenapa data gede jadi normal."
                    },
                    {
                        id: "les_teori_peluang_08_03",
                        title: "Hampiran Distribusi Normal",
                        description: "Triks cepat bikin distribusi kasar jadi mulus."
                    }
                ]
            }
        ]
    },
    {
        id: "teknik-pengambilan-sampel",
        title: "Teknik Pengambilan Sampel",
        description: "Pelajari cara merancang dan melaksanakan pengambilan sampel yang representatif, mulai dari konsep populasi & sampel hingga ukuran pemusatan data.",
        isProgramming: false,
        color: "teal",
        icon: <BarChart2 size={24} />,
        codeConfig: {
            language: "Markdown",
            defaultCode: "",
            placeholder: "Tulis catatan atau rumus di sini …"
        },
        modules: [
            {
                id: "mod_teknik-pengambilan-sampel_01",
                title: "Pengantar & Review",
                lessons: [
                    {
                        id: "les_teknik-pengambilan-sampel_01_01",
                        title: "Pengantar Teknik Pengambilan Sampel",
                        description: "Ngulik awal mula cara nyuri data dari bumi, gokil!"
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_01_02",
                        title: "Review Konsep Dasar Statistika",
                        description: "Reset otak, ingat lagi ajaibnya rata-rata dan teman-temannya."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_01_03",
                        title: "Populasi",
                        description: "Semua target incaranmu, dari A sampai Z—jangan sampai lupa!"
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_01_04",
                        title: "Sampel",
                        description: "Cuma sebagian kecil, tapi bisa ngomongin semuanya, mantap!"
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_01_05",
                        title: "Ukuran Pemusatan Data",
                        description: "Mean, median, modus—tiga sekawan penentu pusat perhatian."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_01_06",
                        title: "Ukuran Penyebaran Data",
                        description: "Sebaran datanya kenceng? Cek varian & simpangan baku, bro!"
                    }
                ]
            },
            {
                id: "mod_teknik-pengambilan-sampel_02",
                title: "Konsep Survei & Error",
                lessons: [
                    {
                        id: "les_teknik-pengambilan-sampel_02_01",
                        title: "Konsep Dasar Survei",
                        description: "Bikin kuesioner, sebar, dan dapetin data bombastis."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_02_02",
                        title: "Sampling Error",
                        description: "Error kecil tapi ngeselin, ketahuan pas nggak full populasi."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_02_03",
                        title: "Non-Sampling Error",
                        description: "Salah orang, salah kuesioner—nggak ada hubungannya sama ukuran sampel."
                    }
                ]
            },
            {
                id: "mod_teknik-pengambilan-sampel_03",
                title: "Klasifikasi Teknik Sampling",
                lessons: [
                    {
                        id: "les_teknik-pengambilan-sampel_03_01",
                        title: "Teknik Penarikan Sampel Berpeluang (Probability Sampling)",
                        description: "Acak semua, adil, dan punya rumus keren."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_03_02",
                        title: "Teknik Penarikan Sampel Tidak Berpeluang (Non-Probability)",
                        description: "Ngandelin keberuntungan & jaringan, tetap sah asal jago teori."
                    }
                ]
            },
            {
                id: "mod_teknik-pengambilan-sampel_04",
                title: "Simple Random Sampling (SRS)",
                lessons: [
                    {
                        id: "les_teknik-pengambilan-sampel_04_01",
                        title: "Cara Pengambilan Sampel Acak Sederhana",
                        description: "Kocok, ambil, selesai—gampang tapi sakti."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_04_02",
                        title: "Pendugaan Parameter Populasi SRS",
                        description: "Tebak populasi dari sedikit sampel, tepatnya bikin nagih."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_04_03",
                        title: "Error Pendugaan SRS",
                        description: "Tebakan selalu punya lebar sayap—ketahui selangnya, yuk!"
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_04_04",
                        title: "Penentuan Ukuran Sampel SRS",
                        description: "Hitung minimal orang biar surveymu nggak boncos."
                    }
                ]
            },
            {
                id: "mod_teknik-pengambilan-sampel_05",
                title: "Stratified Random Sampling",
                lessons: [
                    {
                        id: "les_teknik-pengambilan-sampel_05_01",
                        title: "Cara Pengambilan Sampel Acak Berlapis",
                        description: "Kelompokin dulu baru petak, hasilnya makin sleek."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_05_02",
                        title: "Pendugaan Parameter Populasi Berlapis",
                        description: "Tebak tiap strata, total jadi makin didekat realita."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_05_03",
                        title: "Error Pendugaan Berlapis",
                        description: "Lebih kecil dari SRS kalau strata-mu oke, cus!"
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_05_04",
                        title: "Penentuan Ukuran Sampel Berlapis",
                        description: "Bikin strata, atur banyaknya, surveymu makin efisien."
                    }
                ]
            },
            {
                id: "mod_teknik-pengambilan-sampel_06",
                title: "Systematic Sampling",
                lessons: [
                    {
                        id: "les_teknik-pengambilan-sampel_06_01",
                        title: "Cara Pengambilan Sampel Sistematis",
                        description: "Pilih tiap kelipatan k, praktis tapi waspada pola."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_06_02",
                        title: "Tipe Populasi dalam Sampling Sistematis",
                        description: "Linier ataupun siklik, kenali dulu barulah beraksi."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_06_03",
                        title: "Pendugaan Parameter Populasi Sistematis",
                        description: "Rata-rata sistematis, kadang lebih tajam dari yang lain."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_06_04",
                        title: "Error Pendugaan Sistematis",
                        description: "Kadang mirip SRS, kadang lebih mungil—tergantung pola."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_06_05",
                        title: "Penentuan Ukuran Sampel Sistematis",
                        description: "Tentukan k, otomatis ukuran sampelmu kelar."
                    }
                ]
            },
            {
                id: "mod_teknik-pengambilan-sampel_07",
                title: "Cluster Sampling",
                lessons: [
                    {
                        id: "les_teknik-pengambilan-sampel_07_01",
                        title: "Cara Pengambilan Sampel Bergerombol",
                        description: "Ambil satu geng, survei semua anggotanya—hemat ongkos!"
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_07_02",
                        title: "Pendugaan Parameter Populasi Cluster",
                        description: "Taksir besar wilayah dari beberapa geng, gampang dan cepat."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_07_03",
                        title: "Error Pendugaan Cluster",
                        description: "Biasanya lebih gemuk, tapi hemat rokok—toleransi ya."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_07_04",
                        title: "Penentuan Ukuran Sampel Cluster",
                        description: "Hitung berapa geng yang harus dikeroyok biar presisi pas."
                    }
                ]
            },
            {
                id: "mod_teknik-pengambilan-sampel_08",
                title: "Multistage Sampling",
                lessons: [
                    {
                        id: "les_teknik-pengambilan-sampel_08_01",
                        title: "Cara Pengambilan Sampel Secara Bertahap",
                        description: "Sampling-nya berlapis-lapis, makin dalam makin dalem."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_08_02",
                        title: "Pendugaan Parameter Populasi Secara Bertahap",
                        description: "Perkirakan populasi bertingkat, hasilnya multi-level oke!"
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_08_03",
                        title: "Error Pendugaan Secara Bertahap",
                        description: "Kompleksitas naik, error-nya unik—siap-siap aja."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_08_04",
                        title: "Penentuan Ukuran Sampel Secara Bertahap",
                        description: "Setiap stage punya perhitungan sendiri, sabar ya!"
                    }
                ]
            },
            {
                id: "mod_teknik-pengambilan-sampel_09",
                title: "Non-Probability Sampling",
                lessons: [
                    {
                        id: "les_teknik-pengambilan-sampel_09_01",
                        title: "Purposive Sampling",
                        description: "Pilih orang spesifik sesuai tujuan, jago curasi!"
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_09_02",
                        title: "Accidental Sampling",
                        description: "Ngapap yang lewat, asal cocok—kaya nemu hoki."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_09_03",
                        title: "Kuota Sampling",
                        description: "Isi kuota tiap kategori, mirip quota game RPG."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_09_04",
                        title: "Snowball Sampling",
                        description: "Bola salju referensi, bergulung terus sampai puas."
                    }
                ]
            },
            {
                id: "mod_teknik-pengambilan-sampel_10",
                title: "Estimasi Ukuran Populasi",
                lessons: [
                    {
                        id: "les_teknik-pengambilan-sampel_10_01",
                        title: "Pendugaan Ukuran Populasi Direct Sampling",
                        description: "Hitung langsung di lapangan, tanpa basa-basi."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_10_02",
                        title: "Pendugaan Ukuran Populasi Indirect (Inverse) Sampling",
                        description: "Balik-hitung dari sampel langka, jurus licik!"
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_10_03",
                        title: "Pendugaan Ukuran Populasi Quadrat Samples",
                        description: "Petak persegi penghitung satwa—kaya berhitung petak."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_10_04",
                        title: "Pendugaan Ukuran Populasi Stocked Quadrat",
                        description: "Quadrat terisi ulang, bikin estimasi makin stabil."
                    }
                ]
            },
            {
                id: "mod_teknik-pengambilan-sampel_11",
                title: "Praktik & Simulasi Lapangan",
                lessons: [
                    {
                        id: "les_teknik-pengambilan-sampel_11_01",
                        title: "Simulasi Pengambilan Sampel di Lapangan",
                        description: "Main peran jadi surveyor, seru plus keringetan."
                    },
                    {
                        id: "les_teknik-pengambilan-sampel_11_02",
                        title: "Presentasi Hasil Simulasi Lapangan",
                        description: "Pamer data, bikin audience ternganga—kuy kita peta!"
                    }
                ]
            }
        ]
    }
];