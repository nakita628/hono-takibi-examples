import { createRoute, z } from '@hono/zod-openapi'

const AuthorIdSchema = z
  .uuid()
  .openapi({
    description: 'The ID of the author.',
    example: 'e4bb1afb-4a4f-4dd6-8be0-e615d233185b',
  })
  .openapi('AuthorId')

const AuthorAsinSchema = z
  .string()
  .nullable()
  .openapi({
    description:
      'The Audible identifier (ASIN) of the author. Will be null if unknown. Not the Amazon identifier.',
    example: 'B000APZOQA',
  })
  .openapi('AuthorAsin')

const AuthorNameSchema = z
  .string()
  .openapi({ description: 'The name of the author.', example: 'Terry Goodkind' })
  .openapi('AuthorName')

const AuthorDescriptionSchema = z
  .string()
  .nullable()
  .openapi({ description: 'The new description of the author.', example: 'Terry Goodkind is a' })
  .openapi('AuthorDescription')

const AuthorImagePathSchema = z
  .string()
  .nullable()
  .openapi({
    description:
      'The absolute path for the author image. This will be in the `metadata/` directory. Will be null if there is no image.',
    example: '/metadata/authors/aut_z3leimgybl7uf3y4ab.jpg',
  })
  .openapi('AuthorImagePath')

const AddedAtSchema = z
  .int()
  .openapi({
    description: 'The time (in ms since POSIX epoch) when added to the server.',
    example: 1633522963509,
  })
  .openapi('AddedAt')

const UpdatedAtSchema = z
  .int()
  .openapi({
    description: 'The time (in ms since POSIX epoch) when last updated.',
    example: 1633522963509,
  })
  .openapi('UpdatedAt')

const LibraryItemIdSchema = z
  .uuid()
  .openapi({
    description: 'The ID of library items after 2.3.0.',
    example: 'e4bb1afb-4a4f-4dd6-8be0-e615d233185b',
  })
  .openapi('LibraryItemId')

const OldLibraryItemIdSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'The ID of library items on server version 2.2.23 and before.',
    example: 'li_o78uaoeuh78h6aoeif',
  })
  .openapi('OldLibraryItemId')

const InodeSchema = z
  .string()
  .openapi({
    description: 'The inode of the item in the file system.',
    example: '649644248522215260',
  })
  .openapi('Inode')

const LibraryIdSchema = z
  .uuid()
  .openapi({
    description: 'The ID of the library.',
    example: 'e4bb1afb-4a4f-4dd6-8be0-e615d233185b',
  })
  .openapi('LibraryId')

const FolderIdSchema = z
  .uuid()
  .openapi({
    description: 'The ID of the folder.',
    example: 'e4bb1afb-4a4f-4dd6-8be0-e615d233185b',
  })
  .openapi('FolderId')

const MediaTypeSchema = z
  .enum(['book', 'podcast'])
  .openapi({ description: 'The type of media, will be book or podcast.' })
  .openapi('MediaType')

const LibraryItemBaseSchema = z
  .object({
    id: LibraryItemIdSchema.exactOptional(),
    oldLibraryItemId: OldLibraryItemIdSchema.exactOptional(),
    ino: InodeSchema.exactOptional(),
    libraryId: LibraryIdSchema.exactOptional(),
    folderId: FolderIdSchema.exactOptional(),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path of the library item on the server.' }),
    relPath: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path, relative to the library folder, of the library item.' }),
    isFile: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the library item is a single file in the root of the library folder.',
      }),
    mtimeMs: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time (in ms since POSIX epoch) when the library item was last modified on disk.',
      }),
    ctimeMs: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time (in ms since POSIX epoch) when the library item status was changed on disk.',
      }),
    birthtimeMs: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time (in ms since POSIX epoch) when the library item was created on disk. Will be 0 if unknown.',
      }),
    addedAt: AddedAtSchema.exactOptional(),
    updatedAt: UpdatedAtSchema.exactOptional(),
    isMissing: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the library item was scanned and no longer exists.' }),
    isInvalid: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the library item was scanned and no longer has media files.',
      }),
    mediaType: MediaTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Base library item schema', required: [] })
  .openapi('LibraryItemBase')

const BookMetadataBaseSchema = z
  .object({
    title: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The title of the book. Will be null if unknown.',
        example: 'Wizards First Rule',
      }),
    subtitle: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The subtitle of the book. Will be null if there is no subtitle.' }),
    genres: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The genres of the book.',
        example: ['Fantasy', 'Sci-Fi', 'Nonfiction: History'],
      }),
    publishedYear: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The year the book was published. Will be null if unknown.',
        example: '2008',
      }),
    publishedDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date the book was published. Will be null if unknown.' }),
    publisher: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The publisher of the book. Will be null if unknown.',
        example: 'Brilliance Audio',
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A description for the book. Will be null if empty.',
        example:
          "The masterpiece that started Terry Goodkind's New York Times bestselling epic Sword of Truth In the aftermath of the brutal murder of his father, a mysterious woman, Kahlan Amnell, appears in Richard Cypher's forest sanctuary seeking help...and more. His world, his very beliefs, are shattered when ancient debts come due with thundering violence. In a dark age it takes courage to live, and more than mere courage to challenge those who hold dominion, Richard and Kahlan must take up that challenge or become the next victims. Beyond awaits a bewitching land where even the best of their hearts could betray them. Yet, Richard fears nothing so much as what secrets his sword might reveal about his own soul. Falling in love would destroy them - for reasons Richard can't imagine and Kahlan dare not say. In their darkest hour, hunted relentlessly, tormented by treachery and loss, Kahlan calls upon Richard to reach beyond his sword - to invoke within himself something more noble. Neither knows that the rules of battle have just changed...or that their time has run out. Wizard's First Rule is the beginning. One book. One Rule. Witness the birth of a legend.",
      }),
    isbn: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The ISBN of the book. Will be null if unknown.' }),
    asin: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The ASIN of the book. Will be null if unknown.',
        example: 'B002V0QK4C',
      }),
    language: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The language of the book. Will be null if unknown.' }),
    explicit: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the book has been marked as explicit.', example: false }),
  })
  .openapi({
    description:
      'The base book metadata object for minified, normal, and extended schemas to inherit from.',
    required: [],
  })
  .openapi('BookMetadataBase')

