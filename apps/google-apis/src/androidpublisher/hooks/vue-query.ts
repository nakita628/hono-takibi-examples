import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAndroidpublisherKey() {
  return ['androidpublisher'] as const
}

export function getPostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApkMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/internalappsharing/:packageName/artifacts/apk',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['apk']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['apk']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['apk']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications.internalappsharing[
          ':packageName'
        ].artifacts.apk.$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['apk']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['apk']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApkMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundleMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/internalappsharing/:packageName/artifacts/bundle',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['bundle']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['bundle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['bundle']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications.internalappsharing[
          ':packageName'
        ].artifacts.bundle.$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['bundle']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['bundle']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundleMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/deviceTierConfigs',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].deviceTierConfigs.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].deviceTierConfigs.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/deviceTierConfigs',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].deviceTierConfigs.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs'][':deviceTierConfigId']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/deviceTierConfigs/:deviceTierConfigId',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs'][':deviceTierConfigId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].deviceTierConfigs[
          ':deviceTierConfigId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs'][':deviceTierConfigId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs'][':deviceTierConfigId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs'][':deviceTierConfigId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs'][':deviceTierConfigId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs'][':deviceTierConfigId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].deviceTierConfigs[
            ':deviceTierConfigId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidpublisherV3ApplicationsPackageNameEditsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits.$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEdits<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAndroidpublisherV3ApplicationsPackageNameEditsMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAndroidpublisherV3ApplicationsPackageNameEditsEditIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameEditsEditId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameEditsEditIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId',
    'DELETE',
  ] as const
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameEditsEditIdApks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksExternallyHostedMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks/externallyHosted',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksExternallyHostedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['externallyHosted']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['externallyHosted']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksExternallyHostedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['externallyHosted']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[
          ':editId'
        ].apks.externallyHosted.$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksExternallyHosted<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['externallyHosted']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['externallyHosted']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksExternallyHostedMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeDeobfuscationFilesDeobfuscationFileTypeMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks/:apkVersionCode/deobfuscationFiles/:deobfuscationFileType',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeDeobfuscationFilesDeobfuscationFileTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['deobfuscationFiles'][':deobfuscationFileType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['deobfuscationFiles'][':deobfuscationFileType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeDeobfuscationFilesDeobfuscationFileTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['deobfuscationFiles'][':deobfuscationFileType']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
          ':apkVersionCode'
        ].deobfuscationFiles[':deobfuscationFileType'].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeDeobfuscationFilesDeobfuscationFileType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['deobfuscationFiles'][':deobfuscationFileType']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['deobfuscationFiles'][':deobfuscationFileType']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeDeobfuscationFilesDeobfuscationFileTypeMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks/:apkVersionCode/expansionFiles/:expansionFileType',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
          ':apkVersionCode'
        ].expansionFiles[':expansionFileType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
            ':apkVersionCode'
          ].expansionFiles[':expansionFileType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks/:apkVersionCode/expansionFiles/:expansionFileType',
    'PUT',
  ] as const
}

export function getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$put']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
          ':apkVersionCode'
        ].expansionFiles[':expansionFileType'].$put(args, options),
      )
    },
  })
}

export function usePutAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks/:apkVersionCode/expansionFiles/:expansionFileType',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
          ':apkVersionCode'
        ].expansionFiles[':expansionFileType'].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeMutationOptions<
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

export function getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks/:apkVersionCode/expansionFiles/:expansionFileType',
    'PATCH',
  ] as const
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$patch']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
          ':apkVersionCode'
        ].expansionFiles[':expansionFileType'].$patch(args, options),
      )
    },
  })
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/bundles',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].bundles.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].bundles.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/bundles',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].bundles.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrackQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['countryAvailability'][':track']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/countryAvailability/:track',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrackQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['countryAvailability'][':track']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrackQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[
          ':editId'
        ].countryAvailability[':track'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['countryAvailability'][':track']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['countryAvailability'][':track']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['countryAvailability'][':track']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['countryAvailability'][':track']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrackQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['countryAvailability'][':track']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrackQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrackQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[
            ':editId'
          ].countryAvailability[':track'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/details',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].details.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].details.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/details',
    'PUT',
  ] as const
}

export function getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$put']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].details.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsMutationOptions<
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

