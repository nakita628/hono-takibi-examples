import { createRoute, z } from '@hono/zod-openapi'

const SearchOperatorNumericNullableIntegerSchema: z.ZodType<SearchOperatorNumericNullableIntegerType> =
  z
    .lazy(() =>
      z
        .xor([
          SearchOperatorGreaterThanSchema,
          SearchOperatorLessThanSchema,
          SearchOperatorIsNullTSchema,
          SearchOperatorIsNotNullTSchema,
          SearchOperatorIsSchema,
          SearchOperatorIsNotSchema,
        ])
        .openapi({
          discriminator: {
            mapping: {
              greaterThan: '#/components/schemas/SearchOperatorGreaterThan',
              is: '#/components/schemas/SearchOperatorIs',
              isNot: '#/components/schemas/SearchOperatorIsNot',
              isNotNull: '#/components/schemas/SearchOperatorIsNotNullT',
              isNull: '#/components/schemas/SearchOperatorIsNullT',
              lessThan: '#/components/schemas/SearchOperatorLessThan',
            },
            propertyName: 'operator',
          },
          required: ['operator'],
        }),
    )
    .openapi('SearchOperatorNumericNullableInteger')

type SearchConditionAgeRatingType = {
  ageRating: z.infer<typeof SearchOperatorNumericNullableIntegerSchema>
}

const SearchConditionBookSchema: z.ZodType<SearchConditionBookType> = z
  .lazy(() =>
    z.xor([
      SearchConditionAnyOfBookSchema,
      SearchConditionAllOfBookSchema,
      SearchConditionLibraryIdSchema,
      SearchConditionReadListIdSchema,
      SearchConditionSeriesIdSchema,
      SearchConditionDeletedSchema,
      SearchConditionOneShotSchema,
      SearchConditionTitleSchema,
      SearchConditionReleaseDateSchema,
      SearchConditionTagSchema,
      SearchConditionNumberSortSchema,
      SearchConditionReadStatusSchema,
      SearchConditionMediaStatusSchema,
      SearchConditionMediaProfileSchema,
      SearchConditionAuthorSchema,
      SearchConditionNotableEntitySchema,
      SearchConditionPosterSchema,
    ]),
  )
  .openapi('SearchConditionBook')

type SearchConditionAllOfBookType = { allOf: z.infer<typeof SearchConditionBookSchema>[] }

const SearchConditionSeriesSchema: z.ZodType<SearchConditionSeriesType> = z
  .lazy(() =>
    z.xor([
      SearchConditionAnyOfSeriesSchema,
      SearchConditionAllOfSeriesSchema,
      SearchConditionLibraryIdSchema,
      SearchConditionCollectionIdSchema,
      SearchConditionDeletedSchema,
      SearchConditionCompleteSchema,
      SearchConditionOneShotSchema,
      SearchConditionTitleSchema,
      SearchConditionTitleSortSchema,
      SearchConditionReleaseDateSchema,
      SearchConditionTagSchema,
      SearchConditionSharingLabelSchema,
      SearchConditionPublisherSchema,
      SearchConditionLanguageSchema,
      SearchConditionGenreSchema,
      SearchConditionAgeRatingSchema,
      SearchConditionReadStatusSchema,
      SearchConditionSeriesStatusSchema,
      SearchConditionAuthorSchema,
      SearchConditionNotableEntitySchema,
    ]),
  )
  .openapi('SearchConditionSeries')

type SearchConditionAllOfSeriesType = { allOf: z.infer<typeof SearchConditionSeriesSchema>[] }

type SearchConditionAnyOfBookType = { anyOf: z.infer<typeof SearchConditionBookSchema>[] }

type SearchConditionAnyOfSeriesType = { anyOf: z.infer<typeof SearchConditionSeriesSchema>[] }

type SearchOperatorIsType = { value: unknown }

const SearchOperatorIsSchema: z.ZodType<SearchOperatorIsType> = z
  .object({ value: z.any() })
  .openapi({ required: ['value'] })
  .openapi('SearchOperatorIs')

type SearchOperatorIsNotType = { value: unknown }

const SearchOperatorIsNotSchema: z.ZodType<SearchOperatorIsNotType> = z
  .object({ value: z.any() })
  .openapi({ required: ['value'] })
  .openapi('SearchOperatorIsNot')

const SearchOperatorEqualityAuthorMatchSchema = z
  .xor([SearchOperatorIsSchema, SearchOperatorIsNotSchema])
  .openapi({
    discriminator: {
      mapping: {
        is: '#/components/schemas/SearchOperatorIs',
        isNot: '#/components/schemas/SearchOperatorIsNot',
      },
      propertyName: 'operator',
    },
    required: ['operator'],
  })
  .openapi('SearchOperatorEqualityAuthorMatch')

type SearchConditionAuthorType = { author: z.infer<typeof SearchOperatorEqualityAuthorMatchSchema> }

const SearchConditionAnyOfBookSchema: z.ZodType<SearchConditionAnyOfBookType> = z
  .lazy(() =>
    z.object({ anyOf: z.array(SearchConditionBookSchema) }).openapi({ required: ['anyOf'] }),
  )
  .openapi('SearchConditionAnyOfBook')

const SearchConditionAllOfBookSchema: z.ZodType<SearchConditionAllOfBookType> = z
  .lazy(() =>
    z.object({ allOf: z.array(SearchConditionBookSchema) }).openapi({ required: ['allOf'] }),
  )
  .openapi('SearchConditionAllOfBook')

const SearchOperatorEqualityStringSchema = z
  .xor([SearchOperatorIsSchema, SearchOperatorIsNotSchema])
  .openapi({
    discriminator: {
      mapping: {
        is: '#/components/schemas/SearchOperatorIs',
        isNot: '#/components/schemas/SearchOperatorIsNot',
      },
      propertyName: 'operator',
    },
    required: ['operator'],
  })
  .openapi('SearchOperatorEqualityString')

type SearchConditionLibraryIdType = {
  libraryId: z.infer<typeof SearchOperatorEqualityStringSchema>
}

const SearchConditionLibraryIdSchema: z.ZodType<SearchConditionLibraryIdType> = z
  .object({ libraryId: SearchOperatorEqualityStringSchema })
  .openapi({ required: ['libraryId'] })
  .openapi('SearchConditionLibraryId')

type SearchConditionReadListIdType = {
  readListId: z.infer<typeof SearchOperatorEqualityStringSchema>
}

const SearchConditionReadListIdSchema: z.ZodType<SearchConditionReadListIdType> = z
  .object({ readListId: SearchOperatorEqualityStringSchema })
  .openapi({ required: ['readListId'] })
  .openapi('SearchConditionReadListId')

type SearchConditionSeriesIdType = { seriesId: z.infer<typeof SearchOperatorEqualityStringSchema> }

const SearchConditionSeriesIdSchema: z.ZodType<SearchConditionSeriesIdType> = z
  .object({ seriesId: SearchOperatorEqualityStringSchema })
  .openapi({ required: ['seriesId'] })
  .openapi('SearchConditionSeriesId')

const SearchOperatorBooleanSchema: z.ZodType<SearchOperatorBooleanType> = z
  .lazy(() =>
    z
      .xor([SearchOperatorIsTrueSchema, SearchOperatorIsFalseSchema])
      .openapi({
        discriminator: {
          mapping: {
            isFalse: '#/components/schemas/SearchOperatorIsFalse',
            isTrue: '#/components/schemas/SearchOperatorIsTrue',
          },
          propertyName: 'operator',
        },
        required: ['operator'],
      }),
  )
  .openapi('SearchOperatorBoolean')

type SearchConditionDeletedType = { deleted: z.infer<typeof SearchOperatorBooleanSchema> }

const SearchConditionDeletedSchema: z.ZodType<SearchConditionDeletedType> = z
  .object({ deleted: SearchOperatorBooleanSchema })
  .openapi({ required: ['deleted'] })
  .openapi('SearchConditionDeleted')

type SearchConditionOneShotType = { oneShot: z.infer<typeof SearchOperatorBooleanSchema> }

const SearchConditionOneShotSchema: z.ZodType<SearchConditionOneShotType> = z
  .object({ oneShot: SearchOperatorBooleanSchema })
  .openapi({ required: ['oneShot'] })
  .openapi('SearchConditionOneShot')

const SearchOperatorBeginsWithSchema = z
  .object({ value: z.string() })
  .openapi({ required: ['value'] })
  .openapi('SearchOperatorBeginsWith')

const SearchOperatorDoesNotBeginWithSchema = z
  .object({ value: z.string() })
  .openapi({ required: ['value'] })
  .openapi('SearchOperatorDoesNotBeginWith')

const SearchOperatorContainsSchema = z
  .object({ value: z.string() })
  .openapi({ required: ['value'] })
  .openapi('SearchOperatorContains')

const SearchOperatorDoesNotContainSchema = z
  .object({ value: z.string() })
  .openapi({ required: ['value'] })
  .openapi('SearchOperatorDoesNotContain')

const SearchOperatorEndsWithSchema = z
  .object({ value: z.string() })
  .openapi({ required: ['value'] })
  .openapi('SearchOperatorEndsWith')

const SearchOperatorDoesNotEndWithSchema = z
  .object({ value: z.string() })
  .openapi({ required: ['value'] })
  .openapi('SearchOperatorDoesNotEndWith')

const SearchOperatorStringSchema = z
  .xor([
    SearchOperatorBeginsWithSchema,
    SearchOperatorDoesNotBeginWithSchema,
    SearchOperatorContainsSchema,
    SearchOperatorDoesNotContainSchema,
    SearchOperatorEndsWithSchema,
    SearchOperatorDoesNotEndWithSchema,
    SearchOperatorIsSchema,
    SearchOperatorIsNotSchema,
  ])
  .openapi({
    discriminator: {
      mapping: {
        beginsWith: '#/components/schemas/SearchOperatorBeginsWith',
        contains: '#/components/schemas/SearchOperatorContains',
        doesNotBeginWith: '#/components/schemas/SearchOperatorDoesNotBeginWith',
        doesNotContain: '#/components/schemas/SearchOperatorDoesNotContain',
        doesNotEndWith: '#/components/schemas/SearchOperatorDoesNotEndWith',
        endsWith: '#/components/schemas/SearchOperatorEndsWith',
        is: '#/components/schemas/SearchOperatorIs',
        isNot: '#/components/schemas/SearchOperatorIsNot',
      },
      propertyName: 'operator',
    },
    required: ['operator'],
  })
  .openapi('SearchOperatorString')

type SearchConditionTitleType = { title: z.infer<typeof SearchOperatorStringSchema> }

const SearchConditionTitleSchema: z.ZodType<SearchConditionTitleType> = z
  .object({ title: SearchOperatorStringSchema })
  .openapi({ required: ['title'] })
  .openapi('SearchConditionTitle')

const SearchOperatorDateSchema: z.ZodType<SearchOperatorDateType> = z
  .lazy(() =>
    z
      .xor([
        SearchOperatorBeforeSchema,
        SearchOperatorAfterSchema,
        SearchOperatorIsInTheLastSchema,
        SearchOperatorIsNotInTheLastSchema,
        SearchOperatorIsNullSchema,
        SearchOperatorIsNotNullSchema,
      ])
      .openapi({
        discriminator: {
          mapping: {
            after: '#/components/schemas/SearchOperatorAfter',
            before: '#/components/schemas/SearchOperatorBefore',
            isInTheLast: '#/components/schemas/SearchOperatorIsInTheLast',
            isNotInTheLast: '#/components/schemas/SearchOperatorIsNotInTheLast',
            isNotNull: '#/components/schemas/SearchOperatorIsNotNull',
            isNull: '#/components/schemas/SearchOperatorIsNull',
          },
          propertyName: 'operator',
        },
        required: ['operator'],
      }),
  )
  .openapi('SearchOperatorDate')

type SearchConditionReleaseDateType = { releaseDate: z.infer<typeof SearchOperatorDateSchema> }

const SearchConditionReleaseDateSchema: z.ZodType<SearchConditionReleaseDateType> = z
  .object({ releaseDate: SearchOperatorDateSchema })
  .openapi({ required: ['releaseDate'] })
  .openapi('SearchConditionReleaseDate')

const SearchOperatorEqualityNullableStringSchema: z.ZodType<SearchOperatorEqualityNullableStringType> =
  z
    .lazy(() =>
      z
        .xor([
          SearchOperatorIsSchema,
          SearchOperatorIsNotSchema,
          SearchOperatorIsNullTSchema,
          SearchOperatorIsNotNullTSchema,
        ])
        .openapi({
          discriminator: {
            mapping: {
              is: '#/components/schemas/SearchOperatorIs',
              isNot: '#/components/schemas/SearchOperatorIsNot',
              isNotNull: '#/components/schemas/SearchOperatorIsNotNullT',
              isNull: '#/components/schemas/SearchOperatorIsNullT',
            },
            propertyName: 'operator',
          },
          required: ['operator'],
        }),
    )
    .openapi('SearchOperatorEqualityNullableString')

type SearchConditionTagType = { tag: z.infer<typeof SearchOperatorEqualityNullableStringSchema> }

const SearchConditionTagSchema: z.ZodType<SearchConditionTagType> = z
  .object({ tag: SearchOperatorEqualityNullableStringSchema })
  .openapi({ required: ['tag'] })
  .openapi('SearchConditionTag')

type SearchOperatorGreaterThanType = { value: unknown }

const SearchOperatorGreaterThanSchema: z.ZodType<SearchOperatorGreaterThanType> = z
  .object({ value: z.any() })
  .openapi({ required: ['value'] })
  .openapi('SearchOperatorGreaterThan')

type SearchOperatorLessThanType = { value: unknown }

const SearchOperatorLessThanSchema: z.ZodType<SearchOperatorLessThanType> = z
  .object({ value: z.any() })
  .openapi({ required: ['value'] })
  .openapi('SearchOperatorLessThan')

const SearchOperatorNumericTFloatSchema = z
  .xor([
    SearchOperatorGreaterThanSchema,
    SearchOperatorLessThanSchema,
    SearchOperatorIsSchema,
    SearchOperatorIsNotSchema,
  ])
  .openapi({
    discriminator: {
      mapping: {
        greaterThan: '#/components/schemas/SearchOperatorGreaterThan',
        is: '#/components/schemas/SearchOperatorIs',
        isNot: '#/components/schemas/SearchOperatorIsNot',
        lessThan: '#/components/schemas/SearchOperatorLessThan',
      },
      propertyName: 'operator',
    },
    required: ['operator'],
  })
  .openapi('SearchOperatorNumericTFloat')

type SearchConditionNumberSortType = {
  numberSort: z.infer<typeof SearchOperatorNumericTFloatSchema>
}

const SearchConditionNumberSortSchema: z.ZodType<SearchConditionNumberSortType> = z
  .object({ numberSort: SearchOperatorNumericTFloatSchema })
  .openapi({ required: ['numberSort'] })
  .openapi('SearchConditionNumberSort')

const SearchOperatorEqualityReadStatusSchema = z
  .xor([SearchOperatorIsSchema, SearchOperatorIsNotSchema])
  .openapi({
    discriminator: {
      mapping: {
        is: '#/components/schemas/SearchOperatorIs',
        isNot: '#/components/schemas/SearchOperatorIsNot',
      },
      propertyName: 'operator',
    },
    required: ['operator'],
  })
  .openapi('SearchOperatorEqualityReadStatus')

type SearchConditionReadStatusType = {
  readStatus: z.infer<typeof SearchOperatorEqualityReadStatusSchema>
}

const SearchConditionReadStatusSchema: z.ZodType<SearchConditionReadStatusType> = z
  .object({ readStatus: SearchOperatorEqualityReadStatusSchema })
  .openapi({ required: ['readStatus'] })
  .openapi('SearchConditionReadStatus')

const SearchOperatorEqualityStatusSchema = z
  .xor([SearchOperatorIsSchema, SearchOperatorIsNotSchema])
  .openapi({
    discriminator: {
      mapping: {
        is: '#/components/schemas/SearchOperatorIs',
        isNot: '#/components/schemas/SearchOperatorIsNot',
      },
      propertyName: 'operator',
    },
    required: ['operator'],
  })
  .openapi('SearchOperatorEqualityStatus')

type SearchConditionMediaStatusType = {
  mediaStatus: z.infer<typeof SearchOperatorEqualityStatusSchema>
}

const SearchConditionMediaStatusSchema: z.ZodType<SearchConditionMediaStatusType> = z
  .object({ mediaStatus: SearchOperatorEqualityStatusSchema })
  .openapi({ required: ['mediaStatus'] })
  .openapi('SearchConditionMediaStatus')

const SearchOperatorEqualityMediaProfileSchema = z
  .xor([SearchOperatorIsSchema, SearchOperatorIsNotSchema])
  .openapi({
    discriminator: {
      mapping: {
        is: '#/components/schemas/SearchOperatorIs',
        isNot: '#/components/schemas/SearchOperatorIsNot',
      },
      propertyName: 'operator',
    },
    required: ['operator'],
  })
  .openapi('SearchOperatorEqualityMediaProfile')

type SearchConditionMediaProfileType = {
  mediaProfile: z.infer<typeof SearchOperatorEqualityMediaProfileSchema>
}

const SearchConditionMediaProfileSchema: z.ZodType<SearchConditionMediaProfileType> = z
  .object({ mediaProfile: SearchOperatorEqualityMediaProfileSchema })
  .openapi({ required: ['mediaProfile'] })
  .openapi('SearchConditionMediaProfile')

const SearchConditionAuthorSchema: z.ZodType<SearchConditionAuthorType> = z
  .object({ author: SearchOperatorEqualityAuthorMatchSchema })
  .openapi({ required: ['author'] })
  .openapi('SearchConditionAuthor')

const SearchOperatorEqualityNotableEntityMatchSchema = z
  .xor([SearchOperatorIsSchema, SearchOperatorIsNotSchema])
  .openapi({
    discriminator: {
      mapping: {
        is: '#/components/schemas/SearchOperatorIs',
        isNot: '#/components/schemas/SearchOperatorIsNot',
      },
      propertyName: 'operator',
    },
    required: ['operator'],
  })
  .openapi('SearchOperatorEqualityNotableEntityMatch')

type SearchConditionNotableEntityType = {
  notableEntity: z.infer<typeof SearchOperatorEqualityNotableEntityMatchSchema>
}

const SearchConditionNotableEntitySchema: z.ZodType<SearchConditionNotableEntityType> = z
  .object({ notableEntity: SearchOperatorEqualityNotableEntityMatchSchema })
  .openapi({ required: ['notableEntity'] })
  .openapi('SearchConditionNotableEntity')

const SearchOperatorEqualityPosterMatchSchema = z
  .xor([SearchOperatorIsSchema, SearchOperatorIsNotSchema])
  .openapi({
    discriminator: {
      mapping: {
        is: '#/components/schemas/SearchOperatorIs',
        isNot: '#/components/schemas/SearchOperatorIsNot',
      },
      propertyName: 'operator',
    },
    required: ['operator'],
  })
  .openapi('SearchOperatorEqualityPosterMatch')

type SearchConditionPosterType = { poster: z.infer<typeof SearchOperatorEqualityPosterMatchSchema> }

