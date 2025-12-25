// src/data/courses.jsx
import { Terminal, BarChart2 } from 'lucide-react';

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
        icon: <Terminal size={24} />,
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
        color: "green",
        icon: <Terminal size={24} />,
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
        icon: <Terminal size={24} />,
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
        icon: <Terminal size={24} />,
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
    }
];