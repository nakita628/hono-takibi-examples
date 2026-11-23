import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCardsCardIdRoute,
  getCardsRoute,
  getCategoriesCategoryRoute,
  getCategoriesRoute,
  getDexIdsDexIdRoute,
  getDexIdsRoute,
  getEnergyTypesEnergyTypeRoute,
  getEnergyTypesRoute,
  getHpHpRoute,
  getHpRoute,
  getIllustratorsIllustratorRoute,
  getIllustratorsRoute,
  getRaritiesRarityRoute,
  getRaritiesRoute,
  getRegulationMarksRegulationMarkRoute,
  getRegulationMarksRoute,
  getRetreatsRetreatRoute,
  getRetreatsRoute,
  getSeriesRoute,
  getSeriesSerieRoute,
  getSetsRoute,
  getSetsSetCardLocalIdRoute,
  getSetsSetRoute,
  getStagesRoute,
  getStagesStageRoute,
  getSuffixesRoute,
  getSuffixesSuffixRoute,
  getTrainerTypesRoute,
  getTrainerTypesTrainerTypeRoute,
  getTypesRoute,
  getTypesTypeRoute,
  getVariantsRoute,
  getVariantsVariantRoute,
} from './routes'
import {
  getCardsCardIdRouteHandler,
  getCardsRouteHandler,
  getCategoriesCategoryRouteHandler,
  getCategoriesRouteHandler,
  getDexIdsDexIdRouteHandler,
  getDexIdsRouteHandler,
  getEnergyTypesEnergyTypeRouteHandler,
  getEnergyTypesRouteHandler,
  getHpHpRouteHandler,
  getHpRouteHandler,
  getIllustratorsIllustratorRouteHandler,
  getIllustratorsRouteHandler,
  getRaritiesRarityRouteHandler,
  getRaritiesRouteHandler,
  getRegulationMarksRegulationMarkRouteHandler,
  getRegulationMarksRouteHandler,
  getRetreatsRetreatRouteHandler,
  getRetreatsRouteHandler,
  getSeriesRouteHandler,
  getSeriesSerieRouteHandler,
  getSetsRouteHandler,
  getSetsSetCardLocalIdRouteHandler,
  getSetsSetRouteHandler,
  getStagesRouteHandler,
  getStagesStageRouteHandler,
  getSuffixesRouteHandler,
  getSuffixesSuffixRouteHandler,
  getTrainerTypesRouteHandler,
  getTrainerTypesTrainerTypeRouteHandler,
  getTypesRouteHandler,
  getTypesTypeRouteHandler,
  getVariantsRouteHandler,
  getVariantsVariantRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCardsRoute, getCardsRouteHandler)
  .openapi(getCardsCardIdRoute, getCardsCardIdRouteHandler)
  .openapi(getCategoriesRoute, getCategoriesRouteHandler)
  .openapi(getCategoriesCategoryRoute, getCategoriesCategoryRouteHandler)
  .openapi(getDexIdsRoute, getDexIdsRouteHandler)
  .openapi(getDexIdsDexIdRoute, getDexIdsDexIdRouteHandler)
  .openapi(getEnergyTypesRoute, getEnergyTypesRouteHandler)
  .openapi(getEnergyTypesEnergyTypeRoute, getEnergyTypesEnergyTypeRouteHandler)
  .openapi(getHpRoute, getHpRouteHandler)
  .openapi(getHpHpRoute, getHpHpRouteHandler)
  .openapi(getIllustratorsRoute, getIllustratorsRouteHandler)
  .openapi(getIllustratorsIllustratorRoute, getIllustratorsIllustratorRouteHandler)
  .openapi(getRaritiesRoute, getRaritiesRouteHandler)
  .openapi(getRaritiesRarityRoute, getRaritiesRarityRouteHandler)
  .openapi(getRegulationMarksRoute, getRegulationMarksRouteHandler)
  .openapi(getRegulationMarksRegulationMarkRoute, getRegulationMarksRegulationMarkRouteHandler)
  .openapi(getRetreatsRoute, getRetreatsRouteHandler)
  .openapi(getRetreatsRetreatRoute, getRetreatsRetreatRouteHandler)
  .openapi(getSeriesRoute, getSeriesRouteHandler)
  .openapi(getSeriesSerieRoute, getSeriesSerieRouteHandler)
  .openapi(getSetsRoute, getSetsRouteHandler)
  .openapi(getSetsSetRoute, getSetsSetRouteHandler)
  .openapi(getSetsSetCardLocalIdRoute, getSetsSetCardLocalIdRouteHandler)
  .openapi(getStagesRoute, getStagesRouteHandler)
  .openapi(getStagesStageRoute, getStagesStageRouteHandler)
  .openapi(getSuffixesRoute, getSuffixesRouteHandler)
  .openapi(getSuffixesSuffixRoute, getSuffixesSuffixRouteHandler)
  .openapi(getTrainerTypesRoute, getTrainerTypesRouteHandler)
  .openapi(getTrainerTypesTrainerTypeRoute, getTrainerTypesTrainerTypeRouteHandler)
  .openapi(getTypesRoute, getTypesRouteHandler)
  .openapi(getTypesTypeRoute, getTypesTypeRouteHandler)
  .openapi(getVariantsRoute, getVariantsRouteHandler)
  .openapi(getVariantsVariantRoute, getVariantsVariantRouteHandler)

export default app
