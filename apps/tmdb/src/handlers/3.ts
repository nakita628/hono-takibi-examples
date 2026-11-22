import type { RouteHandler } from '@hono/zod-openapi'
import type {
  delete3AuthenticationSessionRoute,
  delete3ListListIdRoute,
  delete3MovieMovieIdRatingRoute,
  delete3TvSeriesIdRatingRoute,
  delete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingRoute,
  get3AccountAccountIdFavoriteMoviesRoute,
  get3AccountAccountIdFavoriteTvRoute,
  get3AccountAccountIdListsRoute,
  get3AccountAccountIdRatedMoviesRoute,
  get3AccountAccountIdRatedTvEpisodesRoute,
  get3AccountAccountIdRatedTvRoute,
  get3AccountAccountIdRoute,
  get3AccountAccountIdWatchlistMoviesRoute,
  get3AccountAccountIdWatchlistTvRoute,
  get3AuthenticationGuestSessionNewRoute,
  get3AuthenticationRoute,
  get3AuthenticationTokenNewRoute,
  get3CertificationMovieListRoute,
  get3CertificationTvListRoute,
  get3CollectionCollectionIdImagesRoute,
  get3CollectionCollectionIdRoute,
  get3CollectionCollectionIdTranslationsRoute,
  get3CompanyCompanyIdAlternativeNamesRoute,
  get3CompanyCompanyIdImagesRoute,
  get3CompanyCompanyIdRoute,
  get3ConfigurationCountriesRoute,
  get3ConfigurationJobsRoute,
  get3ConfigurationLanguagesRoute,
  get3ConfigurationPrimaryTranslationsRoute,
  get3ConfigurationRoute,
  get3ConfigurationTimezonesRoute,
  get3CreditCreditIdRoute,
  get3DiscoverMovieRoute,
  get3DiscoverTvRoute,
  get3FindExternalIdRoute,
  get3GenreMovieListRoute,
  get3GenreTvListRoute,
  get3GuestSessionGuestSessionIdRatedMoviesRoute,
  get3GuestSessionGuestSessionIdRatedTvEpisodesRoute,
  get3GuestSessionGuestSessionIdRatedTvRoute,
  get3KeywordKeywordIdMoviesRoute,
  get3KeywordKeywordIdRoute,
  get3ListListIdItemStatusRoute,
  get3ListListIdRoute,
  get3MovieChangesRoute,
  get3MovieLatestRoute,
  get3MovieMovieIdAccountStatesRoute,
  get3MovieMovieIdAlternativeTitlesRoute,
  get3MovieMovieIdChangesRoute,
  get3MovieMovieIdCreditsRoute,
  get3MovieMovieIdExternalIdsRoute,
  get3MovieMovieIdImagesRoute,
  get3MovieMovieIdKeywordsRoute,
  get3MovieMovieIdListsRoute,
  get3MovieMovieIdRecommendationsRoute,
  get3MovieMovieIdReleaseDatesRoute,
  get3MovieMovieIdReviewsRoute,
  get3MovieMovieIdRoute,
  get3MovieMovieIdSimilarRoute,
  get3MovieMovieIdTranslationsRoute,
  get3MovieMovieIdVideosRoute,
  get3MovieMovieIdWatchProvidersRoute,
  get3MovieNowPlayingRoute,
  get3MoviePopularRoute,
  get3MovieTopRatedRoute,
  get3MovieUpcomingRoute,
  get3NetworkNetworkIdAlternativeNamesRoute,
  get3NetworkNetworkIdImagesRoute,
  get3NetworkNetworkIdRoute,
  get3PersonChangesRoute,
  get3PersonLatestRoute,
  get3PersonPersonIdChangesRoute,
  get3PersonPersonIdCombinedCreditsRoute,
  get3PersonPersonIdExternalIdsRoute,
  get3PersonPersonIdImagesRoute,
  get3PersonPersonIdMovieCreditsRoute,
  get3PersonPersonIdRoute,
  get3PersonPersonIdTaggedImagesRoute,
  get3PersonPersonIdTranslationsRoute,
  get3PersonPersonIdTvCreditsRoute,
  get3PersonPopularRoute,
  get3ReviewReviewIdRoute,
  get3SearchCollectionRoute,
  get3SearchCompanyRoute,
  get3SearchKeywordRoute,
  get3SearchMovieRoute,
  get3SearchMultiRoute,
  get3SearchPersonRoute,
  get3SearchTvRoute,
  get3TrendingAllTimeWindowRoute,
  get3TrendingMovieTimeWindowRoute,
  get3TrendingPersonTimeWindowRoute,
  get3TrendingTvTimeWindowRoute,
  get3TvAiringTodayRoute,
  get3TvChangesRoute,
  get3TvEpisodeEpisodeIdChangesRoute,
  get3TvEpisodeGroupTvEpisodeGroupIdRoute,
  get3TvLatestRoute,
  get3TvOnTheAirRoute,
  get3TvPopularRoute,
  get3TvSeasonSeasonIdChangesRoute,
  get3TvSeriesIdAccountStatesRoute,
  get3TvSeriesIdAggregateCreditsRoute,
  get3TvSeriesIdAlternativeTitlesRoute,
  get3TvSeriesIdChangesRoute,
  get3TvSeriesIdContentRatingsRoute,
  get3TvSeriesIdCreditsRoute,
  get3TvSeriesIdEpisodeGroupsRoute,
  get3TvSeriesIdExternalIdsRoute,
  get3TvSeriesIdImagesRoute,
  get3TvSeriesIdKeywordsRoute,
  get3TvSeriesIdListsRoute,
  get3TvSeriesIdRecommendationsRoute,
  get3TvSeriesIdReviewsRoute,
  get3TvSeriesIdRoute,
  get3TvSeriesIdScreenedTheatricallyRoute,
  get3TvSeriesIdSeasonSeasonNumberAccountStatesRoute,
  get3TvSeriesIdSeasonSeasonNumberAggregateCreditsRoute,
  get3TvSeriesIdSeasonSeasonNumberCreditsRoute,
  get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesRoute,
  get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsRoute,
  get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsRoute,
  get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesRoute,
  get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRoute,
  get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsRoute,
  get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosRoute,
  get3TvSeriesIdSeasonSeasonNumberExternalIdsRoute,
  get3TvSeriesIdSeasonSeasonNumberImagesRoute,
  get3TvSeriesIdSeasonSeasonNumberRoute,
  get3TvSeriesIdSeasonSeasonNumberTranslationsRoute,
  get3TvSeriesIdSeasonSeasonNumberVideosRoute,
  get3TvSeriesIdSeasonSeasonNumberWatchProvidersRoute,
  get3TvSeriesIdSimilarRoute,
  get3TvSeriesIdTranslationsRoute,
  get3TvSeriesIdVideosRoute,
  get3TvSeriesIdWatchProvidersRoute,
  get3TvTopRatedRoute,
  get3WatchProvidersMovieRoute,
  get3WatchProvidersRegionsRoute,
  get3WatchProvidersTvRoute,
  post3AccountAccountIdFavoriteRoute,
  post3AccountAccountIdWatchlistRoute,
  post3AuthenticationSessionConvert4Route,
  post3AuthenticationSessionNewRoute,
  post3AuthenticationTokenValidateWithLoginRoute,
  post3ListListIdAddItemRoute,
  post3ListListIdClearRoute,
  post3ListListIdRemoveItemRoute,
  post3ListRoute,
  post3MovieMovieIdRatingRoute,
  post3TvSeriesIdRatingRoute,
  post3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingRoute,
} from '../routes'

