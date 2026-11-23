import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from './routes'
import {
  delete3AuthenticationSessionRouteHandler,
  delete3ListListIdRouteHandler,
  delete3MovieMovieIdRatingRouteHandler,
  delete3TvSeriesIdRatingRouteHandler,
  delete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingRouteHandler,
  get3AccountAccountIdFavoriteMoviesRouteHandler,
  get3AccountAccountIdFavoriteTvRouteHandler,
  get3AccountAccountIdListsRouteHandler,
  get3AccountAccountIdRatedMoviesRouteHandler,
  get3AccountAccountIdRatedTvEpisodesRouteHandler,
  get3AccountAccountIdRatedTvRouteHandler,
  get3AccountAccountIdRouteHandler,
  get3AccountAccountIdWatchlistMoviesRouteHandler,
  get3AccountAccountIdWatchlistTvRouteHandler,
  get3AuthenticationGuestSessionNewRouteHandler,
  get3AuthenticationRouteHandler,
  get3AuthenticationTokenNewRouteHandler,
  get3CertificationMovieListRouteHandler,
  get3CertificationTvListRouteHandler,
  get3CollectionCollectionIdImagesRouteHandler,
  get3CollectionCollectionIdRouteHandler,
  get3CollectionCollectionIdTranslationsRouteHandler,
  get3CompanyCompanyIdAlternativeNamesRouteHandler,
  get3CompanyCompanyIdImagesRouteHandler,
  get3CompanyCompanyIdRouteHandler,
  get3ConfigurationCountriesRouteHandler,
  get3ConfigurationJobsRouteHandler,
  get3ConfigurationLanguagesRouteHandler,
  get3ConfigurationPrimaryTranslationsRouteHandler,
  get3ConfigurationRouteHandler,
  get3ConfigurationTimezonesRouteHandler,
  get3CreditCreditIdRouteHandler,
  get3DiscoverMovieRouteHandler,
  get3DiscoverTvRouteHandler,
  get3FindExternalIdRouteHandler,
  get3GenreMovieListRouteHandler,
  get3GenreTvListRouteHandler,
  get3GuestSessionGuestSessionIdRatedMoviesRouteHandler,
  get3GuestSessionGuestSessionIdRatedTvEpisodesRouteHandler,
  get3GuestSessionGuestSessionIdRatedTvRouteHandler,
  get3KeywordKeywordIdMoviesRouteHandler,
  get3KeywordKeywordIdRouteHandler,
  get3ListListIdItemStatusRouteHandler,
  get3ListListIdRouteHandler,
  get3MovieChangesRouteHandler,
  get3MovieLatestRouteHandler,
  get3MovieMovieIdAccountStatesRouteHandler,
  get3MovieMovieIdAlternativeTitlesRouteHandler,
  get3MovieMovieIdChangesRouteHandler,
  get3MovieMovieIdCreditsRouteHandler,
  get3MovieMovieIdExternalIdsRouteHandler,
  get3MovieMovieIdImagesRouteHandler,
  get3MovieMovieIdKeywordsRouteHandler,
  get3MovieMovieIdListsRouteHandler,
  get3MovieMovieIdRecommendationsRouteHandler,
  get3MovieMovieIdReleaseDatesRouteHandler,
  get3MovieMovieIdReviewsRouteHandler,
  get3MovieMovieIdRouteHandler,
  get3MovieMovieIdSimilarRouteHandler,
  get3MovieMovieIdTranslationsRouteHandler,
  get3MovieMovieIdVideosRouteHandler,
  get3MovieMovieIdWatchProvidersRouteHandler,
  get3MovieNowPlayingRouteHandler,
  get3MoviePopularRouteHandler,
  get3MovieTopRatedRouteHandler,
  get3MovieUpcomingRouteHandler,
  get3NetworkNetworkIdAlternativeNamesRouteHandler,
  get3NetworkNetworkIdImagesRouteHandler,
  get3NetworkNetworkIdRouteHandler,
  get3PersonChangesRouteHandler,
  get3PersonLatestRouteHandler,
  get3PersonPersonIdChangesRouteHandler,
  get3PersonPersonIdCombinedCreditsRouteHandler,
  get3PersonPersonIdExternalIdsRouteHandler,
  get3PersonPersonIdImagesRouteHandler,
  get3PersonPersonIdMovieCreditsRouteHandler,
  get3PersonPersonIdRouteHandler,
  get3PersonPersonIdTaggedImagesRouteHandler,
  get3PersonPersonIdTranslationsRouteHandler,
  get3PersonPersonIdTvCreditsRouteHandler,
  get3PersonPopularRouteHandler,
  get3ReviewReviewIdRouteHandler,
  get3SearchCollectionRouteHandler,
  get3SearchCompanyRouteHandler,
  get3SearchKeywordRouteHandler,
  get3SearchMovieRouteHandler,
  get3SearchMultiRouteHandler,
  get3SearchPersonRouteHandler,
  get3SearchTvRouteHandler,
  get3TrendingAllTimeWindowRouteHandler,
  get3TrendingMovieTimeWindowRouteHandler,
  get3TrendingPersonTimeWindowRouteHandler,
  get3TrendingTvTimeWindowRouteHandler,
  get3TvAiringTodayRouteHandler,
  get3TvChangesRouteHandler,
  get3TvEpisodeEpisodeIdChangesRouteHandler,
  get3TvEpisodeGroupTvEpisodeGroupIdRouteHandler,
  get3TvLatestRouteHandler,
  get3TvOnTheAirRouteHandler,
  get3TvPopularRouteHandler,
  get3TvSeasonSeasonIdChangesRouteHandler,
  get3TvSeriesIdAccountStatesRouteHandler,
  get3TvSeriesIdAggregateCreditsRouteHandler,
  get3TvSeriesIdAlternativeTitlesRouteHandler,
  get3TvSeriesIdChangesRouteHandler,
  get3TvSeriesIdContentRatingsRouteHandler,
  get3TvSeriesIdCreditsRouteHandler,
  get3TvSeriesIdEpisodeGroupsRouteHandler,
  get3TvSeriesIdExternalIdsRouteHandler,
  get3TvSeriesIdImagesRouteHandler,
  get3TvSeriesIdKeywordsRouteHandler,
  get3TvSeriesIdListsRouteHandler,
  get3TvSeriesIdRecommendationsRouteHandler,
  get3TvSeriesIdReviewsRouteHandler,
  get3TvSeriesIdRouteHandler,
  get3TvSeriesIdScreenedTheatricallyRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberAccountStatesRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberAggregateCreditsRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberCreditsRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberExternalIdsRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberImagesRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberTranslationsRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberVideosRouteHandler,
  get3TvSeriesIdSeasonSeasonNumberWatchProvidersRouteHandler,
  get3TvSeriesIdSimilarRouteHandler,
  get3TvSeriesIdTranslationsRouteHandler,
  get3TvSeriesIdVideosRouteHandler,
  get3TvSeriesIdWatchProvidersRouteHandler,
  get3TvTopRatedRouteHandler,
  get3WatchProvidersMovieRouteHandler,
  get3WatchProvidersRegionsRouteHandler,
  get3WatchProvidersTvRouteHandler,
  post3AccountAccountIdFavoriteRouteHandler,
  post3AccountAccountIdWatchlistRouteHandler,
  post3AuthenticationSessionConvert4RouteHandler,
  post3AuthenticationSessionNewRouteHandler,
  post3AuthenticationTokenValidateWithLoginRouteHandler,
  post3ListListIdAddItemRouteHandler,
  post3ListListIdClearRouteHandler,
  post3ListListIdRemoveItemRouteHandler,
  post3ListRouteHandler,
  post3MovieMovieIdRatingRouteHandler,
  post3TvSeriesIdRatingRouteHandler,
  post3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(get3AuthenticationRoute, get3AuthenticationRouteHandler)
  .openapi(get3AccountAccountIdRoute, get3AccountAccountIdRouteHandler)
  .openapi(post3AccountAccountIdFavoriteRoute, post3AccountAccountIdFavoriteRouteHandler)
  .openapi(post3AccountAccountIdWatchlistRoute, post3AccountAccountIdWatchlistRouteHandler)
  .openapi(get3AccountAccountIdFavoriteMoviesRoute, get3AccountAccountIdFavoriteMoviesRouteHandler)
  .openapi(get3AccountAccountIdFavoriteTvRoute, get3AccountAccountIdFavoriteTvRouteHandler)
  .openapi(get3AccountAccountIdListsRoute, get3AccountAccountIdListsRouteHandler)
  .openapi(get3AccountAccountIdRatedMoviesRoute, get3AccountAccountIdRatedMoviesRouteHandler)
  .openapi(get3AccountAccountIdRatedTvRoute, get3AccountAccountIdRatedTvRouteHandler)
  .openapi(
    get3AccountAccountIdRatedTvEpisodesRoute,
    get3AccountAccountIdRatedTvEpisodesRouteHandler,
  )
  .openapi(
    get3AccountAccountIdWatchlistMoviesRoute,
    get3AccountAccountIdWatchlistMoviesRouteHandler,
  )
  .openapi(get3AccountAccountIdWatchlistTvRoute, get3AccountAccountIdWatchlistTvRouteHandler)
  .openapi(get3AuthenticationGuestSessionNewRoute, get3AuthenticationGuestSessionNewRouteHandler)
  .openapi(get3AuthenticationTokenNewRoute, get3AuthenticationTokenNewRouteHandler)
  .openapi(post3AuthenticationSessionNewRoute, post3AuthenticationSessionNewRouteHandler)
  .openapi(post3AuthenticationSessionConvert4Route, post3AuthenticationSessionConvert4RouteHandler)
  .openapi(
    post3AuthenticationTokenValidateWithLoginRoute,
    post3AuthenticationTokenValidateWithLoginRouteHandler,
  )
  .openapi(delete3AuthenticationSessionRoute, delete3AuthenticationSessionRouteHandler)
  .openapi(get3CertificationMovieListRoute, get3CertificationMovieListRouteHandler)
  .openapi(get3CertificationTvListRoute, get3CertificationTvListRouteHandler)
  .openapi(get3MovieChangesRoute, get3MovieChangesRouteHandler)
  .openapi(get3PersonChangesRoute, get3PersonChangesRouteHandler)
  .openapi(get3TvChangesRoute, get3TvChangesRouteHandler)
  .openapi(get3CollectionCollectionIdRoute, get3CollectionCollectionIdRouteHandler)
  .openapi(get3CollectionCollectionIdImagesRoute, get3CollectionCollectionIdImagesRouteHandler)
  .openapi(
    get3CollectionCollectionIdTranslationsRoute,
    get3CollectionCollectionIdTranslationsRouteHandler,
  )
  .openapi(get3CompanyCompanyIdRoute, get3CompanyCompanyIdRouteHandler)
  .openapi(
    get3CompanyCompanyIdAlternativeNamesRoute,
    get3CompanyCompanyIdAlternativeNamesRouteHandler,
  )
  .openapi(get3CompanyCompanyIdImagesRoute, get3CompanyCompanyIdImagesRouteHandler)
  .openapi(get3ConfigurationRoute, get3ConfigurationRouteHandler)
  .openapi(get3ConfigurationCountriesRoute, get3ConfigurationCountriesRouteHandler)
  .openapi(get3ConfigurationJobsRoute, get3ConfigurationJobsRouteHandler)
  .openapi(get3ConfigurationLanguagesRoute, get3ConfigurationLanguagesRouteHandler)
  .openapi(
    get3ConfigurationPrimaryTranslationsRoute,
    get3ConfigurationPrimaryTranslationsRouteHandler,
  )
  .openapi(get3ConfigurationTimezonesRoute, get3ConfigurationTimezonesRouteHandler)
  .openapi(get3CreditCreditIdRoute, get3CreditCreditIdRouteHandler)
  .openapi(get3DiscoverMovieRoute, get3DiscoverMovieRouteHandler)
  .openapi(get3DiscoverTvRoute, get3DiscoverTvRouteHandler)
  .openapi(get3FindExternalIdRoute, get3FindExternalIdRouteHandler)
  .openapi(get3GenreMovieListRoute, get3GenreMovieListRouteHandler)
  .openapi(get3GenreTvListRoute, get3GenreTvListRouteHandler)
  .openapi(
    get3GuestSessionGuestSessionIdRatedMoviesRoute,
    get3GuestSessionGuestSessionIdRatedMoviesRouteHandler,
  )
  .openapi(
    get3GuestSessionGuestSessionIdRatedTvRoute,
    get3GuestSessionGuestSessionIdRatedTvRouteHandler,
  )
  .openapi(
    get3GuestSessionGuestSessionIdRatedTvEpisodesRoute,
    get3GuestSessionGuestSessionIdRatedTvEpisodesRouteHandler,
  )
  .openapi(get3KeywordKeywordIdRoute, get3KeywordKeywordIdRouteHandler)
  .openapi(get3KeywordKeywordIdMoviesRoute, get3KeywordKeywordIdMoviesRouteHandler)
  .openapi(post3ListListIdAddItemRoute, post3ListListIdAddItemRouteHandler)
  .openapi(get3ListListIdItemStatusRoute, get3ListListIdItemStatusRouteHandler)
  .openapi(post3ListListIdClearRoute, post3ListListIdClearRouteHandler)
  .openapi(post3ListRoute, post3ListRouteHandler)
  .openapi(delete3ListListIdRoute, delete3ListListIdRouteHandler)
  .openapi(get3ListListIdRoute, get3ListListIdRouteHandler)
  .openapi(post3ListListIdRemoveItemRoute, post3ListListIdRemoveItemRouteHandler)
  .openapi(get3MovieNowPlayingRoute, get3MovieNowPlayingRouteHandler)
  .openapi(get3MoviePopularRoute, get3MoviePopularRouteHandler)
  .openapi(get3MovieTopRatedRoute, get3MovieTopRatedRouteHandler)
  .openapi(get3MovieUpcomingRoute, get3MovieUpcomingRouteHandler)
  .openapi(get3MovieMovieIdRoute, get3MovieMovieIdRouteHandler)
  .openapi(get3MovieMovieIdAccountStatesRoute, get3MovieMovieIdAccountStatesRouteHandler)
  .openapi(get3MovieMovieIdAlternativeTitlesRoute, get3MovieMovieIdAlternativeTitlesRouteHandler)
  .openapi(get3MovieMovieIdChangesRoute, get3MovieMovieIdChangesRouteHandler)
  .openapi(get3MovieMovieIdCreditsRoute, get3MovieMovieIdCreditsRouteHandler)
  .openapi(get3MovieMovieIdExternalIdsRoute, get3MovieMovieIdExternalIdsRouteHandler)
  .openapi(get3MovieMovieIdImagesRoute, get3MovieMovieIdImagesRouteHandler)
  .openapi(get3MovieMovieIdKeywordsRoute, get3MovieMovieIdKeywordsRouteHandler)
  .openapi(get3MovieLatestRoute, get3MovieLatestRouteHandler)
  .openapi(get3MovieMovieIdListsRoute, get3MovieMovieIdListsRouteHandler)
  .openapi(get3MovieMovieIdRecommendationsRoute, get3MovieMovieIdRecommendationsRouteHandler)
  .openapi(get3MovieMovieIdReleaseDatesRoute, get3MovieMovieIdReleaseDatesRouteHandler)
  .openapi(get3MovieMovieIdReviewsRoute, get3MovieMovieIdReviewsRouteHandler)
  .openapi(get3MovieMovieIdSimilarRoute, get3MovieMovieIdSimilarRouteHandler)
  .openapi(get3MovieMovieIdTranslationsRoute, get3MovieMovieIdTranslationsRouteHandler)
  .openapi(get3MovieMovieIdVideosRoute, get3MovieMovieIdVideosRouteHandler)
  .openapi(get3MovieMovieIdWatchProvidersRoute, get3MovieMovieIdWatchProvidersRouteHandler)
  .openapi(post3MovieMovieIdRatingRoute, post3MovieMovieIdRatingRouteHandler)
  .openapi(delete3MovieMovieIdRatingRoute, delete3MovieMovieIdRatingRouteHandler)
  .openapi(get3NetworkNetworkIdRoute, get3NetworkNetworkIdRouteHandler)
  .openapi(
    get3NetworkNetworkIdAlternativeNamesRoute,
    get3NetworkNetworkIdAlternativeNamesRouteHandler,
  )
  .openapi(get3NetworkNetworkIdImagesRoute, get3NetworkNetworkIdImagesRouteHandler)
  .openapi(get3PersonPopularRoute, get3PersonPopularRouteHandler)
  .openapi(get3PersonPersonIdRoute, get3PersonPersonIdRouteHandler)
  .openapi(get3PersonPersonIdChangesRoute, get3PersonPersonIdChangesRouteHandler)
  .openapi(get3PersonPersonIdCombinedCreditsRoute, get3PersonPersonIdCombinedCreditsRouteHandler)
  .openapi(get3PersonPersonIdExternalIdsRoute, get3PersonPersonIdExternalIdsRouteHandler)
  .openapi(get3PersonPersonIdImagesRoute, get3PersonPersonIdImagesRouteHandler)
  .openapi(get3PersonLatestRoute, get3PersonLatestRouteHandler)
  .openapi(get3PersonPersonIdMovieCreditsRoute, get3PersonPersonIdMovieCreditsRouteHandler)
  .openapi(get3PersonPersonIdTvCreditsRoute, get3PersonPersonIdTvCreditsRouteHandler)
  .openapi(get3PersonPersonIdTaggedImagesRoute, get3PersonPersonIdTaggedImagesRouteHandler)
  .openapi(get3PersonPersonIdTranslationsRoute, get3PersonPersonIdTranslationsRouteHandler)
  .openapi(get3ReviewReviewIdRoute, get3ReviewReviewIdRouteHandler)
  .openapi(get3SearchCollectionRoute, get3SearchCollectionRouteHandler)
  .openapi(get3SearchCompanyRoute, get3SearchCompanyRouteHandler)
  .openapi(get3SearchKeywordRoute, get3SearchKeywordRouteHandler)
  .openapi(get3SearchMovieRoute, get3SearchMovieRouteHandler)
  .openapi(get3SearchMultiRoute, get3SearchMultiRouteHandler)
  .openapi(get3SearchPersonRoute, get3SearchPersonRouteHandler)
  .openapi(get3SearchTvRoute, get3SearchTvRouteHandler)
  .openapi(get3TrendingAllTimeWindowRoute, get3TrendingAllTimeWindowRouteHandler)
  .openapi(get3TrendingMovieTimeWindowRoute, get3TrendingMovieTimeWindowRouteHandler)
  .openapi(get3TrendingPersonTimeWindowRoute, get3TrendingPersonTimeWindowRouteHandler)
  .openapi(get3TrendingTvTimeWindowRoute, get3TrendingTvTimeWindowRouteHandler)
  .openapi(get3TvAiringTodayRoute, get3TvAiringTodayRouteHandler)
  .openapi(get3TvOnTheAirRoute, get3TvOnTheAirRouteHandler)
  .openapi(get3TvPopularRoute, get3TvPopularRouteHandler)
  .openapi(get3TvTopRatedRoute, get3TvTopRatedRouteHandler)
  .openapi(get3TvSeriesIdRoute, get3TvSeriesIdRouteHandler)
  .openapi(get3TvSeriesIdAccountStatesRoute, get3TvSeriesIdAccountStatesRouteHandler)
  .openapi(get3TvSeriesIdAggregateCreditsRoute, get3TvSeriesIdAggregateCreditsRouteHandler)
  .openapi(get3TvSeriesIdAlternativeTitlesRoute, get3TvSeriesIdAlternativeTitlesRouteHandler)
  .openapi(get3TvSeriesIdChangesRoute, get3TvSeriesIdChangesRouteHandler)
  .openapi(get3TvSeriesIdContentRatingsRoute, get3TvSeriesIdContentRatingsRouteHandler)
  .openapi(get3TvSeriesIdCreditsRoute, get3TvSeriesIdCreditsRouteHandler)
  .openapi(get3TvSeriesIdEpisodeGroupsRoute, get3TvSeriesIdEpisodeGroupsRouteHandler)
  .openapi(get3TvSeriesIdExternalIdsRoute, get3TvSeriesIdExternalIdsRouteHandler)
  .openapi(get3TvSeriesIdImagesRoute, get3TvSeriesIdImagesRouteHandler)
  .openapi(get3TvSeriesIdKeywordsRoute, get3TvSeriesIdKeywordsRouteHandler)
  .openapi(get3TvLatestRoute, get3TvLatestRouteHandler)
  .openapi(get3TvSeriesIdListsRoute, get3TvSeriesIdListsRouteHandler)
  .openapi(get3TvSeriesIdRecommendationsRoute, get3TvSeriesIdRecommendationsRouteHandler)
  .openapi(get3TvSeriesIdReviewsRoute, get3TvSeriesIdReviewsRouteHandler)
  .openapi(get3TvSeriesIdScreenedTheatricallyRoute, get3TvSeriesIdScreenedTheatricallyRouteHandler)
  .openapi(get3TvSeriesIdSimilarRoute, get3TvSeriesIdSimilarRouteHandler)
  .openapi(get3TvSeriesIdTranslationsRoute, get3TvSeriesIdTranslationsRouteHandler)
  .openapi(get3TvSeriesIdVideosRoute, get3TvSeriesIdVideosRouteHandler)
  .openapi(get3TvSeriesIdWatchProvidersRoute, get3TvSeriesIdWatchProvidersRouteHandler)
  .openapi(post3TvSeriesIdRatingRoute, post3TvSeriesIdRatingRouteHandler)
  .openapi(delete3TvSeriesIdRatingRoute, delete3TvSeriesIdRatingRouteHandler)
  .openapi(get3TvSeriesIdSeasonSeasonNumberRoute, get3TvSeriesIdSeasonSeasonNumberRouteHandler)
  .openapi(
    get3TvSeriesIdSeasonSeasonNumberAccountStatesRoute,
    get3TvSeriesIdSeasonSeasonNumberAccountStatesRouteHandler,
  )
  .openapi(
    get3TvSeriesIdSeasonSeasonNumberAggregateCreditsRoute,
    get3TvSeriesIdSeasonSeasonNumberAggregateCreditsRouteHandler,
  )
  .openapi(get3TvSeasonSeasonIdChangesRoute, get3TvSeasonSeasonIdChangesRouteHandler)
  .openapi(
    get3TvSeriesIdSeasonSeasonNumberCreditsRoute,
    get3TvSeriesIdSeasonSeasonNumberCreditsRouteHandler,
  )
  .openapi(
    get3TvSeriesIdSeasonSeasonNumberExternalIdsRoute,
    get3TvSeriesIdSeasonSeasonNumberExternalIdsRouteHandler,
  )
  .openapi(
    get3TvSeriesIdSeasonSeasonNumberImagesRoute,
    get3TvSeriesIdSeasonSeasonNumberImagesRouteHandler,
  )
  .openapi(
    get3TvSeriesIdSeasonSeasonNumberTranslationsRoute,
    get3TvSeriesIdSeasonSeasonNumberTranslationsRouteHandler,
  )
  .openapi(
    get3TvSeriesIdSeasonSeasonNumberVideosRoute,
    get3TvSeriesIdSeasonSeasonNumberVideosRouteHandler,
  )
  .openapi(
    get3TvSeriesIdSeasonSeasonNumberWatchProvidersRoute,
    get3TvSeriesIdSeasonSeasonNumberWatchProvidersRouteHandler,
  )
  .openapi(
    get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRoute,
    get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRouteHandler,
  )
  .openapi(
    get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesRoute,
    get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStatesRouteHandler,
  )
  .openapi(get3TvEpisodeEpisodeIdChangesRoute, get3TvEpisodeEpisodeIdChangesRouteHandler)
  .openapi(
    get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsRoute,
    get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCreditsRouteHandler,
  )
  .openapi(
    get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsRoute,
    get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIdsRouteHandler,
  )
  .openapi(
    get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesRoute,
    get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImagesRouteHandler,
  )
  .openapi(
    get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsRoute,
    get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslationsRouteHandler,
  )
  .openapi(
    get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosRoute,
    get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideosRouteHandler,
  )
  .openapi(
    post3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingRoute,
    post3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingRouteHandler,
  )
  .openapi(
    delete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingRoute,
    delete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRatingRouteHandler,
  )
  .openapi(get3TvEpisodeGroupTvEpisodeGroupIdRoute, get3TvEpisodeGroupTvEpisodeGroupIdRouteHandler)
  .openapi(get3WatchProvidersRegionsRoute, get3WatchProvidersRegionsRouteHandler)
  .openapi(get3WatchProvidersMovieRoute, get3WatchProvidersMovieRouteHandler)
  .openapi(get3WatchProvidersTvRoute, get3WatchProvidersTvRouteHandler)

export default app
