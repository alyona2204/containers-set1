import Team from '../Team';

describe('Team', () => {
  let team;
  let char1;
  let char2;

  beforeEach(() => {
    team = new Team();
    char1 = { name: 'Bowman' };
    char2 = { name: 'Swordsman' };
  });

  test('add adds character to team', () => {
    team.add(char1);
    expect(team.members.has(char1)).toBe(true);
  });

  test('add throws error if character already exists', () => {
    team.add(char1);
    expect(() => team.add(char1)).toThrow('Character already exists in team');
  });

  test('addAll adds multiple characters without duplicates', () => {
    team.addAll(char1, char2, char1);
    expect(team.toArray()).toEqual([char1, char2]);
  });

  test('toArray converts Set to Array', () => {
    team.addAll(char1, char2);
    expect(Array.isArray(team.toArray())).toBe(true);
  });
});
