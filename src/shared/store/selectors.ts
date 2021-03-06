import { useSelector } from 'react-redux';

export function useCuratorData(): any {
  const games = useSelector((state: any) => state.games.list);
  const users = useSelector((state: any) => state.users.list);
  const badges = useSelector((state: any) => state.badges);
  const blog = useSelector((state: any) => state.blog);
  const events = useSelector((state: any) => state.events);
  const points = useSelector((state: any) => state.points);

  return {
    badges,
    blog,
    events,
    games,
    points,
    users,
  };
}

export function usePatreonData(): any {
  const patreonTiers = useSelector((state: any) => state.patreonTiers);
  const patrons = useSelector((state: any) => state.patrons);

  return { patreonTiers, patrons };
}

export function useSettings(): any {
  const settings = useSelector((state: any) => state.settings);

  return { settings };
}

export function useUpdate(): any {
  const update = useSelector((state: any) => state.update);

  return { update };
}
