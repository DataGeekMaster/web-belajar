// src/data/courses.jsx
import { Terminal, BarChart2 } from 'lucide-react';

export const COURSES_DATA = [
    {
        id: "python_protocol",
        title: "PYTHON",
        description: "Kuasai bahasa python. Bangun backend, skrip, dan model AI.",
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
        id: "stats_stream",
        title: "STATISTIKA",
        icon: <BarChart2 size={24} />,
        description: "Pecahkan pola realitas. Analisis distribusi data dan probabilitas.",
        color: "pink",
        codeConfig: {
            language: "R",
            defaultCode: "data <- c(10, 20, 30, 40)\nmean(data)",
            placeholder: "Masukkan Kode R..."
        },
        modules: [
            {
                id: "mod_stat_desc",
                title: "Analitik Deskriptif",
                lessons: [
                    { id: "stat_intro", title: "Tipe Data", description: "Kualitatif vs Kuantitatif" },
                    { id: "stat_central", title: "Tendensi Sentral", description: "Mean, Median, Modus" },
                ]
            },
            {
                id: "mod_prob",
                title: "Matriks Probabilitas",
                lessons: [
                    { id: "prob_basic", title: "Logika Peluang", description: "Aturan Dasar Probabilitas" },
                ]
            }
        ]
    }
];