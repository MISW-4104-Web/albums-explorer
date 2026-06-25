import api from "./client";

function mapAlbum(dto) {
  return {
    id: dto.id,
    title: dto.name,
    image: dto.cover,
    description: dto.description,
    genre: dto.genre,
    recordLabel: dto.recordLabel,
    releaseDate: dto.releaseDate,
    performers: dto.performers ?? [],
    tracks: dto.tracks ?? [],
  };
}

function mapComments(dto) {
  return dto.map(d => ({
    id: d.id,
    description: d.description,
    rating: d.rating,
  }));
}

export const albumService = {
  async getAll() {
    const { data } = await api.get("/albums");
    return data.map(mapAlbum);
  },

  async getById(id) {
    const { data } = await api.get(`/albums/${id}`);
    return mapAlbum(data);
  },

  async create(album) {
    const payload = {
      name: album.title,
      cover: album.image,
      description: album.description,
      genre: album.genre,
      recordLabel: album.recordLabel,
      releaseDate: album.releaseDate,
    };

    const { data } = await api.post(
      "/albums",
      payload
    );

    return mapAlbum(data);
  },

  async getCommentsById(id) {
    const { data } = await api.get(`/albums/${id}/comments`);
    return mapComments(data);
  },

  async addCommentById(id, description, rating){
    const payload = {
      description,
      rating,
    };

    const { data } = await api.post(`/albums/${id}/comments`, payload);
    return data;
  }
};