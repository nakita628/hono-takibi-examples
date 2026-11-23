import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdhocprofilesV1AdHocProfileServiceKey() {
  return ['adhocprofiles.v1.AdHocProfileService'] as const
}

export function getPostAdhocprofilesV1AdHocProfileServiceDiffMutationKey() {
  return [
    'adhocprofiles.v1.AdHocProfileService',
    '/adhocprofiles.v1.AdHocProfileService/Diff',
    'POST',
  ] as const
}

export function getPostAdhocprofilesV1AdHocProfileServiceDiffMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['Diff']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdhocprofilesV1AdHocProfileServiceDiffMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['adhocprofiles.v1.AdHocProfileService']['Diff']['$post']
      >,
    ) {
      return parseResponse(client['adhocprofiles.v1.AdHocProfileService'].Diff.$post(args, options))
    },
  })
}

export function usePostAdhocprofilesV1AdHocProfileServiceDiff<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['Diff']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdhocprofilesV1AdHocProfileServiceDiffMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAdhocprofilesV1AdHocProfileServiceGetMutationKey() {
  return [
    'adhocprofiles.v1.AdHocProfileService',
    '/adhocprofiles.v1.AdHocProfileService/Get',
    'POST',
  ] as const
}

export function getPostAdhocprofilesV1AdHocProfileServiceGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['Get']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdhocprofilesV1AdHocProfileServiceGetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['adhocprofiles.v1.AdHocProfileService']['Get']['$post']
      >,
    ) {
      return parseResponse(client['adhocprofiles.v1.AdHocProfileService'].Get.$post(args, options))
    },
  })
}

export function usePostAdhocprofilesV1AdHocProfileServiceGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['Get']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdhocprofilesV1AdHocProfileServiceGetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAdhocprofilesV1AdHocProfileServiceListMutationKey() {
  return [
    'adhocprofiles.v1.AdHocProfileService',
    '/adhocprofiles.v1.AdHocProfileService/List',
    'POST',
  ] as const
}

export function getPostAdhocprofilesV1AdHocProfileServiceListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['List']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdhocprofilesV1AdHocProfileServiceListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['adhocprofiles.v1.AdHocProfileService']['List']['$post']
      >,
    ) {
      return parseResponse(client['adhocprofiles.v1.AdHocProfileService'].List.$post(args, options))
    },
  })
}

export function usePostAdhocprofilesV1AdHocProfileServiceList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['List']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdhocprofilesV1AdHocProfileServiceListMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAdhocprofilesV1AdHocProfileServiceUploadMutationKey() {
  return [
    'adhocprofiles.v1.AdHocProfileService',
    '/adhocprofiles.v1.AdHocProfileService/Upload',
    'POST',
  ] as const
}

export function getPostAdhocprofilesV1AdHocProfileServiceUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['Upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdhocprofilesV1AdHocProfileServiceUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['adhocprofiles.v1.AdHocProfileService']['Upload']['$post']
      >,
    ) {
      return parseResponse(
        client['adhocprofiles.v1.AdHocProfileService'].Upload.$post(args, options),
      )
    },
  })
}

export function usePostAdhocprofilesV1AdHocProfileServiceUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['adhocprofiles.v1.AdHocProfileService']['Upload']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['adhocprofiles.v1.AdHocProfileService']['Upload']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdhocprofilesV1AdHocProfileServiceUploadMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
