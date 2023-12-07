import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_cxdsf_list = createAsyncThunk(
  "cxdsfs/api_v1_cxdsf_list",
  async payload => {
    const response = await apiService.api_v1_cxdsf_list(payload)
    return response.data
  }
)
export const api_v1_cxdsf_create = createAsyncThunk(
  "cxdsfs/api_v1_cxdsf_create",
  async payload => {
    const response = await apiService.api_v1_cxdsf_create(payload)
    return response.data
  }
)
export const api_v1_cxdsf_retrieve = createAsyncThunk(
  "cxdsfs/api_v1_cxdsf_retrieve",
  async payload => {
    const response = await apiService.api_v1_cxdsf_retrieve(payload)
    return response.data
  }
)
export const api_v1_cxdsf_update = createAsyncThunk(
  "cxdsfs/api_v1_cxdsf_update",
  async payload => {
    const response = await apiService.api_v1_cxdsf_update(payload)
    return response.data
  }
)
export const api_v1_cxdsf_partial_update = createAsyncThunk(
  "cxdsfs/api_v1_cxdsf_partial_update",
  async payload => {
    const response = await apiService.api_v1_cxdsf_partial_update(payload)
    return response.data
  }
)
export const api_v1_cxdsf_destroy = createAsyncThunk(
  "cxdsfs/api_v1_cxdsf_destroy",
  async payload => {
    const response = await apiService.api_v1_cxdsf_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cxdsfsSlice = createSlice({
  name: "cxdsfs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_cxdsf_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cxdsf_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cxdsf_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cxdsf_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cxdsf_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cxdsf_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cxdsf_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cxdsf_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cxdsf_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cxdsf_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cxdsf_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cxdsf_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cxdsf_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cxdsf_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cxdsf_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cxdsf_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cxdsf_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cxdsf_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_cxdsf_list,
  api_v1_cxdsf_create,
  api_v1_cxdsf_retrieve,
  api_v1_cxdsf_update,
  api_v1_cxdsf_partial_update,
  api_v1_cxdsf_destroy,
  slice: cxdsfsSlice
}
