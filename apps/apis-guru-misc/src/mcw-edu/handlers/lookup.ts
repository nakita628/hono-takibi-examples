import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLookupGeneTypesRoute,
  getLookupIdMapEnsemblGeneRgdIdRoute,
  getLookupIdMapEnsemblProteinRgdIdRoute,
  getLookupIdMapEnsemblTranscriptRgdIdRoute,
  getLookupIdMapGenBankNucleotideRgdIdRoute,
  getLookupIdMapGenBankProteinRgdIdRoute,
  getLookupIdMapGTExRgdIdRoute,
  getLookupIdMapHGNCRgdIdRoute,
  getLookupIdMapMGIRgdIdRoute,
  getLookupIdMapNCBIGeneRgdIdRoute,
  getLookupIdMapUniProtRgdIdRoute,
  getLookupMapsSpeciesTypeKeyRoute,
  getLookupSpeciesTypeKeysRoute,
  getLookupStandardUnitAccIdRoute,
  postLookupIdMapEnsemblGeneRoute,
  postLookupIdMapEnsemblProteinRoute,
  postLookupIdMapEnsemblTranscriptRoute,
  postLookupIdMapGenBankNucleotideRoute,
  postLookupIdMapGenBankProteinRoute,
  postLookupIdMapGTExRoute,
  postLookupIdMapHGNCRoute,
  postLookupIdMapMGIRoute,
  postLookupIdMapNCBIGeneRoute,
  postLookupIdMapUniProtRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lookupHandler = app
  .openapi(getLookupGeneTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLookupIdMapEnsemblGeneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupIdMapEnsemblGeneRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLookupIdMapEnsemblProteinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupIdMapEnsemblProteinRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLookupIdMapEnsemblTranscriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupIdMapEnsemblTranscriptRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLookupIdMapGTExRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupIdMapGTExRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLookupIdMapGenBankNucleotideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupIdMapGenBankNucleotideRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLookupIdMapGenBankProteinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupIdMapGenBankProteinRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLookupIdMapHGNCRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupIdMapHGNCRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLookupIdMapMGIRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupIdMapMGIRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLookupIdMapNCBIGeneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupIdMapNCBIGeneRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLookupIdMapUniProtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupIdMapUniProtRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupMapsSpeciesTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupSpeciesTypeKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupStandardUnitAccIdRoute, (c) => {
    throw new Error('Not implemented')
  })
