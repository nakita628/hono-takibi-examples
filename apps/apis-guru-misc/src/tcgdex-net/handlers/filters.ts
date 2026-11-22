import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from '../routes'

const app = new OpenAPIHono()

export const filtersHandler = app
  .openapi(getCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDexIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDexIdsDexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnergyTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnergyTypesEnergyTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHpHpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIllustratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIllustratorsIllustratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRaritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRaritiesRarityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegulationMarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegulationMarksRegulationMarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRetreatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRetreatsRetreatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesSerieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetsSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStagesStageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuffixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuffixesSuffixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrainerTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrainerTypesTrainerTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTypesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVariantsVariantRoute, (c) => {
    throw new Error('Not implemented')
  })