const SearchConditionPosterSchema: z.ZodType<SearchConditionPosterType> = z
  .object({ poster: SearchOperatorEqualityPosterMatchSchema })
  .openapi({ required: ['poster'] })
  .openapi('SearchConditionPoster')

type SearchConditionBookType =
  | z.infer<typeof SearchConditionAnyOfBookSchema>
  | z.infer<typeof SearchConditionAllOfBookSchema>
  | z.infer<typeof SearchConditionLibraryIdSchema>
  | z.infer<typeof SearchConditionReadListIdSchema>
  | z.infer<typeof SearchConditionSeriesIdSchema>
  | z.infer<typeof SearchConditionDeletedSchema>
  | z.infer<typeof SearchConditionOneShotSchema>
  | z.infer<typeof SearchConditionTitleSchema>
  | z.infer<typeof SearchConditionReleaseDateSchema>
  | z.infer<typeof SearchConditionTagSchema>
  | z.infer<typeof SearchConditionNumberSortSchema>
  | z.infer<typeof SearchConditionReadStatusSchema>
  | z.infer<typeof SearchConditionMediaStatusSchema>
  | z.infer<typeof SearchConditionMediaProfileSchema>
  | z.infer<typeof SearchConditionAuthorSchema>
  | z.infer<typeof SearchConditionNotableEntitySchema>
  | z.infer<typeof SearchConditionPosterSchema>

type SearchConditionCollectionIdType = {
  collectionId: z.infer<typeof SearchOperatorEqualityStringSchema>
}

type SearchConditionCompleteType = { complete: z.infer<typeof SearchOperatorBooleanSchema> }

type SearchConditionGenreType = {
  genre: z.infer<typeof SearchOperatorEqualityNullableStringSchema>
}

type SearchConditionLanguageType = { language: z.infer<typeof SearchOperatorEqualityStringSchema> }

type SearchConditionPublisherType = {
  publisher: z.infer<typeof SearchOperatorEqualityStringSchema>
}

const SearchConditionAnyOfSeriesSchema: z.ZodType<SearchConditionAnyOfSeriesType> = z
  .lazy(() =>
    z.object({ anyOf: z.array(SearchConditionSeriesSchema) }).openapi({ required: ['anyOf'] }),
  )
  .openapi('SearchConditionAnyOfSeries')

const SearchConditionAllOfSeriesSchema: z.ZodType<SearchConditionAllOfSeriesType> = z
  .lazy(() =>
    z.object({ allOf: z.array(SearchConditionSeriesSchema) }).openapi({ required: ['allOf'] }),
  )
  .openapi('SearchConditionAllOfSeries')

const SearchConditionCollectionIdSchema: z.ZodType<SearchConditionCollectionIdType> = z
  .object({ collectionId: SearchOperatorEqualityStringSchema })
  .openapi({ required: ['collectionId'] })
  .openapi('SearchConditionCollectionId')

const SearchConditionCompleteSchema: z.ZodType<SearchConditionCompleteType> = z
  .object({ complete: SearchOperatorBooleanSchema })
  .openapi({ required: ['complete'] })
  .openapi('SearchConditionComplete')

type SearchConditionTitleSortType = { titleSort: z.infer<typeof SearchOperatorStringSchema> }

const SearchConditionTitleSortSchema: z.ZodType<SearchConditionTitleSortType> = z
  .object({ titleSort: SearchOperatorStringSchema })
  .openapi({ required: ['titleSort'] })
  .openapi('SearchConditionTitleSort')

type SearchConditionSharingLabelType = {
  sharingLabel: z.infer<typeof SearchOperatorEqualityNullableStringSchema>
}

const SearchConditionSharingLabelSchema: z.ZodType<SearchConditionSharingLabelType> = z
  .object({ sharingLabel: SearchOperatorEqualityNullableStringSchema })
  .openapi({ required: ['sharingLabel'] })
  .openapi('SearchConditionSharingLabel')

const SearchConditionPublisherSchema: z.ZodType<SearchConditionPublisherType> = z
  .object({ publisher: SearchOperatorEqualityStringSchema })
  .openapi({ required: ['publisher'] })
  .openapi('SearchConditionPublisher')

const SearchConditionLanguageSchema: z.ZodType<SearchConditionLanguageType> = z
  .object({ language: SearchOperatorEqualityStringSchema })
  .openapi({ required: ['language'] })
  .openapi('SearchConditionLanguage')

const SearchConditionGenreSchema: z.ZodType<SearchConditionGenreType> = z
  .object({ genre: SearchOperatorEqualityNullableStringSchema })
  .openapi({ required: ['genre'] })
  .openapi('SearchConditionGenre')

const SearchConditionAgeRatingSchema: z.ZodType<SearchConditionAgeRatingType> = z
  .object({ ageRating: SearchOperatorNumericNullableIntegerSchema })
  .openapi({ required: ['ageRating'] })
  .openapi('SearchConditionAgeRating')

type SearchConditionSeriesStatusType = {
  seriesStatus: z.infer<typeof SearchOperatorEqualityStatusSchema>
}

const SearchConditionSeriesStatusSchema: z.ZodType<SearchConditionSeriesStatusType> = z
  .object({ seriesStatus: SearchOperatorEqualityStatusSchema })
  .openapi({ required: ['seriesStatus'] })
  .openapi('SearchConditionSeriesStatus')

type SearchConditionSeriesType =
  | z.infer<typeof SearchConditionAnyOfSeriesSchema>
  | z.infer<typeof SearchConditionAllOfSeriesSchema>
  | z.infer<typeof SearchConditionLibraryIdSchema>
  | z.infer<typeof SearchConditionCollectionIdSchema>
  | z.infer<typeof SearchConditionDeletedSchema>
  | z.infer<typeof SearchConditionCompleteSchema>
  | z.infer<typeof SearchConditionOneShotSchema>
  | z.infer<typeof SearchConditionTitleSchema>
  | z.infer<typeof SearchConditionTitleSortSchema>
  | z.infer<typeof SearchConditionReleaseDateSchema>
  | z.infer<typeof SearchConditionTagSchema>
  | z.infer<typeof SearchConditionSharingLabelSchema>
  | z.infer<typeof SearchConditionPublisherSchema>
  | z.infer<typeof SearchConditionLanguageSchema>
  | z.infer<typeof SearchConditionGenreSchema>
  | z.infer<typeof SearchConditionAgeRatingSchema>
  | z.infer<typeof SearchConditionReadStatusSchema>
  | z.infer<typeof SearchConditionSeriesStatusSchema>
  | z.infer<typeof SearchConditionAuthorSchema>
  | z.infer<typeof SearchConditionNotableEntitySchema>

type SearchOperatorAfterType = { dateTime: string }

type SearchOperatorBeforeType = { dateTime: string }

const SearchOperatorIsTrueSchema: z.ZodType<SearchOperatorIsTrueType> = z
  .lazy(() => SearchOperatorBooleanSchema)
  .openapi('SearchOperatorIsTrue')

const SearchOperatorIsFalseSchema: z.ZodType<SearchOperatorIsFalseType> = z
  .lazy(() => SearchOperatorBooleanSchema)
  .openapi('SearchOperatorIsFalse')

type SearchOperatorBooleanType =
  | z.infer<typeof SearchOperatorIsTrueSchema>
  | z.infer<typeof SearchOperatorIsFalseSchema>

const SearchOperatorBeforeSchema: z.ZodType<SearchOperatorBeforeType> = z
  .object({ dateTime: z.iso.datetime({ offset: true }) })
  .openapi({ required: ['dateTime'] })
  .openapi('SearchOperatorBefore')

const SearchOperatorAfterSchema: z.ZodType<SearchOperatorAfterType> = z
  .object({ dateTime: z.iso.datetime({ offset: true }) })
  .openapi({ required: ['dateTime'] })
  .openapi('SearchOperatorAfter')

type SearchOperatorIsInTheLastType = { duration: string }

const SearchOperatorIsInTheLastSchema: z.ZodType<SearchOperatorIsInTheLastType> = z
  .object({ duration: z.string() })
  .openapi({ required: ['duration'] })
  .openapi('SearchOperatorIsInTheLast')

type SearchOperatorIsNotInTheLastType = { duration: string }

const SearchOperatorIsNotInTheLastSchema: z.ZodType<SearchOperatorIsNotInTheLastType> = z
  .object({ duration: z.string() })
  .openapi({ required: ['duration'] })
  .openapi('SearchOperatorIsNotInTheLast')

const SearchOperatorIsNullSchema: z.ZodType<SearchOperatorIsNullType> = z
  .lazy(() => SearchOperatorDateSchema)
  .openapi('SearchOperatorIsNull')

const SearchOperatorIsNotNullSchema: z.ZodType<SearchOperatorIsNotNullType> = z
  .lazy(() => SearchOperatorDateSchema)
  .openapi('SearchOperatorIsNotNull')

type SearchOperatorDateType =
  | z.infer<typeof SearchOperatorBeforeSchema>
  | z.infer<typeof SearchOperatorAfterSchema>
  | z.infer<typeof SearchOperatorIsInTheLastSchema>
  | z.infer<typeof SearchOperatorIsNotInTheLastSchema>
  | z.infer<typeof SearchOperatorIsNullSchema>
  | z.infer<typeof SearchOperatorIsNotNullSchema>

const SearchOperatorIsNullTSchema: z.ZodType<SearchOperatorIsNullTType> = z
  .lazy(() =>
    SearchOperatorNumericNullableIntegerSchema.and(SearchOperatorEqualityNullableStringSchema),
  )
  .openapi('SearchOperatorIsNullT')

const SearchOperatorIsNotNullTSchema: z.ZodType<SearchOperatorIsNotNullTType> = z
  .lazy(() =>
    SearchOperatorNumericNullableIntegerSchema.and(SearchOperatorEqualityNullableStringSchema),
  )
  .openapi('SearchOperatorIsNotNullT')

type SearchOperatorEqualityNullableStringType =
  | z.infer<typeof SearchOperatorIsSchema>
  | z.infer<typeof SearchOperatorIsNotSchema>
  | z.infer<typeof SearchOperatorIsNullTSchema>
  | z.infer<typeof SearchOperatorIsNotNullTSchema>

type SearchOperatorIsFalseType = z.infer<typeof SearchOperatorBooleanSchema>

type SearchOperatorIsNotNullType = z.infer<typeof SearchOperatorDateSchema>

type SearchOperatorIsNotNullTType = z.infer<typeof SearchOperatorNumericNullableIntegerSchema> &
  z.infer<typeof SearchOperatorEqualityNullableStringSchema>

type SearchOperatorIsNullType = z.infer<typeof SearchOperatorDateSchema>

type SearchOperatorIsNullTType = z.infer<typeof SearchOperatorNumericNullableIntegerSchema> &
  z.infer<typeof SearchOperatorEqualityNullableStringSchema>

type SearchOperatorIsTrueType = z.infer<typeof SearchOperatorBooleanSchema>

type SearchOperatorNumericNullableIntegerType =
  | z.infer<typeof SearchOperatorGreaterThanSchema>
  | z.infer<typeof SearchOperatorLessThanSchema>
  | z.infer<typeof SearchOperatorIsNullTSchema>
  | z.infer<typeof SearchOperatorIsNotNullTSchema>
  | z.infer<typeof SearchOperatorIsSchema>
  | z.infer<typeof SearchOperatorIsNotSchema>

const AgeRestrictionDtoSchema = z
  .object({ age: z.int32(), restriction: z.enum(['ALLOW_ONLY', 'EXCLUDE']) })
  .openapi({ required: ['age', 'restriction'] })
  .openapi('AgeRestrictionDto')

const AgeRestrictionUpdateDtoSchema = z
  .object({ age: z.int32(), restriction: z.enum(['ALLOW_ONLY', 'EXCLUDE', 'NONE']) })
  .openapi({ required: ['age', 'restriction'] })
  .openapi('AgeRestrictionUpdateDto')

const AlternateTitleDtoSchema = z
  .object({ label: z.string(), title: z.string() })
  .openapi({ required: ['label', 'title'] })
  .openapi('AlternateTitleDto')

const AlternateTitleUpdateDtoSchema = z
  .object({ label: z.string().min(1), title: z.string().min(1) })
  .openapi({ required: ['label', 'title'] })
  .openapi('AlternateTitleUpdateDto')

const ApiKeyDtoSchema = z
  .object({
    comment: z.string(),
    createdDate: z.iso.datetime({ offset: true }),
    id: z.string(),
    key: z.string(),
    lastModifiedDate: z.iso.datetime({ offset: true }),
    userId: z.string(),
  })
  .openapi({ required: ['comment', 'createdDate', 'id', 'key', 'lastModifiedDate', 'userId'] })
  .openapi('ApiKeyDto')

const ApiKeyRequestDtoSchema = z
  .object({ comment: z.string().min(1) })
  .openapi({ required: ['comment'] })
  .openapi('ApiKeyRequestDto')

const AuthenticationActivityDtoSchema = z
  .object({
    apiKeyComment: z.string().exactOptional(),
    apiKeyId: z.string().exactOptional(),
    dateTime: z.iso.datetime({ offset: true }),
    email: z.string().exactOptional(),
    error: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    source: z.string().exactOptional(),
    success: z.boolean(),
    userAgent: z.string().exactOptional(),
    userId: z.string().exactOptional(),
  })
  .openapi({ required: ['dateTime', 'success'] })
  .openapi('AuthenticationActivityDto')

const AuthorDtoSchema = z
  .object({ name: z.string(), role: z.string() })
  .openapi({ required: ['name', 'role'] })
  .openapi('AuthorDto')

const AuthorUpdateDtoSchema = z
  .object({ name: z.string().min(1), role: z.string().min(1) })
  .openapi({ required: ['name', 'role'] })
  .openapi('AuthorUpdateDto')

const MediaDtoSchema = z
  .object({
    comment: z.string(),
    epubDivinaCompatible: z.boolean(),
    epubIsKepub: z.boolean(),
    mediaProfile: z.string(),
    mediaType: z.string(),
    pagesCount: z.int32(),
    status: z.string(),
  })
  .openapi({
    required: [
      'comment',
      'epubDivinaCompatible',
      'epubIsKepub',
      'mediaProfile',
      'mediaType',
      'pagesCount',
      'status',
    ],
  })
  .openapi('MediaDto')

const WebLinkDtoSchema = z
  .object({ label: z.string(), url: z.string() })
  .openapi({ required: ['label', 'url'] })
  .openapi('WebLinkDto')

const NotableEntityDtoSchema = z
  .object({ kind: z.string(), name: z.string() })
  .openapi({ required: ['kind', 'name'] })
  .openapi('NotableEntityDto')

const BookMetadataDtoSchema = z
  .object({
    authors: z.array(AuthorDtoSchema),
    authorsLock: z.boolean(),
    created: z.iso.datetime({ offset: true }),
    isbn: z.string(),
    isbnLock: z.boolean(),
    lastModified: z.iso.datetime({ offset: true }),
    links: z.array(WebLinkDtoSchema),
    linksLock: z.boolean(),
    notableEntities: z.array(NotableEntityDtoSchema),
    notableEntitiesLock: z.boolean(),
    number: z.string(),
    numberLock: z.boolean(),
    numberSort: z.float32(),
    numberSortLock: z.boolean(),
    releaseDate: z.iso.date().exactOptional(),
    releaseDateLock: z.boolean(),
    summary: z.string(),
    summaryLock: z.boolean(),
    tags: z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
    tagsLock: z.boolean(),
    title: z.string(),
    titleLock: z.boolean(),
  })
  .openapi({
    required: [
      'authors',
      'authorsLock',
      'created',
      'isbn',
      'isbnLock',
      'lastModified',
      'links',
      'linksLock',
      'notableEntities',
      'notableEntitiesLock',
      'number',
      'numberLock',
      'numberSort',
      'numberSortLock',
      'releaseDateLock',
      'summary',
      'summaryLock',
      'tags',
      'tagsLock',
      'title',
      'titleLock',
    ],
  })
  .openapi('BookMetadataDto')

const ReadProgressDtoSchema = z
  .object({
    completed: z.boolean(),
    created: z.iso.datetime({ offset: true }),
    deviceId: z.string(),
    deviceName: z.string(),
    lastModified: z.iso.datetime({ offset: true }),
    page: z.int32(),
    readDate: z.iso.datetime({ offset: true }),
  })
  .openapi({
    required: [
      'completed',
      'created',
      'deviceId',
      'deviceName',
      'lastModified',
      'page',
      'readDate',
    ],
  })
  .openapi('ReadProgressDto')

const BookDtoSchema = z
  .object({
    created: z.iso.datetime({ offset: true }),
    deleted: z.boolean(),
    fileHash: z.string(),
    fileLastModified: z.iso.datetime({ offset: true }),
    id: z.string(),
    lastModified: z.iso.datetime({ offset: true }),
    libraryId: z.string(),
    media: MediaDtoSchema,
    metadata: BookMetadataDtoSchema,
    name: z.string(),
    number: z.int32(),
    oneshot: z.boolean(),
    readProgress: ReadProgressDtoSchema.exactOptional(),
    seriesId: z.string(),
    seriesTitle: z.string(),
    size: z.string(),
    sizeBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    url: z.string(),
  })
  .openapi({
    required: [
      'created',
      'deleted',
      'fileHash',
      'fileLastModified',
      'id',
      'lastModified',
      'libraryId',
      'media',
      'metadata',
      'name',
      'number',
      'oneshot',
      'seriesId',
      'seriesTitle',
      'size',
      'sizeBytes',
      'url',
    ],
  })
  .openapi('BookDto')

const BookImportDtoSchema = z
  .object({
    destinationName: z.string().exactOptional(),
    seriesId: z.string(),
    sourceFile: z.string(),
    upgradeBookId: z.string().exactOptional(),
  })
  .openapi({ required: ['seriesId', 'sourceFile'] })
  .openapi('BookImportDto')

const BookImportBatchDtoSchema = z
  .object({ books: z.array(BookImportDtoSchema), copyMode: z.enum(['MOVE', 'COPY', 'HARDLINK']) })
  .openapi({ required: ['books', 'copyMode'] })
  .openapi('BookImportBatchDto')

const BookMetadataAggregationDtoSchema = z
  .object({
    authors: z.array(AuthorDtoSchema),
    created: z.iso.datetime({ offset: true }),
    lastModified: z.iso.datetime({ offset: true }),
    notableEntities: z.array(NotableEntityDtoSchema),
    releaseDate: z.iso.date().exactOptional(),
    summary: z.string(),
    summaryNumber: z.string(),
    tags: z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
  })
  .openapi({
    required: [
      'authors',
      'created',
      'lastModified',
      'notableEntities',
      'summary',
      'summaryNumber',
      'tags',
    ],
  })
  .openapi('BookMetadataAggregationDto')

const WebLinkUpdateDtoSchema = z
  .object({ label: z.string().min(1), url: z.string().exactOptional() })
  .openapi({ required: ['label'] })
  .openapi('WebLinkUpdateDto')

const NotableEntityUpdateDtoSchema = z
  .object({ kind: z.string().min(1), name: z.string().min(1) })
  .openapi({ required: ['kind', 'name'] })
  .openapi('NotableEntityUpdateDto')

