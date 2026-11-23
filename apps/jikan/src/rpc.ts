import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnimeIdFull(
  args: InferRequestType<(typeof client.anime)[':id']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].full.$get(args, options))
}

export async function getAnimeId(
  args: InferRequestType<(typeof client.anime)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].$get(args, options))
}

export async function getAnimeIdCharacters(
  args: InferRequestType<(typeof client.anime)[':id']['characters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].characters.$get(args, options))
}

export async function getAnimeIdStaff(
  args: InferRequestType<(typeof client.anime)[':id']['staff']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].staff.$get(args, options))
}

export async function getAnimeIdEpisodes(
  args: InferRequestType<(typeof client.anime)[':id']['episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].episodes.$get(args, options))
}

export async function getAnimeIdEpisodesEpisode(
  args: InferRequestType<(typeof client.anime)[':id']['episodes'][':episode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].episodes[':episode'].$get(args, options))
}

export async function getAnimeIdNews(
  args: InferRequestType<(typeof client.anime)[':id']['news']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].news.$get(args, options))
}

export async function getAnimeIdForum(
  args: InferRequestType<(typeof client.anime)[':id']['forum']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].forum.$get(args, options))
}

export async function getAnimeIdVideos(
  args: InferRequestType<(typeof client.anime)[':id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].videos.$get(args, options))
}

export async function getAnimeIdVideosEpisodes(
  args: InferRequestType<(typeof client.anime)[':id']['videos']['episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].videos.episodes.$get(args, options))
}

export async function getAnimeIdPictures(
  args: InferRequestType<(typeof client.anime)[':id']['pictures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].pictures.$get(args, options))
}

export async function getAnimeIdStatistics(
  args: InferRequestType<(typeof client.anime)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].statistics.$get(args, options))
}

export async function getAnimeIdMoreinfo(
  args: InferRequestType<(typeof client.anime)[':id']['moreinfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].moreinfo.$get(args, options))
}

export async function getAnimeIdRecommendations(
  args: InferRequestType<(typeof client.anime)[':id']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].recommendations.$get(args, options))
}

export async function getAnimeIdUserupdates(
  args: InferRequestType<(typeof client.anime)[':id']['userupdates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].userupdates.$get(args, options))
}

export async function getAnimeIdReviews(
  args: InferRequestType<(typeof client.anime)[':id']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].reviews.$get(args, options))
}

export async function getAnimeIdRelations(
  args: InferRequestType<(typeof client.anime)[':id']['relations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].relations.$get(args, options))
}

export async function getAnimeIdThemes(
  args: InferRequestType<(typeof client.anime)[':id']['themes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].themes.$get(args, options))
}

export async function getAnimeIdExternal(
  args: InferRequestType<(typeof client.anime)[':id']['external']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].external.$get(args, options))
}

export async function getAnimeIdStreaming(
  args: InferRequestType<(typeof client.anime)[':id']['streaming']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime[':id'].streaming.$get(args, options))
}

export async function getCharactersIdFull(
  args: InferRequestType<(typeof client.characters)[':id']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.characters[':id'].full.$get(args, options))
}

export async function getCharactersId(
  args: InferRequestType<(typeof client.characters)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.characters[':id'].$get(args, options))
}

export async function getCharactersIdAnime(
  args: InferRequestType<(typeof client.characters)[':id']['anime']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.characters[':id'].anime.$get(args, options))
}

export async function getCharactersIdManga(
  args: InferRequestType<(typeof client.characters)[':id']['manga']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.characters[':id'].manga.$get(args, options))
}

export async function getCharactersIdVoices(
  args: InferRequestType<(typeof client.characters)[':id']['voices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.characters[':id'].voices.$get(args, options))
}

export async function getCharactersIdPictures(
  args: InferRequestType<(typeof client.characters)[':id']['pictures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.characters[':id'].pictures.$get(args, options))
}

export async function getClubsId(
  args: InferRequestType<(typeof client.clubs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clubs[':id'].$get(args, options))
}

export async function getClubsIdMembers(
  args: InferRequestType<(typeof client.clubs)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clubs[':id'].members.$get(args, options))
}

export async function getClubsIdStaff(
  args: InferRequestType<(typeof client.clubs)[':id']['staff']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clubs[':id'].staff.$get(args, options))
}

export async function getClubsIdRelations(
  args: InferRequestType<(typeof client.clubs)[':id']['relations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clubs[':id'].relations.$get(args, options))
}

export async function getGenresAnime(
  args: InferRequestType<typeof client.genres.anime.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genres.anime.$get(args, options))
}

