import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20200531CachePolicyIdRoute,
  delete20200531ContinuousDeploymentPolicyIdRoute,
  delete20200531DistributionIdRoute,
  delete20200531DistributionsDistributionIdMonitoringSubscriptionIndexRoute,
  delete20200531FieldLevelEncryptionIdRoute,
  delete20200531FieldLevelEncryptionProfileIdRoute,
  delete20200531FunctionNameIfMatchRoute,
  delete20200531KeyGroupIdRoute,
  delete20200531OriginAccessControlIdRoute,
  delete20200531OriginAccessIdentityCloudfrontIdRoute,
  delete20200531OriginRequestPolicyIdRoute,
  delete20200531PublicKeyIdRoute,
  delete20200531ResponseHeadersPolicyIdRoute,
  delete20200531StreamingDistributionIdRoute,
  get20200531CachePolicyIdConfigRoute,
  get20200531CachePolicyIdRoute,
  get20200531CachePolicyRoute,
  get20200531ConflictingAliasDistributionIdAliasRoute,
  get20200531ContinuousDeploymentPolicyIdConfigRoute,
  get20200531ContinuousDeploymentPolicyIdRoute,
  get20200531ContinuousDeploymentPolicyRoute,
  get20200531DistributionDistributionIdInvalidationIdRoute,
  get20200531DistributionDistributionIdInvalidationRoute,
  get20200531DistributionIdConfigRoute,
  get20200531DistributionIdRoute,
  get20200531DistributionRoute,
  get20200531DistributionsByCachePolicyIdCachePolicyIdRoute,
  get20200531DistributionsByKeyGroupIdKeyGroupIdRoute,
  get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdRoute,
  get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdRoute,
  get20200531DistributionsByWebACLIdWebACLIdRoute,
  get20200531DistributionsDistributionIdMonitoringSubscriptionIndexRoute,
  get20200531FieldLevelEncryptionIdConfigRoute,
  get20200531FieldLevelEncryptionIdRoute,
  get20200531FieldLevelEncryptionProfileIdConfigRoute,
  get20200531FieldLevelEncryptionProfileIdRoute,
  get20200531FieldLevelEncryptionProfileRoute,
  get20200531FieldLevelEncryptionRoute,
  get20200531FunctionNameDescribeRoute,
  get20200531FunctionNameRoute,
  get20200531FunctionRoute,
  get20200531KeyGroupIdConfigRoute,
  get20200531KeyGroupIdRoute,
  get20200531KeyGroupRoute,
  get20200531OriginAccessControlIdConfigRoute,
  get20200531OriginAccessControlIdRoute,
  get20200531OriginAccessControlRoute,
  get20200531OriginAccessIdentityCloudfrontIdConfigRoute,
  get20200531OriginAccessIdentityCloudfrontIdRoute,
  get20200531OriginAccessIdentityCloudfrontRoute,
  get20200531OriginRequestPolicyIdConfigRoute,
  get20200531OriginRequestPolicyIdRoute,
  get20200531OriginRequestPolicyRoute,
  get20200531PublicKeyIdConfigRoute,
  get20200531PublicKeyIdRoute,
  get20200531PublicKeyRoute,
  get20200531RealtimeLogConfigRoute,
  get20200531ResponseHeadersPolicyIdConfigRoute,
  get20200531ResponseHeadersPolicyIdRoute,
  get20200531ResponseHeadersPolicyRoute,
  get20200531StreamingDistributionIdConfigRoute,
  get20200531StreamingDistributionIdRoute,
  get20200531StreamingDistributionRoute,
  get20200531TaggingResourceRoute,
  post20200531CachePolicyRoute,
  post20200531ContinuousDeploymentPolicyRoute,
  post20200531DeleteRealtimeLogConfigIndexRoute,
  post20200531DistributionDistributionIdInvalidationRoute,
  post20200531DistributionPrimaryDistributionIdCopyRoute,
  post20200531DistributionRoute,
  post20200531DistributionsByRealtimeLogConfigIndexRoute,
  post20200531DistributionsDistributionIdMonitoringSubscriptionIndexRoute,
  post20200531DistributionWithTagsRoute,
  post20200531FieldLevelEncryptionProfileRoute,
  post20200531FieldLevelEncryptionRoute,
  post20200531FunctionNamePublishIfMatchRoute,
  post20200531FunctionNameTestIfMatchRoute,
  post20200531FunctionRoute,
  post20200531GetRealtimeLogConfigIndexRoute,
  post20200531KeyGroupRoute,
  post20200531OriginAccessControlRoute,
  post20200531OriginAccessIdentityCloudfrontRoute,
  post20200531OriginRequestPolicyRoute,
  post20200531PublicKeyRoute,
  post20200531RealtimeLogConfigRoute,
  post20200531ResponseHeadersPolicyRoute,
  post20200531StreamingDistributionRoute,
  post20200531StreamingDistributionWithTagsRoute,
  post20200531TaggingOperationTagResourceRoute,
  post20200531TaggingOperationUntagResourceRoute,
  put20200531CachePolicyIdRoute,
  put20200531ContinuousDeploymentPolicyIdRoute,
  put20200531DistributionIdConfigRoute,
  put20200531DistributionIdPromoteStagingConfigRoute,
  put20200531DistributionTargetDistributionIdAssociateAliasAliasRoute,
  put20200531FieldLevelEncryptionIdConfigRoute,
  put20200531FieldLevelEncryptionProfileIdConfigRoute,
  put20200531FunctionNameIfMatchRoute,
  put20200531KeyGroupIdRoute,
  put20200531OriginAccessControlIdConfigRoute,
  put20200531OriginAccessIdentityCloudfrontIdConfigRoute,
  put20200531OriginRequestPolicyIdRoute,
  put20200531PublicKeyIdConfigRoute,
  put20200531RealtimeLogConfigIndexRoute,
  put20200531ResponseHeadersPolicyIdRoute,
  put20200531StreamingDistributionIdConfigRoute,
} from './routes'
import {
  delete20200531CachePolicyIdRouteHandler,
  delete20200531ContinuousDeploymentPolicyIdRouteHandler,
  delete20200531DistributionIdRouteHandler,
  delete20200531DistributionsDistributionIdMonitoringSubscriptionIndexRouteHandler,
  delete20200531FieldLevelEncryptionIdRouteHandler,
  delete20200531FieldLevelEncryptionProfileIdRouteHandler,
  delete20200531FunctionNameIfMatchRouteHandler,
  delete20200531KeyGroupIdRouteHandler,
  delete20200531OriginAccessControlIdRouteHandler,
  delete20200531OriginAccessIdentityCloudfrontIdRouteHandler,
  delete20200531OriginRequestPolicyIdRouteHandler,
  delete20200531PublicKeyIdRouteHandler,
  delete20200531ResponseHeadersPolicyIdRouteHandler,
  delete20200531StreamingDistributionIdRouteHandler,
  get20200531CachePolicyIdConfigRouteHandler,
  get20200531CachePolicyIdRouteHandler,
  get20200531CachePolicyRouteHandler,
  get20200531ConflictingAliasDistributionIdAliasRouteHandler,
  get20200531ContinuousDeploymentPolicyIdConfigRouteHandler,
  get20200531ContinuousDeploymentPolicyIdRouteHandler,
  get20200531ContinuousDeploymentPolicyRouteHandler,
  get20200531DistributionDistributionIdInvalidationIdRouteHandler,
  get20200531DistributionDistributionIdInvalidationRouteHandler,
  get20200531DistributionIdConfigRouteHandler,
  get20200531DistributionIdRouteHandler,
  get20200531DistributionRouteHandler,
  get20200531DistributionsByCachePolicyIdCachePolicyIdRouteHandler,
  get20200531DistributionsByKeyGroupIdKeyGroupIdRouteHandler,
  get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdRouteHandler,
  get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdRouteHandler,
  get20200531DistributionsByWebACLIdWebACLIdRouteHandler,
  get20200531DistributionsDistributionIdMonitoringSubscriptionIndexRouteHandler,
  get20200531FieldLevelEncryptionIdConfigRouteHandler,
  get20200531FieldLevelEncryptionIdRouteHandler,
  get20200531FieldLevelEncryptionProfileIdConfigRouteHandler,
  get20200531FieldLevelEncryptionProfileIdRouteHandler,
  get20200531FieldLevelEncryptionProfileRouteHandler,
  get20200531FieldLevelEncryptionRouteHandler,
  get20200531FunctionNameDescribeRouteHandler,
  get20200531FunctionNameRouteHandler,
  get20200531FunctionRouteHandler,
  get20200531KeyGroupIdConfigRouteHandler,
  get20200531KeyGroupIdRouteHandler,
  get20200531KeyGroupRouteHandler,
  get20200531OriginAccessControlIdConfigRouteHandler,
  get20200531OriginAccessControlIdRouteHandler,
  get20200531OriginAccessControlRouteHandler,
  get20200531OriginAccessIdentityCloudfrontIdConfigRouteHandler,
  get20200531OriginAccessIdentityCloudfrontIdRouteHandler,
  get20200531OriginAccessIdentityCloudfrontRouteHandler,
  get20200531OriginRequestPolicyIdConfigRouteHandler,
  get20200531OriginRequestPolicyIdRouteHandler,
  get20200531OriginRequestPolicyRouteHandler,
  get20200531PublicKeyIdConfigRouteHandler,
  get20200531PublicKeyIdRouteHandler,
  get20200531PublicKeyRouteHandler,
  get20200531RealtimeLogConfigRouteHandler,
  get20200531ResponseHeadersPolicyIdConfigRouteHandler,
  get20200531ResponseHeadersPolicyIdRouteHandler,
  get20200531ResponseHeadersPolicyRouteHandler,
  get20200531StreamingDistributionIdConfigRouteHandler,
  get20200531StreamingDistributionIdRouteHandler,
  get20200531StreamingDistributionRouteHandler,
  get20200531TaggingResourceRouteHandler,
  post20200531CachePolicyRouteHandler,
  post20200531ContinuousDeploymentPolicyRouteHandler,
  post20200531DeleteRealtimeLogConfigIndexRouteHandler,
  post20200531DistributionDistributionIdInvalidationRouteHandler,
  post20200531DistributionPrimaryDistributionIdCopyRouteHandler,
  post20200531DistributionRouteHandler,
  post20200531DistributionsByRealtimeLogConfigIndexRouteHandler,
  post20200531DistributionsDistributionIdMonitoringSubscriptionIndexRouteHandler,
  post20200531DistributionWithTagsRouteHandler,
  post20200531FieldLevelEncryptionProfileRouteHandler,
  post20200531FieldLevelEncryptionRouteHandler,
  post20200531FunctionNamePublishIfMatchRouteHandler,
  post20200531FunctionNameTestIfMatchRouteHandler,
  post20200531FunctionRouteHandler,
  post20200531GetRealtimeLogConfigIndexRouteHandler,
  post20200531KeyGroupRouteHandler,
  post20200531OriginAccessControlRouteHandler,
  post20200531OriginAccessIdentityCloudfrontRouteHandler,
  post20200531OriginRequestPolicyRouteHandler,
  post20200531PublicKeyRouteHandler,
  post20200531RealtimeLogConfigRouteHandler,
  post20200531ResponseHeadersPolicyRouteHandler,
  post20200531StreamingDistributionRouteHandler,
  post20200531StreamingDistributionWithTagsRouteHandler,
  post20200531TaggingOperationTagResourceRouteHandler,
  post20200531TaggingOperationUntagResourceRouteHandler,
  put20200531CachePolicyIdRouteHandler,
  put20200531ContinuousDeploymentPolicyIdRouteHandler,
  put20200531DistributionIdConfigRouteHandler,
  put20200531DistributionIdPromoteStagingConfigRouteHandler,
  put20200531DistributionTargetDistributionIdAssociateAliasAliasRouteHandler,
  put20200531FieldLevelEncryptionIdConfigRouteHandler,
  put20200531FieldLevelEncryptionProfileIdConfigRouteHandler,
  put20200531FunctionNameIfMatchRouteHandler,
  put20200531KeyGroupIdRouteHandler,
  put20200531OriginAccessControlIdConfigRouteHandler,
  put20200531OriginAccessIdentityCloudfrontIdConfigRouteHandler,
  put20200531OriginRequestPolicyIdRouteHandler,
  put20200531PublicKeyIdConfigRouteHandler,
  put20200531RealtimeLogConfigIndexRouteHandler,
  put20200531ResponseHeadersPolicyIdRouteHandler,
  put20200531StreamingDistributionIdConfigRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    put20200531DistributionTargetDistributionIdAssociateAliasAliasRoute,
    put20200531DistributionTargetDistributionIdAssociateAliasAliasRouteHandler,
  )
  .openapi(
    post20200531DistributionPrimaryDistributionIdCopyRoute,
    post20200531DistributionPrimaryDistributionIdCopyRouteHandler,
  )
  .openapi(post20200531CachePolicyRoute, post20200531CachePolicyRouteHandler)
  .openapi(get20200531CachePolicyRoute, get20200531CachePolicyRouteHandler)
  .openapi(
    post20200531OriginAccessIdentityCloudfrontRoute,
    post20200531OriginAccessIdentityCloudfrontRouteHandler,
  )
  .openapi(
    get20200531OriginAccessIdentityCloudfrontRoute,
    get20200531OriginAccessIdentityCloudfrontRouteHandler,
  )
  .openapi(
    post20200531ContinuousDeploymentPolicyRoute,
    post20200531ContinuousDeploymentPolicyRouteHandler,
  )
  .openapi(
    get20200531ContinuousDeploymentPolicyRoute,
    get20200531ContinuousDeploymentPolicyRouteHandler,
  )
  .openapi(post20200531DistributionRoute, post20200531DistributionRouteHandler)
  .openapi(get20200531DistributionRoute, get20200531DistributionRouteHandler)
  .openapi(post20200531DistributionWithTagsRoute, post20200531DistributionWithTagsRouteHandler)
  .openapi(post20200531FieldLevelEncryptionRoute, post20200531FieldLevelEncryptionRouteHandler)
  .openapi(get20200531FieldLevelEncryptionRoute, get20200531FieldLevelEncryptionRouteHandler)
  .openapi(
    post20200531FieldLevelEncryptionProfileRoute,
    post20200531FieldLevelEncryptionProfileRouteHandler,
  )
  .openapi(
    get20200531FieldLevelEncryptionProfileRoute,
    get20200531FieldLevelEncryptionProfileRouteHandler,
  )
  .openapi(post20200531FunctionRoute, post20200531FunctionRouteHandler)
  .openapi(get20200531FunctionRoute, get20200531FunctionRouteHandler)
  .openapi(
    post20200531DistributionDistributionIdInvalidationRoute,
    post20200531DistributionDistributionIdInvalidationRouteHandler,
  )
  .openapi(
    get20200531DistributionDistributionIdInvalidationRoute,
    get20200531DistributionDistributionIdInvalidationRouteHandler,
  )
  .openapi(post20200531KeyGroupRoute, post20200531KeyGroupRouteHandler)
  .openapi(get20200531KeyGroupRoute, get20200531KeyGroupRouteHandler)
  .openapi(
    post20200531DistributionsDistributionIdMonitoringSubscriptionIndexRoute,
    post20200531DistributionsDistributionIdMonitoringSubscriptionIndexRouteHandler,
  )
  .openapi(
    delete20200531DistributionsDistributionIdMonitoringSubscriptionIndexRoute,
    delete20200531DistributionsDistributionIdMonitoringSubscriptionIndexRouteHandler,
  )
  .openapi(
    get20200531DistributionsDistributionIdMonitoringSubscriptionIndexRoute,
    get20200531DistributionsDistributionIdMonitoringSubscriptionIndexRouteHandler,
  )
  .openapi(post20200531OriginAccessControlRoute, post20200531OriginAccessControlRouteHandler)
  .openapi(get20200531OriginAccessControlRoute, get20200531OriginAccessControlRouteHandler)
  .openapi(post20200531OriginRequestPolicyRoute, post20200531OriginRequestPolicyRouteHandler)
  .openapi(get20200531OriginRequestPolicyRoute, get20200531OriginRequestPolicyRouteHandler)
  .openapi(post20200531PublicKeyRoute, post20200531PublicKeyRouteHandler)
  .openapi(get20200531PublicKeyRoute, get20200531PublicKeyRouteHandler)
  .openapi(post20200531RealtimeLogConfigRoute, post20200531RealtimeLogConfigRouteHandler)
  .openapi(get20200531RealtimeLogConfigRoute, get20200531RealtimeLogConfigRouteHandler)
  .openapi(post20200531ResponseHeadersPolicyRoute, post20200531ResponseHeadersPolicyRouteHandler)
  .openapi(get20200531ResponseHeadersPolicyRoute, get20200531ResponseHeadersPolicyRouteHandler)
  .openapi(post20200531StreamingDistributionRoute, post20200531StreamingDistributionRouteHandler)
  .openapi(get20200531StreamingDistributionRoute, get20200531StreamingDistributionRouteHandler)
  .openapi(
    post20200531StreamingDistributionWithTagsRoute,
    post20200531StreamingDistributionWithTagsRouteHandler,
  )
  .openapi(delete20200531CachePolicyIdRoute, delete20200531CachePolicyIdRouteHandler)
  .openapi(get20200531CachePolicyIdRoute, get20200531CachePolicyIdRouteHandler)
  .openapi(put20200531CachePolicyIdRoute, put20200531CachePolicyIdRouteHandler)
  .openapi(
    delete20200531OriginAccessIdentityCloudfrontIdRoute,
    delete20200531OriginAccessIdentityCloudfrontIdRouteHandler,
  )
  .openapi(
    get20200531OriginAccessIdentityCloudfrontIdRoute,
    get20200531OriginAccessIdentityCloudfrontIdRouteHandler,
  )
  .openapi(
    delete20200531ContinuousDeploymentPolicyIdRoute,
    delete20200531ContinuousDeploymentPolicyIdRouteHandler,
  )
  .openapi(
    get20200531ContinuousDeploymentPolicyIdRoute,
    get20200531ContinuousDeploymentPolicyIdRouteHandler,
  )
  .openapi(
    put20200531ContinuousDeploymentPolicyIdRoute,
    put20200531ContinuousDeploymentPolicyIdRouteHandler,
  )
  .openapi(delete20200531DistributionIdRoute, delete20200531DistributionIdRouteHandler)
  .openapi(get20200531DistributionIdRoute, get20200531DistributionIdRouteHandler)
  .openapi(
    delete20200531FieldLevelEncryptionIdRoute,
    delete20200531FieldLevelEncryptionIdRouteHandler,
  )
  .openapi(get20200531FieldLevelEncryptionIdRoute, get20200531FieldLevelEncryptionIdRouteHandler)
  .openapi(
    delete20200531FieldLevelEncryptionProfileIdRoute,
    delete20200531FieldLevelEncryptionProfileIdRouteHandler,
  )
  .openapi(
    get20200531FieldLevelEncryptionProfileIdRoute,
    get20200531FieldLevelEncryptionProfileIdRouteHandler,
  )
  .openapi(delete20200531FunctionNameIfMatchRoute, delete20200531FunctionNameIfMatchRouteHandler)
  .openapi(put20200531FunctionNameIfMatchRoute, put20200531FunctionNameIfMatchRouteHandler)
  .openapi(delete20200531KeyGroupIdRoute, delete20200531KeyGroupIdRouteHandler)
  .openapi(get20200531KeyGroupIdRoute, get20200531KeyGroupIdRouteHandler)
  .openapi(put20200531KeyGroupIdRoute, put20200531KeyGroupIdRouteHandler)
  .openapi(
    delete20200531OriginAccessControlIdRoute,
    delete20200531OriginAccessControlIdRouteHandler,
  )
  .openapi(get20200531OriginAccessControlIdRoute, get20200531OriginAccessControlIdRouteHandler)
  .openapi(
    delete20200531OriginRequestPolicyIdRoute,
    delete20200531OriginRequestPolicyIdRouteHandler,
  )
  .openapi(get20200531OriginRequestPolicyIdRoute, get20200531OriginRequestPolicyIdRouteHandler)
  .openapi(put20200531OriginRequestPolicyIdRoute, put20200531OriginRequestPolicyIdRouteHandler)
  .openapi(delete20200531PublicKeyIdRoute, delete20200531PublicKeyIdRouteHandler)
  .openapi(get20200531PublicKeyIdRoute, get20200531PublicKeyIdRouteHandler)
  .openapi(
    post20200531DeleteRealtimeLogConfigIndexRoute,
    post20200531DeleteRealtimeLogConfigIndexRouteHandler,
  )
  .openapi(
    delete20200531ResponseHeadersPolicyIdRoute,
    delete20200531ResponseHeadersPolicyIdRouteHandler,
  )
  .openapi(get20200531ResponseHeadersPolicyIdRoute, get20200531ResponseHeadersPolicyIdRouteHandler)
  .openapi(put20200531ResponseHeadersPolicyIdRoute, put20200531ResponseHeadersPolicyIdRouteHandler)
  .openapi(
    delete20200531StreamingDistributionIdRoute,
    delete20200531StreamingDistributionIdRouteHandler,
  )
  .openapi(get20200531StreamingDistributionIdRoute, get20200531StreamingDistributionIdRouteHandler)
  .openapi(get20200531FunctionNameDescribeRoute, get20200531FunctionNameDescribeRouteHandler)
  .openapi(get20200531CachePolicyIdConfigRoute, get20200531CachePolicyIdConfigRouteHandler)
  .openapi(
    get20200531OriginAccessIdentityCloudfrontIdConfigRoute,
    get20200531OriginAccessIdentityCloudfrontIdConfigRouteHandler,
  )
  .openapi(
    put20200531OriginAccessIdentityCloudfrontIdConfigRoute,
    put20200531OriginAccessIdentityCloudfrontIdConfigRouteHandler,
  )
  .openapi(
    get20200531ContinuousDeploymentPolicyIdConfigRoute,
    get20200531ContinuousDeploymentPolicyIdConfigRouteHandler,
  )
  .openapi(get20200531DistributionIdConfigRoute, get20200531DistributionIdConfigRouteHandler)
  .openapi(put20200531DistributionIdConfigRoute, put20200531DistributionIdConfigRouteHandler)
  .openapi(
    get20200531FieldLevelEncryptionIdConfigRoute,
    get20200531FieldLevelEncryptionIdConfigRouteHandler,
  )
  .openapi(
    put20200531FieldLevelEncryptionIdConfigRoute,
    put20200531FieldLevelEncryptionIdConfigRouteHandler,
  )
  .openapi(
    get20200531FieldLevelEncryptionProfileIdConfigRoute,
    get20200531FieldLevelEncryptionProfileIdConfigRouteHandler,
  )
  .openapi(
    put20200531FieldLevelEncryptionProfileIdConfigRoute,
    put20200531FieldLevelEncryptionProfileIdConfigRouteHandler,
  )
  .openapi(get20200531FunctionNameRoute, get20200531FunctionNameRouteHandler)
  .openapi(
    get20200531DistributionDistributionIdInvalidationIdRoute,
    get20200531DistributionDistributionIdInvalidationIdRouteHandler,
  )
  .openapi(get20200531KeyGroupIdConfigRoute, get20200531KeyGroupIdConfigRouteHandler)
  .openapi(
    get20200531OriginAccessControlIdConfigRoute,
    get20200531OriginAccessControlIdConfigRouteHandler,
  )
  .openapi(
    put20200531OriginAccessControlIdConfigRoute,
    put20200531OriginAccessControlIdConfigRouteHandler,
  )
  .openapi(
    get20200531OriginRequestPolicyIdConfigRoute,
    get20200531OriginRequestPolicyIdConfigRouteHandler,
  )
  .openapi(get20200531PublicKeyIdConfigRoute, get20200531PublicKeyIdConfigRouteHandler)
  .openapi(put20200531PublicKeyIdConfigRoute, put20200531PublicKeyIdConfigRouteHandler)
  .openapi(
    post20200531GetRealtimeLogConfigIndexRoute,
    post20200531GetRealtimeLogConfigIndexRouteHandler,
  )
  .openapi(
    get20200531ResponseHeadersPolicyIdConfigRoute,
    get20200531ResponseHeadersPolicyIdConfigRouteHandler,
  )
  .openapi(
    get20200531StreamingDistributionIdConfigRoute,
    get20200531StreamingDistributionIdConfigRouteHandler,
  )
  .openapi(
    put20200531StreamingDistributionIdConfigRoute,
    put20200531StreamingDistributionIdConfigRouteHandler,
  )
  .openapi(
    get20200531ConflictingAliasDistributionIdAliasRoute,
    get20200531ConflictingAliasDistributionIdAliasRouteHandler,
  )
  .openapi(
    get20200531DistributionsByCachePolicyIdCachePolicyIdRoute,
    get20200531DistributionsByCachePolicyIdCachePolicyIdRouteHandler,
  )
  .openapi(
    get20200531DistributionsByKeyGroupIdKeyGroupIdRoute,
    get20200531DistributionsByKeyGroupIdKeyGroupIdRouteHandler,
  )
  .openapi(
    get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdRoute,
    get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdRouteHandler,
  )
  .openapi(
    post20200531DistributionsByRealtimeLogConfigIndexRoute,
    post20200531DistributionsByRealtimeLogConfigIndexRouteHandler,
  )
  .openapi(
    get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdRoute,
    get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdRouteHandler,
  )
  .openapi(
    get20200531DistributionsByWebACLIdWebACLIdRoute,
    get20200531DistributionsByWebACLIdWebACLIdRouteHandler,
  )
  .openapi(get20200531TaggingResourceRoute, get20200531TaggingResourceRouteHandler)
  .openapi(
    post20200531FunctionNamePublishIfMatchRoute,
    post20200531FunctionNamePublishIfMatchRouteHandler,
  )
  .openapi(
    post20200531TaggingOperationTagResourceRoute,
    post20200531TaggingOperationTagResourceRouteHandler,
  )
  .openapi(
    post20200531FunctionNameTestIfMatchRoute,
    post20200531FunctionNameTestIfMatchRouteHandler,
  )
  .openapi(
    post20200531TaggingOperationUntagResourceRoute,
    post20200531TaggingOperationUntagResourceRouteHandler,
  )
  .openapi(
    put20200531DistributionIdPromoteStagingConfigRoute,
    put20200531DistributionIdPromoteStagingConfigRouteHandler,
  )
  .openapi(put20200531RealtimeLogConfigIndexRoute, put20200531RealtimeLogConfigIndexRouteHandler)

export default app