export function getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/details',
    'PATCH',
  ] as const
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$patch']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].details.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameEditsEditIdListings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings',
    'DELETE',
  ] as const
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
          ':language'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
            ':language'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language',
    'PUT',
  ] as const
}

export function getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$put']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
          ':language'
        ].$put(args, options),
      )
    },
  })
}

export function usePutAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageMutationOptions<
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

export function getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language',
    'DELETE',
  ] as const
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
          ':language'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageMutationOptions<
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

export function getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language',
    'PATCH',
  ] as const
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$patch']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
          ':language'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language/:imageType',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
          ':language'
        ][':imageType'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
            ':language'
          ][':imageType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language/:imageType',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
          ':language'
        ][':imageType'].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeMutationOptions<
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

export function getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language/:imageType',
    'DELETE',
  ] as const
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
          ':language'
        ][':imageType'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeMutationOptions<
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

export function getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeImageIdMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language/:imageType/:imageId',
    'DELETE',
  ] as const
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeImageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType'][':imageId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType'][':imageId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeImageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType'][':imageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
          ':language'
        ][':imageType'][':imageId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeImageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType'][':imageId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType'][':imageId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeImageIdMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/testers/:track',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].testers[
          ':track'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].testers[
            ':track'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/testers/:track',
    'PUT',
  ] as const
}

export function getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$put']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].testers[
          ':track'
        ].$put(args, options),
      )
    },
  })
}

export function usePutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrack<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackMutationOptions<
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

export function getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/testers/:track',
    'PATCH',
  ] as const
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$patch']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].testers[
          ':track'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrack<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/tracks',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/tracks/:track',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks[
          ':track'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks[
            ':track'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/tracks/:track',
    'PUT',
  ] as const
}

export function getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$put']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks[
          ':track'
        ].$put(args, options),
      )
    },
  })
}

export function usePutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrack<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackMutationOptions<
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

export function getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId/tracks/:track',
    'PATCH',
  ] as const
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$patch']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks[
          ':track'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrack<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdCommitMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId:commit',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:commit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:commit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdCommitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:commit']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId:commit'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdCommit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:commit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:commit']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdCommitMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdValidateMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/edits/:editId:validate',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:validate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:validate']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].edits[':editId:validate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameEditsEditIdValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:validate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:validate']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameEditsEditIdValidateMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/generatedApks/:versionCode',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].generatedApks[':versionCode'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].generatedApks[
            ':versionCode'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['downloads'][':downloadId:download']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/generatedApks/:versionCode/downloads/:downloadId:download',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['downloads'][':downloadId:download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].generatedApks[
          ':versionCode'
        ].downloads[':downloadId:download'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['downloads'][':downloadId:download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['downloads'][':downloadId:download']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['downloads'][':downloadId:download']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['downloads'][':downloadId:download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['downloads'][':downloadId:download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].generatedApks[
            ':versionCode'
          ].downloads[':downloadId:download'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidpublisherV3ApplicationsPackageNameInappproductsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/inappproducts',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameInappproductsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameInappproductsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].inappproducts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameInappproducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameInappproductsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameInappproductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameInappproductsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].inappproducts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidpublisherV3ApplicationsPackageNameInappproductsMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/inappproducts',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameInappproductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidpublisherV3ApplicationsPackageNameInappproductsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].inappproducts.$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameInappproducts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameInappproductsMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameInappproductsSkuQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/inappproducts/:sku',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameInappproductsSkuQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameInappproductsSkuQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].inappproducts[':sku'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameInappproductsSku<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameInappproductsSkuQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameInappproductsSkuQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameInappproductsSkuQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].inappproducts[':sku'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutAndroidpublisherV3ApplicationsPackageNameInappproductsSkuMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/inappproducts/:sku',
    'PUT',
  ] as const
}

export function getPutAndroidpublisherV3ApplicationsPackageNameInappproductsSkuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAndroidpublisherV3ApplicationsPackageNameInappproductsSkuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$put']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].inappproducts[':sku'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAndroidpublisherV3ApplicationsPackageNameInappproductsSku<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutAndroidpublisherV3ApplicationsPackageNameInappproductsSkuMutationOptions<
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

