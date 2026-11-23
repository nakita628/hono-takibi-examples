import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAquiferCodesDemandIndexRoute,
  getAquiferCodesMaterialsIndexRoute,
  getAquiferCodesProductivityIndexRoute,
  getAquiferCodesQualityConcernsIndexRoute,
  getAquiferCodesSubtypesIndexRoute,
  getAquiferCodesVulnerabilityIndexRoute,
  getAquiferCodesWaterUseIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aquiferCodesHandler = app
  .openapi(getAquiferCodesDemandIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAquiferCodesMaterialsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAquiferCodesProductivityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAquiferCodesQualityConcernsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAquiferCodesSubtypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAquiferCodesVulnerabilityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAquiferCodesWaterUseIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