export async function getGenresManga(
  args: InferRequestType<typeof client.genres.manga.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genres.manga.$get(args, options))
}

export async function getMagazines(
  args: InferRequestType<typeof client.magazines.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.magazines.$get(args, options))
}

export async function getMangaIdFull(
  args: InferRequestType<(typeof client.manga)[':id']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.manga[':id'].full.$get(args, options))
}

export async function getMangaId(
  args: InferRequestType<(typeof client.manga)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.manga[':id'].$get(args, options))
}

export async function getMangaIdCharacters(
  args: InferRequestType<(typeof client.manga)[':id']['characters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.manga[':id'].characters.$get(args, options))
}

export async function getMangaIdNews(
  args: InferRequestType<(typeof client.manga)[':id']['news']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.manga[':id'].news.$get(args, options))
}

export async function getMangaIdForum(
  args: InferRequestType<(typeof client.manga)[':id']['forum']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.manga[':id'].forum.$get(args, options))
}

export async function getMangaIdPictures(
  args: InferRequestType<(typeof client.manga)[':id']['pictures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.manga[':id'].pictures.$get(args, options))
}

export async function getMangaIdStatistics(
  args: InferRequestType<(typeof client.manga)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.manga[':id'].statistics.$get(args, options))
}

export async function getMangaIdMoreinfo(
  args: InferRequestType<(typeof client.manga)[':id']['moreinfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.manga[':id'].moreinfo.$get(args, options))
}

export async function getMangaIdRecommendations(
  args: InferRequestType<(typeof client.manga)[':id']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.manga[':id'].recommendations.$get(args, options))
}

export async function getMangaIdUserupdates(
  args: InferRequestType<(typeof client.manga)[':id']['userupdates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.manga[':id'].userupdates.$get(args, options))
}

export async function getMangaIdReviews(
  args: InferRequestType<(typeof client.manga)[':id']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.manga[':id'].reviews.$get(args, options))
}

export async function getMangaIdRelations(
  args: InferRequestType<(typeof client.manga)[':id']['relations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.manga[':id'].relations.$get(args, options))
}

export async function getMangaIdExternal(
  args: InferRequestType<(typeof client.manga)[':id']['external']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.manga[':id'].external.$get(args, options))
}

export async function getPeopleIdFull(
  args: InferRequestType<(typeof client.people)[':id']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].full.$get(args, options))
}

export async function getPeopleId(
  args: InferRequestType<(typeof client.people)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].$get(args, options))
}

export async function getPeopleIdAnime(
  args: InferRequestType<(typeof client.people)[':id']['anime']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].anime.$get(args, options))
}

export async function getPeopleIdVoices(
  args: InferRequestType<(typeof client.people)[':id']['voices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].voices.$get(args, options))
}

export async function getPeopleIdManga(
  args: InferRequestType<(typeof client.people)[':id']['manga']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].manga.$get(args, options))
}

export async function getPeopleIdPictures(
  args: InferRequestType<(typeof client.people)[':id']['pictures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people[':id'].pictures.$get(args, options))
}

export async function getProducersId(
  args: InferRequestType<(typeof client.producers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.producers[':id'].$get(args, options))
}

export async function getProducersIdFull(
  args: InferRequestType<(typeof client.producers)[':id']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.producers[':id'].full.$get(args, options))
}

export async function getProducersIdExternal(
  args: InferRequestType<(typeof client.producers)[':id']['external']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.producers[':id'].external.$get(args, options))
}

export async function getRandomAnime(options?: ClientRequestOptions) {
  return await parseResponse(client.random.anime.$get(undefined, options))
}

export async function getRandomManga(options?: ClientRequestOptions) {
  return await parseResponse(client.random.manga.$get(undefined, options))
}

export async function getRandomCharacters(options?: ClientRequestOptions) {
  return await parseResponse(client.random.characters.$get(undefined, options))
}

export async function getRandomPeople(options?: ClientRequestOptions) {
  return await parseResponse(client.random.people.$get(undefined, options))
}

export async function getRandomUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.random.users.$get(undefined, options))
}

export async function getRecommendationsAnime(
  args: InferRequestType<typeof client.recommendations.anime.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recommendations.anime.$get(args, options))
}

export async function getRecommendationsManga(
  args: InferRequestType<typeof client.recommendations.manga.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recommendations.manga.$get(args, options))
}

export async function getReviewsAnime(
  args: InferRequestType<typeof client.reviews.anime.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews.anime.$get(args, options))
}

export async function getReviewsManga(
  args: InferRequestType<typeof client.reviews.manga.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews.manga.$get(args, options))
}

