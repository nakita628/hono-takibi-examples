import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCalendarsAllDvdStartDateDays(
  args: InferRequestType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars.all.dvd[':start_date'][':days'].$get(args, options))
}

export async function getCalendarsAllMoviesStartDateDays(
  args: InferRequestType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calendars.all.movies[':start_date'][':days'].$get(args, options),
  )
}

export async function getCalendarsAllShowsNewStartDateDays(
  args: InferRequestType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calendars.all.shows.new[':start_date'][':days'].$get(args, options),
  )
}

export async function getCalendarsAllShowsPremieresStartDateDays(
  args: InferRequestType<
    (typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calendars.all.shows.premieres[':start_date'][':days'].$get(args, options),
  )
}

export async function getCalendarsAllShowsStartDateDays(
  args: InferRequestType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars.all.shows[':start_date'][':days'].$get(args, options))
}

export async function getCalendarsMyDvdStartDateDays(
  args: InferRequestType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars.my.dvd[':start_date'][':days'].$get(args, options))
}

export async function getCalendarsMyMoviesStartDateDays(
  args: InferRequestType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars.my.movies[':start_date'][':days'].$get(args, options))
}

export async function getCalendarsMyShowsNewStartDateDays(
  args: InferRequestType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calendars.my.shows.new[':start_date'][':days'].$get(args, options),
  )
}

export async function getCalendarsMyShowsPremieresStartDateDays(
  args: InferRequestType<
    (typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.calendars.my.shows.premieres[':start_date'][':days'].$get(args, options),
  )
}

export async function getCalendarsMyShowsStartDateDays(
  args: InferRequestType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calendars.my.shows[':start_date'][':days'].$get(args, options))
}

export async function getCertificationsType(
  args: InferRequestType<(typeof client.certifications)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certifications[':type'].$get(args, options))
}

export async function postCheckin(
  args: InferRequestType<typeof client.checkin.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checkin.$post(args, options))
}

export async function deleteCheckin(
  args: InferRequestType<typeof client.checkin.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checkin.$delete(args, options))
}

export async function postComments(
  args: InferRequestType<typeof client.comments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments.$post(args, options))
}

export async function getCommentsRecentCommentTypeType(
  args: InferRequestType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments.recent[':comment_type'][':type'].$get(args, options))
}

export async function getCommentsTrendingCommentTypeType(
  args: InferRequestType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments.trending[':comment_type'][':type'].$get(args, options))
}

export async function getCommentsUpdatesCommentTypeType(
  args: InferRequestType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments.updates[':comment_type'][':type'].$get(args, options))
}

export async function getCommentsId(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].$get(args, options))
}

export async function putCommentsId(
  args: InferRequestType<(typeof client.comments)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].$put(args, options))
}

export async function deleteCommentsId(
  args: InferRequestType<(typeof client.comments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].$delete(args, options))
}

export async function getCommentsIdItem(
  args: InferRequestType<(typeof client.comments)[':id']['item']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].item.$get(args, options))
}

export async function postCommentsIdLike(
  args: InferRequestType<(typeof client.comments)[':id']['like']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].like.$post(args, options))
}

export async function deleteCommentsIdLike(
  args: InferRequestType<(typeof client.comments)[':id']['like']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].like.$delete(args, options))
}

export async function getCommentsIdLikes(
  args: InferRequestType<(typeof client.comments)[':id']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].likes.$get(args, options))
}

export async function getCommentsIdReplies(
  args: InferRequestType<(typeof client.comments)[':id']['replies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].replies.$get(args, options))
}

export async function postCommentsIdReplies(
  args: InferRequestType<(typeof client.comments)[':id']['replies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].replies.$post(args, options))
}

export async function getCountriesType(
  args: InferRequestType<(typeof client.countries)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.countries[':type'].$get(args, options))
}

export async function getGenresType(
  args: InferRequestType<(typeof client.genres)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genres[':type'].$get(args, options))
}

export async function getLanguagesType(
  args: InferRequestType<(typeof client.languages)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.languages[':type'].$get(args, options))
}

export async function getListsPopular(
  args: InferRequestType<typeof client.lists.popular.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists.popular.$get(args, options))
}

export async function getListsTrending(
  args: InferRequestType<typeof client.lists.trending.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists.trending.$get(args, options))
}

