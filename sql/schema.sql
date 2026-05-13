create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  username text unique,
  avatar_url text,
  created_at timestamptz default now()
);

create table if not exists memories (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  image_url text not null,
  created_by uuid references auth.users(id),
  created_at timestamptz default now()
);

create table if not exists notes (
  id uuid primary key default gen_random_uuid(),
  message text not null,
  user_id uuid references auth.users(id),
  created_at timestamptz default now()
);

create table if not exists timeline (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  memory_date date,
  image_url text
);
