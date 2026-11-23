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

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getOcsKey() {
  return ['ocs'] as const
}

export function getIndexPhpAppsThemingThemeThemeIdCssQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
    >
  >,
) {
  return ['index.php', '/index.php/apps/theming/theme/:themeId.css', toValue(args)] as const
}

export function getIndexPhpAppsThemingThemeThemeIdCssQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpAppsThemingThemeThemeIdCssQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].apps.theming.theme[':themeId.css'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpAppsThemingThemeThemeIdCss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
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
                    (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
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
                    (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndexPhpAppsThemingThemeThemeIdCssQueryKey>
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
              (typeof client)['index.php']['apps']['theming']['theme'][':themeId.css']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsThemingThemeThemeIdCssQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpAppsThemingThemeThemeIdCssQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].apps.theming.theme[':themeId.css'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndexPhpAppsThemingImageKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>
  >,
) {
  return ['index.php', '/index.php/apps/theming/image/:key', toValue(args)] as const
}

export function getIndexPhpAppsThemingImageKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpAppsThemingImageKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].apps.theming.image[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpAppsThemingImageKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>
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
                    (typeof client)['index.php']['apps']['theming']['image'][':key']['$get']
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
                    (typeof client)['index.php']['apps']['theming']['image'][':key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndexPhpAppsThemingImageKeyQueryKey>
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
            ReturnType<(typeof client)['index.php']['apps']['theming']['image'][':key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsThemingImageKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpAppsThemingImageKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].apps.theming.image[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndexPhpAppsThemingManifestAppQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']>
  >,
) {
  return ['index.php', '/index.php/apps/theming/manifest/:app', toValue(args)] as const
}

export function getIndexPhpAppsThemingManifestAppQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpAppsThemingManifestAppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].apps.theming.manifest[':app'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpAppsThemingManifestApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']>
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
                    (typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']
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
                    (typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndexPhpAppsThemingManifestAppQueryKey>
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
            ReturnType<(typeof client)['index.php']['apps']['theming']['manifest'][':app']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsThemingManifestAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpAppsThemingManifestAppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].apps.theming.manifest[':app'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndexPhpAppsThemingFaviconAppQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']>
  >,
) {
  return ['index.php', '/index.php/apps/theming/favicon/:app', toValue(args)] as const
}

export function getIndexPhpAppsThemingFaviconAppQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpAppsThemingFaviconAppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].apps.theming.favicon[':app'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpAppsThemingFaviconApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']>
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
                    (typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']
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
                    (typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndexPhpAppsThemingFaviconAppQueryKey>
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
            ReturnType<(typeof client)['index.php']['apps']['theming']['favicon'][':app']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsThemingFaviconAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpAppsThemingFaviconAppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].apps.theming.favicon[':app'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndexPhpAppsThemingIconAppQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>
  >,
) {
  return ['index.php', '/index.php/apps/theming/icon/:app', toValue(args)] as const
}

export function getIndexPhpAppsThemingIconAppQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpAppsThemingIconAppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].apps.theming.icon[':app'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpAppsThemingIconApp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>
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
                    (typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']
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
                    (typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndexPhpAppsThemingIconAppQueryKey>
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
            ReturnType<(typeof client)['index.php']['apps']['theming']['icon'][':app']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsThemingIconAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpAppsThemingIconAppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].apps.theming.icon[':app'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndexPhpAppsThemingImgAppImageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
    >
  >,
) {
  return ['index.php', '/index.php/apps/theming/img/:app/:image', toValue(args)] as const
}

export function getIndexPhpAppsThemingImgAppImageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpAppsThemingImgAppImageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].apps.theming.img[':app'][':image'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpAppsThemingImgAppImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
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
                    (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
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
                    (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndexPhpAppsThemingImgAppImageQueryKey>
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
              (typeof client)['index.php']['apps']['theming']['img'][':app'][':image']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsThemingImgAppImageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpAppsThemingImgAppImageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].apps.theming.img[':app'][':image'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndexPhpAppsThemingBackgroundQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['theming']['background']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['index.php', '/index.php/apps/theming/background', keyArgs] as const
}

export function getIndexPhpAppsThemingBackgroundQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['theming']['background']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpAppsThemingBackgroundQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].apps.theming.background.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpAppsThemingBackground<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['index.php']['apps']['theming']['background']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['theming']['background']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['index.php']['apps']['theming']['background']['$get']>
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
                  ReturnType<(typeof client)['index.php']['apps']['theming']['background']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIndexPhpAppsThemingBackgroundQueryKey>
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
          Awaited<ReturnType<(typeof client)['index.php']['apps']['theming']['background']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsThemingBackgroundQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpAppsThemingBackgroundQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].apps.theming.background.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIndexPhpAppsThemingBackgroundTypeMutationKey() {
  return ['index.php', '/index.php/apps/theming/background/:type', 'POST'] as const
}

export function getPostIndexPhpAppsThemingBackgroundTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['index.php']['apps']['theming']['background'][':type']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['index.php']['apps']['theming']['background'][':type']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostIndexPhpAppsThemingBackgroundTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['index.php']['apps']['theming']['background'][':type']['$post']
      >,
    ) {
      return parseResponse(
        client['index.php'].apps.theming.background[':type'].$post(args, options),
      )
    },
  })
}

export function usePostIndexPhpAppsThemingBackgroundType<
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
                    (typeof client)['index.php']['apps']['theming']['background'][':type']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['index.php']['apps']['theming']['background'][':type']['$post']
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
  const mutationDefaults = getPostIndexPhpAppsThemingBackgroundTypeMutationOptions<
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

export function getDeleteIndexPhpAppsThemingBackgroundCustomMutationKey() {
  return ['index.php', '/index.php/apps/theming/background/custom', 'DELETE'] as const
}

export function getDeleteIndexPhpAppsThemingBackgroundCustomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['index.php']['apps']['theming']['background']['custom']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['index.php']['apps']['theming']['background']['custom']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexPhpAppsThemingBackgroundCustomMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['index.php']['apps']['theming']['background']['custom']['$delete']
      >,
    ) {
      return parseResponse(
        client['index.php'].apps.theming.background.custom.$delete(args, options),
      )
    },
  })
}

export function useDeleteIndexPhpAppsThemingBackgroundCustom<
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
                    (typeof client)['index.php']['apps']['theming']['background']['custom']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['index.php']['apps']['theming']['background']['custom']['$delete']
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
  const mutationDefaults = getDeleteIndexPhpAppsThemingBackgroundCustomMutationOptions<
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

export function getPutOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/theming/api/v1/theme/:themeId/enable', 'PUT'] as const
}

export function getPutOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['enable']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['enable']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['enable']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.theming.api.v1.theme[':themeId'].enable.$put(args, options),
      )
    },
  })
}

export function usePutOcsV2PhpAppsThemingApiV1ThemeThemeIdEnable<
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
                    (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['enable']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['enable']['$put']
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
  const mutationDefaults = getPutOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableMutationOptions<
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

export function getDeleteOcsV2PhpAppsThemingApiV1ThemeThemeIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/theming/api/v1/theme/:themeId', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsThemingApiV1ThemeThemeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsThemingApiV1ThemeThemeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.theming.api.v1.theme[':themeId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOcsV2PhpAppsThemingApiV1ThemeThemeId<
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
                    (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['theming']['api']['v1']['theme'][':themeId']['$delete']
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
  const mutationDefaults = getDeleteOcsV2PhpAppsThemingApiV1ThemeThemeIdMutationOptions<
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