export async function getListsId(
  args: InferRequestType<(typeof client.lists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':id'].$get(args, options))
}

export async function getListsIdCommentsSort(
  args: InferRequestType<(typeof client.lists)[':id']['comments'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':id'].comments[':sort'].$get(args, options))
}

export async function getListsIdItemsType(
  args: InferRequestType<(typeof client.lists)[':id']['items'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':id'].items[':type'].$get(args, options))
}

export async function getListsIdLikes(
  args: InferRequestType<(typeof client.lists)[':id']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':id'].likes.$get(args, options))
}

export async function getMoviesAnticipated(
  args: InferRequestType<typeof client.movies.anticipated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies.anticipated.$get(args, options))
}

export async function getMoviesBoxoffice(
  args: InferRequestType<typeof client.movies.boxoffice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies.boxoffice.$get(args, options))
}

export async function getMoviesCollectedPeriod(
  args: InferRequestType<(typeof client.movies.collected)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies.collected[':period'].$get(args, options))
}

export async function getMoviesPlayedPeriod(
  args: InferRequestType<(typeof client.movies.played)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies.played[':period'].$get(args, options))
}

export async function getMoviesPopular(
  args: InferRequestType<typeof client.movies.popular.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies.popular.$get(args, options))
}

export async function getMoviesRecommendedPeriod(
  args: InferRequestType<(typeof client.movies.recommended)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies.recommended[':period'].$get(args, options))
}

export async function getMoviesTrending(
  args: InferRequestType<typeof client.movies.trending.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies.trending.$get(args, options))
}

export async function getMoviesUpdatesIdStartDate(
  args: InferRequestType<(typeof client.movies.updates.id)[':start_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies.updates.id[':start_date'].$get(args, options))
}

export async function getMoviesUpdatesStartDate(
  args: InferRequestType<(typeof client.movies.updates)[':start_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies.updates[':start_date'].$get(args, options))
}

export async function getMoviesWatchedPeriod(
  args: InferRequestType<(typeof client.movies.watched)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies.watched[':period'].$get(args, options))
}

export async function getMoviesId(
  args: InferRequestType<(typeof client.movies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies[':id'].$get(args, options))
}

export async function getMoviesIdAliases(
  args: InferRequestType<(typeof client.movies)[':id']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies[':id'].aliases.$get(args, options))
}

export async function getMoviesIdCommentsSort(
  args: InferRequestType<(typeof client.movies)[':id']['comments'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies[':id'].comments[':sort'].$get(args, options))
}

export async function getMoviesIdListsTypeSort(
  args: InferRequestType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies[':id'].lists[':type'][':sort'].$get(args, options))
}

export async function getMoviesIdPeople(
  args: InferRequestType<(typeof client.movies)[':id']['people']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies[':id'].people.$get(args, options))
}

export async function getMoviesIdRatings(
  args: InferRequestType<(typeof client.movies)[':id']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies[':id'].ratings.$get(args, options))
}

export async function getMoviesIdRelated(
  args: InferRequestType<(typeof client.movies)[':id']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies[':id'].related.$get(args, options))
}

export async function getMoviesIdReleasesCountry(
  args: InferRequestType<(typeof client.movies)[':id']['releases'][':country']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies[':id'].releases[':country'].$get(args, options))
}

export async function getMoviesIdStats(
  args: InferRequestType<(typeof client.movies)[':id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies[':id'].stats.$get(args, options))
}

export async function getMoviesIdStudios(
  args: InferRequestType<(typeof client.movies)[':id']['studios']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies[':id'].studios.$get(args, options))
}

export async function getMoviesIdTranslationsLanguage(
  args: InferRequestType<(typeof client.movies)[':id']['translations'][':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies[':id'].translations[':language'].$get(args, options))
}

export async function getMoviesIdWatching(
  args: InferRequestType<(typeof client.movies)[':id']['watching']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies[':id'].watching.$get(args, options))
}

export async function getNetworks(
  args: InferRequestType<typeof client.networks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks.$get(args, options))
}

export async function getOauthAuthorize(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.authorize.$get(args, options))
}

export async function postOauthDeviceCode(
  args: InferRequestType<typeof client.oauth.device.code.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.device.code.$post(args, options))
}

