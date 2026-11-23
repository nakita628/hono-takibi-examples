import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get3Authentication(options?: ClientRequestOptions) {
  return await parseResponse(client['3'].authentication.$get(undefined, options))
}

export async function get3AccountAccountId(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].account[':account_id'].$get(args, options))
}

export async function post3AccountAccountIdFavorite(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].account[':account_id'].favorite.$post(args, options))
}

export async function post3AccountAccountIdWatchlist(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].account[':account_id'].watchlist.$post(args, options))
}

export async function get3AccountAccountIdFavoriteMovies(
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['favorite']['movies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].account[':account_id'].favorite.movies.$get(args, options))
}

export async function get3AccountAccountIdFavoriteTv(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['favorite']['tv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].account[':account_id'].favorite.tv.$get(args, options))
}

export async function get3AccountAccountIdLists(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].account[':account_id'].lists.$get(args, options))
}

export async function get3AccountAccountIdRatedMovies(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['movies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].account[':account_id'].rated.movies.$get(args, options))
}

export async function get3AccountAccountIdRatedTv(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['rated']['tv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].account[':account_id'].rated.tv.$get(args, options))
}

export async function get3AccountAccountIdRatedTvEpisodes(
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['rated']['tv']['episodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].account[':account_id'].rated.tv.episodes.$get(args, options),
  )
}

export async function get3AccountAccountIdWatchlistMovies(
  args: InferRequestType<
    (typeof client)['3']['account'][':account_id']['watchlist']['movies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].account[':account_id'].watchlist.movies.$get(args, options),
  )
}

export async function get3AccountAccountIdWatchlistTv(
  args: InferRequestType<(typeof client)['3']['account'][':account_id']['watchlist']['tv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].account[':account_id'].watchlist.tv.$get(args, options))
}

export async function get3AuthenticationGuestSessionNew(options?: ClientRequestOptions) {
  return await parseResponse(client['3'].authentication.guest_session.new.$get(undefined, options))
}

export async function get3AuthenticationTokenNew(options?: ClientRequestOptions) {
  return await parseResponse(client['3'].authentication.token.new.$get(undefined, options))
}

export async function post3AuthenticationSessionNew(
  args: InferRequestType<(typeof client)['3']['authentication']['session']['new']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].authentication.session.new.$post(args, options))
}

export async function post3AuthenticationSessionConvert4(
  args: InferRequestType<
    (typeof client)['3']['authentication']['session']['convert']['4']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].authentication.session.convert['4'].$post(args, options))
}

export async function post3AuthenticationTokenValidateWithLogin(
  args: InferRequestType<
    (typeof client)['3']['authentication']['token']['validate_with_login']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].authentication.token.validate_with_login.$post(args, options),
  )
}

export async function delete3AuthenticationSession(
  args: InferRequestType<(typeof client)['3']['authentication']['session']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].authentication.session.$delete(args, options))
}

export async function get3CertificationMovieList(options?: ClientRequestOptions) {
  return await parseResponse(client['3'].certification.movie.list.$get(undefined, options))
}

export async function get3CertificationTvList(options?: ClientRequestOptions) {
  return await parseResponse(client['3'].certification.tv.list.$get(undefined, options))
}

export async function get3MovieChanges(
  args: InferRequestType<(typeof client)['3']['movie']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie.changes.$get(args, options))
}

export async function get3PersonChanges(
  args: InferRequestType<(typeof client)['3']['person']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].person.changes.$get(args, options))
}

export async function get3TvChanges(
  args: InferRequestType<(typeof client)['3']['tv']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv.changes.$get(args, options))
}

