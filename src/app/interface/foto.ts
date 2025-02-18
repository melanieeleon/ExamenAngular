export interface Foto {
    data: {
        title: string;
        description?: string;
        nasa_id: string;
        media_type: string;
        date_created: string;
      }[];
      links?: { href: string }[];
  }
  