const BookMetadataMinifiedSchema = BookMetadataBaseSchema.and(
  z
    .object({
      titleIgnorePrefix: z
        .string()
        .exactOptional()
        .openapi({ description: 'The title of the book with any prefix moved to the end.' }),
      authorName: z
        .string()
        .exactOptional()
        .openapi({ description: "The name of the book's author(s).", example: 'Terry Goodkind' }),
      authorNameLF: z
        .string()
        .exactOptional()
        .openapi({
          description: "The name of the book's author(s) with last names first.",
          example: 'Goodkind, Terry',
        }),
      narratorName: z
        .string()
        .exactOptional()
        .openapi({
          description: "The name of the audiobook's narrator(s).",
          example: 'Sam Tsoutsouvas',
        }),
      seriesName: z
        .string()
        .exactOptional()
        .openapi({ description: "The name of the book's series.", example: 'Sword of Truth' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'The minified metadata for a book in the database.' })
  .openapi('BookMetadataMinified')

const BookCoverPathSchema = z
  .string()
  .nullable()
  .openapi({
    description:
      'The absolute path on the server of the cover file. Will be null if there is no cover.',
    example: '/audiobooks/Terry Goodkind/Sword of Truth/Wizards First Rule/cover.jpg',
  })
  .openapi('BookCoverPath')

const TagsSchema = z
  .array(z.string())
  .openapi({ description: 'Tags applied to items.', example: ['To Be Read', 'Genre: Nonfiction'] })
  .openapi('Tags')

const DurationSecSchema = z
  .number()
  .openapi({
    description: 'The total length (in seconds) of the item or file.',
    example: 33854.905,
  })
  .openapi('DurationSec')

const SizeSchema = z
  .int()
  .openapi({ description: 'The total size (in bytes) of the item or file.', example: 268824228 })
  .openapi('Size')

const BookMinifiedSchema = z
  .object({
    metadata: BookMetadataMinifiedSchema.exactOptional(),
    coverPath: BookCoverPathSchema.exactOptional(),
    tags: TagsSchema.exactOptional(),
    numTracks: z
      .int()
      .exactOptional()
      .openapi({ description: "The number of tracks the book's audio files have.", example: 1 }),
    numAudioFiles: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of audio files the book has.', example: 1 }),
    numChapters: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of chapters the book has.', example: 1 }),
    numMissingParts: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of missing parts the book has.', example: 0 }),
    numInvalidAudioFiles: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of invalid audio files the book has.', example: 0 }),
    duration: DurationSecSchema.exactOptional(),
    size: SizeSchema.exactOptional(),
    ebookFormat: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The format of ebook of the book. Will be null if the book is an audiobook.',
      }),
  })
  .openapi({
    description:
      "Minified book schema. Does not depend on `bookBase` because there's pretty much no overlap.",
    required: [],
  })
  .openapi('BookMinified')

const MediaMinifiedSchema = z
  .xor([BookMinifiedSchema])
  .openapi({ description: 'The minified media of the library item.' })
  .openapi('MediaMinified')

const LibraryItemMinifiedSchema = LibraryItemBaseSchema.and(
  z.object({ media: MediaMinifiedSchema.exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    description: 'A single item on the server, like a book or podcast. Minified media format.',
  })
  .openapi('LibraryItemMinified')

const SeriesIdSchema = z
  .uuid()
  .openapi({
    description: 'The ID of the series.',
    example: 'e4bb1afb-4a4f-4dd6-8be0-e615d233185b',
  })
  .openapi('SeriesId')

const SeriesNameSchema = z
  .string()
  .openapi({ description: 'The name of the series.', example: 'Sword of Truth' })
  .openapi('SeriesName')

const AuthorSeriesSchema = z
  .object({
    id: SeriesIdSchema.exactOptional(),
    name: SeriesNameSchema.exactOptional(),
    items: z
      .array(LibraryItemMinifiedSchema)
      .exactOptional()
      .openapi({
        description:
          "The items in the series. Each library item's media's metadata will have a `series` attribute, a `Series Sequence`, which is the matching series.",
      }),
  })
  .openapi({
    description: 'Series and the included library items that an author has written.',
    required: [],
  })
  .openapi('AuthorSeries')

type AuthorType = {
  id?: z.infer<typeof AuthorIdSchema>
  asin?: z.infer<typeof AuthorAsinSchema>
  name?: z.infer<typeof AuthorNameSchema>
  description?: z.infer<typeof AuthorDescriptionSchema>
  imagePath?: z.infer<typeof AuthorImagePathSchema>
  addedAt?: z.infer<typeof AddedAtSchema>
  updatedAt?: z.infer<typeof UpdatedAtSchema>
  libraryItems?: z.infer<typeof LibraryItemMinifiedSchema>[]
  series?: z.infer<typeof AuthorSeriesSchema>[]
}

const AuthorSchema: z.ZodType<AuthorType> = z
  .object({
    id: AuthorIdSchema.exactOptional(),
    asin: AuthorAsinSchema.exactOptional(),
    name: AuthorNameSchema.exactOptional(),
    description: AuthorDescriptionSchema.exactOptional(),
    imagePath: AuthorImagePathSchema.exactOptional(),
    addedAt: AddedAtSchema.exactOptional(),
    updatedAt: UpdatedAtSchema.exactOptional(),
    libraryItems: z
      .array(LibraryItemMinifiedSchema)
      .exactOptional()
      .openapi({ description: 'The items associated with the author' }),
    series: z
      .array(AuthorSeriesSchema)
      .exactOptional()
      .openapi({ description: 'The series associated with the author' }),
  })
  .openapi({
    description:
      'An author object which includes a description and image path. The library items and series associated with the author are optionally included.',
    required: [],
  })
  .openapi('Author')

type AuthorExpandedType = z.infer<typeof AuthorSchema> & { numBooks?: number }

const AuthorUpdatedSchema = z
  .boolean()
  .nullable()
  .openapi({
    description:
      'Whether the author was updated without errors. Will not exist if author was merged.',
  })
  .openapi('AuthorUpdated')

const AuthorMergedSchema = z
  .boolean()
  .nullable()
  .openapi({
    description:
      'Whether the author was merged with another author. Will not exist if author was updated.',
  })
  .openapi('AuthorMerged')

const ImageWidthSchema = z
  .int()
  .default(400)
  .openapi({ description: 'The requested width of image in pixels.', example: 400 })
  .openapi('ImageWidth')

const ImageHeightSchema = z
  .int()
  .nullable()
  .default(null)
  .openapi({
    description:
      'The requested height of image in pixels. If `null`, the height is scaled to maintain aspect ratio based on the requested width.',
    example: 600,
  })
  .openapi('ImageHeight')

const ImageFormatSchema = z
  .string()
  .default('jpeg')
  .openapi({ description: 'The requested output format.', example: 'webp' })
  .openapi('ImageFormat')

const ImageRawSchema = z
  .boolean()
  .default(false)
  .openapi({ description: 'Return the raw image without scaling if true.' })
  .openapi('ImageRaw')

const ImageUrlSchema = z
  .url()
  .openapi({
    description: 'The URL of the image to add to the server',
    example:
      'https://images-na.ssl-images-amazon.com/images/I/51NoQTm33OL.__01_SX120_CR0,0,120,120__.jpg',
  })
  .openapi('ImageUrl')

const AuthorSearchNameSchema = z
  .string()
  .openapi({
    description: 'The name of the author to use for searching.',
    example: 'Terry Goodkind',
  })
  .openapi('AuthorSearchName')

const RegionSchema = z
  .string()
  .default('us')
  .openapi({ description: 'The region used to search.', example: 'us' })
  .openapi('Region')

const EreaderNameSchema = z
  .string()
  .openapi({ description: 'The name of the e-reader device.' })
  .openapi('EreaderName')

const EreaderDeviceObjectSchema = z
  .object({
    name: EreaderNameSchema,
    email: z
      .string()
      .openapi({ description: 'The email address associated with the e-reader device.' }),
    availabilityOption: z
      .enum(['adminOrUp', 'userOrUp', 'guestOrUp', 'specificUsers'])
      .openapi({ description: 'The availability option for the device.' }),
    users: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of specific users allowed to access the device.' }),
  })
  .openapi({
    description: 'An e-reader device configured to receive EPUB through e-mail.',
    required: ['name', 'email', 'availabilityOption'],
  })
  .openapi('EreaderDeviceObject')

const EmailSettingsSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The unique identifier for the email settings. Currently this is always `email-settings`',
        example: 'email-settings',
      }),
    host: z.string().nullable().exactOptional().openapi({ description: 'The SMTP host address.' }),
    port: z.int32().openapi({ description: 'The port number for the SMTP server.', example: 465 }),
    secure: z
      .boolean()
      .openapi({ description: 'Indicates if the connection should use SSL/TLS.', example: true }),
    rejectUnauthorized: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if unauthorized SSL/TLS certificates should be rejected.',
        example: true,
      }),
    user: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The username for SMTP authentication.' }),
    pass: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The password for SMTP authentication.' }),
    testAddress: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The test email address used for sending test emails.' }),
    fromAddress: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The default "from" email address for outgoing emails.' }),
    ereaderDevices: z
      .array(EreaderDeviceObjectSchema)
      .openapi({ description: 'List of configured e-reader devices.' }),
  })
  .openapi({
    description:
      'The email settings configuration for the server. This includes the credentials to send e-books and an array of e-reader devices.',
    required: ['id', 'port', 'secure', 'ereaderDevices'],
  })
  .openapi('EmailSettings')

const LibraryNameSchema = z
  .string()
  .openapi({ description: 'The name of the library.', example: 'My Audiobooks' })
  .openapi('LibraryName')

const FolderSchema = z
  .object({
    id: FolderIdSchema.exactOptional(),
    fullPath: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The path on the server for the folder. (Read Only)',
        example: '/podcasts',
      }),
    libraryId: LibraryIdSchema.exactOptional(),
    addedAt: AddedAtSchema.exactOptional(),
  })
  .openapi({ description: 'Folder used in library', required: [] })
  .openapi('Folder')

const LibrarySettingsSchema = z
  .object({
    coverAspectRatio: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Whether the library should use square book covers. Must be 0 (for false) or 1 (for true).',
        example: 1,
      }),
    disableWatcher: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to disable the folder watcher for the library.',
        example: false,
      }),
    skipMatchingMediaWithAsin: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to skip matching books that already have an ASIN.',
        example: false,
      }),
    skipMatchingMediaWithIsbn: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to skip matching books that already have an ISBN.',
        example: false,
      }),
    autoScanCronExpression: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The cron expression for when to automatically scan the library folders. If null, automatic scanning will be disabled.',
        example: '0 0 0 * * *',
      }),
    audiobooksOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the library should ignore ebook files and only allow ebook files to be supplementary.',
        example: false,
      }),
    hideSingleBookSeries: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to hide series with only one book.', example: false }),
    onlyShowLaterBooksInContinueSeries: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to only show books in a series after the highest series sequence.',
        example: false,
      }),
    metadataPrecedence: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The precedence of metadata sources. See Metadata Providers for a list of possible providers.',
        example: [
          'folderStructure',
          'audioMetatags',
          'nfoFile',
          'txtFiles',
          'opfFile',
          'absMetadata',
        ],
      }),
    podcastSearchRegion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The region to use when searching for podcasts.', example: 'us' }),
  })
  .openapi({ description: 'The settings for the library.', required: [] })
  .openapi('LibrarySettings')

const CreatedAtSchema = z
  .int()
  .openapi({
    description: 'The time (in ms since POSIX epoch) when was created.',
    example: 1633522963509,
  })
  .openapi('CreatedAt')

const LibrarySchema = z
  .object({
    id: LibraryIdSchema.exactOptional(),
    name: LibraryNameSchema.exactOptional(),
    folders: z
      .array(FolderSchema)
      .exactOptional()
      .openapi({ description: 'The folders that belong to the library.' }),
    displayOrder: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Display position of the library in the list of libraries. Must be >= 1.',
        example: 1,
      }),
    icon: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The selected icon for the library. See Library Icons for a list of possible icons.',
        example: 'audiobookshelf',
      }),
    mediaType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of media that the library contains. Will be `book` or `podcast`. (Read Only)',
        example: 'book',
      }),
    provider: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Preferred metadata provider for the library. See Metadata Providers for a list of possible providers.',
        example: 'audible',
      }),
    settings: LibrarySettingsSchema.exactOptional(),
    createdAt: CreatedAtSchema.exactOptional(),
    lastUpdate: UpdatedAtSchema.exactOptional(),
  })
  .openapi({
    description: 'A library object which includes either books or podcasts.',
    required: [],
  })
  .openapi('Library')

const LibraryFoldersSchema = z
  .array(FolderSchema)
  .openapi({ description: 'The folders of the library. Only specify the fullPath.' })
  .openapi('LibraryFolders')

const LibraryDisplayOrderSchema = z
  .int()
  .min(1)
  .openapi({ description: 'The display order of the library. Must be >= 1.', example: 1 })
  .openapi('LibraryDisplayOrder')