export async function get3CollectionCollectionId(
  args: InferRequestType<(typeof client)['3']['collection'][':collection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].collection[':collection_id'].$get(args, options))
}

export async function get3CollectionCollectionIdImages(
  args: InferRequestType<(typeof client)['3']['collection'][':collection_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].collection[':collection_id'].images.$get(args, options))
}

export async function get3CollectionCollectionIdTranslations(
  args: InferRequestType<
    (typeof client)['3']['collection'][':collection_id']['translations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].collection[':collection_id'].translations.$get(args, options),
  )
}

export async function get3CompanyCompanyId(
  args: InferRequestType<(typeof client)['3']['company'][':company_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].company[':company_id'].$get(args, options))
}

export async function get3CompanyCompanyIdAlternativeNames(
  args: InferRequestType<
    (typeof client)['3']['company'][':company_id']['alternative_names']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].company[':company_id'].alternative_names.$get(args, options),
  )
}

export async function get3CompanyCompanyIdImages(
  args: InferRequestType<(typeof client)['3']['company'][':company_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].company[':company_id'].images.$get(args, options))
}

export async function get3Configuration(options?: ClientRequestOptions) {
  return await parseResponse(client['3'].configuration.$get(undefined, options))
}

export async function get3ConfigurationCountries(
  args: InferRequestType<(typeof client)['3']['configuration']['countries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].configuration.countries.$get(args, options))
}

export async function get3ConfigurationJobs(options?: ClientRequestOptions) {
  return await parseResponse(client['3'].configuration.jobs.$get(undefined, options))
}

export async function get3ConfigurationLanguages(options?: ClientRequestOptions) {
  return await parseResponse(client['3'].configuration.languages.$get(undefined, options))
}

export async function get3ConfigurationPrimaryTranslations(options?: ClientRequestOptions) {
  return await parseResponse(
    client['3'].configuration.primary_translations.$get(undefined, options),
  )
}

export async function get3ConfigurationTimezones(options?: ClientRequestOptions) {
  return await parseResponse(client['3'].configuration.timezones.$get(undefined, options))
}

export async function get3CreditCreditId(
  args: InferRequestType<(typeof client)['3']['credit'][':credit_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].credit[':credit_id'].$get(args, options))
}

export async function get3DiscoverMovie(
  args: InferRequestType<(typeof client)['3']['discover']['movie']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].discover.movie.$get(args, options))
}

export async function get3DiscoverTv(
  args: InferRequestType<(typeof client)['3']['discover']['tv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].discover.tv.$get(args, options))
}

export async function get3FindExternalId(
  args: InferRequestType<(typeof client)['3']['find'][':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].find[':external_id'].$get(args, options))
}

export async function get3GenreMovieList(
  args: InferRequestType<(typeof client)['3']['genre']['movie']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].genre.movie.list.$get(args, options))
}

export async function get3GenreTvList(
  args: InferRequestType<(typeof client)['3']['genre']['tv']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].genre.tv.list.$get(args, options))
}

export async function get3GuestSessionGuestSessionIdRatedMovies(
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['movies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].guest_session[':guest_session_id'].rated.movies.$get(args, options),
  )
}

export async function get3GuestSessionGuestSessionIdRatedTv(
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].guest_session[':guest_session_id'].rated.tv.$get(args, options),
  )
}

export async function get3GuestSessionGuestSessionIdRatedTvEpisodes(
  args: InferRequestType<
    (typeof client)['3']['guest_session'][':guest_session_id']['rated']['tv']['episodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].guest_session[':guest_session_id'].rated.tv.episodes.$get(args, options),
  )
}

export async function get3KeywordKeywordId(
  args: InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].keyword[':keyword_id'].$get(args, options))
}

export async function get3KeywordKeywordIdMovies(
  args: InferRequestType<(typeof client)['3']['keyword'][':keyword_id']['movies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].keyword[':keyword_id'].movies.$get(args, options))
}

export async function post3ListListIdAddItem(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['add_item']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].list[':list_id'].add_item.$post(args, options))
}

export async function get3ListListIdItemStatus(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['item_status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].list[':list_id'].item_status.$get(args, options))
}

export async function post3ListListIdClear(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['clear']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].list[':list_id'].clear.$post(args, options))
}

export async function post3List(
  args: InferRequestType<(typeof client)['3']['list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].list.$post(args, options))
}

export async function get3ListListId(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].list[':list_id'].$get(args, options))
}

export async function delete3ListListId(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].list[':list_id'].$delete(args, options))
}

export async function post3ListListIdRemoveItem(
  args: InferRequestType<(typeof client)['3']['list'][':list_id']['remove_item']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].list[':list_id'].remove_item.$post(args, options))
}

export async function get3MovieNowPlaying(
  args: InferRequestType<(typeof client)['3']['movie']['now_playing']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie.now_playing.$get(args, options))
}