const BookMetadataUpdateDtoSchema = z
  .object({
    authors: z.array(AuthorUpdateDtoSchema).exactOptional(),
    authorsLock: z.boolean().exactOptional(),
    isbn: z.string().exactOptional(),
    isbnLock: z.boolean().exactOptional(),
    links: z.array(WebLinkUpdateDtoSchema).exactOptional(),
    linksLock: z.boolean().exactOptional(),
    notableEntities: z.array(NotableEntityUpdateDtoSchema).exactOptional(),
    notableEntitiesLock: z.boolean().exactOptional(),
    number: z.string().exactOptional(),
    numberLock: z.boolean().exactOptional(),
    numberSort: z.float32().exactOptional(),
    numberSortLock: z.boolean().exactOptional(),
    releaseDate: z.iso.date().exactOptional(),
    releaseDateLock: z.boolean().exactOptional(),
    summary: z.string().exactOptional(),
    summaryLock: z.boolean().exactOptional(),
    tags: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    tagsLock: z.boolean().exactOptional(),
    title: z.string().exactOptional(),
    titleLock: z.boolean().exactOptional(),
  })
  .openapi({
    description:
      "Metadata fields to update. Set a field to null to unset the metadata. You can omit fields you don't want to update.",
    required: [],
  })
  .openapi('BookMetadataUpdateDto')

const BookSearchSchema = z
  .object({
    condition: SearchConditionBookSchema.exactOptional(),
    fullTextSearch: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BookSearch')

const ClaimStatusSchema = z
  .object({ isClaimed: z.boolean() })
  .openapi({ required: ['isClaimed'] })
  .openapi('ClaimStatus')

const ClientSettingDtoSchema = z
  .object({ allowUnauthorized: z.boolean().exactOptional(), value: z.string() })
  .openapi({ required: ['value'] })
  .openapi('ClientSettingDto')

const ClientSettingGlobalUpdateDtoSchema = z
  .object({ allowUnauthorized: z.boolean(), value: z.string().min(1) })
  .openapi({ required: ['allowUnauthorized', 'value'] })
  .openapi('ClientSettingGlobalUpdateDto')

const ClientSettingUserUpdateDtoSchema = z
  .object({ value: z.string().min(1) })
  .openapi({ required: ['value'] })
  .openapi('ClientSettingUserUpdateDto')

const CollectionCreationDtoSchema = z
  .object({ name: z.string().min(1), ordered: z.boolean(), seriesIds: z.array(z.string()).min(1) })
  .openapi({ required: ['name', 'ordered', 'seriesIds'] })
  .openapi('CollectionCreationDto')

const CollectionDtoSchema = z
  .object({
    createdDate: z.iso.datetime({ offset: true }),
    filtered: z.boolean(),
    id: z.string(),
    lastModifiedDate: z.iso.datetime({ offset: true }),
    name: z.string(),
    ordered: z.boolean(),
    seriesIds: z.array(z.string()),
  })
  .openapi({
    required: ['createdDate', 'filtered', 'id', 'lastModifiedDate', 'name', 'ordered', 'seriesIds'],
  })
  .openapi('CollectionDto')

const CollectionUpdateDtoSchema = z
  .object({
    name: z.string().exactOptional(),
    ordered: z.boolean().exactOptional(),
    seriesIds: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CollectionUpdateDto')

const PathDtoSchema = z
  .object({ name: z.string(), path: z.string(), type: z.string() })
  .openapi({ required: ['name', 'path', 'type'] })
  .openapi('PathDto')

const DirectoryListingDtoSchema = z
  .object({
    directories: z.array(PathDtoSchema),
    files: z.array(PathDtoSchema),
    parent: z.string().exactOptional(),
  })
  .openapi({ required: ['directories', 'files'] })
  .openapi('DirectoryListingDto')

const DirectoryRequestDtoSchema = z
  .object({ path: z.string(), showFiles: z.boolean() })
  .openapi({ required: ['path', 'showFiles'] })
  .openapi('DirectoryRequestDto')

const GroupCountDtoSchema = z
  .object({ count: z.int32(), group: z.string() })
  .openapi({ required: ['count', 'group'] })
  .openapi('GroupCountDto')

const HistoricalEventDtoSchema = z
  .object({
    bookId: z.string().exactOptional(),
    id: z.string(),
    properties: z.record(z.string(), z.string()),
    seriesId: z.string().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }),
    type: z.string(),
  })
  .openapi({ required: ['id', 'properties', 'timestamp', 'type'] })
  .openapi('HistoricalEventDto')

const ItemAuthorDtoSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: "Author's name", example: 'gotson' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL of a site owned by the author',
        example: 'https://github.com/gotson',
      }),
  })
  .openapi({ required: [] })
  .openapi('ItemAuthorDto')

const KomgaExtensionDtoSchema = z
  .object({
    read: z
      .boolean()
      .openapi({
        description: 'Whether the current item has been marked read by the current user',
        example: false,
      }),
  })
  .openapi({ required: ['read'] })
  .openapi('KomgaExtensionDto')

const ItemDtoSchema = z
  .object({
    _komga: KomgaExtensionDtoSchema.exactOptional().openapi({
      description: 'Additional fields for the item',
    }),
    author: ItemAuthorDtoSchema.exactOptional().openapi({ description: 'Author of the item' }),
    content_html: z
      .string()
      .exactOptional()
      .openapi({ description: 'HTML of the item', example: '<p>A longer text…</p>' }),
    date_modified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Modification date in RFC 3339 format',
        example: '2023-12-15T00:00:00Z',
      }),
    id: z
      .string()
      .openapi({
        description: 'Unique for that item for that feed over time',
        example: 'https://komga.org/blog/ebook-drop2',
      }),
    summary: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A plain text sentence or two describing the item',
        example: 'Version 1.9.0 contains the second feature drop for Ebooks support.',
      }),
    tags: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'Tags describing the item', examples: ['upgrade', 'komga'] }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Plain text title', example: 'eBook drop 2' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL of the resource described by the item',
        example: 'https://komga.org/blog/ebook-drop2',
      }),
  })
  .openapi({ required: ['id', 'tags'] })
  .openapi('ItemDto')

const JsonFeedDtoSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Provides more detail on what the feed is about',
        example: 'Latest Komga announcements',
      }),
    home_page_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL of the resource that the feed describes',
        example: 'https://komga.org/blog',
      }),
    items: z.array(ItemDtoSchema),
    title: z.string().openapi({ description: 'Name of the feed', example: 'Announcements' }),
    version: z
      .string()
      .openapi({
        description: 'URL of the version of the format the feed uses',
        example: 'https://jsonfeed.org/version/1',
      }),
  })
  .openapi({
    example: {
      version: 'https://jsonfeed.org/version/1',
      title: 'Announcements',
      home_page_url: 'https://komga.org/blog',
      description: 'Latest Komga announcements',
    },
    required: ['items', 'title', 'version'],
  })
  .openapi('JsonFeedDto')

const LibraryCreationDtoSchema = z
  .object({
    analyzeDimensions: z.boolean(),
    convertToCbz: z.boolean(),
    emptyTrashAfterScan: z.boolean(),
    hashFiles: z.boolean(),
    hashKoreader: z.boolean(),
    hashPages: z.boolean(),
    importBarcodeIsbn: z.boolean(),
    importComicInfoBook: z.boolean(),
    importComicInfoCollection: z.boolean(),
    importComicInfoReadList: z.boolean(),
    importComicInfoSeries: z.boolean(),
    importComicInfoSeriesAppendVolume: z.boolean(),
    importEpubBook: z.boolean(),
    importEpubSeries: z.boolean(),
    importLocalArtwork: z.boolean(),
    importMylarSeries: z.boolean(),
    name: z.string().min(1),
    oneshotsDirectory: z.string().exactOptional(),
    repairExtensions: z.boolean(),
    root: z.string().min(1),
    scanCbx: z.boolean(),
    scanDirectoryExclusions: z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
    scanEpub: z.boolean(),
    scanForceModifiedTime: z.boolean(),
    scanInterval: z.enum(['DISABLED', 'HOURLY', 'EVERY_6H', 'EVERY_12H', 'DAILY', 'WEEKLY']),
    scanOnStartup: z.boolean(),
    scanPdf: z.boolean(),
    seriesCover: z.enum(['FIRST', 'FIRST_UNREAD_OR_FIRST', 'FIRST_UNREAD_OR_LAST', 'LAST']),
  })
  .openapi({
    required: [
      'analyzeDimensions',
      'convertToCbz',
      'emptyTrashAfterScan',
      'hashFiles',
      'hashKoreader',
      'hashPages',
      'importBarcodeIsbn',
      'importComicInfoBook',
      'importComicInfoCollection',
      'importComicInfoReadList',
      'importComicInfoSeries',
      'importComicInfoSeriesAppendVolume',
      'importEpubBook',
      'importEpubSeries',
      'importLocalArtwork',
      'importMylarSeries',
      'name',
      'repairExtensions',
      'root',
      'scanCbx',
      'scanDirectoryExclusions',
      'scanEpub',
      'scanForceModifiedTime',
      'scanInterval',
      'scanOnStartup',
      'scanPdf',
      'seriesCover',
    ],
  })
  .openapi('LibraryCreationDto')

const LibraryDtoSchema = z
  .object({
    analyzeDimensions: z.boolean(),
    convertToCbz: z.boolean(),
    emptyTrashAfterScan: z.boolean(),
    hashFiles: z.boolean(),
    hashKoreader: z.boolean(),
    hashPages: z.boolean(),
    id: z.string(),
    importBarcodeIsbn: z.boolean(),
    importComicInfoBook: z.boolean(),
    importComicInfoCollection: z.boolean(),
    importComicInfoReadList: z.boolean(),
    importComicInfoSeries: z.boolean(),
    importComicInfoSeriesAppendVolume: z.boolean(),
    importEpubBook: z.boolean(),
    importEpubSeries: z.boolean(),
    importLocalArtwork: z.boolean(),
    importMylarSeries: z.boolean(),
    name: z.string(),
    oneshotsDirectory: z.string().exactOptional(),
    repairExtensions: z.boolean(),
    root: z.string(),
    scanCbx: z.boolean(),
    scanDirectoryExclusions: z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
    scanEpub: z.boolean(),
    scanForceModifiedTime: z.boolean(),
    scanInterval: z.enum(['DISABLED', 'HOURLY', 'EVERY_6H', 'EVERY_12H', 'DAILY', 'WEEKLY']),
    scanOnStartup: z.boolean(),
    scanPdf: z.boolean(),
    seriesCover: z.enum(['FIRST', 'FIRST_UNREAD_OR_FIRST', 'FIRST_UNREAD_OR_LAST', 'LAST']),
    unavailable: z.boolean(),
  })
  .openapi({
    required: [
      'analyzeDimensions',
      'convertToCbz',
      'emptyTrashAfterScan',
      'hashFiles',
      'hashKoreader',
      'hashPages',
      'id',
      'importBarcodeIsbn',
      'importComicInfoBook',
      'importComicInfoCollection',
      'importComicInfoReadList',
      'importComicInfoSeries',
      'importComicInfoSeriesAppendVolume',
      'importEpubBook',
      'importEpubSeries',
      'importLocalArtwork',
      'importMylarSeries',
      'name',
      'repairExtensions',
      'root',
      'scanCbx',
      'scanDirectoryExclusions',
      'scanEpub',
      'scanForceModifiedTime',
      'scanInterval',
      'scanOnStartup',
      'scanPdf',
      'seriesCover',
      'unavailable',
    ],
  })
  .openapi('LibraryDto')

const LibraryUpdateDtoSchema = z
  .object({
    analyzeDimensions: z.boolean().exactOptional(),
    convertToCbz: z.boolean().exactOptional(),
    emptyTrashAfterScan: z.boolean().exactOptional(),
    hashFiles: z.boolean().exactOptional(),
    hashKoreader: z.boolean().exactOptional(),
    hashPages: z.boolean().exactOptional(),
    importBarcodeIsbn: z.boolean().exactOptional(),
    importComicInfoBook: z.boolean().exactOptional(),
    importComicInfoCollection: z.boolean().exactOptional(),
    importComicInfoReadList: z.boolean().exactOptional(),
    importComicInfoSeries: z.boolean().exactOptional(),
    importComicInfoSeriesAppendVolume: z.boolean().exactOptional(),
    importEpubBook: z.boolean().exactOptional(),
    importEpubSeries: z.boolean().exactOptional(),
    importLocalArtwork: z.boolean().exactOptional(),
    importMylarSeries: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    oneshotsDirectory: z.string().exactOptional(),
    repairExtensions: z.boolean().exactOptional(),
    root: z.string().exactOptional(),
    scanCbx: z.boolean().exactOptional(),
    scanDirectoryExclusions: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    scanEpub: z.boolean().exactOptional(),
    scanForceModifiedTime: z.boolean().exactOptional(),
    scanInterval: z
      .enum(['DISABLED', 'HOURLY', 'EVERY_6H', 'EVERY_12H', 'DAILY', 'WEEKLY'])
      .exactOptional(),
    scanOnStartup: z.boolean().exactOptional(),
    scanPdf: z.boolean().exactOptional(),
    seriesCover: z
      .enum(['FIRST', 'FIRST_UNREAD_OR_FIRST', 'FIRST_UNREAD_OR_LAST', 'LAST'])
      .exactOptional(),
  })
  .openapi({
    description: "Fields to update. You can omit fields you don't want to update.",
    required: [],
  })
  .openapi('LibraryUpdateDto')

const LocationSchema = z
  .object({
    fragments: z.array(z.string()),
    position: z.int32().exactOptional(),
    progression: z.float32().exactOptional(),
    totalProgression: z.float32().exactOptional(),
  })
  .openapi({ required: ['fragments'] })
  .openapi('Location')