export async function getSchedules(
  args: InferRequestType<typeof client.schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.$get(args, options))
}

export async function getAnime(
  args: InferRequestType<typeof client.anime.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anime.$get(args, options))
}

export async function getManga(
  args: InferRequestType<typeof client.manga.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.manga.$get(args, options))
}

export async function getPeople(
  args: InferRequestType<typeof client.people.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.people.$get(args, options))
}

export async function getCharacters(
  args: InferRequestType<typeof client.characters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.characters.$get(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function getUsersUserbyidId(
  args: InferRequestType<(typeof client.users.userbyid)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.userbyid[':id'].$get(args, options))
}

export async function getClubs(
  args: InferRequestType<typeof client.clubs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clubs.$get(args, options))
}

export async function getProducers(
  args: InferRequestType<typeof client.producers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.producers.$get(args, options))
}

export async function getSeasonsNow(
  args: InferRequestType<typeof client.seasons.now.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.seasons.now.$get(args, options))
}

export async function getSeasonsYearSeason(
  args: InferRequestType<(typeof client.seasons)[':year'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.seasons[':year'][':season'].$get(args, options))
}

export async function getSeasons(options?: ClientRequestOptions) {
  return await parseResponse(client.seasons.$get(undefined, options))
}

export async function getSeasonsUpcoming(
  args: InferRequestType<typeof client.seasons.upcoming.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.seasons.upcoming.$get(args, options))
}

export async function getTopAnime(
  args: InferRequestType<typeof client.top.anime.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.top.anime.$get(args, options))
}

export async function getTopManga(
  args: InferRequestType<typeof client.top.manga.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.top.manga.$get(args, options))
}

export async function getTopPeople(
  args: InferRequestType<typeof client.top.people.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.top.people.$get(args, options))
}

export async function getTopCharacters(
  args: InferRequestType<typeof client.top.characters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.top.characters.$get(args, options))
}

export async function getTopReviews(
  args: InferRequestType<typeof client.top.reviews.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.top.reviews.$get(args, options))
}

export async function getUsersUsernameFull(
  args: InferRequestType<(typeof client.users)[':username']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].full.$get(args, options))
}

export async function getUsersUsername(
  args: InferRequestType<(typeof client.users)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].$get(args, options))
}

export async function getUsersUsernameStatistics(
  args: InferRequestType<(typeof client.users)[':username']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].statistics.$get(args, options))
}

export async function getUsersUsernameFavorites(
  args: InferRequestType<(typeof client.users)[':username']['favorites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].favorites.$get(args, options))
}

export async function getUsersUsernameUserupdates(
  args: InferRequestType<(typeof client.users)[':username']['userupdates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].userupdates.$get(args, options))
}

export async function getUsersUsernameAbout(
  args: InferRequestType<(typeof client.users)[':username']['about']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].about.$get(args, options))
}

export async function getUsersUsernameHistory(
  args: InferRequestType<(typeof client.users)[':username']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].history.$get(args, options))
}

export async function getUsersUsernameFriends(
  args: InferRequestType<(typeof client.users)[':username']['friends']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].friends.$get(args, options))
}

export async function getUsersUsernameAnimelist(
  args: InferRequestType<(typeof client.users)[':username']['animelist']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].animelist.$get(args, options))
}

export async function getUsersUsernameMangalist(
  args: InferRequestType<(typeof client.users)[':username']['mangalist']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].mangalist.$get(args, options))
}

export async function getUsersUsernameReviews(
  args: InferRequestType<(typeof client.users)[':username']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].reviews.$get(args, options))
}

export async function getUsersUsernameRecommendations(
  args: InferRequestType<(typeof client.users)[':username']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].recommendations.$get(args, options))
}

export async function getUsersUsernameClubs(
  args: InferRequestType<(typeof client.users)[':username']['clubs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].clubs.$get(args, options))
}

export async function getUsersUsernameExternal(
  args: InferRequestType<(typeof client.users)[':username']['external']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].external.$get(args, options))
}

export async function getWatchEpisodes(options?: ClientRequestOptions) {
  return await parseResponse(client.watch.episodes.$get(undefined, options))
}

export async function getWatchEpisodesPopular(options?: ClientRequestOptions) {
  return await parseResponse(client.watch.episodes.popular.$get(undefined, options))
}

export async function getWatchPromos(
  args: InferRequestType<typeof client.watch.promos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watch.promos.$get(args, options))
}

export async function getWatchPromosPopular(options?: ClientRequestOptions) {
  return await parseResponse(client.watch.promos.popular.$get(undefined, options))
}