const LibraryIconSchema = z
  .string()
  .openapi({
    description: 'The icon of the library. See Library Icons for a list of possible icons.',
    example: 'audiobookshelf',
  })
  .openapi('LibraryIcon')

const LibraryMediaTypeSchema = z
  .string()
  .openapi({
    description: 'The type of media that the library contains. Must be `book` or `podcast`.',
    example: 'book',
  })
  .openapi('LibraryMediaType')

const LibraryProviderSchema = z
  .string()
  .openapi({
    description:
      'Preferred metadata provider for the library. See Metadata Providers for a list of possible providers.',
    example: 'audible',
  })
  .openapi('LibraryProvider')

const AuthorExpandedSchema: z.ZodType<AuthorExpandedType> = AuthorSchema.and(
  z
    .object({
      numBooks: z
        .int()
        .exactOptional()
        .openapi({
          description: 'The number of books associated with the author in the library.',
          example: 1,
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'The author schema with the total number of books in the library.' })
  .openapi('AuthorExpanded')

const TotalSchema = z
  .int()
  .openapi({ description: 'The total number of items in the response.', example: 100 })
  .openapi('Total')

const LimitSchema = z
  .int()
  .default(0)
  .openapi({
    description: 'The number of items to return. If 0, no items are returned.',
    example: 10,
  })
  .openapi('Limit')

const PageSchema = z
  .int()
  .default(0)
  .openapi({
    description:
      'The page number (zero indexed) to return. If no limit is specified, then page will have no effect.',
    example: 1,
  })
  .openapi('Page')

const SortBySchema = z
  .string()
  .openapi({
    description: 'The field to sort by from the request.',
    example: 'media.metadata.title',
  })
  .openapi('SortBy')

const SortDescSchema = z
  .boolean()
  .openapi({ description: 'Whether to sort in descending order.', example: true })
  .openapi('SortDesc')

const FilterBySchema = z
  .string()
  .openapi({
    description: 'The field to filter by from the request. TODO',
    example: 'media.metadata.title',
  })
  .openapi('FilterBy')

const MinifiedSchema = z
  .boolean()
  .default(false)
  .openapi({ description: 'Return minified items if true.', example: true })
  .openapi('Minified')

const CollapseSeriesSchema = z
  .boolean()
  .openapi({ description: 'Whether collapse series was set in the request.', example: true })
  .openapi('CollapseSeries')

const LibraryIncludeSchema = z
  .string()
  .openapi({
    description: 'The fields to include in the response. The only current option is `rssfeed`.',
    example: 'rssfeed',
  })
  .openapi('LibraryInclude')

const SequenceSchema = z
  .string()
  .nullable()
  .openapi({ description: 'The position in the series the book is.' })
  .openapi('Sequence')

const LibraryItemSequenceSchema = LibraryItemBaseSchema.and(
  z.object({ sequence: SequenceSchema.exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    description:
      'A single item on the server, like a book or podcast. Includes series sequence information.',
  })
  .openapi('LibraryItemSequence')

const SeriesBooksSchema = z
  .object({
    id: SeriesIdSchema.exactOptional(),
    name: SeriesNameSchema.exactOptional(),
    addedAt: AddedAtSchema.exactOptional(),
    nameIgnorePrefix: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the series with any prefix moved to the end.' }),
    nameIgnorePrefixSort: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the series with any prefix removed.' }),
    type: z.string().exactOptional().openapi({ description: 'Will always be `series`.' }),
    books: z
      .array(LibraryItemSequenceSchema)
      .exactOptional()
      .openapi({
        description:
          'The library items that contain the books in the series. A sequence attribute that denotes the position in the series the book is in, is tacked on.',
      }),
    totalDuration: z
      .number()
      .exactOptional()
      .openapi({ description: 'The combined duration (in seconds) of all books in the series.' }),
  })
  .openapi({
    description: 'A series object which includes the name and books in the series.',
    required: [],
  })
  .openapi('SeriesBooks')

const SeriesDescriptionSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'A description for the series. Will be null if there is none.',
    example:
      'The Sword of Truth is a series of twenty one epic fantasy novels written by Terry Goodkind.',
  })
  .openapi('SeriesDescription')

const SeriesSchema = z
  .object({
    id: SeriesIdSchema.exactOptional(),
    name: SeriesNameSchema.exactOptional(),
    description: SeriesDescriptionSchema.exactOptional(),
    addedAt: AddedAtSchema.exactOptional(),
    updatedAt: UpdatedAtSchema.exactOptional(),
  })
  .openapi({
    description: 'A series object which includes the name and description of the series.',
    required: [],
  })
  .openapi('Series')

const SeriesProgressSchema = z
  .object({
    libraryItemIds: z
      .array(LibraryItemIdSchema)
      .exactOptional()
      .openapi({ description: 'The IDs of the library items in the series.' }),
    libraryItemIdsFinished: z
      .array(LibraryItemIdSchema)
      .exactOptional()
      .openapi({ description: 'The IDs of the library items in the series that are finished.' }),
    isFinished: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the series is finished.' }),
  })
  .openapi({ description: "The user's progress of a series.", required: [] })
  .openapi('SeriesProgress')

const SeriesWithProgressAndRSSSchema = z
  .xor([
    SeriesSchema,
    z
      .object({
        progress: SeriesProgressSchema.exactOptional(),
        rssFeed: z
          .string()
          .exactOptional()
          .openapi({ description: 'The RSS feed for the series.', example: 'TBD' }),
      })
      .openapi({ required: [] }),
  ])
  .openapi({ description: 'A series object which includes the name and progress of the series.' })
  .openapi('SeriesWithProgressAndRSS')

const NotificationEventSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the notification event. The names and allowable values are defined at https://github.com/advplyr/audiobookshelf/blob/master/server/utils/notifications.js',
      }),
    requiresLibrary: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the notification event depends on a library existing.' }),
    libraryMediaType: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The type of media of the library the notification depends on existing. Will not exist if requiresLibrary is false.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the notification event.' }),
    variables: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The variables of the notification event that can be used in the notification templates.',
      }),
    defaults: z
      .object({
        title: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The default title template for notifications using the notification event.',
          }),
        body: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The default body template for notifications using the notification event.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    testData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The keys of the testData object will match the list of variables. The values will be the data used when sending a test notification.',
      }),
  })
  .openapi({ required: [] })
  .openapi('NotificationEvent')

const NotificationIdSchema = z
  .string()
  .openapi({ description: 'The ID of the notification.', example: 'notification-settings' })
  .openapi('NotificationId')

const AppriseApiUrlSchema = z
  .string()
  .nullable()
  .openapi({ description: 'The full URL where the Apprise API to use is located.' })
  .openapi('AppriseApiUrl')

const LibraryIdNullableSchema = z
  .uuid()
  .nullable()
  .openapi({
    description: 'The ID of the library. Applies to all libraries if `null`.',
    example: 'e4bb1afb-4a4f-4dd6-8be0-e615d233185b',
  })
  .openapi('LibraryIdNullable')

const NotificationEventNameSchema = z
  .enum(['onPodcastEpisodeDownloaded', 'onBackupCompleted', 'onBackupFailed', 'onTest'])
  .openapi({ description: 'The name of the event the notification will fire on.' })
  .openapi('NotificationEventName')

const UrlsSchema = z
  .array(z.string())
  .openapi({
    description: 'The Apprise URLs to use for the notification.',
    example: 'http://192.168.0.3:8000/notify/my-cool-notification',
  })
  .openapi('Urls')

const TitleTemplateSchema = z
  .string()
  .openapi({
    description: 'The template for the notification title.',
    example: 'New {{podcastTitle}} Episode!',
  })
  .openapi('TitleTemplate')

const BodyTemplateSchema = z
  .string()
  .openapi({
    description: 'The template for the notification body.',
    example: '{{episodeTitle}} has been added to {{libraryName}} library.',
  })
  .openapi('BodyTemplate')

const EnabledSchema = z
  .boolean()
  .default(false)
  .openapi({ description: 'Whether the notification is enabled.' })
  .openapi('Enabled')

const NotificationTypeSchema = z
  .enum(['info', 'success', 'warning', 'failure'])
  .nullable()
  .default('info')
  .openapi({ description: "The notification's type." })
  .openapi('NotificationType')

const NotificationSchema = z
  .object({
    id: NotificationIdSchema.exactOptional(),
    libraryId: LibraryIdNullableSchema.exactOptional(),
    eventName: NotificationEventNameSchema.exactOptional(),
    urls: UrlsSchema.exactOptional(),
    titleTemplate: TitleTemplateSchema.exactOptional(),
    bodyTemplate: BodyTemplateSchema.exactOptional(),
    enabled: EnabledSchema.exactOptional(),
    type: NotificationTypeSchema.exactOptional(),
    lastFiredAt: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The time (in ms since POSIX epoch) when the notification was last fired. Will be null if the notification has not fired.',
      }),
    lastAttemptFailed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the last notification attempt failed.' }),
    numConsecutiveFailedAttempts: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({ description: 'The number of consecutive times the notification has failed.' }),
    numTimesFired: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({ description: 'The number of times the notification has fired.' }),
    createdAt: CreatedAtSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Notification')

const MaxFailedAttemptsSchema = z
  .int()
  .min(0)
  .default(5)
  .openapi({
    description: 'The maximum number of times a notification fails before being disabled.',
  })
  .openapi('MaxFailedAttempts')

const MaxNotificationQueueSchema = z
  .int()
  .openapi({
    description:
      'The maximum number of notifications in the notification queue before events are ignored.',
  })
  .openapi('MaxNotificationQueue')

