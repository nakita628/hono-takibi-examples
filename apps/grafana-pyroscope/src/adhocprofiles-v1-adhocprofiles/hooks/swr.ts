import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdhocprofilesV1AdHocProfileServiceKey() {
  return ['adhocprofiles.v1.AdHocProfileService'] as const
}

export function getPostAdhocprofilesV1AdHocProfileServiceDiffKey() {
  return [
    'adhocprofiles.v1.AdHocProfileService',
    '/adhocprofiles.v1.AdHocProfileService/Diff',
    'POST',
  ] as const
}

export function usePostAdhocprofilesV1AdHocProfileServiceDiff<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['Diff']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['Diff']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdhocprofilesV1AdHocProfileServiceDiffKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['adhocprofiles.v1.AdHocProfileService']['Diff']['$post']
          >
        },
      ) =>
        parseResponse(
          client['adhocprofiles.v1.AdHocProfileService'].Diff.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdhocprofilesV1AdHocProfileServiceGetKey() {
  return [
    'adhocprofiles.v1.AdHocProfileService',
    '/adhocprofiles.v1.AdHocProfileService/Get',
    'POST',
  ] as const
}

export function usePostAdhocprofilesV1AdHocProfileServiceGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['Get']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['Get']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdhocprofilesV1AdHocProfileServiceGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['adhocprofiles.v1.AdHocProfileService']['Get']['$post']
          >
        },
      ) =>
        parseResponse(client['adhocprofiles.v1.AdHocProfileService'].Get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdhocprofilesV1AdHocProfileServiceListKey() {
  return [
    'adhocprofiles.v1.AdHocProfileService',
    '/adhocprofiles.v1.AdHocProfileService/List',
    'POST',
  ] as const
}

export function usePostAdhocprofilesV1AdHocProfileServiceList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['List']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['List']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdhocprofilesV1AdHocProfileServiceListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['adhocprofiles.v1.AdHocProfileService']['List']['$post']
          >
        },
      ) =>
        parseResponse(
          client['adhocprofiles.v1.AdHocProfileService'].List.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdhocprofilesV1AdHocProfileServiceUploadKey() {
  return [
    'adhocprofiles.v1.AdHocProfileService',
    '/adhocprofiles.v1.AdHocProfileService/Upload',
    'POST',
  ] as const
}

export function usePostAdhocprofilesV1AdHocProfileServiceUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['Upload']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['Upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdhocprofilesV1AdHocProfileServiceUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['adhocprofiles.v1.AdHocProfileService']['Upload']['$post']
          >
        },
      ) =>
        parseResponse(
          client['adhocprofiles.v1.AdHocProfileService'].Upload.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
