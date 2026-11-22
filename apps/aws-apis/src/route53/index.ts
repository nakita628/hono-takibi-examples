import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20130401CidrcollectionCidrCollectionIdRoute,
  delete20130401DelegationsetIdRoute,
  delete20130401HealthcheckHealthCheckIdRoute,
  delete20130401HostedzoneIdRoute,
  delete20130401KeysigningkeyHostedZoneIdNameRoute,
  delete20130401QueryloggingconfigIdRoute,
  delete20130401TrafficpolicyIdVersionRoute,
  delete20130401TrafficpolicyinstanceIdRoute,
  get20130401AccountlimitTypeRoute,
  get20130401ChangeIdRoute,
  get20130401CheckeriprangesRoute,
  get20130401CidrcollectionCidrCollectionIdCidrblocksRoute,
  get20130401CidrcollectionCidrCollectionIdRoute,
  get20130401CidrcollectionRoute,
  get20130401DelegationsetIdRoute,
  get20130401DelegationsetRoute,
  get20130401GeolocationRoute,
  get20130401GeolocationsRoute,
  get20130401HealthcheckcountRoute,
  get20130401HealthcheckHealthCheckIdLastfailurereasonRoute,
  get20130401HealthcheckHealthCheckIdRoute,
  get20130401HealthcheckHealthCheckIdStatusRoute,
  get20130401HealthcheckRoute,
  get20130401HostedzonecountRoute,
  get20130401HostedzoneIdAuthorizevpcassociationRoute,
  get20130401HostedzoneIdDnssecRoute,
  get20130401HostedzoneIdRoute,
  get20130401HostedzoneIdRrsetRoute,
  get20130401HostedzonelimitIdTypeRoute,
  get20130401HostedzoneRoute,
  get20130401HostedzonesbynameRoute,
  get20130401HostedzonesbyvpcVpcidVpcregionRoute,
  get20130401QueryloggingconfigIdRoute,
  get20130401QueryloggingconfigRoute,
  get20130401ReusabledelegationsetlimitIdTypeRoute,
  get20130401TagsResourceTypeResourceIdRoute,
  get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeRoute,
  get20130401TrafficpoliciesIdVersionsRoute,
  get20130401TrafficpoliciesRoute,
  get20130401TrafficpolicyIdVersionRoute,
  get20130401TrafficpolicyinstancecountRoute,
  get20130401TrafficpolicyinstanceIdRoute,
  get20130401TrafficpolicyinstancesHostedzoneIdRoute,
  get20130401TrafficpolicyinstancesRoute,
  get20130401TrafficpolicyinstancesTrafficpolicyIdVersionRoute,
  post20130401CidrcollectionCidrCollectionIdRoute,
  post20130401CidrcollectionRoute,
  post20130401DelegationsetRoute,
  post20130401HealthcheckHealthCheckIdRoute,
  post20130401HealthcheckRoute,
  post20130401HostedzoneIdAssociatevpcRoute,
  post20130401HostedzoneIdAuthorizevpcassociationRoute,
  post20130401HostedzoneIdDeauthorizevpcassociationRoute,
  post20130401HostedzoneIdDisableDnssecRoute,
  post20130401HostedzoneIdDisassociatevpcRoute,
  post20130401HostedzoneIdEnableDnssecRoute,
  post20130401HostedzoneIdRoute,
  post20130401HostedzoneIdRrsetIndexRoute,
  post20130401HostedzoneRoute,
  post20130401KeysigningkeyHostedZoneIdNameActivateRoute,
  post20130401KeysigningkeyHostedZoneIdNameDeactivateRoute,
  post20130401KeysigningkeyRoute,
  post20130401QueryloggingconfigRoute,
  post20130401TagsResourceTypeResourceIdRoute,
  post20130401TagsResourceTypeRoute,
  post20130401TrafficpolicyIdRoute,
  post20130401TrafficpolicyIdVersionRoute,
  post20130401TrafficpolicyinstanceIdRoute,
  post20130401TrafficpolicyinstanceRoute,
  post20130401TrafficpolicyRoute,
} from './routes'
import {
  delete20130401CidrcollectionCidrCollectionIdRouteHandler,
  delete20130401DelegationsetIdRouteHandler,
  delete20130401HealthcheckHealthCheckIdRouteHandler,
  delete20130401HostedzoneIdRouteHandler,
  delete20130401KeysigningkeyHostedZoneIdNameRouteHandler,
  delete20130401QueryloggingconfigIdRouteHandler,
  delete20130401TrafficpolicyIdVersionRouteHandler,
  delete20130401TrafficpolicyinstanceIdRouteHandler,
  get20130401AccountlimitTypeRouteHandler,
  get20130401ChangeIdRouteHandler,
  get20130401CheckeriprangesRouteHandler,
  get20130401CidrcollectionCidrCollectionIdCidrblocksRouteHandler,
  get20130401CidrcollectionCidrCollectionIdRouteHandler,
  get20130401CidrcollectionRouteHandler,
  get20130401DelegationsetIdRouteHandler,
  get20130401DelegationsetRouteHandler,
  get20130401GeolocationRouteHandler,
  get20130401GeolocationsRouteHandler,
  get20130401HealthcheckcountRouteHandler,
  get20130401HealthcheckHealthCheckIdLastfailurereasonRouteHandler,
  get20130401HealthcheckHealthCheckIdRouteHandler,
  get20130401HealthcheckHealthCheckIdStatusRouteHandler,
  get20130401HealthcheckRouteHandler,
  get20130401HostedzonecountRouteHandler,
  get20130401HostedzoneIdAuthorizevpcassociationRouteHandler,
  get20130401HostedzoneIdDnssecRouteHandler,
  get20130401HostedzoneIdRouteHandler,
  get20130401HostedzoneIdRrsetRouteHandler,
  get20130401HostedzonelimitIdTypeRouteHandler,
  get20130401HostedzoneRouteHandler,
  get20130401HostedzonesbynameRouteHandler,
  get20130401HostedzonesbyvpcVpcidVpcregionRouteHandler,
  get20130401QueryloggingconfigIdRouteHandler,
  get20130401QueryloggingconfigRouteHandler,
  get20130401ReusabledelegationsetlimitIdTypeRouteHandler,
  get20130401TagsResourceTypeResourceIdRouteHandler,
  get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeRouteHandler,
  get20130401TrafficpoliciesIdVersionsRouteHandler,
  get20130401TrafficpoliciesRouteHandler,
  get20130401TrafficpolicyIdVersionRouteHandler,
  get20130401TrafficpolicyinstancecountRouteHandler,
  get20130401TrafficpolicyinstanceIdRouteHandler,
  get20130401TrafficpolicyinstancesHostedzoneIdRouteHandler,
  get20130401TrafficpolicyinstancesRouteHandler,
  get20130401TrafficpolicyinstancesTrafficpolicyIdVersionRouteHandler,
  post20130401CidrcollectionCidrCollectionIdRouteHandler,
  post20130401CidrcollectionRouteHandler,
  post20130401DelegationsetRouteHandler,
  post20130401HealthcheckHealthCheckIdRouteHandler,
  post20130401HealthcheckRouteHandler,
  post20130401HostedzoneIdAssociatevpcRouteHandler,
  post20130401HostedzoneIdAuthorizevpcassociationRouteHandler,
  post20130401HostedzoneIdDeauthorizevpcassociationRouteHandler,
  post20130401HostedzoneIdDisableDnssecRouteHandler,
  post20130401HostedzoneIdDisassociatevpcRouteHandler,
  post20130401HostedzoneIdEnableDnssecRouteHandler,
  post20130401HostedzoneIdRouteHandler,
  post20130401HostedzoneIdRrsetIndexRouteHandler,
  post20130401HostedzoneRouteHandler,
  post20130401KeysigningkeyHostedZoneIdNameActivateRouteHandler,
  post20130401KeysigningkeyHostedZoneIdNameDeactivateRouteHandler,
  post20130401KeysigningkeyRouteHandler,
  post20130401QueryloggingconfigRouteHandler,
  post20130401TagsResourceTypeResourceIdRouteHandler,
  post20130401TagsResourceTypeRouteHandler,
  post20130401TrafficpolicyIdRouteHandler,
  post20130401TrafficpolicyIdVersionRouteHandler,
  post20130401TrafficpolicyinstanceIdRouteHandler,
  post20130401TrafficpolicyinstanceRouteHandler,
  post20130401TrafficpolicyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    post20130401KeysigningkeyHostedZoneIdNameActivateRoute,
    post20130401KeysigningkeyHostedZoneIdNameActivateRouteHandler,
  )
  .openapi(
    post20130401HostedzoneIdAssociatevpcRoute,
    post20130401HostedzoneIdAssociatevpcRouteHandler,
  )
  .openapi(
    post20130401CidrcollectionCidrCollectionIdRoute,
    post20130401CidrcollectionCidrCollectionIdRouteHandler,
  )
  .openapi(
    delete20130401CidrcollectionCidrCollectionIdRoute,
    delete20130401CidrcollectionCidrCollectionIdRouteHandler,
  )
  .openapi(
    get20130401CidrcollectionCidrCollectionIdRoute,
    get20130401CidrcollectionCidrCollectionIdRouteHandler,
  )
  .openapi(post20130401HostedzoneIdRrsetIndexRoute, post20130401HostedzoneIdRrsetIndexRouteHandler)
  .openapi(
    post20130401TagsResourceTypeResourceIdRoute,
    post20130401TagsResourceTypeResourceIdRouteHandler,
  )
  .openapi(
    get20130401TagsResourceTypeResourceIdRoute,
    get20130401TagsResourceTypeResourceIdRouteHandler,
  )
  .openapi(post20130401CidrcollectionRoute, post20130401CidrcollectionRouteHandler)
  .openapi(get20130401CidrcollectionRoute, get20130401CidrcollectionRouteHandler)
  .openapi(post20130401HealthcheckRoute, post20130401HealthcheckRouteHandler)
  .openapi(get20130401HealthcheckRoute, get20130401HealthcheckRouteHandler)
  .openapi(post20130401HostedzoneRoute, post20130401HostedzoneRouteHandler)
  .openapi(get20130401HostedzoneRoute, get20130401HostedzoneRouteHandler)
  .openapi(post20130401KeysigningkeyRoute, post20130401KeysigningkeyRouteHandler)
  .openapi(post20130401QueryloggingconfigRoute, post20130401QueryloggingconfigRouteHandler)
  .openapi(get20130401QueryloggingconfigRoute, get20130401QueryloggingconfigRouteHandler)
  .openapi(post20130401DelegationsetRoute, post20130401DelegationsetRouteHandler)
  .openapi(get20130401DelegationsetRoute, get20130401DelegationsetRouteHandler)
  .openapi(post20130401TrafficpolicyRoute, post20130401TrafficpolicyRouteHandler)
  .openapi(post20130401TrafficpolicyinstanceRoute, post20130401TrafficpolicyinstanceRouteHandler)
  .openapi(post20130401TrafficpolicyIdRoute, post20130401TrafficpolicyIdRouteHandler)
  .openapi(
    post20130401HostedzoneIdAuthorizevpcassociationRoute,
    post20130401HostedzoneIdAuthorizevpcassociationRouteHandler,
  )
  .openapi(
    get20130401HostedzoneIdAuthorizevpcassociationRoute,
    get20130401HostedzoneIdAuthorizevpcassociationRouteHandler,
  )
  .openapi(
    post20130401KeysigningkeyHostedZoneIdNameDeactivateRoute,
    post20130401KeysigningkeyHostedZoneIdNameDeactivateRouteHandler,
  )
  .openapi(
    delete20130401HealthcheckHealthCheckIdRoute,
    delete20130401HealthcheckHealthCheckIdRouteHandler,
  )
  .openapi(
    get20130401HealthcheckHealthCheckIdRoute,
    get20130401HealthcheckHealthCheckIdRouteHandler,
  )
  .openapi(
    post20130401HealthcheckHealthCheckIdRoute,
    post20130401HealthcheckHealthCheckIdRouteHandler,
  )
  .openapi(delete20130401HostedzoneIdRoute, delete20130401HostedzoneIdRouteHandler)
  .openapi(get20130401HostedzoneIdRoute, get20130401HostedzoneIdRouteHandler)
  .openapi(post20130401HostedzoneIdRoute, post20130401HostedzoneIdRouteHandler)
  .openapi(
    delete20130401KeysigningkeyHostedZoneIdNameRoute,
    delete20130401KeysigningkeyHostedZoneIdNameRouteHandler,
  )
  .openapi(delete20130401QueryloggingconfigIdRoute, delete20130401QueryloggingconfigIdRouteHandler)
  .openapi(get20130401QueryloggingconfigIdRoute, get20130401QueryloggingconfigIdRouteHandler)
  .openapi(delete20130401DelegationsetIdRoute, delete20130401DelegationsetIdRouteHandler)
  .openapi(get20130401DelegationsetIdRoute, get20130401DelegationsetIdRouteHandler)
  .openapi(
    delete20130401TrafficpolicyIdVersionRoute,
    delete20130401TrafficpolicyIdVersionRouteHandler,
  )
  .openapi(get20130401TrafficpolicyIdVersionRoute, get20130401TrafficpolicyIdVersionRouteHandler)
  .openapi(post20130401TrafficpolicyIdVersionRoute, post20130401TrafficpolicyIdVersionRouteHandler)
  .openapi(
    delete20130401TrafficpolicyinstanceIdRoute,
    delete20130401TrafficpolicyinstanceIdRouteHandler,
  )
  .openapi(get20130401TrafficpolicyinstanceIdRoute, get20130401TrafficpolicyinstanceIdRouteHandler)
  .openapi(
    post20130401TrafficpolicyinstanceIdRoute,
    post20130401TrafficpolicyinstanceIdRouteHandler,
  )
  .openapi(
    post20130401HostedzoneIdDeauthorizevpcassociationRoute,
    post20130401HostedzoneIdDeauthorizevpcassociationRouteHandler,
  )
  .openapi(
    post20130401HostedzoneIdDisableDnssecRoute,
    post20130401HostedzoneIdDisableDnssecRouteHandler,
  )
  .openapi(
    post20130401HostedzoneIdDisassociatevpcRoute,
    post20130401HostedzoneIdDisassociatevpcRouteHandler,
  )
  .openapi(
    post20130401HostedzoneIdEnableDnssecRoute,
    post20130401HostedzoneIdEnableDnssecRouteHandler,
  )
  .openapi(get20130401AccountlimitTypeRoute, get20130401AccountlimitTypeRouteHandler)
  .openapi(get20130401ChangeIdRoute, get20130401ChangeIdRouteHandler)
  .openapi(get20130401CheckeriprangesRoute, get20130401CheckeriprangesRouteHandler)
  .openapi(get20130401HostedzoneIdDnssecRoute, get20130401HostedzoneIdDnssecRouteHandler)
  .openapi(get20130401GeolocationRoute, get20130401GeolocationRouteHandler)
  .openapi(get20130401HealthcheckcountRoute, get20130401HealthcheckcountRouteHandler)
  .openapi(
    get20130401HealthcheckHealthCheckIdLastfailurereasonRoute,
    get20130401HealthcheckHealthCheckIdLastfailurereasonRouteHandler,
  )
  .openapi(
    get20130401HealthcheckHealthCheckIdStatusRoute,
    get20130401HealthcheckHealthCheckIdStatusRouteHandler,
  )
  .openapi(get20130401HostedzonecountRoute, get20130401HostedzonecountRouteHandler)
  .openapi(get20130401HostedzonelimitIdTypeRoute, get20130401HostedzonelimitIdTypeRouteHandler)
  .openapi(
    get20130401ReusabledelegationsetlimitIdTypeRoute,
    get20130401ReusabledelegationsetlimitIdTypeRouteHandler,
  )
  .openapi(
    get20130401TrafficpolicyinstancecountRoute,
    get20130401TrafficpolicyinstancecountRouteHandler,
  )
  .openapi(
    get20130401CidrcollectionCidrCollectionIdCidrblocksRoute,
    get20130401CidrcollectionCidrCollectionIdCidrblocksRouteHandler,
  )
  .openapi(get20130401GeolocationsRoute, get20130401GeolocationsRouteHandler)
  .openapi(get20130401HostedzonesbynameRoute, get20130401HostedzonesbynameRouteHandler)
  .openapi(
    get20130401HostedzonesbyvpcVpcidVpcregionRoute,
    get20130401HostedzonesbyvpcVpcidVpcregionRouteHandler,
  )
  .openapi(get20130401HostedzoneIdRrsetRoute, get20130401HostedzoneIdRrsetRouteHandler)
  .openapi(post20130401TagsResourceTypeRoute, post20130401TagsResourceTypeRouteHandler)
  .openapi(get20130401TrafficpoliciesRoute, get20130401TrafficpoliciesRouteHandler)
  .openapi(get20130401TrafficpolicyinstancesRoute, get20130401TrafficpolicyinstancesRouteHandler)
  .openapi(
    get20130401TrafficpolicyinstancesHostedzoneIdRoute,
    get20130401TrafficpolicyinstancesHostedzoneIdRouteHandler,
  )
  .openapi(
    get20130401TrafficpolicyinstancesTrafficpolicyIdVersionRoute,
    get20130401TrafficpolicyinstancesTrafficpolicyIdVersionRouteHandler,
  )
  .openapi(
    get20130401TrafficpoliciesIdVersionsRoute,
    get20130401TrafficpoliciesIdVersionsRouteHandler,
  )
  .openapi(
    get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeRoute,
    get20130401TestdnsanswerHostedzoneidRecordnameRecordtypeRouteHandler,
  )

export default app
