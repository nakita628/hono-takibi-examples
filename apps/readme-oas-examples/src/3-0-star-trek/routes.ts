import { createRoute, z } from '@hono/zod-openapi'

const AnimalHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Animal unique ID' }),
    name: z.string().openapi({ description: 'Animal name' }),
  })
  .openapi({ description: 'Header animal, embedded in other objects', required: ['uid', 'name'] })
  .openapi('AnimalHeader')

const AnimalBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Animal unique ID' }),
    name: z.string().openapi({ description: 'Animal name' }),
    earthAnimal: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an earth animal" }),
    earthInsect: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an earth insect" }),
    avian: z.boolean().exactOptional().openapi({ description: "Whether it's an avian" }),
    canine: z.boolean().exactOptional().openapi({ description: "Whether it's a canine" }),
    feline: z.boolean().exactOptional().openapi({ description: "Whether it's a feline" }),
  })
  .openapi({ description: 'Base animal, returned in search results', required: ['uid', 'name'] })
  .openapi('AnimalBase')

const AnimalFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Animal unique ID' }),
    name: z.string().openapi({ description: 'Animal name' }),
    earthAnimal: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an earth animal" }),
    earthInsect: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an earth insect" }),
    avian: z.boolean().exactOptional().openapi({ description: "Whether it's an avian" }),
    canine: z.boolean().exactOptional().openapi({ description: "Whether it's a canine" }),
    feline: z.boolean().exactOptional().openapi({ description: "Whether it's a feline" }),
  })
  .openapi({
    description: 'Full animal, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('AnimalFull')

const ResponsePageSchema = z
  .object({
    pageNumber: z.int32().exactOptional().openapi({ description: 'Zero-based page number' }),
    pageSize: z.int32().exactOptional().openapi({ description: 'Page size' }),
    numberOfElements: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of elements in page' }),
    totalElements: z.int32().exactOptional().openapi({ description: 'Total elements found' }),
    totalPages: z.int32().exactOptional().openapi({ description: 'Total pages found' }),
    firstPage: z.boolean().exactOptional().openapi({ description: 'Whether it is the first page' }),
    lastPage: z.boolean().exactOptional().openapi({ description: 'Whether it is the last page' }),
  })
  .openapi({ description: 'Object describing response page', required: [] })
  .openapi('ResponsePage')

const ResponseSortDirectionSchema = z
  .enum(['ASC', 'DESC'])
  .openapi({ description: 'Sort direction' })
  .openapi('ResponseSortDirection')

const ResponseSortClauseSchema = z
  .object({
    name: z.string().openapi({ description: 'Field name results are sorted by' }),
    direction: ResponseSortDirectionSchema,
    clauseOrder: z.int().openapi({ description: 'Order in which this clause was applied' }),
  })
  .openapi({
    description: 'Single response sort clause',
    required: ['name', 'direction', 'clauseOrder'],
  })
  .openapi('ResponseSortClause')

const ResponseSortSchema = z
  .object({
    clauses: z
      .array(ResponseSortClauseSchema)
      .exactOptional()
      .openapi({ description: 'List of response sort rules' }),
  })
  .openapi({ description: 'Response sort', required: [] })
  .openapi('ResponseSort')

const AnimalBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    animals: z
      .array(AnimalBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of animals matching given criteria' }),
  })
  .openapi({ description: 'Response object for animals search', required: [] })
  .openapi('AnimalBaseResponse')

const AnimalFullResponseSchema = z
  .object({ animal: AnimalFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single animal query', required: [] })
  .openapi('AnimalFullResponse')

const AstronomicalObjectHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: "Astronomical object's unique ID" }),
    name: z.string().openapi({ description: 'Astronomical object name' }),
  })
  .openapi({
    description: 'Header astronomical object, embedded in other objects',
    required: ['uid', 'name'],
  })
  .openapi('AstronomicalObjectHeader')

const AstronomicalObjectTypeSchema = z
  .enum([
    'PLANET',
    'D_CLASS_PLANET',
    'H_CLASS_PLANET',
    'GAS_GIANT_PLANET',
    'K_CLASS_PLANET',
    'L_CLASS_PLANET',
    'M_CLASS_PLANET',
    'Y_CLASS_PLANET',
    'ROGUE_PLANET',
    'ARTIFICIAL_PLANET',
    'ASTEROID',
    'ASTEROIDAL_MOON',
    'ASTEROID_BELT',
    'CLUSTER',
    'COMET',
    'CONSTELLATION',
    'GALAXY',
    'MOON',
    'M_CLASS_MOON',
    'NEBULA',
    'PLANETOID',
    'D_CLASS_PLANETOID',
    'QUASAR',
    'STAR',
    'STAR_SYSTEM',
    'SECTOR',
    'REGION',
  ])
  .openapi({ description: 'Astronomical object type' })
  .openapi('AstronomicalObjectType')

const AstronomicalObjectBaseSchema = z
  .object({
    uid: z.string().openapi({ description: "Astronomical object's unique ID" }),
    name: z.string().openapi({ description: 'Astronomical object name' }),
    astronomicalObjectType: AstronomicalObjectTypeSchema,
    location: AstronomicalObjectHeaderSchema.exactOptional(),
  })
  .openapi({
    description: 'Base astronomical object, returned in search results',
    required: ['uid', 'name', 'astronomicalObjectType'],
  })
  .openapi('AstronomicalObjectBase')

const AstronomicalObjectFullSchema = z
  .object({
    uid: z.string().openapi({ description: "Astronomical object's unique ID" }),
    name: z.string().openapi({ description: 'Astronomical object name' }),
    astronomicalObjectType: AstronomicalObjectTypeSchema,
    location: AstronomicalObjectBaseSchema.exactOptional(),
    astronomicalObjects: z
      .array(AstronomicalObjectBaseSchema)
      .exactOptional()
      .openapi({
        description:
          'Astronomical objects located in this astronomical object, like planets in a star system',
      }),
  })
  .openapi({
    description: 'Full astronomical object, returned when queried using UID',
    required: ['uid', 'name', 'astronomicalObjectType'],
  })
  .openapi('AstronomicalObjectFull')

const AstronomicalObjectBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    astronomicalObjects: z
      .array(AstronomicalObjectBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of astronomical objects matching given criteria' }),
  })
  .openapi({ description: 'Response object for astronomical objects search', required: [] })
  .openapi('AstronomicalObjectBaseResponse')

const AstronomicalObjectFullResponseSchema = z
  .object({ astronomicalObject: AstronomicalObjectFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single astronomical object query', required: [] })
  .openapi('AstronomicalObjectFullResponse')

const BloodTypeSchema = z
  .enum(['B_NEGATIVE', 'O_NEGATIVE', 'T_NEGATIVE'])
  .openapi({ description: 'Blood type' })
  .openapi('BloodType')

const BookHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Book unique ID' }),
    title: z.string().openapi({ description: 'Book title' }),
  })
  .openapi({ description: 'Header book, embedded in other objects', required: ['uid', 'title'] })
  .openapi('BookHeader')

const BookBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Book unique ID' }),
    title: z.string().openapi({ description: 'Book title' }),
    publishedYear: z.int().exactOptional().openapi({ description: 'Year the book was published' }),
    publishedMonth: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month the book was published' }),
    publishedDay: z.int().exactOptional().openapi({ description: 'Day the book was published' }),
    numberOfPages: z.int().exactOptional().openapi({ description: 'Number of pages' }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of book story' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of book story' }),
    yearFrom: z.int().exactOptional().openapi({ description: 'Starting year of book story' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of book story' }),
    novel: z.boolean().openapi({ description: "Whether it's a novel" }),
    referenceBook: z.boolean().openapi({ description: "Whether it's a reference book" }),
    biographyBook: z.boolean().openapi({ description: "Whether it's a biography book" }),
    rolePlayingBook: z.boolean().openapi({ description: "Whether it's a role playing book" }),
    eBook: z.boolean().openapi({ description: "Whether it's an eBook" }),
    anthology: z.boolean().openapi({ description: "Whether it's an anthology" }),
    novelization: z.boolean().openapi({ description: "Whether it's a novelization" }),
    audiobook: z
      .boolean()
      .openapi({
        description:
          "Whether it's an audiobook, or has been release as an audiobook in addition to other form",
      }),
    audiobookAbridged: z
      .boolean()
      .openapi({ description: "If it's an audiobook, whether it's been abridged" }),
    audiobookPublishedYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year the audiobook was published' }),
    audiobookPublishedMonth: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month the audiobook was published' }),
    audiobookPublishedDay: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day the audiobook was published' }),
    audiobookRunTime: z
      .int()
      .exactOptional()
      .openapi({ description: 'Audiobook run time, in minutes' }),
    productionNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "Book's production number" }),
  })
  .openapi({
    description: 'Base book, returned in search results',
    required: [
      'uid',
      'title',
      'novel',
      'referenceBook',
      'biographyBook',
      'rolePlayingBook',
      'eBook',
      'anthology',
      'novelization',
      'audiobook',
      'audiobookAbridged',
    ],
  })
  .openapi('BookBase')

const BookSeriesBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Book series unique ID' }),
    title: z.string().openapi({ description: 'Book series title' }),
    publishedYearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year from which the book series was published' }),
    publishedMonthFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month from which the book series was published' }),
    publishedYearTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year to which the book series was published' }),
    publishedMonthTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month to which the book series was published' }),
    numberOfBooks: z.int().exactOptional().openapi({ description: 'Number of pages' }),
    yearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Starting year of book series stories' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of book series stories' }),
    miniseries: z.boolean().exactOptional().openapi({ description: "Whether it's a miniseries" }),
    eBookSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a e-book series" }),
  })
  .openapi({
    description: 'Base book series, returned in search results',
    required: ['uid', 'title'],
  })
  .openapi('BookSeriesBase')

const GenderSchema = z.enum(['F', 'M']).openapi({ description: 'Gender' }).openapi('Gender')

const StaffBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Staff unique ID' }),
    name: z.string().openapi({ description: 'Staff name' }),
    birthName: z.string().exactOptional().openapi({ description: 'Staff birth name' }),
    gender: GenderSchema.exactOptional(),
    dateOfBirth: z.iso.date().exactOptional().openapi({ description: 'Date the staff was born' }),
    placeOfBirth: z.string().exactOptional().openapi({ description: 'Place the staff was born' }),
    dateOfDeath: z.iso.date().exactOptional().openapi({ description: 'Date the staff died' }),
    placeOfDeath: z.string().exactOptional().openapi({ description: 'Place the staff died' }),
    artDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person if from art department' }),
    artDirector: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is an art director' }),
    productionDesigner: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a production designer' }),
    cameraAndElectricalDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is from camera and electrical department' }),
    cinematographer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a cinematographer' }),
    castingDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is from casting department' }),
    costumeDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is from costume department' }),
    costumeDesigner: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a custume designer' }),
    director: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a director' }),
    assistantOrSecondUnitDirector: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this person is an assistant or secound unit director director',
      }),
    exhibitAndAttractionStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is an exhibit and tttraction staff' }),
    filmEditor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a film editor' }),
    linguist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a linguist' }),
    locationStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a location staff' }),
    makeupStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a make-up staff' }),
    musicDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is from music department' }),
    composer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a composer' }),
    personalAssistant: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a personal assistant' }),
    producer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a producer' }),
    productionAssociate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a production associate' }),
    productionStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a production staff' }),
    publicationStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a publication staff' }),
    scienceConsultant: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a science consultant' }),
    soundDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is from sound department' }),
    specialAndVisualEffectsStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a special and visual effects staff' }),
    author: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is an author' }),
    audioAuthor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is an audio author' }),
    calendarArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a calendar artist' }),
    comicArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic artist' }),
    comicAuthor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic author' }),
    comicColorArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic color artist' }),
    comicInteriorArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic interior artist' }),
    comicInkArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic ink artist' }),
    comicPencilArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic pencil artist' }),
    comicLetterArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic letter artist' }),
    comicStripArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic strip artist' }),
    gameArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a game artist' }),
    gameAuthor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a game author' }),
    novelArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a novel artist' }),
    novelAuthor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a novel author' }),
    referenceArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a reference artist' }),
    referenceAuthor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a reference author' }),
    publicationArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a publication artist' }),
    publicationDesigner: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a publication designer' }),
    publicationEditor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a publication editor' }),
    publicityArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a publication artist' }),
    cbsDigitalStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a part of CBS digital staff' }),
    ilmProductionStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a part of ILM production staff' }),
    specialFeaturesStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a special features artist' }),
    storyEditor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a story editor' }),
    studioExecutive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a studio executive' }),
    stuntDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is from stunt department' }),
    transportationDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is from transportation department' }),
    videoGameProductionStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is video game production staff' }),
    writer: z.boolean().exactOptional().openapi({ description: 'Whether this person is a writer' }),
  })
  .openapi({ description: 'Base staff, returned in search results', required: ['uid', 'name'] })
  .openapi('StaffBase')

const CompanyBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Company unique ID' }),
    name: z.string().openapi({ description: 'Company name' }),
    broadcaster: z.boolean().exactOptional().openapi({ description: "Whether it's a broadcaster" }),
    collectibleCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a collectible company" }),
    conglomerate: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a conglomerate" }),
    digitalVisualEffectsCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a digital visual effects company" }),
    distributor: z.boolean().exactOptional().openapi({ description: "Whether it's a distributor" }),
    gameCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a game company" }),
    filmEquipmentCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a film equipment company" }),
    makeUpEffectsStudio: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a make-up effects studio" }),
    mattePaintingCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a matte painting company" }),
    modelAndMiniatureEffectsCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a model and miniature effects company" }),
    postProductionCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a post-production company" }),
    productionCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a production company" }),
    propCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a prop company" }),
    recordLabel: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a record label" }),
    specialEffectsCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a special effects company" }),
    tvAndFilmProductionCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a TV and film production company" }),
    videoGameCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a video game company" }),
  })
  .openapi({ description: 'Base company, returned in search results', required: ['uid', 'name'] })
  .openapi('CompanyBase')

const MaritalStatusSchema = z
  .enum([
    'SINGLE',
    'ENGAGED',
    'MARRIED',
    'DIVORCED',
    'REMARRIED',
    'SEPARATED',
    'WIDOWED',
    'CAPTAINS_WOMAN',
  ])
  .openapi({ description: 'Marital status' })
  .openapi('MaritalStatus')

const CharacterBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Character unique ID' }),
    name: z.string().openapi({ description: 'Character name' }),
    gender: GenderSchema.exactOptional(),
    yearOfBirth: z.int().exactOptional().openapi({ description: 'Year the character was born' }),
    monthOfBirth: z.int().exactOptional().openapi({ description: 'Month the character was born' }),
    dayOfBirth: z.int().exactOptional().openapi({ description: 'Day the character was born' }),
    placeOfBirth: z.string().exactOptional().openapi({ description: 'Place of birth' }),
    yearOfDeath: z.int().exactOptional().openapi({ description: 'Year the character died' }),
    monthOfDeath: z.int().exactOptional().openapi({ description: 'Month the character died' }),
    dayOfDeath: z.int().exactOptional().openapi({ description: 'Day the character died' }),
    placeOfDeath: z.string().exactOptional().openapi({ description: 'Place of death' }),
    height: z.int().exactOptional().openapi({ description: 'Height in centimeters' }),
    weight: z.int().exactOptional().openapi({ description: 'Weight in kilograms' }),
    deceased: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this character is deceased' }),
    bloodType: BloodTypeSchema.exactOptional(),
    maritalStatus: MaritalStatusSchema.exactOptional(),
    serialNumber: z.string().exactOptional().openapi({ description: 'Serial number' }),
    hologramActivationDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hologram activation date' }),
    hologramStatus: z.string().exactOptional().openapi({ description: 'Hologram status' }),
    hologramDateStatus: z.string().exactOptional().openapi({ description: 'Hologram date status' }),
    hologram: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this character is a hologram' }),
    fictionalCharacter: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this character is a fictional character (from universe point of view)',
      }),
    mirror: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this character is from mirror universe' }),
    alternateReality: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this character is from alternate reality' }),
  })
  .openapi({ description: 'Base character, returned in search results', required: ['uid', 'name'] })
  .openapi('CharacterBase')

const ReferenceTypeSchema = z
  .enum(['ASIN', 'ISBN'])
  .openapi({ description: 'Reference type' })
  .openapi('ReferenceType')

const ReferenceSchema = z
  .object({
    uid: z.string().exactOptional().openapi({ description: 'Reference unique ID' }),
    referenceType: ReferenceTypeSchema.exactOptional(),
    referenceNumber: z.string().exactOptional().openapi({ description: 'Reference number' }),
  })
  .openapi({ description: 'Reference of book, comics, video release, etc.', required: [] })
  .openapi('Reference')

const BookCollectionBaseSchema = z
  .object({
    uid: z.string().exactOptional().openapi({ description: 'Book collection unique ID' }),
    title: z.string().exactOptional().openapi({ description: 'Book collection title' }),
    publishedYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year the book collection was published' }),
    publishedMonth: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month the book collection was published' }),
    publishedDay: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day the book collection was published' }),
    numberOfPages: z.int().exactOptional().openapi({ description: 'Number of pages' }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of book collection stories' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of book collection stories' }),
    yearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Starting year of book collection stories' }),
    yearTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Ending year of book collection stories' }),
  })
  .openapi({ description: 'Base book collection, returned in search results', required: [] })
  .openapi('BookCollectionBase')

const BookFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Book unique ID' }),
    title: z.string().openapi({ description: 'Book title' }),
    publishedYear: z.int().exactOptional().openapi({ description: 'Year the book was published' }),
    publishedMonth: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month the book was published' }),
    publishedDay: z.int().exactOptional().openapi({ description: 'Day the book was published' }),
    numberOfPages: z.int().exactOptional().openapi({ description: 'Number of pages' }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of book story' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of book story' }),
    yearFrom: z.int().exactOptional().openapi({ description: 'Starting year of book story' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of book story' }),
    novel: z.boolean().openapi({ description: "Whether it's a novel" }),
    referenceBook: z.boolean().openapi({ description: "Whether it's a reference book" }),
    biographyBook: z.boolean().openapi({ description: "Whether it's a biography book" }),
    rolePlayingBook: z.boolean().openapi({ description: "Whether it's a role playing book" }),
    eBook: z.boolean().openapi({ description: "Whether it's an e-book" }),
    anthology: z.boolean().openapi({ description: "Whether it's an anthology" }),
    novelization: z.boolean().openapi({ description: "Whether it's a novelization" }),
    audiobook: z
      .boolean()
      .openapi({
        description:
          "Whether it's an audiobook, or has been release as an audiobook in addition to other form",
      }),
    audiobookAbridged: z
      .boolean()
      .openapi({ description: "If it's an audiobook, whether it's been abridged" }),
    audiobookPublishedYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year the audiobook was published' }),
    audiobookPublishedMonth: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month the audiobook was published' }),
    audiobookPublishedDay: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day the audiobook was published' }),
    audiobookRunTime: z
      .int()
      .exactOptional()
      .openapi({ description: 'Audiobook run time, in minutes' }),
    productionNumber: z.string().exactOptional().openapi({ description: 'Book production number' }),
    bookSeries: z
      .array(BookSeriesBaseSchema)
      .exactOptional()
      .openapi({ description: 'Book series this book is included in' }),
    authors: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Authors of the book' }),
    artists: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Artists involved in the book' }),
    editors: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Editors involved in the book' }),
    audiobookNarrators: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Audiobook narrators' }),
    publishers: z
      .array(CompanyBaseSchema)
      .exactOptional()
      .openapi({ description: 'Book publishers' }),
    audiobookPublishers: z
      .array(CompanyBaseSchema)
      .exactOptional()
      .openapi({ description: 'Audiobook publishers' }),
    characters: z
      .array(CharacterBaseSchema)
      .exactOptional()
      .openapi({ description: 'Characters appearing the book' }),
    references: z.array(ReferenceSchema).exactOptional().openapi({ description: 'References' }),
    audiobookReferences: z
      .array(ReferenceSchema)
      .exactOptional()
      .openapi({ description: 'Audiobook references' }),
    bookCollections: z
      .array(BookCollectionBaseSchema)
      .exactOptional()
      .openapi({ description: 'Book collections this book is included in' }),
  })
  .openapi({
    description: 'Full book, returned when queried using UID',
    required: [
      'uid',
      'title',
      'novel',
      'referenceBook',
      'biographyBook',
      'rolePlayingBook',
      'eBook',
      'anthology',
      'novelization',
      'audiobook',
      'audiobookAbridged',
    ],
  })
  .openapi('BookFull')

const BookBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    books: z
      .array(BookBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of books matching given criteria' }),
  })
  .openapi({ description: 'Response object for books search', required: [] })
  .openapi('BookBaseResponse')