const MediaTypeSchema = z
  .object({
    charset: z.string().exactOptional(),
    concrete: z.boolean().exactOptional(),
    parameters: z.record(z.string(), z.string()).exactOptional(),
    qualityValue: z.float64().exactOptional(),
    subtype: z.string().exactOptional(),
    subtypeSuffix: z.string().exactOptional(),
    type: z.string().exactOptional(),
    wildcardSubtype: z.boolean().exactOptional(),
    wildcardType: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MediaType')

const OAuth2ClientDtoSchema = z
  .object({ name: z.string(), registrationId: z.string() })
  .openapi({ required: ['name', 'registrationId'] })
  .openapi('OAuth2ClientDto')

const SortObjectSchema = z
  .object({
    empty: z.boolean().exactOptional(),
    sorted: z.boolean().exactOptional(),
    unsorted: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SortObject')

const PageableObjectSchema = z
  .object({
    offset: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    pageNumber: z.int32().exactOptional(),
    pageSize: z.int32().exactOptional(),
    paged: z.boolean().exactOptional(),
    sort: SortObjectSchema.exactOptional(),
    unpaged: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageableObject')

const PageAuthenticationActivityDtoSchema = z
  .object({
    content: z.array(AuthenticationActivityDtoSchema).exactOptional(),
    empty: z.boolean().exactOptional(),
    first: z.boolean().exactOptional(),
    last: z.boolean().exactOptional(),
    number: z.int32().exactOptional(),
    numberOfElements: z.int32().exactOptional(),
    pageable: PageableObjectSchema.exactOptional(),
    size: z.int32().exactOptional(),
    sort: SortObjectSchema.exactOptional(),
    totalElements: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalPages: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageAuthenticationActivityDto')

const PageAuthorDtoSchema = z
  .object({
    content: z.array(AuthorDtoSchema).exactOptional(),
    empty: z.boolean().exactOptional(),
    first: z.boolean().exactOptional(),
    last: z.boolean().exactOptional(),
    number: z.int32().exactOptional(),
    numberOfElements: z.int32().exactOptional(),
    pageable: PageableObjectSchema.exactOptional(),
    size: z.int32().exactOptional(),
    sort: SortObjectSchema.exactOptional(),
    totalElements: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalPages: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageAuthorDto')

const PageBookDtoSchema = z
  .object({
    content: z.array(BookDtoSchema).exactOptional(),
    empty: z.boolean().exactOptional(),
    first: z.boolean().exactOptional(),
    last: z.boolean().exactOptional(),
    number: z.int32().exactOptional(),
    numberOfElements: z.int32().exactOptional(),
    pageable: PageableObjectSchema.exactOptional(),
    size: z.int32().exactOptional(),
    sort: SortObjectSchema.exactOptional(),
    totalElements: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalPages: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageBookDto')

const PageCollectionDtoSchema = z
  .object({
    content: z.array(CollectionDtoSchema).exactOptional(),
    empty: z.boolean().exactOptional(),
    first: z.boolean().exactOptional(),
    last: z.boolean().exactOptional(),
    number: z.int32().exactOptional(),
    numberOfElements: z.int32().exactOptional(),
    pageable: PageableObjectSchema.exactOptional(),
    size: z.int32().exactOptional(),
    sort: SortObjectSchema.exactOptional(),
    totalElements: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalPages: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageCollectionDto')

const PageDtoSchema = z
  .object({
    fileName: z.string(),
    height: z.int32().exactOptional(),
    mediaType: z.string(),
    number: z.int32(),
    size: z.string(),
    sizeBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    width: z.int32().exactOptional(),
  })
  .openapi({ required: ['fileName', 'mediaType', 'number', 'size'] })
  .openapi('PageDto')

const PageHashCreationDtoSchema = z
  .object({
    action: z.enum(['DELETE_AUTO', 'DELETE_MANUAL', 'IGNORE']),
    hash: z.string().min(1),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['action', 'hash'] })
  .openapi('PageHashCreationDto')

const PageHashKnownDtoSchema = z
  .object({
    action: z.enum(['DELETE_AUTO', 'DELETE_MANUAL', 'IGNORE']),
    created: z.iso.datetime({ offset: true }),
    deleteCount: z.int32(),
    hash: z.string(),
    lastModified: z.iso.datetime({ offset: true }),
    matchCount: z.int32(),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['action', 'created', 'deleteCount', 'hash', 'lastModified', 'matchCount'] })
  .openapi('PageHashKnownDto')

const PageHashMatchDtoSchema = z
  .object({
    bookId: z.string(),
    fileName: z.string(),
    fileSize: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    mediaType: z.string(),
    pageNumber: z.int32(),
    url: z.string(),
  })
  .openapi({ required: ['bookId', 'fileName', 'fileSize', 'mediaType', 'pageNumber', 'url'] })
  .openapi('PageHashMatchDto')

const PageHashUnknownDtoSchema = z
  .object({
    hash: z.string(),
    matchCount: z.int32(),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['hash', 'matchCount'] })
  .openapi('PageHashUnknownDto')

const PageHistoricalEventDtoSchema = z
  .object({
    content: z.array(HistoricalEventDtoSchema).exactOptional(),
    empty: z.boolean().exactOptional(),
    first: z.boolean().exactOptional(),
    last: z.boolean().exactOptional(),
    number: z.int32().exactOptional(),
    numberOfElements: z.int32().exactOptional(),
    pageable: PageableObjectSchema.exactOptional(),
    size: z.int32().exactOptional(),
    sort: SortObjectSchema.exactOptional(),
    totalElements: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalPages: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageHistoricalEventDto')

const PageIntegerSchema = z
  .object({
    content: z.array(z.int32()).exactOptional(),
    empty: z.boolean().exactOptional(),
    first: z.boolean().exactOptional(),
    last: z.boolean().exactOptional(),
    number: z.int32().exactOptional(),
    numberOfElements: z.int32().exactOptional(),
    pageable: PageableObjectSchema.exactOptional(),
    size: z.int32().exactOptional(),
    sort: SortObjectSchema.exactOptional(),
    totalElements: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalPages: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageInteger')

const PagePageHashKnownDtoSchema = z
  .object({
    content: z.array(PageHashKnownDtoSchema).exactOptional(),
    empty: z.boolean().exactOptional(),
    first: z.boolean().exactOptional(),
    last: z.boolean().exactOptional(),
    number: z.int32().exactOptional(),
    numberOfElements: z.int32().exactOptional(),
    pageable: PageableObjectSchema.exactOptional(),
    size: z.int32().exactOptional(),
    sort: SortObjectSchema.exactOptional(),
    totalElements: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalPages: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PagePageHashKnownDto')

const PagePageHashMatchDtoSchema = z
  .object({
    content: z.array(PageHashMatchDtoSchema).exactOptional(),
    empty: z.boolean().exactOptional(),
    first: z.boolean().exactOptional(),
    last: z.boolean().exactOptional(),
    number: z.int32().exactOptional(),
    numberOfElements: z.int32().exactOptional(),
    pageable: PageableObjectSchema.exactOptional(),
    size: z.int32().exactOptional(),
    sort: SortObjectSchema.exactOptional(),
    totalElements: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalPages: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PagePageHashMatchDto')

const PagePageHashUnknownDtoSchema = z
  .object({
    content: z.array(PageHashUnknownDtoSchema).exactOptional(),
    empty: z.boolean().exactOptional(),
    first: z.boolean().exactOptional(),
    last: z.boolean().exactOptional(),
    number: z.int32().exactOptional(),
    numberOfElements: z.int32().exactOptional(),
    pageable: PageableObjectSchema.exactOptional(),
    size: z.int32().exactOptional(),
    sort: SortObjectSchema.exactOptional(),
    totalElements: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalPages: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PagePageHashUnknownDto')

const ReadListDtoSchema = z
  .object({
    bookIds: z.array(z.string()),
    createdDate: z.iso.datetime({ offset: true }),
    filtered: z.boolean(),
    id: z.string(),
    lastModifiedDate: z.iso.datetime({ offset: true }),
    name: z.string(),
    ordered: z.boolean(),
    summary: z.string(),
  })
  .openapi({
    required: [
      'bookIds',
      'createdDate',
      'filtered',
      'id',
      'lastModifiedDate',
      'name',
      'ordered',
      'summary',
    ],
  })
  .openapi('ReadListDto')

const PageReadListDtoSchema = z
  .object({
    content: z.array(ReadListDtoSchema).exactOptional(),
    empty: z.boolean().exactOptional(),
    first: z.boolean().exactOptional(),
    last: z.boolean().exactOptional(),
    number: z.int32().exactOptional(),
    numberOfElements: z.int32().exactOptional(),
    pageable: PageableObjectSchema.exactOptional(),
    size: z.int32().exactOptional(),
    sort: SortObjectSchema.exactOptional(),
    totalElements: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalPages: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageReadListDto')

const PageResponseNotableEntityDtoSchema = z
  .object({
    content: z
      .array(NotableEntityDtoSchema)
      .openapi({ description: 'List of items contained in the current page' }),
    first: z
      .boolean()
      .openapi({ description: 'Indicates if the current page is the first page', example: true }),
    last: z
      .boolean()
      .openapi({ description: 'Indicates if the current page is the last page', example: false }),
    page: z.int32().openapi({ description: 'Zero-based page index (0..N)', example: 0 }),
    size: z.int32().openapi({ description: 'Number of items requested per page', example: 20 }),
    totalElements: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Total number of elements across all pages',
        example: 105,
      }),
    totalPages: z.int32().openapi({ description: 'Total number of calculated pages', example: 6 }),
  })
  .openapi({
    description: 'Paginated API response container',
    required: ['content', 'first', 'last', 'page', 'size', 'totalElements', 'totalPages'],
  })
  .openapi('PageResponseNotableEntityDto')

const PageResponseStringSchema = z
  .object({
    content: z
      .array(z.string())
      .openapi({ description: 'List of items contained in the current page' }),
    first: z
      .boolean()
      .openapi({ description: 'Indicates if the current page is the first page', example: true }),
    last: z
      .boolean()
      .openapi({ description: 'Indicates if the current page is the last page', example: false }),
    page: z.int32().openapi({ description: 'Zero-based page index (0..N)', example: 0 }),
    size: z.int32().openapi({ description: 'Number of items requested per page', example: 20 }),
    totalElements: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Total number of elements across all pages',
        example: 105,
      }),
    totalPages: z.int32().openapi({ description: 'Total number of calculated pages', example: 6 }),
  })
  .openapi({
    description: 'Paginated API response container',
    required: ['content', 'first', 'last', 'page', 'size', 'totalElements', 'totalPages'],
  })
  .openapi('PageResponseString')

const SeriesMetadataDtoSchema = z
  .object({
    ageRating: z.int32().exactOptional(),
    ageRatingLock: z.boolean(),
    alternateTitles: z.array(AlternateTitleDtoSchema),
    alternateTitlesLock: z.boolean(),
    created: z.iso.datetime({ offset: true }),
    genres: z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
    genresLock: z.boolean(),
    language: z.string(),
    languageLock: z.boolean(),
    lastModified: z.iso.datetime({ offset: true }),
    links: z.array(WebLinkDtoSchema),
    linksLock: z.boolean(),
    publisher: z.string(),
    publisherLock: z.boolean(),
    readingDirection: z.string(),
    readingDirectionLock: z.boolean(),
    sharingLabels: z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
    sharingLabelsLock: z.boolean(),
    status: z.string(),
    statusLock: z.boolean(),
    summary: z.string(),
    summaryLock: z.boolean(),
    tags: z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
    tagsLock: z.boolean(),
    title: z.string(),
    titleLock: z.boolean(),
    titleSort: z.string(),
    titleSortLock: z.boolean(),
    totalBookCount: z.int32().exactOptional(),
    totalBookCountLock: z.boolean(),
  })
  .openapi({
    required: [
      'ageRatingLock',
      'alternateTitles',
      'alternateTitlesLock',
      'created',
      'genres',
      'genresLock',
      'language',
      'languageLock',
      'lastModified',
      'links',
      'linksLock',
      'publisher',
      'publisherLock',
      'readingDirection',
      'readingDirectionLock',
      'sharingLabels',
      'sharingLabelsLock',
      'status',
      'statusLock',
      'summary',
      'summaryLock',
      'tags',
      'tagsLock',
      'title',
      'titleLock',
      'titleSort',
      'titleSortLock',
      'totalBookCountLock',
    ],
  })
  .openapi('SeriesMetadataDto')

const SeriesDtoSchema = z
  .object({
    booksCount: z.int32(),
    booksInProgressCount: z.int32(),
    booksMetadata: BookMetadataAggregationDtoSchema,
    booksReadCount: z.int32(),
    booksUnreadCount: z.int32(),
    created: z.iso.datetime({ offset: true }),
    deleted: z.boolean(),
    fileLastModified: z.iso.datetime({ offset: true }),
    id: z.string(),
    lastModified: z.iso.datetime({ offset: true }),
    libraryId: z.string(),
    metadata: SeriesMetadataDtoSchema,
    name: z.string(),
    oneshot: z.boolean(),
    url: z.string(),
  })
  .openapi({
    required: [
      'booksCount',
      'booksInProgressCount',
      'booksMetadata',
      'booksReadCount',
      'booksUnreadCount',
      'created',
      'deleted',
      'fileLastModified',
      'id',
      'lastModified',
      'libraryId',
      'metadata',
      'name',
      'oneshot',
      'url',
    ],
  })
  .openapi('SeriesDto')

const PageSeriesDtoSchema = z
  .object({
    content: z.array(SeriesDtoSchema).exactOptional(),
    empty: z.boolean().exactOptional(),
    first: z.boolean().exactOptional(),
    last: z.boolean().exactOptional(),
    number: z.int32().exactOptional(),
    numberOfElements: z.int32().exactOptional(),
    pageable: PageableObjectSchema.exactOptional(),
    size: z.int32().exactOptional(),
    sort: SortObjectSchema.exactOptional(),
    totalElements: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalPages: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageSeriesDto')

const PageStringSchema = z
  .object({
    content: z.array(z.string()).exactOptional(),
    empty: z.boolean().exactOptional(),
    first: z.boolean().exactOptional(),
    last: z.boolean().exactOptional(),
    number: z.int32().exactOptional(),
    numberOfElements: z.int32().exactOptional(),
    pageable: PageableObjectSchema.exactOptional(),
    size: z.int32().exactOptional(),
    sort: SortObjectSchema.exactOptional(),
    totalElements: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalPages: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageString')

const PasswordUpdateDtoSchema = z
  .object({ password: z.string().min(1) })
  .openapi({ required: ['password'] })
  .openapi('PasswordUpdateDto')

const R2DeviceSchema = z
  .object({ id: z.string(), name: z.string() })
  .openapi({ required: ['id', 'name'] })
  .openapi('R2Device')

const TextSchema = z
  .object({
    after: z.string().exactOptional(),
    before: z.string().exactOptional(),
    highlight: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Text')

const R2LocatorSchema = z
  .object({
    href: z.string(),
    koboSpan: z.string().exactOptional(),
    locations: LocationSchema.exactOptional(),
    text: TextSchema.exactOptional(),
    title: z.string().exactOptional(),
    type: z.string(),
  })
  .openapi({ required: ['href', 'type'] })
  .openapi('R2Locator')

const R2PositionsSchema = z
  .object({ positions: z.array(R2LocatorSchema), total: z.int32() })
  .openapi({ required: ['positions', 'total'] })
  .openapi('R2Positions')

const R2ProgressionSchema = z
  .object({
    device: R2DeviceSchema,
    locator: R2LocatorSchema,
    modified: z.iso.datetime({ offset: true }),
  })
  .openapi({ required: ['device', 'locator', 'modified'] })
  .openapi('R2Progression')

const ReadListCreationDtoSchema = z
  .object({
    bookIds: z.array(z.string()).min(1),
    name: z.string().min(1),
    ordered: z.boolean(),
    summary: z.string(),
  })
  .openapi({ required: ['bookIds', 'name', 'ordered', 'summary'] })
  .openapi('ReadListCreationDto')

const ReadListMatchDtoSchema = z
  .object({ errorCode: z.string(), name: z.string() })
  .openapi({ required: ['errorCode', 'name'] })
  .openapi('ReadListMatchDto')

const ReadListRequestBookDtoSchema = z
  .object({
    number: z.string(),
    series: z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
  })
  .openapi({ required: ['number', 'series'] })
  .openapi('ReadListRequestBookDto')

const ReadListRequestBookMatchBookDtoSchema = z
  .object({ bookId: z.string(), number: z.string(), title: z.string() })
  .openapi({ required: ['bookId', 'number', 'title'] })
  .openapi('ReadListRequestBookMatchBookDto')

const ReadListRequestBookMatchSeriesDtoSchema = z
  .object({ releaseDate: z.iso.date().exactOptional(), seriesId: z.string(), title: z.string() })
  .openapi({ required: ['seriesId', 'title'] })
  .openapi('ReadListRequestBookMatchSeriesDto')

const ReadListRequestBookMatchDtoSchema = z
  .object({
    books: z.array(ReadListRequestBookMatchBookDtoSchema),
    series: ReadListRequestBookMatchSeriesDtoSchema,
  })
  .openapi({ required: ['books', 'series'] })
  .openapi('ReadListRequestBookMatchDto')

const ReadListRequestBookMatchesDtoSchema = z
  .object({
    matches: z.array(ReadListRequestBookMatchDtoSchema),
    request: ReadListRequestBookDtoSchema,
  })
  .openapi({ required: ['matches', 'request'] })
  .openapi('ReadListRequestBookMatchesDto')

const ReadListRequestMatchDtoSchema = z
  .object({
    errorCode: z.string(),
    readListMatch: ReadListMatchDtoSchema,
    requests: z.array(ReadListRequestBookMatchesDtoSchema),
  })
  .openapi({ required: ['errorCode', 'readListMatch', 'requests'] })
  .openapi('ReadListRequestMatchDto')

const ReadListUpdateDtoSchema = z
  .object({
    bookIds: z.array(z.string()).exactOptional(),
    name: z.string().exactOptional(),
    ordered: z.boolean().exactOptional(),
    summary: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadListUpdateDto')

const ReadProgressUpdateDtoSchema = z
  .object({ completed: z.boolean().exactOptional(), page: z.int32().exactOptional() })
  .openapi({
    description:
      'page can be omitted if completed is set to true. completed can be omitted, and will be set accordingly depending on the page passed and the total number of pages in the book.',
    required: [],
  })
  .openapi('ReadProgressUpdateDto')

const ReleaseDtoSchema = z
  .object({
    description: z.string(),
    latest: z.boolean(),
    preRelease: z.boolean(),
    releaseDate: z.iso.datetime({ offset: true }),
    url: z.string(),
    version: z.string(),
  })
  .openapi({ required: ['description', 'latest', 'preRelease', 'releaseDate', 'url', 'version'] })
  .openapi('ReleaseDto')

const ScanRequestDtoSchema = z
  .object({ path: z.string() })
  .openapi({ required: ['path'] })
  .openapi('ScanRequestDto')

const SeriesMetadataUpdateDtoSchema = z
  .object({
    ageRating: z.int32().exactOptional(),
    ageRatingLock: z.boolean().exactOptional(),
    alternateTitles: z.array(AlternateTitleUpdateDtoSchema).exactOptional(),
    alternateTitlesLock: z.boolean().exactOptional(),
    genres: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    genresLock: z.boolean().exactOptional(),
    language: z.string().exactOptional(),
    languageLock: z.boolean().exactOptional(),
    links: z.array(WebLinkUpdateDtoSchema).exactOptional(),
    linksLock: z.boolean().exactOptional(),
    publisher: z.string().exactOptional(),
    publisherLock: z.boolean().exactOptional(),
    readingDirection: z
      .enum(['LEFT_TO_RIGHT', 'RIGHT_TO_LEFT', 'VERTICAL', 'WEBTOON'])
      .exactOptional(),
    readingDirectionLock: z.boolean().exactOptional(),
    sharingLabels: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    sharingLabelsLock: z.boolean().exactOptional(),
    status: z.enum(['ENDED', 'ONGOING', 'ABANDONED', 'HIATUS']).exactOptional(),
    statusLock: z.boolean().exactOptional(),
    summary: z.string().exactOptional(),
    summaryLock: z.boolean().exactOptional(),
    tags: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    tagsLock: z.boolean().exactOptional(),
    title: z.string().exactOptional(),
    titleLock: z.boolean().exactOptional(),
    titleSort: z.string().exactOptional(),
    titleSortLock: z.boolean().exactOptional(),
    totalBookCount: z.int32().exactOptional(),
    totalBookCountLock: z.boolean().exactOptional(),
  })
  .openapi({
    description:
      "Metadata fields to update. Set a field to null to unset the metadata. You can omit fields you don't want to update.",
    required: [],
  })
  .openapi('SeriesMetadataUpdateDto')

const SeriesSearchSchema = z
  .object({
    condition: SearchConditionSeriesSchema.exactOptional(),
    fullTextSearch: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeriesSearch')

const SettingMultiSourceIntegerSchema = z
  .object({
    configurationSource: z.int32().exactOptional(),
    databaseSource: z.int32().exactOptional(),
    effectiveValue: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SettingMultiSourceInteger')

const SettingMultiSourceStringSchema = z
  .object({
    configurationSource: z.string().exactOptional(),
    databaseSource: z.string().exactOptional(),
    effectiveValue: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SettingMultiSourceString')

const SettingsDtoSchema = z
  .object({
    deleteEmptyCollections: z.boolean().exactOptional(),
    deleteEmptyReadLists: z.boolean().exactOptional(),
    kepubifyPath: SettingMultiSourceStringSchema.exactOptional(),
    koboPort: z.int32().exactOptional(),
    koboProxy: z.boolean().exactOptional(),
    maxUploadFileSizeBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    nextUiAsDefault: z.boolean().exactOptional(),
    rememberMeDurationDays: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    serverContextPath: SettingMultiSourceStringSchema.exactOptional(),
    serverPort: SettingMultiSourceIntegerSchema.exactOptional(),
    taskPoolSize: z.int32().exactOptional(),
    thumbnailSize: z.enum(['DEFAULT', 'MEDIUM', 'LARGE', 'XLARGE']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SettingsDto')

const SettingsUpdateDtoSchema = z
  .object({
    deleteEmptyCollections: z.boolean().exactOptional(),
    deleteEmptyReadLists: z.boolean().exactOptional(),
    kepubifyPath: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Will be removed in a future version' }),
    koboPort: z.int32().max(65535).exactOptional(),
    koboProxy: z.boolean().exactOptional(),
    nextUiAsDefault: z.boolean().exactOptional(),
    rememberMeDurationDays: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    renewRememberMeKey: z.boolean().exactOptional(),
    serverContextPath: z
      .string()
      .regex(/^\/[\w-\/]*[a-zA-Z0-9]$/)
      .exactOptional(),
    serverPort: z.int32().max(65535).exactOptional(),
    taskPoolSize: z.int32().exactOptional(),
    thumbnailSize: z.enum(['DEFAULT', 'MEDIUM', 'LARGE', 'XLARGE']).exactOptional(),
  })
  .openapi({
    description: "Fields to update. You can omit fields you don't want to update.",
    required: [],
  })
  .openapi('SettingsUpdateDto')

const SharedLibrariesUpdateDtoSchema = z
  .object({
    all: z.boolean(),
    libraryIds: z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
  })
  .openapi({ required: ['all', 'libraryIds'] })
  .openapi('SharedLibrariesUpdateDto')

const StreamingResponseBodySchema = z.any().openapi('StreamingResponseBody')

const TachiyomiReadProgressDtoSchema = z
  .object({
    booksCount: z.int32(),
    booksInProgressCount: z.int32(),
    booksReadCount: z.int32(),
    booksUnreadCount: z.int32(),
    lastReadContinuousIndex: z.int32(),
  })
  .openapi({
    required: [
      'booksCount',
      'booksInProgressCount',
      'booksReadCount',
      'booksUnreadCount',
      'lastReadContinuousIndex',
    ],
  })
  .openapi('TachiyomiReadProgressDto')

const TachiyomiReadProgressUpdateDtoSchema = z
  .object({ lastBookRead: z.int32() })
  .openapi({ required: ['lastBookRead'] })
  .openapi('TachiyomiReadProgressUpdateDto')

const TachiyomiReadProgressUpdateV2DtoSchema = z
  .object({ lastBookNumberSortRead: z.float32() })
  .openapi({ required: ['lastBookNumberSortRead'] })
  .openapi('TachiyomiReadProgressUpdateV2Dto')

const TachiyomiReadProgressV2DtoSchema = z
  .object({
    booksCount: z.int32(),
    booksInProgressCount: z.int32(),
    booksReadCount: z.int32(),
    booksUnreadCount: z.int32(),
    lastReadContinuousNumberSort: z.float32(),
    maxNumberSort: z.float32(),
  })
  .openapi({
    required: [
      'booksCount',
      'booksInProgressCount',
      'booksReadCount',
      'booksUnreadCount',
      'lastReadContinuousNumberSort',
      'maxNumberSort',
    ],
  })
  .openapi('TachiyomiReadProgressV2Dto')

const ThumbnailBookDtoSchema = z
  .object({
    bookId: z.string(),
    fileSize: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    height: z.int32(),
    id: z.string(),
    mediaType: z.string(),
    selected: z.boolean(),
    type: z.string(),
    width: z.int32(),
  })
  .openapi({
    required: ['bookId', 'fileSize', 'height', 'id', 'mediaType', 'selected', 'type', 'width'],
  })
  .openapi('ThumbnailBookDto')

const ThumbnailReadListDtoSchema = z
  .object({
    fileSize: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    height: z.int32(),
    id: z.string(),
    mediaType: z.string(),
    readListId: z.string(),
    selected: z.boolean(),
    type: z.string(),
    width: z.int32(),
  })
  .openapi({
    required: ['fileSize', 'height', 'id', 'mediaType', 'readListId', 'selected', 'type', 'width'],
  })
  .openapi('ThumbnailReadListDto')

const ThumbnailSeriesCollectionDtoSchema = z
  .object({
    collectionId: z.string(),
    fileSize: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    height: z.int32(),
    id: z.string(),
    mediaType: z.string(),
    selected: z.boolean(),
    type: z.string(),
    width: z.int32(),
  })
  .openapi({
    required: [
      'collectionId',
      'fileSize',
      'height',
      'id',
      'mediaType',
      'selected',
      'type',
      'width',
    ],
  })
  .openapi('ThumbnailSeriesCollectionDto')

const ThumbnailSeriesDtoSchema = z
  .object({
    fileSize: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    height: z.int32(),
    id: z.string(),
    mediaType: z.string(),
    selected: z.boolean(),
    seriesId: z.string(),
    type: z.string(),
    width: z.int32(),
  })
  .openapi({
    required: ['fileSize', 'height', 'id', 'mediaType', 'selected', 'seriesId', 'type', 'width'],
  })
  .openapi('ThumbnailSeriesDto')

const TransientBookDtoSchema = z
  .object({
    comment: z.string(),
    fileLastModified: z.iso.datetime({ offset: true }),
    files: z.array(z.string()),
    id: z.string(),
    mediaType: z.string(),
    name: z.string(),
    number: z.float32().exactOptional(),
    pages: z.array(PageDtoSchema),
    seriesId: z.string().exactOptional(),
    size: z.string(),
    sizeBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    status: z.string(),
    url: z.string(),
  })
  .openapi({
    required: [
      'comment',
      'fileLastModified',
      'files',
      'id',
      'mediaType',
      'name',
      'pages',
      'size',
      'sizeBytes',
      'status',
      'url',
    ],
  })
  .openapi('TransientBookDto')

const UserCreationDtoSchema = z
  .object({
    ageRestriction: AgeRestrictionUpdateDtoSchema.exactOptional(),
    email: z.string(),
    labelsAllow: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    labelsExclude: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    password: z.string().min(1),
    roles: z.array(z.string()),
    sharedLibraries: SharedLibrariesUpdateDtoSchema.exactOptional(),
  })
  .openapi({ required: ['email', 'password', 'roles'] })
  .openapi('UserCreationDto')

const UserDtoSchema = z
  .object({
    ageRestriction: AgeRestrictionDtoSchema.exactOptional(),
    email: z.string(),
    id: z.string(),
    labelsAllow: z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
    labelsExclude: z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
    roles: z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
    sharedAllLibraries: z.boolean(),
    sharedLibrariesIds: z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
  })
  .openapi({
    required: [
      'email',
      'id',
      'labelsAllow',
      'labelsExclude',
      'roles',
      'sharedAllLibraries',
      'sharedLibrariesIds',
    ],
  })
  .openapi('UserDto')

const UserUpdateDtoSchema = z
  .object({
    ageRestriction: AgeRestrictionUpdateDtoSchema.exactOptional(),
    labelsAllow: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    labelsExclude: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    roles: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    sharedLibraries: SharedLibrariesUpdateDtoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserUpdateDto')

const ViolationSchema = z
  .object({ fieldName: z.string().exactOptional(), message: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Violation')

const ValidationErrorResponseSchema = z
  .object({ violations: z.array(ViolationSchema) })
  .openapi({ required: ['violations'] })
  .openapi('ValidationErrorResponse')

const WPLinkDtoSchema = z
  .object({
    height: z.int32().exactOptional(),
    href: z.string().exactOptional(),
    properties: z.record(z.string(), z.record(z.string(), z.any())),
    rel: z.string().exactOptional(),
    templated: z.boolean().exactOptional(),
    title: z.string().exactOptional(),
    type: z.string().exactOptional(),
    width: z.int32().exactOptional(),
  })
  .openapi({ required: ['properties'] })
  .openapi('WPLinkDto')

const WPContributorDtoSchema = z
  .object({
    links: z.array(WPLinkDtoSchema),
    name: z.string(),
    position: z.float32().exactOptional(),
  })
  .openapi({ required: ['links', 'name'] })
  .openapi('WPContributorDto')

const WPBelongsToDtoSchema = z
  .object({ collection: z.array(WPContributorDtoSchema), series: z.array(WPContributorDtoSchema) })
  .openapi({ required: ['collection', 'series'] })
  .openapi('WPBelongsToDto')

const WPMetadataDtoSchema = z
  .object({
    artist: z.array(z.string()),
    author: z.array(z.string()),
    belongsTo: WPBelongsToDtoSchema.exactOptional(),
    colorist: z.array(z.string()),
    conformsTo: z.string().exactOptional(),
    contributor: z.array(z.string()),
    description: z.string().exactOptional(),
    editor: z.array(z.string()),
    identifier: z.string().exactOptional(),
    illustrator: z.array(z.string()),
    inker: z.array(z.string()),
    language: z.string().exactOptional(),
    letterer: z.array(z.string()),
    modified: z.iso.datetime({ offset: true }).exactOptional(),
    numberOfPages: z.int32().exactOptional(),
    penciler: z.array(z.string()),
    published: z.iso.date().exactOptional(),
    publisher: z.array(z.string()),
    readingProgression: z.enum(['rtl', 'ltr', 'ttb', 'btt', 'auto']).exactOptional(),
    rendition: z.record(z.string(), z.any()),
    sortAs: z.string().exactOptional(),
    subject: z.array(z.string()),
    subtitle: z.string().exactOptional(),
    title: z.string(),
    translator: z.array(z.string()),
    type: z.string().exactOptional(),
  })
  .openapi({
    required: [
      'artist',
      'author',
      'colorist',
      'contributor',
      'editor',
      'illustrator',
      'inker',
      'letterer',
      'penciler',
      'publisher',
      'rendition',
      'subject',
      'title',
      'translator',
    ],
  })
  .openapi('WPMetadataDto')

const WPPublicationDtoSchema = z
  .object({
    context: z.string().exactOptional(),
    images: z.array(WPLinkDtoSchema),
    landmarks: z.array(WPLinkDtoSchema),
    links: z.array(WPLinkDtoSchema),
    metadata: WPMetadataDtoSchema,
    pageList: z.array(WPLinkDtoSchema),
    readingOrder: z.array(WPLinkDtoSchema),
    resources: z.array(WPLinkDtoSchema),
    toc: z.array(WPLinkDtoSchema),
  })
  .openapi({
    required: [
      'images',
      'landmarks',
      'links',
      'metadata',
      'pageList',
      'readingOrder',
      'resources',
      'toc',
    ],
  })
  .openapi('WPPublicationDto')

const ApiKeySecurityScheme = { in: 'header', name: 'X-API-Key', type: 'apiKey' }

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const getActuatorInfoRoute = createRoute({
  method: 'get',
  path: '/actuator/info',
  tags: ['Management'],
  summary: 'Get server information',
  description: 'Required role: **ADMIN**',
  operationId: 'getActuatorInfo',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.looseObject({}),
          examples: {
            Example: {
              value:
                '{\n  "git": {\n    "branch": "master",\n    "commit": {\n      "id": "9be980d",\n      "time": "2025-03-12T03:40:38Z"\n    }\n  },\n  "build": {\n    "artifact": "komga",\n    "name": "komga",\n    "version": "1.21.2",\n    "group": "komga"\n  },\n  "java": {\n    "version": "23.0.2",\n    "vendor": {\n      "name": "Eclipse Adoptium",\n      "version": "Temurin-23.0.2+7"\n    },\n    "runtime": {\n      "name": "OpenJDK Runtime Environment",\n      "version": "23.0.2+7"\n    },\n    "jvm": {\n      "name": "OpenJDK 64-Bit Server VM",\n      "vendor": "Eclipse Adoptium",\n      "version": "23.0.2+7"\n    }\n  },\n  "os": {\n    "name": "Linux",\n    "version": "6.8.0-57-generic",\n    "arch": "amd64"\n  }\n}',
            },
          },
        },
      },
    },
  },
})

export const getApiLogoutRoute = createRoute({
  method: 'get',
  path: '/api/logout',
  tags: ['User session'],
  summary: 'Logout',
  description: 'Invalidates the current session and clean up any remember-me authentication.',
  operationId: 'postLogout',
  responses: { 204: { description: 'No Content' } },
})

export const postApiLogoutRoute = createRoute({
  method: 'post',
  path: '/api/logout',
  tags: ['User session'],
  summary: 'Logout',
  description: 'Invalidates the current session and clean up any remember-me authentication.',
  operationId: 'postLogout_1',
  responses: { 204: { description: 'No Content' } },
})

export const getApiV1AgeRatingsRoute = createRoute({
  method: 'get',
  path: '/api/v1/age-ratings',
  tags: ['Deprecated', 'Referential metadata'],
  summary: 'List age ratings',
  description: 'Use GET /v2/age-ratings instead. Deprecated since 1.26.0',
  operationId: 'getAgeRatings_1',
  request: {
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiV1AnnouncementsRoute = createRoute({
  method: 'get',
  path: '/api/v1/announcements',
  tags: ['Announcements'],
  summary: 'Retrieve announcements',
  description: 'Required role: **ADMIN**',
  operationId: 'getAnnouncements',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: JsonFeedDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const putApiV1AnnouncementsRoute = createRoute({
  method: 'put',
  path: '/api/v1/announcements',
  tags: ['Announcements'],
  summary: 'Mark announcements as read',
  description: 'Required role: **ADMIN**',
  operationId: 'markAnnouncementsRead',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1AuthorsRoute = createRoute({
  method: 'get',
  path: '/api/v1/authors',
  tags: ['Deprecated', 'Referential metadata'],
  summary: 'List authors',
  description: 'Use GET /api/v2/authors instead. Deprecated since 1.20.0.',
  operationId: 'getAuthorsDeprecated',
  request: {
    query: z.object({
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string', default: '' },
          },
        }),
      library_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'library_id', required: false, schema: { type: 'string' } },
        }),
      collection_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      series_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'series_id', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AuthorDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiV1AuthorsNamesRoute = createRoute({
  method: 'get',
  path: '/api/v1/authors/names',
  tags: ['Deprecated', 'Referential metadata'],
  summary: "List authors' names",
  description: 'Use GET /v2/authors/names instead. Deprecated since 1.26.0',
  operationId: 'getAuthorsNames_1',
  request: {
    query: z.object({
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string', default: '' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(z.string()) } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiV1AuthorsRolesRoute = createRoute({
  method: 'get',
  path: '/api/v1/authors/roles',
  tags: ['Deprecated', 'Referential metadata'],
  summary: "List authors' roles",
  description: 'Use GET /v2/authors/roles instead. Deprecated since 1.26.0',
  operationId: 'getAuthorsRoles_1',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(z.string()) } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiV1BooksRoute = createRoute({
  method: 'get',
  path: '/api/v1/books',
  tags: ['Books', 'Deprecated'],
  summary: 'List books',
  description: 'Use POST /api/v1/books/list instead. Deprecated since 1.19.0.',
  operationId: 'getAllBooksDeprecated',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      media_status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['UNKNOWN', 'ERROR', 'READY', 'UNSUPPORTED', 'OUTDATED'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'media_status',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['UNKNOWN', 'ERROR', 'READY', 'UNSUPPORTED', 'OUTDATED'],
              },
            },
          },
        }),
      read_status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['UNREAD', 'READ', 'IN_PROGRESS'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'read_status',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['UNREAD', 'READ', 'IN_PROGRESS'] },
            },
          },
        }),
      released_after: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'released_after',
            required: false,
            schema: { type: 'string', format: 'date' },
          },
        }),
      tag: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tag',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.',
            in: 'query',
            name: 'sort',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageBookDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiV1BooksDuplicatesRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/duplicates',
  tags: ['Books'],
  summary: 'List duplicate books',
  description: 'Return books that have the same file hash.\n\nRequired role: **ADMIN**',
  operationId: 'getBooksDuplicates',
  request: {
    query: z.object({
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.',
            in: 'query',
            name: 'sort',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageBookDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1BooksImportRoute = createRoute({
  method: 'post',
  path: '/api/v1/books/import',
  tags: ['Import'],
  summary: 'Import books',
  description: 'Required role: **ADMIN**',
  operationId: 'importBooks',
  request: {
    body: { content: { 'application/json': { schema: BookImportBatchDtoSchema } }, required: true },
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksLatestRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/latest',
  tags: ['Books'],
  summary: 'List latest books',
  description: 'Return newly added or updated books.',
  operationId: 'getBooksLatest',
  request: {
    query: z.object({
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageBookDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1BooksListRoute = createRoute({
  method: 'post',
  path: '/api/v1/books/list',
  tags: ['Books'],
  summary: 'List books',
  operationId: 'getBooks',
  request: {
    query: z.object({
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.',
            in: 'query',
            name: 'sort',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BookSearchSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageBookDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const patchApiV1BooksMetadataRoute = createRoute({
  method: 'patch',
  path: '/api/v1/books/metadata',
  tags: ['Books'],
  summary: 'Update book metadata in bulk',
  description:
    "Set a field to null to unset the metadata. You can omit fields you don't want to update.\n\nRequired role: **ADMIN**",
  operationId: 'updateBookMetadataByBatch',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .record(z.string(), BookMetadataUpdateDtoSchema)
            .openapi({
              description:
                "A map of book IDs which values are the metadata fields to update. Set a field to null to unset the metadata. You can omit fields you don't want to update.",
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksOndeckRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/ondeck',
  tags: ['Books'],
  summary: 'List books on deck',
  description:
    'Return first unread book of series with at least one book read and no books in progress.',
  operationId: 'getBooksOnDeck',
  request: {
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageBookDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const putApiV1BooksThumbnailsRoute = createRoute({
  method: 'put',
  path: '/api/v1/books/thumbnails',
  tags: ['Book Poster'],
  summary: 'Regenerate books posters',
  description: 'Required role: **ADMIN**',
  operationId: 'booksRegenerateThumbnails',
  request: {
    query: z.object({
      for_bigger_result_only: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'for_bigger_result_only',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}',
  tags: ['Books'],
  summary: 'Get book details',
  operationId: 'getBookById',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BookDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1BooksBookIdAnalyzeRoute = createRoute({
  method: 'post',
  path: '/api/v1/books/{bookId}/analyze',
  tags: ['Books'],
  summary: 'Analyze book',
  description: 'Required role: **ADMIN**',
  operationId: 'bookAnalyze',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdFileRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/file',
  tags: ['Books'],
  summary: 'Download book file',
  description: 'Download the book file.\n\nRequired role: **FILE_DOWNLOAD**',
  operationId: 'downloadBookFile',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: StreamingResponseBodySchema },
        'application/octet-stream': { schema: StreamingResponseBodySchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const deleteApiV1BooksBookIdFileRoute = createRoute({
  method: 'delete',
  path: '/api/v1/books/{bookId}/file',
  tags: ['Books'],
  summary: 'Delete book file',
  description: 'Required role: **ADMIN**',
  operationId: 'deleteBookFile',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdFileStarRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/file/*',
  tags: ['Books'],
  summary: 'Download book file',
  description: 'Download the book file.\n\nRequired role: **FILE_DOWNLOAD**',
  operationId: 'downloadBookFile_1',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: StreamingResponseBodySchema },
        'application/octet-stream': { schema: StreamingResponseBodySchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdManifestRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/manifest',
  tags: ['WebPub Manifest'],
  summary: "Get book's WebPub manifest",
  operationId: 'getBookWebPubManifest',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/divina+json': { schema: WPPublicationDtoSchema },
        'application/json': { schema: WPPublicationDtoSchema },
        'application/webpub+json': { schema: WPPublicationDtoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdManifestDivinaRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/manifest/divina',
  tags: ['WebPub Manifest'],
  summary: "Get book's WebPub manifest (DiViNa)",
  operationId: 'getBookWebPubManifestDivina',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/divina+json': { schema: WPPublicationDtoSchema },
        'application/json': { schema: WPPublicationDtoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdManifestEpubRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/manifest/epub',
  tags: ['WebPub Manifest'],
  summary: "Get book's WebPub manifest (Epub)",
  operationId: 'getBookWebPubManifestEpub',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: WPPublicationDtoSchema },
        'application/webpub+json': { schema: WPPublicationDtoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdManifestPdfRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/manifest/pdf',
  tags: ['WebPub Manifest'],
  summary: "Get book's WebPub manifest (PDF)",
  operationId: 'getBookWebPubManifestPdf',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: WPPublicationDtoSchema },
        'application/webpub+json': { schema: WPPublicationDtoSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const patchApiV1BooksBookIdMetadataRoute = createRoute({
  method: 'patch',
  path: '/api/v1/books/{bookId}/metadata',
  tags: ['Books'],
  summary: 'Update book metadata',
  description:
    "Set a field to null to unset the metadata. You can omit fields you don't want to update.\n\nRequired role: **ADMIN**",
  operationId: 'updateBookMetadata',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BookMetadataUpdateDtoSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1BooksBookIdMetadataRefreshRoute = createRoute({
  method: 'post',
  path: '/api/v1/books/{bookId}/metadata/refresh',
  tags: ['Books'],
  summary: 'Refresh book metadata',
  description: 'Required role: **ADMIN**',
  operationId: 'bookRefreshMetadata',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdNextRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/next',
  tags: ['Books'],
  summary: 'Get next book in series',
  operationId: 'getBookSiblingNext',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BookDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdPagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/pages',
  tags: ['Book Pages'],
  summary: 'List book pages',
  operationId: 'getBookPages',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(PageDtoSchema) } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdPagesPageNumberRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/pages/{pageNumber}',
  tags: ['Book Pages'],
  summary: 'Get book page image',
  description: 'Required role: **PAGE_STREAMING**',
  operationId: 'getBookPageByNumber',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
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
        .openapi({
          param: {
            in: 'path',
            name: 'pageNumber',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      convert: z
        .enum(['jpeg', 'png'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Convert the image to the provided format.',
            in: 'query',
            name: 'convert',
            required: false,
            schema: { type: 'string', enum: ['jpeg', 'png'] },
          },
        }),
      zero_based: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true, pages will start at index 0. If set to false, pages will start at index 1.',
            in: 'query',
            name: 'zero_based',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      contentNegotiation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'contentNegotiation',
            required: false,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',').map((part) => part.trim()) : [item],
                ),
          z.array(
            z
              .object({
                charset: z.string().exactOptional(),
                concrete: z.stringbool().exactOptional(),
                parameters: z.record(z.string(), z.string()).exactOptional(),
                qualityValue: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    z.float64(),
                  )
                  .exactOptional(),
                subtype: z.string().exactOptional(),
                subtypeSuffix: z.string().exactOptional(),
                type: z.string().exactOptional(),
                wildcardSubtype: z.stringbool().exactOptional(),
                wildcardType: z.stringbool().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Some very limited server driven content negotiation is handled. If a book is a PDF book, and the Accept header contains 'application/pdf' as a more specific type than other 'image/' types, a raw PDF page will be returned.",
            in: 'header',
            name: 'Accept',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  charset: { type: 'string' },
                  concrete: { type: 'boolean' },
                  parameters: { type: 'object', additionalProperties: { type: 'string' } },
                  qualityValue: { type: 'number', format: 'double' },
                  subtype: { type: 'string' },
                  subtypeSuffix: { type: 'string' },
                  type: { type: 'string' },
                  wildcardSubtype: { type: 'boolean' },
                  wildcardType: { type: 'boolean' },
                },
              },
            },
          },
        }),
    }),
  },
  responses: {
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
    default: {
      description: 'default response',
      content: { 'image/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
})

export const getApiV1BooksBookIdPagesPageNumberRawRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/pages/{pageNumber}/raw',
  tags: ['Book Pages'],
  summary: 'Get raw book page',
  description:
    'Returns the book page in raw format, without content negotiation.\n\nRequired role: **PAGE_STREAMING**',
  operationId: 'getBookPageRawByNumber',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
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
        .openapi({
          param: {
            in: 'path',
            name: 'pageNumber',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { '*/*': { schema: z.string() }, 'application/json': { schema: z.string() } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdPagesPageNumberThumbnailRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/pages/{pageNumber}/thumbnail',
  tags: ['Book Pages'],
  summary: 'Get book page thumbnail',
  description: 'The image is resized to 300px on the largest dimension.',
  operationId: 'getBookPageThumbnailByNumber',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
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
        .openapi({
          param: {
            in: 'path',
            name: 'pageNumber',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
    default: {
      description: 'default response',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const getApiV1BooksBookIdPositionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/positions',
  tags: ['WebPub Manifest'],
  summary: "List book's positions",
  description:
    'The Positions API is a proposed standard for OPDS 2 and Readium. It is used by the Epub Reader.',
  operationId: 'getBookPositions',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: R2PositionsSchema },
        'application/vnd.readium.position-list+json': { schema: R2PositionsSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdPreviousRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/previous',
  tags: ['Books'],
  summary: 'Get previous book in series',
  operationId: 'getBookSiblingPrevious',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BookDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdProgressionRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/progression',
  tags: ['WebPub Manifest'],
  summary: 'Get book progression',
  description:
    'The Progression API is a proposed standard for OPDS 2 and Readium. It is used by the Epub Reader.',
  operationId: 'getBookProgression',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: R2ProgressionSchema },
        'application/vnd.readium.progression+json': { schema: R2ProgressionSchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const putApiV1BooksBookIdProgressionRoute = createRoute({
  method: 'put',
  path: '/api/v1/books/{bookId}/progression',
  tags: ['WebPub Manifest'],
  summary: 'Mark book progression',
  description:
    'The Progression API is a proposed standard for OPDS 2 and Readium. It is used by the Epub Reader.',
  operationId: 'updateBookProgression',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: R2ProgressionSchema } }, required: true },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const deleteApiV1BooksBookIdReadProgressRoute = createRoute({
  method: 'delete',
  path: '/api/v1/books/{bookId}/read-progress',
  tags: ['Books'],
  summary: 'Mark book as unread',
  description: 'Mark book as unread',
  operationId: 'deleteBookReadProgress',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const patchApiV1BooksBookIdReadProgressRoute = createRoute({
  method: 'patch',
  path: '/api/v1/books/{bookId}/read-progress',
  tags: ['Books'],
  summary: "Mark book's read progress",
  description: 'Mark book as read and/or change page progress.',
  operationId: 'markBookReadProgress',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ReadProgressUpdateDtoSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdReadlistsRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/readlists',
  tags: ['Books'],
  summary: "List book's readlists",
  operationId: 'getReadListsByBookId',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ReadListDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdResourceResourceRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/resource/{resource}',
  tags: ['WebPub Manifest'],
  summary: 'Get Epub resource',
  description: 'Return a resource from within an Epub book.',
  operationId: 'getBookEpubResource',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
      resource: z
        .string()
        .openapi({
          param: { in: 'path', name: 'resource', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { '*/*': { schema: z.string() }, 'application/json': { schema: z.string() } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  security: [],
})

export const getApiV1BooksBookIdThumbnailRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/thumbnail',
  tags: ['Book Poster'],
  summary: "Get book's poster image",
  operationId: 'getBookThumbnail',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
    default: {
      description: 'default response',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const getApiV1BooksBookIdThumbnailsRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/thumbnails',
  tags: ['Book Poster'],
  summary: 'List book posters',
  operationId: 'getBookThumbnails',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ThumbnailBookDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1BooksBookIdThumbnailsRoute = createRoute({
  method: 'post',
  path: '/api/v1/books/{bookId}/thumbnails',
  tags: ['Book Poster'],
  summary: 'Add book poster',
  description: 'Required role: **ADMIN**',
  operationId: 'addUserUploadedBookThumbnail',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      selected: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'selected', required: false, schema: { type: 'boolean' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ file: z.file().openapi({ type: 'string', format: 'binary' }) })
            .openapi({ required: ['file'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ThumbnailBookDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1BooksBookIdThumbnailsThumbnailIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/books/{bookId}/thumbnails/{thumbnailId}',
  tags: ['Book Poster'],
  summary: 'Get book poster image',
  operationId: 'getBookThumbnailById',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
      thumbnailId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'thumbnailId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
    default: {
      description: 'default response',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const deleteApiV1BooksBookIdThumbnailsThumbnailIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/books/{bookId}/thumbnails/{thumbnailId}',
  tags: ['Book Poster'],
  summary: 'Delete book poster',
  description: 'Only uploaded posters can be deleted.\n\nRequired role: **ADMIN**',
  operationId: 'deleteUserUploadedBookThumbnail',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
      thumbnailId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'thumbnailId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const putApiV1BooksBookIdThumbnailsThumbnailIdSelectedRoute = createRoute({
  method: 'put',
  path: '/api/v1/books/{bookId}/thumbnails/{thumbnailId}/selected',
  tags: ['Book Poster'],
  summary: 'Mark book poster as selected',
  description: 'Required role: **ADMIN**',
  operationId: 'markBookThumbnailSelected',
  request: {
    params: z.object({
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
      thumbnailId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'thumbnailId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1ClaimRoute = createRoute({
  method: 'get',
  path: '/api/v1/claim',
  tags: ['Claim'],
  summary: 'Retrieve claim status',
  description: 'Check whether this server has already been claimed.',
  operationId: 'getClaimStatus',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ClaimStatusSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  security: [],
})

export const postApiV1ClaimRoute = createRoute({
  method: 'post',
  path: '/api/v1/claim',
  tags: ['Claim'],
  summary: 'Claim server',
  description: 'Creates an admin user with the provided credentials.',
  operationId: 'claimServer',
  request: {
    headers: z.object({
      'X-Komga-Email': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Komga-Email',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-Komga-Password': z
        .string()
        .min(1)
        .openapi({
          param: {
            in: 'header',
            name: 'X-Komga-Password',
            required: true,
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  security: [],
})

export const deleteApiV1ClientSettingsGlobalRoute = createRoute({
  method: 'delete',
  path: '/api/v1/client-settings/global',
  tags: ['Client settings'],
  summary: 'Delete global settings',
  description:
    "Setting key should be a valid lowercase namespace string like 'application.domain.key'\n\nRequired role: **ADMIN**",
  operationId: 'deleteGlobalSettings',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
          example: ['application.key1', 'application.key2'],
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const patchApiV1ClientSettingsGlobalRoute = createRoute({
  method: 'patch',
  path: '/api/v1/client-settings/global',
  tags: ['Client settings'],
  summary: 'Save global settings',
  description:
    "Setting key should be a valid lowercase namespace string like 'application.domain.key'\n\nRequired role: **ADMIN**",
  operationId: 'saveGlobalSetting',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.record(z.string(), ClientSettingGlobalUpdateDtoSchema),
          example: {
            'application.key1': { value: 'a string value', allowUnauthorized: true },
            'application.key2': { value: '{"json":"object"}', allowUnauthorized: false },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1ClientSettingsGlobalListRoute = createRoute({
  method: 'get',
  path: '/api/v1/client-settings/global/list',
  tags: ['Client settings'],
  summary: 'Retrieve global client settings',
  description:
    "For unauthenticated users, only settings with 'allowUnauthorized=true' will be returned.",
  operationId: 'getGlobalSettings',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.record(z.string(), ClientSettingDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  security: [],
})

export const deleteApiV1ClientSettingsUserRoute = createRoute({
  method: 'delete',
  path: '/api/v1/client-settings/user',
  tags: ['Client settings'],
  summary: 'Delete user settings',
  description:
    "Setting key should be a valid lowercase namespace string like 'application.domain.key'",
  operationId: 'deleteUserSettings',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
          example: ['application.key1', 'application.key2'],
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const patchApiV1ClientSettingsUserRoute = createRoute({
  method: 'patch',
  path: '/api/v1/client-settings/user',
  tags: ['Client settings'],
  summary: 'Save user settings',
  description:
    "Setting key should be a valid lowercase namespace string like 'application.domain.key'",
  operationId: 'saveUserSetting',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.record(z.string(), ClientSettingUserUpdateDtoSchema),
          example: {
            'application.key1': { value: 'a string value' },
            'application.key2': { value: '{"json":"object"}' },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1ClientSettingsUserListRoute = createRoute({
  method: 'get',
  path: '/api/v1/client-settings/user/list',
  tags: ['Client settings'],
  summary: 'Retrieve user client settings',
  operationId: 'getUserSettings',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.record(z.string(), ClientSettingDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1CollectionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/collections',
  tags: ['Collections'],
  summary: 'List collections',
  operationId: 'getCollections',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.',
            in: 'query',
            name: 'sort',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PageCollectionDtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1CollectionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/collections',
  tags: ['Collections'],
  summary: 'Create collection',
  description: 'Required role: **ADMIN**',
  operationId: 'createCollection',
  request: {
    body: {
      content: { 'application/json': { schema: CollectionCreationDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CollectionDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1CollectionsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/collections/{id}',
  tags: ['Collections'],
  summary: 'Get collection details',
  operationId: 'getCollectionById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CollectionDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const deleteApiV1CollectionsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/collections/{id}',
  tags: ['Collections'],
  summary: 'Delete collection',
  description: 'Required role: **ADMIN**',
  operationId: 'deleteCollectionById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const patchApiV1CollectionsIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/collections/{id}',
  tags: ['Collections'],
  summary: 'Update collection',
  description: 'Required role: **ADMIN**',
  operationId: 'updateCollectionById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: { 'application/json': { schema: CollectionUpdateDtoSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1CollectionsIdSeriesRoute = createRoute({
  method: 'get',
  path: '/api/v1/collections/{id}/series',
  tags: ['Collection Series'],
  summary: "List collection's series",
  operationId: 'getSeriesByCollectionId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['ENDED', 'ONGOING', 'ABANDONED', 'HIATUS'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['ENDED', 'ONGOING', 'ABANDONED', 'HIATUS'] },
            },
          },
        }),
      read_status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['UNREAD', 'READ', 'IN_PROGRESS'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'read_status',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['UNREAD', 'READ', 'IN_PROGRESS'] },
            },
          },
        }),
      publisher: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'publisher',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      language: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      genre: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'genre',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      tag: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tag',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      age_rating: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'age_rating',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      release_year: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'release_year',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'deleted', required: false, schema: { type: 'boolean' } },
        }),
      complete: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'complete', required: false, schema: { type: 'boolean' } },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      author: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Author criteria in the format: name,role. Multiple author criteria are supported.',
            in: 'query',
            name: 'author',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageSeriesDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1CollectionsIdThumbnailRoute = createRoute({
  method: 'get',
  path: '/api/v1/collections/{id}/thumbnail',
  tags: ['Collection Poster'],
  summary: "Get collection's poster image",
  operationId: 'getCollectionThumbnail',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
    default: {
      description: 'default response',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const getApiV1CollectionsIdThumbnailsRoute = createRoute({
  method: 'get',
  path: '/api/v1/collections/{id}/thumbnails',
  tags: ['Collection Poster'],
  summary: "List collection's posters",
  operationId: 'getCollectionThumbnails',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ThumbnailSeriesCollectionDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1CollectionsIdThumbnailsRoute = createRoute({
  method: 'post',
  path: '/api/v1/collections/{id}/thumbnails',
  tags: ['Collection Poster'],
  summary: 'Add collection poster',
  description: 'Required role: **ADMIN**',
  operationId: 'addUserUploadedCollectionThumbnail',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      selected: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'selected', required: false, schema: { type: 'boolean' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ file: z.file().openapi({ type: 'string', format: 'binary' }) })
            .openapi({ required: ['file'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ThumbnailSeriesCollectionDtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1CollectionsIdThumbnailsThumbnailIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/collections/{id}/thumbnails/{thumbnailId}',
  tags: ['Collection Poster'],
  summary: 'Get collection poster image',
  operationId: 'getCollectionThumbnailById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      thumbnailId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'thumbnailId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
    default: {
      description: 'default response',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const deleteApiV1CollectionsIdThumbnailsThumbnailIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/collections/{id}/thumbnails/{thumbnailId}',
  tags: ['Collection Poster'],
  summary: 'Delete collection poster',
  description: 'Required role: **ADMIN**',
  operationId: 'deleteUserUploadedCollectionThumbnail',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      thumbnailId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'thumbnailId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const putApiV1CollectionsIdThumbnailsThumbnailIdSelectedRoute = createRoute({
  method: 'put',
  path: '/api/v1/collections/{id}/thumbnails/{thumbnailId}/selected',
  tags: ['Collection Poster'],
  summary: 'Mark collection poster as selected',
  description: 'Required role: **ADMIN**',
  operationId: 'markCollectionThumbnailSelected',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      thumbnailId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'thumbnailId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1FilesystemRoute = createRoute({
  method: 'post',
  path: '/api/v1/filesystem',
  tags: ['File system'],
  summary: 'Directory listing',
  description:
    "List folders and files from the host server's file system. If no request body is passed then the root directories are returned.\n\nRequired role: **ADMIN**",
  operationId: 'getDirectoryListing',
  request: { body: { content: { 'application/json': { schema: DirectoryRequestDtoSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DirectoryListingDtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1FontsFamiliesRoute = createRoute({
  method: 'get',
  path: '/api/v1/fonts/families',
  tags: ['Fonts'],
  summary: 'List font families',
  description: 'List all available font families.',
  operationId: 'getFonts',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1FontsResourceFontFamilyCssRoute = createRoute({
  method: 'get',
  path: '/api/v1/fonts/resource/{fontFamily}/css',
  tags: ['Fonts'],
  summary: 'Download CSS file',
  description:
    'Download a CSS file with the @font-face block for the font family. This is used by the Epub Reader to change fonts.',
  operationId: 'getFontFamilyAsCss',
  request: {
    params: z.object({
      fontFamily: z
        .string()
        .openapi({
          param: { in: 'path', name: 'fontFamily', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/css': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  security: [],
})

export const getApiV1FontsResourceFontFamilyFontFileRoute = createRoute({
  method: 'get',
  path: '/api/v1/fonts/resource/{fontFamily}/{fontFile}',
  tags: ['Fonts'],
  summary: 'Download font file',
  operationId: 'getFontFile',
  request: {
    params: z.object({
      fontFamily: z
        .string()
        .openapi({
          param: { in: 'path', name: 'fontFamily', required: true, schema: { type: 'string' } },
        }),
      fontFile: z
        .string()
        .openapi({
          param: { in: 'path', name: 'fontFile', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  security: [],
})

export const getApiV1GenresRoute = createRoute({
  method: 'get',
  path: '/api/v1/genres',
  tags: ['Deprecated', 'Referential metadata'],
  summary: 'List genres',
  description: 'Use GET /v2/genres instead. Deprecated since 1.26.0',
  operationId: 'getGenres_1',
  request: {
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiV1HistoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/history',
  tags: ['History'],
  summary: 'List historical events',
  description: 'Required role: **ADMIN**',
  operationId: 'getHistoricalEvents',
  request: {
    query: z.object({
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.',
            in: 'query',
            name: 'sort',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PageHistoricalEventDtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1LanguagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/languages',
  tags: ['Deprecated', 'Referential metadata'],
  summary: 'List languages',
  description: 'Use GET /v2/languages instead. Deprecated since 1.26.0',
  operationId: 'getLanguages_1',
  request: {
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiV1LibrariesRoute = createRoute({
  method: 'get',
  path: '/api/v1/libraries',
  tags: ['Libraries'],
  summary: 'List all libraries',
  description: "The libraries are filtered based on the current user's permissions",
  operationId: 'getLibraries',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(LibraryDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1LibrariesRoute = createRoute({
  method: 'post',
  path: '/api/v1/libraries',
  tags: ['Libraries'],
  summary: 'Create a library',
  description: 'Required role: **ADMIN**',
  operationId: 'addLibrary',
  request: {
    body: { content: { 'application/json': { schema: LibraryCreationDtoSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: LibraryDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1LibrariesLibraryIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/libraries/{libraryId}',
  tags: ['Libraries'],
  summary: 'Get details for a single library',
  operationId: 'getLibraryById',
  request: {
    params: z.object({
      libraryId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'libraryId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: LibraryDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const putApiV1LibrariesLibraryIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/libraries/{libraryId}',
  tags: ['Deprecated', 'Libraries'],
  summary: 'Update a library',
  description:
    'Use PATCH /api/v1/libraries/{libraryId} instead. Deprecated since 1.3.0.\n\nRequired role: **ADMIN**',
  operationId: 'updateLibraryByIdDeprecated',
  request: {
    params: z.object({
      libraryId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'libraryId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: LibraryUpdateDtoSchema } }, required: true },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const deleteApiV1LibrariesLibraryIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/libraries/{libraryId}',
  tags: ['Libraries'],
  summary: 'Delete a library',
  description: 'Required role: **ADMIN**',
  operationId: 'deleteLibraryById',
  request: {
    params: z.object({
      libraryId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'libraryId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const patchApiV1LibrariesLibraryIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/libraries/{libraryId}',
  tags: ['Libraries'],
  summary: 'Update a library',
  description: "You can omit fields you don't want to update\n\nRequired role: **ADMIN**",
  operationId: 'updateLibraryById',
  request: {
    params: z.object({
      libraryId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'libraryId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: LibraryUpdateDtoSchema } }, required: true },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1LibrariesLibraryIdAnalyzeRoute = createRoute({
  method: 'post',
  path: '/api/v1/libraries/{libraryId}/analyze',
  tags: ['Libraries'],
  summary: 'Analyze a library',
  description: 'Required role: **ADMIN**',
  operationId: 'libraryAnalyze',
  request: {
    params: z.object({
      libraryId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'libraryId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1LibrariesLibraryIdEmptyTrashRoute = createRoute({
  method: 'post',
  path: '/api/v1/libraries/{libraryId}/empty-trash',
  tags: ['Libraries'],
  summary: 'Empty trash for a library',
  description: 'Required role: **ADMIN**',
  operationId: 'libraryEmptyTrash',
  request: {
    params: z.object({
      libraryId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'libraryId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1LibrariesLibraryIdMetadataRefreshRoute = createRoute({
  method: 'post',
  path: '/api/v1/libraries/{libraryId}/metadata/refresh',
  tags: ['Libraries'],
  summary: 'Refresh metadata for a library',
  description: 'Required role: **ADMIN**',
  operationId: 'libraryRefreshMetadata',
  request: {
    params: z.object({
      libraryId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'libraryId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1LibrariesLibraryIdScanRoute = createRoute({
  method: 'post',
  path: '/api/v1/libraries/{libraryId}/scan',
  tags: ['Libraries'],
  summary: 'Scan a library',
  description: 'Required role: **ADMIN**',
  operationId: 'libraryScan',
  request: {
    params: z.object({
      libraryId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'libraryId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      deep: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'deep', required: false, schema: { type: 'boolean' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1LoginSetCookieRoute = createRoute({
  method: 'get',
  path: '/api/v1/login/set-cookie',
  tags: ['User session'],
  summary: 'Set cookie',
  description:
    'Forcefully return Set-Cookie header, even if the session is contained in the X-Auth-Token header.',
  operationId: 'convertHeaderSessionToCookie',
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1Oauth2ProvidersRoute = createRoute({
  method: 'get',
  path: '/api/v1/oauth2/providers',
  tags: ['OAuth2'],
  summary: 'List registered OAuth2 providers',
  operationId: 'getOAuth2Providers',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(OAuth2ClientDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  security: [],
})

export const getApiV1PageHashesRoute = createRoute({
  method: 'get',
  path: '/api/v1/page-hashes',
  tags: ['Duplicate Pages'],
  summary: 'List known duplicates',
  description: 'Required role: **ADMIN**',
  operationId: 'getKnownPageHashes',
  request: {
    query: z.object({
      action: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['DELETE_AUTO', 'DELETE_MANUAL', 'IGNORE'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'action',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['DELETE_AUTO', 'DELETE_MANUAL', 'IGNORE'] },
            },
          },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.',
            in: 'query',
            name: 'sort',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagePageHashKnownDtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const putApiV1PageHashesRoute = createRoute({
  method: 'put',
  path: '/api/v1/page-hashes',
  tags: ['Duplicate Pages'],
  summary: 'Mark duplicate page as known',
  description: 'Required role: **ADMIN**',
  operationId: 'createOrUpdateKnownPageHash',
  request: {
    body: {
      content: { 'application/json': { schema: PageHashCreationDtoSchema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1PageHashesUnknownRoute = createRoute({
  method: 'get',
  path: '/api/v1/page-hashes/unknown',
  tags: ['Duplicate Pages'],
  summary: 'List unknown duplicates',
  description: 'Required role: **ADMIN**',
  operationId: 'getUnknownPageHashes',
  request: {
    query: z.object({
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.',
            in: 'query',
            name: 'sort',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagePageHashUnknownDtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1PageHashesUnknownPageHashThumbnailRoute = createRoute({
  method: 'get',
  path: '/api/v1/page-hashes/unknown/{pageHash}/thumbnail',
  tags: ['Duplicate Pages'],
  summary: 'Get unknown duplicate image thumbnail',
  description: 'Required role: **ADMIN**',
  operationId: 'getUnknownPageHashThumbnail',
  request: {
    params: z.object({
      pageHash: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageHash', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      resize: z
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
            in: 'query',
            name: 'resize',
            required: false,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
    default: {
      description: 'default response',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const getApiV1PageHashesPageHashRoute = createRoute({
  method: 'get',
  path: '/api/v1/page-hashes/{pageHash}',
  tags: ['Duplicate Pages'],
  summary: 'List duplicate matches',
  description: 'Required role: **ADMIN**',
  operationId: 'getPageHashMatches',
  request: {
    params: z.object({
      pageHash: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageHash', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.',
            in: 'query',
            name: 'sort',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PagePageHashMatchDtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1PageHashesPageHashDeleteAllRoute = createRoute({
  method: 'post',
  path: '/api/v1/page-hashes/{pageHash}/delete-all',
  tags: ['Duplicate Pages'],
  summary: 'Delete all duplicate pages by hash',
  description: 'Required role: **ADMIN**',
  operationId: 'deleteDuplicatePagesByPageHash',
  request: {
    params: z.object({
      pageHash: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageHash', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1PageHashesPageHashDeleteMatchRoute = createRoute({
  method: 'post',
  path: '/api/v1/page-hashes/{pageHash}/delete-match',
  tags: ['Duplicate Pages'],
  summary: 'Delete specific duplicate page',
  description: 'Required role: **ADMIN**',
  operationId: 'deleteSingleMatchByPageHash',
  request: {
    params: z.object({
      pageHash: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageHash', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PageHashMatchDtoSchema } }, required: true },
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1PageHashesPageHashThumbnailRoute = createRoute({
  method: 'get',
  path: '/api/v1/page-hashes/{pageHash}/thumbnail',
  tags: ['Duplicate Pages'],
  summary: 'Get known duplicate image thumbnail',
  description: 'Required role: **ADMIN**',
  operationId: 'getKnownPageHashThumbnail',
  request: {
    params: z.object({
      pageHash: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageHash', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
    default: {
      description: 'default response',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const getApiV1PublishersRoute = createRoute({
  method: 'get',
  path: '/api/v1/publishers',
  tags: ['Deprecated', 'Referential metadata'],
  summary: 'List publishers',
  description: 'Use GET /v2/publishers instead. Deprecated since 1.26.0',
  operationId: 'getPublishers_1',
  request: {
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiV1ReadlistsRoute = createRoute({
  method: 'get',
  path: '/api/v1/readlists',
  tags: ['Readlists'],
  summary: 'List readlists',
  operationId: 'getReadLists',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.',
            in: 'query',
            name: 'sort',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageReadListDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1ReadlistsRoute = createRoute({
  method: 'post',
  path: '/api/v1/readlists',
  tags: ['Readlists'],
  summary: 'Create readlist',
  description: 'Required role: **ADMIN**',
  operationId: 'createReadList',
  request: {
    body: {
      content: { 'application/json': { schema: ReadListCreationDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ReadListDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1ReadlistsMatchComicrackRoute = createRoute({
  method: 'post',
  path: '/api/v1/readlists/match/comicrack',
  tags: ['ComicRack'],
  summary: 'Match ComicRack list',
  description: 'Required role: **ADMIN**',
  operationId: 'matchComicRackList',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ file: z.file().openapi({ type: 'string', format: 'binary' }) })
            .openapi({ required: ['file'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ReadListRequestMatchDtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1ReadlistsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/readlists/{id}',
  tags: ['Readlists'],
  summary: 'Get readlist details',
  operationId: 'getReadListById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ReadListDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const deleteApiV1ReadlistsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/readlists/{id}',
  tags: ['Readlists'],
  summary: 'Delete readlist',
  description: 'Required role: **ADMIN**',
  operationId: 'deleteReadListById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const patchApiV1ReadlistsIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/readlists/{id}',
  tags: ['Readlists'],
  summary: 'Update readlist',
  description: 'Required role: **ADMIN**',
  operationId: 'updateReadListById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: ReadListUpdateDtoSchema } }, required: true },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1ReadlistsIdBooksRoute = createRoute({
  method: 'get',
  path: '/api/v1/readlists/{id}/books',
  tags: ['Readlist Books'],
  summary: "List readlist's books",
  operationId: 'getBooksByReadListId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      read_status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['UNREAD', 'READ', 'IN_PROGRESS'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'read_status',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['UNREAD', 'READ', 'IN_PROGRESS'] },
            },
          },
        }),
      tag: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tag',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      media_status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['UNKNOWN', 'ERROR', 'READY', 'UNSUPPORTED', 'OUTDATED'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'media_status',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['UNKNOWN', 'ERROR', 'READY', 'UNSUPPORTED', 'OUTDATED'],
              },
            },
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'deleted', required: false, schema: { type: 'boolean' } },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      author: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Author criteria in the format: name,role. Multiple author criteria are supported.',
            in: 'query',
            name: 'author',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageBookDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1ReadlistsIdBooksBookIdNextRoute = createRoute({
  method: 'get',
  path: '/api/v1/readlists/{id}/books/{bookId}/next',
  tags: ['Readlist Books'],
  summary: 'Get next book in readlist',
  operationId: 'getBookSiblingNextInReadList',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BookDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1ReadlistsIdBooksBookIdPreviousRoute = createRoute({
  method: 'get',
  path: '/api/v1/readlists/{id}/books/{bookId}/previous',
  tags: ['Readlist Books'],
  summary: 'Get previous book in readlist',
  operationId: 'getBookSiblingPreviousInReadList',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      bookId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'bookId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BookDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1ReadlistsIdFileRoute = createRoute({
  method: 'get',
  path: '/api/v1/readlists/{id}/file',
  tags: ['Readlists'],
  summary: 'Download readlist',
  description: 'Download the whole readlist as a ZIP file.\n\nRequired role: **FILE_DOWNLOAD**',
  operationId: 'downloadReadListAsZip',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: StreamingResponseBodySchema },
        'application/octet-stream': { schema: StreamingResponseBodySchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1ReadlistsIdReadProgressTachiyomiRoute = createRoute({
  method: 'get',
  path: '/api/v1/readlists/{id}/read-progress/tachiyomi',
  tags: ['Mihon'],
  summary: 'Get readlist read progress (Mihon)',
  description: 'Mihon specific, due to how read progress is handled in Mihon.',
  operationId: 'getMihonReadProgressByReadListId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TachiyomiReadProgressDtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const putApiV1ReadlistsIdReadProgressTachiyomiRoute = createRoute({
  method: 'put',
  path: '/api/v1/readlists/{id}/read-progress/tachiyomi',
  tags: ['Mihon'],
  summary: 'Update readlist read progress (Mihon)',
  description: 'Mihon specific, due to how read progress is handled in Mihon.',
  operationId: 'updateMihonReadProgressByReadListId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: { 'application/json': { schema: TachiyomiReadProgressUpdateDtoSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1ReadlistsIdThumbnailRoute = createRoute({
  method: 'get',
  path: '/api/v1/readlists/{id}/thumbnail',
  tags: ['Readlist Poster'],
  summary: "Get readlist's poster image",
  operationId: 'getReadListThumbnail',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
    default: {
      description: 'default response',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const getApiV1ReadlistsIdThumbnailsRoute = createRoute({
  method: 'get',
  path: '/api/v1/readlists/{id}/thumbnails',
  tags: ['Readlist Poster'],
  summary: "List readlist's posters",
  operationId: 'getReadListThumbnails',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ThumbnailReadListDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1ReadlistsIdThumbnailsRoute = createRoute({
  method: 'post',
  path: '/api/v1/readlists/{id}/thumbnails',
  tags: ['Readlist Poster'],
  summary: 'Add readlist poster',
  description: 'Required role: **ADMIN**',
  operationId: 'addUserUploadedReadListThumbnail',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      selected: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'selected', required: false, schema: { type: 'boolean' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ file: z.file().openapi({ type: 'string', format: 'binary' }) })
            .openapi({ required: ['file'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ThumbnailReadListDtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1ReadlistsIdThumbnailsThumbnailIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/readlists/{id}/thumbnails/{thumbnailId}',
  tags: ['Readlist Poster'],
  summary: 'Get readlist poster image',
  operationId: 'getReadListThumbnailById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      thumbnailId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'thumbnailId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
    default: {
      description: 'default response',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const deleteApiV1ReadlistsIdThumbnailsThumbnailIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/readlists/{id}/thumbnails/{thumbnailId}',
  tags: ['Readlist Poster'],
  summary: 'Delete readlist poster',
  description: 'Required role: **ADMIN**',
  operationId: 'deleteUserUploadedReadListThumbnail',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      thumbnailId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'thumbnailId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const putApiV1ReadlistsIdThumbnailsThumbnailIdSelectedRoute = createRoute({
  method: 'put',
  path: '/api/v1/readlists/{id}/thumbnails/{thumbnailId}/selected',
  tags: ['Readlist Poster'],
  summary: 'Mark readlist poster as selected',
  description: 'Required role: **ADMIN**',
  operationId: 'markReadListThumbnailSelected',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      thumbnailId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'thumbnailId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1ReleasesRoute = createRoute({
  method: 'get',
  path: '/api/v1/releases',
  tags: ['Releases'],
  summary: 'List releases',
  description: 'Required role: **ADMIN**',
  operationId: 'getReleases',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ReleaseDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1SeriesRoute = createRoute({
  method: 'get',
  path: '/api/v1/series',
  tags: ['Series', 'Deprecated'],
  summary: 'List series',
  description: 'Use POST /api/v1/series/list instead. Deprecated since 1.19.0.',
  operationId: 'getSeriesDeprecated',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['ENDED', 'ONGOING', 'ABANDONED', 'HIATUS'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['ENDED', 'ONGOING', 'ABANDONED', 'HIATUS'] },
            },
          },
        }),
      read_status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['UNREAD', 'READ', 'IN_PROGRESS'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'read_status',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['UNREAD', 'READ', 'IN_PROGRESS'] },
            },
          },
        }),
      publisher: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'publisher',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      language: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      genre: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'genre',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      tag: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tag',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      age_rating: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'age_rating',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      release_year: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'release_year',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      sharing_label: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sharing_label',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'deleted', required: false, schema: { type: 'boolean' } },
        }),
      complete: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'complete', required: false, schema: { type: 'boolean' } },
        }),
      oneshot: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'oneshot', required: false, schema: { type: 'boolean' } },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      search_regex: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search by regex criteria, in the form: regex,field. Supported fields are TITLE and TITLE_SORT.',
            in: 'query',
            name: 'search_regex',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.',
            in: 'query',
            name: 'sort',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      author: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Author criteria in the format: name,role. Multiple author criteria are supported.',
            in: 'query',
            name: 'author',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageSeriesDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiV1SeriesAlphabeticalGroupsRoute = createRoute({
  method: 'get',
  path: '/api/v1/series/alphabetical-groups',
  tags: ['Series', 'Deprecated'],
  summary: 'List series groups',
  description: 'Use POST /api/v1/series/list/alphabetical-groups instead. Deprecated since 1.19.0.',
  operationId: 'getSeriesAlphabeticalGroupsDeprecated',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['ENDED', 'ONGOING', 'ABANDONED', 'HIATUS'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['ENDED', 'ONGOING', 'ABANDONED', 'HIATUS'] },
            },
          },
        }),
      read_status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['UNREAD', 'READ', 'IN_PROGRESS'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'read_status',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['UNREAD', 'READ', 'IN_PROGRESS'] },
            },
          },
        }),
      publisher: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'publisher',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      language: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      genre: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'genre',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      tag: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tag',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      age_rating: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'age_rating',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      release_year: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'release_year',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      sharing_label: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sharing_label',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'deleted', required: false, schema: { type: 'boolean' } },
        }),
      complete: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'complete', required: false, schema: { type: 'boolean' } },
        }),
      oneshot: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'oneshot', required: false, schema: { type: 'boolean' } },
        }),
      search_regex: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search by regex criteria, in the form: regex,field. Supported fields are TITLE and TITLE_SORT.',
            in: 'query',
            name: 'search_regex',
            schema: { type: 'string' },
            required: false,
          },
        }),
      author: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Author criteria in the format: name,role. Multiple author criteria are supported.',
            in: 'query',
            name: 'author',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(GroupCountDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiV1SeriesLatestRoute = createRoute({
  method: 'get',
  path: '/api/v1/series/latest',
  tags: ['Series'],
  summary: 'List latest series',
  description: 'Return recently added or updated series.',
  operationId: 'getSeriesLatest',
  request: {
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'deleted', required: false, schema: { type: 'boolean' } },
        }),
      oneshot: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'oneshot', required: false, schema: { type: 'boolean' } },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageSeriesDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1SeriesListRoute = createRoute({
  method: 'post',
  path: '/api/v1/series/list',
  tags: ['Series'],
  summary: 'List series',
  operationId: 'getSeries',
  request: {
    query: z.object({
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.',
            in: 'query',
            name: 'sort',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SeriesSearchSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageSeriesDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1SeriesListAlphabeticalGroupsRoute = createRoute({
  method: 'post',
  path: '/api/v1/series/list/alphabetical-groups',
  tags: ['Series'],
  summary: 'List series groups',
  description: 'List series grouped by the first character of their sort title.',
  operationId: 'getSeriesAlphabeticalGroups',
  request: {
    body: { content: { 'application/json': { schema: SeriesSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(GroupCountDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1SeriesNewRoute = createRoute({
  method: 'get',
  path: '/api/v1/series/new',
  tags: ['Series'],
  summary: 'List new series',
  description: 'Return newly added series.',
  operationId: 'getSeriesNew',
  request: {
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'deleted', required: false, schema: { type: 'boolean' } },
        }),
      oneshot: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'oneshot', required: false, schema: { type: 'boolean' } },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageSeriesDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1SeriesReleaseDatesRoute = createRoute({
  method: 'get',
  path: '/api/v1/series/release-dates',
  tags: ['Deprecated', 'Referential metadata'],
  summary: 'List series release dates',
  description: 'Use GET /v2/series/release-years instead. Deprecated since 1.26.0',
  operationId: 'getSeriesReleaseDates',
  request: {
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiV1SeriesUpdatedRoute = createRoute({
  method: 'get',
  path: '/api/v1/series/updated',
  tags: ['Series'],
  summary: 'List updated series',
  description: 'Return recently updated series, but not newly added ones.',
  operationId: 'getSeriesUpdated',
  request: {
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'deleted', required: false, schema: { type: 'boolean' } },
        }),
      oneshot: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'oneshot', required: false, schema: { type: 'boolean' } },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageSeriesDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1SeriesSeriesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/series/{seriesId}',
  tags: ['Series'],
  summary: 'Get series details',
  operationId: 'getSeriesById',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SeriesDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1SeriesSeriesIdAnalyzeRoute = createRoute({
  method: 'post',
  path: '/api/v1/series/{seriesId}/analyze',
  tags: ['Series'],
  summary: 'Analyze series',
  description: 'Required role: **ADMIN**',
  operationId: 'seriesAnalyze',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1SeriesSeriesIdBooksRoute = createRoute({
  method: 'get',
  path: '/api/v1/series/{seriesId}/books',
  tags: ['Series', 'Deprecated'],
  summary: "List series' books",
  description: 'Use POST /api/v1/books/list instead. Deprecated since 1.19.0.',
  operationId: 'getBooksBySeriesId',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      media_status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['UNKNOWN', 'ERROR', 'READY', 'UNSUPPORTED', 'OUTDATED'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'media_status',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['UNKNOWN', 'ERROR', 'READY', 'UNSUPPORTED', 'OUTDATED'],
              },
            },
          },
        }),
      read_status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['UNREAD', 'READ', 'IN_PROGRESS'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'read_status',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['UNREAD', 'READ', 'IN_PROGRESS'] },
            },
          },
        }),
      tag: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tag',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'deleted', required: false, schema: { type: 'boolean' } },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.',
            in: 'query',
            name: 'sort',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      author: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Author criteria in the format: name,role. Multiple author criteria are supported.',
            in: 'query',
            name: 'author',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageBookDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiV1SeriesSeriesIdCollectionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/series/{seriesId}/collections',
  tags: ['Series'],
  summary: "List series' collections",
  operationId: 'getCollectionsBySeriesId',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CollectionDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1SeriesSeriesIdFileRoute = createRoute({
  method: 'get',
  path: '/api/v1/series/{seriesId}/file',
  tags: ['Series'],
  summary: 'Download series',
  description: 'Download the whole series as a ZIP file.\n\nRequired role: **FILE_DOWNLOAD**',
  operationId: 'downloadSeriesAsZip',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: StreamingResponseBodySchema },
        'application/octet-stream': { schema: StreamingResponseBodySchema },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const deleteApiV1SeriesSeriesIdFileRoute = createRoute({
  method: 'delete',
  path: '/api/v1/series/{seriesId}/file',
  tags: ['Series'],
  summary: 'Delete series files',
  description: "Delete all of the series' books files on disk.\n\nRequired role: **ADMIN**",
  operationId: 'deleteSeriesFile',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const patchApiV1SeriesSeriesIdMetadataRoute = createRoute({
  method: 'patch',
  path: '/api/v1/series/{seriesId}/metadata',
  tags: ['Series'],
  summary: 'Update series metadata',
  description: 'Required role: **ADMIN**',
  operationId: 'updateSeriesMetadata',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SeriesMetadataUpdateDtoSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1SeriesSeriesIdMetadataRefreshRoute = createRoute({
  method: 'post',
  path: '/api/v1/series/{seriesId}/metadata/refresh',
  tags: ['Series'],
  summary: 'Refresh series metadata',
  description: 'Required role: **ADMIN**',
  operationId: 'seriesRefreshMetadata',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1SeriesSeriesIdReadProgressRoute = createRoute({
  method: 'post',
  path: '/api/v1/series/{seriesId}/read-progress',
  tags: ['Series'],
  summary: 'Mark series as read',
  description: 'Mark all book for series as read',
  operationId: 'markSeriesAsRead',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const deleteApiV1SeriesSeriesIdReadProgressRoute = createRoute({
  method: 'delete',
  path: '/api/v1/series/{seriesId}/read-progress',
  tags: ['Series'],
  summary: 'Mark series as unread',
  description: 'Mark all book for series as unread',
  operationId: 'markSeriesAsUnread',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1SeriesSeriesIdThumbnailRoute = createRoute({
  method: 'get',
  path: '/api/v1/series/{seriesId}/thumbnail',
  tags: ['Series Poster'],
  summary: "Get series' poster image",
  operationId: 'getSeriesThumbnail',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
    default: {
      description: 'default response',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const getApiV1SeriesSeriesIdThumbnailsRoute = createRoute({
  method: 'get',
  path: '/api/v1/series/{seriesId}/thumbnails',
  tags: ['Series Poster'],
  summary: 'List series posters',
  operationId: 'getSeriesThumbnails',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ThumbnailSeriesDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1SeriesSeriesIdThumbnailsRoute = createRoute({
  method: 'post',
  path: '/api/v1/series/{seriesId}/thumbnails',
  tags: ['Series Poster'],
  summary: 'Add series poster',
  description: 'Required role: **ADMIN**',
  operationId: 'addUserUploadedSeriesThumbnail',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      selected: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'selected', required: false, schema: { type: 'boolean' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ file: z.file().openapi({ type: 'string', format: 'binary' }) })
            .openapi({ required: ['file'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ThumbnailSeriesDtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1SeriesSeriesIdThumbnailsThumbnailIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/series/{seriesId}/thumbnails/{thumbnailId}',
  tags: ['Series Poster'],
  summary: 'Get series poster image',
  operationId: 'getSeriesThumbnailById',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
      thumbnailId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'thumbnailId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
    default: {
      description: 'default response',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const deleteApiV1SeriesSeriesIdThumbnailsThumbnailIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/series/{seriesId}/thumbnails/{thumbnailId}',
  tags: ['Series Poster'],
  summary: 'Delete series poster',
  description: 'Required role: **ADMIN**',
  operationId: 'deleteUserUploadedSeriesThumbnail',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
      thumbnailId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'thumbnailId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const putApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedRoute = createRoute({
  method: 'put',
  path: '/api/v1/series/{seriesId}/thumbnails/{thumbnailId}/selected',
  tags: ['Series Poster'],
  summary: 'Mark series poster as selected',
  description: 'Required role: **ADMIN**',
  operationId: 'markSeriesThumbnailSelected',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
      thumbnailId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'thumbnailId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1SettingsRoute = createRoute({
  method: 'get',
  path: '/api/v1/settings',
  tags: ['Server settings'],
  summary: 'Retrieve server settings',
  operationId: 'getServerSettings',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SettingsDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const patchApiV1SettingsRoute = createRoute({
  method: 'patch',
  path: '/api/v1/settings',
  tags: ['Server settings'],
  summary: 'Update server settings',
  description: "You can omit fields you don't want to update\n\nRequired role: **ADMIN**",
  operationId: 'updateServerSettings',
  request: {
    body: { content: { 'application/json': { schema: SettingsUpdateDtoSchema } }, required: true },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1SharingLabelsRoute = createRoute({
  method: 'get',
  path: '/api/v1/sharing-labels',
  tags: ['Deprecated', 'Referential metadata'],
  summary: 'List sharing labels',
  description: 'Use GET /v2/sharing-labels instead. Deprecated since 1.26.0',
  operationId: 'getSharingLabels_1',
  request: {
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const deleteApiV1SyncpointsMeRoute = createRoute({
  method: 'delete',
  path: '/api/v1/syncpoints/me',
  tags: ['Sync points'],
  summary: 'Delete all sync points',
  description:
    'If an API Key ID is passed, deletes only the sync points associated with that API Key. Deleting sync points will allow a Kobo to sync from scratch upon the next sync.',
  operationId: 'deleteSyncPointsForCurrentUser',
  request: {
    query: z.object({
      key_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'key_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1TagsRoute = createRoute({
  method: 'get',
  path: '/api/v1/tags',
  tags: ['Deprecated', 'Referential metadata'],
  summary: 'List tags',
  description: 'Use GET /v2/tags instead. Deprecated since 1.26.0',
  operationId: 'getTags_1',
  request: {
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiV1TagsBookRoute = createRoute({
  method: 'get',
  path: '/api/v1/tags/book',
  tags: ['Deprecated', 'Referential metadata'],
  summary: 'List book tags',
  description: 'Use GET /v2/tags instead. Deprecated since 1.26.0',
  operationId: 'getBookTags',
  request: {
    query: z.object({
      series_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'series_id', required: false, schema: { type: 'string' } },
        }),
      readlist_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'readlist_id', required: false, schema: { type: 'string' } },
        }),
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const getApiV1TagsSeriesRoute = createRoute({
  method: 'get',
  path: '/api/v1/tags/series',
  tags: ['Deprecated', 'Referential metadata'],
  summary: 'List series tags',
  description: 'Use GET /v2/tags instead. Deprecated since 1.26.0',
  operationId: 'getSeriesTags',
  request: {
    query: z.object({
      library_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'library_id', required: false, schema: { type: 'string' } },
        }),
      collection_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
  deprecated: true,
})

export const deleteApiV1TasksRoute = createRoute({
  method: 'delete',
  path: '/api/v1/tasks',
  tags: ['Tasks'],
  summary: 'Clear task queue',
  description: 'Cancel all tasks queued\n\nRequired role: **ADMIN**',
  operationId: 'emptyTaskQueue',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.int32() } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1TransientBooksRoute = createRoute({
  method: 'post',
  path: '/api/v1/transient-books',
  tags: ['Import'],
  summary: 'Scan folder for transient books',
  description: 'Scan provided folder for transient books.\n\nRequired role: **ADMIN**',
  operationId: 'scanTransientBooks',
  request: {
    body: { content: { 'application/json': { schema: ScanRequestDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(TransientBookDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV1TransientBooksIdAnalyzeRoute = createRoute({
  method: 'post',
  path: '/api/v1/transient-books/{id}/analyze',
  tags: ['Import'],
  summary: 'Analyze transient book',
  description: 'Required role: **ADMIN**',
  operationId: 'analyzeTransientBook',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TransientBookDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV1TransientBooksIdPagesPageNumberRoute = createRoute({
  method: 'get',
  path: '/api/v1/transient-books/{id}/pages/{pageNumber}',
  tags: ['Import'],
  summary: 'Get transient book page',
  description: 'Required role: **ADMIN**',
  operationId: 'getPageByTransientBookId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
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
        .openapi({
          param: {
            in: 'path',
            name: 'pageNumber',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { '*/*': { schema: z.string() }, 'application/json': { schema: z.string() } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2AgeRatingsRoute = createRoute({
  method: 'get',
  path: '/api/v2/age-ratings',
  tags: ['Referential metadata'],
  summary: 'List age ratings',
  description: 'Can be filtered by various criteria',
  operationId: 'getAgeRatings',
  request: {
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageIntegerSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2AuthorsRoute = createRoute({
  method: 'get',
  path: '/api/v2/authors',
  tags: ['Referential metadata'],
  summary: 'List authors',
  description: 'Can be filtered by various criteria',
  operationId: 'getAuthors',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      role: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'role', required: false, schema: { type: 'string' } },
        }),
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      series_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'series_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      readlist_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'readlist_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageAuthorDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2AuthorsNamesRoute = createRoute({
  method: 'get',
  path: '/api/v2/authors/names',
  tags: ['Referential metadata'],
  summary: 'List authors names',
  description: 'Can be filtered by various criteria',
  operationId: 'getAuthorsNames',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      role: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'role', required: false, schema: { type: 'string' } },
        }),
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      series_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'series_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      readlist_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'readlist_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageStringSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2AuthorsRolesRoute = createRoute({
  method: 'get',
  path: '/api/v2/authors/roles',
  tags: ['Referential metadata'],
  summary: 'List authors roles',
  description: 'Can be filtered by various criteria',
  operationId: 'getAuthorsRoles',
  request: {
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      series_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'series_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      readlist_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'readlist_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageStringSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2GenresRoute = createRoute({
  method: 'get',
  path: '/api/v2/genres',
  tags: ['Referential metadata'],
  summary: 'List genres',
  description: 'Can be filtered by various criteria',
  operationId: 'getGenres',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageStringSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2LanguagesRoute = createRoute({
  method: 'get',
  path: '/api/v2/languages',
  tags: ['Referential metadata'],
  summary: 'List languages',
  description: 'Can be filtered by various criteria',
  operationId: 'getLanguages',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageStringSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2PublishersRoute = createRoute({
  method: 'get',
  path: '/api/v2/publishers',
  tags: ['Referential metadata'],
  summary: 'List publishers',
  description: 'Can be filtered by various criteria',
  operationId: 'getPublishers',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageStringSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2SeriesReleaseYearsRoute = createRoute({
  method: 'get',
  path: '/api/v2/series/release-years',
  tags: ['Referential metadata'],
  summary: 'List series release years',
  description: 'Can be filtered by various criteria',
  operationId: 'getSeriesReleaseYears',
  request: {
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageStringSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2SeriesSeriesIdReadProgressTachiyomiRoute = createRoute({
  method: 'get',
  path: '/api/v2/series/{seriesId}/read-progress/tachiyomi',
  tags: ['Mihon'],
  summary: 'Get series read progress (Mihon)',
  description: 'Mihon specific, due to how read progress is handled in Mihon.',
  operationId: 'getMihonReadProgressBySeriesId',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TachiyomiReadProgressV2DtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const putApiV2SeriesSeriesIdReadProgressTachiyomiRoute = createRoute({
  method: 'put',
  path: '/api/v2/series/{seriesId}/read-progress/tachiyomi',
  tags: ['Mihon'],
  summary: 'Update series read progress (Mihon)',
  description: 'Mihon specific, due to how read progress is handled in Mihon.',
  operationId: 'updateMihonReadProgressBySeriesId',
  request: {
    params: z.object({
      seriesId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'seriesId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TachiyomiReadProgressUpdateV2DtoSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2SharingLabelsRoute = createRoute({
  method: 'get',
  path: '/api/v2/sharing-labels',
  tags: ['Referential metadata'],
  summary: 'List sharing labels',
  description: 'Can be filtered by various criteria',
  operationId: 'getSharingLabels',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageStringSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2TagsRoute = createRoute({
  method: 'get',
  path: '/api/v2/tags',
  tags: ['Referential metadata'],
  summary: 'List tags',
  description: 'Can be filtered by various criteria',
  operationId: 'getTags',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      series_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'series_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      readlist_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'readlist_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      include: z
        .enum(['SERIES', 'BOOK', 'BOTH'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include',
            required: false,
            schema: { type: 'string', enum: ['SERIES', 'BOOK', 'BOTH'] },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PageStringSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2UsersRoute = createRoute({
  method: 'get',
  path: '/api/v2/users',
  tags: ['Users'],
  summary: 'List users',
  description: 'Required role: **ADMIN**',
  operationId: 'getUsers',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(UserDtoSchema) } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV2UsersRoute = createRoute({
  method: 'post',
  path: '/api/v2/users',
  tags: ['Users'],
  summary: 'Create user',
  description: 'Required role: **ADMIN**',
  operationId: 'addUser',
  request: {
    body: { content: { 'application/json': { schema: UserCreationDtoSchema } }, required: true },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: UserDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2UsersAuthenticationActivityRoute = createRoute({
  method: 'get',
  path: '/api/v2/users/authentication-activity',
  tags: ['Users'],
  summary: 'Retrieve authentication activity',
  description: 'Required role: **ADMIN**',
  operationId: 'getAuthenticationActivity',
  request: {
    query: z.object({
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer', default: 0 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer', default: 20 },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.',
            in: 'query',
            name: 'sort',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PageAuthenticationActivityDtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2UsersMeRoute = createRoute({
  method: 'get',
  path: '/api/v2/users/me',
  tags: ['Current user'],
  summary: 'Retrieve current user',
  operationId: 'getCurrentUser',
  request: {
    query: z.object({
      'remember-me': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'remember-me', required: false, schema: { type: 'boolean' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2UsersMeApiKeysRoute = createRoute({
  method: 'get',
  path: '/api/v2/users/me/api-keys',
  tags: ['API Keys'],
  summary: 'Retrieve API keys',
  operationId: 'getApiKeysForCurrentUser',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ApiKeyDtoSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const postApiV2UsersMeApiKeysRoute = createRoute({
  method: 'post',
  path: '/api/v2/users/me/api-keys',
  tags: ['API Keys'],
  summary: 'Create API key',
  operationId: 'createApiKeyForCurrentUser',
  request: {
    body: { content: { 'application/json': { schema: ApiKeyRequestDtoSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApiKeyDtoSchema } } },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const deleteApiV2UsersMeApiKeysKeyIdRoute = createRoute({
  method: 'delete',
  path: '/api/v2/users/me/api-keys/{keyId}',
  tags: ['API Keys'],
  summary: 'Delete API key',
  operationId: 'deleteApiKeyByKeyId',
  request: {
    params: z.object({
      keyId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'keyId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2UsersMeAuthenticationActivityRoute = createRoute({
  method: 'get',
  path: '/api/v2/users/me/authentication-activity',
  tags: ['Current user'],
  summary: 'Retrieve authentication activity for the current user',
  operationId: 'getAuthenticationActivityForCurrentUser',
  request: {
    query: z.object({
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer', default: 0 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer', default: 20 },
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.',
            in: 'query',
            name: 'sort',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PageAuthenticationActivityDtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const patchApiV2UsersMePasswordRoute = createRoute({
  method: 'patch',
  path: '/api/v2/users/me/password',
  tags: ['Current user'],
  summary: "Update current user's password",
  operationId: 'updatePasswordForCurrentUser',
  request: {
    body: { content: { 'application/json': { schema: PasswordUpdateDtoSchema } }, required: true },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const deleteApiV2UsersIdRoute = createRoute({
  method: 'delete',
  path: '/api/v2/users/{id}',
  tags: ['Users'],
  summary: 'Delete user',
  description: 'Required role: **ADMIN**',
  operationId: 'deleteUserById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const patchApiV2UsersIdRoute = createRoute({
  method: 'patch',
  path: '/api/v2/users/{id}',
  tags: ['Users'],
  summary: 'Update user',
  description: 'Required role: **ADMIN**',
  operationId: 'updateUserById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: UserUpdateDtoSchema } }, required: true },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV2UsersIdAuthenticationActivityLatestRoute = createRoute({
  method: 'get',
  path: '/api/v2/users/{id}/authentication-activity/latest',
  tags: ['Users'],
  summary: 'Retrieve latest authentication activity for a user',
  description: 'Required role: **ADMIN**',
  operationId: 'getLatestAuthenticationActivityByUserId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      apikey_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'apikey_id', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AuthenticationActivityDtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const patchApiV2UsersIdPasswordRoute = createRoute({
  method: 'patch',
  path: '/api/v2/users/{id}/password',
  tags: ['Users'],
  summary: "Update user's password",
  description: 'Required role: **ADMIN**',
  operationId: 'updatePasswordByUserId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: PasswordUpdateDtoSchema } }, required: true },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV3NotableEntitiesRoute = createRoute({
  method: 'get',
  path: '/api/v3/notable-entities',
  tags: ['Referential metadata'],
  summary: 'List notable entities',
  description: 'Can be filtered by various criteria',
  operationId: 'getNotableEntities',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      kind: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'kind', required: false, schema: { type: 'string' } },
        }),
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      series_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'series_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      readlist_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'readlist_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PageResponseNotableEntityDtoSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV3NotableEntitiesKindsRoute = createRoute({
  method: 'get',
  path: '/api/v3/notable-entities/kinds',
  tags: ['Referential metadata'],
  summary: 'List notable entities kinds',
  description: 'Can be filtered by various criteria',
  operationId: 'getNotableEntitiesKinds',
  request: {
    query: z.object({
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      series_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'series_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      readlist_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'readlist_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PageResponseStringSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})

export const getApiV3NotableEntitiesNamesRoute = createRoute({
  method: 'get',
  path: '/api/v3/notable-entities/names',
  tags: ['Referential metadata'],
  summary: 'List notable entities names',
  description: 'Can be filtered by various criteria',
  operationId: 'getNotableEntitiesNames',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      kind: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'kind', required: false, schema: { type: 'string' } },
        }),
      library_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'library_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      series_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'series_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      readlist_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'readlist_id',
            required: false,
            schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
          },
        }),
      unpaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'unpaged', required: false, schema: { type: 'boolean' } },
        }),
      page: z
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
            description: 'Zero-based page index (0..N)',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      size: z
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
            description: 'The size of the page to be returned',
            in: 'query',
            name: 'size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PageResponseStringSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { '*/*': { schema: ValidationErrorResponseSchema } },
    },
  },
})
