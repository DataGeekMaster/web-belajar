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
        id: "statistika_mastery",
        title: "STATISTIKA",
        description: "Dari nol sampai jago analisis data & machine learning.",
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
    }
];