const BookFullResponseSchema = z
  .object({ book: BookFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single book query', required: [] })
  .openapi('BookFullResponse')

const BookCollectionHeaderSchema = z
  .object({
    uid: z.string().exactOptional().openapi({ description: 'Book collection unique ID' }),
    title: z.string().exactOptional().openapi({ description: 'Book collection title' }),
  })
  .openapi({ description: 'Header book collection, embedded in other objects', required: [] })
  .openapi('BookCollectionHeader')

const BookCollectionFullSchema = z
  .object({
    uid: z.string().exactOptional().openapi({ description: 'Book collection unique ID' }),
    title: z.string().exactOptional().openapi({ description: 'Book collection title' }),
    publishedYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year the book collection was published' }),
    publishedMonth: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month the book collection was published' }),
    publishedDay: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day the book collection was published' }),
    numberOfPages: z.int().exactOptional().openapi({ description: 'Number of pages' }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of book collection stories' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of book collection stories' }),
    yearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Starting year of book collection stories' }),
    yearTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Ending year of book collection stories' }),
    bookSeries: z
      .array(BookSeriesBaseSchema)
      .exactOptional()
      .openapi({ description: 'Book series this book collection is included in' }),
    authors: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Authors of the book collection' }),
    artists: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Artists involved in the book collection' }),
    editors: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Editors involved in the book collection' }),
    publishers: z
      .array(CompanyBaseSchema)
      .exactOptional()
      .openapi({ description: 'Book collection publishers' }),
    characters: z
      .array(CharacterBaseSchema)
      .exactOptional()
      .openapi({ description: 'Characters appearing in the book collection' }),
    references: z.array(ReferenceSchema).exactOptional().openapi({ description: 'References' }),
    books: z
      .array(BookBaseSchema)
      .exactOptional()
      .openapi({ description: 'Books included in this book collection' }),
  })
  .openapi({ description: 'Full book collection, returned when queried using UID', required: [] })
  .openapi('BookCollectionFull')

const BookCollectionBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    bookCollections: z
      .array(BookCollectionBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of book collections matching given criteria' }),
  })
  .openapi({ description: 'Response object for book collections search', required: [] })
  .openapi('BookCollectionBaseResponse')

const BookCollectionFullResponseSchema = z
  .object({ bookCollection: BookCollectionFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single book collection query', required: [] })
  .openapi('BookCollectionFullResponse')

const BookSeriesHeaderSchema = z
  .object({
    uid: z.string().exactOptional().openapi({ description: 'Book series unique ID' }),
    title: z.string().exactOptional().openapi({ description: 'Book series title' }),
  })
  .openapi({ description: 'Header book series, embedded in other objects', required: [] })
  .openapi('BookSeriesHeader')

const BookSeriesFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Book series unique ID' }),
    title: z.string().openapi({ description: 'Book series title' }),
    publishedYearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year from which the book series was published' }),
    publishedMonthFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month from which the book series was published' }),
    publishedYearTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year to which the book series was published' }),
    publishedMonthTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month to which the book series was published' }),
    numberOfBooks: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of books in book series' }),
    yearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Starting year of book series stories' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of book series stories' }),
    miniseries: z.boolean().exactOptional().openapi({ description: "Whether it's a miniseries" }),
    eBookSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a e-book series" }),
    parentSeries: z
      .array(BookSeriesBaseSchema)
      .exactOptional()
      .openapi({ description: 'Book series this book series is included in' }),
    childSeries: z
      .array(BookSeriesBaseSchema)
      .exactOptional()
      .openapi({ description: 'Child book series included in this book series' }),
    publishers: z
      .array(CompanyBaseSchema)
      .exactOptional()
      .openapi({ description: 'Companies that published this book series' }),
    books: z
      .array(BookBaseSchema)
      .exactOptional()
      .openapi({ description: 'Books included in this book series' }),
  })
  .openapi({
    description: 'Full book series, returned when queried using UID',
    required: ['uid', 'title'],
  })
  .openapi('BookSeriesFull')

const BookSeriesBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    bookSeries: z
      .array(BookSeriesBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of book series matching given criteria' }),
  })
  .openapi({ description: 'Response object for book series search', required: [] })
  .openapi('BookSeriesBaseResponse')

const BookSeriesFullResponseSchema = z
  .object({ bookSeries: BookSeriesFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single book series query', required: [] })
  .openapi('BookSeriesFullResponse')

const CharacterHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Character unique ID' }),
    name: z.string().openapi({ description: 'Character name' }),
  })
  .openapi({
    description: 'Header character, embedded in other objects',
    required: ['uid', 'name'],
  })
  .openapi('CharacterHeader')

const PerformerBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Performer unique ID' }),
    name: z.string().openapi({ description: 'Performer name' }),
    birthName: z.string().exactOptional().openapi({ description: 'Performer birth name' }),
    gender: GenderSchema.exactOptional(),
    dateOfBirth: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date the performer was born' }),
    placeOfBirth: z
      .string()
      .exactOptional()
      .openapi({ description: 'Place the performer was born' }),
    dateOfDeath: z.iso.date().exactOptional().openapi({ description: 'Date the performer died' }),
    placeOfDeath: z.string().exactOptional().openapi({ description: 'Place the performer died' }),
    animalPerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an animal performer" }),
    disPerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a performer that appeared in Star Trek: Discovery" }),
    ds9Performer: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether it's a performer that appeared in Star Trek: Deep Space Nine",
      }),
    entPerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a performer that appeared in Star Trek: Enterprise" }),
    filmPerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a performer that appeared in a Star Trek movie" }),
    standInPerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a stand-in performer" }),
    stuntPerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a stunt performer" }),
    tasPerformer: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether it's a performer that appeared in Star Trek: The Animated Series",
      }),
    tngPerformer: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether it's a performer that appeared in Star Trek: The Next Generation",
      }),
    tosPerformer: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether it's a performer that appeared in Star Trek: The Original Series",
      }),
    videoGamePerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a video game performer" }),
    voicePerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a voice performer" }),
    voyPerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a performer that appeared in Star Trek: Voyager" }),
  })
  .openapi({ description: 'Base performer, returned in search results', required: ['uid', 'name'] })
  .openapi('PerformerBase')

const SeriesHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Series unique ID' }),
    title: z.string().openapi({ description: 'Series title' }),
  })
  .openapi({ description: 'Header series, embedded in other objects', required: ['uid', 'title'] })
  .openapi('SeriesHeader')

const SeasonHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Season unique ID' }),
    title: z.string().openapi({ description: 'Season title' }),
  })
  .openapi({ description: 'Header season, embedded in other objects', required: ['uid', 'title'] })
  .openapi('SeasonHeader')

const EpisodeBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Episode unique ID' }),
    title: z.string().openapi({ description: 'Episode title' }),
    titleGerman: z.string().exactOptional().openapi({ description: 'Episode title in German' }),
    titleItalian: z.string().exactOptional().openapi({ description: 'Episode title in Italian' }),
    titleJapanese: z.string().exactOptional().openapi({ description: 'Episode title in Japanese' }),
    series: SeriesHeaderSchema.exactOptional(),
    season: SeasonHeaderSchema.exactOptional(),
    seasonNumber: z.int().exactOptional().openapi({ description: 'Season number' }),
    episodeNumber: z.int().exactOptional().openapi({ description: 'Episode number in season' }),
    productionSerialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Production serial number' }),
    featureLength: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a feature length episode" }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of episode story' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of episode story' }),
    yearFrom: z.int().exactOptional().openapi({ description: 'Starting year of episode story' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of episode story' }),
    usAirDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date the episode was first aired in the United States' }),
    finalScriptDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date the episode script was completed' }),
  })
  .openapi({ description: 'Base episode, returned in search results', required: ['uid', 'title'] })
  .openapi('EpisodeBase')

const StaffHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Staff unique ID' }),
    name: z.string().openapi({ description: 'Staff name' }),
  })
  .openapi({ description: 'Header staff, embedded in other objects', required: ['uid', 'name'] })
  .openapi('StaffHeader')

const MovieBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Movie unique ID' }),
    title: z.string().openapi({ description: 'Movie title' }),
    mainDirector: StaffHeaderSchema.exactOptional(),
    titleBulgarian: z.string().exactOptional().openapi({ description: 'Movie title in Bulgarian' }),
    titleCatalan: z.string().exactOptional().openapi({ description: 'Movie title in Catalan' }),
    titleChineseTraditional: z
      .string()
      .exactOptional()
      .openapi({ description: 'Movie title in Chinese traditional' }),
    titleGerman: z.string().exactOptional().openapi({ description: 'Movie title in German' }),
    titleItalian: z.string().exactOptional().openapi({ description: 'Movie title in Italian' }),
    titleJapanese: z.string().exactOptional().openapi({ description: 'Movie title in Japanese' }),
    titlePolish: z.string().exactOptional().openapi({ description: 'Movie title in Polish' }),
    titleRussian: z.string().exactOptional().openapi({ description: 'Movie title in Russian' }),
    titleSerbian: z.string().exactOptional().openapi({ description: 'Movie title in Serbian' }),
    titleSpanish: z.string().exactOptional().openapi({ description: 'Movie title in Spanish' }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of movie story' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of movie story' }),
    yearFrom: z.int().exactOptional().openapi({ description: 'Starting year of movie story' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of movie story' }),
    usReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date the movie was first released in the United States' }),
  })
  .openapi({ description: 'Base movie, returned in search results', required: ['uid', 'title'] })
  .openapi('MovieBase')

const CharacterSpeciesSchema = z
  .object({
    uid: z.string().exactOptional().openapi({ description: 'Entity unique ID' }),
    name: z.string().exactOptional().openapi({ description: 'Species name' }),
    numerator: z.int().exactOptional().openapi({ description: 'Numerator' }),
    denominator: z.int().exactOptional().openapi({ description: 'Denominator' }),
  })
  .openapi({ description: 'Species a character belongs to', required: [] })
  .openapi('CharacterSpecies')

const CharacterRelationSchema = z
  .object({
    type: z.string().exactOptional().openapi({ description: 'Relation type' }),
    source: CharacterHeaderSchema.exactOptional(),
    target: CharacterHeaderSchema.exactOptional(),
  })
  .openapi({ description: 'Relation between characters', required: [] })
  .openapi('CharacterRelation')

const TitleBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Title unique ID' }),
    name: z.string().openapi({ description: 'Title name' }),
    militaryRank: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a military rank" }),
    fleetRank: z.boolean().exactOptional().openapi({ description: "Whether it's a fleet rank" }),
    religiousTitle: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a religious title" }),
    position: z.boolean().exactOptional().openapi({ description: "Whether it's a position" }),
    mirror: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this title is from mirror universe' }),
  })
  .openapi({ description: 'Base title, returned in search results', required: ['uid', 'name'] })
  .openapi('TitleBase')

const OccupationBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Occupation unique ID' }),
    name: z.string().openapi({ description: 'Occupation name' }),
    legalOccupation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a legal occupation" }),
    medicalOccupation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a medical occupation" }),
    scientificOccupation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a scientific occupation" }),
  })
  .openapi({
    description: 'Base occupations, returned in search results',
    required: ['uid', 'name'],
  })
  .openapi('OccupationBase')

const OrganizationBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Organization unique ID' }),
    name: z.string().openapi({ description: 'Organization name' }),
    government: z.boolean().exactOptional().openapi({ description: "Whether it's a government" }),
    intergovernmentalOrganization: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an intergovernmental organization" }),
    researchOrganization: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a research organization" }),
    sportOrganization: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a sport organization" }),
    medicalOrganization: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a medical organization" }),
    militaryOrganization: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a military organization" }),
    militaryUnit: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a military unit" }),
    governmentAgency: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a government agency" }),
    lawEnforcementAgency: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a law enforcement agency" }),
    prisonOrPenalColony: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a prison or penal colony" }),
    mirror: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this organization is from mirror universe' }),
    alternateReality: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this location is from alternate reality' }),
  })
  .openapi({
    description: 'Base organization, returned in search results',
    required: ['uid', 'name'],
  })
  .openapi('OrganizationBase')

const CharacterFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Character unique ID' }),
    name: z.string().openapi({ description: 'Character name' }),
    gender: GenderSchema.exactOptional(),
    yearOfBirth: z.int().exactOptional().openapi({ description: 'Year the character was born' }),
    monthOfBirth: z.int().exactOptional().openapi({ description: 'Month the character was born' }),
    dayOfBirth: z.int().exactOptional().openapi({ description: 'Day the character was born' }),
    placeOfBirth: z.string().exactOptional().openapi({ description: 'Place of birth' }),
    yearOfDeath: z.int().exactOptional().openapi({ description: 'Year the character died' }),
    monthOfDeath: z.int().exactOptional().openapi({ description: 'Month the character died' }),
    dayOfDeath: z.int().exactOptional().openapi({ description: 'Day the character died' }),
    placeOfDeath: z.string().exactOptional().openapi({ description: 'Place of death' }),
    height: z.int().exactOptional().openapi({ description: 'Height in centimeters' }),
    weight: z.int().exactOptional().openapi({ description: 'Weight in kilograms' }),
    deceased: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this character is deceased' }),
    bloodType: BloodTypeSchema.exactOptional(),
    maritalStatus: MaritalStatusSchema.exactOptional(),
    serialNumber: z.string().exactOptional().openapi({ description: 'Serial number' }),
    hologramActivationDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hologram activation date' }),
    hologramStatus: z.string().exactOptional().openapi({ description: 'Hologram status' }),
    hologramDateStatus: z.string().exactOptional().openapi({ description: 'Hologram date status' }),
    hologram: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this character is a hologram' }),
    fictionalCharacter: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this character is a fictional character (from universe point of view)',
      }),
    mirror: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this character is from mirror universe' }),
    alternateReality: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this character is from alternate reality' }),
    performers: z
      .array(PerformerBaseSchema)
      .exactOptional()
      .openapi({ description: 'Performers who played this character' }),
    episodes: z
      .array(EpisodeBaseSchema)
      .exactOptional()
      .openapi({ description: 'Episodes in which this character appeared' }),
    movies: z
      .array(MovieBaseSchema)
      .exactOptional()
      .openapi({ description: 'Movies in which this character appeared' }),
    characterSpecies: z
      .array(CharacterSpeciesSchema)
      .exactOptional()
      .openapi({ description: 'Species this character belongs to' }),
    characterRelations: z
      .array(CharacterRelationSchema)
      .exactOptional()
      .openapi({ description: 'Relations with other characters' }),
    titles: z
      .array(TitleBaseSchema)
      .exactOptional()
      .openapi({ description: 'Titles this character holds' }),
    occupations: z
      .array(OccupationBaseSchema)
      .exactOptional()
      .openapi({ description: 'Occupations of this character' }),
    organizations: z
      .array(OrganizationBaseSchema)
      .exactOptional()
      .openapi({ description: 'Organizations this character has affiliation with' }),
  })
  .openapi({
    description: 'Full character, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('CharacterFull')

const CharacterBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    characters: z
      .array(CharacterBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of characters matching given criteria' }),
  })
  .openapi({ description: 'Response object for characters search', required: [] })
  .openapi('CharacterBaseResponse')

const CharacterFullResponseSchema = z
  .object({ character: CharacterFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single character query', required: [] })
  .openapi('CharacterFullResponse')

const ComicsHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Comics unique ID' }),
    title: z.string().openapi({ description: 'Comics title' }),
  })
  .openapi({ description: 'Header comics, embedded in other objects', required: ['uid', 'title'] })
  .openapi('ComicsHeader')

const ComicsBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Comics unique ID' }),
    title: z.string().openapi({ description: 'Comics title' }),
    publishedYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year the comics was published' }),
    publishedMonth: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month the comics was published' }),
    publishedDay: z.int().exactOptional().openapi({ description: 'Day the comics was published' }),
    coverYear: z.int().exactOptional().openapi({ description: 'Cover publication year' }),
    coverMonth: z.int().exactOptional().openapi({ description: 'Cover publication month' }),
    coverDay: z.int().exactOptional().openapi({ description: 'Cover publication day' }),
    numberOfPages: z.int().exactOptional().openapi({ description: 'Number of pages' }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of comic story' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of comic story' }),
    yearFrom: z.int().exactOptional().openapi({ description: 'Starting year of comic story' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of comic story' }),
    photonovel: z.boolean().exactOptional().openapi({ description: "Whether it's a photonovel" }),
    adaptation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an adaptation of an episode or a movie" }),
  })
  .openapi({ description: 'Base comics, returned in search results', required: ['uid', 'title'] })
  .openapi('ComicsBase')

const ComicSeriesBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Comic series unique ID' }),
    title: z.string().openapi({ description: 'Comic series title' }),
    publishedYearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year from which the comic series was published' }),
    publishedMonthFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month from which the comic series was published' }),
    publishedDayFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day from which the comic series was published' }),
    publishedYearTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year to which the comic series was published' }),
    publishedMonthTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month to which the comic series was published' }),
    publishedDayTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day to which the comic series was published' }),
    numberOfIssues: z.int().exactOptional().openapi({ description: 'Number of issues' }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of comic series stories' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of comic series stories' }),
    yearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Starting year of comic series stories' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of comic series stories' }),
    miniseries: z.boolean().exactOptional().openapi({ description: "Whether it's a miniseries" }),
    photonovelSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a photonovel series" }),
  })
  .openapi({
    description: 'Base comic series, returned in search results',
    required: ['uid', 'title'],
  })
  .openapi('ComicSeriesBase')

const ComicCollectionBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Comic collection unique ID' }),
    title: z.string().openapi({ description: 'Comic collection title' }),
    publishedYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year the comic collection was published' }),
    publishedMonth: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month the comic collection was published' }),
    publishedDay: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day the comic collection was published' }),
    coverYear: z.int().exactOptional().openapi({ description: 'Cover publication year' }),
    coverMonth: z.int().exactOptional().openapi({ description: 'Cover publication month' }),
    coverDay: z.int().exactOptional().openapi({ description: 'Cover publication day' }),
    numberOfPages: z.int().exactOptional().openapi({ description: 'Number of pages' }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of comic collection stories' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of comic collection stories' }),
    yearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Starting year of comic collection stories' }),
    yearTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Ending year of comic collection stories' }),
    photonovel: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a photonovel collection" }),
  })
  .openapi({
    description: 'Base comic collection, returned in search results',
    required: ['uid', 'title'],
  })
  .openapi('ComicCollectionBase')

const ComicsFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Comics unique ID' }),
    title: z.string().openapi({ description: 'Comics title' }),
    publishedYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year the comics was published' }),
    publishedMonth: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month the comics was published' }),
    publishedDay: z.int().exactOptional().openapi({ description: 'Day the comics was published' }),
    coverYear: z.int().exactOptional().openapi({ description: 'Cover publication year' }),
    coverMonth: z.int().exactOptional().openapi({ description: 'Cover publication month' }),
    coverDay: z.int().exactOptional().openapi({ description: 'Cover publication day' }),
    numberOfPages: z.int().exactOptional().openapi({ description: 'Number of pages' }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of comic story' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of comic story' }),
    yearFrom: z.int().exactOptional().openapi({ description: 'Starting year of comic  story' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of comic story' }),
    photonovel: z.boolean().exactOptional().openapi({ description: "Whether it's a photonovel" }),
    adaptation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an adaptation of an episode or a movie" }),
    comicSeries: z
      .array(ComicSeriesBaseSchema)
      .exactOptional()
      .openapi({ description: 'Comic series this comics is included in' }),
    writers: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Writers involved in the comics' }),
    artists: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Artists involved in the comics' }),
    editors: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Editors involved in the comics' }),
    staff: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Other staff involved in the comics' }),
    publishers: z
      .array(CompanyBaseSchema)
      .exactOptional()
      .openapi({ description: 'Comics publishers' }),
    characters: z
      .array(CharacterBaseSchema)
      .exactOptional()
      .openapi({ description: 'Characters appearing in the comics' }),
    references: z.array(ReferenceSchema).exactOptional().openapi({ description: 'References' }),
    comicCollections: z
      .array(ComicCollectionBaseSchema)
      .exactOptional()
      .openapi({ description: 'Comic collections this comics is included in' }),
  })
  .openapi({
    description: 'Full comics, returned when queried using UID',
    required: ['uid', 'title'],
  })
  .openapi('ComicsFull')

const ComicsBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    comics: z
      .array(ComicsBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of comics matching given criteria' }),
  })
  .openapi({ description: 'Response object for comics search', required: [] })
  .openapi('ComicsBaseResponse')

const ComicsFullResponseSchema = z
  .object({ comics: ComicsFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single comics query', required: [] })
  .openapi('ComicsFullResponse')

const ComicCollectionHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Comic collection unique ID' }),
    title: z.string().openapi({ description: 'Comic collection title' }),
  })
  .openapi({
    description: 'Header comic collection, embedded in other objects',
    required: ['uid', 'title'],
  })
  .openapi('ComicCollectionHeader')

const ComicCollectionFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Comic collection unique ID' }),
    title: z.string().openapi({ description: 'Comic collection title' }),
    publishedYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year the comic collection was published' }),
    publishedMonth: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month the comic collection was published' }),
    publishedDay: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day the comic collection was published' }),
    coverYear: z.int().exactOptional().openapi({ description: 'Cover publication year' }),
    coverMonth: z.int().exactOptional().openapi({ description: 'Cover publication month' }),
    coverDay: z.int().exactOptional().openapi({ description: 'Cover publication day' }),
    numberOfPages: z.int().exactOptional().openapi({ description: 'Number of pages' }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of comic collection stories' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of comic collection stories' }),
    yearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Starting year of comic collection stories' }),
    yearTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Ending year of comic collection stories' }),
    photonovel: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a photonovel collection" }),
    comicSeries: z
      .array(ComicSeriesBaseSchema)
      .exactOptional()
      .openapi({ description: 'Comic series this comic collection is included in' }),
    writers: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Writers involved in the comic collection' }),
    artists: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Artists involved in the comic collection' }),
    editors: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Editors involved in the comic collection' }),
    staff: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Other staff involved in the comic collection' }),
    publishers: z
      .array(CompanyBaseSchema)
      .exactOptional()
      .openapi({ description: 'Comic collection publishers' }),
    characters: z
      .array(CharacterBaseSchema)
      .exactOptional()
      .openapi({ description: 'Characters appearing in the comic collection' }),
    references: z.array(ReferenceSchema).exactOptional().openapi({ description: 'References' }),
    comics: z
      .array(ComicsBaseSchema)
      .exactOptional()
      .openapi({ description: 'Comics included in this comic collection' }),
  })
  .openapi({
    description: 'Full comic collection, returned when queried using UID',
    required: ['uid', 'title'],
  })
  .openapi('ComicCollectionFull')

const ComicCollectionBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    comicCollections: z
      .array(ComicCollectionBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of comic collections matching given criteria' }),
  })
  .openapi({ description: 'Response object for comic collections search', required: [] })
  .openapi('ComicCollectionBaseResponse')

const ComicCollectionFullResponseSchema = z
  .object({ comicCollection: ComicCollectionFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single comic collection query', required: [] })
  .openapi('ComicCollectionFullResponse')

const ComicSeriesHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Comic series unique ID' }),
    title: z.string().openapi({ description: 'Comic series title' }),
  })
  .openapi({
    description: 'Header book series, embedded in other objects',
    required: ['uid', 'title'],
  })
  .openapi('ComicSeriesHeader')

const ComicSeriesFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Comic series unique ID' }),
    title: z.string().openapi({ description: 'Comic series title' }),
    publishedYearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year from which the comic series was published' }),
    publishedMonthFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month from which the comic series was published' }),
    publishedDayFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day from which the comic series was published' }),
    publishedYearTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year to which the comic series was published' }),
    publishedMonthTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month to which the comic series was published' }),
    publishedDayTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day to which the comic series was published' }),
    numberOfIssues: z.int().exactOptional().openapi({ description: 'Number of issues' }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of comic series stories' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of comic series stories' }),
    yearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Starting year of comic series stories' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of comic series stories' }),
    miniseries: z.boolean().exactOptional().openapi({ description: "Whether it's a miniseries" }),
    photonovelSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a photonovel series" }),
    parentSeries: z
      .array(ComicSeriesBaseSchema)
      .exactOptional()
      .openapi({ description: 'Comic series this comic series is included in' }),
    childSeries: z
      .array(ComicSeriesBaseSchema)
      .exactOptional()
      .openapi({ description: 'Child comic series included in this comic series' }),
    publishers: z
      .array(CompanyBaseSchema)
      .exactOptional()
      .openapi({ description: 'Companies that published this comic series' }),
    comics: z
      .array(ComicsBaseSchema)
      .exactOptional()
      .openapi({ description: 'Comics included in this comic series' }),
  })
  .openapi({
    description: 'Full comic series, returned when queried using UID',
    required: ['uid', 'title'],
  })
  .openapi('ComicSeriesFull')

const ComicSeriesBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    comicSeries: z
      .array(ComicSeriesBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of comic series matching given criteria' }),
  })
  .openapi({ description: 'Response object for comic series search', required: [] })
  .openapi('ComicSeriesBaseResponse')

const ComicSeriesFullResponseSchema = z
  .object({ comicSeries: ComicSeriesFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single comic series query', required: [] })
  .openapi('ComicSeriesFullResponse')

const ComicStripHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Comic strip unique ID' }),
    title: z.string().openapi({ description: 'Comic strip title' }),
  })
  .openapi({
    description: 'Header comic strip, embedded in other objects',
    required: ['uid', 'title'],
  })
  .openapi('ComicStripHeader')

const ComicStripBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Comic strip unique ID' }),
    title: z.string().openapi({ description: 'Comic strip title' }),
    periodical: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the periodical the comic strip was published in' }),
    publishedYearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year from which the comic strip was published' }),
    publishedMonthFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month from which the comic strip was published' }),
    publishedDayFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day from which the comic strip was published' }),
    publishedYearTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year to which the comic strip was published' }),
    publishedMonthTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month to which the comic strip was published' }),
    publishedDayTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day to which the comic strip was published' }),
    numberOfPages: z.int().exactOptional().openapi({ description: 'Number of pages' }),
    yearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Starting year of comic strip story' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of comic strip story' }),
  })
  .openapi({
    description: 'Base comic strip, returned in search results',
    required: ['uid', 'title'],
  })
  .openapi('ComicStripBase')

const ComicStripFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Comic strip unique ID' }),
    title: z.string().openapi({ description: 'Comic strip title' }),
    periodical: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the periodical the comic strip was published in' }),
    publishedYearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year from which the comic strip was published' }),
    publishedMonthFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month from which the comic strip was published' }),
    publishedDayFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day from which the comic strip was published' }),
    publishedYearTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year to which the comic strip was published' }),
    publishedMonthTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month to which the comic strip was published' }),
    publishedDayTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day to which the comic strip was published' }),
    numberOfPages: z.int().exactOptional().openapi({ description: 'Number of pages' }),
    yearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Starting year of comic strip stories' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of comic strip stories' }),
    comicSeries: z
      .array(ComicSeriesBaseSchema)
      .exactOptional()
      .openapi({ description: 'Comic series this comic strip is included in' }),
    writers: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Writers involved in the comic strip' }),
    artists: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Artists involved in the comic strip' }),
    characters: z
      .array(CharacterBaseSchema)
      .exactOptional()
      .openapi({ description: 'Characters appearing in the comic strip' }),
  })
  .openapi({
    description: 'Full comic strip, returned when queried using UID',
    required: ['uid', 'title'],
  })
  .openapi('ComicStripFull')

const ComicStripBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    comicStrips: z
      .array(ComicStripBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of comic strips matching given criteria' }),
  })
  .openapi({ description: 'Response object for comic strip search', required: [] })
  .openapi('ComicStripBaseResponse')

const ComicStripFullResponseSchema = z
  .object({ comicStrip: ComicStripFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single comic strip query', required: [] })
  .openapi('ComicStripFullResponse')

const CompanyFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Company unique ID' }),
    name: z.string().openapi({ description: 'Company name' }),
    broadcaster: z.boolean().exactOptional().openapi({ description: "Whether it's a broadcaster" }),
    collectibleCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a collectible company" }),
    conglomerate: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a conglomerate" }),
    digitalVisualEffectsCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a digital visual effects company" }),
    distributor: z.boolean().exactOptional().openapi({ description: "Whether it's a distributor" }),
    gameCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a game company" }),
    filmEquipmentCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a film equipment company" }),
    makeUpEffectsStudio: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a make-up effects studio" }),
    mattePaintingCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a matte painting company" }),
    modelAndMiniatureEffectsCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a model and miniature effects company" }),
    postProductionCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a post-production company" }),
    productionCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a production company" }),
    propCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a prop company" }),
    recordLabel: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a record label" }),
    specialEffectsCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a special effects company" }),
    tvAndFilmProductionCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a TV and film production company" }),
    videoGameCompany: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a video game company" }),
  })
  .openapi({
    description: 'Full company, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('CompanyFull')

const CompanyHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Company unique ID' }),
    name: z.string().openapi({ description: 'Company title' }),
  })
  .openapi({ description: 'Header company, embedded in other objects', required: ['uid', 'name'] })
  .openapi('CompanyHeader')

const CompanyBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    companies: z
      .array(CompanyBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of companies matching given criteria' }),
  })
  .openapi({ description: 'Response object for companies search', required: [] })
  .openapi('CompanyBaseResponse')

const CompanyFullResponseSchema = z
  .object({ company: CompanyFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single company query', required: [] })
  .openapi('CompanyFullResponse')

const ConflictBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Conflict unique ID' }),
    name: z.string().openapi({ description: 'Conflict name' }),
    yearFrom: z.int().exactOptional().openapi({ description: 'Starting year of the conflict' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of the conflict' }),
    earthConflict: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether it was an Earth conflict' }),
    federationWar: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this conflict is part of war involving Federation' }),
    klingonWar: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this conflict is part of war involving the Klingons' }),
    dominionWarBattle: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this conflict is a Dominion war battle' }),
    alternateReality: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this conflict is from alternate reality' }),
  })
  .openapi({ description: 'Base conflict, returned in search results', required: ['uid', 'name'] })
  .openapi('ConflictBase')

const LocationBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Location unique ID' }),
    name: z.string().openapi({ description: 'Location name' }),
    earthlyLocation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an earthly location" }),
    fictionalLocation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a fictional location" }),
    religiousLocation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a religious location" }),
    geographicalLocation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a geographical location" }),
    bodyOfWater: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a body of water" }),
    country: z.boolean().exactOptional().openapi({ description: "Whether it's a country" }),
    subnationalEntity: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a subnational entity" }),
    settlement: z.boolean().exactOptional().openapi({ description: "Whether it's a settlement" }),
    usSettlement: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a US settlement" }),
    bajoranSettlement: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a Bajoran settlement" }),
    colony: z.boolean().exactOptional().openapi({ description: "Whether it's a colony" }),
    landform: z.boolean().exactOptional().openapi({ description: "Whether it's a landform" }),
    landmark: z.boolean().exactOptional().openapi({ description: "Whether it's a landmark" }),
    road: z.boolean().exactOptional().openapi({ description: "Whether it's a road" }),
    structure: z.boolean().exactOptional().openapi({ description: "Whether it's a structure" }),
    shipyard: z.boolean().exactOptional().openapi({ description: "Whether it's a shipyard" }),
    buildingInterior: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a building interior" }),
    establishment: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a establishment" }),
    medicalEstablishment: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a medical establishment" }),
    ds9Establishment: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a DS9 establishment" }),
    school: z.boolean().exactOptional().openapi({ description: "Whether it's a school" }),
    mirror: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this location is from mirror universe' }),
    alternateReality: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this location is from alternate reality' }),
  })
  .openapi({ description: 'Base location, returned in search results', required: ['uid', 'name'] })
  .openapi('LocationBase')

const ConflictFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Conflict unique ID' }),
    name: z.string().openapi({ description: 'Conflict name' }),
    yearFrom: z.int().exactOptional().openapi({ description: 'Starting year of the conflict' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of the conflict' }),
    earthConflict: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether it is an Earth conflict' }),
    federationWar: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this conflict is a part of war involving Federation' }),
    klingonWar: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this conflict is a part of war involving the Klingons' }),
    dominionWarBattle: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this conflict is a Dominion war battle' }),
    alternateReality: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this conflict is from alternate reality' }),
    locations: z
      .array(LocationBaseSchema)
      .exactOptional()
      .openapi({ description: 'Locations this conflict occurred at' }),
    firstSideBelligerents: z
      .array(OrganizationBaseSchema)
      .exactOptional()
      .openapi({ description: 'Organization involved in conflict on first side' }),
    firstSideCommanders: z
      .array(CharacterBaseSchema)
      .exactOptional()
      .openapi({ description: 'Commanders involved in conflict on first side' }),
    secondSideBelligerents: z
      .array(OrganizationBaseSchema)
      .exactOptional()
      .openapi({ description: 'Organization involved in conflict on second side' }),
    secondSideCommanders: z
      .array(CharacterBaseSchema)
      .exactOptional()
      .openapi({ description: 'Commanders involved in conflict on second side' }),
  })
  .openapi({ description: 'Base conflict, returned in search results', required: ['uid', 'name'] })
  .openapi('ConflictFull')

const ConflictHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Conflict unique ID' }),
    name: z.string().openapi({ description: 'Conflict name' }),
  })
  .openapi({ description: 'Header conflict, embedded in other objects', required: ['uid', 'name'] })
  .openapi('ConflictHeader')

const ConflictBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    conflicts: z
      .array(ConflictBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of conflicts matching given criteria' }),
  })
  .openapi({ description: 'Response object for conflicts search', required: [] })
  .openapi('ConflictBaseResponse')

const ConflictFullResponseSchema = z
  .object({ conflict: ConflictFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single conflict query', required: [] })
  .openapi('ConflictFullResponse')

const ContentLanguageSchema = z
  .object({
    uid: z.string().exactOptional().openapi({ description: 'Language unique ID' }),
    name: z.string().exactOptional().openapi({ description: 'Language name' }),
    iso6391Code: z.string().exactOptional().openapi({ description: 'ISO 639-1 code' }),
  })
  .openapi({ description: 'Rating of video release, etc.', required: [] })
  .openapi('ContentLanguage')

const ContentRatingSystemSchema = z
  .enum([
    'BBFC',
    'OFLC',
    'OFLCNZ',
    'DJCTQ',
    'MDA',
    'MPAA',
    'CHVRS',
    'RCQ',
    'IFCO',
    'FSK',
    'NICAM',
    'MCCYP',
    'EIRIN',
    'HK',
    'CBFC',
    'NMHH',
    'VRC',
    'RSAC',
    'ESRB',
    'ELSPA',
    'PEGI',
    'USK',
    'SELL',
    'ADESE',
    'GSRR',
    'ITUNES',
  ])
  .openapi({ description: 'Content rating system' })
  .openapi('ContentRatingSystem')

const ContentRatingSchema = z
  .object({
    uid: z.string().exactOptional().openapi({ description: 'Rating unique ID' }),
    contentRatingSystem: ContentRatingSystemSchema.exactOptional(),
    rating: z
      .string()
      .exactOptional()
      .openapi({ description: 'Rating within specified content rating system' }),
  })
  .openapi({ description: 'Rating of video release, etc.', required: [] })
  .openapi('ContentRating')

const CountrySchema = z
  .object({
    uid: z.string().exactOptional().openapi({ description: 'Country unique ID' }),
    name: z.string().exactOptional().openapi({ description: 'Country name' }),
    iso31661Alpha2Code: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISO 3166-1 alpha-2 code' }),
  })
  .openapi({ description: 'Real-world country', required: [] })
  .openapi('Country')

const ElementHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Element unique ID' }),
    name: z.string().openapi({ description: 'Element name' }),
  })
  .openapi({ description: 'Header element, embedded in other objects', required: ['uid', 'name'] })
  .openapi('ElementHeader')

const ElementBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Element unique ID' }),
    name: z.string().openapi({ description: 'Element name' }),
    symbol: z.string().exactOptional().openapi({ description: 'Element symbol' }),
    atomicNumber: z.int().exactOptional().openapi({ description: 'Element atomic number' }),
    atomicWeight: z.int().exactOptional().openapi({ description: 'Element atomic weight' }),
    transuranium: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a transuranium" }),
    gammaSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether it belongs to Gamma series' }),
    hypersonicSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether it belongs to Hypersonic series' }),
    megaSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether it belongs to Mega series' }),
    omegaSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether it belongs to Omega series' }),
    transonicSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether it belongs to Transonic series' }),
    worldSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether it belongs to World series' }),
  })
  .openapi({ description: 'Base element, returned in search results', required: ['uid', 'name'] })
  .openapi('ElementBase')

const ElementFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Element unique ID' }),
    name: z.string().openapi({ description: 'Element name' }),
    symbol: z.string().exactOptional().openapi({ description: 'Element symbol' }),
    atomicNumber: z.int().exactOptional().openapi({ description: 'Element atomic number' }),
    atomicWeight: z.int().exactOptional().openapi({ description: 'Element atomic weight' }),
    transuranium: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a transuranium" }),
    gammaSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether it belongs to Gamma series' }),
    hypersonicSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether it belongs to Hypersonic series' }),
    megaSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether it belongs to Mega series' }),
    omegaSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether it belongs to Omega series' }),
    transonicSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether it belongs to Transonic series' }),
    worldSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether it belongs to World series' }),
  })
  .openapi({
    description: 'Full element, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('ElementFull')

const ElementBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    elements: z
      .array(ElementBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of elements matching given criteria' }),
  })
  .openapi({ description: 'Response object for elements search', required: [] })
  .openapi('ElementBaseResponse')

const ElementFullResponseSchema = z
  .object({ element: ElementFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single element query', required: [] })
  .openapi('ElementFullResponse')

const EpisodeHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Episode unique ID' }),
    title: z.string().openapi({ description: 'Episode title' }),
  })
  .openapi({ description: 'Header episode, embedded in other objects', required: ['uid', 'title'] })
  .openapi('EpisodeHeader')

const SeriesBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Series unique ID' }),
    title: z.string().openapi({ description: 'Series title' }),
    abbreviation: z.string().openapi({ description: 'Series abbreviation' }),
    productionStartYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year the series production started' }),
    productionEndYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year the series production ended' }),
    originalRunStartDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date the series originally ran from' }),
    originalRunEndDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date the series originally ran to' }),
    seasonsCount: z.int().exactOptional().openapi({ description: 'Number of seasons' }),
    episodesCount: z.int().exactOptional().openapi({ description: 'Number of episodes' }),
    featureLengthEpisodesCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of feature length episodes' }),
    productionCompany: CompanyHeaderSchema.exactOptional(),
    originalBroadcaster: CompanyHeaderSchema.exactOptional(),
  })
  .openapi({
    description: 'Base series, returned in search results',
    required: ['uid', 'title', 'abbreviation'],
  })
  .openapi('SeriesBase')

const SeasonBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Season unique ID' }),
    title: z.string().openapi({ description: 'Season title' }),
    series: SeriesHeaderSchema.exactOptional(),
    seasonNumber: z.int().exactOptional().openapi({ description: 'Season number in series' }),
    numberOfEpisodes: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of episodes in this season' }),
  })
  .openapi({ description: 'Base season, returned in search results', required: ['uid', 'title'] })
  .openapi('SeasonBase')

const EpisodeFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Episode unique ID' }),
    title: z.string().openapi({ description: 'Episode title' }),
    titleGerman: z.string().exactOptional().openapi({ description: 'Episode title in German' }),
    titleItalian: z.string().exactOptional().openapi({ description: 'Episode title in Italian' }),
    titleJapanese: z.string().exactOptional().openapi({ description: 'Episode title in Japanese' }),
    series: SeriesBaseSchema.exactOptional(),
    season: SeasonBaseSchema.exactOptional(),
    seasonNumber: z.int().exactOptional().openapi({ description: 'Season number' }),
    episodeNumber: z.int().exactOptional().openapi({ description: 'Episode number in season' }),
    productionSerialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Production serial number' }),
    featureLength: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a feature length episode" }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of episode story' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of episode story' }),
    yearFrom: z.int().exactOptional().openapi({ description: 'Starting year of episode story' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of episode story' }),
    usAirDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date the episode was first aired in the United States' }),
    finalScriptDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date the episode script was completed' }),
    writers: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Writers involved in the episode' }),
    teleplayAuthors: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Teleplay authors involved in the episode' }),
    storyAuthors: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Story authors involved in the episode' }),
    directors: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Directors authors involved in the episode' }),
    performers: z
      .array(PerformerBaseSchema)
      .exactOptional()
      .openapi({ description: 'Performers appearing in the episode' }),
    stuntPerformers: z
      .array(PerformerBaseSchema)
      .exactOptional()
      .openapi({ description: 'Stunt performers appearing in the episode' }),
    standInPerformers: z
      .array(PerformerBaseSchema)
      .exactOptional()
      .openapi({ description: 'Stand-in performers appearing in the episode' }),
    characters: z
      .array(CharacterBaseSchema)
      .exactOptional()
      .openapi({ description: 'Characters appearing in the episode' }),
  })
  .openapi({
    description: 'Full episode, returned when queried using UID',
    required: ['uid', 'title'],
  })
  .openapi('EpisodeFull')

const EpisodeBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    episodes: z
      .array(EpisodeBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of episodes matching given criteria' }),
  })
  .openapi({ description: 'Response object for episodes search', required: [] })
  .openapi('EpisodeBaseResponse')

const EpisodeFullResponseSchema = z
  .object({ episode: EpisodeFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single episode query', required: [] })
  .openapi('EpisodeFullResponse')

const ErrorSchema = z
  .object({
    code: z.string().exactOptional().openapi({ description: 'Error code' }),
    message: z.string().exactOptional().openapi({ description: 'Error message' }),
  })
  .openapi({ description: 'Error object', required: [] })
  .openapi('Error')

const FoodHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Food unique ID' }),
    name: z.string().openapi({ description: 'Food name' }),
  })
  .openapi({ description: 'Header food, embedded in other objects', required: ['uid', 'name'] })
  .openapi('FoodHeader')

const FoodBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Food unique ID' }),
    name: z.string().openapi({ description: 'Food name' }),
    earthlyOrigin: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's of earthly origin" }),
    dessert: z.boolean().exactOptional().openapi({ description: "Whether it's a dessert" }),
    fruit: z.boolean().exactOptional().openapi({ description: "Whether it's a fruit" }),
    herbOrSpice: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a herb or a spice" }),
    sauce: z.boolean().exactOptional().openapi({ description: "Whether it's a sauce" }),
    soup: z.boolean().exactOptional().openapi({ description: "Whether it's a soup" }),
    beverage: z.boolean().exactOptional().openapi({ description: "Whether it's a beverage" }),
    alcoholicBeverage: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an alcoholic beverage" }),
    juice: z.boolean().exactOptional().openapi({ description: "Whether it's a juice" }),
    tea: z.boolean().exactOptional().openapi({ description: "Whether it's a tea" }),
  })
  .openapi({ description: 'Base food, returned in search results', required: ['uid', 'name'] })
  .openapi('FoodBase')

const FoodFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Food unique ID' }),
    name: z.string().openapi({ description: 'Food name' }),
    earthlyOrigin: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's of earthly origin" }),
    dessert: z.boolean().exactOptional().openapi({ description: "Whether it's a dessert" }),
    fruit: z.boolean().exactOptional().openapi({ description: "Whether it's a fruit" }),
    herbOrSpice: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an herb or a spice" }),
    sauce: z.boolean().exactOptional().openapi({ description: "Whether it's a sauce" }),
    soup: z.boolean().exactOptional().openapi({ description: "Whether it's a soup" }),
    beverage: z.boolean().exactOptional().openapi({ description: "Whether it's a beverage" }),
    alcoholicBeverage: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an alcoholic beverage" }),
    juice: z.boolean().exactOptional().openapi({ description: "Whether it's a juice" }),
    tea: z.boolean().exactOptional().openapi({ description: "Whether it's a tea" }),
  })
  .openapi({ description: 'Full food, returned when queried using UID', required: ['uid', 'name'] })
  .openapi('FoodFull')

const FoodBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    foods: z
      .array(FoodBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of foods matching given criteria' }),
  })
  .openapi({ description: 'Response object for foods search', required: [] })
  .openapi('FoodBaseResponse')

const FoodFullResponseSchema = z
  .object({ food: FoodFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single food query', required: [] })
  .openapi('FoodFullResponse')

const GenreSchema = z
  .object({
    uid: z.string().exactOptional().openapi({ description: 'Genre unique ID' }),
    name: z.string().exactOptional().openapi({ description: 'Genre name' }),
  })
  .openapi({ description: 'Genre of video games', required: [] })
  .openapi('Genre')

const LiteratureHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Literature unique ID' }),
    title: z.string().openapi({ description: 'Literature title' }),
  })
  .openapi({
    description: 'Header literature, embedded in other objects',
    required: ['uid', 'title'],
  })
  .openapi('LiteratureHeader')

const LiteratureBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Literature unique ID' }),
    title: z.string().openapi({ description: 'Literature title' }),
    earthlyOrigin: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's of earthly origin" }),
    shakespeareanWork: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a Shakespearean work" }),
    report: z.boolean().exactOptional().openapi({ description: "Whether it's a report" }),
    scientificLiterature: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a scientific literature" }),
    technicalManual: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a technical manual" }),
    religiousLiterature: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a religious literature" }),
  })
  .openapi({
    description: 'Base literature, returned in search results',
    required: ['uid', 'title'],
  })
  .openapi('LiteratureBase')

const LiteratureFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Literature unique ID' }),
    title: z.string().openapi({ description: 'Literature title' }),
    earthlyOrigin: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's of earthly origin" }),
    shakespeareanWork: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a Shakespearean work" }),
    report: z.boolean().exactOptional().openapi({ description: "Whether it's a report" }),
    scientificLiterature: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a scientific literature" }),
    technicalManual: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a technical manual" }),
    religiousLiterature: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a religious literature" }),
  })
  .openapi({
    description: 'Full literature, returned when queried using UID',
    required: ['uid', 'title'],
  })
  .openapi('LiteratureFull')

const LiteratureBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    literature: z
      .array(LiteratureBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of literature matching given criteria' }),
  })
  .openapi({ description: 'Response object for literature search', required: [] })
  .openapi('LiteratureBaseResponse')

const LiteratureFullResponseSchema = z
  .object({ literature: LiteratureFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single literature query', required: [] })
  .openapi('LiteratureFullResponse')

const LocationHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Location unique ID' }),
    name: z.string().openapi({ description: 'Location name' }),
  })
  .openapi({ description: 'Header location, embedded in other objects', required: ['uid', 'name'] })
  .openapi('LocationHeader')

const LocationFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Location unique ID' }),
    name: z.string().openapi({ description: 'Location name' }),
    earthlyLocation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an earthly location" }),
    fictionalLocation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a fictional location" }),
    religiousLocation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a religious location" }),
    geographicalLocation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a geographical location" }),
    bodyOfWater: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a body of water" }),
    country: z.boolean().exactOptional().openapi({ description: "Whether it's a country" }),
    subnationalEntity: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a subnational entity" }),
    settlement: z.boolean().exactOptional().openapi({ description: "Whether it's a settlement" }),
    usSettlement: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a US settlement" }),
    bajoranSettlement: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a Bajoran settlement" }),
    colony: z.boolean().exactOptional().openapi({ description: "Whether it's a colony" }),
    landform: z.boolean().exactOptional().openapi({ description: "Whether it's a landform" }),
    landmark: z.boolean().exactOptional().openapi({ description: "Whether it's a landmark" }),
    road: z.boolean().exactOptional().openapi({ description: "Whether it's a road" }),
    structure: z.boolean().exactOptional().openapi({ description: "Whether it's a structure" }),
    shipyard: z.boolean().exactOptional().openapi({ description: "Whether it's a shipyard" }),
    buildingInterior: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a building interior" }),
    establishment: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a establishment" }),
    medicalEstablishment: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a medical establishment" }),
    ds9Establishment: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a DS9 establishment" }),
    school: z.boolean().exactOptional().openapi({ description: "Whether it's a school" }),
    mirror: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this location is from mirror universe' }),
    alternateReality: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this location is from alternate reality' }),
  })
  .openapi({
    description: 'Full location, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('LocationFull')

const LocationBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    locations: z
      .array(LocationBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of locations matching given criteria' }),
  })
  .openapi({ description: 'Response object for locations search', required: [] })
  .openapi('LocationBaseResponse')

const LocationFullResponseSchema = z
  .object({ location: LocationFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single location query', required: [] })
  .openapi('LocationFullResponse')

const MagazineHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Magazine unique ID' }),
    title: z.string().openapi({ description: 'Magazine title' }),
  })
  .openapi({
    description: 'Header magazine, embedded in other objects',
    required: ['uid', 'title'],
  })
  .openapi('MagazineHeader')

const MagazineBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Magazine unique ID' }),
    title: z.string().openapi({ description: 'Magazine title' }),
    publishedYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year the magazine was published' }),
    publishedMonth: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month the magazine was published' }),
    publishedDay: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day the magazine was published' }),
    coverYear: z.int().exactOptional().openapi({ description: 'Cover publication year' }),
    coverMonth: z.int().exactOptional().openapi({ description: 'Cover publication month' }),
    coverDay: z.int().exactOptional().openapi({ description: 'Cover publication day' }),
    numberOfPages: z.int().exactOptional().openapi({ description: 'Number of pages' }),
    issueNumber: z.string().exactOptional().openapi({ description: 'Magazine issue number' }),
  })
  .openapi({ description: 'Base magazine, returned in search results', required: ['uid', 'title'] })
  .openapi('MagazineBase')

const MagazineSeriesBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Magazine series unique ID' }),
    title: z.string().openapi({ description: 'Magazine series title' }),
    publishedYearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year from which the magazine series was published' }),
    publishedMonthFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month from which the magazine series was published' }),
    publishedYearTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year to which the magazine series was published' }),
    publishedMonthTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month to which the magazine series was published' }),
    numberOfIssues: z.int().exactOptional().openapi({ description: 'Number of issues' }),
  })
  .openapi({
    description: 'Base magazine series, returned in search results',
    required: ['uid', 'title'],
  })
  .openapi('MagazineSeriesBase')

const MagazineFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Magazine unique ID' }),
    title: z.string().openapi({ description: 'Magazine title' }),
    publishedYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year the magazine was published' }),
    publishedMonth: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month the magazine was published' }),
    publishedDay: z
      .int()
      .exactOptional()
      .openapi({ description: 'Day the magazine was published' }),
    coverYear: z.int().exactOptional().openapi({ description: 'Cover publication year' }),
    coverMonth: z.int().exactOptional().openapi({ description: 'Cover publication month' }),
    coverDay: z.int().exactOptional().openapi({ description: 'Cover publication day' }),
    numberOfPages: z.int().exactOptional().openapi({ description: 'Number of pages' }),
    issueNumber: z.string().exactOptional().openapi({ description: 'Magazine issue number' }),
    magazineSeries: z
      .array(MagazineSeriesBaseSchema)
      .exactOptional()
      .openapi({ description: 'Magazine series this magazine is included in' }),
    editors: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Editors involved in the magazine' }),
    publishers: z
      .array(CompanyBaseSchema)
      .exactOptional()
      .openapi({ description: 'Magazine publishers' }),
  })
  .openapi({
    description: 'Full magazine, returned when queried using UID',
    required: ['uid', 'title'],
  })
  .openapi('MagazineFull')

const MagazineBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    magazines: z
      .array(MagazineBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of magazines matching given criteria' }),
  })
  .openapi({ description: 'Response object for magazine search', required: [] })
  .openapi('MagazineBaseResponse')

const MagazineFullResponseSchema = z
  .object({ magazine: MagazineFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single magazine query', required: [] })
  .openapi('MagazineFullResponse')

const MagazineSeriesHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Magazine series unique ID' }),
    title: z.string().openapi({ description: 'Magazine series title' }),
  })
  .openapi({
    description: 'Header book series, embedded in other objects',
    required: ['uid', 'title'],
  })
  .openapi('MagazineSeriesHeader')

const MagazineSeriesFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Magazine series unique ID' }),
    title: z.string().openapi({ description: 'Magazine series title' }),
    publishedYearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year from which the magazine series was published' }),
    publishedMonthFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month from which the magazine series was published' }),
    publishedYearTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year to which the magazine series was published' }),
    publishedMonthTo: z
      .int()
      .exactOptional()
      .openapi({ description: 'Month to which the magazine series was published' }),
    numberOfIssues: z.int().exactOptional().openapi({ description: 'Number of issues' }),
    publishers: z
      .array(CompanyBaseSchema)
      .exactOptional()
      .openapi({ description: 'Companies that published this magazine series' }),
    editors: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Editors involved in the magazine series' }),
    magazines: z
      .array(MagazineBaseSchema)
      .exactOptional()
      .openapi({ description: 'Magazines included in this magazine series' }),
  })
  .openapi({
    description: 'Full magazine series, returned when queried using UID',
    required: ['uid', 'title'],
  })
  .openapi('MagazineSeriesFull')

const MagazineSeriesBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    magazineSeries: z
      .array(MagazineSeriesBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of magazine series matching given criteria' }),
  })
  .openapi({ description: 'Response object for magazine series search', required: [] })
  .openapi('MagazineSeriesBaseResponse')

const MagazineSeriesFullResponseSchema = z
  .object({ magazineSeries: MagazineSeriesFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single magazine series query', required: [] })
  .openapi('MagazineSeriesFullResponse')

const MaterialHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Material unique ID' }),
    name: z.string().openapi({ description: 'Material name' }),
  })
  .openapi({ description: 'Header material, embedded in other objects', required: ['uid', 'name'] })
  .openapi('MaterialHeader')

const MaterialBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Material unique ID' }),
    name: z.string().openapi({ description: 'Material name' }),
    chemicalCompound: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a chemical compound" }),
    biochemicalCompound: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a biochemical compound" }),
    drug: z.boolean().exactOptional().openapi({ description: "Whether it's a drug" }),
    poisonousSubstance: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a poisonous substance" }),
    explosive: z.boolean().exactOptional().openapi({ description: "Whether it's an explosive" }),
    gemstone: z.boolean().exactOptional().openapi({ description: "Whether it's a gemstone" }),
    alloyOrComposite: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an alloy or a composite" }),
    fuel: z.boolean().exactOptional().openapi({ description: "Whether it's a fuel" }),
    mineral: z.boolean().exactOptional().openapi({ description: "Whether it's a mineral" }),
    preciousMaterial: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a precious material" }),
  })
  .openapi({ description: 'Base material, returned in search results', required: ['uid', 'name'] })
  .openapi('MaterialBase')

const MaterialFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Material unique ID' }),
    name: z.string().openapi({ description: 'Material name' }),
    chemicalCompound: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a chemical compound" }),
    biochemicalCompound: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a biochemical compound" }),
    drug: z.boolean().exactOptional().openapi({ description: "Whether it's a drug" }),
    poisonousSubstance: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a poisonous substance" }),
    explosive: z.boolean().exactOptional().openapi({ description: "Whether it's an explosive" }),
    gemstone: z.boolean().exactOptional().openapi({ description: "Whether it's a gemstone" }),
    alloyOrComposite: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an alloy or a composite" }),
    fuel: z.boolean().exactOptional().openapi({ description: "Whether it's a fuel" }),
    mineral: z.boolean().exactOptional().openapi({ description: "Whether it's a mineral" }),
    preciousMaterial: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a precious material" }),
  })
  .openapi({
    description: 'Full material, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('MaterialFull')

const MaterialBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    materials: z
      .array(MaterialBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of materials matching given criteria' }),
  })
  .openapi({ description: 'Response object for materials search', required: [] })
  .openapi('MaterialBaseResponse')

const MaterialFullResponseSchema = z
  .object({ material: MaterialFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single material query', required: [] })
  .openapi('MaterialFullResponse')

const MedicalConditionHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Medical condition unique ID' }),
    name: z.string().openapi({ description: 'Medical condition name' }),
  })
  .openapi({
    description: 'Header medical condition, embedded in other objects',
    required: ['uid', 'name'],
  })
  .openapi('MedicalConditionHeader')

const MedicalConditionBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Medical condition unique ID' }),
    name: z.string().openapi({ description: 'Medical condition name' }),
    psychologicalCondition: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a psychological condition" }),
  })
  .openapi({
    description: 'Base medical condition, returned in search results',
    required: ['uid', 'name'],
  })
  .openapi('MedicalConditionBase')

const MedicalConditionFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Medical condition unique ID' }),
    name: z.string().openapi({ description: 'Medical condition name' }),
    psychologicalCondition: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a psychological condition" }),
  })
  .openapi({
    description: 'Full medical condition, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('MedicalConditionFull')

const MedicalConditionBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    medicalConditions: z
      .array(MedicalConditionBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of medical conditions matching given criteria' }),
  })
  .openapi({ description: 'Response object for medical conditions search', required: [] })
  .openapi('MedicalConditionBaseResponse')

const MedicalConditionFullResponseSchema = z
  .object({ medicalCondition: MedicalConditionFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single medical condition query', required: [] })
  .openapi('MedicalConditionFullResponse')

const MovieHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Movie unique ID' }),
    title: z.string().openapi({ description: 'Movie title' }),
  })
  .openapi({ description: 'Header movie, embedded in other objects', required: ['uid', 'title'] })
  .openapi('MovieHeader')

const MovieFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Movie unique ID' }),
    title: z.string().openapi({ description: 'Movie title' }),
    mainDirector: StaffBaseSchema.exactOptional(),
    titleBulgarian: z.string().exactOptional().openapi({ description: 'Movie title in Bulgarian' }),
    titleCatalan: z.string().exactOptional().openapi({ description: 'Movie title in Catalan' }),
    titleChineseTraditional: z
      .string()
      .exactOptional()
      .openapi({ description: 'Movie title in Chinese traditional' }),
    titleGerman: z.string().exactOptional().openapi({ description: 'Movie title in German' }),
    titleItalian: z.string().exactOptional().openapi({ description: 'Movie title in Italian' }),
    titleJapanese: z.string().exactOptional().openapi({ description: 'Movie title in Japanese' }),
    titlePolish: z.string().exactOptional().openapi({ description: 'Movie title in Polish' }),
    titleRussian: z.string().exactOptional().openapi({ description: 'Movie title in Russian' }),
    titleSerbian: z.string().exactOptional().openapi({ description: 'Movie title in Serbian' }),
    titleSpanish: z.string().exactOptional().openapi({ description: 'Movie title in Spanish' }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of movie story' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of movie story' }),
    yearFrom: z.int().exactOptional().openapi({ description: 'Starting year of movie story' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of movie story' }),
    usReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date the movie was first released in the United States' }),
    writers: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Writers involved in the movie' }),
    screenplayAuthors: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Screenplay authors involved in the movie' }),
    storyAuthors: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Story authors authors involved in the movie' }),
    directors: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Directors authors involved in the movie' }),
    producers: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Producers authors involved in the movie' }),
    staff: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Other staff involved in the movie' }),
    performers: z
      .array(PerformerBaseSchema)
      .exactOptional()
      .openapi({ description: 'Performers appearing in the movie' }),
    stuntPerformers: z
      .array(PerformerBaseSchema)
      .exactOptional()
      .openapi({ description: 'Stunt performers appearing in the movie' }),
    standInPerformers: z
      .array(PerformerBaseSchema)
      .exactOptional()
      .openapi({ description: 'Stand-in performers appearing in the movie' }),
    characters: z
      .array(CharacterBaseSchema)
      .exactOptional()
      .openapi({ description: 'Characters appearing in the movie' }),
  })
  .openapi({
    description: 'Full movie, returned when queried using UID',
    required: ['uid', 'title'],
  })
  .openapi('MovieFull')

const MovieBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    movies: z
      .array(MovieBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of movies matching given criteria' }),
  })
  .openapi({ description: 'Response object for movies search', required: [] })
  .openapi('MovieBaseResponse')

const MovieFullResponseSchema = z
  .object({ movie: MovieFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single movie query', required: [] })
  .openapi('MovieFullResponse')

const OccupationHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Occupation unique ID' }),
    name: z.string().openapi({ description: 'Occupation name' }),
  })
  .openapi({
    description: 'Header occupation, embedded in other objects',
    required: ['uid', 'name'],
  })
  .openapi('OccupationHeader')

const OccupationFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Occupation unique ID' }),
    name: z.string().openapi({ description: 'Occupation name' }),
    legalOccupation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a legal occupation" }),
    medicalOccupation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a medical occupation" }),
    scientificOccupation: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a scientific occupation" }),
    characters: z
      .array(CharacterBaseSchema)
      .exactOptional()
      .openapi({ description: 'Characters with this occupation' }),
  })
  .openapi({
    description: 'Full occupation, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('OccupationFull')

const OccupationBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    occupations: z
      .array(OccupationBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of occupations matching given criteria' }),
  })
  .openapi({ description: 'Response object for occupations search', required: [] })
  .openapi('OccupationBaseResponse')

const OccupationFullResponseSchema = z
  .object({ occupation: OccupationFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single occupation query', required: [] })
  .openapi('OccupationFullResponse')

const OrganizationHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Organization unique ID' }),
    name: z.string().openapi({ description: 'Organization name' }),
  })
  .openapi({
    description: 'Header organization, embedded in other objects',
    required: ['uid', 'name'],
  })
  .openapi('OrganizationHeader')

const OrganizationFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Organization unique ID' }),
    name: z.string().openapi({ description: 'Organization name' }),
    government: z.boolean().exactOptional().openapi({ description: "Whether it's a government" }),
    intergovernmentalOrganization: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an intergovernmental organization" }),
    researchOrganization: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a research organization" }),
    sportOrganization: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a sport organization" }),
    medicalOrganization: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a medical organization" }),
    militaryOrganization: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a military organization" }),
    militaryUnit: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a military unit" }),
    governmentAgency: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a government agency" }),
    lawEnforcementAgency: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a law enforcement agency" }),
    prisonOrPenalColony: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a prison or penal colony" }),
    mirror: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this organization is from mirror universe' }),
    alternateReality: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this organization is from alternate reality' }),
    characters: z
      .array(CharacterBaseSchema)
      .exactOptional()
      .openapi({ description: 'Characters belonging to this organization' }),
  })
  .openapi({
    description: 'Full organization, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('OrganizationFull')

const OrganizationBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    organizations: z
      .array(OrganizationBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of organizations matching given criteria' }),
  })
  .openapi({ description: 'Response object for organizations search', required: [] })
  .openapi('OrganizationBaseResponse')

const OrganizationFullResponseSchema = z
  .object({ organization: OrganizationFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single organization query', required: [] })
  .openapi('OrganizationFullResponse')

const PerformerHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Performer unique ID' }),
    name: z.string().openapi({ description: 'Performer name' }),
  })
  .openapi({
    description: 'Header performer, embedded in other objects',
    required: ['uid', 'name'],
  })
  .openapi('PerformerHeader')

const PerformerFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Performer unique ID' }),
    name: z.string().openapi({ description: 'Performer name' }),
    birthName: z.string().exactOptional().openapi({ description: 'Performer birth name' }),
    gender: GenderSchema.exactOptional(),
    dateOfBirth: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date the performer was born' }),
    placeOfBirth: z
      .string()
      .exactOptional()
      .openapi({ description: 'Place the performer was born' }),
    dateOfDeath: z.iso.date().exactOptional().openapi({ description: 'Date the performer died' }),
    placeOfDeath: z.string().exactOptional().openapi({ description: 'Place the performer died' }),
    animalPerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an animal performer" }),
    disPerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a performer that appeared in Star Trek: Discovery" }),
    ds9Performer: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether it's a performer that appeared in Star Trek: Deep Space Nine",
      }),
    entPerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a performer that appeared in Star Trek: Enterprise" }),
    filmPerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a performer that appeared in a Star Trek movie" }),
    standInPerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a stand-in performer" }),
    stuntPerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a stunt performer" }),
    tasPerformer: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether it's a performer that appeared in Star Trek: The Animated Series",
      }),
    tngPerformer: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether it's a performer that appeared in Star Trek: The Next Generation",
      }),
    tosPerformer: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether it's a performer that appeared in Star Trek: The Original Series",
      }),
    videoGamePerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a video game performer" }),
    voicePerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a voice performer" }),
    voyPerformer: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a performer that appeared in Star Trek: Voyager" }),
    episodesPerformances: z
      .array(EpisodeBaseSchema)
      .exactOptional()
      .openapi({ description: 'Episodes in which this person appeared as a performer' }),
    episodesStuntPerformances: z
      .array(EpisodeBaseSchema)
      .exactOptional()
      .openapi({ description: 'Episodes in which this person appeared as a stunt performer' }),
    episodesStandInPerformances: z
      .array(EpisodeBaseSchema)
      .exactOptional()
      .openapi({ description: 'Episodes in which this person appeared as a stand-in performer' }),
    moviesPerformances: z
      .array(MovieBaseSchema)
      .exactOptional()
      .openapi({ description: 'Movies in which this person appeared as a performer' }),
    moviesStuntPerformances: z
      .array(MovieBaseSchema)
      .exactOptional()
      .openapi({ description: 'Movies in which this person appeared as a stunt performer' }),
    moviesStandInPerformances: z
      .array(MovieBaseSchema)
      .exactOptional()
      .openapi({ description: 'Movies in which this person appeared as a stand-in performer' }),
    characters: z
      .array(CharacterBaseSchema)
      .exactOptional()
      .openapi({ description: 'Characters played by this performer' }),
  })
  .openapi({
    description: 'Full performer, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('PerformerFull')

const PerformerBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    performers: z
      .array(PerformerBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of performers matching given criteria' }),
  })
  .openapi({ description: 'Response object for performers search', required: [] })
  .openapi('PerformerBaseResponse')

const PerformerFullResponseSchema = z
  .object({ performer: PerformerFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single performer query', required: [] })
  .openapi('PerformerFullResponse')

const PlatformSchema = z
  .object({
    uid: z.string().exactOptional().openapi({ description: 'Platform unique ID' }),
    name: z.string().exactOptional().openapi({ description: 'Platform name' }),
  })
  .openapi({ description: 'Platform of video games', required: [] })
  .openapi('Platform')

const ProductionRunUnitSchema = z
  .enum(['BOX', 'SET'])
  .openapi({ description: 'Production run unit' })
  .openapi('ProductionRunUnit')

const SeasonFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Season unique ID' }),
    title: z.string().openapi({ description: 'Season title' }),
    series: SeriesBaseSchema.exactOptional(),
    seasonNumber: z.int().exactOptional().openapi({ description: 'Season number in series' }),
    numberOfEpisodes: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of episodes in this season' }),
    episodes: z
      .array(EpisodeBaseSchema)
      .exactOptional()
      .openapi({ description: 'Episodes in this season' }),
  })
  .openapi({
    description: 'Full location, returned when queried using UID',
    required: ['uid', 'title'],
  })
  .openapi('SeasonFull')

const SeasonBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    seasons: z
      .array(SeasonBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of seasons matching given criteria' }),
  })
  .openapi({ description: 'Response object for seasons search', required: [] })
  .openapi('SeasonBaseResponse')