export function getDeleteAndroidpublisherV3ApplicationsPackageNameInappproductsSkuMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/inappproducts/:sku',
    'DELETE',
  ] as const
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameInappproductsSkuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAndroidpublisherV3ApplicationsPackageNameInappproductsSkuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].inappproducts[':sku'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameInappproductsSku<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAndroidpublisherV3ApplicationsPackageNameInappproductsSkuMutationOptions<
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

export function getPatchAndroidpublisherV3ApplicationsPackageNameInappproductsSkuMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/inappproducts/:sku',
    'PATCH',
  ] as const
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameInappproductsSkuMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAndroidpublisherV3ApplicationsPackageNameInappproductsSkuMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$patch']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].inappproducts[':sku'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameInappproductsSku<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchAndroidpublisherV3ApplicationsPackageNameInappproductsSkuMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefundMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/orders/:orderId:refund',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['orders'][':orderId:refund']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['orders'][':orderId:refund']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['orders'][':orderId:refund']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].orders[':orderId:refund'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefund<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['orders'][':orderId:refund']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['orders'][':orderId:refund']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefundMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPricesMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/pricing:convertRegionPrices',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPricesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['pricing:convertRegionPrices']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['pricing:convertRegionPrices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPricesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['pricing:convertRegionPrices']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'][
          'pricing:convertRegionPrices'
        ].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPrices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['pricing:convertRegionPrices']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['pricing:convertRegionPrices']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPricesMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/products/:productId/tokens/:token',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].purchases.products[
          ':productId'
        ].tokens[':token'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].purchases.products[
            ':productId'
          ].tokens[':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledgeMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/products/:productId/tokens/:token:acknowledge',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:acknowledge']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:acknowledge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledgeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:acknowledge']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].purchases.products[
          ':productId'
        ].tokens[':token:acknowledge'].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:acknowledge']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:acknowledge']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledgeMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsumeMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/products/:productId/tokens/:token:consume',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:consume']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:consume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:consume']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].purchases.products[
          ':productId'
        ].tokens[':token:consume'].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:consume']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:consume']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsumeMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
          ':subscriptionId'
        ].tokens[':token'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
            ':subscriptionId'
          ].tokens[':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledgeMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token:acknowledge',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:acknowledge']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:acknowledge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledgeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:acknowledge']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
          ':subscriptionId'
        ].tokens[':token:acknowledge'].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:acknowledge']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:acknowledge']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledgeMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancelMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token:cancel',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
          ':subscriptionId'
        ].tokens[':token:cancel'].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:cancel']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancelMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDeferMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token:defer',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDeferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:defer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:defer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDeferMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:defer']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
          ':subscriptionId'
        ].tokens[':token:defer'].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDefer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:defer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:defer']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDeferMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefundMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token:refund',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:refund']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:refund']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:refund']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
          ':subscriptionId'
        ].tokens[':token:refund'].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefund<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:refund']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:refund']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefundMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevokeMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token:revoke',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:revoke']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:revoke']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
          ':subscriptionId'
        ].tokens[':token:revoke'].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:revoke']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:revoke']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevokeMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptionsv2']['tokens'][':token']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptionsv2/tokens/:token',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptionsv2']['tokens'][':token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].purchases.subscriptionsv2.tokens[
          ':token'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptionsv2']['tokens'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptionsv2']['tokens'][':token']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptionsv2']['tokens'][':token']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptionsv2']['tokens'][':token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptionsv2']['tokens'][':token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].purchases.subscriptionsv2.tokens[
            ':token'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['voidedpurchases']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/purchases/voidedpurchases',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['voidedpurchases']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].purchases.voidedpurchases.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['voidedpurchases']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['voidedpurchases']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['voidedpurchases']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['voidedpurchases']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['voidedpurchases']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].purchases.voidedpurchases.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidpublisherV3ApplicationsPackageNameReviewsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['reviews']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/reviews',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameReviewsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['reviews']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAndroidpublisherV3ApplicationsPackageNameReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].reviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['reviews']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['reviews']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['reviews']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['reviews']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameReviewsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['reviews']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAndroidpublisherV3ApplicationsPackageNameReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/reviews/:reviewId',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].reviews[':reviewId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameReviewsReviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].reviews[':reviewId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReplyMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/reviews/:reviewId:reply',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId:reply']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId:reply']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId:reply']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].reviews[':reviewId:reply'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId:reply']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId:reply']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReplyMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameSubscriptionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameSubscriptionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameSubscriptionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions.$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId',
    'DELETE',
  ] as const
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdMutationOptions<
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

export function getPatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId',
    'PATCH',
  ] as const
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$patch']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdMutationOptions<
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

