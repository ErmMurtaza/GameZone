export default function PlayerList({ users, username }) {

  return (
    <div className="w-72 border-r border-slate-800 bg-slate-900">
      <h2 className="px-5 py-4 text-xl font-bold">Players</h2>

      {users.map((user) => (
        <div
          key={user.id}
          className="mx-3 mb-3 flex items-center gap-3 rounded-xl bg-slate-800 p-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-bold">
            {user.name[0].toUpperCase()}
          </div>

          <div>
            <div className="font-semibold">
              {user.name}

              {user.name === username && (
                <span className="ml-2 text-xs text-green-400">(You)</span>
              )}
            </div>

            <div className="text-xs text-green-400">● Online</div>
          </div>
        </div>
      ))}
    </div>
  );
}