const NotificationSettingsSchema = z
  .object({
    id: NotificationIdSchema.exactOptional(),
    appriseType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of Apprise that will be used. At the moment, only api is available.',
      }),
    appriseApiUrl: AppriseApiUrlSchema.exactOptional(),
    notifications: z
      .array(NotificationSchema)
      .exactOptional()
      .openapi({ description: 'The set notifications.' }),
    maxFailedAttempts: MaxFailedAttemptsSchema.exactOptional(),
    maxNotificationQueue: MaxNotificationQueueSchema.exactOptional(),
    notificationDelay: z
      .int()
      .exactOptional()
      .openapi({ description: 'The time (in ms) between notification pushes.' }),
  })
  .openapi({ required: [] })
  .openapi('NotificationSettings')

const PodcastIdSchema = z
  .uuid()
  .openapi({
    description: 'The ID of podcasts and podcast episodes after 2.3.0.',
    example: 'e4bb1afb-4a4f-4dd6-8be0-e615d233185b',
  })
  .openapi('PodcastId')

const PodcastMetadataSchema = z
  .object({
    title: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The title of the podcast.' }),
    author: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The author of the podcast.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The description of the podcast.' }),
    releaseDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The release date of the podcast.' }),
    genres: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The genres of the podcast.' }),
    feedUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The URL of the podcast feed.' }),
    imageUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "The URL of the podcast's image." }),
    itunesPageUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "The URL of the podcast's iTunes page." }),
    itunesId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The iTunes ID of the podcast.' }),
    itunesArtistId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The iTunes artist ID of the podcast.' }),
    explicit: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the podcast contains explicit content.' }),
    language: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The language of the podcast.' }),
    type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The type of podcast (e.g., episodic, serial).' }),
  })
  .openapi({ description: 'Metadata for a podcast.', required: [] })
  .openapi('PodcastMetadata')

const OldPodcastIdSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'The ID of podcasts on server version 2.2.23 and before.',
    example: 'pod_o78uaoeuh78h6aoeif',
  })
  .openapi('OldPodcastId')

const FileMetadataSchema = z
  .object({
    filename: z
      .string()
      .exactOptional()
      .openapi({ description: 'The filename of the file.', example: 'Wizards First Rule 01.mp3' }),
    ext: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file extension of the file.', example: '.mp3' }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The absolute path on the server of the file.',
        example:
          '/audiobooks/Terry Goodkind/Sword of Truth/Wizards First Rule/Terry Goodkind - SOT Bk01 - Wizards First Rule 01.mp3',
      }),
    relPath: z
      .string()
      .exactOptional()
      .openapi({
        description: "The path of the file, relative to the book's or podcast's folder.",
        example: 'Wizards First Rule 01.mp3',
      }),
    size: SizeSchema.exactOptional(),
    mtimeMs: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The time (in ms since POSIX epoch) when the file was last modified on disk.',
        example: 1632223180278,
      }),
    ctimeMs: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The time (in ms since POSIX epoch) when the file status was changed on disk.',
        example: 1645978261001,
      }),
    birthtimeMs: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time (in ms since POSIX epoch) when the file was created on disk. Will be 0 if unknown.',
        example: 0,
      }),
  })
  .nullable()
  .openapi({
    description:
      'The metadata for a file, including the path, size, and unix timestamps of the file.',
    required: [],
  })
  .openapi('FileMetadata')

const BookChapterSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'The ID of the book chapter.', example: 0 }),
    start: z
      .int()
      .exactOptional()
      .openapi({ description: 'When in the book (in seconds) the chapter starts.', example: 0 }),
    end: z
      .number()
      .exactOptional()
      .openapi({
        description: 'When in the book (in seconds) the chapter ends.',
        example: 6004.6675,
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The title of the chapter.',
        example: 'Wizards First Rule 01 Chapter 1',
      }),
  })
  .openapi({ description: 'A book chapter. Includes the title and timestamps.', required: [] })
  .openapi('BookChapter')

const AudioMetaTagsSchema = z
  .object({
    tagAlbum: z.string().nullable().exactOptional().openapi({ example: 'SOT Bk01' }),
    tagArtist: z.string().nullable().exactOptional().openapi({ example: 'Terry Goodkind' }),
    tagGenre: z.string().nullable().exactOptional().openapi({ example: 'Audiobook Fantasy' }),
    tagTitle: z.string().nullable().exactOptional().openapi({ example: 'Wizards First Rule 01' }),
    tagSeries: z.string().nullable().exactOptional(),
    tagSeriesPart: z.string().nullable().exactOptional(),
    tagTrack: z.string().nullable().exactOptional().openapi({ example: '01/20' }),
    tagDisc: z.string().nullable().exactOptional(),
    tagSubtitle: z.string().nullable().exactOptional(),
    tagAlbumArtist: z.string().nullable().exactOptional().openapi({ example: 'Terry Goodkind' }),
    tagDate: z.string().nullable().exactOptional(),
    tagComposer: z.string().nullable().exactOptional().openapi({ example: 'Terry Goodkind' }),
    tagPublisher: z.string().nullable().exactOptional(),
    tagComment: z.string().nullable().exactOptional(),
    tagDescription: z.string().nullable().exactOptional(),
    tagEncoder: z.string().nullable().exactOptional(),
    tagEncodedBy: z.string().nullable().exactOptional(),
    tagIsbn: z.string().nullable().exactOptional(),
    tagLanguage: z.string().nullable().exactOptional(),
    tagASIN: z.string().nullable().exactOptional(),
    tagOverdriveMediaMarker: z.string().nullable().exactOptional(),
    tagOriginalYear: z.string().nullable().exactOptional(),
    tagReleaseCountry: z.string().nullable().exactOptional(),
    tagReleaseType: z.string().nullable().exactOptional(),
    tagReleaseStatus: z.string().nullable().exactOptional(),
    tagISRC: z.string().nullable().exactOptional(),
    tagMusicBrainzTrackId: z.string().nullable().exactOptional(),
    tagMusicBrainzAlbumId: z.string().nullable().exactOptional(),
    tagMusicBrainzAlbumArtistId: z.string().nullable().exactOptional(),
    tagMusicBrainzArtistId: z.string().nullable().exactOptional(),
  })
  .openapi({
    description:
      'ID3 metadata tags pulled from the audio file on import. Only non-null tags will be returned in requests.',
    required: [],
  })
  .openapi('AudioMetaTags')

const AudioFileSchema = z
  .object({
    index: z
      .int()
      .exactOptional()
      .openapi({ description: 'The index of the audio file.', example: 1 }),
    ino: InodeSchema.exactOptional(),
    metadata: FileMetadataSchema.exactOptional(),
    addedAt: AddedAtSchema.exactOptional(),
    updatedAt: UpdatedAtSchema.exactOptional(),
    trackNumFromMeta: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The track number of the audio file as pulled from the file's metadata. Will be null if unknown.",
        example: 1,
      }),
    discNumFromMeta: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The disc number of the audio file as pulled from the file's metadata. Will be null if unknown.",
      }),
    trackNumFromFilename: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The track number of the audio file as determined from the file's name. Will be null if unknown.",
        example: 1,
      }),
    discNumFromFilename: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The disc number of the audio file as determined from the file's name. Will be null if unknown.",
      }),
    manuallyVerified: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the audio file has been manually verified by a user.' }),
    invalid: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the audio file is missing from the server.' }),
    exclude: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the audio file has been marked for exclusion.' }),
    error: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Any error with the audio file. Will be null if there is none.' }),
    format: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The format of the audio file.',
        example: 'MP2/3 (MPEG audio layer 2/3)',
      }),
    duration: DurationSecSchema.exactOptional(),
    bitRate: z
      .int()
      .exactOptional()
      .openapi({ description: 'The bit rate (in bit/s) of the audio file.', example: 64000 }),
    language: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The language of the audio file.' }),
    codec: z
      .string()
      .exactOptional()
      .openapi({ description: 'The codec of the audio file.', example: 'mp3' }),
    timeBase: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time base of the audio file.', example: '1/14112000' }),
    channels: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of channels the audio file has.', example: 2 }),
    channelLayout: z
      .string()
      .exactOptional()
      .openapi({ description: "The layout of the audio file's channels.", example: 'stereo' }),
    chapters: z
      .array(BookChapterSchema)
      .exactOptional()
      .openapi({
        description: 'If the audio file is part of an audiobook, the chapters the file contains.',
      }),
    embeddedCoverArt: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The type of embedded cover art in the audio file. Will be null if none exists.',
      }),
    metaTags: AudioMetaTagsSchema.exactOptional(),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The MIME type of the audio file.', example: 'audio/mpeg' }),
  })
  .openapi({
    description: 'An audio file for a book. Includes audio metadata and track numbers.',
    required: [],
  })
  .openapi('AudioFile')

const AudioTrackSchema = z
  .object({
    index: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The index of the audio track.', example: null }),
    startOffset: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The start offset of the audio track in seconds.', example: null }),
    duration: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The duration of the audio track in seconds.', example: null }),
    title: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The title of the audio track.', example: null }),
    contentUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL where the audio track content is located.',
        example: '`/api/items/${itemId}/file/${audioFile.ino}`',
      }),
    mimeType: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The MIME type of the audio track.', example: null }),
    codec: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The codec used for the audio track.', example: 'aac' }),
    metadata: FileMetadataSchema.exactOptional(),
  })
  .openapi({ description: 'Represents an audio track with various properties.', required: [] })
  .openapi('AudioTrack')

