import type { PageParams } from '@/types/global'
import { http } from '@/utils/http'

type HotParams = PageParams & { subType?: string }
/**
 * 通用热门推荐类型
 * @param url
 * @param data
 * @returns
 */
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http({
    method: 'GET',
    url,
    data,
  })
}
