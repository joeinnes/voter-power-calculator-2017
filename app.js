var voteValue = 1
var votingData = {
  'Conservatives': {
    'votes': 11334920,
    'seats': 331
  },
  'Labour': {
    'votes': 9344328,
    'seats': 232
  },
  'SNP': {
    'votes': 1454436,
    'seats': 56
  },
  'Lib Dems': {
    'votes': 2415888,
    'seats': 8
  },
  'Democratic Unionist Party': {
    'votes': 184260,
    'seats': 8
  },
  'Sinn Fein': {
    'votes': 176232,
    'seats': 4
  },
  'Plaid Cymru': {
    'votes': 181694,
    'seats': 3
  },
  'SDLP': {
    'votes': 99809,
    'seats': 3
  },
  'Ulster Unionist Party': {
    'votes': 114935,
    'seats': 2
  },
  'UKIP': {
    'votes': 3881129,
    'seats': 1
  },
  'Green Party': {
    'votes': 1157613,
    'seats': 1
  },
  'votesForWinningParties': 30345244,
  'totalVotes': 30691680,
  'totalSeats': 650,
  'electorate': 46425386
}

var i
document.getElementById('votedFor').addEventListener('change', updateSummary, false)
var averageVotesPerSeat = Math.round(votingData.votesForWinningParties / votingData.totalSeats)

function updateSummary () {
  var votedFor = document.getElementById('votedFor').value
  var voteStats = votingData[votedFor]
  var votesPerSeat = Math.round(voteStats.votes / voteStats.seats)
  var seatsPerVoteShare = Math.round((voteStats.votes / votingData.votesForWinningParties) * 650)
  voteValue = (1 / (votesPerSeat / averageVotesPerSeat)).toFixed(2)
  var seatComparison

  if (seatsPerVoteShare == voteStats.seats) {
    seatComparison = 'Your party would have gained exactly as many seats.'
  } else {
    seatComparison = 'If the votes of everyone in your party had been as strong as an average vote, then your party would have received ' + seatsPerVoteShare + ' seats, instead of ' + voteStats.seats + '.</p>'
  }

  document.getElementById('summary').innerHTML = '<h1 class="title is-1">Your vote was worth ' + voteValue + 'x the average!</h1><p>An average candidate needed to receive ' + averageVotesPerSeat + ' votes to get a seat. Your party required ' + votesPerSeat + ' votes per seat. ' + seatComparison
}