const PodcastEpisodeSchema = z
  .object({
    libraryItemId: LibraryItemIdSchema.exactOptional(),
    podcastId: PodcastIdSchema.exactOptional(),
    id: PodcastIdSchema.exactOptional(),
    oldEpisodeId: OldPodcastIdSchema.exactOptional(),
    index: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The index of the episode within the podcast.' }),
    season: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The season number of the episode.' }),
    episode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The episode number within the season.' }),
    episodeType: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The type of episode (e.g., full, trailer).' }),
    title: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The title of the episode.' }),
    subtitle: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The subtitle of the episode.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The description of the episode.' }),
    enclosure: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'The enclosure object containing additional episode data.' }),
    guid: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The globally unique identifier for the episode.' }),
    pubDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The publication date of the episode.' }),
    chapters: z
      .array(z.looseObject({}))
      .exactOptional()
      .openapi({ description: 'The chapters within the episode.' }),
    audioFile: AudioFileSchema.exactOptional(),
    publishedAt: CreatedAtSchema.exactOptional(),
    addedAt: AddedAtSchema.exactOptional(),
    updatedAt: UpdatedAtSchema.exactOptional(),
    audioTrack: AudioTrackSchema.exactOptional(),
    duration: DurationSecSchema.exactOptional(),
    size: SizeSchema.exactOptional(),
  })
  .openapi({ description: 'A single episode of a podcast.', required: [] })
  .openapi('PodcastEpisode')

const AutoDownloadEpisodesSchema = z
  .boolean()
  .openapi({ description: 'Whether episodes are automatically downloaded.' })
  .openapi('AutoDownloadEpisodes')

const PodcastSchema = z
  .object({
    id: PodcastIdSchema.exactOptional(),
    libraryItemId: LibraryItemIdSchema.exactOptional(),
    metadata: PodcastMetadataSchema.exactOptional(),
    coverPath: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "The file path to the podcast's cover image." }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The tags associated with the podcast.' }),
    episodes: z
      .array(PodcastEpisodeSchema)
      .exactOptional()
      .openapi({ description: 'The episodes of the podcast.' }),
    autoDownloadEpisodes: AutoDownloadEpisodesSchema.exactOptional(),
    autoDownloadSchedule: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The schedule for automatic episode downloads, in cron format.' }),
    lastEpisodeCheck: z
      .int()
      .exactOptional()
      .openapi({ description: 'The timestamp of the last episode check.' }),
    maxEpisodesToKeep: z
      .int()
      .exactOptional()
      .openapi({ description: 'The maximum number of episodes to keep.' }),
    maxNewEpisodesToDownload: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of new episodes to download when automatically downloading epsiodes.',
      }),
    lastCoverSearch: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The timestamp of the last cover search.' }),
    lastCoverSearchQuery: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The query used for the last cover search.' }),
    size: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total size of all episodes in bytes.' }),
    duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total duration of all episodes in seconds.' }),
    numTracks: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of tracks (episodes) in the podcast.' }),
    latestEpisodePublished: z
      .int()
      .exactOptional()
      .openapi({ description: 'The timestamp of the most recently published episode.' }),
  })
  .openapi({ description: 'A podcast containing multiple episodes.', required: [] })
  .openapi('Podcast')

const Author404Response = {
  description: 'Author not found.',
  content: { 'text/html': { schema: z.string().openapi({ example: 'Author not found.' }) } },
}

const Email200Response = {
  description: 'Successful response - Email',
  content: { 'application/json': { schema: EmailSettingsSchema } },
}

const Ereader200Response = {
  description: 'Successful response - Ereader',
  content: {
    'application/json': {
      schema: z
        .object({ ereaderDevices: z.array(EreaderDeviceObjectSchema).exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const Library200Response = {
  description: 'Library found.',
  content: { 'application/json': { schema: LibrarySchema } },
}

const Library404Response = {
  description: 'Library not found.',
  content: { 'text/html': { schema: z.string().openapi({ example: 'Library not found.' }) } },
}

const Notification404Response = {
  description: 'An admin user is required or notification with the given ID not found.',
  content: { 'text/html': { schema: z.string().openapi({ example: 'Series not found.' }) } },
}

const Notification200Response = {
  description: 'Notification endpoint success.',
  content: { 'text/html': { schema: z.string().openapi({ example: 'OK' }) } },
}

const Series404Response = {
  description: 'Series not found.',
  content: { 'text/html': { schema: z.string().openapi({ example: 'Series not found.' }) } },
}

const MinifiedParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'minified',
      description: 'Return minified items if true',
      schema: { type: 'integer', minimum: 0, example: 1 },
      required: false,
    },
    example: 1,
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'limit',
      description:
        'The number of items to return. This the size of a single page for the optional `page` query.',
      example: 10,
      schema: { type: 'integer', default: 0 },
      required: false,
    },
  })

const PageParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'page',
      description:
        'The page number (zero indexed) to return. If no limit is specified, then page will have no effect.',
      example: 0,
      schema: { type: 'integer', default: 0 },
      required: false,
    },
  })

const DescParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'desc',
      description: 'Return items in reversed order if true.',
      example: 0,
      schema: { type: 'integer', default: 0 },
      required: false,
    },
  })

const BearerAuthSecurityScheme = {
  description: 'Bearer authentication',
  type: 'http',
  scheme: 'bearer',
}

export const getApiAuthorsIdRoute = createRoute({
  method: 'get',
  path: '/api/authors/{id}',
  tags: ['Authors'],
  summary: 'Get an author by ID',
  description:
    "Get an author by ID. The author's books and series can be included in the response.",
  operationId: 'getAuthorById',
  request: {
    params: z.object({
      id: AuthorIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Author ID',
          required: true,
          schema: { $ref: '#/components/schemas/authorId' },
        },
      }),
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include',
            description:
              'A comma separated list of what to include with the author. The options are `items` and `series`. `series` will only have an effect if `items` is included. For example, the value `items,series` will include both library items and series.',
            allowReserved: true,
            schema: { type: 'string' },
            example: 'items,series',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getAuthorById OK',
      content: { 'application/json': { schema: AuthorSchema } },
    },
    404: Author404Response,
  },
})

export const deleteApiAuthorsIdRoute = createRoute({
  method: 'delete',
  path: '/api/authors/{id}',
  tags: ['Authors'],
  summary: 'Delete an author by ID',
  description: 'Delete an author by ID. This will remove the author from all books.',
  operationId: 'deleteAuthorById',
  request: {
    params: z.object({
      id: AuthorIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Author ID',
          required: true,
          schema: { $ref: '#/components/schemas/authorId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'deleteAuthorById OK',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Author deleted.' }) } },
    },
    404: Author404Response,
  },
})

export const patchApiAuthorsIdRoute = createRoute({
  method: 'patch',
  path: '/api/authors/{id}',
  tags: ['Authors'],
  summary: 'Update an author by ID',
  description:
    "Update an author by ID. The author's name and description can be updated. This endpoint will merge two authors if the new author name matches another author name in the database.",
  operationId: 'updateAuthorById',
  request: {
    params: z.object({
      id: AuthorIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Author ID',
          required: true,
          schema: { $ref: '#/components/schemas/authorId' },
        },
      }),
    }),
    body: {
      description: 'The author object to update.',
      content: {
        'application/json': {
          schema: z
            .object({
              name: AuthorNameSchema.exactOptional(),
              description: AuthorDescriptionSchema.exactOptional(),
              imagePath: AuthorImagePathSchema.exactOptional(),
              asin: AuthorAsinSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'updateAuthorById OK',
      content: {
        'application/json': {
          schema: z.xor([AuthorSchema, AuthorUpdatedSchema, AuthorMergedSchema]),
        },
      },
    },
    404: Author404Response,
  },
})

export const getApiAuthorsIdImageRoute = createRoute({
  method: 'get',
  path: '/api/authors/{id}/image',
  tags: ['Authors'],
  summary: 'Get an author image by author ID',
  description:
    'Get an author image by author ID. The image will be returned in the requested format and size.',
  operationId: 'getAuthorImageById',
  request: {
    params: z.object({
      id: AuthorIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Author ID',
          required: true,
          schema: { $ref: '#/components/schemas/authorId' },
        },
      }),
    }),
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            description: 'API token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ts',
            in: 'query',
            description: 'Updated at value',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'The author image to get.',
      content: {
        'application/json': {
          schema: z
            .object({
              width: ImageWidthSchema.exactOptional(),
              height: ImageHeightSchema.exactOptional(),
              format: ImageFormatSchema.exactOptional(),
              raw: ImageRawSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'getAuthorImageById OK',
      content: {
        'image/webp': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    404: Author404Response,
  },
  security: [],
})

export const postApiAuthorsIdImageRoute = createRoute({
  method: 'post',
  path: '/api/authors/{id}/image',
  tags: ['Authors'],
  summary: 'Add an author image to the server',
  description:
    'Add an author image to the server. The image will be downloaded from the provided URL and stored on the server.',
  operationId: 'addAuthorImageById',
  request: {
    params: z.object({
      id: AuthorIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Author ID',
          required: true,
          schema: { $ref: '#/components/schemas/authorId' },
        },
      }),
    }),
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            description: 'API token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ts',
            in: 'query',
            description: 'Updated at value',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'The author image to add by URL.',
      content: { 'application/json': { schema: ImageUrlSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'addAuthorImageById OK',
      content: { 'image/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    404: Author404Response,
  },
})

export const deleteApiAuthorsIdImageRoute = createRoute({
  method: 'delete',
  path: '/api/authors/{id}/image',
  tags: ['Authors'],
  summary: 'Delete an author image by author ID',
  description:
    'Delete an author image by author ID. This will remove the image from the server and the database.',
  operationId: 'deleteAuthorImageById',
  request: {
    params: z.object({
      id: AuthorIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Author ID',
          required: true,
          schema: { $ref: '#/components/schemas/authorId' },
        },
      }),
    }),
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            description: 'API token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ts',
            in: 'query',
            description: 'Updated at value',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'deleteAuthorImageById OK' }, 404: Author404Response },
})

