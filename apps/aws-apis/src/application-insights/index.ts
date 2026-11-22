import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetEC2WindowsBarleyServiceCreateApplicationHandler,
  XAmzTargetEC2WindowsBarleyServiceCreateComponentHandler,
  XAmzTargetEC2WindowsBarleyServiceCreateLogPatternHandler,
  XAmzTargetEC2WindowsBarleyServiceDeleteApplicationHandler,
  XAmzTargetEC2WindowsBarleyServiceDeleteComponentHandler,
  XAmzTargetEC2WindowsBarleyServiceDeleteLogPatternHandler,
  XAmzTargetEC2WindowsBarleyServiceDescribeApplicationHandler,
  XAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationHandler,
  XAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendationHandler,
  XAmzTargetEC2WindowsBarleyServiceDescribeComponentHandler,
  XAmzTargetEC2WindowsBarleyServiceDescribeLogPatternHandler,
  XAmzTargetEC2WindowsBarleyServiceDescribeObservationHandler,
  XAmzTargetEC2WindowsBarleyServiceDescribeProblemHandler,
  XAmzTargetEC2WindowsBarleyServiceDescribeProblemObservationsHandler,
  XAmzTargetEC2WindowsBarleyServiceListApplicationsHandler,
  XAmzTargetEC2WindowsBarleyServiceListComponentsHandler,
  XAmzTargetEC2WindowsBarleyServiceListConfigurationHistoryHandler,
  XAmzTargetEC2WindowsBarleyServiceListLogPatternSetsHandler,
  XAmzTargetEC2WindowsBarleyServiceListLogPatternsHandler,
  XAmzTargetEC2WindowsBarleyServiceListProblemsHandler,
  XAmzTargetEC2WindowsBarleyServiceListTagsForResourceHandler,
  XAmzTargetEC2WindowsBarleyServiceTagResourceHandler,
  XAmzTargetEC2WindowsBarleyServiceUntagResourceHandler,
  XAmzTargetEC2WindowsBarleyServiceUpdateApplicationHandler,
  XAmzTargetEC2WindowsBarleyServiceUpdateComponentConfigurationHandler,
  XAmzTargetEC2WindowsBarleyServiceUpdateComponentHandler,
  XAmzTargetEC2WindowsBarleyServiceUpdateLogPatternHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetEC2WindowsBarleyServiceCreateApplicationHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceCreateComponentHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceCreateLogPatternHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceDeleteApplicationHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceDeleteComponentHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceDeleteLogPatternHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceDescribeApplicationHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceDescribeComponentHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendationHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceDescribeLogPatternHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceDescribeObservationHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceDescribeProblemHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceDescribeProblemObservationsHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceListApplicationsHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceListComponentsHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceListConfigurationHistoryHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceListLogPatternSetsHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceListLogPatternsHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceListProblemsHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceListTagsForResourceHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceTagResourceHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceUntagResourceHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceUpdateApplicationHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceUpdateComponentHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceUpdateComponentConfigurationHandler)
  .route('/', XAmzTargetEC2WindowsBarleyServiceUpdateLogPatternHandler)

export default app