export function getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId',
    'DELETE',
  ] as const
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions[
          ':productId'
        ].basePlans[':basePlanId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions[
          ':productId'
        ].basePlans[':basePlanId'].offers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].basePlans[':basePlanId'].offers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions[
          ':productId'
        ].basePlans[':basePlanId'].offers.$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers/:offerId',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions[
          ':productId'
        ].basePlans[':basePlanId'].offers[':offerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].subscriptions[
            ':productId'
          ].basePlans[':basePlanId'].offers[':offerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers/:offerId',
    'DELETE',
  ] as const
}

export function getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions[
          ':productId'
        ].basePlans[':basePlanId'].offers[':offerId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdMutationOptions<
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

export function getPatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers/:offerId',
    'PATCH',
  ] as const
}

export function getPatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$patch']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions[
          ':productId'
        ].basePlans[':basePlanId'].offers[':offerId'].$patch(args, options),
      )
    },
  })
}

export function usePatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivateMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers/:offerId:activate',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:activate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:activate']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions[
          ':productId'
        ].basePlans[':basePlanId'].offers[':offerId:activate'].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:activate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:activate']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivateMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivateMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers/:offerId:deactivate',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:deactivate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:deactivate']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions[
          ':productId'
        ].basePlans[':basePlanId'].offers[':offerId:deactivate'].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:deactivate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:deactivate']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivateMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivateMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId:activate',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:activate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:activate']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions[
          ':productId'
        ].basePlans[':basePlanId:activate'].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:activate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:activate']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivateMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivateMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId:deactivate',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:deactivate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:deactivate']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions[
          ':productId'
        ].basePlans[':basePlanId:deactivate'].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:deactivate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:deactivate']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivateMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePricesMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId:migratePrices',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePricesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:migratePrices']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:migratePrices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePricesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:migratePrices']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions[
          ':productId'
        ].basePlans[':basePlanId:migratePrices'].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePrices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:migratePrices']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:migratePrices']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePricesMutationOptions<
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

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchiveMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId:archive',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId:archive']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId:archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId:archive']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].subscriptions[
          ':productId:archive'
        ].$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId:archive']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId:archive']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchiveMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/systemApks/:versionCode/variants',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].systemApks[
          ':versionCode'
        ].variants.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].systemApks[
            ':versionCode'
          ].variants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsMutationKey() {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/systemApks/:versionCode/variants',
    'POST',
  ] as const
}

export function getPostAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].systemApks[
          ':versionCode'
        ].variants.$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsMutationOptions<
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

export function getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/systemApks/:versionCode/variants/:variantId',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].systemApks[':versionCode'].variants[
          ':variantId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].systemApks[
            ':versionCode'
          ].variants[':variantId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId:download']['$get']
    >
  >,
) {
  return [
    'androidpublisher',
    '/androidpublisher/v3/applications/:packageName/systemApks/:versionCode/variants/:variantId:download',
    toValue(args),
  ] as const
}

export function getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId:download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3.applications[':packageName'].systemApks[':versionCode'].variants[
          ':variantId:download'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId:download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId:download']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId:download']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId:download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId:download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3.applications[':packageName'].systemApks[
            ':versionCode'
          ].variants[':variantId:download'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAndroidpublisherV3NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.androidpublisher.v3)[':name']['$get']>>,
) {
  return ['androidpublisher', '/androidpublisher/v3/:name', toValue(args)] as const
}

export function getAndroidpublisherV3NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.androidpublisher.v3)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAndroidpublisherV3NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidpublisherV3Name<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.androidpublisher.v3)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAndroidpublisherV3NameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAndroidpublisherV3NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAndroidpublisherV3NameMutationKey() {
  return ['androidpublisher', '/androidpublisher/v3/:name', 'DELETE'] as const
}

export function getDeleteAndroidpublisherV3NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.androidpublisher.v3)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAndroidpublisherV3NameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.androidpublisher.v3)[':name']['$delete']>,
    ) {
      return parseResponse(client.androidpublisher.v3[':name'].$delete(args, options))
    },
  })
}

export function useDeleteAndroidpublisherV3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.androidpublisher.v3)[':name']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAndroidpublisherV3NameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAndroidpublisherV3NameMutationKey() {
  return ['androidpublisher', '/androidpublisher/v3/:name', 'PATCH'] as const
}

