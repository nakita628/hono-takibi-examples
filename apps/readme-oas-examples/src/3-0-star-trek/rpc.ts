import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnimal(
  args: InferRequestType<typeof client.animal.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.animal.$get(args, options))
}

export async function getAnimalSearch(
  args: InferRequestType<typeof client.animal.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.animal.search.$get(args, options))
}

export async function postAnimalSearch(
  args: InferRequestType<typeof client.animal.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.animal.search.$post(args, options))
}

export async function getAstronomicalObject(
  args: InferRequestType<typeof client.astronomicalObject.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.astronomicalObject.$get(args, options))
}

export async function getAstronomicalObjectSearch(
  args: InferRequestType<typeof client.astronomicalObject.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.astronomicalObject.search.$get(args, options))
}

export async function postAstronomicalObjectSearch(
  args: InferRequestType<typeof client.astronomicalObject.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.astronomicalObject.search.$post(args, options))
}

export async function getBook(
  args: InferRequestType<typeof client.book.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.book.$get(args, options))
}

export async function getBookSearch(
  args: InferRequestType<typeof client.book.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.book.search.$get(args, options))
}

export async function postBookSearch(
  args: InferRequestType<typeof client.book.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.book.search.$post(args, options))
}

export async function getBookCollection(
  args: InferRequestType<typeof client.bookCollection.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookCollection.$get(args, options))
}

export async function getBookCollectionSearch(
  args: InferRequestType<typeof client.bookCollection.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookCollection.search.$get(args, options))
}

export async function postBookCollectionSearch(
  args: InferRequestType<typeof client.bookCollection.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookCollection.search.$post(args, options))
}

export async function getBookSeries(
  args: InferRequestType<typeof client.bookSeries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookSeries.$get(args, options))
}

export async function getBookSeriesSearch(
  args: InferRequestType<typeof client.bookSeries.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookSeries.search.$get(args, options))
}

export async function postBookSeriesSearch(
  args: InferRequestType<typeof client.bookSeries.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookSeries.search.$post(args, options))
}

export async function getCharacter(
  args: InferRequestType<typeof client.character.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.character.$get(args, options))
}

export async function getCharacterSearch(
  args: InferRequestType<typeof client.character.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.character.search.$get(args, options))
}

export async function postCharacterSearch(
  args: InferRequestType<typeof client.character.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.character.search.$post(args, options))
}

export async function getComics(
  args: InferRequestType<typeof client.comics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comics.$get(args, options))
}

export async function getComicsSearch(
  args: InferRequestType<typeof client.comics.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comics.search.$get(args, options))
}

export async function postComicsSearch(
  args: InferRequestType<typeof client.comics.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comics.search.$post(args, options))
}

export async function getComicCollection(
  args: InferRequestType<typeof client.comicCollection.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comicCollection.$get(args, options))
}

export async function getComicCollectionSearch(
  args: InferRequestType<typeof client.comicCollection.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comicCollection.search.$get(args, options))
}

export async function postComicCollectionSearch(
  args: InferRequestType<typeof client.comicCollection.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comicCollection.search.$post(args, options))
}

export async function getComicSeries(
  args: InferRequestType<typeof client.comicSeries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comicSeries.$get(args, options))
}

export async function getComicSeriesSearch(
  args: InferRequestType<typeof client.comicSeries.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comicSeries.search.$get(args, options))
}

export async function postComicSeriesSearch(
  args: InferRequestType<typeof client.comicSeries.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comicSeries.search.$post(args, options))
}

export async function getComicStrip(
  args: InferRequestType<typeof client.comicStrip.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comicStrip.$get(args, options))
}

export async function getComicStripSearch(
  args: InferRequestType<typeof client.comicStrip.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comicStrip.search.$get(args, options))
}

export async function postComicStripSearch(
  args: InferRequestType<typeof client.comicStrip.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comicStrip.search.$post(args, options))
}

export async function getCompany(
  args: InferRequestType<typeof client.company.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.$get(args, options))
}

export async function getCompanySearch(
  args: InferRequestType<typeof client.company.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.search.$get(args, options))
}

export async function postCompanySearch(
  args: InferRequestType<typeof client.company.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.company.search.$post(args, options))
}

export async function getConflict(
  args: InferRequestType<typeof client.conflict.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conflict.$get(args, options))
}

export async function getConflictSearch(
  args: InferRequestType<typeof client.conflict.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conflict.search.$get(args, options))
}

export async function postConflictSearch(
  args: InferRequestType<typeof client.conflict.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conflict.search.$post(args, options))
}

export async function getElement(
  args: InferRequestType<typeof client.element.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.element.$get(args, options))
}

export async function getElementSearch(
  args: InferRequestType<typeof client.element.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.element.search.$get(args, options))
}

export async function postElementSearch(
  args: InferRequestType<typeof client.element.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.element.search.$post(args, options))
}

export async function getEpisode(
  args: InferRequestType<typeof client.episode.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episode.$get(args, options))
}