export async function postOauthDeviceToken(
  args: InferRequestType<typeof client.oauth.device.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.device.token.$post(args, options))
}

export async function postOauthRevoke(
  args: InferRequestType<typeof client.oauth.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.revoke.$post(args, options))
}

export async function postOauthToken(
  args: InferRequestType<typeof client.oauth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.token.$post(args, options))
}

export async function getPeopleUpdatesIdStartDate(
  args: InferRequestType<(typeof client.people.updates.id)[':start_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people.updates.id[':start_date'].$get(args, options))
}

export async function getPeopleUpdatesStartDate(
  args: InferRequestType<(typeof client.people.updates)[':start_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people.updates[':start_date'].$get(args, options))
}

export async function getPeopleId(
  args: InferRequestType<(typeof client.people)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].$get(args, options))
}

export async function getPeopleIdListsTypeSort(
  args: InferRequestType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].lists[':type'][':sort'].$get(args, options))
}

export async function getPeopleIdMovies(
  args: InferRequestType<(typeof client.people)[':id']['movies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].movies.$get(args, options))
}

export async function getPeopleIdShows(
  args: InferRequestType<(typeof client.people)[':id']['shows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].shows.$get(args, options))
}

export async function getRecommendationsMovies(
  args: InferRequestType<typeof client.recommendations.movies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recommendations.movies.$get(args, options))
}

export async function deleteRecommendationsMoviesId(
  args: InferRequestType<(typeof client.recommendations.movies)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recommendations.movies[':id'].$delete(args, options))
}

export async function getRecommendationsShows(
  args: InferRequestType<typeof client.recommendations.shows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recommendations.shows.$get(args, options))
}

export async function deleteRecommendationsShowsId(
  args: InferRequestType<(typeof client.recommendations.shows)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recommendations.shows[':id'].$delete(args, options))
}

export async function postScrobblePause(
  args: InferRequestType<typeof client.scrobble.pause.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrobble.pause.$post(args, options))
}

export async function postScrobbleStart(
  args: InferRequestType<typeof client.scrobble.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrobble.start.$post(args, options))
}

export async function postScrobbleStop(
  args: InferRequestType<typeof client.scrobble.stop.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrobble.stop.$post(args, options))
}

export async function getSearchIdTypeId(
  args: InferRequestType<(typeof client.search)[':id_type'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search[':id_type'][':id'].$get(args, options))
}

export async function getSearchType(
  args: InferRequestType<(typeof client.search)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search[':type'].$get(args, options))
}

export async function getShowsAnticipated(
  args: InferRequestType<typeof client.shows.anticipated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows.anticipated.$get(args, options))
}

export async function getShowsCollectedPeriod(
  args: InferRequestType<(typeof client.shows.collected)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows.collected[':period'].$get(args, options))
}

export async function getShowsPlayedPeriod(
  args: InferRequestType<(typeof client.shows.played)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows.played[':period'].$get(args, options))
}

export async function getShowsPopular(
  args: InferRequestType<typeof client.shows.popular.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows.popular.$get(args, options))
}

export async function getShowsRecommendedPeriod(
  args: InferRequestType<(typeof client.shows.recommended)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows.recommended[':period'].$get(args, options))
}

export async function getShowsTrending(
  args: InferRequestType<typeof client.shows.trending.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows.trending.$get(args, options))
}

export async function getShowsUpdatesIdStartDate(
  args: InferRequestType<(typeof client.shows.updates.id)[':start_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows.updates.id[':start_date'].$get(args, options))
}

export async function getShowsUpdatesStartDate(
  args: InferRequestType<(typeof client.shows.updates)[':start_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows.updates[':start_date'].$get(args, options))
}

export async function getShowsWatchedPeriod(
  args: InferRequestType<(typeof client.shows.watched)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows.watched[':period'].$get(args, options))
}

export async function getShowsId(
  args: InferRequestType<(typeof client.shows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].$get(args, options))
}

export async function getShowsIdAliases(
  args: InferRequestType<(typeof client.shows)[':id']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].aliases.$get(args, options))
}

export async function getShowsIdCertifications(
  args: InferRequestType<(typeof client.shows)[':id']['certifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].certifications.$get(args, options))
}

export async function getShowsIdCommentsSort(
  args: InferRequestType<(typeof client.shows)[':id']['comments'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].comments[':sort'].$get(args, options))
}

