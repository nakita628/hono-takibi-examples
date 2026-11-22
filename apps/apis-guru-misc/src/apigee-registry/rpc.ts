import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1ProjectsProjectLocationsLocationApis(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis.$get(args, options),
  )
}

export async function postV1ProjectsProjectLocationsLocationApis(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis.$post(args, options),
  )
}

export async function getV1ProjectsProjectLocationsLocationApisApi(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].$get(args, options),
  )
}

export async function deleteV1ProjectsProjectLocationsLocationApisApi(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].$delete(args, options),
  )
}

export async function patchV1ProjectsProjectLocationsLocationApisApi(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].$patch(args, options),
  )
}

export async function getV1ProjectsProjectLocationsLocationApisApiDeployments(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].deployments.$get(
      args,
      options,
    ),
  )
}

export async function postV1ProjectsProjectLocationsLocationApisApiDeployments(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].deployments.$post(
      args,
      options,
    ),
  )
}

export async function getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeployment(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
      ':deployment'
    ].$get(args, options),
  )
}

export async function deleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeployment(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
      ':deployment'
    ].$delete(args, options),
  )
}

export async function patchV1ProjectsProjectLocationsLocationApisApiDeploymentsDeployment(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
      ':deployment'
    ].$patch(args, options),
  )
}

export async function deleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentDeleteRevision(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:deleteRevision']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
      ':deployment:deleteRevision'
    ].$delete(args, options),
  )
}

export async function getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisions(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
      ':deployment:listRevisions'
    ].$get(args, options),
  )
}

export async function postV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentRollback(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:rollback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
      ':deployment:rollback'
    ].$post(args, options),
  )
}

export async function postV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentTagRevision(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:tagRevision']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
      ':deployment:tagRevision'
    ].$post(args, options),
  )
}

export async function getV1ProjectsProjectLocationsLocationApisApiVersions(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].versions.$get(args, options),
  )
}

export async function postV1ProjectsProjectLocationsLocationApisApiVersions(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].versions.$post(
      args,
      options,
    ),
  )
}

export async function getV1ProjectsProjectLocationsLocationApisApiVersionsVersion(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].versions[':version'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV1ProjectsProjectLocationsLocationApisApiVersionsVersion(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].versions[':version'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1ProjectsProjectLocationsLocationApisApiVersionsVersion(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].versions[':version'].$patch(
      args,
      options,
    ),
  )
}

export async function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecs(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
      ':version'
    ].specs.$get(args, options),
  )
}

export async function postV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecs(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
      ':version'
    ].specs.$post(args, options),
  )
}

export async function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpec(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].versions[':version'].specs[
      ':spec'
    ].$get(args, options),
  )
}

export async function deleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpec(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].versions[':version'].specs[
      ':spec'
    ].$delete(args, options),
  )
}

export async function patchV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpec(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].versions[':version'].specs[
      ':spec'
    ].$patch(args, options),
  )
}

export async function deleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecDeleteRevision(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:deleteRevision']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].versions[':version'].specs[
      ':spec:deleteRevision'
    ].$delete(args, options),
  )
}

export async function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContents(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].versions[':version'].specs[
      ':spec:getContents'
    ].$get(args, options),
  )
}

export async function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisions(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].versions[':version'].specs[
      ':spec:listRevisions'
    ].$get(args, options),
  )
}

export async function postV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecRollback(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:rollback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].versions[':version'].specs[
      ':spec:rollback'
    ].$post(args, options),
  )
}

export async function postV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecTagRevision(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:tagRevision']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].apis[':api'].versions[':version'].specs[
      ':spec:tagRevision'
    ].$post(args, options),
  )
}

export async function getV1ProjectsProjectLocationsLocationArtifacts(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].artifacts.$get(args, options),
  )
}

export async function postV1ProjectsProjectLocationsLocationArtifacts(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].artifacts.$post(args, options),
  )
}

export async function getV1ProjectsProjectLocationsLocationArtifactsArtifact(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].artifacts[':artifact'].$get(
      args,
      options,
    ),
  )
}

export async function putV1ProjectsProjectLocationsLocationArtifactsArtifact(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].artifacts[':artifact'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV1ProjectsProjectLocationsLocationArtifactsArtifact(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].artifacts[':artifact'].$delete(
      args,
      options,
    ),
  )
}

export async function getV1ProjectsProjectLocationsLocationArtifactsArtifactGetContents(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].locations[':location'].artifacts[':artifact:getContents'].$get(
      args,
      options,
    ),
  )
}
