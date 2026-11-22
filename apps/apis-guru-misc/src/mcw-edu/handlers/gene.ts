import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGenesAffyIdAffyIdSpeciesTypeKeyRoute,
  getGenesAliasAliasSymbolSpeciesTypeKeyRoute,
  getGenesAlleleRgdIdRoute,
  getGenesAnnotationAccIdRoute,
  getGenesAnnotationAccIdSpeciesTypeKeyRoute,
  getGenesChrStartStopMapKeyRoute,
  getGenesKeywordKeywordSpeciesTypeKeyRoute,
  getGenesMapMapKeyRoute,
  getGenesMappedChrStartStopMapKeyRoute,
  getGenesOrthologsRgdIdRoute,
  getGenesRegionChrStartStopMapKeyRoute,
  getGenesRgdIdRoute,
  getGenesSpeciesSpeciesTypeKeyRoute,
  getGenesSymbolSpeciesTypeKeyRoute,
  postGenesAnnotationRoute,
  postGenesOrthologsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const geneHandler = app
  .openapi(getGenesAffyIdAffyIdSpeciesTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenesAliasAliasSymbolSpeciesTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenesAlleleRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGenesAnnotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenesAnnotationAccIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenesAnnotationAccIdSpeciesTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenesKeywordKeywordSpeciesTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenesMapMapKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenesMappedChrStartStopMapKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGenesOrthologsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenesOrthologsRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenesRegionChrStartStopMapKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenesSpeciesSpeciesTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenesChrStartStopMapKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenesRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenesSymbolSpeciesTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