export async function getShowsIdLastEpisode(
  args: InferRequestType<(typeof client.shows)[':id']['last_episode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].last_episode.$get(args, options))
}

export async function getShowsIdListsTypeSort(
  args: InferRequestType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].lists[':type'][':sort'].$get(args, options))
}

export async function getShowsIdNextEpisode(
  args: InferRequestType<(typeof client.shows)[':id']['next_episode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].next_episode.$get(args, options))
}

export async function getShowsIdPeople(
  args: InferRequestType<(typeof client.shows)[':id']['people']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].people.$get(args, options))
}

export async function getShowsIdProgressCollection(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].progress.collection.$get(args, options))
}

export async function getShowsIdProgressWatched(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['watched']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].progress.watched.$get(args, options))
}

export async function postShowsIdProgressWatchedReset(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['watched']['reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].progress.watched.reset.$post(args, options))
}

export async function deleteShowsIdProgressWatchedReset(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['watched']['reset']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].progress.watched.reset.$delete(args, options))
}

export async function getShowsIdRatings(
  args: InferRequestType<(typeof client.shows)[':id']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].ratings.$get(args, options))
}

export async function getShowsIdRelated(
  args: InferRequestType<(typeof client.shows)[':id']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].related.$get(args, options))
}

export async function getShowsIdSeasons(
  args: InferRequestType<(typeof client.shows)[':id']['seasons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].seasons.$get(args, options))
}

export async function getShowsIdSeasonsSeason(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].seasons[':season'].$get(args, options))
}

export async function getShowsIdSeasonsSeasonCommentsSort(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shows[':id'].seasons[':season'].comments[':sort'].$get(args, options),
  )
}

export async function getShowsIdSeasonsSeasonEpisodesEpisode(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shows[':id'].seasons[':season'].episodes[':episode'].$get(args, options),
  )
}

export async function getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSort(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shows[':id'].seasons[':season'].episodes[':episode'].comments[':sort'].$get(
      args,
      options,
    ),
  )
}

export async function getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSort(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['lists'][':type'][':sort']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shows[':id'].seasons[':season'].episodes[':episode'].lists[':type'][':sort'].$get(
      args,
      options,
    ),
  )
}

export async function getShowsIdSeasonsSeasonEpisodesEpisodePeople(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shows[':id'].seasons[':season'].episodes[':episode'].people.$get(args, options),
  )
}

export async function getShowsIdSeasonsSeasonEpisodesEpisodeRatings(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shows[':id'].seasons[':season'].episodes[':episode'].ratings.$get(args, options),
  )
}

export async function getShowsIdSeasonsSeasonEpisodesEpisodeStats(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shows[':id'].seasons[':season'].episodes[':episode'].stats.$get(args, options),
  )
}

export async function getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguage(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['translations'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shows[':id'].seasons[':season'].episodes[':episode'].translations[':language'].$get(
      args,
      options,
    ),
  )
}

export async function getShowsIdSeasonsSeasonEpisodesEpisodeWatching(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shows[':id'].seasons[':season'].episodes[':episode'].watching.$get(args, options),
  )
}

export async function getShowsIdSeasonsSeasonListsTypeSort(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shows[':id'].seasons[':season'].lists[':type'][':sort'].$get(args, options),
  )
}

export async function getShowsIdSeasonsSeasonPeople(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].seasons[':season'].people.$get(args, options))
}

export async function getShowsIdSeasonsSeasonRatings(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].seasons[':season'].ratings.$get(args, options))
}

export async function getShowsIdSeasonsSeasonStats(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].seasons[':season'].stats.$get(args, options))
}

export async function getShowsIdSeasonsSeasonTranslationsLanguage(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shows[':id'].seasons[':season'].translations[':language'].$get(args, options),
  )
}

export async function getShowsIdSeasonsSeasonWatching(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].seasons[':season'].watching.$get(args, options))
}

export async function getShowsIdStats(
  args: InferRequestType<(typeof client.shows)[':id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].stats.$get(args, options))
}

export async function getShowsIdStudios(
  args: InferRequestType<(typeof client.shows)[':id']['studios']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].studios.$get(args, options))
}

