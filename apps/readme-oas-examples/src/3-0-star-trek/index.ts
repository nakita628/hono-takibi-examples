import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnimalRoute,
  getAnimalSearchRoute,
  getAstronomicalObjectRoute,
  getAstronomicalObjectSearchRoute,
  getBookCollectionRoute,
  getBookCollectionSearchRoute,
  getBookRoute,
  getBookSearchRoute,
  getBookSeriesRoute,
  getBookSeriesSearchRoute,
  getCharacterRoute,
  getCharacterSearchRoute,
  getComicCollectionRoute,
  getComicCollectionSearchRoute,
  getComicSeriesRoute,
  getComicSeriesSearchRoute,
  getComicsRoute,
  getComicsSearchRoute,
  getComicStripRoute,
  getComicStripSearchRoute,
  getCompanyRoute,
  getCompanySearchRoute,
  getConflictRoute,
  getConflictSearchRoute,
  getElementRoute,
  getElementSearchRoute,
  getEpisodeRoute,
  getEpisodeSearchRoute,
  getFoodRoute,
  getFoodSearchRoute,
  getLiteratureRoute,
  getLiteratureSearchRoute,
  getLocationRoute,
  getLocationSearchRoute,
  getMagazineRoute,
  getMagazineSearchRoute,
  getMagazineSeriesRoute,
  getMagazineSeriesSearchRoute,
  getMaterialRoute,
  getMaterialSearchRoute,
  getMedicalConditionRoute,
  getMedicalConditionSearchRoute,
  getMovieRoute,
  getMovieSearchRoute,
  getOccupationRoute,
  getOccupationSearchRoute,
  getOrganizationRoute,
  getOrganizationSearchRoute,
  getPerformerRoute,
  getPerformerSearchRoute,
  getSeasonRoute,
  getSeasonSearchRoute,
  getSeriesRoute,
  getSeriesSearchRoute,
  getSoundtrackRoute,
  getSoundtrackSearchRoute,
  getSpacecraftClassRoute,
  getSpacecraftClassSearchRoute,
  getSpacecraftRoute,
  getSpacecraftSearchRoute,
  getSpeciesRoute,
  getSpeciesSearchRoute,
  getStaffRoute,
  getStaffSearchRoute,
  getTechnologyRoute,
  getTechnologySearchRoute,
  getTitleRoute,
  getTitleSearchRoute,
  getTradingCardDeckRoute,
  getTradingCardDeckSearchRoute,
  getTradingCardRoute,
  getTradingCardSearchRoute,
  getTradingCardSetRoute,
  getTradingCardSetSearchRoute,
  getVideoGameRoute,
  getVideoGameSearchRoute,
  getVideoReleaseRoute,
  getVideoReleaseSearchRoute,
  getWeaponRoute,
  getWeaponSearchRoute,
  postAnimalSearchRoute,
  postAstronomicalObjectSearchRoute,
  postBookCollectionSearchRoute,
  postBookSearchRoute,
  postBookSeriesSearchRoute,
  postCharacterSearchRoute,
  postComicCollectionSearchRoute,
  postComicSeriesSearchRoute,
  postComicsSearchRoute,
  postComicStripSearchRoute,
  postCompanySearchRoute,
  postConflictSearchRoute,
  postElementSearchRoute,
  postEpisodeSearchRoute,
  postFoodSearchRoute,
  postLiteratureSearchRoute,
  postLocationSearchRoute,
  postMagazineSearchRoute,
  postMagazineSeriesSearchRoute,
  postMaterialSearchRoute,
  postMedicalConditionSearchRoute,
  postMovieSearchRoute,
  postOccupationSearchRoute,
  postOrganizationSearchRoute,
  postPerformerSearchRoute,
  postSeasonSearchRoute,
  postSeriesSearchRoute,
  postSoundtrackSearchRoute,
  postSpacecraftClassSearchRoute,
  postSpacecraftSearchRoute,
  postSpeciesSearchRoute,
  postStaffSearchRoute,
  postTechnologySearchRoute,
  postTitleSearchRoute,
  postTradingCardDeckSearchRoute,
  postTradingCardSearchRoute,
  postTradingCardSetSearchRoute,
  postVideoGameSearchRoute,
  postVideoReleaseSearchRoute,
  postWeaponSearchRoute,
} from './routes'
import {
  getAnimalRouteHandler,
  getAnimalSearchRouteHandler,
  getAstronomicalObjectRouteHandler,
  getAstronomicalObjectSearchRouteHandler,
  getBookCollectionRouteHandler,
  getBookCollectionSearchRouteHandler,
  getBookRouteHandler,
  getBookSearchRouteHandler,
  getBookSeriesRouteHandler,
  getBookSeriesSearchRouteHandler,
  getCharacterRouteHandler,
  getCharacterSearchRouteHandler,
  getComicCollectionRouteHandler,
  getComicCollectionSearchRouteHandler,
  getComicSeriesRouteHandler,
  getComicSeriesSearchRouteHandler,
  getComicsRouteHandler,
  getComicsSearchRouteHandler,
  getComicStripRouteHandler,
  getComicStripSearchRouteHandler,
  getCompanyRouteHandler,
  getCompanySearchRouteHandler,
  getConflictRouteHandler,
  getConflictSearchRouteHandler,
  getElementRouteHandler,
  getElementSearchRouteHandler,
  getEpisodeRouteHandler,
  getEpisodeSearchRouteHandler,
  getFoodRouteHandler,
  getFoodSearchRouteHandler,
  getLiteratureRouteHandler,
  getLiteratureSearchRouteHandler,
  getLocationRouteHandler,
  getLocationSearchRouteHandler,
  getMagazineRouteHandler,
  getMagazineSearchRouteHandler,
  getMagazineSeriesRouteHandler,
  getMagazineSeriesSearchRouteHandler,
  getMaterialRouteHandler,
  getMaterialSearchRouteHandler,
  getMedicalConditionRouteHandler,
  getMedicalConditionSearchRouteHandler,
  getMovieRouteHandler,
  getMovieSearchRouteHandler,
  getOccupationRouteHandler,
  getOccupationSearchRouteHandler,
  getOrganizationRouteHandler,
  getOrganizationSearchRouteHandler,
  getPerformerRouteHandler,
  getPerformerSearchRouteHandler,
  getSeasonRouteHandler,
  getSeasonSearchRouteHandler,
  getSeriesRouteHandler,
  getSeriesSearchRouteHandler,
  getSoundtrackRouteHandler,
  getSoundtrackSearchRouteHandler,
  getSpacecraftClassRouteHandler,
  getSpacecraftClassSearchRouteHandler,
  getSpacecraftRouteHandler,
  getSpacecraftSearchRouteHandler,
  getSpeciesRouteHandler,
  getSpeciesSearchRouteHandler,
  getStaffRouteHandler,
  getStaffSearchRouteHandler,
  getTechnologyRouteHandler,
  getTechnologySearchRouteHandler,
  getTitleRouteHandler,
  getTitleSearchRouteHandler,
  getTradingCardDeckRouteHandler,
  getTradingCardDeckSearchRouteHandler,
  getTradingCardRouteHandler,
  getTradingCardSearchRouteHandler,
  getTradingCardSetRouteHandler,
  getTradingCardSetSearchRouteHandler,
  getVideoGameRouteHandler,
  getVideoGameSearchRouteHandler,
  getVideoReleaseRouteHandler,
  getVideoReleaseSearchRouteHandler,
  getWeaponRouteHandler,
  getWeaponSearchRouteHandler,
  postAnimalSearchRouteHandler,
  postAstronomicalObjectSearchRouteHandler,
  postBookCollectionSearchRouteHandler,
  postBookSearchRouteHandler,
  postBookSeriesSearchRouteHandler,
  postCharacterSearchRouteHandler,
  postComicCollectionSearchRouteHandler,
  postComicSeriesSearchRouteHandler,
  postComicsSearchRouteHandler,
  postComicStripSearchRouteHandler,
  postCompanySearchRouteHandler,
  postConflictSearchRouteHandler,
  postElementSearchRouteHandler,
  postEpisodeSearchRouteHandler,
  postFoodSearchRouteHandler,
  postLiteratureSearchRouteHandler,
  postLocationSearchRouteHandler,
  postMagazineSearchRouteHandler,
  postMagazineSeriesSearchRouteHandler,
  postMaterialSearchRouteHandler,
  postMedicalConditionSearchRouteHandler,
  postMovieSearchRouteHandler,
  postOccupationSearchRouteHandler,
  postOrganizationSearchRouteHandler,
  postPerformerSearchRouteHandler,
  postSeasonSearchRouteHandler,
  postSeriesSearchRouteHandler,
  postSoundtrackSearchRouteHandler,
  postSpacecraftClassSearchRouteHandler,
  postSpacecraftSearchRouteHandler,
  postSpeciesSearchRouteHandler,
  postStaffSearchRouteHandler,
  postTechnologySearchRouteHandler,
  postTitleSearchRouteHandler,
  postTradingCardDeckSearchRouteHandler,
  postTradingCardSearchRouteHandler,
  postTradingCardSetSearchRouteHandler,
  postVideoGameSearchRouteHandler,
  postVideoReleaseSearchRouteHandler,
  postWeaponSearchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAnimalRoute, getAnimalRouteHandler)
  .openapi(getAnimalSearchRoute, getAnimalSearchRouteHandler)
  .openapi(postAnimalSearchRoute, postAnimalSearchRouteHandler)
  .openapi(getAstronomicalObjectRoute, getAstronomicalObjectRouteHandler)
  .openapi(getAstronomicalObjectSearchRoute, getAstronomicalObjectSearchRouteHandler)
  .openapi(postAstronomicalObjectSearchRoute, postAstronomicalObjectSearchRouteHandler)
  .openapi(getBookRoute, getBookRouteHandler)
  .openapi(getBookSearchRoute, getBookSearchRouteHandler)
  .openapi(postBookSearchRoute, postBookSearchRouteHandler)
  .openapi(getBookCollectionRoute, getBookCollectionRouteHandler)
  .openapi(getBookCollectionSearchRoute, getBookCollectionSearchRouteHandler)
  .openapi(postBookCollectionSearchRoute, postBookCollectionSearchRouteHandler)
  .openapi(getBookSeriesRoute, getBookSeriesRouteHandler)
  .openapi(getBookSeriesSearchRoute, getBookSeriesSearchRouteHandler)
  .openapi(postBookSeriesSearchRoute, postBookSeriesSearchRouteHandler)
  .openapi(getCharacterRoute, getCharacterRouteHandler)
  .openapi(getCharacterSearchRoute, getCharacterSearchRouteHandler)
  .openapi(postCharacterSearchRoute, postCharacterSearchRouteHandler)
  .openapi(getComicsRoute, getComicsRouteHandler)
  .openapi(getComicsSearchRoute, getComicsSearchRouteHandler)
  .openapi(postComicsSearchRoute, postComicsSearchRouteHandler)
  .openapi(getComicCollectionRoute, getComicCollectionRouteHandler)
  .openapi(getComicCollectionSearchRoute, getComicCollectionSearchRouteHandler)
  .openapi(postComicCollectionSearchRoute, postComicCollectionSearchRouteHandler)
  .openapi(getComicSeriesRoute, getComicSeriesRouteHandler)
  .openapi(getComicSeriesSearchRoute, getComicSeriesSearchRouteHandler)
  .openapi(postComicSeriesSearchRoute, postComicSeriesSearchRouteHandler)
  .openapi(getComicStripRoute, getComicStripRouteHandler)
  .openapi(getComicStripSearchRoute, getComicStripSearchRouteHandler)
  .openapi(postComicStripSearchRoute, postComicStripSearchRouteHandler)
  .openapi(getCompanyRoute, getCompanyRouteHandler)
  .openapi(getCompanySearchRoute, getCompanySearchRouteHandler)
  .openapi(postCompanySearchRoute, postCompanySearchRouteHandler)
  .openapi(getConflictRoute, getConflictRouteHandler)
  .openapi(getConflictSearchRoute, getConflictSearchRouteHandler)
  .openapi(postConflictSearchRoute, postConflictSearchRouteHandler)
  .openapi(getElementRoute, getElementRouteHandler)
  .openapi(getElementSearchRoute, getElementSearchRouteHandler)
  .openapi(postElementSearchRoute, postElementSearchRouteHandler)
  .openapi(getEpisodeRoute, getEpisodeRouteHandler)
  .openapi(getEpisodeSearchRoute, getEpisodeSearchRouteHandler)
  .openapi(postEpisodeSearchRoute, postEpisodeSearchRouteHandler)
  .openapi(getFoodRoute, getFoodRouteHandler)
  .openapi(getFoodSearchRoute, getFoodSearchRouteHandler)
  .openapi(postFoodSearchRoute, postFoodSearchRouteHandler)
  .openapi(getLiteratureRoute, getLiteratureRouteHandler)
  .openapi(getLiteratureSearchRoute, getLiteratureSearchRouteHandler)
  .openapi(postLiteratureSearchRoute, postLiteratureSearchRouteHandler)
  .openapi(getLocationRoute, getLocationRouteHandler)
  .openapi(getLocationSearchRoute, getLocationSearchRouteHandler)
  .openapi(postLocationSearchRoute, postLocationSearchRouteHandler)
  .openapi(getMagazineRoute, getMagazineRouteHandler)
  .openapi(getMagazineSearchRoute, getMagazineSearchRouteHandler)
  .openapi(postMagazineSearchRoute, postMagazineSearchRouteHandler)
  .openapi(getMagazineSeriesRoute, getMagazineSeriesRouteHandler)
  .openapi(getMagazineSeriesSearchRoute, getMagazineSeriesSearchRouteHandler)
  .openapi(postMagazineSeriesSearchRoute, postMagazineSeriesSearchRouteHandler)
  .openapi(getMaterialRoute, getMaterialRouteHandler)
  .openapi(getMaterialSearchRoute, getMaterialSearchRouteHandler)
  .openapi(postMaterialSearchRoute, postMaterialSearchRouteHandler)
  .openapi(getMedicalConditionRoute, getMedicalConditionRouteHandler)
  .openapi(getMedicalConditionSearchRoute, getMedicalConditionSearchRouteHandler)
  .openapi(postMedicalConditionSearchRoute, postMedicalConditionSearchRouteHandler)
  .openapi(getMovieRoute, getMovieRouteHandler)
  .openapi(getMovieSearchRoute, getMovieSearchRouteHandler)
  .openapi(postMovieSearchRoute, postMovieSearchRouteHandler)
  .openapi(getOccupationRoute, getOccupationRouteHandler)
  .openapi(getOccupationSearchRoute, getOccupationSearchRouteHandler)
  .openapi(postOccupationSearchRoute, postOccupationSearchRouteHandler)
  .openapi(getOrganizationRoute, getOrganizationRouteHandler)
  .openapi(getOrganizationSearchRoute, getOrganizationSearchRouteHandler)
  .openapi(postOrganizationSearchRoute, postOrganizationSearchRouteHandler)
  .openapi(getPerformerRoute, getPerformerRouteHandler)
  .openapi(getPerformerSearchRoute, getPerformerSearchRouteHandler)
  .openapi(postPerformerSearchRoute, postPerformerSearchRouteHandler)
  .openapi(getSeasonRoute, getSeasonRouteHandler)
  .openapi(getSeasonSearchRoute, getSeasonSearchRouteHandler)
  .openapi(postSeasonSearchRoute, postSeasonSearchRouteHandler)
  .openapi(getSeriesRoute, getSeriesRouteHandler)
  .openapi(getSeriesSearchRoute, getSeriesSearchRouteHandler)
  .openapi(postSeriesSearchRoute, postSeriesSearchRouteHandler)
  .openapi(getSoundtrackRoute, getSoundtrackRouteHandler)
  .openapi(getSoundtrackSearchRoute, getSoundtrackSearchRouteHandler)
  .openapi(postSoundtrackSearchRoute, postSoundtrackSearchRouteHandler)
  .openapi(getSpacecraftRoute, getSpacecraftRouteHandler)
  .openapi(getSpacecraftSearchRoute, getSpacecraftSearchRouteHandler)
  .openapi(postSpacecraftSearchRoute, postSpacecraftSearchRouteHandler)
  .openapi(getSpacecraftClassRoute, getSpacecraftClassRouteHandler)
  .openapi(getSpacecraftClassSearchRoute, getSpacecraftClassSearchRouteHandler)
  .openapi(postSpacecraftClassSearchRoute, postSpacecraftClassSearchRouteHandler)
  .openapi(getSpeciesRoute, getSpeciesRouteHandler)
  .openapi(getSpeciesSearchRoute, getSpeciesSearchRouteHandler)
  .openapi(postSpeciesSearchRoute, postSpeciesSearchRouteHandler)
  .openapi(getStaffRoute, getStaffRouteHandler)
  .openapi(getStaffSearchRoute, getStaffSearchRouteHandler)
  .openapi(postStaffSearchRoute, postStaffSearchRouteHandler)
  .openapi(getTechnologyRoute, getTechnologyRouteHandler)
  .openapi(getTechnologySearchRoute, getTechnologySearchRouteHandler)
  .openapi(postTechnologySearchRoute, postTechnologySearchRouteHandler)
  .openapi(getTitleRoute, getTitleRouteHandler)
  .openapi(getTitleSearchRoute, getTitleSearchRouteHandler)
  .openapi(postTitleSearchRoute, postTitleSearchRouteHandler)
  .openapi(getTradingCardRoute, getTradingCardRouteHandler)
  .openapi(getTradingCardSearchRoute, getTradingCardSearchRouteHandler)
  .openapi(postTradingCardSearchRoute, postTradingCardSearchRouteHandler)
  .openapi(getTradingCardDeckRoute, getTradingCardDeckRouteHandler)
  .openapi(getTradingCardDeckSearchRoute, getTradingCardDeckSearchRouteHandler)
  .openapi(postTradingCardDeckSearchRoute, postTradingCardDeckSearchRouteHandler)
  .openapi(getTradingCardSetRoute, getTradingCardSetRouteHandler)
  .openapi(getTradingCardSetSearchRoute, getTradingCardSetSearchRouteHandler)
  .openapi(postTradingCardSetSearchRoute, postTradingCardSetSearchRouteHandler)
  .openapi(getVideoGameRoute, getVideoGameRouteHandler)
  .openapi(getVideoGameSearchRoute, getVideoGameSearchRouteHandler)
  .openapi(postVideoGameSearchRoute, postVideoGameSearchRouteHandler)
  .openapi(getVideoReleaseRoute, getVideoReleaseRouteHandler)
  .openapi(getVideoReleaseSearchRoute, getVideoReleaseSearchRouteHandler)
  .openapi(postVideoReleaseSearchRoute, postVideoReleaseSearchRouteHandler)
  .openapi(getWeaponRoute, getWeaponRouteHandler)
  .openapi(getWeaponSearchRoute, getWeaponSearchRouteHandler)
  .openapi(postWeaponSearchRoute, postWeaponSearchRouteHandler)

export default app
