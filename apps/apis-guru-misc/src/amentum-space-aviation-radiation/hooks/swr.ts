import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCari7Key() {
  return ['cari7'] as const
}

export function getParmaKey() {
  return ['parma'] as const
}

export function getRouteKey() {
  return ['route'] as const
}

export function getGetCari7AmbientDoseKey(
  args: InferRequestType<typeof client.cari7.ambient_dose.$get>,
) {
  return ['cari7', '/cari7/ambient_dose', args] as const
}

export function useGetCari7AmbientDose<TError = unknown>(
  args: InferRequestType<typeof client.cari7.ambient_dose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.ambient_dose.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCari7AmbientDoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.ambient_dose.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cari7.ambient_dose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCari7AmbientDose<TError = unknown>(
  args: InferRequestType<typeof client.cari7.ambient_dose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.ambient_dose.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCari7AmbientDoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cari7.ambient_dose.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cari7.ambient_dose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCari7EffectiveDoseKey(
  args: InferRequestType<typeof client.cari7.effective_dose.$get>,
) {
  return ['cari7', '/cari7/effective_dose', args] as const
}

export function useGetCari7EffectiveDose<TError = unknown>(
  args: InferRequestType<typeof client.cari7.effective_dose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cari7.effective_dose.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCari7EffectiveDoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cari7.effective_dose.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cari7.effective_dose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCari7EffectiveDose<TError = unknown>(
  args: InferRequestType<typeof client.cari7.effective_dose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cari7.effective_dose.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCari7EffectiveDoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cari7.effective_dose.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cari7.effective_dose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetParmaAmbientDoseKey(
  args: InferRequestType<typeof client.parma.ambient_dose.$get>,
) {
  return ['parma', '/parma/ambient_dose', args] as const
}

export function useGetParmaAmbientDose<TError = unknown>(
  args: InferRequestType<typeof client.parma.ambient_dose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.ambient_dose.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetParmaAmbientDoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.ambient_dose.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parma.ambient_dose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetParmaAmbientDose<TError = unknown>(
  args: InferRequestType<typeof client.parma.ambient_dose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.ambient_dose.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetParmaAmbientDoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parma.ambient_dose.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parma.ambient_dose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetParmaDifferentialIntensityKey(
  args: InferRequestType<typeof client.parma.differential_intensity.$get>,
) {
  return ['parma', '/parma/differential_intensity', args] as const
}

export function useGetParmaDifferentialIntensity<TError = unknown>(
  args: InferRequestType<typeof client.parma.differential_intensity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.parma.differential_intensity.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetParmaDifferentialIntensityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.parma.differential_intensity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parma.differential_intensity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetParmaDifferentialIntensity<TError = unknown>(
  args: InferRequestType<typeof client.parma.differential_intensity.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.parma.differential_intensity.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetParmaDifferentialIntensityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.parma.differential_intensity.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parma.differential_intensity.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetParmaEffectiveDoseKey(
  args: InferRequestType<typeof client.parma.effective_dose.$get>,
) {
  return ['parma', '/parma/effective_dose', args] as const
}

export function useGetParmaEffectiveDose<TError = unknown>(
  args: InferRequestType<typeof client.parma.effective_dose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.parma.effective_dose.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetParmaEffectiveDoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.parma.effective_dose.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parma.effective_dose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetParmaEffectiveDose<TError = unknown>(
  args: InferRequestType<typeof client.parma.effective_dose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.parma.effective_dose.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetParmaEffectiveDoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.parma.effective_dose.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parma.effective_dose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRouteAmbientDoseKey(
  args: InferRequestType<typeof client.route.ambient_dose.$get>,
) {
  return ['route', '/route/ambient_dose', args] as const
}

export function useGetRouteAmbientDose<TError = unknown>(
  args: InferRequestType<typeof client.route.ambient_dose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.ambient_dose.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRouteAmbientDoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.ambient_dose.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.route.ambient_dose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRouteAmbientDose<TError = unknown>(
  args: InferRequestType<typeof client.route.ambient_dose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.ambient_dose.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRouteAmbientDoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.ambient_dose.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.route.ambient_dose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRouteEffectiveDoseKey(
  args: InferRequestType<typeof client.route.effective_dose.$get>,
) {
  return ['route', '/route/effective_dose', args] as const
}

export function useGetRouteEffectiveDose<TError = unknown>(
  args: InferRequestType<typeof client.route.effective_dose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.route.effective_dose.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRouteEffectiveDoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.route.effective_dose.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.route.effective_dose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRouteEffectiveDose<TError = unknown>(
  args: InferRequestType<typeof client.route.effective_dose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.route.effective_dose.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRouteEffectiveDoseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.route.effective_dose.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.route.effective_dose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
