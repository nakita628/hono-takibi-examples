import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSShineFrontendService20170701CreateParallelDataHandler,
  XAmzTargetAWSShineFrontendService20170701DeleteParallelDataHandler,
  XAmzTargetAWSShineFrontendService20170701DeleteTerminologyHandler,
  XAmzTargetAWSShineFrontendService20170701DescribeTextTranslationJobHandler,
  XAmzTargetAWSShineFrontendService20170701GetParallelDataHandler,
  XAmzTargetAWSShineFrontendService20170701GetTerminologyHandler,
  XAmzTargetAWSShineFrontendService20170701ImportTerminologyHandler,
  XAmzTargetAWSShineFrontendService20170701ListLanguagesHandler,
  XAmzTargetAWSShineFrontendService20170701ListParallelDataHandler,
  XAmzTargetAWSShineFrontendService20170701ListTagsForResourceHandler,
  XAmzTargetAWSShineFrontendService20170701ListTerminologiesHandler,
  XAmzTargetAWSShineFrontendService20170701ListTextTranslationJobsHandler,
  XAmzTargetAWSShineFrontendService20170701StartTextTranslationJobHandler,
  XAmzTargetAWSShineFrontendService20170701StopTextTranslationJobHandler,
  XAmzTargetAWSShineFrontendService20170701TagResourceHandler,
  XAmzTargetAWSShineFrontendService20170701TranslateDocumentHandler,
  XAmzTargetAWSShineFrontendService20170701TranslateTextHandler,
  XAmzTargetAWSShineFrontendService20170701UntagResourceHandler,
  XAmzTargetAWSShineFrontendService20170701UpdateParallelDataHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSShineFrontendService20170701CreateParallelDataHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701DeleteParallelDataHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701DeleteTerminologyHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701DescribeTextTranslationJobHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701GetParallelDataHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701GetTerminologyHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701ImportTerminologyHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701ListLanguagesHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701ListParallelDataHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701ListTagsForResourceHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701ListTerminologiesHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701ListTextTranslationJobsHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701StartTextTranslationJobHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701StopTextTranslationJobHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701TagResourceHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701TranslateDocumentHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701TranslateTextHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701UntagResourceHandler)
  .route('/', XAmzTargetAWSShineFrontendService20170701UpdateParallelDataHandler)

export default app