export const patchApiAuthorsIdImageRoute = createRoute({
  method: 'patch',
  path: '/api/authors/{id}/image',
  tags: ['Authors'],
  summary: 'Update an author image by author ID',
  description:
    'Update an author image by author ID. The image will be resized if the width, height, or format is provided.',
  operationId: 'updateAuthorImageById',
  request: {
    params: z.object({
      id: AuthorIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Author ID',
          required: true,
          schema: { $ref: '#/components/schemas/authorId' },
        },
      }),
    }),
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            description: 'API token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ts',
            in: 'query',
            description: 'Updated at value',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'The author image to update.',
      content: {
        'application/json': {
          schema: z
            .object({
              width: ImageWidthSchema.exactOptional(),
              height: ImageHeightSchema.exactOptional(),
              format: ImageFormatSchema.exactOptional(),
              raw: ImageRawSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'updateAuthorImageById OK',
      content: { 'image/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    404: Author404Response,
  },
})

export const postApiAuthorsIdMatchRoute = createRoute({
  method: 'post',
  path: '/api/authors/{id}/match',
  tags: ['Authors'],
  summary: 'Match the author against Audible using quick match',
  description:
    "Match the author against Audible using quick match. Quick match updates the author's description and image (if no image already existed) with information from audible. Either `asin` or `q` must be provided, with `asin` taking priority if both are provided.",
  operationId: 'matchAuthorById',
  request: {
    params: z.object({
      id: AuthorIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Author ID',
          required: true,
          schema: { $ref: '#/components/schemas/authorId' },
        },
      }),
    }),
    body: {
      description: 'The author object to match against an online provider.',
      content: {
        'application/json': {
          schema: z
            .object({
              q: AuthorSearchNameSchema.exactOptional(),
              asin: AuthorAsinSchema.exactOptional(),
              region: RegionSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'matchAuthorById OK',
      content: { 'application/json': { schema: z.xor([AuthorSchema, AuthorUpdatedSchema]) } },
    },
    404: Author404Response,
  },
})

export const getApiEmailsSettingsRoute = createRoute({
  method: 'get',
  path: '/api/emails/settings',
  tags: ['Email'],
  summary: 'Get email settings',
  description: 'Get email settings for sending e-books to e-readers.',
  operationId: 'getEmailSettings',
  responses: { 200: Email200Response },
})

export const patchApiEmailsSettingsRoute = createRoute({
  method: 'patch',
  path: '/api/emails/settings',
  tags: ['Email'],
  summary: 'Update email settings',
  operationId: 'updateEmailSettings',
  request: {
    body: { content: { 'application/json': { schema: EmailSettingsSchema } }, required: true },
  },
  responses: { 200: Email200Response },
})

export const postApiEmailsTestRoute = createRoute({
  method: 'post',
  path: '/api/emails/test',
  tags: ['Email'],
  summary: 'Send test email',
  operationId: 'sendTestEmail',
  responses: { 200: { description: 'Successful response' } },
})

export const postApiEmailsEreaderDevicesRoute = createRoute({
  method: 'post',
  path: '/api/emails/ereader-devices',
  tags: ['Email'],
  summary: 'Update e-reader devices',
  operationId: 'updateEReaderDevices',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ ereaderDevices: z.array(EreaderDeviceObjectSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: Ereader200Response, 400: { description: 'Invalid payload' } },
})

export const postApiEmailsSendEbookToDeviceRoute = createRoute({
  method: 'post',
  path: '/api/emails/send-ebook-to-device',
  tags: ['Email'],
  summary: 'Send ebook to device',
  operationId: 'sendEBookToDevice',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              libraryItemId: LibraryItemIdSchema.exactOptional(),
              deviceName: EreaderNameSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful response' },
    400: { description: 'Invalid request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
  },
})

export const getApiLibrariesRoute = createRoute({
  method: 'get',
  path: '/api/libraries',
  tags: ['Libraries'],
  summary: 'Get all libraries on server',
  description: 'Get all libraries on server.',
  operationId: 'getLibraries',
  responses: {
    200: {
      description: 'getLibraries OK',
      content: {
        'application/json': {
          schema: z
            .object({ libraries: z.array(LibrarySchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postApiLibrariesRoute = createRoute({
  method: 'post',
  path: '/api/libraries',
  tags: ['Libraries'],
  summary: 'Create a new library on server',
  description: 'Create a new library on server.',
  operationId: 'createLibrary',
  request: {
    body: {
      description: 'The library object to create.',
      content: {
        'application/json': {
          schema: z
            .object({
              name: LibraryNameSchema,
              folders: LibraryFoldersSchema,
              displayOrder: LibraryDisplayOrderSchema.exactOptional(),
              icon: LibraryIconSchema.exactOptional(),
              mediaType: LibraryMediaTypeSchema.exactOptional(),
              provider: LibraryProviderSchema.exactOptional(),
              settings: LibrarySettingsSchema.exactOptional(),
            })
            .openapi({ required: ['name', 'folders'] }),
        },
      },
    },
  },
  responses: { 200: Library200Response, 404: Library404Response },
})

export const getApiLibrariesIdRoute = createRoute({
  method: 'get',
  path: '/api/libraries/{id}',
  tags: ['Libraries'],
  summary: 'Get a single library by ID on server',
  description: 'Get a single library by ID on server.',
  operationId: 'getLibraryById',
  request: {
    params: z.object({
      id: LibraryIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the library.',
          required: true,
          schema: { $ref: '#/components/schemas/libraryId' },
        },
      }),
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'include', schema: { type: 'string' }, required: false },
        }),
      minified: MinifiedParamsSchema,
    }),
  },
  responses: { 200: Library200Response, 404: Library404Response },
})

export const deleteApiLibrariesIdRoute = createRoute({
  method: 'delete',
  path: '/api/libraries/{id}',
  tags: ['Libraries'],
  summary: 'Delete a single library by ID on server',
  description: 'Delete a single library by ID on server and return the deleted object.',
  operationId: 'deleteLibraryById',
  request: {
    params: z.object({
      id: LibraryIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the library.',
          required: true,
          schema: { $ref: '#/components/schemas/libraryId' },
        },
      }),
    }),
  },
  responses: { 200: Library200Response, 404: Library404Response },
})

export const patchApiLibrariesIdRoute = createRoute({
  method: 'patch',
  path: '/api/libraries/{id}',
  tags: ['Libraries'],
  summary: 'Update a single library by ID on server',
  description: 'Update a single library by ID on server.',
  operationId: 'updateLibraryById',
  request: {
    params: z.object({
      id: LibraryIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the library.',
          required: true,
          schema: { $ref: '#/components/schemas/libraryId' },
        },
      }),
    }),
    body: {
      description: 'The library object to update.',
      content: {
        'application/json': {
          schema: z
            .object({
              name: LibraryNameSchema.exactOptional(),
              folders: LibraryFoldersSchema.exactOptional(),
              displayOrder: LibraryDisplayOrderSchema.exactOptional(),
              icon: LibraryIconSchema.exactOptional(),
              mediaType: LibraryMediaTypeSchema.exactOptional(),
              provider: LibraryProviderSchema.exactOptional(),
              settings: LibrarySettingsSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: Library200Response, 404: Library404Response },
})

export const getApiLibrariesIdAuthorsRoute = createRoute({
  method: 'get',
  path: '/api/libraries/{id}/authors',
  tags: ['Libraries'],
  summary: 'Get all authors in a library',
  description: 'Get all authors in a library by ID on server.',
  operationId: 'getLibraryAuthors',
  request: {
    params: z.object({
      id: LibraryIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the library.',
          required: true,
          schema: { $ref: '#/components/schemas/libraryId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'getLibraryAuthors OK',
      content: {
        'application/json': {
          schema: z
            .object({ authors: z.array(AuthorExpandedSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    404: Library404Response,
  },
})

export const getApiLibrariesIdItemsRoute = createRoute({
  method: 'get',
  path: '/api/libraries/{id}/items',
  tags: ['Libraries'],
  summary: 'Get items in a library',
  description: 'Get items in a library by ID on server.',
  operationId: 'getLibraryItems',
  request: {
    params: z.object({
      id: LibraryIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the library.',
          required: true,
          schema: { $ref: '#/components/schemas/libraryId' },
        },
      }),
    }),
    query: z.object({
      limit: LimitParamsSchema,
      page: PageParamsSchema,
      sort: z
        .string()
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            description: 'The field to sort by from the request.',
            example: 'numBooks',
            schema: { type: 'string', default: 'name' },
            required: false,
          },
        }),
      desc: DescParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter',
            description: 'The filter for the library.',
            example: 'media.metadata.title',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include',
            description:
              'The fields to include in the response. The only current option is `rssfeed`.',
            allowReserved: true,
            example: 'rssfeed',
            schema: { type: 'string' },
            required: false,
          },
        }),
      minified: MinifiedParamsSchema,
      collapseSeries: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collapseSeries',
            description: 'Whether to collapse series into a single cover',
            schema: { type: 'integer', default: 0 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getLibraryItems OK',
      content: {
        'application/json': {
          schema: z
            .object({
              results: z.array(LibraryItemBaseSchema).exactOptional(),
              total: TotalSchema.exactOptional(),
              limit: LimitSchema.exactOptional(),
              page: PageSchema.exactOptional(),
              sortBy: SortBySchema.exactOptional(),
              sortDesc: SortDescSchema.exactOptional(),
              filterBy: FilterBySchema.exactOptional(),
              mediaType: MediaTypeSchema.exactOptional(),
              minified: MinifiedSchema.exactOptional(),
              collapseSeries: CollapseSeriesSchema.exactOptional(),
              include: LibraryIncludeSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: Library404Response,
  },
})

export const deleteApiLibrariesIdIssuesRoute = createRoute({
  method: 'delete',
  path: '/api/libraries/{id}/issues',
  tags: ['Libraries'],
  summary: 'Delete items with issues in a library.',
  description:
    'Delete all items with issues in a library by library ID on the server. This only removes the items from the ABS database and does not delete media files.',
  operationId: 'deleteLibraryIssues',
  request: {
    params: z.object({
      id: LibraryIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the library.',
          required: true,
          schema: { $ref: '#/components/schemas/libraryId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'deleteLibraryIssues OK',
      content: {
        'application/json': { schema: z.string().openapi({ example: 'Issues deleted.' }) },
      },
    },
    404: Library404Response,
  },
})

export const getApiLibrariesIdSeriesRoute = createRoute({
  method: 'get',
  path: '/api/libraries/{id}/series',
  tags: ['Libraries'],
  summary: 'Get library series',
  description: 'Get series in a library. Filtering and sorting can be applied.',
  operationId: 'getLibrarySeries',
  request: {
    params: z.object({
      id: LibraryIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the library.',
          required: true,
          schema: { $ref: '#/components/schemas/libraryId' },
        },
      }),
    }),
    query: z.object({
      limit: LimitParamsSchema,
      page: PageParamsSchema,
      sort: z
        .enum(['name', 'numBooks', 'totalDuration', 'addedAt', 'lastBookAdded', 'lastBookUpdated'])
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            description: 'The field to sort by from the request.',
            example: 'numBooks',
            schema: {
              type: 'string',
              enum: [
                'name',
                'numBooks',
                'totalDuration',
                'addedAt',
                'lastBookAdded',
                'lastBookUpdated',
              ],
              default: 'name',
            },
            required: false,
          },
        }),
      desc: DescParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter',
            description: 'The filter for the library.',
            example: 'media.metadata.title',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include',
            description:
              'The fields to include in the response. The only current option is `rssfeed`.',
            allowReserved: true,
            example: 'rssfeed',
            schema: { type: 'string' },
            required: false,
          },
        }),
      minified: MinifiedParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'getLibrarySeries OK',
      content: {
        'application/json': {
          schema: z
            .object({
              results: z.array(SeriesBooksSchema).exactOptional(),
              total: TotalSchema.exactOptional(),
              limit: LimitSchema.exactOptional(),
              page: PageSchema.exactOptional(),
              sortBy: SortBySchema.exactOptional(),
              sortDesc: SortDescSchema.exactOptional(),
              filterBy: FilterBySchema.exactOptional(),
              minified: MinifiedSchema.exactOptional(),
              include: LibraryIncludeSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: Library404Response,
  },
})

export const getApiLibrariesIdSeriesSeriesIdRoute = createRoute({
  method: 'get',
  path: '/api/libraries/{id}/series/{seriesId}',
  tags: ['Libraries'],
  summary: 'Get single series in library',
  description:
    'Get a single series in a library by ID on server. This endpoint is deprecated and `/api/series/{id}` should be used instead.',
  operationId: 'getLibrarySeriesById',
  request: {
    params: z.object({
      id: LibraryIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the library.',
          required: true,
          schema: { $ref: '#/components/schemas/libraryId' },
        },
      }),
      seriesId: SeriesIdSchema.openapi({
        param: {
          name: 'seriesId',
          in: 'path',
          description: 'The ID of the series.',
          required: true,
          schema: { $ref: '#/components/schemas/seriesId' },
        },
      }),
    }),
    query: z.object({
      limit: LimitParamsSchema,
      page: PageParamsSchema,
      sort: z
        .enum(['name', 'numBooks', 'totalDuration', 'addedAt', 'lastBookAdded', 'lastBookUpdated'])
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            description: 'The field to sort by from the request.',
            example: 'numBooks',
            schema: {
              type: 'string',
              enum: [
                'name',
                'numBooks',
                'totalDuration',
                'addedAt',
                'lastBookAdded',
                'lastBookUpdated',
              ],
              default: 'name',
            },
            required: false,
          },
        }),
      desc: DescParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter',
            description: 'The filter for the library.',
            example: 'media.metadata.title',
            schema: { type: 'string' },
            required: false,
          },
        }),
      minified: MinifiedParamsSchema,
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include',
            description:
              'The fields to include in the response. The only current option is `rssfeed`.',
            allowReserved: true,
            example: 'rssfeed',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'getLibrarySeriesById OK',
      content: { 'application/json': { schema: SeriesWithProgressAndRSSSchema } },
    },
    404: Library404Response,
  },
  deprecated: true,
})

export const getApiNotificationsRoute = createRoute({
  method: 'get',
  path: '/api/notifications',
  tags: ['Notification'],
  summary: 'Get notification settings',
  description: 'Get all Apprise notification events and notification settings for server.',
  operationId: 'getNotifications',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({ events: z.array(NotificationEventSchema).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              settings: NotificationSettingsSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: Notification404Response,
  },
})

export const postApiNotificationsRoute = createRoute({
  method: 'post',
  path: '/api/notifications',
  tags: ['Notification'],
  summary: 'Create notification settings',
  description: 'Create or update Notification settings.',
  operationId: 'createNotification',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              libraryId: LibraryIdNullableSchema.exactOptional(),
              eventName: NotificationEventNameSchema,
              urls: UrlsSchema,
              titleTemplate: TitleTemplateSchema,
              bodyTemplate: BodyTemplateSchema,
              enabled: EnabledSchema.exactOptional(),
              type: NotificationTypeSchema.exactOptional(),
            })
            .openapi({ required: ['eventName', 'urls', 'titleTemplate', 'bodyTemplate'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ settings: NotificationSettingsSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    404: Notification404Response,
  },
})

export const patchApiNotificationsRoute = createRoute({
  method: 'patch',
  path: '/api/notifications',
  tags: ['Notification'],
  summary: 'Update select notification settings',
  description:
    'Update the URL, max failed attempts, and maximum notifications that can be queued for Apprise.',
  operationId: 'configureNotificationSettings',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              appriseApiUrl: AppriseApiUrlSchema.exactOptional(),
              maxFailedAttempts: MaxFailedAttemptsSchema.exactOptional(),
              maxNotificationQueue: MaxNotificationQueueSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: Notification200Response, 404: Notification404Response },
})

export const getApiNotificationdataRoute = createRoute({
  method: 'get',
  path: '/api/notificationdata',
  tags: ['Notification'],
  summary: 'Get notification event data',
  description: 'Get all Apprise notification event data for the server.',
  operationId: 'getNotificationEventData',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ events: z.array(NotificationEventSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    404: Notification404Response,
  },
})

export const getApiNotificationsTestRoute = createRoute({
  method: 'get',
  path: '/api/notifications/test',
  tags: ['Notification'],
  summary: 'Send general test notification',
  description: 'Send a test notification.',
  operationId: 'sendDefaultTestNotification',
  request: {
    query: z.object({
      fail: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'fail',
            description:
              'Whether to intentionally cause the notification to fail. `0` for false, `1` for true.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: Notification200Response, 404: Notification404Response },
})

export const deleteApiNotificationsIdRoute = createRoute({
  method: 'delete',
  path: '/api/notifications/{id}',
  tags: ['Notification'],
  summary: 'Delete a notification',
  description: 'Delete the notification by ID and return the notification settings.',
  operationId: 'deleteNotification',
  request: {
    params: z.object({
      id: NotificationIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the notification.',
          required: true,
          schema: { $ref: '#/components/schemas/notificationId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ settings: NotificationSettingsSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    404: Notification404Response,
  },
})

export const patchApiNotificationsIdRoute = createRoute({
  method: 'patch',
  path: '/api/notifications/{id}',
  tags: ['Notification'],
  summary: 'Update a notification',
  description: 'Update an individual Notification by ID',
  operationId: 'updateNotification',
  request: {
    params: z.object({
      id: NotificationIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the notification.',
          required: true,
          schema: { $ref: '#/components/schemas/notificationId' },
        },
      }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              libraryId: LibraryIdSchema.exactOptional(),
              eventName: NotificationEventNameSchema.exactOptional(),
              urls: UrlsSchema.exactOptional(),
              titleTemplate: TitleTemplateSchema.exactOptional(),
              bodyTemplate: BodyTemplateSchema.exactOptional(),
              enabled: EnabledSchema.exactOptional(),
              type: NotificationTypeSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ settings: NotificationSettingsSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    404: Notification404Response,
  },
})

export const getApiNotificationsIdTestRoute = createRoute({
  method: 'get',
  path: '/api/notifications/{id}/test',
  tags: ['Notification'],
  summary: 'Send a test notification',
  description: 'Send a test to the given notification by ID.',
  operationId: 'sendTestNotification',
  request: {
    params: z.object({
      id: NotificationIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the notification.',
          required: true,
          schema: { $ref: '#/components/schemas/notificationId' },
        },
      }),
    }),
  },
  responses: { 200: Notification200Response, 404: Notification404Response },
})

export const postApiPodcastsRoute = createRoute({
  method: 'post',
  path: '/api/podcasts',
  tags: ['Podcasts'],
  summary: 'Create a new podcast',
  operationId: 'createPodcast',
  request: { body: { content: { 'application/json': { schema: PodcastSchema } }, required: true } },
  responses: {
    200: {
      description: 'Successfully created a podcast',
      content: { 'application/json': { schema: PodcastSchema } },
    },
    400: { description: 'Bad request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
  },
})

export const postApiPodcastsFeedRoute = createRoute({
  method: 'post',
  path: '/api/podcasts/feed',
  tags: ['Podcasts'],
  summary: 'Get podcast feed',
  operationId: 'getPodcastFeed',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rssFeed: z
                .string()
                .exactOptional()
                .openapi({ description: 'The RSS feed URL of the podcast' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully retrieved podcast feed',
      content: {
        'application/json': {
          schema: z.object({ podcast: PodcastSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
  },
})

export const postApiPodcastsOpmlParseRoute = createRoute({
  method: 'post',
  path: '/api/podcasts/opml/parse',
  tags: ['Podcasts'],
  summary: 'Get feeds from OPML text',
  description: 'Parse OPML text and return an array of feeds',
  operationId: 'getFeedsFromOPMLText',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ opmlText: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully parsed OPML text and returned feeds',
      content: {
        'application/json': {
          schema: z
            .object({
              feeds: z
                .array(
                  z
                    .object({
                      title: z.string().exactOptional(),
                      feedUrl: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad request, OPML text not provided' },
    403: { description: 'Forbidden, user is not admin' },
  },
})

export const postApiPodcastsOpmlCreateRoute = createRoute({
  method: 'post',
  path: '/api/podcasts/opml/create',
  tags: ['Podcasts'],
  summary: 'Bulk create podcasts from OPML feed URLs',
  operationId: 'bulkCreatePodcastsFromOpmlFeedUrls',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              feeds: z.array(z.string()).exactOptional(),
              libraryId: LibraryIdSchema.exactOptional(),
              folderId: FolderIdSchema.exactOptional(),
              autoDownloadEpisodes: AutoDownloadEpisodesSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Successfully created podcasts from feed URLs' },
    400: { description: 'Bad request, invalid request body' },
    403: { description: 'Forbidden, user is not admin' },
    404: { description: 'Folder not found' },
  },
})

export const getApiPodcastsIdChecknewRoute = createRoute({
  method: 'get',
  path: '/api/podcasts/{id}/checknew',
  tags: ['Podcasts'],
  summary: 'Check and download new episodes',
  operationId: 'checkNewEpisodes',
  request: {
    params: z.object({
      id: PodcastIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Podcast ID',
          required: true,
          schema: { $ref: '#/components/schemas/podcastId' },
        },
      }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of episodes to download',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully checked and downloaded new episodes',
      content: {
        'application/json': {
          schema: z
            .object({ episodes: z.array(PodcastEpisodeSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
    500: { description: 'Server error' },
  },
})

export const getApiPodcastsIdClearQueueRoute = createRoute({
  method: 'get',
  path: '/api/podcasts/{id}/clear-queue',
  tags: ['Podcasts'],
  summary: 'Clear episode download queue',
  operationId: 'clearEpisodeDownloadQueue',
  request: {
    params: z.object({
      id: PodcastIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Podcast ID',
          required: true,
          schema: { $ref: '#/components/schemas/podcastId' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'Successfully cleared download queue' },
    403: { description: 'Forbidden' },
  },
})

export const getApiPodcastsIdDownloadsRoute = createRoute({
  method: 'get',
  path: '/api/podcasts/{id}/downloads',
  tags: ['Podcasts'],
  summary: 'Get episode downloads',
  operationId: 'getEpisodeDownloads',
  request: {
    params: z.object({
      id: PodcastIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Podcast ID',
          required: true,
          schema: { $ref: '#/components/schemas/podcastId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved episode downloads',
      content: {
        'application/json': {
          schema: z
            .object({ downloads: z.array(PodcastEpisodeSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    404: { description: 'Not found' },
  },
})

export const getApiPodcastsIdSearchEpisodeRoute = createRoute({
  method: 'get',
  path: '/api/podcasts/{id}/search-episode',
  tags: ['Podcasts'],
  summary: 'Find episode by title',
  operationId: 'findEpisode',
  request: {
    params: z.object({
      id: PodcastIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Podcast ID',
          required: true,
          schema: { $ref: '#/components/schemas/podcastId' },
        },
      }),
    }),
    query: z.object({
      title: z
        .string()
        .openapi({
          param: {
            name: 'title',
            in: 'query',
            description: 'Title of the episode to search for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully found episodes',
      content: {
        'application/json': {
          schema: z
            .object({ episodes: z.array(PodcastEpisodeSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    404: { description: 'Not found' },
    500: { description: 'Server error' },
  },
})

export const postApiPodcastsIdDownloadEpisodesRoute = createRoute({
  method: 'post',
  path: '/api/podcasts/{id}/download-episodes',
  tags: ['Podcasts'],
  summary: 'Download podcast episodes',
  operationId: 'downloadEpisodes',
  request: {
    params: z.object({
      id: PodcastIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Podcast ID',
          required: true,
          schema: { $ref: '#/components/schemas/podcastId' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: z.array(z.string()) } }, required: true },
  },
  responses: {
    200: { description: 'Successfully started episode download' },
    400: { description: 'Bad request' },
    403: { description: 'Forbidden' },
  },
})

export const postApiPodcastsIdMatchEpisodesRoute = createRoute({
  method: 'post',
  path: '/api/podcasts/{id}/match-episodes',
  tags: ['Podcasts'],
  summary: 'Quick match podcast episodes',
  operationId: 'quickMatchEpisodes',
  request: {
    params: z.object({
      id: PodcastIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Podcast ID',
          required: true,
          schema: { $ref: '#/components/schemas/podcastId' },
        },
      }),
    }),
    query: z.object({
      override: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'override',
            in: 'query',
            description: 'Override existing details if set to 1',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully matched episodes',
      content: {
        'application/json': {
          schema: z
            .object({ numEpisodesUpdated: z.int().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    403: { description: 'Forbidden' },
  },
})

export const getApiPodcastsIdEpisodeEpisodeIdRoute = createRoute({
  method: 'get',
  path: '/api/podcasts/{id}/episode/{episodeId}',
  tags: ['Podcasts'],
  summary: 'Get a specific podcast episode',
  operationId: 'getEpisode',
  request: {
    params: z.object({
      id: PodcastIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Podcast ID',
          required: true,
          schema: { $ref: '#/components/schemas/podcastId' },
        },
      }),
      episodeId: PodcastIdSchema.openapi({
        param: {
          name: 'episodeId',
          in: 'path',
          description: 'Episode ID',
          required: true,
          schema: { $ref: '#/components/schemas/podcastId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved episode',
      content: { 'application/json': { schema: PodcastEpisodeSchema } },
    },
    404: { description: 'Not found' },
  },
})

export const deleteApiPodcastsIdEpisodeEpisodeIdRoute = createRoute({
  method: 'delete',
  path: '/api/podcasts/{id}/episode/{episodeId}',
  tags: ['Podcasts'],
  summary: 'Remove a podcast episode',
  operationId: 'removeEpisode',
  request: {
    params: z.object({
      id: PodcastIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Podcast ID',
          required: true,
          schema: { $ref: '#/components/schemas/podcastId' },
        },
      }),
      episodeId: PodcastIdSchema.openapi({
        param: {
          name: 'episodeId',
          in: 'path',
          description: 'Episode ID',
          required: true,
          schema: { $ref: '#/components/schemas/podcastId' },
        },
      }),
    }),
    query: z.object({
      hard: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'hard',
            in: 'query',
            description: 'Hard delete the episode if set to 1',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully removed episode',
      content: { 'application/json': { schema: PodcastSchema } },
    },
    404: { description: 'Not found' },
    500: { description: 'Server error' },
  },
})

export const patchApiPodcastsIdEpisodeEpisodeIdRoute = createRoute({
  method: 'patch',
  path: '/api/podcasts/{id}/episode/{episodeId}',
  tags: ['Podcasts'],
  summary: 'Update a podcast episode',
  operationId: 'updateEpisode',
  request: {
    params: z.object({
      id: PodcastIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Podcast ID',
          required: true,
          schema: { $ref: '#/components/schemas/podcastId' },
        },
      }),
      episodeId: PodcastIdSchema.openapi({
        param: {
          name: 'episodeId',
          in: 'path',
          description: 'Episode ID',
          required: true,
          schema: { $ref: '#/components/schemas/podcastId' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: z.looseObject({}) } }, required: true },
  },
  responses: {
    200: {
      description: 'Successfully updated episode',
      content: { 'application/json': { schema: PodcastSchema } },
    },
    404: { description: 'Not found' },
  },
})

export const getApiSeriesIdRoute = createRoute({
  method: 'get',
  path: '/api/series/{id}',
  tags: ['Series'],
  summary: 'Get series',
  description: 'Get a series by ID.',
  operationId: 'getSeries',
  request: {
    params: z.object({
      id: SeriesIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the series.',
          required: true,
          schema: { $ref: '#/components/schemas/seriesId' },
        },
      }),
    }),
    body: {
      description: 'A comma separated list of what to include with the series.',
      content: {
        'application/json': {
          schema: z
            .object({
              include: z
                .enum(['progress', 'rssfeed', 'progress,rssfeed', 'rssfeed,progress'])
                .exactOptional()
                .openapi({
                  description: 'A comma separated list of what to include with the series.',
                  example: 'progress,rssfeed',
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
      content: { 'application/json': { schema: SeriesWithProgressAndRSSSchema } },
    },
    404: Series404Response,
  },
})

export const patchApiSeriesIdRoute = createRoute({
  method: 'patch',
  path: '/api/series/{id}',
  tags: ['Series'],
  summary: 'Update series',
  description: 'Update a series by ID.',
  operationId: 'updateSeries',
  request: {
    params: z.object({
      id: SeriesIdSchema.openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'The ID of the series.',
          required: true,
          schema: { $ref: '#/components/schemas/seriesId' },
        },
      }),
    }),
    body: {
      description: 'The series to update.',
      content: {
        'application/json': {
          schema: z
            .object({
              name: SeriesNameSchema.exactOptional(),
              description: SeriesDescriptionSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SeriesSchema } } },
    404: Series404Response,
  },
})
