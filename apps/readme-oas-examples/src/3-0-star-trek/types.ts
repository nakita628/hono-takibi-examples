type AnimalFull = {
  uid: string
  name: string
  earthAnimal?: boolean | undefined
  earthInsect?: boolean | undefined
  avian?: boolean | undefined
  canine?: boolean | undefined
  feline?: boolean | undefined
}
type AnimalFullResponse = { animal?: AnimalFull | undefined }
type Error = { code?: string | undefined; message?: string | undefined }
type ResponsePage = {
  pageNumber?: number | undefined
  pageSize?: number | undefined
  numberOfElements?: number | undefined
  totalElements?: number | undefined
  totalPages?: number | undefined
  firstPage?: boolean | undefined
  lastPage?: boolean | undefined
}
type ResponseSortDirection = 'ASC' | 'DESC'
type ResponseSortClause = { name: string; direction: ResponseSortDirection; clauseOrder: number }
type ResponseSort = { clauses?: ResponseSortClause[] | undefined }
type AnimalBase = {
  uid: string
  name: string
  earthAnimal?: boolean | undefined
  earthInsect?: boolean | undefined
  avian?: boolean | undefined
  canine?: boolean | undefined
  feline?: boolean | undefined
}
type AnimalBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  animals?: AnimalBase[] | undefined
}
type AstronomicalObjectType =
  | 'PLANET'
  | 'D_CLASS_PLANET'
  | 'H_CLASS_PLANET'
  | 'GAS_GIANT_PLANET'
  | 'K_CLASS_PLANET'
  | 'L_CLASS_PLANET'
  | 'M_CLASS_PLANET'
  | 'Y_CLASS_PLANET'
  | 'ROGUE_PLANET'
  | 'ARTIFICIAL_PLANET'
  | 'ASTEROID'
  | 'ASTEROIDAL_MOON'
  | 'ASTEROID_BELT'
  | 'CLUSTER'
  | 'COMET'
  | 'CONSTELLATION'
  | 'GALAXY'
  | 'MOON'
  | 'M_CLASS_MOON'
  | 'NEBULA'
  | 'PLANETOID'
  | 'D_CLASS_PLANETOID'
  | 'QUASAR'
  | 'STAR'
  | 'STAR_SYSTEM'
  | 'SECTOR'
  | 'REGION'
type AstronomicalObjectHeader = { uid: string; name: string }
type AstronomicalObjectBase = {
  uid: string
  name: string
  astronomicalObjectType: AstronomicalObjectType
  location?: AstronomicalObjectHeader | undefined
}
type AstronomicalObjectFull = {
  uid: string
  name: string
  astronomicalObjectType: AstronomicalObjectType
  location?: AstronomicalObjectBase | undefined
  astronomicalObjects?: AstronomicalObjectBase[] | undefined
}
type AstronomicalObjectFullResponse = { astronomicalObject?: AstronomicalObjectFull | undefined }
type AstronomicalObjectBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  astronomicalObjects?: AstronomicalObjectBase[] | undefined
}
type BookSeriesBase = {
  uid: string
  title: string
  publishedYearFrom?: number | undefined
  publishedMonthFrom?: number | undefined
  publishedYearTo?: number | undefined
  publishedMonthTo?: number | undefined
  numberOfBooks?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  miniseries?: boolean | undefined
  eBookSeries?: boolean | undefined
}
type Gender = 'F' | 'M'
type StaffBase = {
  uid: string
  name: string
  birthName?: string | undefined
  gender?: Gender | undefined
  dateOfBirth?: string | undefined
  placeOfBirth?: string | undefined
  dateOfDeath?: string | undefined
  placeOfDeath?: string | undefined
  artDepartment?: boolean | undefined
  artDirector?: boolean | undefined
  productionDesigner?: boolean | undefined
  cameraAndElectricalDepartment?: boolean | undefined
  cinematographer?: boolean | undefined
  castingDepartment?: boolean | undefined
  costumeDepartment?: boolean | undefined
  costumeDesigner?: boolean | undefined
  director?: boolean | undefined
  assistantOrSecondUnitDirector?: boolean | undefined
  exhibitAndAttractionStaff?: boolean | undefined
  filmEditor?: boolean | undefined
  linguist?: boolean | undefined
  locationStaff?: boolean | undefined
  makeupStaff?: boolean | undefined
  musicDepartment?: boolean | undefined
  composer?: boolean | undefined
  personalAssistant?: boolean | undefined
  producer?: boolean | undefined
  productionAssociate?: boolean | undefined
  productionStaff?: boolean | undefined
  publicationStaff?: boolean | undefined
  scienceConsultant?: boolean | undefined
  soundDepartment?: boolean | undefined
  specialAndVisualEffectsStaff?: boolean | undefined
  author?: boolean | undefined
  audioAuthor?: boolean | undefined
  calendarArtist?: boolean | undefined
  comicArtist?: boolean | undefined
  comicAuthor?: boolean | undefined
  comicColorArtist?: boolean | undefined
  comicInteriorArtist?: boolean | undefined
  comicInkArtist?: boolean | undefined
  comicPencilArtist?: boolean | undefined
  comicLetterArtist?: boolean | undefined
  comicStripArtist?: boolean | undefined
  gameArtist?: boolean | undefined
  gameAuthor?: boolean | undefined
  novelArtist?: boolean | undefined
  novelAuthor?: boolean | undefined
  referenceArtist?: boolean | undefined
  referenceAuthor?: boolean | undefined
  publicationArtist?: boolean | undefined
  publicationDesigner?: boolean | undefined
  publicationEditor?: boolean | undefined
  publicityArtist?: boolean | undefined
  cbsDigitalStaff?: boolean | undefined
  ilmProductionStaff?: boolean | undefined
  specialFeaturesStaff?: boolean | undefined
  storyEditor?: boolean | undefined
  studioExecutive?: boolean | undefined
  stuntDepartment?: boolean | undefined
  transportationDepartment?: boolean | undefined
  videoGameProductionStaff?: boolean | undefined
  writer?: boolean | undefined
}
type CompanyBase = {
  uid: string
  name: string
  broadcaster?: boolean | undefined
  collectibleCompany?: boolean | undefined
  conglomerate?: boolean | undefined
  digitalVisualEffectsCompany?: boolean | undefined
  distributor?: boolean | undefined
  gameCompany?: boolean | undefined
  filmEquipmentCompany?: boolean | undefined
  makeUpEffectsStudio?: boolean | undefined
  mattePaintingCompany?: boolean | undefined
  modelAndMiniatureEffectsCompany?: boolean | undefined
  postProductionCompany?: boolean | undefined
  productionCompany?: boolean | undefined
  propCompany?: boolean | undefined
  recordLabel?: boolean | undefined
  specialEffectsCompany?: boolean | undefined
  tvAndFilmProductionCompany?: boolean | undefined
  videoGameCompany?: boolean | undefined
}
type BloodType = 'B_NEGATIVE' | 'O_NEGATIVE' | 'T_NEGATIVE'
type MaritalStatus =
  | 'SINGLE'
  | 'ENGAGED'
  | 'MARRIED'
  | 'DIVORCED'
  | 'REMARRIED'
  | 'SEPARATED'
  | 'WIDOWED'
  | 'CAPTAINS_WOMAN'