const SeasonFullResponseSchema = z
  .object({ season: SeasonFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single season query', required: [] })
  .openapi('SeasonFullResponse')

const SeriesFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Series unique ID' }),
    title: z.string().openapi({ description: 'Series title' }),
    abbreviation: z.string().openapi({ description: 'Series abbreviation' }),
    productionStartYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year the series production started' }),
    productionEndYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year the series production ended' }),
    originalRunStartDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date the series originally ran from' }),
    originalRunEndDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date the series originally ran to' }),
    seasonsCount: z.int().exactOptional().openapi({ description: 'Number of seasons' }),
    episodesCount: z.int().exactOptional().openapi({ description: 'Number of episodes' }),
    featureLengthEpisodesCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of feature length episodes' }),
    productionCompany: CompanyBaseSchema.exactOptional(),
    originalBroadcaster: CompanyBaseSchema.exactOptional(),
    episodes: z
      .array(EpisodeBaseSchema)
      .exactOptional()
      .openapi({ description: 'Episodes in the series' }),
    seasons: z
      .array(SeasonBaseSchema)
      .exactOptional()
      .openapi({ description: 'Seasons in the series' }),
  })
  .openapi({
    description: 'Full series, returned when queried using UID',
    required: ['uid', 'title', 'abbreviation'],
  })
  .openapi('SeriesFull')

const SeriesBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    series: z
      .array(SeriesBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of series matching given criteria' }),
  })
  .openapi({ description: 'Response object for series search', required: [] })
  .openapi('SeriesBaseResponse')

const SeriesFullResponseSchema = z
  .object({ series: SeriesFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single series query', required: [] })
  .openapi('SeriesFullResponse')

const SoundtrackHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Soundtrack unique ID' }),
    title: z.string().openapi({ description: 'Soundtrack title' }),
  })
  .openapi({
    description: 'Header soundtrack, embedded in other objects',
    required: ['uid', 'title'],
  })
  .openapi('SoundtrackHeader')

const SoundtrackBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Soundtrack unique ID' }),
    title: z.string().openapi({ description: 'Soundtrack title' }),
    releaseDate: z.iso.date().exactOptional().openapi({ description: 'Release date' }),
    length: z.int().exactOptional().openapi({ description: 'Length, in seconds' }),
  })
  .openapi({
    description: 'Base soundtrack, returned in search results',
    required: ['uid', 'title'],
  })
  .openapi('SoundtrackBase')

const SoundtrackFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Soundtrack unique ID' }),
    title: z.string().openapi({ description: 'Soundtrack title' }),
    releaseDate: z.iso.date().exactOptional().openapi({ description: 'Release date' }),
    length: z.int().exactOptional().openapi({ description: 'Length, in seconds' }),
    labels: z
      .array(CompanyBaseSchema)
      .exactOptional()
      .openapi({ description: 'Labels this soundtrack was relesed by' }),
    composers: z.array(StaffBaseSchema).exactOptional().openapi({ description: 'Composers' }),
    contributors: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Other musicians that contributed to this soundtrack' }),
    orchestrators: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'Orchestrators' }),
    references: z.array(ReferenceSchema).exactOptional().openapi({ description: 'References' }),
  })
  .openapi({
    description: 'Full soundtrack, returned when queried using UID',
    required: ['uid', 'title'],
  })
  .openapi('SoundtrackFull')

const SoundtrackBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    soundtracks: z
      .array(SoundtrackBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of soundtracks matching given criteria' }),
  })
  .openapi({ description: 'Response object for soundtracks search', required: [] })
  .openapi('SoundtrackBaseResponse')

const SoundtrackFullResponseSchema = z
  .object({ soundtrack: SoundtrackFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single soundtrack query', required: [] })
  .openapi('SoundtrackFullResponse')

const SpacecraftHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Spacecraft unique ID' }),
    name: z.string().openapi({ description: 'Spacecraft name' }),
  })
  .openapi({
    description: 'Header spacecraft, embedded in other objects',
    required: ['uid', 'name'],
  })
  .openapi('SpacecraftHeader')

const SpacecraftClassHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Spacecraft class unique ID' }),
    name: z.string().openapi({ description: 'Spacecraft class name' }),
  })
  .openapi({
    description: 'Header spacecraft class, embedded in other objects',
    required: ['uid', 'name'],
  })
  .openapi('SpacecraftClassHeader')

const SpacecraftBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Spacecraft unique ID' }),
    name: z.string().openapi({ description: 'Spacecraft name' }),
    registry: z.string().exactOptional().openapi({ description: 'Spacecraft registry' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Status of a spacecraft (in prime reality, if spacecraft was in more than one realities)',
      }),
    dateStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date the spacecraft status was last known' }),
    spacecraftClass: SpacecraftClassHeaderSchema.exactOptional(),
    owner: OrganizationHeaderSchema.exactOptional(),
    operator: OrganizationHeaderSchema.exactOptional(),
  })
  .openapi({
    description: 'Base spacecraft, returned in search results',
    required: ['uid', 'name'],
  })
  .openapi('SpacecraftBase')

const SpeciesHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Species unique ID' }),
    name: z.string().openapi({ description: 'Species name' }),
  })
  .openapi({ description: 'Header species, embedded in other objects', required: ['uid', 'name'] })
  .openapi('SpeciesHeader')

const SpacecraftClassBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Spacecraft class unique ID' }),
    name: z.string().openapi({ description: 'Spacecraft class name' }),
    numberOfDecks: z.int().exactOptional().openapi({ description: 'Number of decks' }),
    warpCapable: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a warp-capable spacecraft class" }),
    alternateReality: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this spacecraft class is from alternate reality' }),
    activeFrom: z
      .string()
      .exactOptional()
      .openapi({ description: 'Starting period when this spacecraft class was in use' }),
    activeTo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ending period when this spacecraft class was in use' }),
    species: SpeciesHeaderSchema.exactOptional(),
    owner: OrganizationHeaderSchema.exactOptional(),
    operator: OrganizationHeaderSchema.exactOptional(),
    affiliation: OrganizationHeaderSchema.exactOptional(),
  })
  .openapi({
    description: 'Base spacecraft class, returned in search results',
    required: ['uid', 'name'],
  })
  .openapi('SpacecraftClassBase')

const SpacecraftTypeSchema = z
  .object({
    uid: z.string().exactOptional().openapi({ description: 'Spacecraft type unique ID' }),
    name: z.string().exactOptional().openapi({ description: 'Spacecraft type name' }),
  })
  .openapi({ description: 'Rating of video release, etc.', required: [] })
  .openapi('SpacecraftType')

const SpacecraftFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Spacecraft unique ID' }),
    name: z.string().openapi({ description: 'Spacecraft name' }),
    registry: z.string().exactOptional().openapi({ description: 'Spacecraft registry' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Status of a spacecraft (in prime reality, if spacecraft was in more than one realities)',
      }),
    dateStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date the spacecraft status was last known' }),
    spacecraftClass: SpacecraftClassBaseSchema.exactOptional(),
    owner: OrganizationBaseSchema.exactOptional(),
    operator: OrganizationBaseSchema.exactOptional(),
    spacecraftTypes: z
      .array(SpacecraftTypeSchema)
      .exactOptional()
      .openapi({ description: 'Spacecraft types' }),
  })
  .openapi({
    description: 'Full spacecraft, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('SpacecraftFull')

const SpacecraftBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    spacecrafts: z
      .array(SpacecraftBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of spacecrafts matching given criteria' }),
  })
  .openapi({ description: 'Response object for spacecrafts search', required: [] })
  .openapi('SpacecraftBaseResponse')

const SpacecraftFullResponseSchema = z
  .object({ spacecraft: SpacecraftFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single spacecraft query', required: [] })
  .openapi('SpacecraftFullResponse')

const SpacecraftClassFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Spacecraft class unique ID' }),
    name: z.string().openapi({ description: 'Spacecraft class name' }),
    numberOfDecks: z.int().exactOptional().openapi({ description: 'Number of decks' }),
    warpCapable: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a warp-capable spacecraft class" }),
    alternateReality: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this spacecraft class is from alternate reality' }),
    activeFrom: z
      .string()
      .exactOptional()
      .openapi({ description: 'Starting period when this spacecraft class was in use' }),
    activeTo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ending period when this spacecraft class was in use' }),
    species: SpeciesHeaderSchema.exactOptional(),
    owner: OrganizationBaseSchema.exactOptional(),
    operator: OrganizationBaseSchema.exactOptional(),
    affiliation: OrganizationBaseSchema.exactOptional(),
    spacecraftTypes: z
      .array(SpacecraftTypeSchema)
      .exactOptional()
      .openapi({ description: 'Spacecraft types' }),
    spacecrafts: z
      .array(SpacecraftBaseSchema)
      .exactOptional()
      .openapi({ description: 'Spacecrafts' }),
  })
  .openapi({
    description: 'Full spacecraft class, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('SpacecraftClassFull')

const SpacecraftClassBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    spacecraftClasses: z
      .array(SpacecraftClassBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of spacecraft classes matching given criteria' }),
  })
  .openapi({ description: 'Response object for spacecraft classes search', required: [] })
  .openapi('SpacecraftClassBaseResponse')

const SpacecraftClassFullResponseSchema = z
  .object({ spacecraftClass: SpacecraftClassFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single spacecraft class query', required: [] })
  .openapi('SpacecraftClassFullResponse')

const SpeciesBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Species unique ID' }),
    name: z.string().openapi({ description: 'Species name' }),
    homeworld: AstronomicalObjectHeaderSchema.exactOptional(),
    quadrant: AstronomicalObjectHeaderSchema.exactOptional(),
    extinctSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an extinct species" }),
    warpCapableSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a warp-capable species" }),
    extraGalacticSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an extra-galactic species" }),
    humanoidSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a humanoid species" }),
    reptilianSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a reptilian species" }),
    nonCorporealSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a non-corporeal species" }),
    shapeshiftingSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a shapeshifting species" }),
    spaceborneSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a spaceborne species" }),
    telepathicSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a telepathic species" }),
    transDimensionalSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a trans-dimensional species" }),
    unnamedSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a unnamed species" }),
    alternateReality: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this species is from alternate reality' }),
  })
  .openapi({ description: 'Base species, returned in search results', required: ['uid', 'name'] })
  .openapi('SpeciesBase')

const SpeciesFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Species unique ID' }),
    name: z.string().openapi({ description: 'Species name' }),
    homeworld: AstronomicalObjectBaseSchema.exactOptional(),
    quadrant: AstronomicalObjectBaseSchema.exactOptional(),
    extinctSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an extinct species" }),
    warpCapableSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a warp-capable species" }),
    extraGalacticSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's an extra-galactic species" }),
    humanoidSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a humanoid species" }),
    reptilianSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a reptilian species" }),
    nonCorporealSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a non-corporeal species" }),
    shapeshiftingSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a shapeshifting species" }),
    spaceborneSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a spaceborne species" }),
    telepathicSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a telepathic species" }),
    transDimensionalSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a trans-dimensional species" }),
    unnamedSpecies: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a unnamed species" }),
    alternateReality: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this species is from alternate reality' }),
    characters: z
      .array(CharacterBaseSchema)
      .exactOptional()
      .openapi({ description: 'Characters belonging to the species' }),
  })
  .openapi({
    description: 'Full species, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('SpeciesFull')

const SpeciesBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    species: z
      .array(SpeciesBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of species matching given criteria' }),
  })
  .openapi({ description: 'Response object for species search', required: [] })
  .openapi('SpeciesBaseResponse')

const SpeciesFullResponseSchema = z
  .object({ species: SpeciesFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single species query', required: [] })
  .openapi('SpeciesFullResponse')

const StaffFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Staff unique ID' }),
    name: z.string().openapi({ description: 'Staff name' }),
    birthName: z.string().exactOptional().openapi({ description: 'Staff birth name' }),
    gender: GenderSchema.exactOptional(),
    dateOfBirth: z.iso.date().exactOptional().openapi({ description: 'Date the staff was born' }),
    placeOfBirth: z.string().exactOptional().openapi({ description: 'Place the staff was born' }),
    dateOfDeath: z.iso.date().exactOptional().openapi({ description: 'Date the staff died' }),
    placeOfDeath: z.string().exactOptional().openapi({ description: 'Place the staff died' }),
    artDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is from art department' }),
    artDirector: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is an art director' }),
    productionDesigner: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a production designer' }),
    cameraAndElectricalDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is from camera and electrical department' }),
    cinematographer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a cinematographer' }),
    castingDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is from casting department' }),
    costumeDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is from costume department' }),
    costumeDesigner: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a custume designer' }),
    director: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a director' }),
    assistantOrSecondUnitDirector: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this person is an assistant or secound unit director director',
      }),
    exhibitAndAttractionStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is an exhibit and attraction staff' }),
    filmEditor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a film editor' }),
    linguist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a linguist' }),
    locationStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a location staff' }),
    makeupStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a make-up staff' }),
    musicDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is from music department' }),
    composer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a composer' }),
    personalAssistant: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a personal assistant' }),
    producer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a producer' }),
    productionAssociate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a production associate' }),
    productionStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a production staff' }),
    publicationStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a publication staff' }),
    scienceConsultant: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a science consultant' }),
    soundDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is from sound department' }),
    specialAndVisualEffectsStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a special and visual effects staff' }),
    author: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is an author' }),
    audioAuthor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is an audio author' }),
    calendarArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a calendar artist' }),
    comicArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic artist' }),
    comicAuthor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic author' }),
    comicColorArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic color artist' }),
    comicInteriorArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic interior artist' }),
    comicInkArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic ink artist' }),
    comicPencilArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic pencil artist' }),
    comicLetterArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic letter artist' }),
    comicStripArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a comic strip artist' }),
    gameArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a game artist' }),
    gameAuthor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a game author' }),
    novelArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a novel artist' }),
    novelAuthor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a novel author' }),
    referenceArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a reference artist' }),
    referenceAuthor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a reference author' }),
    publicationArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a publication artist' }),
    publicationDesigner: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a publication designer' }),
    publicationEditor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a publication editor' }),
    publicityArtist: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a publicity artist' }),
    cbsDigitalStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a part of CBS digital staff' }),
    ilmProductionStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a part of ILM production staff' }),
    specialFeaturesStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a special features artist' }),
    storyEditor: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a story editor' }),
    studioExecutive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is a studio executive' }),
    stuntDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is from stunt department' }),
    transportationDepartment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is from transportation department' }),
    videoGameProductionStaff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this person is video game production staff' }),
    writer: z.boolean().exactOptional().openapi({ description: 'Whether this person is a writer' }),
    writtenEpisodes: z
      .array(EpisodeBaseSchema)
      .exactOptional()
      .openapi({ description: 'Episodes written by this person' }),
    teleplayAuthoredEpisodes: z
      .array(EpisodeBaseSchema)
      .exactOptional()
      .openapi({ description: 'Episodes to which this person has written teleplay' }),
    storyAuthoredEpisodes: z
      .array(EpisodeBaseSchema)
      .exactOptional()
      .openapi({ description: 'Episodes to which this person has written story' }),
    directedEpisodes: z
      .array(EpisodeBaseSchema)
      .exactOptional()
      .openapi({ description: 'Episodes directed by this person' }),
    episodes: z
      .array(EpisodeBaseSchema)
      .exactOptional()
      .openapi({ description: 'Episodes on which this person worked' }),
    writtenMovies: z
      .array(MovieBaseSchema)
      .exactOptional()
      .openapi({ description: 'Movies written by this person' }),
    screenplayAuthoredMovies: z
      .array(MovieBaseSchema)
      .exactOptional()
      .openapi({ description: 'Movies to which this person has written screenplay' }),
    storyAuthoredMovies: z
      .array(MovieBaseSchema)
      .exactOptional()
      .openapi({ description: 'Movies to which this person has written story' }),
    directedMovies: z
      .array(MovieBaseSchema)
      .exactOptional()
      .openapi({ description: 'Movies directed by this person' }),
    producedMovies: z
      .array(MovieBaseSchema)
      .exactOptional()
      .openapi({ description: 'Movies produced by this person' }),
    movies: z
      .array(MovieBaseSchema)
      .exactOptional()
      .openapi({ description: 'Movies on which this person worked' }),
  })
  .openapi({
    description: 'Full staff, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('StaffFull')

const StaffBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    staff: z
      .array(StaffBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of staff matching given criteria' }),
  })
  .openapi({ description: 'Response object for staff search', required: [] })
  .openapi('StaffBaseResponse')

const StaffFullResponseSchema = z
  .object({ staff: StaffFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single staff query', required: [] })
  .openapi('StaffFullResponse')

const TechnologyHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Technology unique ID' }),
    name: z.string().openapi({ description: 'Technology name' }),
  })
  .openapi({
    description: 'Header technology, embedded in other objects',
    required: ['uid', 'name'],
  })
  .openapi('TechnologyHeader')

const TechnologyBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Technology unique ID' }),
    name: z.string().openapi({ description: 'Technology name' }),
    borgTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a Borg technology" }),
    borgComponent: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a Borg component" }),
    communicationsTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a communications technology" }),
    computerTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a computer technology" }),
    computerProgramming: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a technology related to computer programming" }),
    subroutine: z.boolean().exactOptional().openapi({ description: "Whether it's a subroutine" }),
    database: z.boolean().exactOptional().openapi({ description: "Whether it's a database" }),
    energyTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a energy technology" }),
    fictionalTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a fictional technology" }),
    holographicTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a holographic technology" }),
    identificationTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a identification technology" }),
    lifeSupportTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a life support technology" }),
    sensorTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a sensor technology" }),
    shieldTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a shield technology" }),
    tool: z.boolean().exactOptional().openapi({ description: "Whether it's a tool" }),
    culinaryTool: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a culinary tool" }),
    engineeringTool: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a engineering tool" }),
    householdTool: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a household tool" }),
    medicalEquipment: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a medical equipment" }),
    transporterTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a transporter technology" }),
  })
  .openapi({
    description: 'Base technology, returned in search results',
    required: ['uid', 'name'],
  })
  .openapi('TechnologyBase')

const TechnologyFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Technology unique ID' }),
    name: z.string().openapi({ description: 'Technology name' }),
    borgTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a Borg technology" }),
    borgComponent: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a Borg component" }),
    communicationsTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a communications technology" }),
    computerTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a computer technology" }),
    computerProgramming: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a technology related to computer programming" }),
    subroutine: z.boolean().exactOptional().openapi({ description: "Whether it's a subroutine" }),
    database: z.boolean().exactOptional().openapi({ description: "Whether it's a database" }),
    energyTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a energy technology" }),
    fictionalTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a fictional technology" }),
    holographicTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a holographic technology" }),
    identificationTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a identification technology" }),
    lifeSupportTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a life support technology" }),
    sensorTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a sensor technology" }),
    shieldTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a shield technology" }),
    tool: z.boolean().exactOptional().openapi({ description: "Whether it's a tool" }),
    culinaryTool: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a culinary tool" }),
    engineeringTool: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a engineering tool" }),
    householdTool: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a household tool" }),
    medicalEquipment: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a medical equipment" }),
    transporterTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a transporter technology" }),
  })
  .openapi({
    description: 'Full technology, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('TechnologyFull')

const TechnologyBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    technology: z
      .array(TechnologyBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of technology matching given criteria' }),
  })
  .openapi({ description: 'Response object for technology search', required: [] })
  .openapi('TechnologyBaseResponse')

const TechnologyFullResponseSchema = z
  .object({ technology: TechnologyFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single technology query', required: [] })
  .openapi('TechnologyFullResponse')

const TitleHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Title unique ID' }),
    name: z.string().openapi({ description: 'Title name' }),
  })
  .openapi({ description: 'Header title, embedded in other objects', required: ['uid', 'name'] })
  .openapi('TitleHeader')

const TitleFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Title unique ID' }),
    name: z.string().openapi({ description: 'Title name' }),
    militaryRank: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a military rank" }),
    fleetRank: z.boolean().exactOptional().openapi({ description: "Whether it's a fleet rank" }),
    religiousTitle: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a religious title" }),
    position: z.boolean().exactOptional().openapi({ description: "Whether it's a position" }),
    mirror: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this title is from mirror universe' }),
    characters: z
      .array(CharacterBaseSchema)
      .exactOptional()
      .openapi({ description: 'Characters that holds this title' }),
  })
  .openapi({
    description: 'Full title, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('TitleFull')

const TitleBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    titles: z
      .array(TitleBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of titles matching given criteria' }),
  })
  .openapi({ description: 'Response object for titles search', required: [] })
  .openapi('TitleBaseResponse')

const TitleFullResponseSchema = z
  .object({ title: TitleFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single title query', required: [] })
  .openapi('TitleFullResponse')

const TradingCardHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Trading card unique ID' }),
    name: z.string().openapi({ description: 'Trading card name' }),
  })
  .openapi({
    description: 'Header trading card, embedded in other objects',
    required: ['uid', 'name'],
  })
  .openapi('TradingCardHeader')

const TradingCardSetHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Trading card set unique ID' }),
    name: z.string().openapi({ description: 'Trading card set name' }),
  })
  .openapi({
    description: 'Header trading card set, embedded in other objects',
    required: ['uid', 'name'],
  })
  .openapi('TradingCardSetHeader')

const TradingCardDeckHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Trading card deck unique ID' }),
    name: z.string().openapi({ description: 'Trading card deck name' }),
  })
  .openapi({
    description: 'Header trading card deck, embedded in other objects',
    required: ['uid', 'name'],
  })
  .openapi('TradingCardDeckHeader')

const TradingCardBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Trading card unique ID' }),
    name: z.string().openapi({ description: 'Trading card name' }),
    number: z.string().exactOptional().openapi({ description: 'Trading card number' }),
    releaseYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Release year, if set was releases over multiple years' }),
    productionRun: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Production run, if different from trading card set production run',
      }),
    tradingCardSet: TradingCardSetHeaderSchema.exactOptional(),
    tradingCardDeck: TradingCardDeckHeaderSchema.exactOptional(),
  })
  .openapi({
    description: 'Base trading card, returned in search results',
    required: ['uid', 'name'],
  })
  .openapi('TradingCardBase')

const TradingCardSetBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Trading card set unique ID' }),
    name: z.string().openapi({ description: 'Trading card set name' }),
    releaseYear: z.int().exactOptional().openapi({ description: 'Release year' }),
    releaseMonth: z.int().exactOptional().openapi({ description: 'Release month' }),
    releaseDay: z.int().exactOptional().openapi({ description: 'Release day' }),
    cardsPerPack: z.int().exactOptional().openapi({ description: 'Cards per deck' }),
    packsPerBox: z.int().exactOptional().openapi({ description: 'Packs per box' }),
    boxesPerCase: z.int().exactOptional().openapi({ description: 'Boxes per case' }),
    productionRun: z.int().exactOptional().openapi({ description: 'Production run' }),
    productionRunUnit: ProductionRunUnitSchema.exactOptional(),
    cardWidth: z.float64().exactOptional().openapi({ description: 'Card width, in inches' }),
    cardHeight: z.float64().exactOptional().openapi({ description: 'Card height, in inches' }),
  })
  .openapi({
    description: 'Base trading card set, returned in search results',
    required: ['uid', 'name'],
  })
  .openapi('TradingCardSetBase')

const TradingCardDeckBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Trading card deck unique ID' }),
    name: z.string().openapi({ description: 'Trading card deck name' }),
    frequency: z
      .string()
      .exactOptional()
      .openapi({ description: "Frequency with which this deck occur in it's set" }),
    tradingCardSet: TradingCardSetHeaderSchema.exactOptional(),
  })
  .openapi({
    description: 'Base trading card deck, returned in search results',
    required: ['uid', 'name'],
  })
  .openapi('TradingCardDeckBase')

const TradingCardFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Trading card unique ID' }),
    name: z.string().openapi({ description: 'Trading card name' }),
    tradingCardSet: TradingCardSetBaseSchema.exactOptional(),
    tradingCardDeck: TradingCardDeckBaseSchema.exactOptional(),
    number: z.string().exactOptional().openapi({ description: 'Trading card number' }),
    releaseYear: z
      .int()
      .exactOptional()
      .openapi({ description: 'Release year, if set was releases over multiple years' }),
    productionRun: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Production run, if different from trading card set production run',
      }),
  })
  .openapi({
    description: 'Full trading card, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('TradingCardFull')

const TradingCardBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    tradingCards: z
      .array(TradingCardBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of trading cards matching given criteria' }),
  })
  .openapi({ description: 'Response object for trading cards search', required: [] })
  .openapi('TradingCardBaseResponse')

const TradingCardFullResponseSchema = z
  .object({ tradingCard: TradingCardFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single trading card query', required: [] })
  .openapi('TradingCardFullResponse')

const TradingCardDeckFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Trading card deck unique ID' }),
    name: z.string().openapi({ description: 'Trading card deck name' }),
    frequency: z
      .string()
      .exactOptional()
      .openapi({ description: "Frequency with which this deck occur in it's set" }),
    tradingCardSet: TradingCardSetHeaderSchema.exactOptional(),
    tradingCards: z
      .array(TradingCardBaseSchema)
      .exactOptional()
      .openapi({ description: 'Trading cards in this deck' }),
  })
  .openapi({
    description: 'Full trading card deck, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('TradingCardDeckFull')

const TradingCardDeckBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    tradingCardDecks: z
      .array(TradingCardDeckBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of trading card decks matching given criteria' }),
  })
  .openapi({ description: 'Response object for trading card decks search', required: [] })
  .openapi('TradingCardDeckBaseResponse')

const TradingCardDeckFullResponseSchema = z
  .object({ tradingCardDeck: TradingCardDeckFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single trading card deck query', required: [] })
  .openapi('TradingCardDeckFullResponse')

const TradingCardSetFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Trading card set unique ID' }),
    name: z.string().openapi({ description: 'Trading card set name' }),
    releaseYear: z.int().exactOptional().openapi({ description: 'Release year' }),
    releaseMonth: z.int().exactOptional().openapi({ description: 'Release month' }),
    releaseDay: z.int().exactOptional().openapi({ description: 'Release day' }),
    cardsPerPack: z.int().exactOptional().openapi({ description: 'Cards per deck' }),
    packsPerBox: z.int().exactOptional().openapi({ description: 'Packs per box' }),
    boxesPerCase: z.int().exactOptional().openapi({ description: 'Boxes per case' }),
    productionRun: z.int().exactOptional().openapi({ description: 'Production run' }),
    productionRunUnit: ProductionRunUnitSchema.exactOptional(),
    cardWidth: z.float64().exactOptional().openapi({ description: 'Card width, in inches' }),
    cardHeight: z.float64().exactOptional().openapi({ description: 'Card height, in inches' }),
    manufacturers: z
      .array(CompanyBaseSchema)
      .exactOptional()
      .openapi({ description: 'Manufacturers' }),
    tradingCardDecks: z
      .array(TradingCardDeckBaseSchema)
      .exactOptional()
      .openapi({ description: 'Trading card decks in this set' }),
    tradingCards: z
      .array(TradingCardBaseSchema)
      .exactOptional()
      .openapi({ description: 'Trading cards in this set' }),
    countriesOfOrigin: z
      .array(CountrySchema)
      .exactOptional()
      .openapi({ description: 'Countries of origin' }),
  })
  .openapi({
    description: 'Full trading card set, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('TradingCardSetFull')

const TradingCardSetBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    tradingCardSets: z
      .array(TradingCardSetBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of trading card sets matching given criteria' }),
  })
  .openapi({ description: 'Response object for trading card sets search', required: [] })
  .openapi('TradingCardSetBaseResponse')

const TradingCardSetFullResponseSchema = z
  .object({ tradingCardSet: TradingCardSetFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single trading card set query', required: [] })
  .openapi('TradingCardSetFullResponse')

const VideoGameHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Video game unique ID' }),
    title: z.string().openapi({ description: 'Video game title' }),
  })
  .openapi({
    description: 'Header video game, embedded in other objects',
    required: ['uid', 'title'],
  })
  .openapi('VideoGameHeader')

const VideoGameBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Video game unique ID' }),
    title: z.string().openapi({ description: 'Video game title' }),
    releaseDate: z.iso.date().exactOptional().openapi({ description: 'Release date' }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of video game story' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of video game story' }),
    yearFrom: z.int().exactOptional().openapi({ description: 'Starting year of video game story' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of video game story' }),
    systemRequirements: z.string().exactOptional().openapi({ description: 'System requirements' }),
  })
  .openapi({
    description: 'Base video game, returned in search results',
    required: ['uid', 'title'],
  })
  .openapi('VideoGameBase')

const VideoGameFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Video game unique ID' }),
    title: z.string().openapi({ description: 'Video game title' }),
    releaseDate: z.iso.date().exactOptional().openapi({ description: 'Release date' }),
    stardateFrom: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Starting stardate of video game story' }),
    stardateTo: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ending stardate of video game story' }),
    yearFrom: z.int().exactOptional().openapi({ description: 'Starting year of video game story' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of video game story' }),
    systemRequirements: z.string().exactOptional().openapi({ description: 'System requirements' }),
    publishers: z.array(CompanyBaseSchema).exactOptional().openapi({ description: 'Publishers' }),
    developers: z.array(CompanyBaseSchema).exactOptional().openapi({ description: 'Developers' }),
    platforms: z.array(PlatformSchema).exactOptional().openapi({ description: 'Platforms' }),
    genres: z.array(GenreSchema).exactOptional().openapi({ description: 'Genres' }),
    ratings: z.array(ContentRatingSchema).exactOptional().openapi({ description: 'Ratings' }),
    references: z.array(ReferenceSchema).exactOptional().openapi({ description: 'References' }),
  })
  .openapi({
    description: 'Full video game, returned when queried using UID',
    required: ['uid', 'title'],
  })
  .openapi('VideoGameFull')

const VideoGameBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    videoGames: z
      .array(VideoGameBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of video games matching given criteria' }),
  })
  .openapi({ description: 'Response object for video games search', required: [] })
  .openapi('VideoGameBaseResponse')

const VideoGameFullResponseSchema = z
  .object({ videoGame: VideoGameFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single video game query', required: [] })
  .openapi('VideoGameFullResponse')

const VideoReleaseHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Video release unique ID' }),
    title: z.string().openapi({ description: 'Video release title' }),
  })
  .openapi({
    description: 'Header video release, embedded in other objects',
    required: ['uid', 'title'],
  })
  .openapi('VideoReleaseHeader')

const VideoReleaseFormatSchema = z
  .enum([
    'SUPER_8',
    'BETAMAX',
    'VHS',
    'CED',
    'LD',
    'VHD',
    'VCD',
    'VIDEO_8',
    'DVD',
    'UMD',
    'HD_DVD',
    'BLU_RAY',
    'BLU_RAY_4K_UHD',
    'DIGITAL_FORMAT',
  ])
  .openapi({ description: 'Video release format' })
  .openapi('VideoReleaseFormat')

const VideoReleaseBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Video release unique ID' }),
    title: z.string().openapi({ description: 'Video release title' }),
    series: SeriesHeaderSchema.exactOptional(),
    season: SeasonHeaderSchema.exactOptional(),
    format: VideoReleaseFormatSchema.exactOptional(),
    numberOfEpisodes: z.int().exactOptional().openapi({ description: 'Number of episodes' }),
    numberOfFeatureLengthEpisodes: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of feature-length episodes' }),
    numberOfDataCarriers: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of data carriers (like DVD, VCD, VHS etc.)' }),
    runTime: z.int().exactOptional().openapi({ description: 'Run time, in minutes' }),
    yearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Starting year of video release story' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of video release story' }),
    regionFreeReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Region free release date' }),
    region1AReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Region 1/A release date' }),
    region1SlimlineReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Region 1 slimline release date' }),
    region2BReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Region 2/B release date' }),
    region2SlimlineReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Region 2 slimline release date' }),
    region4AReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Region 4 release date' }),
    region4SlimlineReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Region 4 slimline release date' }),
    amazonDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on Amazon.com' }),
    dailymotionDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on Dailymotion' }),
    googlePlayDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on Google Play' }),
    iTunesDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on iTunes' }),
    ultraVioletDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on UltraViolet' }),
    vimeoDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on Vimeo' }),
    vuduDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on VUDU' }),
    xboxSmartGlassDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on Xbox SmartGlass' }),
    youTubeDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on YouTube' }),
    netflixDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on Netflix' }),
  })
  .openapi({
    description: 'Base video release, returned in search results',
    required: ['uid', 'title'],
  })
  .openapi('VideoReleaseBase')

const VideoReleaseFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Video release unique ID' }),
    title: z.string().openapi({ description: 'Video release title' }),
    series: SeriesBaseSchema.exactOptional(),
    season: SeasonBaseSchema.exactOptional(),
    format: VideoReleaseFormatSchema.exactOptional(),
    numberOfEpisodes: z.int().exactOptional().openapi({ description: 'Number of episodes' }),
    numberOfFeatureLengthEpisodes: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of feature-length episodes' }),
    numberOfDataCarriers: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of data carriers (like DVD, VCD, VHS etc.)' }),
    runTime: z.int().exactOptional().openapi({ description: 'Run time, in minutes' }),
    yearFrom: z
      .int()
      .exactOptional()
      .openapi({ description: 'Starting year of video release story' }),
    yearTo: z.int().exactOptional().openapi({ description: 'Ending year of video release story' }),
    regionFreeReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Region free release date' }),
    region1AReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Region 1/A release date' }),
    region1SlimlineReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Region 1 slimline release date' }),
    region2BReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Region 2/B release date' }),
    region2SlimlineReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Region 2 slimline release date' }),
    region4AReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Region 4 release date' }),
    region4SlimlineReleaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Region 4 slimline release date' }),
    amazonDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on Amazon.com' }),
    dailymotionDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on Dailymotion' }),
    googlePlayDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on Google Play' }),
    iTunesDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on iTunes' }),
    ultraVioletDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on UltraViolet' }),
    vimeoDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on Vimeo' }),
    vuduDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on VUDU' }),
    xboxSmartGlassDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on Xbox SmartGlass' }),
    youTubeDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on YouTube' }),
    netflixDigitalRelease: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this video has been release on Netflix' }),
    references: z.array(ReferenceSchema).exactOptional().openapi({ description: 'References' }),
    ratings: z.array(ContentRatingSchema).exactOptional().openapi({ description: 'Ratings' }),
    languages: z
      .array(ContentLanguageSchema)
      .exactOptional()
      .openapi({ description: 'Languages of audio track' }),
    languagesSubtitles: z
      .array(ContentLanguageSchema)
      .exactOptional()
      .openapi({ description: 'Languages of subtitles' }),
    languagesDubbed: z
      .array(ContentLanguageSchema)
      .exactOptional()
      .openapi({ description: 'Languages that are available with dubbing' }),
  })
  .openapi({
    description: 'Full video release, returned when queried using UID',
    required: ['uid', 'title'],
  })
  .openapi('VideoReleaseFull')

const VideoReleaseBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    videoReleases: z
      .array(VideoReleaseBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of video releases matching given criteria' }),
  })
  .openapi({ description: 'Response object for video releases search', required: [] })
  .openapi('VideoReleaseBaseResponse')