export const get3AuthenticationRouteHandler: RouteHandler<typeof get3AuthenticationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3AccountAccountIdRouteHandler: RouteHandler<
  typeof get3AccountAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post3AccountAccountIdFavoriteRouteHandler: RouteHandler<
  typeof post3AccountAccountIdFavoriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post3AccountAccountIdWatchlistRouteHandler: RouteHandler<
  typeof post3AccountAccountIdWatchlistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3AccountAccountIdFavoriteMoviesRouteHandler: RouteHandler<
  typeof get3AccountAccountIdFavoriteMoviesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3AccountAccountIdFavoriteTvRouteHandler: RouteHandler<
  typeof get3AccountAccountIdFavoriteTvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3AccountAccountIdListsRouteHandler: RouteHandler<
  typeof get3AccountAccountIdListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3AccountAccountIdRatedMoviesRouteHandler: RouteHandler<
  typeof get3AccountAccountIdRatedMoviesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3AccountAccountIdRatedTvRouteHandler: RouteHandler<
  typeof get3AccountAccountIdRatedTvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3AccountAccountIdRatedTvEpisodesRouteHandler: RouteHandler<
  typeof get3AccountAccountIdRatedTvEpisodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3AccountAccountIdWatchlistMoviesRouteHandler: RouteHandler<
  typeof get3AccountAccountIdWatchlistMoviesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3AccountAccountIdWatchlistTvRouteHandler: RouteHandler<
  typeof get3AccountAccountIdWatchlistTvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3AuthenticationGuestSessionNewRouteHandler: RouteHandler<
  typeof get3AuthenticationGuestSessionNewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3AuthenticationTokenNewRouteHandler: RouteHandler<
  typeof get3AuthenticationTokenNewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post3AuthenticationSessionNewRouteHandler: RouteHandler<
  typeof post3AuthenticationSessionNewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post3AuthenticationSessionConvert4RouteHandler: RouteHandler<
  typeof post3AuthenticationSessionConvert4Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const post3AuthenticationTokenValidateWithLoginRouteHandler: RouteHandler<
  typeof post3AuthenticationTokenValidateWithLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete3AuthenticationSessionRouteHandler: RouteHandler<
  typeof delete3AuthenticationSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3CertificationMovieListRouteHandler: RouteHandler<
  typeof get3CertificationMovieListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3CertificationTvListRouteHandler: RouteHandler<
  typeof get3CertificationTvListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieChangesRouteHandler: RouteHandler<typeof get3MovieChangesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3PersonChangesRouteHandler: RouteHandler<typeof get3PersonChangesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3TvChangesRouteHandler: RouteHandler<typeof get3TvChangesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get3CollectionCollectionIdRouteHandler: RouteHandler<
  typeof get3CollectionCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3CollectionCollectionIdImagesRouteHandler: RouteHandler<
  typeof get3CollectionCollectionIdImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3CollectionCollectionIdTranslationsRouteHandler: RouteHandler<
  typeof get3CollectionCollectionIdTranslationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3CompanyCompanyIdRouteHandler: RouteHandler<
  typeof get3CompanyCompanyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3CompanyCompanyIdAlternativeNamesRouteHandler: RouteHandler<
  typeof get3CompanyCompanyIdAlternativeNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3CompanyCompanyIdImagesRouteHandler: RouteHandler<
  typeof get3CompanyCompanyIdImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3ConfigurationRouteHandler: RouteHandler<typeof get3ConfigurationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3ConfigurationCountriesRouteHandler: RouteHandler<
  typeof get3ConfigurationCountriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3ConfigurationJobsRouteHandler: RouteHandler<
  typeof get3ConfigurationJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3ConfigurationLanguagesRouteHandler: RouteHandler<
  typeof get3ConfigurationLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3ConfigurationPrimaryTranslationsRouteHandler: RouteHandler<
  typeof get3ConfigurationPrimaryTranslationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3ConfigurationTimezonesRouteHandler: RouteHandler<
  typeof get3ConfigurationTimezonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3CreditCreditIdRouteHandler: RouteHandler<typeof get3CreditCreditIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3DiscoverMovieRouteHandler: RouteHandler<typeof get3DiscoverMovieRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3DiscoverTvRouteHandler: RouteHandler<typeof get3DiscoverTvRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get3FindExternalIdRouteHandler: RouteHandler<typeof get3FindExternalIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3GenreMovieListRouteHandler: RouteHandler<typeof get3GenreMovieListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3GenreTvListRouteHandler: RouteHandler<typeof get3GenreTvListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get3GuestSessionGuestSessionIdRatedMoviesRouteHandler: RouteHandler<
  typeof get3GuestSessionGuestSessionIdRatedMoviesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3GuestSessionGuestSessionIdRatedTvRouteHandler: RouteHandler<
  typeof get3GuestSessionGuestSessionIdRatedTvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3GuestSessionGuestSessionIdRatedTvEpisodesRouteHandler: RouteHandler<
  typeof get3GuestSessionGuestSessionIdRatedTvEpisodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3KeywordKeywordIdRouteHandler: RouteHandler<
  typeof get3KeywordKeywordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3KeywordKeywordIdMoviesRouteHandler: RouteHandler<
  typeof get3KeywordKeywordIdMoviesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post3ListListIdAddItemRouteHandler: RouteHandler<
  typeof post3ListListIdAddItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3ListListIdItemStatusRouteHandler: RouteHandler<
  typeof get3ListListIdItemStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post3ListListIdClearRouteHandler: RouteHandler<
  typeof post3ListListIdClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post3ListRouteHandler: RouteHandler<typeof post3ListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const delete3ListListIdRouteHandler: RouteHandler<typeof delete3ListListIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3ListListIdRouteHandler: RouteHandler<typeof get3ListListIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const post3ListListIdRemoveItemRouteHandler: RouteHandler<
  typeof post3ListListIdRemoveItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieNowPlayingRouteHandler: RouteHandler<
  typeof get3MovieNowPlayingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MoviePopularRouteHandler: RouteHandler<typeof get3MoviePopularRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3MovieTopRatedRouteHandler: RouteHandler<typeof get3MovieTopRatedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3MovieUpcomingRouteHandler: RouteHandler<typeof get3MovieUpcomingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdRouteHandler: RouteHandler<typeof get3MovieMovieIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdAccountStatesRouteHandler: RouteHandler<
  typeof get3MovieMovieIdAccountStatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdAlternativeTitlesRouteHandler: RouteHandler<
  typeof get3MovieMovieIdAlternativeTitlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdChangesRouteHandler: RouteHandler<
  typeof get3MovieMovieIdChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdCreditsRouteHandler: RouteHandler<
  typeof get3MovieMovieIdCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdExternalIdsRouteHandler: RouteHandler<
  typeof get3MovieMovieIdExternalIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdImagesRouteHandler: RouteHandler<
  typeof get3MovieMovieIdImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdKeywordsRouteHandler: RouteHandler<
  typeof get3MovieMovieIdKeywordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieLatestRouteHandler: RouteHandler<typeof get3MovieLatestRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdListsRouteHandler: RouteHandler<
  typeof get3MovieMovieIdListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdRecommendationsRouteHandler: RouteHandler<
  typeof get3MovieMovieIdRecommendationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdReleaseDatesRouteHandler: RouteHandler<
  typeof get3MovieMovieIdReleaseDatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdReviewsRouteHandler: RouteHandler<
  typeof get3MovieMovieIdReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdSimilarRouteHandler: RouteHandler<
  typeof get3MovieMovieIdSimilarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdTranslationsRouteHandler: RouteHandler<
  typeof get3MovieMovieIdTranslationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdVideosRouteHandler: RouteHandler<
  typeof get3MovieMovieIdVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3MovieMovieIdWatchProvidersRouteHandler: RouteHandler<
  typeof get3MovieMovieIdWatchProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post3MovieMovieIdRatingRouteHandler: RouteHandler<
  typeof post3MovieMovieIdRatingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete3MovieMovieIdRatingRouteHandler: RouteHandler<
  typeof delete3MovieMovieIdRatingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3NetworkNetworkIdRouteHandler: RouteHandler<
  typeof get3NetworkNetworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3NetworkNetworkIdAlternativeNamesRouteHandler: RouteHandler<
  typeof get3NetworkNetworkIdAlternativeNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3NetworkNetworkIdImagesRouteHandler: RouteHandler<
  typeof get3NetworkNetworkIdImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3PersonPopularRouteHandler: RouteHandler<typeof get3PersonPopularRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3PersonPersonIdRouteHandler: RouteHandler<typeof get3PersonPersonIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3PersonPersonIdChangesRouteHandler: RouteHandler<
  typeof get3PersonPersonIdChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3PersonPersonIdCombinedCreditsRouteHandler: RouteHandler<
  typeof get3PersonPersonIdCombinedCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3PersonPersonIdExternalIdsRouteHandler: RouteHandler<
  typeof get3PersonPersonIdExternalIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3PersonPersonIdImagesRouteHandler: RouteHandler<
  typeof get3PersonPersonIdImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3PersonLatestRouteHandler: RouteHandler<typeof get3PersonLatestRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3PersonPersonIdMovieCreditsRouteHandler: RouteHandler<
  typeof get3PersonPersonIdMovieCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3PersonPersonIdTvCreditsRouteHandler: RouteHandler<
  typeof get3PersonPersonIdTvCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3PersonPersonIdTaggedImagesRouteHandler: RouteHandler<
  typeof get3PersonPersonIdTaggedImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3PersonPersonIdTranslationsRouteHandler: RouteHandler<
  typeof get3PersonPersonIdTranslationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3ReviewReviewIdRouteHandler: RouteHandler<typeof get3ReviewReviewIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3SearchCollectionRouteHandler: RouteHandler<
  typeof get3SearchCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3SearchCompanyRouteHandler: RouteHandler<typeof get3SearchCompanyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3SearchKeywordRouteHandler: RouteHandler<typeof get3SearchKeywordRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3SearchMovieRouteHandler: RouteHandler<typeof get3SearchMovieRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get3SearchMultiRouteHandler: RouteHandler<typeof get3SearchMultiRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get3SearchPersonRouteHandler: RouteHandler<typeof get3SearchPersonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3SearchTvRouteHandler: RouteHandler<typeof get3SearchTvRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TrendingAllTimeWindowRouteHandler: RouteHandler<
  typeof get3TrendingAllTimeWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TrendingMovieTimeWindowRouteHandler: RouteHandler<
  typeof get3TrendingMovieTimeWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TrendingPersonTimeWindowRouteHandler: RouteHandler<
  typeof get3TrendingPersonTimeWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TrendingTvTimeWindowRouteHandler: RouteHandler<
  typeof get3TrendingTvTimeWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvAiringTodayRouteHandler: RouteHandler<typeof get3TvAiringTodayRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get3TvOnTheAirRouteHandler: RouteHandler<typeof get3TvOnTheAirRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvPopularRouteHandler: RouteHandler<typeof get3TvPopularRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvTopRatedRouteHandler: RouteHandler<typeof get3TvTopRatedRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdRouteHandler: RouteHandler<typeof get3TvSeriesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdAccountStatesRouteHandler: RouteHandler<
  typeof get3TvSeriesIdAccountStatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdAggregateCreditsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdAggregateCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdAlternativeTitlesRouteHandler: RouteHandler<
  typeof get3TvSeriesIdAlternativeTitlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdChangesRouteHandler: RouteHandler<
  typeof get3TvSeriesIdChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdContentRatingsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdContentRatingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdCreditsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdEpisodeGroupsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdEpisodeGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdExternalIdsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdExternalIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdImagesRouteHandler: RouteHandler<
  typeof get3TvSeriesIdImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdKeywordsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdKeywordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvLatestRouteHandler: RouteHandler<typeof get3TvLatestRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdListsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdRecommendationsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdRecommendationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdReviewsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdScreenedTheatricallyRouteHandler: RouteHandler<
  typeof get3TvSeriesIdScreenedTheatricallyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSimilarRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSimilarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdTranslationsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdTranslationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdVideosRouteHandler: RouteHandler<
  typeof get3TvSeriesIdVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdWatchProvidersRouteHandler: RouteHandler<
  typeof get3TvSeriesIdWatchProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post3TvSeriesIdRatingRouteHandler: RouteHandler<
  typeof post3TvSeriesIdRatingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete3TvSeriesIdRatingRouteHandler: RouteHandler<
  typeof delete3TvSeriesIdRatingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberAccountStatesRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberAccountStatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberAggregateCreditsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberAggregateCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeasonSeasonIdChangesRouteHandler: RouteHandler<
  typeof get3TvSeasonSeasonIdChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberCreditsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberExternalIdsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberExternalIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberImagesRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberTranslationsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberTranslationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberVideosRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberWatchProvidersRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberWatchProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvEpisodeEpisodeIdChangesRouteHandler: RouteHandler<
  typeof get3TvEpisodeEpisodeIdChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosRouteHandler: RouteHandler<
  typeof get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingRouteHandler: RouteHandler<
  typeof post3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingRouteHandler: RouteHandler<
  typeof delete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3TvEpisodeGroupTvEpisodeGroupIdRouteHandler: RouteHandler<
  typeof get3TvEpisodeGroupTvEpisodeGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3WatchProvidersRegionsRouteHandler: RouteHandler<
  typeof get3WatchProvidersRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3WatchProvidersMovieRouteHandler: RouteHandler<
  typeof get3WatchProvidersMovieRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get3WatchProvidersTvRouteHandler: RouteHandler<
  typeof get3WatchProvidersTvRoute
> = async (c) => {
  throw new Error('Not implemented')
}