export async function getEpisodeSearch(
  args: InferRequestType<typeof client.episode.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episode.search.$get(args, options))
}

export async function postEpisodeSearch(
  args: InferRequestType<typeof client.episode.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episode.search.$post(args, options))
}

export async function getFood(
  args: InferRequestType<typeof client.food.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.$get(args, options))
}

export async function getFoodSearch(
  args: InferRequestType<typeof client.food.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.search.$get(args, options))
}

export async function postFoodSearch(
  args: InferRequestType<typeof client.food.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.search.$post(args, options))
}

export async function getLiterature(
  args: InferRequestType<typeof client.literature.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.literature.$get(args, options))
}

export async function getLiteratureSearch(
  args: InferRequestType<typeof client.literature.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.literature.search.$get(args, options))
}

export async function postLiteratureSearch(
  args: InferRequestType<typeof client.literature.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.literature.search.$post(args, options))
}

export async function getLocation(
  args: InferRequestType<typeof client.location.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.location.$get(args, options))
}

export async function getLocationSearch(
  args: InferRequestType<typeof client.location.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.location.search.$get(args, options))
}

export async function postLocationSearch(
  args: InferRequestType<typeof client.location.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.location.search.$post(args, options))
}

export async function getMagazine(
  args: InferRequestType<typeof client.magazine.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.magazine.$get(args, options))
}

export async function getMagazineSearch(
  args: InferRequestType<typeof client.magazine.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.magazine.search.$get(args, options))
}

export async function postMagazineSearch(
  args: InferRequestType<typeof client.magazine.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.magazine.search.$post(args, options))
}

export async function getMagazineSeries(
  args: InferRequestType<typeof client.magazineSeries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.magazineSeries.$get(args, options))
}

export async function getMagazineSeriesSearch(
  args: InferRequestType<typeof client.magazineSeries.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.magazineSeries.search.$get(args, options))
}

export async function postMagazineSeriesSearch(
  args: InferRequestType<typeof client.magazineSeries.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.magazineSeries.search.$post(args, options))
}

export async function getMaterial(
  args: InferRequestType<typeof client.material.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.material.$get(args, options))
}

export async function getMaterialSearch(
  args: InferRequestType<typeof client.material.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.material.search.$get(args, options))
}

export async function postMaterialSearch(
  args: InferRequestType<typeof client.material.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.material.search.$post(args, options))
}

export async function getMedicalCondition(
  args: InferRequestType<typeof client.medicalCondition.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.medicalCondition.$get(args, options))
}

export async function getMedicalConditionSearch(
  args: InferRequestType<typeof client.medicalCondition.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.medicalCondition.search.$get(args, options))
}

export async function postMedicalConditionSearch(
  args: InferRequestType<typeof client.medicalCondition.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.medicalCondition.search.$post(args, options))
}

export async function getMovie(
  args: InferRequestType<typeof client.movie.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movie.$get(args, options))
}

export async function getMovieSearch(
  args: InferRequestType<typeof client.movie.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movie.search.$get(args, options))
}

export async function postMovieSearch(
  args: InferRequestType<typeof client.movie.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movie.search.$post(args, options))
}

export async function getOccupation(
  args: InferRequestType<typeof client.occupation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.occupation.$get(args, options))
}

export async function getOccupationSearch(
  args: InferRequestType<typeof client.occupation.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.occupation.search.$get(args, options))
}

export async function postOccupationSearch(
  args: InferRequestType<typeof client.occupation.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.occupation.search.$post(args, options))
}

export async function getOrganization(
  args: InferRequestType<typeof client.organization.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.$get(args, options))
}

export async function getOrganizationSearch(
  args: InferRequestType<typeof client.organization.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.search.$get(args, options))
}

export async function postOrganizationSearch(
  args: InferRequestType<typeof client.organization.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.search.$post(args, options))
}

export async function getPerformer(
  args: InferRequestType<typeof client.performer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.performer.$get(args, options))
}

export async function getPerformerSearch(
  args: InferRequestType<typeof client.performer.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.performer.search.$get(args, options))
}

export async function postPerformerSearch(
  args: InferRequestType<typeof client.performer.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.performer.search.$post(args, options))
}

export async function getSeason(
  args: InferRequestType<typeof client.season.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.season.$get(args, options))
}

export async function getSeasonSearch(
  args: InferRequestType<typeof client.season.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.season.search.$get(args, options))
}

export async function postSeasonSearch(
  args: InferRequestType<typeof client.season.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.season.search.$post(args, options))
}

export async function getSeries(
  args: InferRequestType<typeof client.series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series.$get(args, options))
}

export async function getSeriesSearch(
  args: InferRequestType<typeof client.series.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series.search.$get(args, options))
}

export async function postSeriesSearch(
  args: InferRequestType<typeof client.series.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series.search.$post(args, options))
}

export async function getSoundtrack(
  args: InferRequestType<typeof client.soundtrack.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.soundtrack.$get(args, options))
}