type CharacterBase = {
  uid: string
  name: string
  gender?: Gender | undefined
  yearOfBirth?: number | undefined
  monthOfBirth?: number | undefined
  dayOfBirth?: number | undefined
  placeOfBirth?: string | undefined
  yearOfDeath?: number | undefined
  monthOfDeath?: number | undefined
  dayOfDeath?: number | undefined
  placeOfDeath?: string | undefined
  height?: number | undefined
  weight?: number | undefined
  deceased?: boolean | undefined
  bloodType?: BloodType | undefined
  maritalStatus?: MaritalStatus | undefined
  serialNumber?: string | undefined
  hologramActivationDate?: string | undefined
  hologramStatus?: string | undefined
  hologramDateStatus?: string | undefined
  hologram?: boolean | undefined
  fictionalCharacter?: boolean | undefined
  mirror?: boolean | undefined
  alternateReality?: boolean | undefined
}
type ReferenceType = 'ASIN' | 'ISBN'
type Reference = {
  uid?: string | undefined
  referenceType?: ReferenceType | undefined
  referenceNumber?: string | undefined
}
type BookCollectionBase = {
  uid?: string | undefined
  title?: string | undefined
  publishedYear?: number | undefined
  publishedMonth?: number | undefined
  publishedDay?: number | undefined
  numberOfPages?: number | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
}
type BookFull = {
  uid: string
  title: string
  publishedYear?: number | undefined
  publishedMonth?: number | undefined
  publishedDay?: number | undefined
  numberOfPages?: number | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  novel: boolean
  referenceBook: boolean
  biographyBook: boolean
  rolePlayingBook: boolean
  eBook: boolean
  anthology: boolean
  novelization: boolean
  audiobook: boolean
  audiobookAbridged: boolean
  audiobookPublishedYear?: number | undefined
  audiobookPublishedMonth?: number | undefined
  audiobookPublishedDay?: number | undefined
  audiobookRunTime?: number | undefined
  productionNumber?: string | undefined
  bookSeries?: BookSeriesBase[] | undefined
  authors?: StaffBase[] | undefined
  artists?: StaffBase[] | undefined
  editors?: StaffBase[] | undefined
  audiobookNarrators?: StaffBase[] | undefined
  publishers?: CompanyBase[] | undefined
  audiobookPublishers?: CompanyBase[] | undefined
  characters?: CharacterBase[] | undefined
  references?: Reference[] | undefined
  audiobookReferences?: Reference[] | undefined
  bookCollections?: BookCollectionBase[] | undefined
}
type BookFullResponse = { book?: BookFull | undefined }
type BookBase = {
  uid: string
  title: string
  publishedYear?: number | undefined
  publishedMonth?: number | undefined
  publishedDay?: number | undefined
  numberOfPages?: number | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  novel: boolean
  referenceBook: boolean
  biographyBook: boolean
  rolePlayingBook: boolean
  eBook: boolean
  anthology: boolean
  novelization: boolean
  audiobook: boolean
  audiobookAbridged: boolean
  audiobookPublishedYear?: number | undefined
  audiobookPublishedMonth?: number | undefined
  audiobookPublishedDay?: number | undefined
  audiobookRunTime?: number | undefined
  productionNumber?: string | undefined
}
type BookBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  books?: BookBase[] | undefined
}
type BookCollectionFull = {
  uid?: string | undefined
  title?: string | undefined
  publishedYear?: number | undefined
  publishedMonth?: number | undefined
  publishedDay?: number | undefined
  numberOfPages?: number | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  bookSeries?: BookSeriesBase[] | undefined
  authors?: StaffBase[] | undefined
  artists?: StaffBase[] | undefined
  editors?: StaffBase[] | undefined
  publishers?: CompanyBase[] | undefined
  characters?: CharacterBase[] | undefined
  references?: Reference[] | undefined
  books?: BookBase[] | undefined
}
type BookCollectionFullResponse = { bookCollection?: BookCollectionFull | undefined }
type BookCollectionBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  bookCollections?: BookCollectionBase[] | undefined
}
type BookSeriesFull = {
  uid: string
  title: string
  publishedYearFrom?: number | undefined
  publishedMonthFrom?: number | undefined
  publishedYearTo?: number | undefined
  publishedMonthTo?: number | undefined
  numberOfBooks?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  miniseries?: boolean | undefined
  eBookSeries?: boolean | undefined
  parentSeries?: BookSeriesBase[] | undefined
  childSeries?: BookSeriesBase[] | undefined
  publishers?: CompanyBase[] | undefined
  books?: BookBase[] | undefined
}
type BookSeriesFullResponse = { bookSeries?: BookSeriesFull | undefined }
type BookSeriesBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  bookSeries?: BookSeriesBase[] | undefined
}
type PerformerBase = {
  uid: string
  name: string
  birthName?: string | undefined
  gender?: Gender | undefined
  dateOfBirth?: string | undefined
  placeOfBirth?: string | undefined
  dateOfDeath?: string | undefined
  placeOfDeath?: string | undefined
  animalPerformer?: boolean | undefined
  disPerformer?: boolean | undefined
  ds9Performer?: boolean | undefined
  entPerformer?: boolean | undefined
  filmPerformer?: boolean | undefined
  standInPerformer?: boolean | undefined
  stuntPerformer?: boolean | undefined
  tasPerformer?: boolean | undefined
  tngPerformer?: boolean | undefined
  tosPerformer?: boolean | undefined
  videoGamePerformer?: boolean | undefined
  voicePerformer?: boolean | undefined
  voyPerformer?: boolean | undefined
}
type SeriesHeader = { uid: string; title: string }
type SeasonHeader = { uid: string; title: string }
type EpisodeBase = {
  uid: string
  title: string
  titleGerman?: string | undefined
  titleItalian?: string | undefined
  titleJapanese?: string | undefined
  series?: SeriesHeader | undefined
  season?: SeasonHeader | undefined
  seasonNumber?: number | undefined
  episodeNumber?: number | undefined
  productionSerialNumber?: string | undefined
  featureLength?: boolean | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  usAirDate?: string | undefined
  finalScriptDate?: string | undefined
}
type StaffHeader = { uid: string; name: string }
type MovieBase = {
  uid: string
  title: string
  mainDirector?: StaffHeader | undefined
  titleBulgarian?: string | undefined
  titleCatalan?: string | undefined
  titleChineseTraditional?: string | undefined
  titleGerman?: string | undefined
  titleItalian?: string | undefined
  titleJapanese?: string | undefined
  titlePolish?: string | undefined
  titleRussian?: string | undefined
  titleSerbian?: string | undefined
  titleSpanish?: string | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  usReleaseDate?: string | undefined
}
type CharacterSpecies = {
  uid?: string | undefined
  name?: string | undefined
  numerator?: number | undefined
  denominator?: number | undefined
}
type CharacterHeader = { uid: string; name: string }
type CharacterRelation = {
  type?: string | undefined
  source?: CharacterHeader | undefined
  target?: CharacterHeader | undefined
}
type TitleBase = {
  uid: string
  name: string
  militaryRank?: boolean | undefined
  fleetRank?: boolean | undefined
  religiousTitle?: boolean | undefined
  position?: boolean | undefined
  mirror?: boolean | undefined
}
type OccupationBase = {
  uid: string
  name: string
  legalOccupation?: boolean | undefined
  medicalOccupation?: boolean | undefined
  scientificOccupation?: boolean | undefined
}
type OrganizationBase = {
  uid: string
  name: string
  government?: boolean | undefined
  intergovernmentalOrganization?: boolean | undefined
  researchOrganization?: boolean | undefined
  sportOrganization?: boolean | undefined
  medicalOrganization?: boolean | undefined
  militaryOrganization?: boolean | undefined
  militaryUnit?: boolean | undefined
  governmentAgency?: boolean | undefined
  lawEnforcementAgency?: boolean | undefined
  prisonOrPenalColony?: boolean | undefined
  mirror?: boolean | undefined
  alternateReality?: boolean | undefined
}
type CharacterFull = {
  uid: string
  name: string
  gender?: Gender | undefined
  yearOfBirth?: number | undefined
  monthOfBirth?: number | undefined
  dayOfBirth?: number | undefined
  placeOfBirth?: string | undefined
  yearOfDeath?: number | undefined
  monthOfDeath?: number | undefined
  dayOfDeath?: number | undefined
  placeOfDeath?: string | undefined
  height?: number | undefined
  weight?: number | undefined
  deceased?: boolean | undefined
  bloodType?: BloodType | undefined
  maritalStatus?: MaritalStatus | undefined
  serialNumber?: string | undefined
  hologramActivationDate?: string | undefined
  hologramStatus?: string | undefined
  hologramDateStatus?: string | undefined
  hologram?: boolean | undefined
  fictionalCharacter?: boolean | undefined
  mirror?: boolean | undefined
  alternateReality?: boolean | undefined
  performers?: PerformerBase[] | undefined
  episodes?: EpisodeBase[] | undefined
  movies?: MovieBase[] | undefined
  characterSpecies?: CharacterSpecies[] | undefined
  characterRelations?: CharacterRelation[] | undefined
  titles?: TitleBase[] | undefined
  occupations?: OccupationBase[] | undefined
  organizations?: OrganizationBase[] | undefined
}
type CharacterFullResponse = { character?: CharacterFull | undefined }
type CharacterBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  characters?: CharacterBase[] | undefined
}
type ComicSeriesBase = {
  uid: string
  title: string
  publishedYearFrom?: number | undefined
  publishedMonthFrom?: number | undefined
  publishedDayFrom?: number | undefined
  publishedYearTo?: number | undefined
  publishedMonthTo?: number | undefined
  publishedDayTo?: number | undefined
  numberOfIssues?: number | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  miniseries?: boolean | undefined
  photonovelSeries?: boolean | undefined
}
type ComicCollectionBase = {
  uid: string
  title: string
  publishedYear?: number | undefined
  publishedMonth?: number | undefined
  publishedDay?: number | undefined
  coverYear?: number | undefined
  coverMonth?: number | undefined
  coverDay?: number | undefined
  numberOfPages?: number | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  photonovel?: boolean | undefined
}
type ComicsFull = {
  uid: string
  title: string
  publishedYear?: number | undefined
  publishedMonth?: number | undefined
  publishedDay?: number | undefined
  coverYear?: number | undefined
  coverMonth?: number | undefined
  coverDay?: number | undefined
  numberOfPages?: number | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  photonovel?: boolean | undefined
  adaptation?: boolean | undefined
  comicSeries?: ComicSeriesBase[] | undefined
  writers?: StaffBase[] | undefined
  artists?: StaffBase[] | undefined
  editors?: StaffBase[] | undefined
  staff?: StaffBase[] | undefined
  publishers?: CompanyBase[] | undefined
  characters?: CharacterBase[] | undefined
  references?: Reference[] | undefined
  comicCollections?: ComicCollectionBase[] | undefined
}
type ComicsFullResponse = { comics?: ComicsFull | undefined }
type ComicsBase = {
  uid: string
  title: string
  publishedYear?: number | undefined
  publishedMonth?: number | undefined
  publishedDay?: number | undefined
  coverYear?: number | undefined
  coverMonth?: number | undefined
  coverDay?: number | undefined
  numberOfPages?: number | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  photonovel?: boolean | undefined
  adaptation?: boolean | undefined
}
type ComicsBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  comics?: ComicsBase[] | undefined
}
type ComicCollectionFull = {
  uid: string
  title: string
  publishedYear?: number | undefined
  publishedMonth?: number | undefined
  publishedDay?: number | undefined
  coverYear?: number | undefined
  coverMonth?: number | undefined
  coverDay?: number | undefined
  numberOfPages?: number | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  photonovel?: boolean | undefined
  comicSeries?: ComicSeriesBase[] | undefined
  writers?: StaffBase[] | undefined
  artists?: StaffBase[] | undefined
  editors?: StaffBase[] | undefined
  staff?: StaffBase[] | undefined
  publishers?: CompanyBase[] | undefined
  characters?: CharacterBase[] | undefined
  references?: Reference[] | undefined
  comics?: ComicsBase[] | undefined
}
type ComicCollectionFullResponse = { comicCollection?: ComicCollectionFull | undefined }
type ComicCollectionBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  comicCollections?: ComicCollectionBase[] | undefined
}
type ComicSeriesFull = {
  uid: string
  title: string
  publishedYearFrom?: number | undefined
  publishedMonthFrom?: number | undefined
  publishedDayFrom?: number | undefined
  publishedYearTo?: number | undefined
  publishedMonthTo?: number | undefined
  publishedDayTo?: number | undefined
  numberOfIssues?: number | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  miniseries?: boolean | undefined
  photonovelSeries?: boolean | undefined
  parentSeries?: ComicSeriesBase[] | undefined
  childSeries?: ComicSeriesBase[] | undefined
  publishers?: CompanyBase[] | undefined
  comics?: ComicsBase[] | undefined
}
type ComicSeriesFullResponse = { comicSeries?: ComicSeriesFull | undefined }
type ComicSeriesBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  comicSeries?: ComicSeriesBase[] | undefined
}
type ComicStripFull = {
  uid: string
  title: string
  periodical?: string | undefined
  publishedYearFrom?: number | undefined
  publishedMonthFrom?: number | undefined
  publishedDayFrom?: number | undefined
  publishedYearTo?: number | undefined
  publishedMonthTo?: number | undefined
  publishedDayTo?: number | undefined
  numberOfPages?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  comicSeries?: ComicSeriesBase[] | undefined
  writers?: StaffBase[] | undefined
  artists?: StaffBase[] | undefined
  characters?: CharacterBase[] | undefined
}
type ComicStripFullResponse = { comicStrip?: ComicStripFull | undefined }
type ComicStripBase = {
  uid: string
  title: string
  periodical?: string | undefined
  publishedYearFrom?: number | undefined
  publishedMonthFrom?: number | undefined
  publishedDayFrom?: number | undefined
  publishedYearTo?: number | undefined
  publishedMonthTo?: number | undefined
  publishedDayTo?: number | undefined
  numberOfPages?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
}
type ComicStripBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  comicStrips?: ComicStripBase[] | undefined
}
type CompanyFull = {
  uid: string
  name: string
  broadcaster?: boolean | undefined
  collectibleCompany?: boolean | undefined
  conglomerate?: boolean | undefined
  digitalVisualEffectsCompany?: boolean | undefined
  distributor?: boolean | undefined
  gameCompany?: boolean | undefined
  filmEquipmentCompany?: boolean | undefined
  makeUpEffectsStudio?: boolean | undefined
  mattePaintingCompany?: boolean | undefined
  modelAndMiniatureEffectsCompany?: boolean | undefined
  postProductionCompany?: boolean | undefined
  productionCompany?: boolean | undefined
  propCompany?: boolean | undefined
  recordLabel?: boolean | undefined
  specialEffectsCompany?: boolean | undefined
  tvAndFilmProductionCompany?: boolean | undefined
  videoGameCompany?: boolean | undefined
}
type CompanyFullResponse = { company?: CompanyFull | undefined }
type CompanyBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  companies?: CompanyBase[] | undefined
}
type LocationBase = {
  uid: string
  name: string
  earthlyLocation?: boolean | undefined
  fictionalLocation?: boolean | undefined
  religiousLocation?: boolean | undefined
  geographicalLocation?: boolean | undefined
  bodyOfWater?: boolean | undefined
  country?: boolean | undefined
  subnationalEntity?: boolean | undefined
  settlement?: boolean | undefined
  usSettlement?: boolean | undefined
  bajoranSettlement?: boolean | undefined
  colony?: boolean | undefined
  landform?: boolean | undefined
  landmark?: boolean | undefined
  road?: boolean | undefined
  structure?: boolean | undefined
  shipyard?: boolean | undefined
  buildingInterior?: boolean | undefined
  establishment?: boolean | undefined
  medicalEstablishment?: boolean | undefined
  ds9Establishment?: boolean | undefined
  school?: boolean | undefined
  mirror?: boolean | undefined
  alternateReality?: boolean | undefined
}
type ConflictFull = {
  uid: string
  name: string
  yearFrom?: number | undefined
  yearTo?: number | undefined
  earthConflict?: boolean | undefined
  federationWar?: boolean | undefined
  klingonWar?: boolean | undefined
  dominionWarBattle?: boolean | undefined
  alternateReality?: boolean | undefined
  locations?: LocationBase[] | undefined
  firstSideBelligerents?: OrganizationBase[] | undefined
  firstSideCommanders?: CharacterBase[] | undefined
  secondSideBelligerents?: OrganizationBase[] | undefined
  secondSideCommanders?: CharacterBase[] | undefined
}
type ConflictFullResponse = { conflict?: ConflictFull | undefined }
type ConflictBase = {
  uid: string
  name: string
  yearFrom?: number | undefined
  yearTo?: number | undefined
  earthConflict?: boolean | undefined
  federationWar?: boolean | undefined
  klingonWar?: boolean | undefined
  dominionWarBattle?: boolean | undefined
  alternateReality?: boolean | undefined
}
type ConflictBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  conflicts?: ConflictBase[] | undefined
}
type ElementFull = {
  uid: string
  name: string
  symbol?: string | undefined
  atomicNumber?: number | undefined
  atomicWeight?: number | undefined
  transuranium?: boolean | undefined
  gammaSeries?: boolean | undefined
  hypersonicSeries?: boolean | undefined
  megaSeries?: boolean | undefined
  omegaSeries?: boolean | undefined
  transonicSeries?: boolean | undefined
  worldSeries?: boolean | undefined
}
type ElementFullResponse = { element?: ElementFull | undefined }
type ElementBase = {
  uid: string
  name: string
  symbol?: string | undefined
  atomicNumber?: number | undefined
  atomicWeight?: number | undefined
  transuranium?: boolean | undefined
  gammaSeries?: boolean | undefined
  hypersonicSeries?: boolean | undefined
  megaSeries?: boolean | undefined
  omegaSeries?: boolean | undefined
  transonicSeries?: boolean | undefined
  worldSeries?: boolean | undefined
}
type ElementBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  elements?: ElementBase[] | undefined
}
type CompanyHeader = { uid: string; name: string }
type SeriesBase = {
  uid: string
  title: string
  abbreviation: string
  productionStartYear?: number | undefined
  productionEndYear?: number | undefined
  originalRunStartDate?: string | undefined
  originalRunEndDate?: string | undefined
  seasonsCount?: number | undefined
  episodesCount?: number | undefined
  featureLengthEpisodesCount?: number | undefined
  productionCompany?: CompanyHeader | undefined
  originalBroadcaster?: CompanyHeader | undefined
}
type SeasonBase = {
  uid: string
  title: string
  series?: SeriesHeader | undefined
  seasonNumber?: number | undefined
  numberOfEpisodes?: number | undefined
}
type EpisodeFull = {
  uid: string
  title: string
  titleGerman?: string | undefined
  titleItalian?: string | undefined
  titleJapanese?: string | undefined
  series?: SeriesBase | undefined
  season?: SeasonBase | undefined
  seasonNumber?: number | undefined
  episodeNumber?: number | undefined
  productionSerialNumber?: string | undefined
  featureLength?: boolean | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  usAirDate?: string | undefined
  finalScriptDate?: string | undefined
  writers?: StaffBase[] | undefined
  teleplayAuthors?: StaffBase[] | undefined
  storyAuthors?: StaffBase[] | undefined
  directors?: StaffBase[] | undefined
  performers?: PerformerBase[] | undefined
  stuntPerformers?: PerformerBase[] | undefined
  standInPerformers?: PerformerBase[] | undefined
  characters?: CharacterBase[] | undefined
}
type EpisodeFullResponse = { episode?: EpisodeFull | undefined }
type EpisodeBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  episodes?: EpisodeBase[] | undefined
}
type FoodFull = {
  uid: string
  name: string
  earthlyOrigin?: boolean | undefined
  dessert?: boolean | undefined
  fruit?: boolean | undefined
  herbOrSpice?: boolean | undefined
  sauce?: boolean | undefined
  soup?: boolean | undefined
  beverage?: boolean | undefined
  alcoholicBeverage?: boolean | undefined
  juice?: boolean | undefined
  tea?: boolean | undefined
}
type FoodFullResponse = { food?: FoodFull | undefined }
type FoodBase = {
  uid: string
  name: string
  earthlyOrigin?: boolean | undefined
  dessert?: boolean | undefined
  fruit?: boolean | undefined
  herbOrSpice?: boolean | undefined
  sauce?: boolean | undefined
  soup?: boolean | undefined
  beverage?: boolean | undefined
  alcoholicBeverage?: boolean | undefined
  juice?: boolean | undefined
  tea?: boolean | undefined
}
type FoodBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  foods?: FoodBase[] | undefined
}
type LiteratureFull = {
  uid: string
  title: string
  earthlyOrigin?: boolean | undefined
  shakespeareanWork?: boolean | undefined
  report?: boolean | undefined
  scientificLiterature?: boolean | undefined
  technicalManual?: boolean | undefined
  religiousLiterature?: boolean | undefined
}
type LiteratureFullResponse = { literature?: LiteratureFull | undefined }
type LiteratureBase = {
  uid: string
  title: string
  earthlyOrigin?: boolean | undefined
  shakespeareanWork?: boolean | undefined
  report?: boolean | undefined
  scientificLiterature?: boolean | undefined
  technicalManual?: boolean | undefined
  religiousLiterature?: boolean | undefined
}
type LiteratureBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  literature?: LiteratureBase[] | undefined
}
type LocationFull = {
  uid: string
  name: string
  earthlyLocation?: boolean | undefined
  fictionalLocation?: boolean | undefined
  religiousLocation?: boolean | undefined
  geographicalLocation?: boolean | undefined
  bodyOfWater?: boolean | undefined
  country?: boolean | undefined
  subnationalEntity?: boolean | undefined
  settlement?: boolean | undefined
  usSettlement?: boolean | undefined
  bajoranSettlement?: boolean | undefined
  colony?: boolean | undefined
  landform?: boolean | undefined
  landmark?: boolean | undefined
  road?: boolean | undefined
  structure?: boolean | undefined
  shipyard?: boolean | undefined
  buildingInterior?: boolean | undefined
  establishment?: boolean | undefined
  medicalEstablishment?: boolean | undefined
  ds9Establishment?: boolean | undefined
  school?: boolean | undefined
  mirror?: boolean | undefined
  alternateReality?: boolean | undefined
}
type LocationFullResponse = { location?: LocationFull | undefined }
type LocationBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  locations?: LocationBase[] | undefined
}
type MagazineSeriesBase = {
  uid: string
  title: string
  publishedYearFrom?: number | undefined
  publishedMonthFrom?: number | undefined
  publishedYearTo?: number | undefined
  publishedMonthTo?: number | undefined
  numberOfIssues?: number | undefined
}
type MagazineFull = {
  uid: string
  title: string
  publishedYear?: number | undefined
  publishedMonth?: number | undefined
  publishedDay?: number | undefined
  coverYear?: number | undefined
  coverMonth?: number | undefined
  coverDay?: number | undefined
  numberOfPages?: number | undefined
  issueNumber?: string | undefined
  magazineSeries?: MagazineSeriesBase[] | undefined
  editors?: StaffBase[] | undefined
  publishers?: CompanyBase[] | undefined
}
type MagazineFullResponse = { magazine?: MagazineFull | undefined }
type MagazineBase = {
  uid: string
  title: string
  publishedYear?: number | undefined
  publishedMonth?: number | undefined
  publishedDay?: number | undefined
  coverYear?: number | undefined
  coverMonth?: number | undefined
  coverDay?: number | undefined
  numberOfPages?: number | undefined
  issueNumber?: string | undefined
}
type MagazineBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  magazines?: MagazineBase[] | undefined
}
type MagazineSeriesFull = {
  uid: string
  title: string
  publishedYearFrom?: number | undefined
  publishedMonthFrom?: number | undefined
  publishedYearTo?: number | undefined
  publishedMonthTo?: number | undefined
  numberOfIssues?: number | undefined
  publishers?: CompanyBase[] | undefined
  editors?: StaffBase[] | undefined
  magazines?: MagazineBase[] | undefined
}
type MagazineSeriesFullResponse = { magazineSeries?: MagazineSeriesFull | undefined }
type MagazineSeriesBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  magazineSeries?: MagazineSeriesBase[] | undefined
}
type MaterialFull = {
  uid: string
  name: string
  chemicalCompound?: boolean | undefined
  biochemicalCompound?: boolean | undefined
  drug?: boolean | undefined
  poisonousSubstance?: boolean | undefined
  explosive?: boolean | undefined
  gemstone?: boolean | undefined
  alloyOrComposite?: boolean | undefined
  fuel?: boolean | undefined
  mineral?: boolean | undefined
  preciousMaterial?: boolean | undefined
}
type MaterialFullResponse = { material?: MaterialFull | undefined }
type MaterialBase = {
  uid: string
  name: string
  chemicalCompound?: boolean | undefined
  biochemicalCompound?: boolean | undefined
  drug?: boolean | undefined
  poisonousSubstance?: boolean | undefined
  explosive?: boolean | undefined
  gemstone?: boolean | undefined
  alloyOrComposite?: boolean | undefined
  fuel?: boolean | undefined
  mineral?: boolean | undefined
  preciousMaterial?: boolean | undefined
}
type MaterialBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  materials?: MaterialBase[] | undefined
}
type MedicalConditionFull = {
  uid: string
  name: string
  psychologicalCondition?: boolean | undefined
}
type MedicalConditionFullResponse = { medicalCondition?: MedicalConditionFull | undefined }
type MedicalConditionBase = {
  uid: string
  name: string
  psychologicalCondition?: boolean | undefined
}
type MedicalConditionBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  medicalConditions?: MedicalConditionBase[] | undefined
}
type MovieFull = {
  uid: string
  title: string
  mainDirector?: StaffBase | undefined
  titleBulgarian?: string | undefined
  titleCatalan?: string | undefined
  titleChineseTraditional?: string | undefined
  titleGerman?: string | undefined
  titleItalian?: string | undefined
  titleJapanese?: string | undefined
  titlePolish?: string | undefined
  titleRussian?: string | undefined
  titleSerbian?: string | undefined
  titleSpanish?: string | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  usReleaseDate?: string | undefined
  writers?: StaffBase[] | undefined
  screenplayAuthors?: StaffBase[] | undefined
  storyAuthors?: StaffBase[] | undefined
  directors?: StaffBase[] | undefined
  producers?: StaffBase[] | undefined
  staff?: StaffBase[] | undefined
  performers?: PerformerBase[] | undefined
  stuntPerformers?: PerformerBase[] | undefined
  standInPerformers?: PerformerBase[] | undefined
  characters?: CharacterBase[] | undefined
}
type MovieFullResponse = { movie?: MovieFull | undefined }
type MovieBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  movies?: MovieBase[] | undefined
}
type OccupationFull = {
  uid: string
  name: string
  legalOccupation?: boolean | undefined
  medicalOccupation?: boolean | undefined
  scientificOccupation?: boolean | undefined
  characters?: CharacterBase[] | undefined
}
type OccupationFullResponse = { occupation?: OccupationFull | undefined }
type OccupationBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  occupations?: OccupationBase[] | undefined
}
type OrganizationFull = {
  uid: string
  name: string
  government?: boolean | undefined
  intergovernmentalOrganization?: boolean | undefined
  researchOrganization?: boolean | undefined
  sportOrganization?: boolean | undefined
  medicalOrganization?: boolean | undefined
  militaryOrganization?: boolean | undefined
  militaryUnit?: boolean | undefined
  governmentAgency?: boolean | undefined
  lawEnforcementAgency?: boolean | undefined
  prisonOrPenalColony?: boolean | undefined
  mirror?: boolean | undefined
  alternateReality?: boolean | undefined
  characters?: CharacterBase[] | undefined
}
type OrganizationFullResponse = { organization?: OrganizationFull | undefined }
type OrganizationBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  organizations?: OrganizationBase[] | undefined
}
type PerformerFull = {
  uid: string
  name: string
  birthName?: string | undefined
  gender?: Gender | undefined
  dateOfBirth?: string | undefined
  placeOfBirth?: string | undefined
  dateOfDeath?: string | undefined
  placeOfDeath?: string | undefined
  animalPerformer?: boolean | undefined
  disPerformer?: boolean | undefined
  ds9Performer?: boolean | undefined
  entPerformer?: boolean | undefined
  filmPerformer?: boolean | undefined
  standInPerformer?: boolean | undefined
  stuntPerformer?: boolean | undefined
  tasPerformer?: boolean | undefined
  tngPerformer?: boolean | undefined
  tosPerformer?: boolean | undefined
  videoGamePerformer?: boolean | undefined
  voicePerformer?: boolean | undefined
  voyPerformer?: boolean | undefined
  episodesPerformances?: EpisodeBase[] | undefined
  episodesStuntPerformances?: EpisodeBase[] | undefined
  episodesStandInPerformances?: EpisodeBase[] | undefined
  moviesPerformances?: MovieBase[] | undefined
  moviesStuntPerformances?: MovieBase[] | undefined
  moviesStandInPerformances?: MovieBase[] | undefined
  characters?: CharacterBase[] | undefined
}
type PerformerFullResponse = { performer?: PerformerFull | undefined }
type PerformerBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  performers?: PerformerBase[] | undefined
}
type SeasonFull = {
  uid: string
  title: string
  series?: SeriesBase | undefined
  seasonNumber?: number | undefined
  numberOfEpisodes?: number | undefined
  episodes?: EpisodeBase[] | undefined
}
type SeasonFullResponse = { season?: SeasonFull | undefined }
type SeasonBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  seasons?: SeasonBase[] | undefined
}
type SeriesFull = {
  uid: string
  title: string
  abbreviation: string
  productionStartYear?: number | undefined
  productionEndYear?: number | undefined
  originalRunStartDate?: string | undefined
  originalRunEndDate?: string | undefined
  seasonsCount?: number | undefined
  episodesCount?: number | undefined
  featureLengthEpisodesCount?: number | undefined
  productionCompany?: CompanyBase | undefined
  originalBroadcaster?: CompanyBase | undefined
  episodes?: EpisodeBase[] | undefined
  seasons?: SeasonBase[] | undefined
}
type SeriesFullResponse = { series?: SeriesFull | undefined }
type SeriesBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  series?: SeriesBase[] | undefined
}
type SoundtrackFull = {
  uid: string
  title: string
  releaseDate?: string | undefined
  length?: number | undefined
  labels?: CompanyBase[] | undefined
  composers?: StaffBase[] | undefined
  contributors?: StaffBase[] | undefined
  orchestrators?: StaffBase[] | undefined
  references?: Reference[] | undefined
}
type SoundtrackFullResponse = { soundtrack?: SoundtrackFull | undefined }
type SoundtrackBase = {
  uid: string
  title: string
  releaseDate?: string | undefined
  length?: number | undefined
}
type SoundtrackBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  soundtracks?: SoundtrackBase[] | undefined
}
type SpeciesHeader = { uid: string; name: string }
type OrganizationHeader = { uid: string; name: string }
type SpacecraftClassBase = {
  uid: string
  name: string
  numberOfDecks?: number | undefined
  warpCapable?: boolean | undefined
  alternateReality?: boolean | undefined
  activeFrom?: string | undefined
  activeTo?: string | undefined
  species?: SpeciesHeader | undefined
  owner?: OrganizationHeader | undefined
  operator?: OrganizationHeader | undefined
  affiliation?: OrganizationHeader | undefined
}
type SpacecraftType = { uid?: string | undefined; name?: string | undefined }
type SpacecraftFull = {
  uid: string
  name: string
  registry?: string | undefined
  status?: string | undefined
  dateStatus?: string | undefined
  spacecraftClass?: SpacecraftClassBase | undefined
  owner?: OrganizationBase | undefined
  operator?: OrganizationBase | undefined
  spacecraftTypes?: SpacecraftType[] | undefined
}
type SpacecraftFullResponse = { spacecraft?: SpacecraftFull | undefined }
type SpacecraftClassHeader = { uid: string; name: string }
type SpacecraftBase = {
  uid: string
  name: string
  registry?: string | undefined
  status?: string | undefined
  dateStatus?: string | undefined
  spacecraftClass?: SpacecraftClassHeader | undefined
  owner?: OrganizationHeader | undefined
  operator?: OrganizationHeader | undefined
}
type SpacecraftBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  spacecrafts?: SpacecraftBase[] | undefined
}
type SpacecraftClassFull = {
  uid: string
  name: string
  numberOfDecks?: number | undefined
  warpCapable?: boolean | undefined
  alternateReality?: boolean | undefined
  activeFrom?: string | undefined
  activeTo?: string | undefined
  species?: SpeciesHeader | undefined
  owner?: OrganizationBase | undefined
  operator?: OrganizationBase | undefined
  affiliation?: OrganizationBase | undefined
  spacecraftTypes?: SpacecraftType[] | undefined
  spacecrafts?: SpacecraftBase[] | undefined
}
type SpacecraftClassFullResponse = { spacecraftClass?: SpacecraftClassFull | undefined }
type SpacecraftClassBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  spacecraftClasses?: SpacecraftClassBase[] | undefined
}
type SpeciesFull = {
  uid: string
  name: string
  homeworld?: AstronomicalObjectBase | undefined
  quadrant?: AstronomicalObjectBase | undefined
  extinctSpecies?: boolean | undefined
  warpCapableSpecies?: boolean | undefined
  extraGalacticSpecies?: boolean | undefined
  humanoidSpecies?: boolean | undefined
  reptilianSpecies?: boolean | undefined
  nonCorporealSpecies?: boolean | undefined
  shapeshiftingSpecies?: boolean | undefined
  spaceborneSpecies?: boolean | undefined
  telepathicSpecies?: boolean | undefined
  transDimensionalSpecies?: boolean | undefined
  unnamedSpecies?: boolean | undefined
  alternateReality?: boolean | undefined
  characters?: CharacterBase[] | undefined
}
type SpeciesFullResponse = { species?: SpeciesFull | undefined }
type SpeciesBase = {
  uid: string
  name: string
  homeworld?: AstronomicalObjectHeader | undefined
  quadrant?: AstronomicalObjectHeader | undefined
  extinctSpecies?: boolean | undefined
  warpCapableSpecies?: boolean | undefined
  extraGalacticSpecies?: boolean | undefined
  humanoidSpecies?: boolean | undefined
  reptilianSpecies?: boolean | undefined
  nonCorporealSpecies?: boolean | undefined
  shapeshiftingSpecies?: boolean | undefined
  spaceborneSpecies?: boolean | undefined
  telepathicSpecies?: boolean | undefined
  transDimensionalSpecies?: boolean | undefined
  unnamedSpecies?: boolean | undefined
  alternateReality?: boolean | undefined
}
type SpeciesBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  species?: SpeciesBase[] | undefined
}
type StaffFull = {
  uid: string
  name: string
  birthName?: string | undefined
  gender?: Gender | undefined
  dateOfBirth?: string | undefined
  placeOfBirth?: string | undefined
  dateOfDeath?: string | undefined
  placeOfDeath?: string | undefined
  artDepartment?: boolean | undefined
  artDirector?: boolean | undefined
  productionDesigner?: boolean | undefined
  cameraAndElectricalDepartment?: boolean | undefined
  cinematographer?: boolean | undefined
  castingDepartment?: boolean | undefined
  costumeDepartment?: boolean | undefined
  costumeDesigner?: boolean | undefined
  director?: boolean | undefined
  assistantOrSecondUnitDirector?: boolean | undefined
  exhibitAndAttractionStaff?: boolean | undefined
  filmEditor?: boolean | undefined
  linguist?: boolean | undefined
  locationStaff?: boolean | undefined
  makeupStaff?: boolean | undefined
  musicDepartment?: boolean | undefined
  composer?: boolean | undefined
  personalAssistant?: boolean | undefined
  producer?: boolean | undefined
  productionAssociate?: boolean | undefined
  productionStaff?: boolean | undefined
  publicationStaff?: boolean | undefined
  scienceConsultant?: boolean | undefined
  soundDepartment?: boolean | undefined
  specialAndVisualEffectsStaff?: boolean | undefined
  author?: boolean | undefined
  audioAuthor?: boolean | undefined
  calendarArtist?: boolean | undefined
  comicArtist?: boolean | undefined
  comicAuthor?: boolean | undefined
  comicColorArtist?: boolean | undefined
  comicInteriorArtist?: boolean | undefined
  comicInkArtist?: boolean | undefined
  comicPencilArtist?: boolean | undefined
  comicLetterArtist?: boolean | undefined
  comicStripArtist?: boolean | undefined
  gameArtist?: boolean | undefined
  gameAuthor?: boolean | undefined
  novelArtist?: boolean | undefined
  novelAuthor?: boolean | undefined
  referenceArtist?: boolean | undefined
  referenceAuthor?: boolean | undefined
  publicationArtist?: boolean | undefined
  publicationDesigner?: boolean | undefined
  publicationEditor?: boolean | undefined
  publicityArtist?: boolean | undefined
  cbsDigitalStaff?: boolean | undefined
  ilmProductionStaff?: boolean | undefined
  specialFeaturesStaff?: boolean | undefined
  storyEditor?: boolean | undefined
  studioExecutive?: boolean | undefined
  stuntDepartment?: boolean | undefined
  transportationDepartment?: boolean | undefined
  videoGameProductionStaff?: boolean | undefined
  writer?: boolean | undefined
  writtenEpisodes?: EpisodeBase[] | undefined
  teleplayAuthoredEpisodes?: EpisodeBase[] | undefined
  storyAuthoredEpisodes?: EpisodeBase[] | undefined
  directedEpisodes?: EpisodeBase[] | undefined
  episodes?: EpisodeBase[] | undefined
  writtenMovies?: MovieBase[] | undefined
  screenplayAuthoredMovies?: MovieBase[] | undefined
  storyAuthoredMovies?: MovieBase[] | undefined
  directedMovies?: MovieBase[] | undefined
  producedMovies?: MovieBase[] | undefined
  movies?: MovieBase[] | undefined
}
type StaffFullResponse = { staff?: StaffFull | undefined }
type StaffBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  staff?: StaffBase[] | undefined
}
type TechnologyFull = {
  uid: string
  name: string
  borgTechnology?: boolean | undefined
  borgComponent?: boolean | undefined
  communicationsTechnology?: boolean | undefined
  computerTechnology?: boolean | undefined
  computerProgramming?: boolean | undefined
  subroutine?: boolean | undefined
  database?: boolean | undefined
  energyTechnology?: boolean | undefined
  fictionalTechnology?: boolean | undefined
  holographicTechnology?: boolean | undefined
  identificationTechnology?: boolean | undefined
  lifeSupportTechnology?: boolean | undefined
  sensorTechnology?: boolean | undefined
  shieldTechnology?: boolean | undefined
  tool?: boolean | undefined
  culinaryTool?: boolean | undefined
  engineeringTool?: boolean | undefined
  householdTool?: boolean | undefined
  medicalEquipment?: boolean | undefined
  transporterTechnology?: boolean | undefined
}
type TechnologyFullResponse = { technology?: TechnologyFull | undefined }
type TechnologyBase = {
  uid: string
  name: string
  borgTechnology?: boolean | undefined
  borgComponent?: boolean | undefined
  communicationsTechnology?: boolean | undefined
  computerTechnology?: boolean | undefined
  computerProgramming?: boolean | undefined
  subroutine?: boolean | undefined
  database?: boolean | undefined
  energyTechnology?: boolean | undefined
  fictionalTechnology?: boolean | undefined
  holographicTechnology?: boolean | undefined
  identificationTechnology?: boolean | undefined
  lifeSupportTechnology?: boolean | undefined
  sensorTechnology?: boolean | undefined
  shieldTechnology?: boolean | undefined
  tool?: boolean | undefined
  culinaryTool?: boolean | undefined
  engineeringTool?: boolean | undefined
  householdTool?: boolean | undefined
  medicalEquipment?: boolean | undefined
  transporterTechnology?: boolean | undefined
}
type TechnologyBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  technology?: TechnologyBase[] | undefined
}
type TitleFull = {
  uid: string
  name: string
  militaryRank?: boolean | undefined
  fleetRank?: boolean | undefined
  religiousTitle?: boolean | undefined
  position?: boolean | undefined
  mirror?: boolean | undefined
  characters?: CharacterBase[] | undefined
}
type TitleFullResponse = { title?: TitleFull | undefined }
type TitleBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  titles?: TitleBase[] | undefined
}
type ProductionRunUnit = 'BOX' | 'SET'
type TradingCardSetBase = {
  uid: string
  name: string
  releaseYear?: number | undefined
  releaseMonth?: number | undefined
  releaseDay?: number | undefined
  cardsPerPack?: number | undefined
  packsPerBox?: number | undefined
  boxesPerCase?: number | undefined
  productionRun?: number | undefined
  productionRunUnit?: ProductionRunUnit | undefined
  cardWidth?: number | undefined
  cardHeight?: number | undefined
}
type TradingCardSetHeader = { uid: string; name: string }
type TradingCardDeckBase = {
  uid: string
  name: string
  frequency?: string | undefined
  tradingCardSet?: TradingCardSetHeader | undefined
}
type TradingCardFull = {
  uid: string
  name: string
  tradingCardSet?: TradingCardSetBase | undefined
  tradingCardDeck?: TradingCardDeckBase | undefined
  number?: string | undefined
  releaseYear?: number | undefined
  productionRun?: number | undefined
}
type TradingCardFullResponse = { tradingCard?: TradingCardFull | undefined }
type TradingCardDeckHeader = { uid: string; name: string }
type TradingCardBase = {
  uid: string
  name: string
  number?: string | undefined
  releaseYear?: number | undefined
  productionRun?: number | undefined
  tradingCardSet?: TradingCardSetHeader | undefined
  tradingCardDeck?: TradingCardDeckHeader | undefined
}
type TradingCardBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  tradingCards?: TradingCardBase[] | undefined
}
type TradingCardDeckFull = {
  uid: string
  name: string
  frequency?: string | undefined
  tradingCardSet?: TradingCardSetHeader | undefined
  tradingCards?: TradingCardBase[] | undefined
}
type TradingCardDeckFullResponse = { tradingCardDeck?: TradingCardDeckFull | undefined }
type TradingCardDeckBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  tradingCardDecks?: TradingCardDeckBase[] | undefined
}
type Country = {
  uid?: string | undefined
  name?: string | undefined
  iso31661Alpha2Code?: string | undefined
}
type TradingCardSetFull = {
  uid: string
  name: string
  releaseYear?: number | undefined
  releaseMonth?: number | undefined
  releaseDay?: number | undefined
  cardsPerPack?: number | undefined
  packsPerBox?: number | undefined
  boxesPerCase?: number | undefined
  productionRun?: number | undefined
  productionRunUnit?: ProductionRunUnit | undefined
  cardWidth?: number | undefined
  cardHeight?: number | undefined
  manufacturers?: CompanyBase[] | undefined
  tradingCardDecks?: TradingCardDeckBase[] | undefined
  tradingCards?: TradingCardBase[] | undefined
  countriesOfOrigin?: Country[] | undefined
}
type TradingCardSetFullResponse = { tradingCardSet?: TradingCardSetFull | undefined }
type TradingCardSetBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  tradingCardSets?: TradingCardSetBase[] | undefined
}
type Platform = { uid?: string | undefined; name?: string | undefined }
type Genre = { uid?: string | undefined; name?: string | undefined }
type ContentRatingSystem =
  | 'BBFC'
  | 'OFLC'
  | 'OFLCNZ'
  | 'DJCTQ'
  | 'MDA'
  | 'MPAA'
  | 'CHVRS'
  | 'RCQ'
  | 'IFCO'
  | 'FSK'
  | 'NICAM'
  | 'MCCYP'
  | 'EIRIN'
  | 'HK'
  | 'CBFC'
  | 'NMHH'
  | 'VRC'
  | 'RSAC'
  | 'ESRB'
  | 'ELSPA'
  | 'PEGI'
  | 'USK'
  | 'SELL'
  | 'ADESE'
  | 'GSRR'
  | 'ITUNES'