export function getPatchAndroidpublisherV3NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.androidpublisher.v3)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAndroidpublisherV3NameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.androidpublisher.v3)[':name']['$patch']>,
    ) {
      return parseResponse(client.androidpublisher.v3[':name'].$patch(args, options))
    },
  })
}

export function usePatchAndroidpublisherV3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.androidpublisher.v3)[':name']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAndroidpublisherV3NameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAndroidpublisherV3NameRefundMutationKey() {
  return ['androidpublisher', '/androidpublisher/v3/:name:refund', 'POST'] as const
}

export function getPostAndroidpublisherV3NameRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name:refund']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.androidpublisher.v3)[':name:refund']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidpublisherV3NameRefundMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.androidpublisher.v3)[':name:refund']['$post']>,
    ) {
      return parseResponse(client.androidpublisher.v3[':name:refund'].$post(args, options))
    },
  })
}

export function usePostAndroidpublisherV3NameRefund<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.androidpublisher.v3)[':name:refund']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.androidpublisher.v3)[':name:refund']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAndroidpublisherV3NameRefundMutationOptions<
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

export function getPostAndroidpublisherV3ParentExternalTransactionsMutationKey() {
  return ['androidpublisher', '/androidpublisher/v3/:parent/externalTransactions', 'POST'] as const
}

export function getPostAndroidpublisherV3ParentExternalTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.androidpublisher.v3)[':parent']['externalTransactions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.androidpublisher.v3)[':parent']['externalTransactions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidpublisherV3ParentExternalTransactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.androidpublisher.v3)[':parent']['externalTransactions']['$post']
      >,
    ) {
      return parseResponse(
        client.androidpublisher.v3[':parent'].externalTransactions.$post(args, options),
      )
    },
  })
}

export function usePostAndroidpublisherV3ParentExternalTransactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.androidpublisher.v3)[':parent']['externalTransactions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.androidpublisher.v3)[':parent']['externalTransactions']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAndroidpublisherV3ParentExternalTransactionsMutationOptions<
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

export function getPostAndroidpublisherV3ParentGrantsMutationKey() {
  return ['androidpublisher', '/androidpublisher/v3/:parent/grants', 'POST'] as const
}

export function getPostAndroidpublisherV3ParentGrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.androidpublisher.v3)[':parent']['grants']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.androidpublisher.v3)[':parent']['grants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidpublisherV3ParentGrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.androidpublisher.v3)[':parent']['grants']['$post']>,
    ) {
      return parseResponse(client.androidpublisher.v3[':parent'].grants.$post(args, options))
    },
  })
}

export function usePostAndroidpublisherV3ParentGrants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.androidpublisher.v3)[':parent']['grants']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.androidpublisher.v3)[':parent']['grants']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAndroidpublisherV3ParentGrantsMutationOptions<
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

export function getAndroidpublisherV3ParentUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.androidpublisher.v3)[':parent']['users']['$get']>
  >,
) {
  return ['androidpublisher', '/androidpublisher/v3/:parent/users', toValue(args)] as const
}

export function getAndroidpublisherV3ParentUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.androidpublisher.v3)[':parent']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAndroidpublisherV3ParentUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.androidpublisher.v3[':parent'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAndroidpublisherV3ParentUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.androidpublisher.v3)[':parent']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.androidpublisher.v3)[':parent']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.androidpublisher.v3)[':parent']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.androidpublisher.v3)[':parent']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAndroidpublisherV3ParentUsersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.androidpublisher.v3)[':parent']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAndroidpublisherV3ParentUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAndroidpublisherV3ParentUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.androidpublisher.v3[':parent'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAndroidpublisherV3ParentUsersMutationKey() {
  return ['androidpublisher', '/androidpublisher/v3/:parent/users', 'POST'] as const
}

export function getPostAndroidpublisherV3ParentUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.androidpublisher.v3)[':parent']['users']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.androidpublisher.v3)[':parent']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAndroidpublisherV3ParentUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.androidpublisher.v3)[':parent']['users']['$post']>,
    ) {
      return parseResponse(client.androidpublisher.v3[':parent'].users.$post(args, options))
    },
  })
}

export function usePostAndroidpublisherV3ParentUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.androidpublisher.v3)[':parent']['users']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.androidpublisher.v3)[':parent']['users']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAndroidpublisherV3ParentUsersMutationOptions<
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
