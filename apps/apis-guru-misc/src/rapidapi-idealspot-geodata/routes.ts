import { createRoute, z } from '@hono/zod-openapi'

const AutocompleteSchema = z
  .object({ input: z.array(z.string()) })
  .openapi({
    example: { input: ['48453000902', '9.02'] },
    required: ['input'],
    title: 'Autocomplete',
  })
  .openapi('Autocomplete')

const CategorySchema = z
  .object({ description: z.string(), id: z.int32(), label: z.string(), parent_id: z.string() })
  .openapi({
    example: { description: null, id: 2469, label: 'White Collar', parent_id: null },
    required: ['parent_id', 'label', 'id', 'description'],
    title: 'Category',
  })
  .openapi('Category')

const Properties4Schema = z
  .object({ name: z.string() })
  .openapi({
    example: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' },
    required: ['name'],
    title: 'Properties4',
  })
  .openapi('Properties4')

const CrsSchema = z
  .object({ properties: Properties4Schema, type: z.string() })
  .openapi({
    example: { properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' }, type: 'name' },
    required: ['type', 'properties'],
    title: 'Crs',
  })
  .openapi('Crs')

const ParametersSchema = z
  .object({ category: z.array(CategorySchema) })
  .openapi({
    example: {
      category: [
        { description: null, id: 2469, label: 'White Collar', parent_id: null },
        { description: null, id: 2470, label: 'Management occupations', parent_id: null },
        { description: null, id: 2471, label: 'Top executives', parent_id: null },
        {
          description: null,
          id: 2472,
          label: 'Advertising, marketing, promotions, public relations, and sales managers',
          parent_id: null,
        },
        { description: null, id: 2473, label: 'Operations specialties managers', parent_id: null },
        { description: null, id: 2474, label: 'Other management occupations', parent_id: null },
        {
          description: null,
          id: 2475,
          label: 'Business and financial operations occupations',
          parent_id: null,
        },
        { description: null, id: 2476, label: 'Business operations specialists', parent_id: null },
        { description: null, id: 2477, label: 'Financial specialists', parent_id: null },
        {
          description: null,
          id: 2478,
          label: 'Computer and mathematical science occupations',
          parent_id: null,
        },
        { description: null, id: 2479, label: 'Computer specialists', parent_id: null },
        { description: null, id: 2480, label: 'Mathematical science occupations', parent_id: null },
        {
          description: null,
          id: 2481,
          label: 'Architecture and engineering occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2482,
          label: 'Architects, surveyors, and cartographers',
          parent_id: null,
        },
        { description: null, id: 2483, label: 'Engineers', parent_id: null },
        {
          description: null,
          id: 2484,
          label: 'Drafters, engineering, and mapping technicians',
          parent_id: null,
        },
        {
          description: null,
          id: 2485,
          label: 'Life, physical, and social science occupations',
          parent_id: null,
        },
        { description: null, id: 2486, label: 'Life scientists', parent_id: null },
        { description: null, id: 2487, label: 'Physical scientists', parent_id: null },
        {
          description: null,
          id: 2488,
          label: 'Social scientists and related occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2489,
          label: 'Life, physical, and social science technicians',
          parent_id: null,
        },
        {
          description: null,
          id: 2490,
          label: 'Community and social services occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2491,
          label: 'Counselors, social workers, and other community and social service specialists',
          parent_id: null,
        },
        { description: null, id: 2492, label: 'Religious workers', parent_id: null },
        {
          description: null,
          id: 2493,
          label: 'All other counselors, social, and religious workers',
          parent_id: null,
        },
        { description: null, id: 2494, label: 'Legal occupations', parent_id: null },
        {
          description: null,
          id: 2495,
          label: 'Lawyers, judges, and related workers',
          parent_id: null,
        },
        { description: null, id: 2496, label: 'Legal support workers', parent_id: null },
        {
          description: null,
          id: 2497,
          label: 'All other legal and related workers',
          parent_id: null,
        },
        {
          description: null,
          id: 2498,
          label: 'Education, training, and library occupations',
          parent_id: null,
        },
        { description: null, id: 2499, label: 'Postsecondary teachers', parent_id: null },
        {
          description: null,
          id: 2500,
          label: 'Primary, secondary, and special education teachers',
          parent_id: null,
        },
        { description: null, id: 2501, label: 'Other teachers and instructors', parent_id: null },
        {
          description: null,
          id: 2502,
          label: 'Librarians, curators, and archivists',
          parent_id: null,
        },
        {
          description: null,
          id: 2503,
          label: 'Other education, training, and library occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2504,
          label: 'Arts, design, entertainment, sports, and media occupations',
          parent_id: null,
        },
        { description: null, id: 2505, label: 'Art and design occupations', parent_id: null },
        {
          description: null,
          id: 2506,
          label: 'Entertainers and performers, sports and related occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2507,
          label: 'Media and communication occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2508,
          label: 'Media and communication equipment occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2509,
          label: 'Healthcare practitioners and technical occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2510,
          label: 'Health diagnosing and treating practitioners',
          parent_id: null,
        },
        {
          description: null,
          id: 2511,
          label: 'Health technologists and technicians',
          parent_id: null,
        },
        {
          description: null,
          id: 2512,
          label: 'Other healthcare practitioners and technical occupations',
          parent_id: null,
        },
        { description: null, id: 2513, label: 'Healthcare support occupations', parent_id: null },
        {
          description: null,
          id: 2514,
          label: 'Nursing, psychiatric, and home health aides',
          parent_id: null,
        },
        {
          description: null,
          id: 2515,
          label: 'Occupational and physical therapist assistants and aides',
          parent_id: null,
        },
        {
          description: null,
          id: 2516,
          label: 'Other healthcare support occupations',
          parent_id: null,
        },
        { description: null, id: 2517, label: 'Blue Collar', parent_id: null },
        { description: null, id: 2518, label: 'Protective service occupations', parent_id: null },
        {
          description: null,
          id: 2519,
          label: 'First-line supervisors/managers, protective service workers',
          parent_id: null,
        },
        {
          description: null,
          id: 2520,
          label: 'Fire fighting and prevention workers',
          parent_id: null,
        },
        { description: null, id: 2521, label: 'Law enforcement workers', parent_id: null },
        { description: null, id: 2522, label: 'Other protective service workers', parent_id: null },
        {
          description: null,
          id: 2523,
          label: 'Food preparation and serving related occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2524,
          label: 'Supervisors, food preparation and serving workers',
          parent_id: null,
        },
        {
          description: null,
          id: 2525,
          label: 'Cooks and food preparation workers',
          parent_id: null,
        },
        {
          description: null,
          id: 2526,
          label: 'Food and beverage serving workers',
          parent_id: null,
        },
        {
          description: null,
          id: 2527,
          label: 'Other food preparation and serving related workers',
          parent_id: null,
        },
        {
          description: null,
          id: 2528,
          label: 'Building and grounds cleaning and maintenance occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2529,
          label: 'Supervisors, building and grounds cleaning and maintenance workers',
          parent_id: null,
        },
        {
          description: null,
          id: 2530,
          label: 'Building cleaning and pest control workers',
          parent_id: null,
        },
        { description: null, id: 2531, label: 'Grounds maintenance workers', parent_id: null },
        {
          description: null,
          id: 2532,
          label: 'All other building and grounds cleaning and maintenance workers',
          parent_id: null,
        },
        {
          description: null,
          id: 2533,
          label: 'Personal care and service occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2534,
          label: 'Supervisors, personal care and service workers',
          parent_id: null,
        },
        { description: null, id: 2535, label: 'Animal care and service workers', parent_id: null },
        {
          description: null,
          id: 2536,
          label: 'Entertainment attendants and related workers',
          parent_id: null,
        },
        { description: null, id: 2537, label: 'Funeral service workers', parent_id: null },
        { description: null, id: 2538, label: 'Personal appearance workers', parent_id: null },
        {
          description: null,
          id: 2539,
          label: 'Transportation, tourism, and lodging attendants',
          parent_id: null,
        },
        {
          description: null,
          id: 2540,
          label: 'Other personal care and service workers',
          parent_id: null,
        },
        { description: null, id: 2541, label: 'Sales and related occupations', parent_id: null },
        { description: null, id: 2542, label: 'Supervisors, sales workers', parent_id: null },
        { description: null, id: 2543, label: 'Retail sales workers', parent_id: null },
        { description: null, id: 2544, label: 'Sales representatives, services', parent_id: null },
        {
          description: null,
          id: 2545,
          label: 'Sales representatives, wholesale and manufacturing',
          parent_id: null,
        },
        { description: null, id: 2546, label: 'Other sales and related workers', parent_id: null },
        {
          description: null,
          id: 2547,
          label: 'Office and administrative support occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2548,
          label: 'Supervisors, office and administrative support workers',
          parent_id: null,
        },
        {
          description: null,
          id: 2549,
          label: 'Communications equipment operators',
          parent_id: null,
        },
        { description: null, id: 2550, label: 'Financial clerks', parent_id: null },
        { description: null, id: 2551, label: 'Information and record clerks', parent_id: null },
        {
          description: null,
          id: 2552,
          label: 'Material recording, scheduling, dispatching, and distributing occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2553,
          label: 'Secretaries and administrative assistants',
          parent_id: null,
        },
        {
          description: null,
          id: 2554,
          label: 'Other office and administrative support workers',
          parent_id: null,
        },
        {
          description: null,
          id: 2555,
          label: 'Farming, fishing, and forestry occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2556,
          label: 'Supervisors, farming, fishing, and forestry workers',
          parent_id: null,
        },
        { description: null, id: 2557, label: 'Agricultural workers', parent_id: null },
        { description: null, id: 2558, label: 'Fishing and hunting workers', parent_id: null },
        {
          description: null,
          id: 2559,
          label: 'Forest, conservation, and logging workers',
          parent_id: null,
        },
        {
          description: null,
          id: 2560,
          label: 'Construction and extraction occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2561,
          label: 'Supervisors, construction and extraction workers',
          parent_id: null,
        },
        {
          description: null,
          id: 2562,
          label: 'Construction trades and related workers',
          parent_id: null,
        },
        { description: null, id: 2563, label: 'Helpers, construction trades', parent_id: null },
        {
          description: null,
          id: 2564,
          label: 'Other construction and related workers',
          parent_id: null,
        },
        { description: null, id: 2565, label: 'Extraction workers', parent_id: null },
        {
          description: null,
          id: 2566,
          label: 'Installation, maintenance, and repair occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2567,
          label: 'Supervisors of installation, maintenance, and repair workers',
          parent_id: null,
        },
        {
          description: null,
          id: 2568,
          label: 'Electrical and electronic equipment mechanics, installers, and repairers',
          parent_id: null,
        },
        {
          description: null,
          id: 2569,
          label: 'And mobile equipment mechanics, installers, and repairers',
          parent_id: null,
        },
        {
          description: null,
          id: 2570,
          label: 'Other installation, maintenance, and repair occupations',
          parent_id: null,
        },
        { description: null, id: 2571, label: 'Production occupations', parent_id: null },
        { description: null, id: 2572, label: 'Supervisors, production workers', parent_id: null },
        { description: null, id: 2573, label: 'Assemblers and fabricators', parent_id: null },
        { description: null, id: 2574, label: 'Food processing occupations', parent_id: null },
        {
          description: null,
          id: 2575,
          label: 'Metal workers and plastic workers',
          parent_id: null,
        },
        { description: null, id: 2576, label: 'Printing occupations', parent_id: null },
        {
          description: null,
          id: 2577,
          label: 'Textile, apparel, and furnishings occupations',
          parent_id: null,
        },
        { description: null, id: 2578, label: 'Woodworkers', parent_id: null },
        { description: null, id: 2579, label: 'Plant and system operators', parent_id: null },
        { description: null, id: 2580, label: 'Other production occupations', parent_id: null },
        {
          description: null,
          id: 2581,
          label: 'Transportation and material moving occupations',
          parent_id: null,
        },
        {
          description: null,
          id: 2582,
          label: 'Supervisors, transportation and material moving workers',
          parent_id: null,
        },
        { description: null, id: 2583, label: 'Air transportation occupations', parent_id: null },
        { description: null, id: 2584, label: 'Motor vehicle operators', parent_id: null },
        { description: null, id: 2585, label: 'Rail transportation occupations', parent_id: null },
        { description: null, id: 2586, label: 'Water transportation occupations', parent_id: null },
        { description: null, id: 2587, label: 'Other transportation workers', parent_id: null },
        { description: null, id: 2588, label: 'Material moving occupations', parent_id: null },
        { description: null, id: 2589, label: 'Military', parent_id: null },
        { description: null, id: 2590, label: 'Unclassified', parent_id: null },
      ],
    },
    required: ['category'],
    title: 'Parameters',
  })
  .openapi('Parameters')

const DataSchema = z
  .object({
    description: z.string(),
    groups: z.array(z.string()),
    id: z.string(),
    name: z.string(),
    parameters: ParametersSchema,
    periods: z.array(z.string()),
    slug: z.string(),
    version: z.string(),
  })
  .openapi({
    example: {
      description: 'Describes the occupations of residents in the trade area.',
      groups: [
        'White Collar',
        'Management occupations',
        'Top executives',
        'Advertising, marketing, promotions, public relations, and sales managers',
        'Operations specialties managers',
        'Other management occupations',
        'Business and financial operations occupations',
        'Business operations specialists',
        'Financial specialists',
        'Computer and mathematical science occupations',
        'Computer specialists',
        'Mathematical science occupations',
        'Architecture and engineering occupations',
        'Architects, surveyors, and cartographers',
        'Engineers',
        'Drafters, engineering, and mapping technicians',
        'Life, physical, and social science occupations',
        'Life scientists',
        'Physical scientists',
        'Social scientists and related occupations',
        'Life, physical, and social science technicians',
        'Community and social services occupations',
        'Counselors, social workers, and other community and social service specialists',
        'Religious workers',
        'All other counselors, social, and religious workers',
        'Legal occupations',
        'Lawyers, judges, and related workers',
        'Legal support workers',
        'All other legal and related workers',
        'Education, training, and library occupations',
        'Postsecondary teachers',
        'Primary, secondary, and special education teachers',
        'Other teachers and instructors',
        'Librarians, curators, and archivists',
        'Other education, training, and library occupations',
        'Arts, design, entertainment, sports, and media occupations',
        'Art and design occupations',
        'Entertainers and performers, sports and related occupations',
        'Media and communication occupations',
        'Media and communication equipment occupations',
        'Healthcare practitioners and technical occupations',
        'Health diagnosing and treating practitioners',
        'Health technologists and technicians',
        'Other healthcare practitioners and technical occupations',
        'Healthcare support occupations',
        'Nursing, psychiatric, and home health aides',
        'Occupational and physical therapist assistants and aides',
        'Other healthcare support occupations',
        'Blue Collar',
        'Protective service occupations',
        'First-line supervisors/managers, protective service workers',
        'Fire fighting and prevention workers',
        'Law enforcement workers',
        'Other protective service workers',
        'Food preparation and serving related occupations',
        'Supervisors, food preparation and serving workers',
        'Cooks and food preparation workers',
        'Food and beverage serving workers',
        'Other food preparation and serving related workers',
        'Building and grounds cleaning and maintenance occupations',
        'Supervisors, building and grounds cleaning and maintenance workers',
        'Building cleaning and pest control workers',
        'Grounds maintenance workers',
        'All other building and grounds cleaning and maintenance workers',
        'Personal care and service occupations',
        'Supervisors, personal care and service workers',
        'Animal care and service workers',
        'Entertainment attendants and related workers',
        'Funeral service workers',
        'Personal appearance workers',
        'Transportation, tourism, and lodging attendants',
        'Other personal care and service workers',
        'Sales and related occupations',
        'Supervisors, sales workers',
        'Retail sales workers',
        'Sales representatives, services',
        'Sales representatives, wholesale and manufacturing',
        'Other sales and related workers',
        'Office and administrative support occupations',
        'Supervisors, office and administrative support workers',
        'Communications equipment operators',
        'Financial clerks',
        'Information and record clerks',
        'Material recording, scheduling, dispatching, and distributing occupations',
        'Secretaries and administrative assistants',
        'Other office and administrative support workers',
        'Farming, fishing, and forestry occupations',
        'Supervisors, farming, fishing, and forestry workers',
        'Agricultural workers',
        'Fishing and hunting workers',
        'Forest, conservation, and logging workers',
        'Construction and extraction occupations',
        'Supervisors, construction and extraction workers',
        'Construction trades and related workers',
        'Helpers, construction trades',
        'Other construction and related workers',
        'Extraction workers',
        'Installation, maintenance, and repair occupations',
        'Supervisors of installation, maintenance, and repair workers',
        'Electrical and electronic equipment mechanics, installers, and repairers',
        'And mobile equipment mechanics, installers, and repairers',
        'Other installation, maintenance, and repair occupations',
        'Production occupations',
        'Supervisors, production workers',
        'Assemblers and fabricators',
        'Food processing occupations',
        'Metal workers and plastic workers',
        'Printing occupations',
        'Textile, apparel, and furnishings occupations',
        'Woodworkers',
        'Plant and system operators',
        'Other production occupations',
        'Transportation and material moving occupations',
        'Supervisors, transportation and material moving workers',
        'Air transportation occupations',
        'Motor vehicle operators',
        'Rail transportation occupations',
        'Water transportation occupations',
        'Other transportation workers',
        'Material moving occupations',
        'Military',
        'Unclassified',
        'context.residential-population',
        'context.landarea',
      ],
      id: 'occupation',
      name: 'Occupation',
      parameters: {
        category: [
          { description: null, id: 2469, label: 'White Collar', parent_id: null },
          { description: null, id: 2470, label: 'Management occupations', parent_id: null },
          { description: null, id: 2471, label: 'Top executives', parent_id: null },
          {
            description: null,
            id: 2472,
            label: 'Advertising, marketing, promotions, public relations, and sales managers',
            parent_id: null,
          },
          {
            description: null,
            id: 2473,
            label: 'Operations specialties managers',
            parent_id: null,
          },
          { description: null, id: 2474, label: 'Other management occupations', parent_id: null },
          {
            description: null,
            id: 2475,
            label: 'Business and financial operations occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2476,
            label: 'Business operations specialists',
            parent_id: null,
          },
          { description: null, id: 2477, label: 'Financial specialists', parent_id: null },
          {
            description: null,
            id: 2478,
            label: 'Computer and mathematical science occupations',
            parent_id: null,
          },
          { description: null, id: 2479, label: 'Computer specialists', parent_id: null },
          {
            description: null,
            id: 2480,
            label: 'Mathematical science occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2481,
            label: 'Architecture and engineering occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2482,
            label: 'Architects, surveyors, and cartographers',
            parent_id: null,
          },
          { description: null, id: 2483, label: 'Engineers', parent_id: null },
          {
            description: null,
            id: 2484,
            label: 'Drafters, engineering, and mapping technicians',
            parent_id: null,
          },
          {
            description: null,
            id: 2485,
            label: 'Life, physical, and social science occupations',
            parent_id: null,
          },
          { description: null, id: 2486, label: 'Life scientists', parent_id: null },
          { description: null, id: 2487, label: 'Physical scientists', parent_id: null },
          {
            description: null,
            id: 2488,
            label: 'Social scientists and related occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2489,
            label: 'Life, physical, and social science technicians',
            parent_id: null,
          },
          {
            description: null,
            id: 2490,
            label: 'Community and social services occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2491,
            label: 'Counselors, social workers, and other community and social service specialists',
            parent_id: null,
          },
          { description: null, id: 2492, label: 'Religious workers', parent_id: null },
          {
            description: null,
            id: 2493,
            label: 'All other counselors, social, and religious workers',
            parent_id: null,
          },
          { description: null, id: 2494, label: 'Legal occupations', parent_id: null },
          {
            description: null,
            id: 2495,
            label: 'Lawyers, judges, and related workers',
            parent_id: null,
          },
          { description: null, id: 2496, label: 'Legal support workers', parent_id: null },
          {
            description: null,
            id: 2497,
            label: 'All other legal and related workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2498,
            label: 'Education, training, and library occupations',
            parent_id: null,
          },
          { description: null, id: 2499, label: 'Postsecondary teachers', parent_id: null },
          {
            description: null,
            id: 2500,
            label: 'Primary, secondary, and special education teachers',
            parent_id: null,
          },
          { description: null, id: 2501, label: 'Other teachers and instructors', parent_id: null },
          {
            description: null,
            id: 2502,
            label: 'Librarians, curators, and archivists',
            parent_id: null,
          },
          {
            description: null,
            id: 2503,
            label: 'Other education, training, and library occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2504,
            label: 'Arts, design, entertainment, sports, and media occupations',
            parent_id: null,
          },
          { description: null, id: 2505, label: 'Art and design occupations', parent_id: null },
          {
            description: null,
            id: 2506,
            label: 'Entertainers and performers, sports and related occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2507,
            label: 'Media and communication occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2508,
            label: 'Media and communication equipment occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2509,
            label: 'Healthcare practitioners and technical occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2510,
            label: 'Health diagnosing and treating practitioners',
            parent_id: null,
          },
          {
            description: null,
            id: 2511,
            label: 'Health technologists and technicians',
            parent_id: null,
          },
          {
            description: null,
            id: 2512,
            label: 'Other healthcare practitioners and technical occupations',
            parent_id: null,
          },
          { description: null, id: 2513, label: 'Healthcare support occupations', parent_id: null },
          {
            description: null,
            id: 2514,
            label: 'Nursing, psychiatric, and home health aides',
            parent_id: null,
          },
          {
            description: null,
            id: 2515,
            label: 'Occupational and physical therapist assistants and aides',
            parent_id: null,
          },
          {
            description: null,
            id: 2516,
            label: 'Other healthcare support occupations',
            parent_id: null,
          },
          { description: null, id: 2517, label: 'Blue Collar', parent_id: null },
          { description: null, id: 2518, label: 'Protective service occupations', parent_id: null },
          {
            description: null,
            id: 2519,
            label: 'First-line supervisors/managers, protective service workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2520,
            label: 'Fire fighting and prevention workers',
            parent_id: null,
          },
          { description: null, id: 2521, label: 'Law enforcement workers', parent_id: null },
          {
            description: null,
            id: 2522,
            label: 'Other protective service workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2523,
            label: 'Food preparation and serving related occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2524,
            label: 'Supervisors, food preparation and serving workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2525,
            label: 'Cooks and food preparation workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2526,
            label: 'Food and beverage serving workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2527,
            label: 'Other food preparation and serving related workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2528,
            label: 'Building and grounds cleaning and maintenance occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2529,
            label: 'Supervisors, building and grounds cleaning and maintenance workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2530,
            label: 'Building cleaning and pest control workers',
            parent_id: null,
          },
          { description: null, id: 2531, label: 'Grounds maintenance workers', parent_id: null },
          {
            description: null,
            id: 2532,
            label: 'All other building and grounds cleaning and maintenance workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2533,
            label: 'Personal care and service occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2534,
            label: 'Supervisors, personal care and service workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2535,
            label: 'Animal care and service workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2536,
            label: 'Entertainment attendants and related workers',
            parent_id: null,
          },
          { description: null, id: 2537, label: 'Funeral service workers', parent_id: null },
          { description: null, id: 2538, label: 'Personal appearance workers', parent_id: null },
          {
            description: null,
            id: 2539,
            label: 'Transportation, tourism, and lodging attendants',
            parent_id: null,
          },
          {
            description: null,
            id: 2540,
            label: 'Other personal care and service workers',
            parent_id: null,
          },
          { description: null, id: 2541, label: 'Sales and related occupations', parent_id: null },
          { description: null, id: 2542, label: 'Supervisors, sales workers', parent_id: null },
          { description: null, id: 2543, label: 'Retail sales workers', parent_id: null },
          {
            description: null,
            id: 2544,
            label: 'Sales representatives, services',
            parent_id: null,
          },
          {
            description: null,
            id: 2545,
            label: 'Sales representatives, wholesale and manufacturing',
            parent_id: null,
          },
          {
            description: null,
            id: 2546,
            label: 'Other sales and related workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2547,
            label: 'Office and administrative support occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2548,
            label: 'Supervisors, office and administrative support workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2549,
            label: 'Communications equipment operators',
            parent_id: null,
          },
          { description: null, id: 2550, label: 'Financial clerks', parent_id: null },
          { description: null, id: 2551, label: 'Information and record clerks', parent_id: null },
          {
            description: null,
            id: 2552,
            label: 'Material recording, scheduling, dispatching, and distributing occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2553,
            label: 'Secretaries and administrative assistants',
            parent_id: null,
          },
          {
            description: null,
            id: 2554,
            label: 'Other office and administrative support workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2555,
            label: 'Farming, fishing, and forestry occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2556,
            label: 'Supervisors, farming, fishing, and forestry workers',
            parent_id: null,
          },
          { description: null, id: 2557, label: 'Agricultural workers', parent_id: null },
          { description: null, id: 2558, label: 'Fishing and hunting workers', parent_id: null },
          {
            description: null,
            id: 2559,
            label: 'Forest, conservation, and logging workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2560,
            label: 'Construction and extraction occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2561,
            label: 'Supervisors, construction and extraction workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2562,
            label: 'Construction trades and related workers',
            parent_id: null,
          },
          { description: null, id: 2563, label: 'Helpers, construction trades', parent_id: null },
          {
            description: null,
            id: 2564,
            label: 'Other construction and related workers',
            parent_id: null,
          },
          { description: null, id: 2565, label: 'Extraction workers', parent_id: null },
          {
            description: null,
            id: 2566,
            label: 'Installation, maintenance, and repair occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2567,
            label: 'Supervisors of installation, maintenance, and repair workers',
            parent_id: null,
          },
          {
            description: null,
            id: 2568,
            label: 'Electrical and electronic equipment mechanics, installers, and repairers',
            parent_id: null,
          },
          {
            description: null,
            id: 2569,
            label: 'And mobile equipment mechanics, installers, and repairers',
            parent_id: null,
          },
          {
            description: null,
            id: 2570,
            label: 'Other installation, maintenance, and repair occupations',
            parent_id: null,
          },
          { description: null, id: 2571, label: 'Production occupations', parent_id: null },
          {
            description: null,
            id: 2572,
            label: 'Supervisors, production workers',
            parent_id: null,
          },
          { description: null, id: 2573, label: 'Assemblers and fabricators', parent_id: null },
          { description: null, id: 2574, label: 'Food processing occupations', parent_id: null },
          {
            description: null,
            id: 2575,
            label: 'Metal workers and plastic workers',
            parent_id: null,
          },
          { description: null, id: 2576, label: 'Printing occupations', parent_id: null },
          {
            description: null,
            id: 2577,
            label: 'Textile, apparel, and furnishings occupations',
            parent_id: null,
          },
          { description: null, id: 2578, label: 'Woodworkers', parent_id: null },
          { description: null, id: 2579, label: 'Plant and system operators', parent_id: null },
          { description: null, id: 2580, label: 'Other production occupations', parent_id: null },
          {
            description: null,
            id: 2581,
            label: 'Transportation and material moving occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2582,
            label: 'Supervisors, transportation and material moving workers',
            parent_id: null,
          },
          { description: null, id: 2583, label: 'Air transportation occupations', parent_id: null },
          { description: null, id: 2584, label: 'Motor vehicle operators', parent_id: null },
          {
            description: null,
            id: 2585,
            label: 'Rail transportation occupations',
            parent_id: null,
          },
          {
            description: null,
            id: 2586,
            label: 'Water transportation occupations',
            parent_id: null,
          },
          { description: null, id: 2587, label: 'Other transportation workers', parent_id: null },
          { description: null, id: 2588, label: 'Material moving occupations', parent_id: null },
          { description: null, id: 2589, label: 'Military', parent_id: null },
          { description: null, id: 2590, label: 'Unclassified', parent_id: null },
        ],
      },
      periods: ['YR2020Q1'],
      slug: 'occupation',
      version: 'v2',
    },
    required: ['version', 'slug', 'periods', 'parameters', 'name', 'id', 'groups', 'description'],
    title: 'Data',
  })
  .openapi('Data')

const Location1Schema = z
  .object({
    areatype: z.string(),
    latitude: z.float64(),
    longitude: z.float64(),
    radius: z.int32(),
    type: z.string(),
    units: z.string(),
  })
  .openapi({
    example: {
      areatype: 'ring',
      latitude: 30.264757,
      longitude: -97.7356077,
      radius: 1,
      type: 'buffer',
      units: 'mi',
    },
    required: ['units', 'type', 'radius', 'longitude', 'latitude', 'areatype'],
    title: 'Location1',
  })
  .openapi('Location1')

const UnitsSchema = z
  .object({
    '$100k-125k': z.string(),
    '$10k-15k': z.string(),
    '$125k-150k': z.string(),
    '$150k-175k': z.string(),
    '$15k-20k': z.string(),
    '$175k-200k': z.string(),
    '$200k-250k': z.string(),
    '$20k-25k': z.string(),
    '$250k-300k': z.string(),
    '$25k-30k': z.string(),
    '$300k-400k': z.string(),
    '$30k-35k': z.string(),
    '$35k-40k': z.string(),
    '$400k-500k': z.string(),
    '$40k-50k': z.string(),
    '$500k-750k': z.string(),
    '$50k-60k': z.string(),
    '$60k-70k': z.string(),
    '$70k-80k': z.string(),
    '$750k-1M': z.string(),
    '$80k-90k': z.string(),
    '$90k-100k': z.string(),
    'Median Home Value': z.string(),
    'Over $1M': z.string(),
    'Owner Occupied Households': z.string(),
    'Under $10k': z.string(),
    'context.households': z.string(),
    'context.landarea': z.string(),
  })
  .openapi({
    example: {
      '$100k-125k': 'households',
      '$10k-15k': 'households',
      '$125k-150k': 'households',
      '$150k-175k': 'households',
      '$15k-20k': 'households',
      '$175k-200k': 'households',
      '$200k-250k': 'households',
      '$20k-25k': 'households',
      '$250k-300k': 'households',
      '$25k-30k': 'households',
      '$300k-400k': 'households',
      '$30k-35k': 'households',
      '$35k-40k': 'households',
      '$400k-500k': 'households',
      '$40k-50k': 'households',
      '$500k-750k': 'households',
      '$50k-60k': 'households',
      '$60k-70k': 'households',
      '$70k-80k': 'households',
      '$750k-1M': 'households',
      '$80k-90k': 'households',
      '$90k-100k': 'households',
      'Median Home Value': 'dollars',
      'Over $1M': 'households',
      'Owner Occupied Households': 'households',
      'Under $10k': 'households',
      'context.households': 'households',
      'context.landarea': 'square miles',
    },
    required: [
      'context.landarea',
      'context.households',
      'Under $10k',
      'Owner Occupied Households',
      'Over $1M',
      'Median Home Value',
      '$90k-100k',
      '$80k-90k',
      '$750k-1M',
      '$70k-80k',
      '$60k-70k',
      '$50k-60k',
      '$500k-750k',
      '$40k-50k',
      '$400k-500k',
      '$35k-40k',
      '$30k-35k',
      '$300k-400k',
      '$25k-30k',
      '$250k-300k',
      '$20k-25k',
      '$200k-250k',
      '$175k-200k',
      '$15k-20k',
      '$150k-175k',
      '$125k-150k',
      '$10k-15k',
      '$100k-125k',
    ],
    title: 'Units',
  })
  .openapi('Units')

const MetadataSchema = z
  .object({
    datetime: z.array(z.array(z.string())),
    display_groups: z.array(z.array(z.string())),
    units: UnitsSchema,
  })
  .openapi({ required: ['units', 'display_groups', 'datetime'], title: 'Metadata' })
  .openapi('Metadata')

const Data1Schema = z
  .object({
    data: z.array(z.array(z.string())),
    location: Location1Schema,
    location_index: z.int32(),
    metadata: MetadataSchema,
  })
  .openapi({ required: ['metadata', 'location_index', 'location', 'data'], title: 'Data1' })
  .openapi('Data1')

const GeometrySchema = z
  .object({ coordinates: z.array(z.array(z.float64())), type: z.string() })
  .openapi({ required: ['type', 'coordinates'], title: 'Geometry' })
  .openapi('Geometry')

const Properties1Schema = z
  .object({
    AFFGEOID: z.string().exactOptional(),
    ALAND: z.int32(),
    AWATER: z.int32().exactOptional(),
    BLKGRPCE: z.string().exactOptional(),
    CBSAFP: z.string().exactOptional(),
    CLASSFP: z.string().exactOptional(),
    COUNTYFP: z.string().exactOptional(),
    COUNTYNS: z.string().exactOptional(),
    CSAFP: z.string().exactOptional(),
    DIVISION: z.string().exactOptional(),
    FUNCSTAT: z.string().exactOptional(),
    GEOID: z.string().exactOptional(),
    INTPTLAT: z.string().exactOptional(),
    INTPTLON: z.string().exactOptional(),
    LSAD: z.string().exactOptional(),
    MEMI: z.string().exactOptional(),
    METDIVFP: z.string().exactOptional(),
    MTFCC: z.string().exactOptional(),
    NAME: z.string().exactOptional(),
    NAMELSAD: z.string().exactOptional(),
    PCICBSA: z.string().exactOptional(),
    PCINECTA: z.string().exactOptional(),
    PLACEFP: z.string().exactOptional(),
    PLACENS: z.string().exactOptional(),
    POPULATION: z.int32().exactOptional(),
    POP_SQMI: z.float64().exactOptional(),
    PO_NAME: z.string().exactOptional(),
    REGION: z.string().exactOptional(),
    SQMI: z.float64().exactOptional(),
    STATE: z.string().exactOptional(),
    STATEFP: z.string().exactOptional(),
    STATENS: z.string().exactOptional(),
    STUSPS: z.string().exactOptional(),
    Shape_Area: z.float64().exactOptional(),
    Shape_Leng: z.float64().exactOptional(),
    TRACTCE: z.string().exactOptional(),
    ZIP_CODE: z.string().exactOptional(),
  })
  .openapi({
    example: {
      AFFGEOID: '1400000US48453000902',
      ALAND: 3041429,
      AWATER: 0,
      COUNTYFP: '453',
      GEOID: '48453000902',
      LSAD: 'CT',
      NAME: '9.02',
      STATEFP: '48',
      TRACTCE: '000902',
    },
    required: ['ALAND'],
    title: 'Properties1',
  })
  .openapi('Properties1')

const PropertiesSchema = z
  .object({
    _properties: Properties1Schema,
    altname: z.string(),
    autocomplete: AutocompleteSchema,
    calculated_area_sq_meters: z.float64(),
    name: z.string(),
    region_id: z.string(),
    regiontype: z.string(),
    state_code: z.string(),
    timestamp: z.string(),
  })
  .openapi({
    example: {
      _properties: {
        AFFGEOID: '1400000US48453000902',
        ALAND: 3041429,
        AWATER: 0,
        COUNTYFP: '453',
        GEOID: '48453000902',
        LSAD: 'CT',
        NAME: '9.02',
        STATEFP: '48',
        TRACTCE: '000902',
      },
      altname: '9.02',
      autocomplete: { input: ['48453000902', '9.02'] },
      calculated_area_sq_meters: 4105150.414024012,
      name: '48453000902',
      region_id: '48453000902',
      regiontype: 'tract',
      state_code: 'TX',
      timestamp: '2018-04-09T20:54:47.264495',
    },
    required: [
      'timestamp',
      'state_code',
      'regiontype',
      'region_id',
      'name',
      'calculated_area_sq_meters',
      'autocomplete',
      'altname',
      '_properties',
    ],
    title: 'Properties',
  })
  .openapi('Properties')

const Data2Schema = z
  .object({ geometry: GeometrySchema, properties: PropertiesSchema, type: z.string() })
  .openapi({ required: ['type', 'properties', 'geometry'], title: 'Data2' })
  .openapi('Data2')

const Location3Schema = z
  .object({
    areatype: z.string(),
    latitude: z.float64(),
    longitude: z.float64(),
    radius: z.string(),
    type: z.string(),
    units: z.string(),
  })
  .openapi({
    example: {
      areatype: 'drivetime',
      latitude: 30.264757,
      longitude: -97.7356077,
      radius: '5',
      type: 'buffer',
      units: 'minutes',
    },
    required: ['units', 'type', 'radius', 'longitude', 'latitude', 'areatype'],
    title: 'Location3',
  })
  .openapi('Location3')

const Properties2Schema = z
  .object({ calculated_area_sq_meters: z.float64(), location: Location3Schema, status: z.int32() })
  .openapi({
    example: {
      calculated_area_sq_meters: 27447057.07613631,
      location: {
        areatype: 'drivetime',
        latitude: 30.264757,
        longitude: -97.7356077,
        radius: '5',
        type: 'buffer',
        units: 'minutes',
      },
      status: 200,
    },
    required: ['status', 'location', 'calculated_area_sq_meters'],
    title: 'Properties2',
  })
  .openapi('Properties2')

const FeatureSchema = z
  .object({ geometry: GeometrySchema, properties: Properties2Schema, type: z.string() })
  .openapi({ required: ['type', 'properties', 'geometry'], title: 'Feature' })
  .openapi('Feature')

const Data3Schema = z
  .object({ features: z.array(FeatureSchema), type: z.string() })
  .openapi({ required: ['type', 'features'], title: 'Data3' })
  .openapi('Data3')

const Properties3Schema = z
  .object({ bearing: z.string(), roadname: z.string(), segment_id: z.string(), state: z.string() })
  .openapi({
    example: {
      bearing: 'N',
      roadname: 'North Interstate Highway 35 Service Road',
      segment_id: '1595171804',
      state: 'Texas',
    },
    required: ['state', 'segment_id', 'roadname', 'bearing'],
    title: 'Properties3',
  })
  .openapi('Properties3')

const Feature1Schema = z
  .object({ geometry: GeometrySchema, properties: Properties3Schema, type: z.string() })
  .openapi({
    example: {
      geometry: {
        coordinates: [
          [-97.735557, 30.261986],
          [-97.735196, 30.26292],
          [-97.735011, 30.263339],
          [-97.734814, 30.263796],
          [-97.7347722, 30.2638848],
          [-97.734748, 30.263936],
          [-97.734723, 30.264008],
          [-97.734617, 30.26428],
          [-97.734489, 30.264667],
          [-97.734447, 30.2648],
          [-97.734362, 30.26507],
          [-97.734288, 30.265273],
          [-97.734177, 30.265612],
          [-97.734165, 30.265642],
        ],
        type: 'LineString',
      },
      properties: {
        bearing: 'N',
        roadname: 'North Interstate Highway 35 Service Road',
        segment_id: '1595171804',
        state: 'Texas',
      },
      type: 'Feature',
    },
    required: ['type', 'properties', 'geometry'],
    title: 'Feature1',
  })
  .openapi('Feature1')

const Data4Schema = z
  .object({ crs: CrsSchema, features: z.array(Feature1Schema), type: z.string() })
  .openapi({
    example: {
      crs: { properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' }, type: 'name' },
      features: [
        {
          geometry: {
            coordinates: [
              [-97.735557, 30.261986],
              [-97.735196, 30.26292],
              [-97.735011, 30.263339],
              [-97.734814, 30.263796],
              [-97.7347722, 30.2638848],
              [-97.734748, 30.263936],
              [-97.734723, 30.264008],
              [-97.734617, 30.26428],
              [-97.734489, 30.264667],
              [-97.734447, 30.2648],
              [-97.734362, 30.26507],
              [-97.734288, 30.265273],
              [-97.734177, 30.265612],
              [-97.734165, 30.265642],
            ],
            type: 'LineString',
          },
          properties: {
            bearing: 'N',
            roadname: 'North Interstate Highway 35 Service Road',
            segment_id: '1595171804',
            state: 'Texas',
          },
          type: 'Feature',
        },
      ],
      type: 'FeatureCollection',
    },
    required: ['type', 'features', 'crs'],
    title: 'Data4',
  })
  .openapi('Data4')

const Metadata1Schema = z
  .object({
    bearing: z.string(),
    columns: z.array(z.string()),
    name: z.string(),
    rows: z.array(z.string()),
    segment_id: z.string(),
    state: z.string(),
  })
  .openapi({
    example: {
      bearing: 'W',
      columns: [
        '12:00am',
        '01:00am',
        '02:00am',
        '03:00am',
        '04:00am',
        '05:00am',
        '06:00am',
        '07:00am',
        '08:00am',
        '09:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '01:00pm',
        '02:00pm',
        '03:00pm',
        '04:00pm',
        '05:00pm',
        '06:00pm',
        '07:00pm',
        '08:00pm',
        '09:00pm',
        '10:00pm',
        '11:00pm',
      ],
      name: 'East 6th Street',
      rows: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      segment_id: '1595369397',
      state: 'Texas',
    },
    required: ['state', 'segment_id', 'rows', 'name', 'columns', 'bearing'],
    title: 'Metadata1',
  })
  .openapi('Metadata1')

const RoadsegmentSchema = z
  .object({ coordinates: z.array(z.array(z.float64())), type: z.string() })
  .openapi({
    example: {
      coordinates: [
        [-97.734165, 30.265642000000014],
        [-97.734314, 30.265693999999996],
        [-97.734409, 30.265727999999996],
        [-97.7345332, 30.265769000000006],
        [-97.7346688, 30.265802199999996],
        [-97.7349238, 30.2658816],
        [-97.7350156, 30.265904199999994],
      ],
      type: 'LineString',
    },
    required: ['type', 'coordinates'],
    title: 'Roadsegment',
  })
  .openapi('Roadsegment')

const StatsSchema = z
  .object({ aadt: z.int32() })
  .openapi({ example: { aadt: 5843 }, required: ['aadt'], title: 'Stats' })
  .openapi('Stats')

const Data5Schema = z
  .object({
    data: z.array(z.array(z.int32())),
    metadata: Metadata1Schema,
    roadsegment: RoadsegmentSchema,
    stats: StatsSchema,
  })
  .openapi({
    example: {
      data: [
        [
          81, 56, 35, 26, 28, 48, 86, 130, 182, 240, 292, 334, 360, 360, 357, 353, 339, 307, 266,
          222, 188, 158, 125, 102,
        ],
        [
          34, 35, 30, 33, 55, 153, 371, 494, 402, 327, 336, 369, 390, 386, 402, 423, 419, 379, 303,
          243, 200, 163, 118, 69,
        ],
        [
          34, 35, 30, 33, 55, 153, 371, 494, 402, 327, 336, 369, 390, 386, 402, 423, 419, 379, 303,
          243, 200, 163, 118, 69,
        ],
        [
          34, 35, 30, 33, 55, 153, 371, 494, 402, 327, 336, 369, 390, 386, 402, 423, 419, 379, 303,
          243, 200, 163, 118, 69,
        ],
        [
          34, 35, 30, 33, 55, 153, 371, 494, 402, 327, 336, 369, 390, 386, 402, 423, 419, 379, 303,
          243, 200, 163, 118, 69,
        ],
        [
          37, 37, 32, 35, 59, 160, 388, 518, 421, 343, 352, 387, 409, 406, 422, 443, 439, 396, 318,
          255, 210, 171, 122, 73,
        ],
        [
          91, 62, 40, 28, 31, 55, 98, 146, 204, 271, 330, 377, 404, 404, 404, 398, 381, 346, 298,
          250, 212, 178, 141, 114,
        ],
      ],
      metadata: {
        bearing: 'W',
        columns: [
          '12:00am',
          '01:00am',
          '02:00am',
          '03:00am',
          '04:00am',
          '05:00am',
          '06:00am',
          '07:00am',
          '08:00am',
          '09:00am',
          '10:00am',
          '11:00am',
          '12:00pm',
          '01:00pm',
          '02:00pm',
          '03:00pm',
          '04:00pm',
          '05:00pm',
          '06:00pm',
          '07:00pm',
          '08:00pm',
          '09:00pm',
          '10:00pm',
          '11:00pm',
        ],
        name: 'East 6th Street',
        rows: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        segment_id: '1595369397',
        state: 'Texas',
      },
      roadsegment: {
        coordinates: [
          [-97.734165, 30.265642000000014],
          [-97.734314, 30.265693999999996],
          [-97.734409, 30.265727999999996],
          [-97.7345332, 30.265769000000006],
          [-97.7346688, 30.265802199999996],
          [-97.7349238, 30.2658816],
          [-97.7350156, 30.265904199999994],
        ],
        type: 'LineString',
      },
      stats: { aadt: 5843 },
    },
    required: ['stats', 'roadsegment', 'metadata', 'data'],
    title: 'Data5',
  })
  .openapi('Data5')

const DatumSchema = z
  .object({ description: z.string(), id: z.string(), name: z.string(), version: z.string() })
  .openapi({
    example: {
      description: 'Median age and age brackets by gender.',
      id: 'age',
      name: 'Age',
      version: 'v2',
    },
    required: ['version', 'name', 'id', 'description'],
    title: 'Datum',
  })
  .openapi('Datum')

const DescribeOccupationInsightSchema = z
  .object({ data: DataSchema })
  .openapi({
    example: {
      data: {
        description: 'Describes the occupations of residents in the trade area.',
        groups: [
          'White Collar',
          'Management occupations',
          'Top executives',
          'Advertising, marketing, promotions, public relations, and sales managers',
          'Operations specialties managers',
          'Other management occupations',
          'Business and financial operations occupations',
          'Business operations specialists',
          'Financial specialists',
          'Computer and mathematical science occupations',
          'Computer specialists',
          'Mathematical science occupations',
          'Architecture and engineering occupations',
          'Architects, surveyors, and cartographers',
          'Engineers',
          'Drafters, engineering, and mapping technicians',
          'Life, physical, and social science occupations',
          'Life scientists',
          'Physical scientists',
          'Social scientists and related occupations',
          'Life, physical, and social science technicians',
          'Community and social services occupations',
          'Counselors, social workers, and other community and social service specialists',
          'Religious workers',
          'All other counselors, social, and religious workers',
          'Legal occupations',
          'Lawyers, judges, and related workers',
          'Legal support workers',
          'All other legal and related workers',
          'Education, training, and library occupations',
          'Postsecondary teachers',
          'Primary, secondary, and special education teachers',
          'Other teachers and instructors',
          'Librarians, curators, and archivists',
          'Other education, training, and library occupations',
          'Arts, design, entertainment, sports, and media occupations',
          'Art and design occupations',
          'Entertainers and performers, sports and related occupations',
          'Media and communication occupations',
          'Media and communication equipment occupations',
          'Healthcare practitioners and technical occupations',
          'Health diagnosing and treating practitioners',
          'Health technologists and technicians',
          'Other healthcare practitioners and technical occupations',
          'Healthcare support occupations',
          'Nursing, psychiatric, and home health aides',
          'Occupational and physical therapist assistants and aides',
          'Other healthcare support occupations',
          'Blue Collar',
          'Protective service occupations',
          'First-line supervisors/managers, protective service workers',
          'Fire fighting and prevention workers',
          'Law enforcement workers',
          'Other protective service workers',
          'Food preparation and serving related occupations',
          'Supervisors, food preparation and serving workers',
          'Cooks and food preparation workers',
          'Food and beverage serving workers',
          'Other food preparation and serving related workers',
          'Building and grounds cleaning and maintenance occupations',
          'Supervisors, building and grounds cleaning and maintenance workers',
          'Building cleaning and pest control workers',
          'Grounds maintenance workers',
          'All other building and grounds cleaning and maintenance workers',
          'Personal care and service occupations',
          'Supervisors, personal care and service workers',
          'Animal care and service workers',
          'Entertainment attendants and related workers',
          'Funeral service workers',
          'Personal appearance workers',
          'Transportation, tourism, and lodging attendants',
          'Other personal care and service workers',
          'Sales and related occupations',
          'Supervisors, sales workers',
          'Retail sales workers',
          'Sales representatives, services',
          'Sales representatives, wholesale and manufacturing',
          'Other sales and related workers',
          'Office and administrative support occupations',
          'Supervisors, office and administrative support workers',
          'Communications equipment operators',
          'Financial clerks',
          'Information and record clerks',
          'Material recording, scheduling, dispatching, and distributing occupations',
          'Secretaries and administrative assistants',
          'Other office and administrative support workers',
          'Farming, fishing, and forestry occupations',
          'Supervisors, farming, fishing, and forestry workers',
          'Agricultural workers',
          'Fishing and hunting workers',
          'Forest, conservation, and logging workers',
          'Construction and extraction occupations',
          'Supervisors, construction and extraction workers',
          'Construction trades and related workers',
          'Helpers, construction trades',
          'Other construction and related workers',
          'Extraction workers',
          'Installation, maintenance, and repair occupations',
          'Supervisors of installation, maintenance, and repair workers',
          'Electrical and electronic equipment mechanics, installers, and repairers',
          'And mobile equipment mechanics, installers, and repairers',
          'Other installation, maintenance, and repair occupations',
          'Production occupations',
          'Supervisors, production workers',
          'Assemblers and fabricators',
          'Food processing occupations',
          'Metal workers and plastic workers',
          'Printing occupations',
          'Textile, apparel, and furnishings occupations',
          'Woodworkers',
          'Plant and system operators',
          'Other production occupations',
          'Transportation and material moving occupations',
          'Supervisors, transportation and material moving workers',
          'Air transportation occupations',
          'Motor vehicle operators',
          'Rail transportation occupations',
          'Water transportation occupations',
          'Other transportation workers',
          'Material moving occupations',
          'Military',
          'Unclassified',
          'context.residential-population',
          'context.landarea',
        ],
        id: 'occupation',
        name: 'Occupation',
        parameters: {
          category: [
            { description: null, id: 2469, label: 'White Collar', parent_id: null },
            { description: null, id: 2470, label: 'Management occupations', parent_id: null },
            { description: null, id: 2471, label: 'Top executives', parent_id: null },
            {
              description: null,
              id: 2472,
              label: 'Advertising, marketing, promotions, public relations, and sales managers',
              parent_id: null,
            },
            {
              description: null,
              id: 2473,
              label: 'Operations specialties managers',
              parent_id: null,
            },
            { description: null, id: 2474, label: 'Other management occupations', parent_id: null },
            {
              description: null,
              id: 2475,
              label: 'Business and financial operations occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2476,
              label: 'Business operations specialists',
              parent_id: null,
            },
            { description: null, id: 2477, label: 'Financial specialists', parent_id: null },
            {
              description: null,
              id: 2478,
              label: 'Computer and mathematical science occupations',
              parent_id: null,
            },
            { description: null, id: 2479, label: 'Computer specialists', parent_id: null },
            {
              description: null,
              id: 2480,
              label: 'Mathematical science occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2481,
              label: 'Architecture and engineering occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2482,
              label: 'Architects, surveyors, and cartographers',
              parent_id: null,
            },
            { description: null, id: 2483, label: 'Engineers', parent_id: null },
            {
              description: null,
              id: 2484,
              label: 'Drafters, engineering, and mapping technicians',
              parent_id: null,
            },
            {
              description: null,
              id: 2485,
              label: 'Life, physical, and social science occupations',
              parent_id: null,
            },
            { description: null, id: 2486, label: 'Life scientists', parent_id: null },
            { description: null, id: 2487, label: 'Physical scientists', parent_id: null },
            {
              description: null,
              id: 2488,
              label: 'Social scientists and related occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2489,
              label: 'Life, physical, and social science technicians',
              parent_id: null,
            },
            {
              description: null,
              id: 2490,
              label: 'Community and social services occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2491,
              label:
                'Counselors, social workers, and other community and social service specialists',
              parent_id: null,
            },
            { description: null, id: 2492, label: 'Religious workers', parent_id: null },
            {
              description: null,
              id: 2493,
              label: 'All other counselors, social, and religious workers',
              parent_id: null,
            },
            { description: null, id: 2494, label: 'Legal occupations', parent_id: null },
            {
              description: null,
              id: 2495,
              label: 'Lawyers, judges, and related workers',
              parent_id: null,
            },
            { description: null, id: 2496, label: 'Legal support workers', parent_id: null },
            {
              description: null,
              id: 2497,
              label: 'All other legal and related workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2498,
              label: 'Education, training, and library occupations',
              parent_id: null,
            },
            { description: null, id: 2499, label: 'Postsecondary teachers', parent_id: null },
            {
              description: null,
              id: 2500,
              label: 'Primary, secondary, and special education teachers',
              parent_id: null,
            },
            {
              description: null,
              id: 2501,
              label: 'Other teachers and instructors',
              parent_id: null,
            },
            {
              description: null,
              id: 2502,
              label: 'Librarians, curators, and archivists',
              parent_id: null,
            },
            {
              description: null,
              id: 2503,
              label: 'Other education, training, and library occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2504,
              label: 'Arts, design, entertainment, sports, and media occupations',
              parent_id: null,
            },
            { description: null, id: 2505, label: 'Art and design occupations', parent_id: null },
            {
              description: null,
              id: 2506,
              label: 'Entertainers and performers, sports and related occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2507,
              label: 'Media and communication occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2508,
              label: 'Media and communication equipment occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2509,
              label: 'Healthcare practitioners and technical occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2510,
              label: 'Health diagnosing and treating practitioners',
              parent_id: null,
            },
            {
              description: null,
              id: 2511,
              label: 'Health technologists and technicians',
              parent_id: null,
            },
            {
              description: null,
              id: 2512,
              label: 'Other healthcare practitioners and technical occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2513,
              label: 'Healthcare support occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2514,
              label: 'Nursing, psychiatric, and home health aides',
              parent_id: null,
            },
            {
              description: null,
              id: 2515,
              label: 'Occupational and physical therapist assistants and aides',
              parent_id: null,
            },
            {
              description: null,
              id: 2516,
              label: 'Other healthcare support occupations',
              parent_id: null,
            },
            { description: null, id: 2517, label: 'Blue Collar', parent_id: null },
            {
              description: null,
              id: 2518,
              label: 'Protective service occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2519,
              label: 'First-line supervisors/managers, protective service workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2520,
              label: 'Fire fighting and prevention workers',
              parent_id: null,
            },
            { description: null, id: 2521, label: 'Law enforcement workers', parent_id: null },
            {
              description: null,
              id: 2522,
              label: 'Other protective service workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2523,
              label: 'Food preparation and serving related occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2524,
              label: 'Supervisors, food preparation and serving workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2525,
              label: 'Cooks and food preparation workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2526,
              label: 'Food and beverage serving workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2527,
              label: 'Other food preparation and serving related workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2528,
              label: 'Building and grounds cleaning and maintenance occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2529,
              label: 'Supervisors, building and grounds cleaning and maintenance workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2530,
              label: 'Building cleaning and pest control workers',
              parent_id: null,
            },
            { description: null, id: 2531, label: 'Grounds maintenance workers', parent_id: null },
            {
              description: null,
              id: 2532,
              label: 'All other building and grounds cleaning and maintenance workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2533,
              label: 'Personal care and service occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2534,
              label: 'Supervisors, personal care and service workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2535,
              label: 'Animal care and service workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2536,
              label: 'Entertainment attendants and related workers',
              parent_id: null,
            },
            { description: null, id: 2537, label: 'Funeral service workers', parent_id: null },
            { description: null, id: 2538, label: 'Personal appearance workers', parent_id: null },
            {
              description: null,
              id: 2539,
              label: 'Transportation, tourism, and lodging attendants',
              parent_id: null,
            },
            {
              description: null,
              id: 2540,
              label: 'Other personal care and service workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2541,
              label: 'Sales and related occupations',
              parent_id: null,
            },
            { description: null, id: 2542, label: 'Supervisors, sales workers', parent_id: null },
            { description: null, id: 2543, label: 'Retail sales workers', parent_id: null },
            {
              description: null,
              id: 2544,
              label: 'Sales representatives, services',
              parent_id: null,
            },
            {
              description: null,
              id: 2545,
              label: 'Sales representatives, wholesale and manufacturing',
              parent_id: null,
            },
            {
              description: null,
              id: 2546,
              label: 'Other sales and related workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2547,
              label: 'Office and administrative support occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2548,
              label: 'Supervisors, office and administrative support workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2549,
              label: 'Communications equipment operators',
              parent_id: null,
            },
            { description: null, id: 2550, label: 'Financial clerks', parent_id: null },
            {
              description: null,
              id: 2551,
              label: 'Information and record clerks',
              parent_id: null,
            },
            {
              description: null,
              id: 2552,
              label: 'Material recording, scheduling, dispatching, and distributing occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2553,
              label: 'Secretaries and administrative assistants',
              parent_id: null,
            },
            {
              description: null,
              id: 2554,
              label: 'Other office and administrative support workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2555,
              label: 'Farming, fishing, and forestry occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2556,
              label: 'Supervisors, farming, fishing, and forestry workers',
              parent_id: null,
            },
            { description: null, id: 2557, label: 'Agricultural workers', parent_id: null },
            { description: null, id: 2558, label: 'Fishing and hunting workers', parent_id: null },
            {
              description: null,
              id: 2559,
              label: 'Forest, conservation, and logging workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2560,
              label: 'Construction and extraction occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2561,
              label: 'Supervisors, construction and extraction workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2562,
              label: 'Construction trades and related workers',
              parent_id: null,
            },
            { description: null, id: 2563, label: 'Helpers, construction trades', parent_id: null },
            {
              description: null,
              id: 2564,
              label: 'Other construction and related workers',
              parent_id: null,
            },
            { description: null, id: 2565, label: 'Extraction workers', parent_id: null },
            {
              description: null,
              id: 2566,
              label: 'Installation, maintenance, and repair occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2567,
              label: 'Supervisors of installation, maintenance, and repair workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2568,
              label: 'Electrical and electronic equipment mechanics, installers, and repairers',
              parent_id: null,
            },
            {
              description: null,
              id: 2569,
              label: 'And mobile equipment mechanics, installers, and repairers',
              parent_id: null,
            },
            {
              description: null,
              id: 2570,
              label: 'Other installation, maintenance, and repair occupations',
              parent_id: null,
            },
            { description: null, id: 2571, label: 'Production occupations', parent_id: null },
            {
              description: null,
              id: 2572,
              label: 'Supervisors, production workers',
              parent_id: null,
            },
            { description: null, id: 2573, label: 'Assemblers and fabricators', parent_id: null },
            { description: null, id: 2574, label: 'Food processing occupations', parent_id: null },
            {
              description: null,
              id: 2575,
              label: 'Metal workers and plastic workers',
              parent_id: null,
            },
            { description: null, id: 2576, label: 'Printing occupations', parent_id: null },
            {
              description: null,
              id: 2577,
              label: 'Textile, apparel, and furnishings occupations',
              parent_id: null,
            },
            { description: null, id: 2578, label: 'Woodworkers', parent_id: null },
            { description: null, id: 2579, label: 'Plant and system operators', parent_id: null },
            { description: null, id: 2580, label: 'Other production occupations', parent_id: null },
            {
              description: null,
              id: 2581,
              label: 'Transportation and material moving occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2582,
              label: 'Supervisors, transportation and material moving workers',
              parent_id: null,
            },
            {
              description: null,
              id: 2583,
              label: 'Air transportation occupations',
              parent_id: null,
            },
            { description: null, id: 2584, label: 'Motor vehicle operators', parent_id: null },
            {
              description: null,
              id: 2585,
              label: 'Rail transportation occupations',
              parent_id: null,
            },
            {
              description: null,
              id: 2586,
              label: 'Water transportation occupations',
              parent_id: null,
            },
            { description: null, id: 2587, label: 'Other transportation workers', parent_id: null },
            { description: null, id: 2588, label: 'Material moving occupations', parent_id: null },
            { description: null, id: 2589, label: 'Military', parent_id: null },
            { description: null, id: 2590, label: 'Unclassified', parent_id: null },
          ],
        },
        periods: ['YR2020Q1'],
        slug: 'occupation',
        version: 'v2',
      },
    },
    required: ['data'],
    title: 'Describe`occupation`Insight',
  })
  .openapi('DescribeOccupationInsight')

const Describetheregionwithin5minutedriveTimeofageographicpointSchema = z
  .object({ data: Data3Schema })
  .openapi({
    required: ['data'],
    title: 'Describetheregionwithin5minutedrive-timeofageographicpoint',
  })
  .openapi('Describetheregionwithin5minutedriveTimeofageographicpoint')

const FetchAdministrativeRegionsusingLatLngSchema = z
  .object({ data: z.array(Data2Schema) })
  .openapi({ required: ['data'], title: 'FetchAdministrativeRegionsusingLat/Lng' })
  .openapi('FetchAdministrativeRegionsusingLatLng')

const Homevalueswithin1miRadiusofLocationSchema = z
  .object({ data: z.array(Data1Schema) })
  .openapi({ required: ['data'], title: 'Homevalueswithin1mi.radiusofLocation' })
  .openapi('Homevalueswithin1miRadiusofLocation')

const ListAllLocalInsightsSchema = z
  .object({ data: z.array(DatumSchema) })
  .openapi({
    example: {
      data: [
        {
          description: 'Median age and age brackets by gender.',
          id: 'age',
          name: 'Age',
          version: 'v2',
        },
        {
          description: 'Historical and projected population by age bracket',
          id: 'age-trends',
          name: 'Age Over Time',
          version: 'v2',
        },
        { description: 'Ancestry', id: 'ancestry', name: 'Ancestry', version: 'v2' },
        {
          description: 'Average home value over time.',
          id: 'avg-home-value',
          name: 'Home Value Trends',
          version: 'v1',
        },
        {
          description: 'Crime indicies across several categories',
          id: 'crime',
          name: 'Crime',
          version: 'v1',
        },
        {
          description:
            'Conventionally, daytime population is equated to the number of the employees in an area. However, that number does not capture stay-at-home parents, students, and retired or unemployed individuals. This insight provides that detail.',
          id: 'daytime-population',
          name: 'Daytime Population',
          version: 'v2',
        },
        {
          description: 'Current year education levels.',
          id: 'education',
          name: 'Education (Age 25+)',
          version: 'v2',
        },
        {
          description: 'Number of employees by business category',
          id: 'employee-categories',
          name: 'Employee Categories',
          version: 'v2',
        },
        {
          description:
            'Quarterly historical total number of employees (often referred to as daytime population).',
          id: 'employees',
          name: 'Daytime Population',
          version: 'v4',
        },
        {
          description: 'Number of businesses by category',
          id: 'establishment-categories',
          name: 'Establishment Categories',
          version: 'v2',
        },
        {
          description: 'Quarterly historical total number of establishments.',
          id: 'establishments',
          name: 'Business Counts',
          version: 'v4',
        },
        {
          description: 'Current year ethnicity proportions.',
          id: 'ethnicity',
          name: 'Ethnicity',
          version: 'v2',
        },
        {
          description: 'Quarterly historical gross domestic product estimates.',
          id: 'gdp',
          name: 'Gross Domestic Product',
          version: 'v3',
        },
        {
          description: 'Current year gender populations.',
          id: 'gender',
          name: 'Gender',
          version: 'v2',
        },
        { description: 'Age generations', id: 'generations', name: 'Generations', version: 'v2' },
        {
          description: 'Median home value and home value buckets',
          id: 'home-value',
          name: 'Home Value',
          version: 'v2',
        },
        {
          description: 'The total amount all members of a household earn.',
          id: 'household-income',
          name: 'Household Income',
          version: 'v2',
        },
        {
          description: 'Number of people per households',
          id: 'household-size',
          name: 'Household Size',
          version: 'v2',
        },
        {
          description: 'Historical counts and forecasts of number of households in an area.',
          id: 'households',
          name: 'Households',
          version: 'v3',
        },
        {
          description: 'Home renters, owners, and vacancies.',
          id: 'housing-ownership',
          name: 'Housing Ownership',
          version: 'v2',
        },
        { description: 'Language', id: 'language', name: 'Language', version: 'v2' },
        {
          description: 'Common market overview metrics.',
          id: 'market-context',
          name: 'Market Context',
          version: 'v1',
        },
        {
          description: 'Market gaps by category',
          id: 'market-gap',
          name: 'Market Gap',
          version: 'v1',
        },
        {
          description: 'Number of mortgages and their risks on a 1 to 5 scale.',
          id: 'mortgage-risk',
          name: 'Mortgage Risk',
          version: 'v2',
        },
        {
          description: 'Describes the occupations of residents in the trade area.',
          id: 'occupation',
          name: 'Occupation',
          version: 'v2',
        },
        {
          description:
            'Historical, current and forecasted number of people living in houses and apartments within a trade area.',
          id: 'residential-population',
          name: 'Residential Population',
          version: 'v3',
        },
        {
          description: 'Salary/Wage per Employee per Annum',
          id: 'salaries',
          name: 'Salaries',
          version: 'v2',
        },
        {
          description:
            'Population residing in a housing unit specifically designated as seasonal housing, like a summer cottage or winter chalet.',
          id: 'seasonal-population',
          name: 'Seasonal Population',
          version: 'v3',
        },
        {
          description:
            "Expressed interest on social media within the location's trade area by business category.",
          id: 'social',
          name: 'Social Media Interest',
          version: 'v3',
        },
        {
          description: 'Weekly expenditures per product.',
          id: 'spending',
          name: 'Spending',
          version: 'v2',
        },
        {
          description:
            'Population residing in a hotel or RV (Recreational Vehicle) for at least 1 night.',
          id: 'transient-population',
          name: 'Transient Population',
          version: 'v3',
        },
        {
          description: 'Number of vehicles available per household',
          id: 'vehicles-per-hh',
          name: 'Vehicles per Household',
          version: 'v2',
        },
        {
          description: 'Yearly age counts up to 21 by gender',
          id: 'youth-age',
          name: 'Youth Age',
          version: 'v2',
        },
        {
          description:
            "Search engine searches within a location's trade area by business category.",
          id: 'search',
          name: 'Search Engine Demand',
          version: 'v3',
        },
      ],
    },
    required: ['data'],
    title: 'ListAllLocalInsights',
  })
  .openapi('ListAllLocalInsights')

const SearchRoadSegmentsSchema = z
  .object({ data: Data4Schema })
  .openapi({
    example: {
      data: {
        crs: { properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' }, type: 'name' },
        features: [
          {
            geometry: {
              coordinates: [
                [-97.735557, 30.261986],
                [-97.735196, 30.26292],
                [-97.735011, 30.263339],
                [-97.734814, 30.263796],
                [-97.7347722, 30.2638848],
                [-97.734748, 30.263936],
                [-97.734723, 30.264008],
                [-97.734617, 30.26428],
                [-97.734489, 30.264667],
                [-97.734447, 30.2648],
                [-97.734362, 30.26507],
                [-97.734288, 30.265273],
                [-97.734177, 30.265612],
                [-97.734165, 30.265642],
              ],
              type: 'LineString',
            },
            properties: {
              bearing: 'N',
              roadname: 'North Interstate Highway 35 Service Road',
              segment_id: '1595171804',
              state: 'Texas',
            },
            type: 'Feature',
          },
        ],
        type: 'FeatureCollection',
      },
    },
    required: ['data'],
    title: 'SearchRoadSegments',
  })
  .openapi('SearchRoadSegments')

const VehicleTrafficCountsforRoadSegmentSchema = z
  .object({ data: z.array(Data5Schema) })
  .openapi({
    example: {
      data: [
        {
          data: [
            [
              81, 56, 35, 26, 28, 48, 86, 130, 182, 240, 292, 334, 360, 360, 357, 353, 339, 307,
              266, 222, 188, 158, 125, 102,
            ],
            [
              34, 35, 30, 33, 55, 153, 371, 494, 402, 327, 336, 369, 390, 386, 402, 423, 419, 379,
              303, 243, 200, 163, 118, 69,
            ],
            [
              34, 35, 30, 33, 55, 153, 371, 494, 402, 327, 336, 369, 390, 386, 402, 423, 419, 379,
              303, 243, 200, 163, 118, 69,
            ],
            [
              34, 35, 30, 33, 55, 153, 371, 494, 402, 327, 336, 369, 390, 386, 402, 423, 419, 379,
              303, 243, 200, 163, 118, 69,
            ],
            [
              34, 35, 30, 33, 55, 153, 371, 494, 402, 327, 336, 369, 390, 386, 402, 423, 419, 379,
              303, 243, 200, 163, 118, 69,
            ],
            [
              37, 37, 32, 35, 59, 160, 388, 518, 421, 343, 352, 387, 409, 406, 422, 443, 439, 396,
              318, 255, 210, 171, 122, 73,
            ],
            [
              91, 62, 40, 28, 31, 55, 98, 146, 204, 271, 330, 377, 404, 404, 404, 398, 381, 346,
              298, 250, 212, 178, 141, 114,
            ],
          ],
          metadata: {
            bearing: 'W',
            columns: [
              '12:00am',
              '01:00am',
              '02:00am',
              '03:00am',
              '04:00am',
              '05:00am',
              '06:00am',
              '07:00am',
              '08:00am',
              '09:00am',
              '10:00am',
              '11:00am',
              '12:00pm',
              '01:00pm',
              '02:00pm',
              '03:00pm',
              '04:00pm',
              '05:00pm',
              '06:00pm',
              '07:00pm',
              '08:00pm',
              '09:00pm',
              '10:00pm',
              '11:00pm',
            ],
            name: 'East 6th Street',
            rows: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            segment_id: '1595369397',
            state: 'Texas',
          },
          roadsegment: {
            coordinates: [
              [-97.734165, 30.265642000000014],
              [-97.734314, 30.265693999999996],
              [-97.734409, 30.265727999999996],
              [-97.7345332, 30.265769000000006],
              [-97.7346688, 30.265802199999996],
              [-97.7349238, 30.2658816],
              [-97.7350156, 30.265904199999994],
            ],
            type: 'LineString',
          },
          stats: { aadt: 5843 },
        },
        {
          data: [
            [
              116, 80, 51, 36, 41, 69, 124, 185, 259, 343, 416, 476, 512, 512, 509, 502, 482, 437,
              379, 317, 267, 226, 178, 145,
            ],
            [
              71, 43, 34, 37, 69, 173, 364, 485, 464, 438, 469, 520, 548, 561, 610, 666, 677, 625,
              503, 413, 346, 279, 203, 134,
            ],
            [
              71, 43, 34, 37, 69, 173, 364, 485, 464, 438, 469, 520, 548, 561, 610, 666, 677, 625,
              503, 413, 346, 279, 203, 134,
            ],
            [
              71, 43, 34, 37, 69, 173, 364, 485, 464, 438, 469, 520, 548, 561, 610, 666, 677, 625,
              503, 413, 346, 279, 203, 134,
            ],
            [
              71, 43, 34, 37, 69, 173, 364, 485, 464, 438, 469, 520, 548, 561, 610, 666, 677, 625,
              503, 413, 346, 279, 203, 134,
            ],
            [
              74, 46, 34, 38, 73, 180, 382, 509, 487, 458, 491, 545, 576, 587, 640, 698, 710, 654,
              528, 433, 362, 292, 213, 141,
            ],
            [
              130, 88, 57, 40, 45, 78, 138, 207, 291, 386, 469, 536, 576, 576, 573, 566, 542, 493,
              426, 356, 299, 253, 201, 163,
            ],
          ],
          metadata: {
            bearing: 'E',
            columns: [
              '12:00am',
              '01:00am',
              '02:00am',
              '03:00am',
              '04:00am',
              '05:00am',
              '06:00am',
              '07:00am',
              '08:00am',
              '09:00am',
              '10:00am',
              '11:00am',
              '12:00pm',
              '01:00pm',
              '02:00pm',
              '03:00pm',
              '04:00pm',
              '05:00pm',
              '06:00pm',
              '07:00pm',
              '08:00pm',
              '09:00pm',
              '10:00pm',
              '11:00pm',
            ],
            name: 'East 6th Street',
            rows: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            segment_id: '1595369411',
            state: 'Texas',
          },
          roadsegment: {
            coordinates: [
              [-97.7350156, 30.265904199999994],
              [-97.7349238, 30.2658816],
              [-97.7346688, 30.265802199999996],
              [-97.7345332, 30.265769000000006],
              [-97.734409, 30.265727999999996],
              [-97.734314, 30.265693999999996],
              [-97.734165, 30.265642000000014],
            ],
            type: 'LineString',
          },
          stats: { aadt: 8318 },
        },
      ],
    },
    required: ['data'],
    title: 'VehicleTrafficCountsforRoadSegment',
  })
  .openapi('VehicleTrafficCountsforRoadSegment')

const LocationArraySchema = z
  .object({
    areatype: z.string(),
    latitude: z.float64(),
    longitude: z.float64(),
    radius: z.string(),
    type: z.string(),
    units: z.string(),
  })
  .openapi({
    example: {
      areatype: 'ring',
      latitude: 30.264757,
      longitude: -97.7356077,
      radius: '1',
      type: 'buffer',
      units: 'mi',
    },
    required: ['units', 'type', 'radius', 'longitude', 'latitude', 'areatype'],
    title: 'location[]',
  })
  .openapi('LocationArray')

const LocationArray2Schema = z
  .object({ region_id: z.string(), regiontype: z.string(), type: z.string() })
  .openapi({
    example: { region_id: '78702', regiontype: 'zipcode', type: 'region' },
    required: ['region_id', 'regiontype', 'type'],
    title: 'location[]2',
  })
  .openapi('LocationArray2')

export const getDataInsightsRoute = createRoute({
  method: 'get',
  path: '/data/insights',
  tags: ['Insights API'],
  summary: 'Fetch Available Insights',
  description:
    'List all insights that the user has access to. This includes population, household income, crime statistics, walking traffic, vehicle traffic counts, employment, and much more,',
  operationId: 'FetchAvailableInsights',
  request: {
    headers: z.object({
      'X-RapidAPI-Key': z
        .string()
        .openapi({
          param: {
            description:
              '(Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata',
            in: 'header',
            name: 'X-RapidAPI-Key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-RapidAPI-Host': z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'X-RapidAPI-Host',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: ListAllLocalInsightsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    description: 'Median age and age brackets by gender.',
                    id: 'age',
                    name: 'Age',
                    version: 'v2',
                  },
                  {
                    description: 'Historical and projected population by age bracket',
                    id: 'age-trends',
                    name: 'Age Over Time',
                    version: 'v2',
                  },
                  { description: 'Ancestry', id: 'ancestry', name: 'Ancestry', version: 'v2' },
                  {
                    description: 'Average home value over time.',
                    id: 'avg-home-value',
                    name: 'Home Value Trends',
                    version: 'v1',
                  },
                  {
                    description: 'Crime indicies across several categories',
                    id: 'crime',
                    name: 'Crime',
                    version: 'v1',
                  },
                  {
                    description:
                      'Conventionally, daytime population is equated to the number of the employees in an area. However, that number does not capture stay-at-home parents, students, and retired or unemployed individuals. This insight provides that detail.',
                    id: 'daytime-population',
                    name: 'Daytime Population',
                    version: 'v2',
                  },
                  {
                    description: 'Current year education levels.',
                    id: 'education',
                    name: 'Education (Age 25+)',
                    version: 'v2',
                  },
                  {
                    description: 'Number of employees by business category',
                    id: 'employee-categories',
                    name: 'Employee Categories',
                    version: 'v2',
                  },
                  {
                    description:
                      'Quarterly historical total number of employees (often referred to as daytime population).',
                    id: 'employees',
                    name: 'Daytime Population',
                    version: 'v4',
                  },
                  {
                    description: 'Number of businesses by category',
                    id: 'establishment-categories',
                    name: 'Establishment Categories',
                    version: 'v2',
                  },
                  {
                    description: 'Quarterly historical total number of establishments.',
                    id: 'establishments',
                    name: 'Business Counts',
                    version: 'v4',
                  },
                  {
                    description: 'Current year ethnicity proportions.',
                    id: 'ethnicity',
                    name: 'Ethnicity',
                    version: 'v2',
                  },
                  {
                    description: 'Quarterly historical gross domestic product estimates.',
                    id: 'gdp',
                    name: 'Gross Domestic Product',
                    version: 'v3',
                  },
                  {
                    description: 'Current year gender populations.',
                    id: 'gender',
                    name: 'Gender',
                    version: 'v2',
                  },
                  {
                    description: 'Age generations',
                    id: 'generations',
                    name: 'Generations',
                    version: 'v2',
                  },
                  {
                    description: 'Median home value and home value buckets',
                    id: 'home-value',
                    name: 'Home Value',
                    version: 'v2',
                  },
                  {
                    description: 'The total amount all members of a household earn.',
                    id: 'household-income',
                    name: 'Household Income',
                    version: 'v2',
                  },
                  {
                    description: 'Number of people per households',
                    id: 'household-size',
                    name: 'Household Size',
                    version: 'v2',
                  },
                  {
                    description:
                      'Historical counts and forecasts of number of households in an area.',
                    id: 'households',
                    name: 'Households',
                    version: 'v3',
                  },
                  {
                    description: 'Home renters, owners, and vacancies.',
                    id: 'housing-ownership',
                    name: 'Housing Ownership',
                    version: 'v2',
                  },
                  { description: 'Language', id: 'language', name: 'Language', version: 'v2' },
                  {
                    description: 'Common market overview metrics.',
                    id: 'market-context',
                    name: 'Market Context',
                    version: 'v1',
                  },
                  {
                    description: 'Market gaps by category',
                    id: 'market-gap',
                    name: 'Market Gap',
                    version: 'v1',
                  },
                  {
                    description: 'Number of mortgages and their risks on a 1 to 5 scale.',
                    id: 'mortgage-risk',
                    name: 'Mortgage Risk',
                    version: 'v2',
                  },
                  {
                    description: 'Describes the occupations of residents in the trade area.',
                    id: 'occupation',
                    name: 'Occupation',
                    version: 'v2',
                  },
                  {
                    description:
                      'Historical, current and forecasted number of people living in houses and apartments within a trade area.',
                    id: 'residential-population',
                    name: 'Residential Population',
                    version: 'v3',
                  },
                  {
                    description: 'Salary/Wage per Employee per Annum',
                    id: 'salaries',
                    name: 'Salaries',
                    version: 'v2',
                  },
                  {
                    description:
                      'Population residing in a housing unit specifically designated as seasonal housing, like a summer cottage or winter chalet.',
                    id: 'seasonal-population',
                    name: 'Seasonal Population',
                    version: 'v3',
                  },
                  {
                    description:
                      "Expressed interest on social media within the location's trade area by business category.",
                    id: 'social',
                    name: 'Social Media Interest',
                    version: 'v3',
                  },
                  {
                    description: 'Weekly expenditures per product.',
                    id: 'spending',
                    name: 'Spending',
                    version: 'v2',
                  },
                  {
                    description:
                      'Population residing in a hotel or RV (Recreational Vehicle) for at least 1 night.',
                    id: 'transient-population',
                    name: 'Transient Population',
                    version: 'v3',
                  },
                  {
                    description: 'Number of vehicles available per household',
                    id: 'vehicles-per-hh',
                    name: 'Vehicles per Household',
                    version: 'v2',
                  },
                  {
                    description: 'Yearly age counts up to 21 by gender',
                    id: 'youth-age',
                    name: 'Youth Age',
                    version: 'v2',
                  },
                  {
                    description:
                      "Search engine searches within a location's trade area by business category.",
                    id: 'search',
                    name: 'Search Engine Demand',
                    version: 'v3',
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({
        Connection: {
          schema: z
            .string()
            .default('keep-alive')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .default('gzip')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Content-Length': {
          schema: z
            .string()
            .default('1473')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Date: {
          schema: z
            .string()
            .default('Fri, 26 Jun 2020 00:59:03 GMT')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Server: {
          schema: z
            .string()
            .default('RapidAPI-1.1.15')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Vary: {
          schema: z
            .string()
            .default('Accept-Encoding')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Via: {
          schema: z
            .string()
            .default('1.1 google')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-RapidAPI-Region': {
          schema: z
            .string()
            .default('AWS - us-east-1')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-RapidAPI-Version': {
          schema: z
            .string()
            .default('1.1.15')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-allow-credentials': {
          schema: z
            .string()
            .default('true')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-allow-origin': {
          schema: z
            .string()
            .default('*')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-expose-headers': {
          schema: z
            .string()
            .default('')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'cache-control': {
          schema: z
            .string()
            .default('max-age=0, private, must-revalidate')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [],
})

export const getDataInsightsInsightIdRoute = createRoute({
  method: 'get',
  path: '/data/insights/{insight_id:}',
  tags: ['Insights API'],
  summary: 'Fetch Insight Query Parameters',
  description:
    'Fetch request/response structure metadata for a given Insight. This provides you the periods of data available as well as any other parameters you may want to query the Insight by. Example Insights include population and market data such as: age, daytime population, avg. home value, crime indexes, foot traffic, employment, income, occupation, etc.  For the full-list see the developer documentation.',
  operationId: 'FetchInsightQueryParameters',
  request: {
    params: z.object({
      'insight_id:': z
        .string()
        .openapi({
          param: {
            description: 'Insight ID. See developer documentation for full list.',
            in: 'path',
            name: 'insight_id:',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-RapidAPI-Key': z
        .string()
        .openapi({
          param: {
            description:
              '(Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata',
            in: 'header',
            name: 'X-RapidAPI-Key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-RapidAPI-Host': z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'X-RapidAPI-Host',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: DescribeOccupationInsightSchema,
          examples: {
            response: {
              value: {
                data: {
                  description: 'Describes the occupations of residents in the trade area.',
                  groups: [
                    'White Collar',
                    'Management occupations',
                    'Top executives',
                    'Advertising, marketing, promotions, public relations, and sales managers',
                    'Operations specialties managers',
                    'Other management occupations',
                    'Business and financial operations occupations',
                    'Business operations specialists',
                    'Financial specialists',
                    'Computer and mathematical science occupations',
                    'Computer specialists',
                    'Mathematical science occupations',
                    'Architecture and engineering occupations',
                    'Architects, surveyors, and cartographers',
                    'Engineers',
                    'Drafters, engineering, and mapping technicians',
                    'Life, physical, and social science occupations',
                    'Life scientists',
                    'Physical scientists',
                    'Social scientists and related occupations',
                    'Life, physical, and social science technicians',
                    'Community and social services occupations',
                    'Counselors, social workers, and other community and social service specialists',
                    'Religious workers',
                    'All other counselors, social, and religious workers',
                    'Legal occupations',
                    'Lawyers, judges, and related workers',
                    'Legal support workers',
                    'All other legal and related workers',
                    'Education, training, and library occupations',
                    'Postsecondary teachers',
                    'Primary, secondary, and special education teachers',
                    'Other teachers and instructors',
                    'Librarians, curators, and archivists',
                    'Other education, training, and library occupations',
                    'Arts, design, entertainment, sports, and media occupations',
                    'Art and design occupations',
                    'Entertainers and performers, sports and related occupations',
                    'Media and communication occupations',
                    'Media and communication equipment occupations',
                    'Healthcare practitioners and technical occupations',
                    'Health diagnosing and treating practitioners',
                    'Health technologists and technicians',
                    'Other healthcare practitioners and technical occupations',
                    'Healthcare support occupations',
                    'Nursing, psychiatric, and home health aides',
                    'Occupational and physical therapist assistants and aides',
                    'Other healthcare support occupations',
                    'Blue Collar',
                    'Protective service occupations',
                    'First-line supervisors/managers, protective service workers',
                    'Fire fighting and prevention workers',
                    'Law enforcement workers',
                    'Other protective service workers',
                    'Food preparation and serving related occupations',
                    'Supervisors, food preparation and serving workers',
                    'Cooks and food preparation workers',
                    'Food and beverage serving workers',
                    'Other food preparation and serving related workers',
                    'Building and grounds cleaning and maintenance occupations',
                    'Supervisors, building and grounds cleaning and maintenance workers',
                    'Building cleaning and pest control workers',
                    'Grounds maintenance workers',
                    'All other building and grounds cleaning and maintenance workers',
                    'Personal care and service occupations',
                    'Supervisors, personal care and service workers',
                    'Animal care and service workers',
                    'Entertainment attendants and related workers',
                    'Funeral service workers',
                    'Personal appearance workers',
                    'Transportation, tourism, and lodging attendants',
                    'Other personal care and service workers',
                    'Sales and related occupations',
                    'Supervisors, sales workers',
                    'Retail sales workers',
                    'Sales representatives, services',
                    'Sales representatives, wholesale and manufacturing',
                    'Other sales and related workers',
                    'Office and administrative support occupations',
                    'Supervisors, office and administrative support workers',
                    'Communications equipment operators',
                    'Financial clerks',
                    'Information and record clerks',
                    'Material recording, scheduling, dispatching, and distributing occupations',
                    'Secretaries and administrative assistants',
                    'Other office and administrative support workers',
                    'Farming, fishing, and forestry occupations',
                    'Supervisors, farming, fishing, and forestry workers',
                    'Agricultural workers',
                    'Fishing and hunting workers',
                    'Forest, conservation, and logging workers',
                    'Construction and extraction occupations',
                    'Supervisors, construction and extraction workers',
                    'Construction trades and related workers',
                    'Helpers, construction trades',
                    'Other construction and related workers',
                    'Extraction workers',
                    'Installation, maintenance, and repair occupations',
                    'Supervisors of installation, maintenance, and repair workers',
                    'Electrical and electronic equipment mechanics, installers, and repairers',
                    'And mobile equipment mechanics, installers, and repairers',
                    'Other installation, maintenance, and repair occupations',
                    'Production occupations',
                    'Supervisors, production workers',
                    'Assemblers and fabricators',
                    'Food processing occupations',
                    'Metal workers and plastic workers',
                    'Printing occupations',
                    'Textile, apparel, and furnishings occupations',
                    'Woodworkers',
                    'Plant and system operators',
                    'Other production occupations',
                    'Transportation and material moving occupations',
                    'Supervisors, transportation and material moving workers',
                    'Air transportation occupations',
                    'Motor vehicle operators',
                    'Rail transportation occupations',
                    'Water transportation occupations',
                    'Other transportation workers',
                    'Material moving occupations',
                    'Military',
                    'Unclassified',
                    'context.residential-population',
                    'context.landarea',
                  ],
                  id: 'occupation',
                  name: 'Occupation',
                  parameters: {
                    category: [
                      { description: null, id: 2469, label: 'White Collar', parent_id: null },
                      {
                        description: null,
                        id: 2470,
                        label: 'Management occupations',
                        parent_id: null,
                      },
                      { description: null, id: 2471, label: 'Top executives', parent_id: null },
                      {
                        description: null,
                        id: 2472,
                        label:
                          'Advertising, marketing, promotions, public relations, and sales managers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2473,
                        label: 'Operations specialties managers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2474,
                        label: 'Other management occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2475,
                        label: 'Business and financial operations occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2476,
                        label: 'Business operations specialists',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2477,
                        label: 'Financial specialists',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2478,
                        label: 'Computer and mathematical science occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2479,
                        label: 'Computer specialists',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2480,
                        label: 'Mathematical science occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2481,
                        label: 'Architecture and engineering occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2482,
                        label: 'Architects, surveyors, and cartographers',
                        parent_id: null,
                      },
                      { description: null, id: 2483, label: 'Engineers', parent_id: null },
                      {
                        description: null,
                        id: 2484,
                        label: 'Drafters, engineering, and mapping technicians',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2485,
                        label: 'Life, physical, and social science occupations',
                        parent_id: null,
                      },
                      { description: null, id: 2486, label: 'Life scientists', parent_id: null },
                      {
                        description: null,
                        id: 2487,
                        label: 'Physical scientists',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2488,
                        label: 'Social scientists and related occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2489,
                        label: 'Life, physical, and social science technicians',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2490,
                        label: 'Community and social services occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2491,
                        label:
                          'Counselors, social workers, and other community and social service specialists',
                        parent_id: null,
                      },
                      { description: null, id: 2492, label: 'Religious workers', parent_id: null },
                      {
                        description: null,
                        id: 2493,
                        label: 'All other counselors, social, and religious workers',
                        parent_id: null,
                      },
                      { description: null, id: 2494, label: 'Legal occupations', parent_id: null },
                      {
                        description: null,
                        id: 2495,
                        label: 'Lawyers, judges, and related workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2496,
                        label: 'Legal support workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2497,
                        label: 'All other legal and related workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2498,
                        label: 'Education, training, and library occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2499,
                        label: 'Postsecondary teachers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2500,
                        label: 'Primary, secondary, and special education teachers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2501,
                        label: 'Other teachers and instructors',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2502,
                        label: 'Librarians, curators, and archivists',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2503,
                        label: 'Other education, training, and library occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2504,
                        label: 'Arts, design, entertainment, sports, and media occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2505,
                        label: 'Art and design occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2506,
                        label: 'Entertainers and performers, sports and related occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2507,
                        label: 'Media and communication occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2508,
                        label: 'Media and communication equipment occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2509,
                        label: 'Healthcare practitioners and technical occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2510,
                        label: 'Health diagnosing and treating practitioners',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2511,
                        label: 'Health technologists and technicians',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2512,
                        label: 'Other healthcare practitioners and technical occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2513,
                        label: 'Healthcare support occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2514,
                        label: 'Nursing, psychiatric, and home health aides',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2515,
                        label: 'Occupational and physical therapist assistants and aides',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2516,
                        label: 'Other healthcare support occupations',
                        parent_id: null,
                      },
                      { description: null, id: 2517, label: 'Blue Collar', parent_id: null },
                      {
                        description: null,
                        id: 2518,
                        label: 'Protective service occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2519,
                        label: 'First-line supervisors/managers, protective service workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2520,
                        label: 'Fire fighting and prevention workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2521,
                        label: 'Law enforcement workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2522,
                        label: 'Other protective service workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2523,
                        label: 'Food preparation and serving related occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2524,
                        label: 'Supervisors, food preparation and serving workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2525,
                        label: 'Cooks and food preparation workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2526,
                        label: 'Food and beverage serving workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2527,
                        label: 'Other food preparation and serving related workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2528,
                        label: 'Building and grounds cleaning and maintenance occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2529,
                        label: 'Supervisors, building and grounds cleaning and maintenance workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2530,
                        label: 'Building cleaning and pest control workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2531,
                        label: 'Grounds maintenance workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2532,
                        label: 'All other building and grounds cleaning and maintenance workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2533,
                        label: 'Personal care and service occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2534,
                        label: 'Supervisors, personal care and service workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2535,
                        label: 'Animal care and service workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2536,
                        label: 'Entertainment attendants and related workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2537,
                        label: 'Funeral service workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2538,
                        label: 'Personal appearance workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2539,
                        label: 'Transportation, tourism, and lodging attendants',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2540,
                        label: 'Other personal care and service workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2541,
                        label: 'Sales and related occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2542,
                        label: 'Supervisors, sales workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2543,
                        label: 'Retail sales workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2544,
                        label: 'Sales representatives, services',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2545,
                        label: 'Sales representatives, wholesale and manufacturing',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2546,
                        label: 'Other sales and related workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2547,
                        label: 'Office and administrative support occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2548,
                        label: 'Supervisors, office and administrative support workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2549,
                        label: 'Communications equipment operators',
                        parent_id: null,
                      },
                      { description: null, id: 2550, label: 'Financial clerks', parent_id: null },
                      {
                        description: null,
                        id: 2551,
                        label: 'Information and record clerks',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2552,
                        label:
                          'Material recording, scheduling, dispatching, and distributing occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2553,
                        label: 'Secretaries and administrative assistants',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2554,
                        label: 'Other office and administrative support workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2555,
                        label: 'Farming, fishing, and forestry occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2556,
                        label: 'Supervisors, farming, fishing, and forestry workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2557,
                        label: 'Agricultural workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2558,
                        label: 'Fishing and hunting workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2559,
                        label: 'Forest, conservation, and logging workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2560,
                        label: 'Construction and extraction occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2561,
                        label: 'Supervisors, construction and extraction workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2562,
                        label: 'Construction trades and related workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2563,
                        label: 'Helpers, construction trades',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2564,
                        label: 'Other construction and related workers',
                        parent_id: null,
                      },
                      { description: null, id: 2565, label: 'Extraction workers', parent_id: null },
                      {
                        description: null,
                        id: 2566,
                        label: 'Installation, maintenance, and repair occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2567,
                        label: 'Supervisors of installation, maintenance, and repair workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2568,
                        label:
                          'Electrical and electronic equipment mechanics, installers, and repairers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2569,
                        label: 'And mobile equipment mechanics, installers, and repairers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2570,
                        label: 'Other installation, maintenance, and repair occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2571,
                        label: 'Production occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2572,
                        label: 'Supervisors, production workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2573,
                        label: 'Assemblers and fabricators',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2574,
                        label: 'Food processing occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2575,
                        label: 'Metal workers and plastic workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2576,
                        label: 'Printing occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2577,
                        label: 'Textile, apparel, and furnishings occupations',
                        parent_id: null,
                      },
                      { description: null, id: 2578, label: 'Woodworkers', parent_id: null },
                      {
                        description: null,
                        id: 2579,
                        label: 'Plant and system operators',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2580,
                        label: 'Other production occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2581,
                        label: 'Transportation and material moving occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2582,
                        label: 'Supervisors, transportation and material moving workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2583,
                        label: 'Air transportation occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2584,
                        label: 'Motor vehicle operators',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2585,
                        label: 'Rail transportation occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2586,
                        label: 'Water transportation occupations',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2587,
                        label: 'Other transportation workers',
                        parent_id: null,
                      },
                      {
                        description: null,
                        id: 2588,
                        label: 'Material moving occupations',
                        parent_id: null,
                      },
                      { description: null, id: 2589, label: 'Military', parent_id: null },
                      { description: null, id: 2590, label: 'Unclassified', parent_id: null },
                    ],
                  },
                  periods: ['YR2020Q1'],
                  slug: 'occupation',
                  version: 'v2',
                },
              },
            },
          },
        },
      },
      headers: z.object({
        Connection: {
          schema: z
            .string()
            .default('keep-alive')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .default('gzip')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Content-Length': {
          schema: z
            .string()
            .default('2895')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Date: {
          schema: z
            .string()
            .default('Fri, 26 Jun 2020 01:26:42 GMT')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Server: {
          schema: z
            .string()
            .default('RapidAPI-1.1.15')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Vary: {
          schema: z
            .string()
            .default('Accept-Encoding')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Via: {
          schema: z
            .string()
            .default('1.1 google')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-RapidAPI-Region': {
          schema: z
            .string()
            .default('AWS - us-east-1')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-RapidAPI-Version': {
          schema: z
            .string()
            .default('1.1.15')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-allow-credentials': {
          schema: z
            .string()
            .default('true')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-allow-origin': {
          schema: z
            .string()
            .default('*')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-expose-headers': {
          schema: z
            .string()
            .default('')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'cache-control': {
          schema: z
            .string()
            .default('max-age=0, private, must-revalidate')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [],
})

export const getDataInsightsInsightIdQueryRoute = createRoute({
  method: 'get',
  path: '/data/insights/{insight_id:}/query',
  tags: ['Insights API'],
  summary: 'Query Insight at Location',
  description:
    'Execute a query for a given insight and location(s). Some Insights may require you to provide required options. ie., when querying `occupation` for White-Collar Workers, you can filter by opt=`{"data":{"category":[2469]}}`\n\nFor examples of `locations`, please see [Location API Documentation](https://idealspot.gitlab.io/developer-docs/#location)',
  operationId: 'QueryInsightatLocation',
  request: {
    query: z.object({
      version: z
        .string()
        .openapi({
          param: {
            description:
              '(Required) Insight version. Insight versions are incremented when a response format changes in any way, including the addition of new groups. Old versions are retained, unmodified, for backwards compatibility.',
            in: 'query',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'location[]': z
        .string()
        .openapi({
          param: {
            description:
              '(Required) Represents a buffer, region, or custom polygon specification. Accepts the `Location` model (as a `Buffer`, `Region`, or `Custom Polygon`) formatted as a JSON string. Multiple `location` query parameters are allowed. NOTE: When requesting multiple locations, you must include brackets(i.e. `?location[]=...&location[]=...`). If not included, only the last location will be used. For more detail, see https://idealspot.gitlab.io/developer-docs/#location',
            in: 'query',
            name: 'location[]',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      'insight_id:': z
        .string()
        .openapi({
          param: {
            description: 'Insight ID. See https://developer.idealspot.com/data for full list.',
            in: 'path',
            name: 'insight_id:',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-RapidAPI-Key': z
        .string()
        .openapi({
          param: {
            description:
              '(Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata',
            in: 'header',
            name: 'X-RapidAPI-Key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-RapidAPI-Host': z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'X-RapidAPI-Host',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': { schema: Homevalueswithin1miRadiusofLocationSchema },
      },
      headers: z.object({
        Connection: {
          schema: z
            .string()
            .default('keep-alive')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .default('gzip')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Content-Length': {
          schema: z
            .string()
            .default('727')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Date: {
          schema: z
            .string()
            .default('Fri, 26 Jun 2020 01:21:28 GMT')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Server: {
          schema: z
            .string()
            .default('RapidAPI-1.1.15')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Vary: {
          schema: z
            .string()
            .default('Accept-Encoding')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Via: {
          schema: z
            .string()
            .default('1.1 google')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-RapidAPI-Region': {
          schema: z
            .string()
            .default('AWS - us-east-1')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-RapidAPI-Version': {
          schema: z
            .string()
            .default('1.1.15')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-allow-credentials': {
          schema: z
            .string()
            .default('true')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-allow-origin': {
          schema: z
            .string()
            .default('*')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-expose-headers': {
          schema: z
            .string()
            .default('')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'cache-control': {
          schema: z
            .string()
            .default('max-age=0, private, must-revalidate')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [],
})

export const getGeometriesGeometryRoute = createRoute({
  method: 'get',
  path: '/geometries/geometry',
  tags: ['Geometries API'],
  summary: 'Fetch Geometries',
  description: 'Fetch location GeoJSON',
  operationId: 'FetchGeometries',
  request: {
    query: z.object({
      'location[]': z
        .string()
        .openapi({
          param: {
            description:
              '(Required) Represents a buffer, region, or custom polygon specification. Accepts the `Location` model (as a `Buffer`, `Region`, or `Custom Polygon`) formatted as a JSON string. Multiple `location` query parameters are allowed. NOTE: When requesting multiple locations, you must include brackets(i.e. `?location[]=...&location[]=...`). If not included, only the last location will be used.',
            in: 'query',
            name: 'location[]',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-RapidAPI-Key': z
        .string()
        .openapi({
          param: {
            description:
              '(Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata',
            in: 'header',
            name: 'X-RapidAPI-Key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-RapidAPI-Host': z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'X-RapidAPI-Host',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: Describetheregionwithin5minutedriveTimeofageographicpointSchema,
        },
      },
      headers: z.object({
        Connection: {
          schema: z
            .string()
            .default('keep-alive')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .default('gzip')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Content-Length': {
          schema: z
            .string()
            .default('16704')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Date: {
          schema: z
            .string()
            .default('Fri, 26 Jun 2020 01:37:31 GMT')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Server: {
          schema: z
            .string()
            .default('RapidAPI-1.1.15')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Vary: {
          schema: z
            .string()
            .default('Accept-Encoding')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Via: {
          schema: z
            .string()
            .default('1.1 google')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-RapidAPI-Region': {
          schema: z
            .string()
            .default('AWS - us-east-1')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-RapidAPI-Version': {
          schema: z
            .string()
            .default('1.1.15')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-allow-credentials': {
          schema: z
            .string()
            .default('true')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-allow-origin': {
          schema: z
            .string()
            .default('*')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-expose-headers': {
          schema: z
            .string()
            .default('')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'cache-control': {
          schema: z
            .string()
            .default('max-age=0, private, must-revalidate')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [],
})

export const getGeometriesRegionsIntersectingLatitudeLongitudeRoute = createRoute({
  method: 'get',
  path: '/geometries/regions/intersecting/{latitude}/{longitude}',
  tags: ['Geometries API'],
  summary: 'Fetch Administrative Regions using Lat/Lng',
  description:
    'For given latitude and longitude, find intersecting administrative regions. Region polygons are simplified for web mapping.',
  operationId: 'FetchAdministrativeRegionsusingLat/Lng',
  request: {
    params: z.object({
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            description: '(Required) Search coordinate latitude',
            in: 'path',
            name: 'latitude',
            required: true,
            schema: { format: 'double', type: 'number' },
          },
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            description: '(Required) Search coordinate longitude',
            in: 'path',
            name: 'longitude',
            required: true,
            schema: { format: 'double', type: 'number' },
          },
        }),
    }),
    headers: z.object({
      'X-RapidAPI-Key': z
        .string()
        .openapi({
          param: {
            description:
              '(Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata',
            in: 'header',
            name: 'X-RapidAPI-Key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-RapidAPI-Host': z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'X-RapidAPI-Host',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': { schema: FetchAdministrativeRegionsusingLatLngSchema },
      },
      headers: z.object({
        Connection: {
          schema: z
            .string()
            .default('keep-alive')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .default('gzip')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Date: {
          schema: z
            .string()
            .default('Fri, 26 Jun 2020 01:40:28 GMT')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Server: {
          schema: z
            .string()
            .default('RapidAPI-1.1.15')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Vary: {
          schema: z
            .string()
            .default('Accept-Encoding')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Via: {
          schema: z
            .string()
            .default('1.1 google')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-RapidAPI-Region': {
          schema: z
            .string()
            .default('AWS - us-east-1')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-RapidAPI-Version': {
          schema: z
            .string()
            .default('1.1.15')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-allow-credentials': {
          schema: z
            .string()
            .default('true')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-allow-origin': {
          schema: z
            .string()
            .default('*')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-expose-headers': {
          schema: z
            .string()
            .default('')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'cache-control': {
          schema: z
            .string()
            .default('max-age=0, private, must-revalidate')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'transfer-encoding': {
          schema: z
            .string()
            .default('chunked')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [],
})

export const getTrafficCountsSegmentIdRoute = createRoute({
  method: 'get',
  path: '/traffic/counts/{segment_id}',
  tags: ['Traffic Count API'],
  summary: 'Vehicle Traffic Counts for Road Segment',
  description: 'Time of day, day of week, and side of street vehicle traffic counts.',
  operationId: 'VehicleTrafficCountsforRoadSegment',
  request: {
    params: z.object({
      segment_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '(Required) Road segment ID. Fetched from Search Road Segments',
            in: 'path',
            name: 'segment_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'X-RapidAPI-Key': z
        .string()
        .openapi({
          param: {
            description:
              '(Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata',
            in: 'header',
            name: 'X-RapidAPI-Key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-RapidAPI-Host': z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'X-RapidAPI-Host',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: VehicleTrafficCountsforRoadSegmentSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    data: [
                      [
                        81, 56, 35, 26, 28, 48, 86, 130, 182, 240, 292, 334, 360, 360, 357, 353,
                        339, 307, 266, 222, 188, 158, 125, 102,
                      ],
                      [
                        34, 35, 30, 33, 55, 153, 371, 494, 402, 327, 336, 369, 390, 386, 402, 423,
                        419, 379, 303, 243, 200, 163, 118, 69,
                      ],
                      [
                        34, 35, 30, 33, 55, 153, 371, 494, 402, 327, 336, 369, 390, 386, 402, 423,
                        419, 379, 303, 243, 200, 163, 118, 69,
                      ],
                      [
                        34, 35, 30, 33, 55, 153, 371, 494, 402, 327, 336, 369, 390, 386, 402, 423,
                        419, 379, 303, 243, 200, 163, 118, 69,
                      ],
                      [
                        34, 35, 30, 33, 55, 153, 371, 494, 402, 327, 336, 369, 390, 386, 402, 423,
                        419, 379, 303, 243, 200, 163, 118, 69,
                      ],
                      [
                        37, 37, 32, 35, 59, 160, 388, 518, 421, 343, 352, 387, 409, 406, 422, 443,
                        439, 396, 318, 255, 210, 171, 122, 73,
                      ],
                      [
                        91, 62, 40, 28, 31, 55, 98, 146, 204, 271, 330, 377, 404, 404, 404, 398,
                        381, 346, 298, 250, 212, 178, 141, 114,
                      ],
                    ],
                    metadata: {
                      bearing: 'W',
                      columns: [
                        '12:00am',
                        '01:00am',
                        '02:00am',
                        '03:00am',
                        '04:00am',
                        '05:00am',
                        '06:00am',
                        '07:00am',
                        '08:00am',
                        '09:00am',
                        '10:00am',
                        '11:00am',
                        '12:00pm',
                        '01:00pm',
                        '02:00pm',
                        '03:00pm',
                        '04:00pm',
                        '05:00pm',
                        '06:00pm',
                        '07:00pm',
                        '08:00pm',
                        '09:00pm',
                        '10:00pm',
                        '11:00pm',
                      ],
                      name: 'East 6th Street',
                      rows: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                      segment_id: '1595369397',
                      state: 'Texas',
                    },
                    roadsegment: {
                      coordinates: [
                        [-97.734165, 30.265642000000014],
                        [-97.734314, 30.265693999999996],
                        [-97.734409, 30.265727999999996],
                        [-97.7345332, 30.265769000000006],
                        [-97.7346688, 30.265802199999996],
                        [-97.7349238, 30.2658816],
                        [-97.7350156, 30.265904199999994],
                      ],
                      type: 'LineString',
                    },
                    stats: { aadt: 5843 },
                  },
                  {
                    data: [
                      [
                        116, 80, 51, 36, 41, 69, 124, 185, 259, 343, 416, 476, 512, 512, 509, 502,
                        482, 437, 379, 317, 267, 226, 178, 145,
                      ],
                      [
                        71, 43, 34, 37, 69, 173, 364, 485, 464, 438, 469, 520, 548, 561, 610, 666,
                        677, 625, 503, 413, 346, 279, 203, 134,
                      ],
                      [
                        71, 43, 34, 37, 69, 173, 364, 485, 464, 438, 469, 520, 548, 561, 610, 666,
                        677, 625, 503, 413, 346, 279, 203, 134,
                      ],
                      [
                        71, 43, 34, 37, 69, 173, 364, 485, 464, 438, 469, 520, 548, 561, 610, 666,
                        677, 625, 503, 413, 346, 279, 203, 134,
                      ],
                      [
                        71, 43, 34, 37, 69, 173, 364, 485, 464, 438, 469, 520, 548, 561, 610, 666,
                        677, 625, 503, 413, 346, 279, 203, 134,
                      ],
                      [
                        74, 46, 34, 38, 73, 180, 382, 509, 487, 458, 491, 545, 576, 587, 640, 698,
                        710, 654, 528, 433, 362, 292, 213, 141,
                      ],
                      [
                        130, 88, 57, 40, 45, 78, 138, 207, 291, 386, 469, 536, 576, 576, 573, 566,
                        542, 493, 426, 356, 299, 253, 201, 163,
                      ],
                    ],
                    metadata: {
                      bearing: 'E',
                      columns: [
                        '12:00am',
                        '01:00am',
                        '02:00am',
                        '03:00am',
                        '04:00am',
                        '05:00am',
                        '06:00am',
                        '07:00am',
                        '08:00am',
                        '09:00am',
                        '10:00am',
                        '11:00am',
                        '12:00pm',
                        '01:00pm',
                        '02:00pm',
                        '03:00pm',
                        '04:00pm',
                        '05:00pm',
                        '06:00pm',
                        '07:00pm',
                        '08:00pm',
                        '09:00pm',
                        '10:00pm',
                        '11:00pm',
                      ],
                      name: 'East 6th Street',
                      rows: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                      segment_id: '1595369411',
                      state: 'Texas',
                    },
                    roadsegment: {
                      coordinates: [
                        [-97.7350156, 30.265904199999994],
                        [-97.7349238, 30.2658816],
                        [-97.7346688, 30.265802199999996],
                        [-97.7345332, 30.265769000000006],
                        [-97.734409, 30.265727999999996],
                        [-97.734314, 30.265693999999996],
                        [-97.734165, 30.265642000000014],
                      ],
                      type: 'LineString',
                    },
                    stats: { aadt: 8318 },
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({
        Connection: {
          schema: z
            .string()
            .default('keep-alive')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .default('gzip')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Content-Length': {
          schema: z
            .string()
            .default('826')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Date: {
          schema: z
            .string()
            .default('Fri, 26 Jun 2020 01:49:02 GMT')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Server: {
          schema: z
            .string()
            .default('RapidAPI-1.1.15')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Vary: {
          schema: z
            .string()
            .default('Accept-Encoding')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Via: {
          schema: z
            .string()
            .default('1.1 google')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-RapidAPI-Region': {
          schema: z
            .string()
            .default('AWS - us-east-1')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-RapidAPI-Version': {
          schema: z
            .string()
            .default('1.1.15')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-allow-credentials': {
          schema: z
            .string()
            .default('true')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-allow-origin': {
          schema: z
            .string()
            .default('*')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-expose-headers': {
          schema: z
            .string()
            .default('')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'cache-control': {
          schema: z
            .string()
            .default('max-age=0, private, must-revalidate')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [],
})

export const getTrafficRoadsNearestLatitudeLongitudeRoute = createRoute({
  method: 'get',
  path: '/traffic/roads/nearest/{latitude}/{longitude}',
  tags: ['Traffic Count API'],
  summary: 'Fetch Nearest Road Segments',
  description: 'For given latitude and longitude, find `n` nearest road segments',
  operationId: 'FetchNearestRoadSegments',
  request: {
    query: z.object({
      n: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Number of road segments to return (between 1 and 20)',
            in: 'query',
            name: 'n',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    params: z.object({
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            description: '(Required) Search coordinate latitude',
            in: 'path',
            name: 'latitude',
            required: true,
            schema: { format: 'double', type: 'number' },
          },
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            description: '(Required) Search coordinate longitude',
            in: 'path',
            name: 'longitude',
            required: true,
            schema: { format: 'double', type: 'number' },
          },
        }),
    }),
    headers: z.object({
      'X-RapidAPI-Key': z
        .string()
        .openapi({
          param: {
            description:
              '(Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata',
            in: 'header',
            name: 'X-RapidAPI-Key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-RapidAPI-Host': z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'X-RapidAPI-Host',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json; charset=utf-8': {
          schema: SearchRoadSegmentsSchema,
          examples: {
            response: {
              value: {
                data: {
                  crs: { properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' }, type: 'name' },
                  features: [
                    {
                      geometry: {
                        coordinates: [
                          [-97.735557, 30.261986],
                          [-97.735196, 30.26292],
                          [-97.735011, 30.263339],
                          [-97.734814, 30.263796],
                          [-97.7347722, 30.2638848],
                          [-97.734748, 30.263936],
                          [-97.734723, 30.264008],
                          [-97.734617, 30.26428],
                          [-97.734489, 30.264667],
                          [-97.734447, 30.2648],
                          [-97.734362, 30.26507],
                          [-97.734288, 30.265273],
                          [-97.734177, 30.265612],
                          [-97.734165, 30.265642],
                        ],
                        type: 'LineString',
                      },
                      properties: {
                        bearing: 'N',
                        roadname: 'North Interstate Highway 35 Service Road',
                        segment_id: '1595171804',
                        state: 'Texas',
                      },
                      type: 'Feature',
                    },
                  ],
                  type: 'FeatureCollection',
                },
              },
            },
          },
        },
      },
      headers: z.object({
        Connection: {
          schema: z
            .string()
            .default('keep-alive')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .default('gzip')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Content-Length': {
          schema: z
            .string()
            .default('351')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Date: {
          schema: z
            .string()
            .default('Fri, 26 Jun 2020 01:46:53 GMT')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Server: {
          schema: z
            .string()
            .default('RapidAPI-1.1.15')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Vary: {
          schema: z
            .string()
            .default('Accept-Encoding')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Via: {
          schema: z
            .string()
            .default('1.1 google')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-RapidAPI-Region': {
          schema: z
            .string()
            .default('AWS - us-east-1')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-RapidAPI-Version': {
          schema: z
            .string()
            .default('1.1.15')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-allow-credentials': {
          schema: z
            .string()
            .default('true')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-allow-origin': {
          schema: z
            .string()
            .default('*')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'access-control-expose-headers': {
          schema: z
            .string()
            .default('')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'cache-control': {
          schema: z
            .string()
            .default('max-age=0, private, must-revalidate')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [],
})