const VideoReleaseFullResponseSchema = z
  .object({ videoRelease: VideoReleaseFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single video release query', required: [] })
  .openapi('VideoReleaseFullResponse')

const WeaponHeaderSchema = z
  .object({
    uid: z.string().openapi({ description: 'Weapon unique ID' }),
    name: z.string().openapi({ description: 'Weapon name' }),
  })
  .openapi({ description: 'Header weapon, embedded in other objects', required: ['uid', 'name'] })
  .openapi('WeaponHeader')

const WeaponBaseSchema = z
  .object({
    uid: z.string().openapi({ description: 'Weapon unique ID' }),
    name: z.string().openapi({ description: 'Weapon name' }),
    handHeldWeapon: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's hand-help weapon" }),
    laserTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a laser technology" }),
    plasmaTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a plasma technology" }),
    photonicTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a photonic technology" }),
    phaserTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a phaser technology" }),
    mirror: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this weapon is from mirror universe' }),
    alternateReality: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this weapon is from alternate reality' }),
  })
  .openapi({ description: 'Base weapon, returned in search results', required: ['uid', 'name'] })
  .openapi('WeaponBase')

const WeaponFullSchema = z
  .object({
    uid: z.string().openapi({ description: 'Weapon unique ID' }),
    name: z.string().openapi({ description: 'Weapon name' }),
    handHeldWeapon: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a hand-help weapon" }),
    laserTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a laser technology" }),
    plasmaTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a plasma technology" }),
    photonicTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a photonic technology" }),
    phaserTechnology: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether it's a phaser technology" }),
    mirror: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this weapon is from mirror universe' }),
    alternateReality: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this weapon is from alternate reality' }),
  })
  .openapi({
    description: 'Full weapon, returned when queried using UID',
    required: ['uid', 'name'],
  })
  .openapi('WeaponFull')

const WeaponBaseResponseSchema = z
  .object({
    page: ResponsePageSchema.exactOptional(),
    sort: ResponseSortSchema.exactOptional(),
    weapons: z
      .array(WeaponBaseSchema)
      .exactOptional()
      .openapi({ description: 'List of weapons matching given criteria' }),
  })
  .openapi({ description: 'Response object for weapons search', required: [] })
  .openapi('WeaponBaseResponse')

const WeaponFullResponseSchema = z
  .object({ weapon: WeaponFullSchema.exactOptional() })
  .openapi({ description: 'Response object for single weapon query', required: [] })
  .openapi('WeaponFullResponse')

export const getAnimalRoute = createRoute({
  method: 'get',
  path: '/animal',
  tags: ['Animal'],
  description: 'Retrival of a single animal',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Animal unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AnimalFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getAnimalSearchRoute = createRoute({
  method: 'get',
  path: '/animal/search',
  tags: ['Animal'],
  description: 'Pagination over animals',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AnimalBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postAnimalSearchRoute = createRoute({
  method: 'post',
  path: '/animal/search',
  tags: ['Animal'],
  description: 'Searching animals',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Animal name' }),
              earthAnimal: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an earth animal' }),
              earthInsect: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an earth insect' }),
              avian: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an avian' }),
              canine: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a canine' }),
              feline: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a feline' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AnimalBaseResponseSchema } },
    },
  },
})

export const getAstronomicalObjectRoute = createRoute({
  method: 'get',
  path: '/astronomicalObject',
  tags: ['AstronomicalObject'],
  description: 'Retrival of a single astronomical object',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: "Astronomical object's unique ID",
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AstronomicalObjectFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getAstronomicalObjectSearchRoute = createRoute({
  method: 'get',
  path: '/astronomicalObject/search',
  tags: ['AstronomicalObject'],
  description: 'Pagination over astronomical objects',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AstronomicalObjectBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postAstronomicalObjectSearchRoute = createRoute({
  method: 'post',
  path: '/astronomicalObject/search',
  tags: ['AstronomicalObject'],
  description: 'Searching astronomical objects',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Astronomical object name' }),
              astronomicalObjectType: z
                .string()
                .exactOptional()
                .openapi({ description: 'Type of astronomical object' }),
              locationUid: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Unique ID of astronomical object containing objects being searched',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AstronomicalObjectBaseResponseSchema } },
    },
  },
})

export const getBookRoute = createRoute({
  method: 'get',
  path: '/book',
  tags: ['Book'],
  description: 'Retrival of a single book',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Book unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BookFullResponseSchema } } },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getBookSearchRoute = createRoute({
  method: 'get',
  path: '/book/search',
  tags: ['Book'],
  description: 'Pagination over books',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BookBaseResponseSchema } } },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postBookSearchRoute = createRoute({
  method: 'post',
  path: '/book/search',
  tags: ['Book'],
  description: 'Searching books',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Book title' }),
              publishedYearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year the book was published' }),
              publishedYearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year the book was published' }),
              numberOfPagesFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of pages' }),
              numberOfPagesTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal number of pages' }),
              stardateFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting stardate of book story' }),
              stardateTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending stardate of book story' }),
              yearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year of book story' }),
              yearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year of book story' }),
              novel: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a novel' }),
              referenceBook: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a reference book' }),
              biographyBook: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a biography book' }),
              rolePlayingBook: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a role playing book' }),
              eBook: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an e-book' }),
              anthology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an anthology' }),
              novelization: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be novelization' }),
              audiobook: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an audiobook' }),
              audiobookAbridged: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an audiobook, abridged' }),
              audiobookPublishedYearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year the audiobook was published' }),
              audiobookPublishedYearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year the audiobook was published' }),
              audiobookRunTimeFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal audiobook run time, in minutes' }),
              audiobookRunTimeTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal audiobook run time, in minutes' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BookBaseResponseSchema } } },
  },
})

export const getBookCollectionRoute = createRoute({
  method: 'get',
  path: '/bookCollection',
  tags: ['BookCollection'],
  description: 'Retrival of a single book collection',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Book collection unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BookCollectionFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getBookCollectionSearchRoute = createRoute({
  method: 'get',
  path: '/bookCollection/search',
  tags: ['BookCollection'],
  description: 'Pagination over book collections',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BookCollectionBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postBookCollectionSearchRoute = createRoute({
  method: 'post',
  path: '/bookCollection/search',
  tags: ['BookCollection'],
  description: 'Searching book collections',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Book collection title' }),
              publishedYearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year the book collection was published' }),
              publishedYearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year the book collection was published' }),
              numberOfPagesFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of pages' }),
              numberOfPagesTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal number of pages' }),
              stardateFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting stardate of book collection stories' }),
              stardateTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending stardate of book collections stories' }),
              yearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year of book collection stories' }),
              yearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year of book collections stories' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BookCollectionBaseResponseSchema } },
    },
  },
})

export const getBookSeriesRoute = createRoute({
  method: 'get',
  path: '/bookSeries',
  tags: ['BookSeries'],
  description: 'Retrival of a single book series',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Book series unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BookSeriesFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getBookSeriesSearchRoute = createRoute({
  method: 'get',
  path: '/bookSeries/search',
  tags: ['BookSeries'],
  description: 'Pagination over book series',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BookSeriesBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postBookSeriesSearchRoute = createRoute({
  method: 'post',
  path: '/bookSeries/search',
  tags: ['BookSeries'],
  description: 'Searching book series',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Book series title' }),
              publishedYearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year the book series was published' }),
              publishedYearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year the book series was published' }),
              numberOfBooksFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of books' }),
              numberOfBooksTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal number of books' }),
              yearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year of book series stories' }),
              yearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year of book series stories' }),
              miniseries: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a miniseries' }),
              eBookSeries: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an e-book series' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BookSeriesBaseResponseSchema } },
    },
  },
})

export const getCharacterRoute = createRoute({
  method: 'get',
  path: '/character',
  tags: ['Character'],
  description: 'Retrival of a single character',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Character unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CharacterFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getCharacterSearchRoute = createRoute({
  method: 'get',
  path: '/character/search',
  tags: ['Character'],
  description: 'Pagination over characters',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CharacterBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postCharacterSearchRoute = createRoute({
  method: 'post',
  path: '/character/search',
  tags: ['Character'],
  description: 'Searching characters',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Character name' }),
              gender: z.string().exactOptional().openapi({ description: 'Character gender' }),
              deceased: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a deceased character' }),
              hologram: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a hologram' }),
              fictionalCharacter: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether it should be a fictional character (from universe point of view)',
                }),
              mirror: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a mirror universe character' }),
              alternateReality: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a alternate reality character' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CharacterBaseResponseSchema } },
    },
  },
})

export const getComicsRoute = createRoute({
  method: 'get',
  path: '/comics',
  tags: ['Comics'],
  description: 'Retrival of a single comics',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Comics unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ComicsFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getComicsSearchRoute = createRoute({
  method: 'get',
  path: '/comics/search',
  tags: ['Comics'],
  description: 'Pagination over comics',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ComicsBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postComicsSearchRoute = createRoute({
  method: 'post',
  path: '/comics/search',
  tags: ['Comics'],
  description: 'Searching comics',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Comics title' }),
              publishedYearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year the comics was published' }),
              publishedYearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year the comics was published' }),
              numberOfPagesFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of pages' }),
              numberOfPagesTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal number of pages' }),
              stardateFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting stardate of comics story' }),
              stardateTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending stardate of comics story' }),
              yearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year of comics story' }),
              yearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year of comics story' }),
              photonovel: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a photonovel' }),
              adaptation: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether it should be an adaptation of an episode or a movie',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ComicsBaseResponseSchema } },
    },
  },
})

export const getComicCollectionRoute = createRoute({
  method: 'get',
  path: '/comicCollection',
  tags: ['ComicCollection'],
  description: 'Retrival of a single comic collection',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Comic collection unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ComicCollectionFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getComicCollectionSearchRoute = createRoute({
  method: 'get',
  path: '/comicCollection/search',
  tags: ['ComicCollection'],
  description: 'Pagination over comic collections',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ComicCollectionBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postComicCollectionSearchRoute = createRoute({
  method: 'post',
  path: '/comicCollection/search',
  tags: ['ComicCollection'],
  description: 'Searching comic collections',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Comic collection title' }),
              publishedYearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year the comic collection was published' }),
              publishedYearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year the comic collection was published' }),
              numberOfPagesFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of pages' }),
              numberOfPagesTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal number of pages' }),
              stardateFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting stardate of comic collection stories' }),
              stardateTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending stardate of comic collections stories' }),
              yearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year of comic collection stories' }),
              yearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year of comic collections stories' }),
              photonovel: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an photonovel collection' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ComicCollectionBaseResponseSchema } },
    },
  },
})

export const getComicSeriesRoute = createRoute({
  method: 'get',
  path: '/comicSeries',
  tags: ['ComicSeries'],
  description: 'Retrival of a single comic series',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Comic series unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ComicSeriesFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getComicSeriesSearchRoute = createRoute({
  method: 'get',
  path: '/comicSeries/search',
  tags: ['ComicSeries'],
  description: 'Pagination over comic series',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ComicSeriesBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postComicSeriesSearchRoute = createRoute({
  method: 'post',
  path: '/comicSeries/search',
  tags: ['ComicSeries'],
  description: 'Searching comic series',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Comic series title' }),
              publishedYearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year the comic series was published' }),
              publishedYearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year the comic series was published' }),
              numberOfIssuesFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of issues' }),
              numberOfIssuesTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal number of issues' }),
              stardateFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting stardate of comic series stories' }),
              stardateTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting stardate of comic series stories' }),
              yearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year of comic series stories' }),
              yearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year of comic series stories' }),
              miniseries: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a miniseries' }),
              photonovelSeries: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be photonovel series' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ComicSeriesBaseResponseSchema } },
    },
  },
})

export const getComicStripRoute = createRoute({
  method: 'get',
  path: '/comicStrip',
  tags: ['ComicStrip'],
  description: 'Retrival of a single comic strip',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Comic strip unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ComicStripFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getComicStripSearchRoute = createRoute({
  method: 'get',
  path: '/comicStrip/search',
  tags: ['ComicStrip'],
  description: 'Pagination over comic strips',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ComicStripBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postComicStripSearchRoute = createRoute({
  method: 'post',
  path: '/comicStrip/search',
  tags: ['ComicStrip'],
  description: 'Searching comic strips',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Comic strip title' }),
              publishedYearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year the comic strip was published' }),
              publishedYearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year the comic strip was published' }),
              numberOfPagesFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of pages' }),
              numberOfPagesTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal number of pages' }),
              yearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year of comic strip story' }),
              yearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year of comic strip story' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ComicStripBaseResponseSchema } },
    },
  },
})

export const getCompanyRoute = createRoute({
  method: 'get',
  path: '/company',
  tags: ['Company'],
  description: 'Retrival of a single company',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Company unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CompanyFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getCompanySearchRoute = createRoute({
  method: 'get',
  path: '/company/search',
  tags: ['Company'],
  description: 'Pagination over companies',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CompanyBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postCompanySearchRoute = createRoute({
  method: 'post',
  path: '/company/search',
  tags: ['Company'],
  description: 'Searching companies',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Company name' }),
              broadcaster: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a broadcaster' }),
              collectibleCompany: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a collectible company' }),
              conglomerate: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a conglomerate' }),
              digitalVisualEffectsCompany: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a digital visual effects company' }),
              distributor: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a distributor' }),
              gameCompany: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a game company' }),
              filmEquipmentCompany: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a film equipment company' }),
              makeUpEffectsStudio: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a make-up effects studio' }),
              mattePaintingCompany: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a matte painting company' }),
              modelAndMiniatureEffectsCompany: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether it should be a model and miniature effects company',
                }),
              postProductionCompany: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a post-production company' }),
              productionCompany: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a production company' }),
              propCompany: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a prop company' }),
              recordLabel: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a record label' }),
              specialEffectsCompany: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a special effects company' }),
              tvAndFilmProductionCompany: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a TV and film production company' }),
              videoGameCompany: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a video game company' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CompanyBaseResponseSchema } },
    },
  },
})

export const getConflictRoute = createRoute({
  method: 'get',
  path: '/conflict',
  tags: ['Conflict'],
  description: 'Retrival of a single conflict',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Conflict unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ConflictFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getConflictSearchRoute = createRoute({
  method: 'get',
  path: '/conflict/search',
  tags: ['Conflict'],
  description: 'Pagination over conflicts',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ConflictBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postConflictSearchRoute = createRoute({
  method: 'post',
  path: '/conflict/search',
  tags: ['Conflict'],
  description: 'Searching conflicts',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Conflict name' }),
              yearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year of the conflict' }),
              yearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year of the conflict' }),
              earthConflict: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an Earth conflict' }),
              federationWar: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether this conflict should be a part of war involving Federation',
                }),
              klingonWar: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether this conflict should be a part of war involving the Klingons',
                }),
              dominionWarBattle: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this conflict should be a Dominion war battle' }),
              alternateReality: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this conflict should be from alternate reality' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ConflictBaseResponseSchema } },
    },
  },
})

export const getElementRoute = createRoute({
  method: 'get',
  path: '/element',
  tags: ['Element'],
  description: 'Retrival of a single element',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Element unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ElementFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getElementSearchRoute = createRoute({
  method: 'get',
  path: '/element/search',
  tags: ['Element'],
  description: 'Pagination over elements',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ElementBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postElementSearchRoute = createRoute({
  method: 'post',
  path: '/element/search',
  tags: ['Element'],
  description: 'Searching elements',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Element name' }),
              symbol: z.string().exactOptional().openapi({ description: 'Element symbol' }),
              transuranium: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a transuranium' }),
              gammaSeries: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should belong to Gamma series' }),
              hypersonicSeries: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should belong to Hypersonic series' }),
              megaSeries: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should belong to Mega series' }),
              omegaSeries: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should belong to Omega series' }),
              transonicSeries: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should belong to Transonic series' }),
              worldSeries: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should belong to World series' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ElementBaseResponseSchema } },
    },
  },
})

export const getEpisodeRoute = createRoute({
  method: 'get',
  path: '/episode',
  tags: ['Episode'],
  description: 'Retrival of a single episode',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Episode unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: EpisodeFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getEpisodeSearchRoute = createRoute({
  method: 'get',
  path: '/episode/search',
  tags: ['Episode'],
  description: 'Pagination over episodes',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: EpisodeBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postEpisodeSearchRoute = createRoute({
  method: 'post',
  path: '/episode/search',
  tags: ['Episode'],
  description: 'Searching episodes',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Episode title' }),
              seasonNumberFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal season number' }),
              seasonNumberTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal season number' }),
              episodeNumberFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal episode number in season' }),
              episodeNumberTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal episode number in season' }),
              productionSerialNumber: z
                .string()
                .exactOptional()
                .openapi({ description: 'Production serial number' }),
              featureLength: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a feature length episode' }),
              stardateFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting stardate of episode story' }),
              stardateTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending stardate of episode story' }),
              yearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year of episode story' }),
              yearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year of episode story' }),
              usAirDateFrom: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description: 'Minimal date the episode was first aired in the United States',
                }),
              usAirDateTo: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description: 'Maximal date the episode was first aired in the United States',
                }),
              finalScriptDateFrom: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Minimal date the episode script was completed' }),
              finalScriptDateTo: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Maximal date the episode script was completed' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: EpisodeBaseResponseSchema } },
    },
  },
})

export const getFoodRoute = createRoute({
  method: 'get',
  path: '/food',
  tags: ['Food'],
  description: 'Retrival of a single food',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Food unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FoodFullResponseSchema } } },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getFoodSearchRoute = createRoute({
  method: 'get',
  path: '/food/search',
  tags: ['Food'],
  description: 'Pagination over foods',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FoodBaseResponseSchema } } },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postFoodSearchRoute = createRoute({
  method: 'post',
  path: '/food/search',
  tags: ['Food'],
  description: 'Searching foods',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Food name' }),
              earthlyOrigin: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be of earthly origin' }),
              dessert: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a dessert' }),
              fruit: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a fruit' }),
              herbOrSpice: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an herb or a spice' }),
              sauce: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a sauce' }),
              soup: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a soup' }),
              beverage: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a beverage' }),
              alcoholicBeverage: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an alcoholic beverage' }),
              juice: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a juice' }),
              tea: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a tea' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FoodBaseResponseSchema } } },
  },
})

export const getLiteratureRoute = createRoute({
  method: 'get',
  path: '/literature',
  tags: ['Literature'],
  description: 'Retrival of a single literature',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Literature unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: LiteratureFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getLiteratureSearchRoute = createRoute({
  method: 'get',
  path: '/literature/search',
  tags: ['Literature'],
  description: 'Pagination over literature',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: LiteratureBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postLiteratureSearchRoute = createRoute({
  method: 'post',
  path: '/literature/search',
  tags: ['Literature'],
  description: 'Searching literature',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Literature title' }),
              earthlyOrigin: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be of earthly origin' }),
              shakespeareanWork: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a Shakespearean work' }),
              report: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a report' }),
              scientificLiterature: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a scientific literature' }),
              technicalManual: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a technical manual' }),
              religiousLiterature: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a religious literature' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: LiteratureBaseResponseSchema } },
    },
  },
})

export const getLocationRoute = createRoute({
  method: 'get',
  path: '/location',
  tags: ['Location'],
  description: 'Retrival of a single location',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Location unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: LocationFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getLocationSearchRoute = createRoute({
  method: 'get',
  path: '/location/search',
  tags: ['Location'],
  description: 'Pagination over locations',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: LocationBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postLocationSearchRoute = createRoute({
  method: 'post',
  path: '/location/search',
  tags: ['Location'],
  description: 'Searching locations',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Location name' }),
              earthlyLocation: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an earthly location' }),
              fictionalLocation: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a fictional location' }),
              religiousLocation: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a religious location' }),
              geographicalLocation: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a geographical location' }),
              bodyOfWater: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a body of water' }),
              country: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a country' }),
              subnationalEntity: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a subnational entity' }),
              settlement: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a settlement' }),
              usSettlement: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a US settlement' }),
              bajoranSettlement: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a Bajoran settlement' }),
              colony: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a colony' }),
              landform: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a landform' }),
              landmark: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a landmark' }),
              road: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a road' }),
              structure: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a structure' }),
              shipyard: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a shipyard' }),
              buildingInterior: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a building interior' }),
              establishment: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a establishment' }),
              medicalEstablishment: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a medical establishment' }),
              ds9Establishment: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a DS9 establishment' }),
              school: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a school' }),
              mirror: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this location should be from mirror universe' }),
              alternateReality: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this location should be from alternate reality' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: LocationBaseResponseSchema } },
    },
  },
})

export const getMagazineRoute = createRoute({
  method: 'get',
  path: '/magazine',
  tags: ['Magazine'],
  description: 'Retrival of a single magazine',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Magazine unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MagazineFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getMagazineSearchRoute = createRoute({
  method: 'get',
  path: '/magazine/search',
  tags: ['Magazine'],
  description: 'Pagination over magazines',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MagazineBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postMagazineSearchRoute = createRoute({
  method: 'post',
  path: '/magazine/search',
  tags: ['Magazine'],
  description: 'Searching magazines',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Magazine title' }),
              publishedYearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year the magazine was published' }),
              publishedYearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year the magazine was published' }),
              numberOfPagesFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of pages' }),
              numberOfPagesTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal number of pages' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MagazineBaseResponseSchema } },
    },
  },
})

export const getMagazineSeriesRoute = createRoute({
  method: 'get',
  path: '/magazineSeries',
  tags: ['MagazineSeries'],
  description: 'Retrival of a single magazine series',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Magazine series unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MagazineSeriesFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getMagazineSeriesSearchRoute = createRoute({
  method: 'get',
  path: '/magazineSeries/search',
  tags: ['MagazineSeries'],
  description: 'Pagination over magazine series',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MagazineSeriesBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postMagazineSeriesSearchRoute = createRoute({
  method: 'post',
  path: '/magazineSeries/search',
  tags: ['MagazineSeries'],
  description: 'Searching magazine series',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Magazine series title' }),
              publishedYearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year the magazine series was published' }),
              publishedYearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year the magazine series was published' }),
              numberOfIssuesFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of issues' }),
              numberOfIssuesTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal number of issues' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MagazineSeriesBaseResponseSchema } },
    },
  },
})

export const getMaterialRoute = createRoute({
  method: 'get',
  path: '/material',
  tags: ['Material'],
  description: 'Retrival of a single material',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Material unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MaterialFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getMaterialSearchRoute = createRoute({
  method: 'get',
  path: '/material/search',
  tags: ['Material'],
  description: 'Pagination over materials',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MaterialBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postMaterialSearchRoute = createRoute({
  method: 'post',
  path: '/material/search',
  tags: ['Material'],
  description: 'Searching materials',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Material name' }),
              chemicalCompound: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a chemical compound' }),
              biochemicalCompound: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a biochemical compound' }),
              drug: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a drug' }),
              poisonousSubstance: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a poisonous substance' }),
              explosive: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an explosive' }),
              gemstone: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a gemstone' }),
              alloyOrComposite: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an alloy or a composite' }),
              fuel: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a fuel' }),
              mineral: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a mineral' }),
              preciousMaterial: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a precious material' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MaterialBaseResponseSchema } },
    },
  },
})

export const getMedicalConditionRoute = createRoute({
  method: 'get',
  path: '/medicalCondition',
  tags: ['MedicalCondition'],
  description: 'Retrival of a single medical condition',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Medical condition unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MedicalConditionFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getMedicalConditionSearchRoute = createRoute({
  method: 'get',
  path: '/medicalCondition/search',
  tags: ['MedicalCondition'],
  description: 'Pagination over medical conditions',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MedicalConditionBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postMedicalConditionSearchRoute = createRoute({
  method: 'post',
  path: '/medicalCondition/search',
  tags: ['MedicalCondition'],
  description: 'Searching medical conditions',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Medical condition name' }),
              psychologicalCondition: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a psychological condition' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MedicalConditionBaseResponseSchema } },
    },
  },
})

export const getMovieRoute = createRoute({
  method: 'get',
  path: '/movie',
  tags: ['Movie'],
  description: 'Retrival of a single movie',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Movie unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MovieFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getMovieSearchRoute = createRoute({
  method: 'get',
  path: '/movie/search',
  tags: ['Movie'],
  description: 'Pagination over movies',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MovieBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postMovieSearchRoute = createRoute({
  method: 'post',
  path: '/movie/search',
  tags: ['Movie'],
  description: 'Searching movies',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Movie title' }),
              stardateFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting stardate of movie story' }),
              stardateTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending stardate of movie story' }),
              yearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year of movie story' }),
              yearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year of movie story' }),
              usReleaseDateFrom: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description: 'Minimal date the movie was first released in the United States',
                }),
              usReleaseDateTo: z.iso
                .date()
                .exactOptional()
                .openapi({
                  description: 'Maximal date the movie was first released in the United States',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MovieBaseResponseSchema } },
    },
  },
})

export const getOccupationRoute = createRoute({
  method: 'get',
  path: '/occupation',
  tags: ['Occupation'],
  description: 'Retrival of a single occupation',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Occupation unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OccupationFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getOccupationSearchRoute = createRoute({
  method: 'get',
  path: '/occupation/search',
  tags: ['Occupation'],
  description: 'Pagination over occupations',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OccupationBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postOccupationSearchRoute = createRoute({
  method: 'post',
  path: '/occupation/search',
  tags: ['Occupation'],
  description: 'Searching occupations',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Occupation name' }),
              legalOccupation: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a legal occupation' }),
              medicalOccupation: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a medical occupation' }),
              scientificOccupation: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a scientific occupation' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OccupationBaseResponseSchema } },
    },
  },
})

export const getOrganizationRoute = createRoute({
  method: 'get',
  path: '/organization',
  tags: ['Organization'],
  description: 'Retrival of a single organization',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Organization unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OrganizationFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getOrganizationSearchRoute = createRoute({
  method: 'get',
  path: '/organization/search',
  tags: ['Organization'],
  description: 'Pagination over organizations',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OrganizationBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postOrganizationSearchRoute = createRoute({
  method: 'post',
  path: '/organization/search',
  tags: ['Organization'],
  description: 'Searching organizations',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Organization name' }),
              government: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a government' }),
              intergovernmentalOrganization: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an intergovernmental organization' }),
              researchOrganization: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a research organization' }),
              sportOrganization: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a sport organization' }),
              medicalOrganization: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a medical organization' }),
              militaryOrganization: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a military organization' }),
              militaryUnit: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a military unit' }),
              governmentAgency: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a government agency' }),
              lawEnforcementAgency: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a law enforcement agency' }),
              prisonOrPenalColony: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a prison or penal colony' }),
              mirror: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether this organization should be from mirror universe',
                }),
              alternateReality: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether this organization should be from alternate reality',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OrganizationBaseResponseSchema } },
    },
  },
})

export const getPerformerRoute = createRoute({
  method: 'get',
  path: '/performer',
  tags: ['Performer'],
  description: 'Retrival of a single performer',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Performer unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PerformerFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getPerformerSearchRoute = createRoute({
  method: 'get',
  path: '/performer/search',
  tags: ['Performer'],
  description: 'Pagination over performers',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PerformerBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postPerformerSearchRoute = createRoute({
  method: 'post',
  path: '/performer/search',
  tags: ['Performer'],
  description: 'Searching performers',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Performer name' }),
              birthName: z
                .string()
                .exactOptional()
                .openapi({ description: 'Performer birth name' }),
              gender: z.string().exactOptional().openapi({ description: 'Performer gender' }),
              dateOfBirthFrom: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Minimal date the performer was born' }),
              dateOfBirthTo: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Maximal date the performer was born' }),
              placeOfBirth: z
                .string()
                .exactOptional()
                .openapi({ description: 'Place the performer was born' }),
              dateOfDeathFrom: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Minimal date the performer died' }),
              dateOfDeathTo: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Maximal date the performer died' }),
              placeOfDeath: z
                .string()
                .exactOptional()
                .openapi({ description: 'Place the performer died' }),
              animalPerformer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an animal performer' }),
              disPerformer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether it should be a performer that appeared in Star Trek: Discovery',
                }),
              ds9Performer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether it should be a performer that appeared in Star Trek: Deep Space Nine',
                }),
              entPerformer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether it should be a performer that appeared in Star Trek: Enterprise',
                }),
              filmPerformer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether it should be a performer that appeared in a Star Trek movie',
                }),
              standInPerformer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a stand-in performer' }),
              stuntPerformer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a stunt performer' }),
              tasPerformer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether it should be a performer that appeared in Star Trek: The Animated Series',
                }),
              tngPerformer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether it should be a performer that appeared in Star Trek: The Next Generation',
                }),
              tosPerformer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether it should be a performer that appeared in Star Trek: The Original Series',
                }),
              videoGamePerformer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a video game performer' }),
              voicePerformer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a voice performer' }),
              voyPerformer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether it should be a performer that appeared in Star Trek: Voyager',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PerformerBaseResponseSchema } },
    },
  },
})

export const getSeasonRoute = createRoute({
  method: 'get',
  path: '/season',
  tags: ['Season'],
  description: 'Retrival of a single season',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Season unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SeasonFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getSeasonSearchRoute = createRoute({
  method: 'get',
  path: '/season/search',
  tags: ['Season'],
  description: 'Pagination over seasons',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SeasonBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postSeasonSearchRoute = createRoute({
  method: 'post',
  path: '/season/search',
  tags: ['Season'],
  description: 'Searching seasons',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Season title' }),
              seasonNumberFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal season number' }),
              seasonNumberTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal season number' }),
              numberOfEpisodesFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of episodes in season' }),
              numberOfEpisodesTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal number of episodes in season' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SeasonBaseResponseSchema } },
    },
  },
})

export const getSeriesRoute = createRoute({
  method: 'get',
  path: '/series',
  tags: ['Series'],
  description: 'Retrival of a single series',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Series unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SeriesFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getSeriesSearchRoute = createRoute({
  method: 'get',
  path: '/series/search',
  tags: ['Series'],
  description: 'Pagination over series',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SeriesBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postSeriesSearchRoute = createRoute({
  method: 'post',
  path: '/series/search',
  tags: ['Series'],
  description: 'Searching series',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Series title' }),
              abbreviation: z
                .string()
                .exactOptional()
                .openapi({ description: 'Series abbreviation' }),
              productionStartYearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal year the series production started' }),
              productionStartYearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal year the series production started' }),
              productionEndYearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal year the series production ended' }),
              productionEndYearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal year the series production ended' }),
              originalRunStartDateFrom: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Minimal date the series originally ran from' }),
              originalRunStartDateTo: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Maximal date the series originally ran from' }),
              originalRunEndDateFrom: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Minimal date the series originally ran to' }),
              originalRunEndDateTo: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Maximal date the series originally ran to' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SeriesBaseResponseSchema } },
    },
  },
})

export const getSoundtrackRoute = createRoute({
  method: 'get',
  path: '/soundtrack',
  tags: ['Soundtrack'],
  description: 'Retrival of a single soundtrack',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Soundtrack unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SoundtrackFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getSoundtrackSearchRoute = createRoute({
  method: 'get',
  path: '/soundtrack/search',
  tags: ['Soundtrack'],
  description: 'Pagination over soundtracks',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SoundtrackBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postSoundtrackSearchRoute = createRoute({
  method: 'post',
  path: '/soundtrack/search',
  tags: ['Soundtrack'],
  description: 'Searching soundtracks',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Soundtrack title' }),
              releaseDateFrom: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Minimal release date' }),
              releaseDateTo: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Maximal release date' }),
              lengthFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal length, in seconds' }),
              lengthTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Maximal length, in seconds' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SoundtrackBaseResponseSchema } },
    },
  },
})

export const getSpacecraftRoute = createRoute({
  method: 'get',
  path: '/spacecraft',
  tags: ['Spacecraft'],
  description: 'Retrival of a single spacecraft',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Spacecraft unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SpacecraftFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getSpacecraftSearchRoute = createRoute({
  method: 'get',
  path: '/spacecraft/search',
  tags: ['Spacecraft'],
  description: 'Pagination over spacecrafts',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SpacecraftBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postSpacecraftSearchRoute = createRoute({
  method: 'post',
  path: '/spacecraft/search',
  tags: ['Spacecraft'],
  description: 'Searching spacecrafts',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Spacecraft name' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SpacecraftBaseResponseSchema } },
    },
  },
})

export const getSpacecraftClassRoute = createRoute({
  method: 'get',
  path: '/spacecraftClass',
  tags: ['SpacecraftClass'],
  description: 'Retrival of a single spacecraft class',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'SpacecraftClass unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SpacecraftClassFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getSpacecraftClassSearchRoute = createRoute({
  method: 'get',
  path: '/spacecraftClass/search',
  tags: ['SpacecraftClass'],
  description: 'Pagination over spacecraft classes',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SpacecraftClassBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postSpacecraftClassSearchRoute = createRoute({
  method: 'post',
  path: '/spacecraftClass/search',
  tags: ['SpacecraftClass'],
  description: 'Searching spacecraft classes',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Spacecraft class name' }),
              warpCapableSpecies: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a warp-capable spacecraft class' }),
              alternateReality: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether this spacecraft class should be from alternate reality',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SpacecraftClassBaseResponseSchema } },
    },
  },
})

export const getSpeciesRoute = createRoute({
  method: 'get',
  path: '/species',
  tags: ['Species'],
  description: 'Retrival of a single species',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Species unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SpeciesFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getSpeciesSearchRoute = createRoute({
  method: 'get',
  path: '/species/search',
  tags: ['Species'],
  description: 'Pagination over species',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SpeciesBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postSpeciesSearchRoute = createRoute({
  method: 'post',
  path: '/species/search',
  tags: ['Species'],
  description: 'Searching species',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Species name' }),
              extinctSpecies: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an extinct species' }),
              warpCapableSpecies: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a warp-capable species' }),
              extraGalacticSpecies: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be an extra-galactic species' }),
              humanoidSpecies: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a humanoid species' }),
              reptilianSpecies: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a reptilian species' }),
              nonCorporealSpecies: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a non-corporeal species' }),
              shapeshiftingSpecies: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a shapeshifting species' }),
              spaceborneSpecies: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a spaceborne species' }),
              telepathicSpecies: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a telepathic species' }),
              transDimensionalSpecies: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a trans-dimensional species' }),
              unnamedSpecies: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a unnamed species' }),
              alternateReality: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this species should be from alternate reality' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SpeciesBaseResponseSchema } },
    },
  },
})

export const getStaffRoute = createRoute({
  method: 'get',
  path: '/staff',
  tags: ['Staff'],
  description: 'Retrival of a single staff',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Staff unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StaffFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getStaffSearchRoute = createRoute({
  method: 'get',
  path: '/staff/search',
  tags: ['Staff'],
  description: 'Pagination over staff',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StaffBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postStaffSearchRoute = createRoute({
  method: 'post',
  path: '/staff/search',
  tags: ['Staff'],
  description: 'Searching staff',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Staff name' }),
              birthName: z.string().exactOptional().openapi({ description: 'Staff birth name' }),
              gender: z.string().exactOptional().openapi({ description: 'Staff gender' }),
              dateOfBirthFrom: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Minimal date the staff was born' }),
              dateOfBirthTo: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Maximal date the staff was born' }),
              placeOfBirth: z
                .string()
                .exactOptional()
                .openapi({ description: 'Place the staff was born' }),
              dateOfDeathFrom: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Minimal date the staff died' }),
              dateOfDeathTo: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Maximal date the staff died' }),
              placeOfDeath: z
                .string()
                .exactOptional()
                .openapi({ description: 'Place the staff died' }),
              artDepartment: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be from art department' }),
              artDirector: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be an art director' }),
              productionDesigner: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a production designer' }),
              cameraAndElectricalDepartment: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether this person should be from camera and electrical department',
                }),
              cinematographer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a cinematographer' }),
              castingDepartment: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be from casting department' }),
              costumeDepartment: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be from costume department' }),
              costumeDesigner: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a custume designer' }),
              director: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a director' }),
              assistantOrSecondUnitDirector: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether this person should be an assistant or secound unit director director',
                }),
              exhibitAndAttractionStaff: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether this person should be an exhibit and attraction staff',
                }),
              filmEditor: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a film editor' }),
              linguist: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a linguist' }),
              locationStaff: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a location staff' }),
              makeupStaff: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a make-up staff' }),
              musicDepartment: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be from music department' }),
              composer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a composer' }),
              personalAssistant: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a personal assistant' }),
              producer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a producer' }),
              productionAssociate: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a production associate' }),
              productionStaff: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a production staff' }),
              publicationStaff: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a publication staff' }),
              scienceConsultant: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a science consultant' }),
              soundDepartment: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be from sound department' }),
              specialAndVisualEffectsStaff: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether this person should be a special and visual effects staff',
                }),
              author: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be an author' }),
              audioAuthor: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be an audio author' }),
              calendarArtist: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a calendar artist' }),
              comicArtist: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a comic artist' }),
              comicAuthor: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a comic author' }),
              comicColorArtist: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a comic color artist' }),
              comicInteriorArtist: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a comic interior artist' }),
              comicInkArtist: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a comic ink artist' }),
              comicPencilArtist: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a comic pencil artist' }),
              comicLetterArtist: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a comic letter artist' }),
              comicStripArtist: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a comic strip artist' }),
              gameArtist: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a game artist' }),
              gameAuthor: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a game author' }),
              novelArtist: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a novel artist' }),
              novelAuthor: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a novel author' }),
              referenceArtist: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a reference artist' }),
              referenceAuthor: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a reference author' }),
              publicationArtist: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a publication artist' }),
              publicationDesigner: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a publication designer' }),
              publicationEditor: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a publication editor' }),
              publicityArtist: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a publicity artist' }),
              cbsDigitalStaff: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether this person should be a part of CBS digital staff',
                }),
              ilmProductionStaff: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether this person should be a part of ILM production staff',
                }),
              specialFeaturesStaff: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether this person should be a special features artist',
                }),
              storyEditor: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a story editor' }),
              studioExecutive: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a studio executive' }),
              stuntDepartment: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be from stunt department' }),
              transportationDepartment: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether this person should be from transportation department',
                }),
              videoGameProductionStaff: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person is video game production staff' }),
              writer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this person should be a writer' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StaffBaseResponseSchema } },
    },
  },
})

export const getTechnologyRoute = createRoute({
  method: 'get',
  path: '/technology',
  tags: ['Technology'],
  description: 'Retrival of a single technology',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Technology unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TechnologyFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTechnologySearchRoute = createRoute({
  method: 'get',
  path: '/technology/search',
  tags: ['Technology'],
  description: 'Pagination over technology',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TechnologyBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTechnologySearchRoute = createRoute({
  method: 'post',
  path: '/technology/search',
  tags: ['Technology'],
  description: 'Searching technology',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Technology name' }),
              borgTechnology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a Borg technology' }),
              borgComponent: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a Borg component' }),
              communicationsTechnology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a communications technology' }),
              computerTechnology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a computer technology' }),
              computerProgramming: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether it should be a technology related to computer programming',
                }),
              subroutine: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a subroutine' }),
              database: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a database' }),
              energyTechnology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a energy technology' }),
              fictionalTechnology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a fictional technology' }),
              holographicTechnology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a holographic technology' }),
              identificationTechnology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a identification technology' }),
              lifeSupportTechnology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a life support technology' }),
              sensorTechnology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a sensor technology' }),
              shieldTechnology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a shield technology' }),
              tool: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a tool' }),
              culinaryTool: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a culinary tool' }),
              engineeringTool: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a engineering tool' }),
              householdTool: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a household tool' }),
              medicalEquipment: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a medical equipment' }),
              transporterTechnology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: "Whether it's a transporter technology" }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TechnologyBaseResponseSchema } },
    },
  },
})

export const getTitleRoute = createRoute({
  method: 'get',
  path: '/title',
  tags: ['Title'],
  description: 'Retrival of a single title',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Title unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TitleFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTitleSearchRoute = createRoute({
  method: 'get',
  path: '/title/search',
  tags: ['Title'],
  description: 'Pagination over titles',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TitleBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTitleSearchRoute = createRoute({
  method: 'post',
  path: '/title/search',
  tags: ['Title'],
  description: 'Searching titles',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Title name' }),
              militaryRank: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a military rank' }),
              fleetRank: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a fleet rank' }),
              religiousTitle: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a religious title' }),
              position: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a position' }),
              mirror: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this title should be from mirror universe' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TitleBaseResponseSchema } },
    },
  },
})

export const getTradingCardRoute = createRoute({
  method: 'get',
  path: '/tradingCard',
  tags: ['TradingCard'],
  description: 'Retrival of a single trading card',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Trading card unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TradingCardFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTradingCardSearchRoute = createRoute({
  method: 'get',
  path: '/tradingCard/search',
  tags: ['TradingCard'],
  description: 'Pagination over trading cards',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TradingCardBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTradingCardSearchRoute = createRoute({
  method: 'post',
  path: '/tradingCard/search',
  tags: ['TradingCard'],
  description: 'Searching trading cards',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Trading card name' }),
              tradingCardDeckUid: z
                .string()
                .exactOptional()
                .openapi({ description: 'UID of trading card deck' }),
              tradingCardSetUid: z
                .string()
                .exactOptional()
                .openapi({ description: 'UID of trading card set' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TradingCardBaseResponseSchema } },
    },
  },
})

export const getTradingCardDeckRoute = createRoute({
  method: 'get',
  path: '/tradingCardDeck',
  tags: ['TradingCardDeck'],
  description: 'Retrival of a single trading card deck',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'trading card deck unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TradingCardDeckFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTradingCardDeckSearchRoute = createRoute({
  method: 'get',
  path: '/tradingCardDeck/search',
  tags: ['TradingCardDeck'],
  description: 'Pagination over trading card decks',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TradingCardDeckBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTradingCardDeckSearchRoute = createRoute({
  method: 'post',
  path: '/tradingCardDeck/search',
  tags: ['TradingCardDeck'],
  description: 'Searching trading card decks',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Trading card deck name' }),
              tradingCardSetUid: z
                .string()
                .exactOptional()
                .openapi({ description: 'UID of trading card set' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TradingCardDeckBaseResponseSchema } },
    },
  },
})

export const getTradingCardSetRoute = createRoute({
  method: 'get',
  path: '/tradingCardSet',
  tags: ['TradingCardSet'],
  description: 'Retrival of a single trading card set',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Trading card set unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TradingCardSetFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTradingCardSetSearchRoute = createRoute({
  method: 'get',
  path: '/tradingCardSet/search',
  tags: ['TradingCardSet'],
  description: 'Pagination over trading card sets',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TradingCardSetBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTradingCardSetSearchRoute = createRoute({
  method: 'post',
  path: '/tradingCardSet/search',
  tags: ['TradingCardSet'],
  description: 'Searching trading card sets',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Trading card set name' }),
              releaseYearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year the trading card set was released' }),
              releaseYearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year the trading card set was released' }),
              cardsPerPackFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of cards per deck' }),
              cardsPerPackTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of cards per deck' }),
              packsPerBoxFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of packs per box' }),
              packsPerBoxTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of packs per box' }),
              boxesPerCaseFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of boxes per case' }),
              boxesPerCaseTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal number of boxes per case' }),
              productionRunFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal production run' }),
              productionRunTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal production run' }),
              productionRunUnit: z
                .string()
                .exactOptional()
                .openapi({ description: 'Production run unit' }),
              cardWidthFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal card width, in inches' }),
              cardWidthTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal card width, in inches' }),
              cardHeightFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal card height, in inches' }),
              cardHeightTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal card height, in inches' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TradingCardSetBaseResponseSchema } },
    },
  },
})

export const getVideoGameRoute = createRoute({
  method: 'get',
  path: '/videoGame',
  tags: ['VideoGame'],
  description: 'Retrival of a single video game',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'VideoGame unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: VideoGameFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getVideoGameSearchRoute = createRoute({
  method: 'get',
  path: '/videoGame/search',
  tags: ['VideoGame'],
  description: 'Pagination over video games',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: VideoGameBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postVideoGameSearchRoute = createRoute({
  method: 'post',
  path: '/videoGame/search',
  tags: ['VideoGame'],
  description: 'Searching video games',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Video game title' }),
              releaseDateFrom: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Minimal date the video game was first released' }),
              releaseDateTo: z.iso
                .date()
                .exactOptional()
                .openapi({ description: 'Minimal date the video game was first released' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: VideoGameBaseResponseSchema } },
    },
  },
})

export const getVideoReleaseRoute = createRoute({
  method: 'get',
  path: '/videoRelease',
  tags: ['VideoRelease'],
  description: 'Retrival of a single video release',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Video release unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: VideoReleaseFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getVideoReleaseSearchRoute = createRoute({
  method: 'get',
  path: '/videoRelease/search',
  tags: ['VideoRelease'],
  description: 'Pagination over video releases',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: VideoReleaseBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postVideoReleaseSearchRoute = createRoute({
  method: 'post',
  path: '/videoRelease/search',
  tags: ['VideoRelease'],
  description: 'Searching video releases',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Video release title' }),
              yearFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Starting year of video release story' }),
              yearTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Ending year of video release story' }),
              runTimeFrom: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal run time, in minutes' }),
              runTimeTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'Minimal run time, in minutes' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: VideoReleaseBaseResponseSchema } },
    },
  },
})

export const getWeaponRoute = createRoute({
  method: 'get',
  path: '/weapon',
  tags: ['Weapon'],
  description: 'Retrival of a single weapon',
  request: {
    query: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            name: 'uid',
            in: 'query',
            description: 'Weapon unique ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: WeaponFullResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getWeaponSearchRoute = createRoute({
  method: 'get',
  path: '/weapon/search',
  tags: ['Weapon'],
  description: 'Pagination over weapons',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: WeaponBaseResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postWeaponSearchRoute = createRoute({
  method: 'post',
  path: '/weapon/search',
  tags: ['Weapon'],
  description: 'Searching weapons',
  request: {
    query: z.object({
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description: 'Zero-based page number',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'API key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Weapon name' }),
              handHeldWeapon: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a hand-help weapon' }),
              laserTechnology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a laser technology' }),
              plasmaTechnology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a plasma technology' }),
              photonicTechnology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a photonic technology' }),
              phaserTechnology: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether it should be a phaser technology' }),
              mirror: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this weapon should be from mirror universe' }),
              alternateReality: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether this weapon should be from alternate reality' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: WeaponBaseResponseSchema } },
    },
  },
})