type ContentRating = {
  uid?: string | undefined
  contentRatingSystem?: ContentRatingSystem | undefined
  rating?: string | undefined
}
type VideoGameFull = {
  uid: string
  title: string
  releaseDate?: string | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  systemRequirements?: string | undefined
  publishers?: CompanyBase[] | undefined
  developers?: CompanyBase[] | undefined
  platforms?: Platform[] | undefined
  genres?: Genre[] | undefined
  ratings?: ContentRating[] | undefined
  references?: Reference[] | undefined
}
type VideoGameFullResponse = { videoGame?: VideoGameFull | undefined }
type VideoGameBase = {
  uid: string
  title: string
  releaseDate?: string | undefined
  stardateFrom?: number | undefined
  stardateTo?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  systemRequirements?: string | undefined
}
type VideoGameBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  videoGames?: VideoGameBase[] | undefined
}
type VideoReleaseFormat =
  | 'SUPER_8'
  | 'BETAMAX'
  | 'VHS'
  | 'CED'
  | 'LD'
  | 'VHD'
  | 'VCD'
  | 'VIDEO_8'
  | 'DVD'
  | 'UMD'
  | 'HD_DVD'
  | 'BLU_RAY'
  | 'BLU_RAY_4K_UHD'
  | 'DIGITAL_FORMAT'