export async function get3MoviePopular(
  args: InferRequestType<(typeof client)['3']['movie']['popular']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie.popular.$get(args, options))
}

export async function get3MovieTopRated(
  args: InferRequestType<(typeof client)['3']['movie']['top_rated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie.top_rated.$get(args, options))
}

export async function get3MovieUpcoming(
  args: InferRequestType<(typeof client)['3']['movie']['upcoming']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie.upcoming.$get(args, options))
}

export async function get3MovieMovieId(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].$get(args, options))
}

export async function get3MovieMovieIdAccountStates(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['account_states']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].account_states.$get(args, options))
}

export async function get3MovieMovieIdAlternativeTitles(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['alternative_titles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].alternative_titles.$get(args, options))
}

export async function get3MovieMovieIdChanges(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].changes.$get(args, options))
}

export async function get3MovieMovieIdCredits(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].credits.$get(args, options))
}

export async function get3MovieMovieIdExternalIds(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['external_ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].external_ids.$get(args, options))
}

export async function get3MovieMovieIdImages(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].images.$get(args, options))
}

export async function get3MovieMovieIdKeywords(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['keywords']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].keywords.$get(args, options))
}

export async function get3MovieLatest(options?: ClientRequestOptions) {
  return await parseResponse(client['3'].movie.latest.$get(undefined, options))
}

export async function get3MovieMovieIdLists(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].lists.$get(args, options))
}

export async function get3MovieMovieIdRecommendations(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].recommendations.$get(args, options))
}

export async function get3MovieMovieIdReleaseDates(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['release_dates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].release_dates.$get(args, options))
}

export async function get3MovieMovieIdReviews(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].reviews.$get(args, options))
}

export async function get3MovieMovieIdSimilar(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].similar.$get(args, options))
}

export async function get3MovieMovieIdTranslations(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['translations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].translations.$get(args, options))
}

export async function get3MovieMovieIdVideos(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].videos.$get(args, options))
}

export async function get3MovieMovieIdWatchProviders(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['watch']['providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].watch.providers.$get(args, options))
}

export async function post3MovieMovieIdRating(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['rating']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].rating.$post(args, options))
}

export async function delete3MovieMovieIdRating(
  args: InferRequestType<(typeof client)['3']['movie'][':movie_id']['rating']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].movie[':movie_id'].rating.$delete(args, options))
}

export async function get3NetworkNetworkId(
  args: InferRequestType<(typeof client)['3']['network'][':network_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].network[':network_id'].$get(args, options))
}

export async function get3NetworkNetworkIdAlternativeNames(
  args: InferRequestType<
    (typeof client)['3']['network'][':network_id']['alternative_names']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].network[':network_id'].alternative_names.$get(args, options),
  )
}

export async function get3NetworkNetworkIdImages(
  args: InferRequestType<(typeof client)['3']['network'][':network_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].network[':network_id'].images.$get(args, options))
}

export async function get3PersonPopular(
  args: InferRequestType<(typeof client)['3']['person']['popular']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].person.popular.$get(args, options))
}

export async function get3PersonPersonId(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].person[':person_id'].$get(args, options))
}

export async function get3PersonPersonIdChanges(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].person[':person_id'].changes.$get(args, options))
}

export async function get3PersonPersonIdCombinedCredits(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['combined_credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].person[':person_id'].combined_credits.$get(args, options))
}

export async function get3PersonPersonIdExternalIds(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['external_ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].person[':person_id'].external_ids.$get(args, options))
}

export async function get3PersonPersonIdImages(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].person[':person_id'].images.$get(args, options))
}

export async function get3PersonLatest(options?: ClientRequestOptions) {
  return await parseResponse(client['3'].person.latest.$get(undefined, options))
}

