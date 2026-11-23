import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGovernanceCommitteeCcIdVotesRoute,
  getGovernanceCommitteeRoute,
  getGovernanceCommitteeVotesRoute,
  getGovernanceDrepsDrepIdDelegatorsRoute,
  getGovernanceDrepsDrepIdMetadataRoute,
  getGovernanceDrepsDrepIdRoute,
  getGovernanceDrepsDrepIdUpdatesRoute,
  getGovernanceDrepsDrepIdVotesRoute,
  getGovernanceDrepsRoute,
  getGovernanceProposalsGovActionIdMetadataRoute,
  getGovernanceProposalsGovActionIdParametersRoute,
  getGovernanceProposalsGovActionIdRoute,
  getGovernanceProposalsGovActionIdVotesRoute,
  getGovernanceProposalsGovActionIdWithdrawalsRoute,
  getGovernanceProposalsRoute,
  getGovernanceProposalsTxHashCertIndexMetadataRoute,
  getGovernanceProposalsTxHashCertIndexParametersRoute,
  getGovernanceProposalsTxHashCertIndexRoute,
  getGovernanceProposalsTxHashCertIndexVotesRoute,
  getGovernanceProposalsTxHashCertIndexWithdrawalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const governanceHandler = app
  .openapi(getGovernanceCommitteeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceCommitteeVotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceCommitteeCcIdVotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceDrepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceDrepsDrepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceDrepsDrepIdDelegatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceDrepsDrepIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceDrepsDrepIdUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceDrepsDrepIdVotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceProposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceProposalsTxHashCertIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceProposalsTxHashCertIndexParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceProposalsTxHashCertIndexWithdrawalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceProposalsTxHashCertIndexVotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceProposalsTxHashCertIndexMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceProposalsGovActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceProposalsGovActionIdParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceProposalsGovActionIdWithdrawalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceProposalsGovActionIdVotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovernanceProposalsGovActionIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