export async function getSoundtrackSearch(
  args: InferRequestType<typeof client.soundtrack.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.soundtrack.search.$get(args, options))
}

export async function postSoundtrackSearch(
  args: InferRequestType<typeof client.soundtrack.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.soundtrack.search.$post(args, options))
}

export async function getSpacecraft(
  args: InferRequestType<typeof client.spacecraft.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spacecraft.$get(args, options))
}

export async function getSpacecraftSearch(
  args: InferRequestType<typeof client.spacecraft.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spacecraft.search.$get(args, options))
}

export async function postSpacecraftSearch(
  args: InferRequestType<typeof client.spacecraft.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spacecraft.search.$post(args, options))
}

export async function getSpacecraftClass(
  args: InferRequestType<typeof client.spacecraftClass.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spacecraftClass.$get(args, options))
}

export async function getSpacecraftClassSearch(
  args: InferRequestType<typeof client.spacecraftClass.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spacecraftClass.search.$get(args, options))
}

export async function postSpacecraftClassSearch(
  args: InferRequestType<typeof client.spacecraftClass.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spacecraftClass.search.$post(args, options))
}

export async function getSpecies(
  args: InferRequestType<typeof client.species.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.species.$get(args, options))
}

export async function getSpeciesSearch(
  args: InferRequestType<typeof client.species.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.species.search.$get(args, options))
}

export async function postSpeciesSearch(
  args: InferRequestType<typeof client.species.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.species.search.$post(args, options))
}

export async function getStaff(
  args: InferRequestType<typeof client.staff.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.staff.$get(args, options))
}

export async function getStaffSearch(
  args: InferRequestType<typeof client.staff.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.staff.search.$get(args, options))
}

export async function postStaffSearch(
  args: InferRequestType<typeof client.staff.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.staff.search.$post(args, options))
}

export async function getTechnology(
  args: InferRequestType<typeof client.technology.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.technology.$get(args, options))
}

export async function getTechnologySearch(
  args: InferRequestType<typeof client.technology.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.technology.search.$get(args, options))
}

export async function postTechnologySearch(
  args: InferRequestType<typeof client.technology.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.technology.search.$post(args, options))
}

export async function getTitle(
  args: InferRequestType<typeof client.title.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.title.$get(args, options))
}

export async function getTitleSearch(
  args: InferRequestType<typeof client.title.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.title.search.$get(args, options))
}

export async function postTitleSearch(
  args: InferRequestType<typeof client.title.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.title.search.$post(args, options))
}

export async function getTradingCard(
  args: InferRequestType<typeof client.tradingCard.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tradingCard.$get(args, options))
}

export async function getTradingCardSearch(
  args: InferRequestType<typeof client.tradingCard.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tradingCard.search.$get(args, options))
}

export async function postTradingCardSearch(
  args: InferRequestType<typeof client.tradingCard.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tradingCard.search.$post(args, options))
}

export async function getTradingCardDeck(
  args: InferRequestType<typeof client.tradingCardDeck.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tradingCardDeck.$get(args, options))
}

export async function getTradingCardDeckSearch(
  args: InferRequestType<typeof client.tradingCardDeck.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tradingCardDeck.search.$get(args, options))
}

export async function postTradingCardDeckSearch(
  args: InferRequestType<typeof client.tradingCardDeck.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tradingCardDeck.search.$post(args, options))
}

export async function getTradingCardSet(
  args: InferRequestType<typeof client.tradingCardSet.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tradingCardSet.$get(args, options))
}

export async function getTradingCardSetSearch(
  args: InferRequestType<typeof client.tradingCardSet.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tradingCardSet.search.$get(args, options))
}

export async function postTradingCardSetSearch(
  args: InferRequestType<typeof client.tradingCardSet.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tradingCardSet.search.$post(args, options))
}

export async function getVideoGame(
  args: InferRequestType<typeof client.videoGame.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videoGame.$get(args, options))
}

export async function getVideoGameSearch(
  args: InferRequestType<typeof client.videoGame.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videoGame.search.$get(args, options))
}

export async function postVideoGameSearch(
  args: InferRequestType<typeof client.videoGame.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videoGame.search.$post(args, options))
}

export async function getVideoRelease(
  args: InferRequestType<typeof client.videoRelease.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videoRelease.$get(args, options))
}

export async function getVideoReleaseSearch(
  args: InferRequestType<typeof client.videoRelease.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videoRelease.search.$get(args, options))
}

export async function postVideoReleaseSearch(
  args: InferRequestType<typeof client.videoRelease.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.videoRelease.search.$post(args, options))
}

export async function getWeapon(
  args: InferRequestType<typeof client.weapon.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.weapon.$get(args, options))
}

export async function getWeaponSearch(
  args: InferRequestType<typeof client.weapon.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.weapon.search.$get(args, options))
}

export async function postWeaponSearch(
  args: InferRequestType<typeof client.weapon.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.weapon.search.$post(args, options))
}