export async function get3PersonPersonIdMovieCredits(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['movie_credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].person[':person_id'].movie_credits.$get(args, options))
}

export async function get3PersonPersonIdTvCredits(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['tv_credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].person[':person_id'].tv_credits.$get(args, options))
}

export async function get3PersonPersonIdTaggedImages(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['tagged_images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].person[':person_id'].tagged_images.$get(args, options))
}

export async function get3PersonPersonIdTranslations(
  args: InferRequestType<(typeof client)['3']['person'][':person_id']['translations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].person[':person_id'].translations.$get(args, options))
}

export async function get3ReviewReviewId(
  args: InferRequestType<(typeof client)['3']['review'][':review_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].review[':review_id'].$get(args, options))
}

export async function get3SearchCollection(
  args: InferRequestType<(typeof client)['3']['search']['collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].search.collection.$get(args, options))
}

export async function get3SearchCompany(
  args: InferRequestType<(typeof client)['3']['search']['company']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].search.company.$get(args, options))
}

export async function get3SearchKeyword(
  args: InferRequestType<(typeof client)['3']['search']['keyword']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].search.keyword.$get(args, options))
}

export async function get3SearchMovie(
  args: InferRequestType<(typeof client)['3']['search']['movie']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].search.movie.$get(args, options))
}

export async function get3SearchMulti(
  args: InferRequestType<(typeof client)['3']['search']['multi']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].search.multi.$get(args, options))
}

export async function get3SearchPerson(
  args: InferRequestType<(typeof client)['3']['search']['person']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].search.person.$get(args, options))
}

export async function get3SearchTv(
  args: InferRequestType<(typeof client)['3']['search']['tv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].search.tv.$get(args, options))
}

export async function get3TrendingAllTimeWindow(
  args: InferRequestType<(typeof client)['3']['trending']['all'][':time_window']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].trending.all[':time_window'].$get(args, options))
}

export async function get3TrendingMovieTimeWindow(
  args: InferRequestType<(typeof client)['3']['trending']['movie'][':time_window']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].trending.movie[':time_window'].$get(args, options))
}

export async function get3TrendingPersonTimeWindow(
  args: InferRequestType<(typeof client)['3']['trending']['person'][':time_window']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].trending.person[':time_window'].$get(args, options))
}

export async function get3TrendingTvTimeWindow(
  args: InferRequestType<(typeof client)['3']['trending']['tv'][':time_window']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].trending.tv[':time_window'].$get(args, options))
}

export async function get3TvAiringToday(
  args: InferRequestType<(typeof client)['3']['tv']['airing_today']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv.airing_today.$get(args, options))
}

export async function get3TvOnTheAir(
  args: InferRequestType<(typeof client)['3']['tv']['on_the_air']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv.on_the_air.$get(args, options))
}

export async function get3TvPopular(
  args: InferRequestType<(typeof client)['3']['tv']['popular']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv.popular.$get(args, options))
}

export async function get3TvTopRated(
  args: InferRequestType<(typeof client)['3']['tv']['top_rated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv.top_rated.$get(args, options))
}

export async function get3TvSeriesId(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].$get(args, options))
}

export async function get3TvSeriesIdAccountStates(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['account_states']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].account_states.$get(args, options))
}

export async function get3TvSeriesIdAggregateCredits(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['aggregate_credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].aggregate_credits.$get(args, options))
}

export async function get3TvSeriesIdAlternativeTitles(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['alternative_titles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].alternative_titles.$get(args, options))
}

export async function get3TvSeriesIdChanges(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].changes.$get(args, options))
}

export async function get3TvSeriesIdContentRatings(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['content_ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].content_ratings.$get(args, options))
}

export async function get3TvSeriesIdCredits(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].credits.$get(args, options))
}

export async function get3TvSeriesIdEpisodeGroups(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['episode_groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].episode_groups.$get(args, options))
}

export async function get3TvSeriesIdExternalIds(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['external_ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].external_ids.$get(args, options))
}

export async function get3TvSeriesIdImages(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].images.$get(args, options))
}

export async function get3TvSeriesIdKeywords(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['keywords']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].keywords.$get(args, options))
}

export async function get3TvLatest(options?: ClientRequestOptions) {
  return await parseResponse(client['3'].tv.latest.$get(undefined, options))
}

export async function get3TvSeriesIdLists(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].lists.$get(args, options))
}

export async function get3TvSeriesIdRecommendations(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].recommendations.$get(args, options))
}

export async function get3TvSeriesIdReviews(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].reviews.$get(args, options))
}

export async function get3TvSeriesIdScreenedTheatrically(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['screened_theatrically']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].screened_theatrically.$get(args, options))
}