export async function getShowsIdTranslationsLanguage(
  args: InferRequestType<(typeof client.shows)[':id']['translations'][':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].translations[':language'].$get(args, options))
}

export async function getShowsIdWatching(
  args: InferRequestType<(typeof client.shows)[':id']['watching']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].watching.$get(args, options))
}

export async function postSyncCollection(
  args: InferRequestType<typeof client.sync.collection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.collection.$post(args, options))
}

export async function postSyncCollectionRemove(
  args: InferRequestType<typeof client.sync.collection.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.collection.remove.$post(args, options))
}

export async function getSyncCollectionType(
  args: InferRequestType<(typeof client.sync.collection)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.collection[':type'].$get(args, options))
}

export async function postSyncHistory(
  args: InferRequestType<typeof client.sync.history.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.history.$post(args, options))
}

export async function postSyncHistoryRemove(
  args: InferRequestType<typeof client.sync.history.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.history.remove.$post(args, options))
}

export async function getSyncHistoryTypeId(
  args: InferRequestType<(typeof client.sync.history)[':type'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.history[':type'][':id'].$get(args, options))
}

export async function getSyncLastActivities(
  args: InferRequestType<typeof client.sync.last_activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.last_activities.$get(args, options))
}

export async function deleteSyncPlaybackId(
  args: InferRequestType<(typeof client.sync.playback)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.playback[':id'].$delete(args, options))
}

export async function getSyncPlaybackType(
  args: InferRequestType<(typeof client.sync.playback)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.playback[':type'].$get(args, options))
}

export async function postSyncRatings(
  args: InferRequestType<typeof client.sync.ratings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.ratings.$post(args, options))
}

export async function postSyncRatingsRemove(
  args: InferRequestType<typeof client.sync.ratings.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.ratings.remove.$post(args, options))
}

export async function getSyncRatingsTypeRating(
  args: InferRequestType<(typeof client.sync.ratings)[':type'][':rating']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.ratings[':type'][':rating'].$get(args, options))
}

export async function postSyncRecommendations(
  args: InferRequestType<typeof client.sync.recommendations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.recommendations.$post(args, options))
}

export async function postSyncRecommendationsRemove(
  args: InferRequestType<typeof client.sync.recommendations.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.recommendations.remove.$post(args, options))
}

export async function postSyncRecommendationsReorder(
  args: InferRequestType<typeof client.sync.recommendations.reorder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.recommendations.reorder.$post(args, options))
}

export async function getSyncRecommendationsTypeSort(
  args: InferRequestType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.recommendations[':type'][':sort'].$get(args, options))
}

export async function getSyncWatchedType(
  args: InferRequestType<(typeof client.sync.watched)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.watched[':type'].$get(args, options))
}

export async function postSyncWatchlist(
  args: InferRequestType<typeof client.sync.watchlist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.watchlist.$post(args, options))
}

export async function postSyncWatchlistRemove(
  args: InferRequestType<typeof client.sync.watchlist.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.watchlist.remove.$post(args, options))
}

export async function postSyncWatchlistReorder(
  args: InferRequestType<typeof client.sync.watchlist.reorder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.watchlist.reorder.$post(args, options))
}

export async function getSyncWatchlistTypeSort(
  args: InferRequestType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.watchlist[':type'][':sort'].$get(args, options))
}

export async function getUsersHiddenSection(
  args: InferRequestType<(typeof client.users.hidden)[':section']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.hidden[':section'].$get(args, options))
}

export async function postUsersHiddenSection(
  args: InferRequestType<(typeof client.users.hidden)[':section']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.hidden[':section'].$post(args, options))
}

export async function postUsersHiddenSectionRemove(
  args: InferRequestType<(typeof client.users.hidden)[':section']['remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.hidden[':section'].remove.$post(args, options))
}

export async function getUsersRequests(
  args: InferRequestType<typeof client.users.requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.requests.$get(args, options))
}

export async function getUsersRequestsFollowing(
  args: InferRequestType<typeof client.users.requests.following.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.requests.following.$get(args, options))
}

export async function postUsersRequestsId(
  args: InferRequestType<(typeof client.users.requests)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.requests[':id'].$post(args, options))
}

export async function deleteUsersRequestsId(
  args: InferRequestType<(typeof client.users.requests)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.requests[':id'].$delete(args, options))
}