type ContentLanguage = {
  uid?: string | undefined
  name?: string | undefined
  iso6391Code?: string | undefined
}
type VideoReleaseFull = {
  uid: string
  title: string
  series?: SeriesBase | undefined
  season?: SeasonBase | undefined
  format?: VideoReleaseFormat | undefined
  numberOfEpisodes?: number | undefined
  numberOfFeatureLengthEpisodes?: number | undefined
  numberOfDataCarriers?: number | undefined
  runTime?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  regionFreeReleaseDate?: string | undefined
  region1AReleaseDate?: string | undefined
  region1SlimlineReleaseDate?: string | undefined
  region2BReleaseDate?: string | undefined
  region2SlimlineReleaseDate?: string | undefined
  region4AReleaseDate?: string | undefined
  region4SlimlineReleaseDate?: string | undefined
  amazonDigitalRelease?: boolean | undefined
  dailymotionDigitalRelease?: boolean | undefined
  googlePlayDigitalRelease?: boolean | undefined
  iTunesDigitalRelease?: boolean | undefined
  ultraVioletDigitalRelease?: boolean | undefined
  vimeoDigitalRelease?: boolean | undefined
  vuduDigitalRelease?: boolean | undefined
  xboxSmartGlassDigitalRelease?: boolean | undefined
  youTubeDigitalRelease?: boolean | undefined
  netflixDigitalRelease?: boolean | undefined
  references?: Reference[] | undefined
  ratings?: ContentRating[] | undefined
  languages?: ContentLanguage[] | undefined
  languagesSubtitles?: ContentLanguage[] | undefined
  languagesDubbed?: ContentLanguage[] | undefined
}
type VideoReleaseFullResponse = { videoRelease?: VideoReleaseFull | undefined }
type VideoReleaseBase = {
  uid: string
  title: string
  series?: SeriesHeader | undefined
  season?: SeasonHeader | undefined
  format?: VideoReleaseFormat | undefined
  numberOfEpisodes?: number | undefined
  numberOfFeatureLengthEpisodes?: number | undefined
  numberOfDataCarriers?: number | undefined
  runTime?: number | undefined
  yearFrom?: number | undefined
  yearTo?: number | undefined
  regionFreeReleaseDate?: string | undefined
  region1AReleaseDate?: string | undefined
  region1SlimlineReleaseDate?: string | undefined
  region2BReleaseDate?: string | undefined
  region2SlimlineReleaseDate?: string | undefined
  region4AReleaseDate?: string | undefined
  region4SlimlineReleaseDate?: string | undefined
  amazonDigitalRelease?: boolean | undefined
  dailymotionDigitalRelease?: boolean | undefined
  googlePlayDigitalRelease?: boolean | undefined
  iTunesDigitalRelease?: boolean | undefined
  ultraVioletDigitalRelease?: boolean | undefined
  vimeoDigitalRelease?: boolean | undefined
  vuduDigitalRelease?: boolean | undefined
  xboxSmartGlassDigitalRelease?: boolean | undefined
  youTubeDigitalRelease?: boolean | undefined
  netflixDigitalRelease?: boolean | undefined
}
type VideoReleaseBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  videoReleases?: VideoReleaseBase[] | undefined
}
type WeaponFull = {
  uid: string
  name: string
  handHeldWeapon?: boolean | undefined
  laserTechnology?: boolean | undefined
  plasmaTechnology?: boolean | undefined
  photonicTechnology?: boolean | undefined
  phaserTechnology?: boolean | undefined
  mirror?: boolean | undefined
  alternateReality?: boolean | undefined
}
type WeaponFullResponse = { weapon?: WeaponFull | undefined }
type WeaponBase = {
  uid: string
  name: string
  handHeldWeapon?: boolean | undefined
  laserTechnology?: boolean | undefined
  plasmaTechnology?: boolean | undefined
  photonicTechnology?: boolean | undefined
  phaserTechnology?: boolean | undefined
  mirror?: boolean | undefined
  alternateReality?: boolean | undefined
}
type WeaponBaseResponse = {
  page?: ResponsePage | undefined
  sort?: ResponseSort | undefined
  weapons?: WeaponBase[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/animal': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: AnimalFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/animal/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: AnimalBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            earthAnimal?: boolean | undefined
            earthInsect?: boolean | undefined
            avian?: boolean | undefined
            canine?: boolean | undefined
            feline?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            earthAnimal?: boolean | undefined
            earthInsect?: boolean | undefined
            avian?: boolean | undefined
            canine?: boolean | undefined
            feline?: boolean | undefined
          }
        }
        output: AnimalBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/astronomicalObject': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: AstronomicalObjectFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/astronomicalObject/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: AstronomicalObjectBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            astronomicalObjectType?: string | undefined
            locationUid?: string | undefined
          }
        } & {
          form: {
            name?: string | undefined
            astronomicalObjectType?: string | undefined
            locationUid?: string | undefined
          }
        }
        output: AstronomicalObjectBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/book': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: BookFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/book/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: BookBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfPagesFrom?: number | undefined
            numberOfPagesTo?: number | undefined
            stardateFrom?: number | undefined
            stardateTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            novel?: boolean | undefined
            referenceBook?: boolean | undefined
            biographyBook?: boolean | undefined
            rolePlayingBook?: boolean | undefined
            eBook?: boolean | undefined
            anthology?: boolean | undefined
            novelization?: boolean | undefined
            audiobook?: boolean | undefined
            audiobookAbridged?: boolean | undefined
            audiobookPublishedYearFrom?: number | undefined
            audiobookPublishedYearTo?: number | undefined
            audiobookRunTimeFrom?: number | undefined
            audiobookRunTimeTo?: number | undefined
          }
        } & {
          form: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfPagesFrom?: number | undefined
            numberOfPagesTo?: number | undefined
            stardateFrom?: number | undefined
            stardateTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            novel?: boolean | undefined
            referenceBook?: boolean | undefined
            biographyBook?: boolean | undefined
            rolePlayingBook?: boolean | undefined
            eBook?: boolean | undefined
            anthology?: boolean | undefined
            novelization?: boolean | undefined
            audiobook?: boolean | undefined
            audiobookAbridged?: boolean | undefined
            audiobookPublishedYearFrom?: number | undefined
            audiobookPublishedYearTo?: number | undefined
            audiobookRunTimeFrom?: number | undefined
            audiobookRunTimeTo?: number | undefined
          }
        }
        output: BookBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bookCollection': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: BookCollectionFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bookCollection/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: BookCollectionBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfPagesFrom?: number | undefined
            numberOfPagesTo?: number | undefined
            stardateFrom?: number | undefined
            stardateTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
          }
        } & {
          form: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfPagesFrom?: number | undefined
            numberOfPagesTo?: number | undefined
            stardateFrom?: number | undefined
            stardateTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
          }
        }
        output: BookCollectionBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bookSeries': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: BookSeriesFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bookSeries/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: BookSeriesBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfBooksFrom?: number | undefined
            numberOfBooksTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            miniseries?: boolean | undefined
            eBookSeries?: boolean | undefined
          }
        } & {
          form: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfBooksFrom?: number | undefined
            numberOfBooksTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            miniseries?: boolean | undefined
            eBookSeries?: boolean | undefined
          }
        }
        output: BookSeriesBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/character': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: CharacterFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/character/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: CharacterBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            gender?: string | undefined
            deceased?: boolean | undefined
            hologram?: boolean | undefined
            fictionalCharacter?: boolean | undefined
            mirror?: boolean | undefined
            alternateReality?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            gender?: string | undefined
            deceased?: boolean | undefined
            hologram?: boolean | undefined
            fictionalCharacter?: boolean | undefined
            mirror?: boolean | undefined
            alternateReality?: boolean | undefined
          }
        }
        output: CharacterBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/comics': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: ComicsFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/comics/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: ComicsBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfPagesFrom?: number | undefined
            numberOfPagesTo?: number | undefined
            stardateFrom?: number | undefined
            stardateTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            photonovel?: boolean | undefined
            adaptation?: boolean | undefined
          }
        } & {
          form: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfPagesFrom?: number | undefined
            numberOfPagesTo?: number | undefined
            stardateFrom?: number | undefined
            stardateTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            photonovel?: boolean | undefined
            adaptation?: boolean | undefined
          }
        }
        output: ComicsBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/comicCollection': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: ComicCollectionFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/comicCollection/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: ComicCollectionBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfPagesFrom?: number | undefined
            numberOfPagesTo?: number | undefined
            stardateFrom?: number | undefined
            stardateTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            photonovel?: boolean | undefined
          }
        } & {
          form: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfPagesFrom?: number | undefined
            numberOfPagesTo?: number | undefined
            stardateFrom?: number | undefined
            stardateTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            photonovel?: boolean | undefined
          }
        }
        output: ComicCollectionBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/comicSeries': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: ComicSeriesFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/comicSeries/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: ComicSeriesBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfIssuesFrom?: number | undefined
            numberOfIssuesTo?: number | undefined
            stardateFrom?: number | undefined
            stardateTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            miniseries?: boolean | undefined
            photonovelSeries?: boolean | undefined
          }
        } & {
          form: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfIssuesFrom?: number | undefined
            numberOfIssuesTo?: number | undefined
            stardateFrom?: number | undefined
            stardateTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            miniseries?: boolean | undefined
            photonovelSeries?: boolean | undefined
          }
        }
        output: ComicSeriesBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/comicStrip': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: ComicStripFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/comicStrip/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: ComicStripBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfPagesFrom?: number | undefined
            numberOfPagesTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
          }
        } & {
          form: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfPagesFrom?: number | undefined
            numberOfPagesTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
          }
        }
        output: ComicStripBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/company': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: CompanyFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/company/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: CompanyBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            broadcaster?: boolean | undefined
            collectibleCompany?: boolean | undefined
            conglomerate?: boolean | undefined
            digitalVisualEffectsCompany?: boolean | undefined
            distributor?: boolean | undefined
            gameCompany?: boolean | undefined
            filmEquipmentCompany?: boolean | undefined
            makeUpEffectsStudio?: boolean | undefined
            mattePaintingCompany?: boolean | undefined
            modelAndMiniatureEffectsCompany?: boolean | undefined
            postProductionCompany?: boolean | undefined
            productionCompany?: boolean | undefined
            propCompany?: boolean | undefined
            recordLabel?: boolean | undefined
            specialEffectsCompany?: boolean | undefined
            tvAndFilmProductionCompany?: boolean | undefined
            videoGameCompany?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            broadcaster?: boolean | undefined
            collectibleCompany?: boolean | undefined
            conglomerate?: boolean | undefined
            digitalVisualEffectsCompany?: boolean | undefined
            distributor?: boolean | undefined
            gameCompany?: boolean | undefined
            filmEquipmentCompany?: boolean | undefined
            makeUpEffectsStudio?: boolean | undefined
            mattePaintingCompany?: boolean | undefined
            modelAndMiniatureEffectsCompany?: boolean | undefined
            postProductionCompany?: boolean | undefined
            productionCompany?: boolean | undefined
            propCompany?: boolean | undefined
            recordLabel?: boolean | undefined
            specialEffectsCompany?: boolean | undefined
            tvAndFilmProductionCompany?: boolean | undefined
            videoGameCompany?: boolean | undefined
          }
        }
        output: CompanyBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conflict': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: ConflictFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/conflict/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: ConflictBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            earthConflict?: boolean | undefined
            federationWar?: boolean | undefined
            klingonWar?: boolean | undefined
            dominionWarBattle?: boolean | undefined
            alternateReality?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            earthConflict?: boolean | undefined
            federationWar?: boolean | undefined
            klingonWar?: boolean | undefined
            dominionWarBattle?: boolean | undefined
            alternateReality?: boolean | undefined
          }
        }
        output: ConflictBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/element': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: ElementFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/element/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: ElementBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            symbol?: string | undefined
            transuranium?: boolean | undefined
            gammaSeries?: boolean | undefined
            hypersonicSeries?: boolean | undefined
            megaSeries?: boolean | undefined
            omegaSeries?: boolean | undefined
            transonicSeries?: boolean | undefined
            worldSeries?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            symbol?: string | undefined
            transuranium?: boolean | undefined
            gammaSeries?: boolean | undefined
            hypersonicSeries?: boolean | undefined
            megaSeries?: boolean | undefined
            omegaSeries?: boolean | undefined
            transonicSeries?: boolean | undefined
            worldSeries?: boolean | undefined
          }
        }
        output: ElementBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/episode': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: EpisodeFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/episode/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: EpisodeBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            seasonNumberFrom?: number | undefined
            seasonNumberTo?: number | undefined
            episodeNumberFrom?: number | undefined
            episodeNumberTo?: number | undefined
            productionSerialNumber?: string | undefined
            featureLength?: boolean | undefined
            stardateFrom?: number | undefined
            stardateTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            usAirDateFrom?: string | undefined
            usAirDateTo?: string | undefined
            finalScriptDateFrom?: string | undefined
            finalScriptDateTo?: string | undefined
          }
        } & {
          form: {
            title?: string | undefined
            seasonNumberFrom?: number | undefined
            seasonNumberTo?: number | undefined
            episodeNumberFrom?: number | undefined
            episodeNumberTo?: number | undefined
            productionSerialNumber?: string | undefined
            featureLength?: boolean | undefined
            stardateFrom?: number | undefined
            stardateTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            usAirDateFrom?: string | undefined
            usAirDateTo?: string | undefined
            finalScriptDateFrom?: string | undefined
            finalScriptDateTo?: string | undefined
          }
        }
        output: EpisodeBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/food': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: FoodFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/food/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: FoodBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            earthlyOrigin?: boolean | undefined
            dessert?: boolean | undefined
            fruit?: boolean | undefined
            herbOrSpice?: boolean | undefined
            sauce?: boolean | undefined
            soup?: boolean | undefined
            beverage?: boolean | undefined
            alcoholicBeverage?: boolean | undefined
            juice?: boolean | undefined
            tea?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            earthlyOrigin?: boolean | undefined
            dessert?: boolean | undefined
            fruit?: boolean | undefined
            herbOrSpice?: boolean | undefined
            sauce?: boolean | undefined
            soup?: boolean | undefined
            beverage?: boolean | undefined
            alcoholicBeverage?: boolean | undefined
            juice?: boolean | undefined
            tea?: boolean | undefined
          }
        }
        output: FoodBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/literature': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: LiteratureFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/literature/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: LiteratureBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            earthlyOrigin?: boolean | undefined
            shakespeareanWork?: boolean | undefined
            report?: boolean | undefined
            scientificLiterature?: boolean | undefined
            technicalManual?: boolean | undefined
            religiousLiterature?: boolean | undefined
          }
        } & {
          form: {
            title?: string | undefined
            earthlyOrigin?: boolean | undefined
            shakespeareanWork?: boolean | undefined
            report?: boolean | undefined
            scientificLiterature?: boolean | undefined
            technicalManual?: boolean | undefined
            religiousLiterature?: boolean | undefined
          }
        }
        output: LiteratureBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/location': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: LocationFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/location/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: LocationBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            earthlyLocation?: boolean | undefined
            fictionalLocation?: boolean | undefined
            religiousLocation?: boolean | undefined
            geographicalLocation?: boolean | undefined
            bodyOfWater?: boolean | undefined
            country?: boolean | undefined
            subnationalEntity?: boolean | undefined
            settlement?: boolean | undefined
            usSettlement?: boolean | undefined
            bajoranSettlement?: boolean | undefined
            colony?: boolean | undefined
            landform?: boolean | undefined
            landmark?: boolean | undefined
            road?: boolean | undefined
            structure?: boolean | undefined
            shipyard?: boolean | undefined
            buildingInterior?: boolean | undefined
            establishment?: boolean | undefined
            medicalEstablishment?: boolean | undefined
            ds9Establishment?: boolean | undefined
            school?: boolean | undefined
            mirror?: boolean | undefined
            alternateReality?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            earthlyLocation?: boolean | undefined
            fictionalLocation?: boolean | undefined
            religiousLocation?: boolean | undefined
            geographicalLocation?: boolean | undefined
            bodyOfWater?: boolean | undefined
            country?: boolean | undefined
            subnationalEntity?: boolean | undefined
            settlement?: boolean | undefined
            usSettlement?: boolean | undefined
            bajoranSettlement?: boolean | undefined
            colony?: boolean | undefined
            landform?: boolean | undefined
            landmark?: boolean | undefined
            road?: boolean | undefined
            structure?: boolean | undefined
            shipyard?: boolean | undefined
            buildingInterior?: boolean | undefined
            establishment?: boolean | undefined
            medicalEstablishment?: boolean | undefined
            ds9Establishment?: boolean | undefined
            school?: boolean | undefined
            mirror?: boolean | undefined
            alternateReality?: boolean | undefined
          }
        }
        output: LocationBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/magazine': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: MagazineFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/magazine/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: MagazineBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfPagesFrom?: number | undefined
            numberOfPagesTo?: number | undefined
          }
        } & {
          form: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfPagesFrom?: number | undefined
            numberOfPagesTo?: number | undefined
          }
        }
        output: MagazineBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/magazineSeries': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: MagazineSeriesFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/magazineSeries/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: MagazineSeriesBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfIssuesFrom?: number | undefined
            numberOfIssuesTo?: number | undefined
          }
        } & {
          form: {
            title?: string | undefined
            publishedYearFrom?: number | undefined
            publishedYearTo?: number | undefined
            numberOfIssuesFrom?: number | undefined
            numberOfIssuesTo?: number | undefined
          }
        }
        output: MagazineSeriesBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/material': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: MaterialFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/material/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: MaterialBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            chemicalCompound?: boolean | undefined
            biochemicalCompound?: boolean | undefined
            drug?: boolean | undefined
            poisonousSubstance?: boolean | undefined
            explosive?: boolean | undefined
            gemstone?: boolean | undefined
            alloyOrComposite?: boolean | undefined
            fuel?: boolean | undefined
            mineral?: boolean | undefined
            preciousMaterial?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            chemicalCompound?: boolean | undefined
            biochemicalCompound?: boolean | undefined
            drug?: boolean | undefined
            poisonousSubstance?: boolean | undefined
            explosive?: boolean | undefined
            gemstone?: boolean | undefined
            alloyOrComposite?: boolean | undefined
            fuel?: boolean | undefined
            mineral?: boolean | undefined
            preciousMaterial?: boolean | undefined
          }
        }
        output: MaterialBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/medicalCondition': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: MedicalConditionFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/medicalCondition/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: MedicalConditionBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: { name?: string | undefined; psychologicalCondition?: boolean | undefined }
        } & { form: { name?: string | undefined; psychologicalCondition?: boolean | undefined } }
        output: MedicalConditionBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/movie': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: MovieFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/movie/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: MovieBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            stardateFrom?: number | undefined
            stardateTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            usReleaseDateFrom?: string | undefined
            usReleaseDateTo?: string | undefined
          }
        } & {
          form: {
            title?: string | undefined
            stardateFrom?: number | undefined
            stardateTo?: number | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            usReleaseDateFrom?: string | undefined
            usReleaseDateTo?: string | undefined
          }
        }
        output: MovieBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/occupation': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: OccupationFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/occupation/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: OccupationBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            legalOccupation?: boolean | undefined
            medicalOccupation?: boolean | undefined
            scientificOccupation?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            legalOccupation?: boolean | undefined
            medicalOccupation?: boolean | undefined
            scientificOccupation?: boolean | undefined
          }
        }
        output: OccupationBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: OrganizationFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organization/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: OrganizationBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            government?: boolean | undefined
            intergovernmentalOrganization?: boolean | undefined
            researchOrganization?: boolean | undefined
            sportOrganization?: boolean | undefined
            medicalOrganization?: boolean | undefined
            militaryOrganization?: boolean | undefined
            militaryUnit?: boolean | undefined
            governmentAgency?: boolean | undefined
            lawEnforcementAgency?: boolean | undefined
            prisonOrPenalColony?: boolean | undefined
            mirror?: boolean | undefined
            alternateReality?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            government?: boolean | undefined
            intergovernmentalOrganization?: boolean | undefined
            researchOrganization?: boolean | undefined
            sportOrganization?: boolean | undefined
            medicalOrganization?: boolean | undefined
            militaryOrganization?: boolean | undefined
            militaryUnit?: boolean | undefined
            governmentAgency?: boolean | undefined
            lawEnforcementAgency?: boolean | undefined
            prisonOrPenalColony?: boolean | undefined
            mirror?: boolean | undefined
            alternateReality?: boolean | undefined
          }
        }
        output: OrganizationBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/performer': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: PerformerFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/performer/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: PerformerBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            birthName?: string | undefined
            gender?: string | undefined
            dateOfBirthFrom?: string | undefined
            dateOfBirthTo?: string | undefined
            placeOfBirth?: string | undefined
            dateOfDeathFrom?: string | undefined
            dateOfDeathTo?: string | undefined
            placeOfDeath?: string | undefined
            animalPerformer?: boolean | undefined
            disPerformer?: boolean | undefined
            ds9Performer?: boolean | undefined
            entPerformer?: boolean | undefined
            filmPerformer?: boolean | undefined
            standInPerformer?: boolean | undefined
            stuntPerformer?: boolean | undefined
            tasPerformer?: boolean | undefined
            tngPerformer?: boolean | undefined
            tosPerformer?: boolean | undefined
            videoGamePerformer?: boolean | undefined
            voicePerformer?: boolean | undefined
            voyPerformer?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            birthName?: string | undefined
            gender?: string | undefined
            dateOfBirthFrom?: string | undefined
            dateOfBirthTo?: string | undefined
            placeOfBirth?: string | undefined
            dateOfDeathFrom?: string | undefined
            dateOfDeathTo?: string | undefined
            placeOfDeath?: string | undefined
            animalPerformer?: boolean | undefined
            disPerformer?: boolean | undefined
            ds9Performer?: boolean | undefined
            entPerformer?: boolean | undefined
            filmPerformer?: boolean | undefined
            standInPerformer?: boolean | undefined
            stuntPerformer?: boolean | undefined
            tasPerformer?: boolean | undefined
            tngPerformer?: boolean | undefined
            tosPerformer?: boolean | undefined
            videoGamePerformer?: boolean | undefined
            voicePerformer?: boolean | undefined
            voyPerformer?: boolean | undefined
          }
        }
        output: PerformerBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/season': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: SeasonFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/season/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: SeasonBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            seasonNumberFrom?: number | undefined
            seasonNumberTo?: number | undefined
            numberOfEpisodesFrom?: number | undefined
            numberOfEpisodesTo?: number | undefined
          }
        } & {
          form: {
            title?: string | undefined
            seasonNumberFrom?: number | undefined
            seasonNumberTo?: number | undefined
            numberOfEpisodesFrom?: number | undefined
            numberOfEpisodesTo?: number | undefined
          }
        }
        output: SeasonBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: SeriesFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/series/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: SeriesBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            abbreviation?: string | undefined
            productionStartYearFrom?: number | undefined
            productionStartYearTo?: number | undefined
            productionEndYearFrom?: number | undefined
            productionEndYearTo?: number | undefined
            originalRunStartDateFrom?: string | undefined
            originalRunStartDateTo?: string | undefined
            originalRunEndDateFrom?: string | undefined
            originalRunEndDateTo?: string | undefined
          }
        } & {
          form: {
            title?: string | undefined
            abbreviation?: string | undefined
            productionStartYearFrom?: number | undefined
            productionStartYearTo?: number | undefined
            productionEndYearFrom?: number | undefined
            productionEndYearTo?: number | undefined
            originalRunStartDateFrom?: string | undefined
            originalRunStartDateTo?: string | undefined
            originalRunEndDateFrom?: string | undefined
            originalRunEndDateTo?: string | undefined
          }
        }
        output: SeriesBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/soundtrack': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: SoundtrackFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/soundtrack/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: SoundtrackBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            releaseDateFrom?: string | undefined
            releaseDateTo?: string | undefined
            lengthFrom?: number | undefined
            lengthTo?: number | undefined
          }
        } & {
          form: {
            title?: string | undefined
            releaseDateFrom?: string | undefined
            releaseDateTo?: string | undefined
            lengthFrom?: number | undefined
            lengthTo?: number | undefined
          }
        }
        output: SoundtrackBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spacecraft': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: SpacecraftFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/spacecraft/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: SpacecraftBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & { json: { name?: string | undefined } } & { form: { name?: string | undefined } }
        output: SpacecraftBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spacecraftClass': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: SpacecraftClassFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/spacecraftClass/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: SpacecraftClassBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            warpCapableSpecies?: boolean | undefined
            alternateReality?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            warpCapableSpecies?: boolean | undefined
            alternateReality?: boolean | undefined
          }
        }
        output: SpacecraftClassBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/species': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: SpeciesFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/species/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: SpeciesBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            extinctSpecies?: boolean | undefined
            warpCapableSpecies?: boolean | undefined
            extraGalacticSpecies?: boolean | undefined
            humanoidSpecies?: boolean | undefined
            reptilianSpecies?: boolean | undefined
            nonCorporealSpecies?: boolean | undefined
            shapeshiftingSpecies?: boolean | undefined
            spaceborneSpecies?: boolean | undefined
            telepathicSpecies?: boolean | undefined
            transDimensionalSpecies?: boolean | undefined
            unnamedSpecies?: boolean | undefined
            alternateReality?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            extinctSpecies?: boolean | undefined
            warpCapableSpecies?: boolean | undefined
            extraGalacticSpecies?: boolean | undefined
            humanoidSpecies?: boolean | undefined
            reptilianSpecies?: boolean | undefined
            nonCorporealSpecies?: boolean | undefined
            shapeshiftingSpecies?: boolean | undefined
            spaceborneSpecies?: boolean | undefined
            telepathicSpecies?: boolean | undefined
            transDimensionalSpecies?: boolean | undefined
            unnamedSpecies?: boolean | undefined
            alternateReality?: boolean | undefined
          }
        }
        output: SpeciesBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/staff': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: StaffFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/staff/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: StaffBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            birthName?: string | undefined
            gender?: string | undefined
            dateOfBirthFrom?: string | undefined
            dateOfBirthTo?: string | undefined
            placeOfBirth?: string | undefined
            dateOfDeathFrom?: string | undefined
            dateOfDeathTo?: string | undefined
            placeOfDeath?: string | undefined
            artDepartment?: boolean | undefined
            artDirector?: boolean | undefined
            productionDesigner?: boolean | undefined
            cameraAndElectricalDepartment?: boolean | undefined
            cinematographer?: boolean | undefined
            castingDepartment?: boolean | undefined
            costumeDepartment?: boolean | undefined
            costumeDesigner?: boolean | undefined
            director?: boolean | undefined
            assistantOrSecondUnitDirector?: boolean | undefined
            exhibitAndAttractionStaff?: boolean | undefined
            filmEditor?: boolean | undefined
            linguist?: boolean | undefined
            locationStaff?: boolean | undefined
            makeupStaff?: boolean | undefined
            musicDepartment?: boolean | undefined
            composer?: boolean | undefined
            personalAssistant?: boolean | undefined
            producer?: boolean | undefined
            productionAssociate?: boolean | undefined
            productionStaff?: boolean | undefined
            publicationStaff?: boolean | undefined
            scienceConsultant?: boolean | undefined
            soundDepartment?: boolean | undefined
            specialAndVisualEffectsStaff?: boolean | undefined
            author?: boolean | undefined
            audioAuthor?: boolean | undefined
            calendarArtist?: boolean | undefined
            comicArtist?: boolean | undefined
            comicAuthor?: boolean | undefined
            comicColorArtist?: boolean | undefined
            comicInteriorArtist?: boolean | undefined
            comicInkArtist?: boolean | undefined
            comicPencilArtist?: boolean | undefined
            comicLetterArtist?: boolean | undefined
            comicStripArtist?: boolean | undefined
            gameArtist?: boolean | undefined
            gameAuthor?: boolean | undefined
            novelArtist?: boolean | undefined
            novelAuthor?: boolean | undefined
            referenceArtist?: boolean | undefined
            referenceAuthor?: boolean | undefined
            publicationArtist?: boolean | undefined
            publicationDesigner?: boolean | undefined
            publicationEditor?: boolean | undefined
            publicityArtist?: boolean | undefined
            cbsDigitalStaff?: boolean | undefined
            ilmProductionStaff?: boolean | undefined
            specialFeaturesStaff?: boolean | undefined
            storyEditor?: boolean | undefined
            studioExecutive?: boolean | undefined
            stuntDepartment?: boolean | undefined
            transportationDepartment?: boolean | undefined
            videoGameProductionStaff?: boolean | undefined
            writer?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            birthName?: string | undefined
            gender?: string | undefined
            dateOfBirthFrom?: string | undefined
            dateOfBirthTo?: string | undefined
            placeOfBirth?: string | undefined
            dateOfDeathFrom?: string | undefined
            dateOfDeathTo?: string | undefined
            placeOfDeath?: string | undefined
            artDepartment?: boolean | undefined
            artDirector?: boolean | undefined
            productionDesigner?: boolean | undefined
            cameraAndElectricalDepartment?: boolean | undefined
            cinematographer?: boolean | undefined
            castingDepartment?: boolean | undefined
            costumeDepartment?: boolean | undefined
            costumeDesigner?: boolean | undefined
            director?: boolean | undefined
            assistantOrSecondUnitDirector?: boolean | undefined
            exhibitAndAttractionStaff?: boolean | undefined
            filmEditor?: boolean | undefined
            linguist?: boolean | undefined
            locationStaff?: boolean | undefined
            makeupStaff?: boolean | undefined
            musicDepartment?: boolean | undefined
            composer?: boolean | undefined
            personalAssistant?: boolean | undefined
            producer?: boolean | undefined
            productionAssociate?: boolean | undefined
            productionStaff?: boolean | undefined
            publicationStaff?: boolean | undefined
            scienceConsultant?: boolean | undefined
            soundDepartment?: boolean | undefined
            specialAndVisualEffectsStaff?: boolean | undefined
            author?: boolean | undefined
            audioAuthor?: boolean | undefined
            calendarArtist?: boolean | undefined
            comicArtist?: boolean | undefined
            comicAuthor?: boolean | undefined
            comicColorArtist?: boolean | undefined
            comicInteriorArtist?: boolean | undefined
            comicInkArtist?: boolean | undefined
            comicPencilArtist?: boolean | undefined
            comicLetterArtist?: boolean | undefined
            comicStripArtist?: boolean | undefined
            gameArtist?: boolean | undefined
            gameAuthor?: boolean | undefined
            novelArtist?: boolean | undefined
            novelAuthor?: boolean | undefined
            referenceArtist?: boolean | undefined
            referenceAuthor?: boolean | undefined
            publicationArtist?: boolean | undefined
            publicationDesigner?: boolean | undefined
            publicationEditor?: boolean | undefined
            publicityArtist?: boolean | undefined
            cbsDigitalStaff?: boolean | undefined
            ilmProductionStaff?: boolean | undefined
            specialFeaturesStaff?: boolean | undefined
            storyEditor?: boolean | undefined
            studioExecutive?: boolean | undefined
            stuntDepartment?: boolean | undefined
            transportationDepartment?: boolean | undefined
            videoGameProductionStaff?: boolean | undefined
            writer?: boolean | undefined
          }
        }
        output: StaffBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/technology': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: TechnologyFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/technology/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: TechnologyBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            borgTechnology?: boolean | undefined
            borgComponent?: boolean | undefined
            communicationsTechnology?: boolean | undefined
            computerTechnology?: boolean | undefined
            computerProgramming?: boolean | undefined
            subroutine?: boolean | undefined
            database?: boolean | undefined
            energyTechnology?: boolean | undefined
            fictionalTechnology?: boolean | undefined
            holographicTechnology?: boolean | undefined
            identificationTechnology?: boolean | undefined
            lifeSupportTechnology?: boolean | undefined
            sensorTechnology?: boolean | undefined
            shieldTechnology?: boolean | undefined
            tool?: boolean | undefined
            culinaryTool?: boolean | undefined
            engineeringTool?: boolean | undefined
            householdTool?: boolean | undefined
            medicalEquipment?: boolean | undefined
            transporterTechnology?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            borgTechnology?: boolean | undefined
            borgComponent?: boolean | undefined
            communicationsTechnology?: boolean | undefined
            computerTechnology?: boolean | undefined
            computerProgramming?: boolean | undefined
            subroutine?: boolean | undefined
            database?: boolean | undefined
            energyTechnology?: boolean | undefined
            fictionalTechnology?: boolean | undefined
            holographicTechnology?: boolean | undefined
            identificationTechnology?: boolean | undefined
            lifeSupportTechnology?: boolean | undefined
            sensorTechnology?: boolean | undefined
            shieldTechnology?: boolean | undefined
            tool?: boolean | undefined
            culinaryTool?: boolean | undefined
            engineeringTool?: boolean | undefined
            householdTool?: boolean | undefined
            medicalEquipment?: boolean | undefined
            transporterTechnology?: boolean | undefined
          }
        }
        output: TechnologyBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/title': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: TitleFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/title/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: TitleBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            militaryRank?: boolean | undefined
            fleetRank?: boolean | undefined
            religiousTitle?: boolean | undefined
            position?: boolean | undefined
            mirror?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            militaryRank?: boolean | undefined
            fleetRank?: boolean | undefined
            religiousTitle?: boolean | undefined
            position?: boolean | undefined
            mirror?: boolean | undefined
          }
        }
        output: TitleBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tradingCard': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: TradingCardFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tradingCard/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: TradingCardBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            tradingCardDeckUid?: string | undefined
            tradingCardSetUid?: string | undefined
          }
        } & {
          form: {
            name?: string | undefined
            tradingCardDeckUid?: string | undefined
            tradingCardSetUid?: string | undefined
          }
        }
        output: TradingCardBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tradingCardDeck': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: TradingCardDeckFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tradingCardDeck/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: TradingCardDeckBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & { json: { name?: string | undefined; tradingCardSetUid?: string | undefined } } & {
          form: { name?: string | undefined; tradingCardSetUid?: string | undefined }
        }
        output: TradingCardDeckBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tradingCardSet': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: TradingCardSetFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tradingCardSet/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: TradingCardSetBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            releaseYearFrom?: number | undefined
            releaseYearTo?: number | undefined
            cardsPerPackFrom?: number | undefined
            cardsPerPackTo?: number | undefined
            packsPerBoxFrom?: number | undefined
            packsPerBoxTo?: number | undefined
            boxesPerCaseFrom?: number | undefined
            boxesPerCaseTo?: number | undefined
            productionRunFrom?: number | undefined
            productionRunTo?: number | undefined
            productionRunUnit?: string | undefined
            cardWidthFrom?: number | undefined
            cardWidthTo?: number | undefined
            cardHeightFrom?: number | undefined
            cardHeightTo?: number | undefined
          }
        } & {
          form: {
            name?: string | undefined
            releaseYearFrom?: number | undefined
            releaseYearTo?: number | undefined
            cardsPerPackFrom?: number | undefined
            cardsPerPackTo?: number | undefined
            packsPerBoxFrom?: number | undefined
            packsPerBoxTo?: number | undefined
            boxesPerCaseFrom?: number | undefined
            boxesPerCaseTo?: number | undefined
            productionRunFrom?: number | undefined
            productionRunTo?: number | undefined
            productionRunUnit?: string | undefined
            cardWidthFrom?: number | undefined
            cardWidthTo?: number | undefined
            cardHeightFrom?: number | undefined
            cardHeightTo?: number | undefined
          }
        }
        output: TradingCardSetBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/videoGame': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: VideoGameFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/videoGame/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: VideoGameBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            releaseDateFrom?: string | undefined
            releaseDateTo?: string | undefined
          }
        } & {
          form: {
            title?: string | undefined
            releaseDateFrom?: string | undefined
            releaseDateTo?: string | undefined
          }
        }
        output: VideoGameBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/videoRelease': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: VideoReleaseFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/videoRelease/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: VideoReleaseBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            title?: string | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            runTimeFrom?: number | undefined
            runTimeTo?: number | undefined
          }
        } & {
          form: {
            title?: string | undefined
            yearFrom?: number | undefined
            yearTo?: number | undefined
            runTimeFrom?: number | undefined
            runTimeTo?: number | undefined
          }
        }
        output: VideoReleaseBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/weapon': {
      $get:
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: WeaponFullResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uid: string; apiKey?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/weapon/search': {
      $get:
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: WeaponBaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageNumber?: number | undefined
                pageSize?: number | undefined
                apiKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: {
          query: {
            pageNumber?: number | undefined
            pageSize?: number | undefined
            sort?: string | undefined
            apiKey?: string | undefined
          }
        } & {
          json: {
            name?: string | undefined
            handHeldWeapon?: boolean | undefined
            laserTechnology?: boolean | undefined
            plasmaTechnology?: boolean | undefined
            photonicTechnology?: boolean | undefined
            phaserTechnology?: boolean | undefined
            mirror?: boolean | undefined
            alternateReality?: boolean | undefined
          }
        } & {
          form: {
            name?: string | undefined
            handHeldWeapon?: boolean | undefined
            laserTechnology?: boolean | undefined
            plasmaTechnology?: boolean | undefined
            photonicTechnology?: boolean | undefined
            phaserTechnology?: boolean | undefined
            mirror?: boolean | undefined
            alternateReality?: boolean | undefined
          }
        }
        output: WeaponBaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