export async function get3TvSeriesIdSimilar(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].similar.$get(args, options))
}

export async function get3TvSeriesIdTranslations(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['translations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].translations.$get(args, options))
}

export async function get3TvSeriesIdVideos(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].videos.$get(args, options))
}

export async function get3TvSeriesIdWatchProviders(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['watch']['providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].watch.providers.$get(args, options))
}

export async function post3TvSeriesIdRating(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['rating']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].rating.$post(args, options))
}

export async function delete3TvSeriesIdRating(
  args: InferRequestType<(typeof client)['3']['tv'][':series_id']['rating']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv[':series_id'].rating.$delete(args, options))
}

export async function get3TvSeriesIdSeasonSeasonNumber(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].$get(args, options),
  )
}

export async function get3TvSeriesIdSeasonSeasonNumberAccountStates(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['account_states']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].account_states.$get(args, options),
  )
}

export async function get3TvSeriesIdSeasonSeasonNumberAggregateCredits(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['aggregate_credits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].aggregate_credits.$get(args, options),
  )
}

export async function get3TvSeasonSeasonIdChanges(
  args: InferRequestType<(typeof client)['3']['tv']['season'][':season_id']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv.season[':season_id'].changes.$get(args, options))
}

export async function get3TvSeriesIdSeasonSeasonNumberCredits(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['credits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].credits.$get(args, options),
  )
}

export async function get3TvSeriesIdSeasonSeasonNumberExternalIds(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['external_ids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].external_ids.$get(args, options),
  )
}

export async function get3TvSeriesIdSeasonSeasonNumberImages(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['images']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].images.$get(args, options),
  )
}

export async function get3TvSeriesIdSeasonSeasonNumberTranslations(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['translations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].translations.$get(args, options),
  )
}

export async function get3TvSeriesIdSeasonSeasonNumberVideos(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].videos.$get(args, options),
  )
}

export async function get3TvSeriesIdSeasonSeasonNumberWatchProviders(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['watch']['providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].watch.providers.$get(args, options),
  )
}

export async function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumber(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].episode[':episode_number'].$get(
      args,
      options,
    ),
  )
}

export async function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberAccountStates(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['account_states']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].episode[
      ':episode_number'
    ].account_states.$get(args, options),
  )
}

export async function get3TvEpisodeEpisodeIdChanges(
  args: InferRequestType<(typeof client)['3']['tv']['episode'][':episode_id']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].tv.episode[':episode_id'].changes.$get(args, options))
}

export async function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberCredits(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['credits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].episode[':episode_number'].credits.$get(
      args,
      options,
    ),
  )
}

export async function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberExternalIds(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['external_ids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].episode[
      ':episode_number'
    ].external_ids.$get(args, options),
  )
}

export async function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberImages(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['images']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].episode[':episode_number'].images.$get(
      args,
      options,
    ),
  )
}

export async function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberTranslations(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['translations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].episode[
      ':episode_number'
    ].translations.$get(args, options),
  )
}

export async function get3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberVideos(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['videos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].episode[':episode_number'].videos.$get(
      args,
      options,
    ),
  )
}

export async function post3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRating(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].episode[':episode_number'].rating.$post(
      args,
      options,
    ),
  )
}

export async function delete3TvSeriesIdSeasonSeasonNumberEpisodeEpisodeNumberRating(
  args: InferRequestType<
    (typeof client)['3']['tv'][':series_id']['season'][':season_number']['episode'][':episode_number']['rating']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv[':series_id'].season[':season_number'].episode[':episode_number'].rating.$delete(
      args,
      options,
    ),
  )
}

export async function get3TvEpisodeGroupTvEpisodeGroupId(
  args: InferRequestType<
    (typeof client)['3']['tv']['episode_group'][':tv_episode_group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['3'].tv.episode_group[':tv_episode_group_id'].$get(args, options),
  )
}

export async function get3WatchProvidersRegions(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].watch.providers.regions.$get(args, options))
}

export async function get3WatchProvidersMovie(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['movie']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].watch.providers.movie.$get(args, options))
}

export async function get3WatchProvidersTv(
  args: InferRequestType<(typeof client)['3']['watch']['providers']['tv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3'].watch.providers.tv.$get(args, options))
}