export async function getUsersSavedFiltersSection(
  args: InferRequestType<(typeof client.users.saved_filters)[':section']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.saved_filters[':section'].$get(args, options))
}

export async function getUsersSettings(
  args: InferRequestType<typeof client.users.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.settings.$get(args, options))
}

export async function getUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$get(args, options))
}

export async function getUsersIdCollectionType(
  args: InferRequestType<(typeof client.users)[':id']['collection'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].collection[':type'].$get(args, options))
}

export async function getUsersIdCommentsCommentTypeType(
  args: InferRequestType<
    (typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].comments[':comment_type'][':type'].$get(args, options),
  )
}

export async function postUsersIdFollow(
  args: InferRequestType<(typeof client.users)[':id']['follow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].follow.$post(args, options))
}

export async function deleteUsersIdFollow(
  args: InferRequestType<(typeof client.users)[':id']['follow']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].follow.$delete(args, options))
}

export async function getUsersIdFollowers(
  args: InferRequestType<(typeof client.users)[':id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].followers.$get(args, options))
}

export async function getUsersIdFollowing(
  args: InferRequestType<(typeof client.users)[':id']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].following.$get(args, options))
}

export async function getUsersIdFriends(
  args: InferRequestType<(typeof client.users)[':id']['friends']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].friends.$get(args, options))
}

export async function getUsersIdHistoryTypeItemId(
  args: InferRequestType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].history[':type'][':item_id'].$get(args, options))
}

export async function getUsersIdLikesType(
  args: InferRequestType<(typeof client.users)[':id']['likes'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].likes[':type'].$get(args, options))
}

export async function getUsersIdLists(
  args: InferRequestType<(typeof client.users)[':id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].lists.$get(args, options))
}

export async function postUsersIdLists(
  args: InferRequestType<(typeof client.users)[':id']['lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].lists.$post(args, options))
}

export async function getUsersIdListsCollaborations(
  args: InferRequestType<(typeof client.users)[':id']['lists']['collaborations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].lists.collaborations.$get(args, options))
}

export async function postUsersIdListsReorder(
  args: InferRequestType<(typeof client.users)[':id']['lists']['reorder']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].lists.reorder.$post(args, options))
}

export async function getUsersIdListsListId(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].lists[':list_id'].$get(args, options))
}

export async function putUsersIdListsListId(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].lists[':list_id'].$put(args, options))
}

export async function deleteUsersIdListsListId(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].lists[':list_id'].$delete(args, options))
}

export async function getUsersIdListsListIdCommentsSort(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].lists[':list_id'].comments[':sort'].$get(args, options),
  )
}

export async function postUsersIdListsListIdItems(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].lists[':list_id'].items.$post(args, options))
}

export async function postUsersIdListsListIdItemsRemove(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['items']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].lists[':list_id'].items.remove.$post(args, options),
  )
}

export async function postUsersIdListsListIdItemsReorder(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['items']['reorder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].lists[':list_id'].items.reorder.$post(args, options),
  )
}

export async function getUsersIdListsListIdItemsType(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].lists[':list_id'].items[':type'].$get(args, options),
  )
}

export async function postUsersIdListsListIdLike(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['like']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].lists[':list_id'].like.$post(args, options))
}

export async function deleteUsersIdListsListIdLike(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['like']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].lists[':list_id'].like.$delete(args, options))
}

export async function getUsersIdListsListIdLikes(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].lists[':list_id'].likes.$get(args, options))
}

export async function getUsersIdRatingsTypeRating(
  args: InferRequestType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].ratings[':type'][':rating'].$get(args, options))
}

export async function getUsersIdRecommendationsTypeSort(
  args: InferRequestType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].recommendations[':type'][':sort'].$get(args, options),
  )
}

export async function getUsersIdStats(
  args: InferRequestType<(typeof client.users)[':id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].stats.$get(args, options))
}

export async function getUsersIdWatchedType(
  args: InferRequestType<(typeof client.users)[':id']['watched'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].watched[':type'].$get(args, options))
}

export async function getUsersIdWatching(
  args: InferRequestType<(typeof client.users)[':id']['watching']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].watching.$get(args, options))
}

export async function getUsersIdWatchlistTypeSort(
  args: InferRequestType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].watchlist[':type'][':sort'].$get(args, options))
}
